const functions = require('firebase-functions');
const gm = require('gm').subClass({imageMagick: true});
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

const path = require('path');
const os = require('os');
const fs = require('fs');
const Busboy = require('busboy');
app.use(cors({ origin: true }));
const uid= require('uid');

const {Storage} = require('@google-cloud/storage')
const storage = new Storage();
const bucket = storage.bucket("classicstyle-2c480.appspot.com")
const Firestore = require('@google-cloud/firestore');
const firestore = new Firestore({
    projectId: "classicstyle-2c480",
    timestampsInSnapshots: true,
});

app.get('/photos', async (req, res) => {
  const photos = await firestore.collection('photos').get()
  return res.send(photos.docs.map(doc => doc.data()))
})



function appendToFilename(filename, string){
    var dotIndex = filename.lastIndexOf(".");
    if (dotIndex === -1) return filename + string;
    else return filename.substring(0, dotIndex) + string + filename.substring(dotIndex);
} 

app.post('/collaborate', (req, res) => {

        const busboy = new Busboy({headers: req.headers});
        const tmpdir = os.tmpdir();
      
        const fields = {};
  
        const uploads = {};
    
        busboy.on('field', (fieldname, val) => {
          console.log(`Processed field ${fieldname}: ${val}.`);
          fields[fieldname] = val;
        });
      
        const fileWrites = [];
      
        busboy.on('file', (fieldname, file, filename) => {
          console.log(`Processed file ${filename}`);
          const id = uid.uid()
          const filepath = path.join(tmpdir, appendToFilename(filename, `_${id}`) );
          uploads[fieldname] = {
              filepath,
              filename
          }
      
          const writeStream = fs.createWriteStream(filepath);
          file.pipe(writeStream);
      
          // File was processed by Busboy; wait for it to be written.
          // Note: GCF may not persist saved files across invocations.
          // Persistent files must be kept in other locations
          // (such as Cloud Storage buckets).
          const promise = new Promise((resolve, reject) => {
            file.on('end', () => {
              writeStream.end();
            });
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
          });
          fileWrites.push(promise);
        });
      
        // Triggered once all uploaded files are processed by Busboy.
        // We still need to wait for the disk writes (saves) to complete.
        busboy.on('finish', async () => {
          await Promise.all(fileWrites);

          const { filename, filepath } = uploads.file;
          
          const filepaths = [
            filepath,
            appendToFilename(filepath, `_small`),
            appendToFilename(filepath, `_medium`),
            appendToFilename(filepath, `_large`)              
          ]

          await Promise.all([
            optimizeImage(filepath, filepaths[1], 416),
            optimizeImage(filepath, filepaths[2], 600),
            optimizeImage(filepath, filepaths[3], 800)
          ]) 
        
          const uploadResults = await Promise.all([
            bucket.upload(filepaths[0]),
            bucket.upload(filepaths[1]),
            bucket.upload(filepaths[2]),
            bucket.upload(filepaths[3])
          ])

          fields.original = uploadResults[0][1].name
          fields.small = uploadResults[1][1].name
          fields.medium = uploadResults[2][1].name
          fields.large = uploadResults[3][1].name

          await firestore.collection('photos').add(fields, { merge: true });
               

          for (let i = 0; i < filepaths.length; i++) {
              fs.unlinkSync(filepaths[i]);
          }

          return res.send();
        });

        busboy.end(req.rawBody);
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.widgets = functions.https.onRequest(app);

//exports.collaborate = functions.https.onRequest(app);


function optimizeImage(filePath, newfilePath, resize) {
  if (!resize) {
    return new Promise((resolve, reject) => {
      gm(filePath).strip().interlace('Plane').gaussian('0.05').quality(100)
      write(newfilePath, (err, stdout) => {
          if (err) {
            reject(err);
          } else {
            resolve(stdout);
          }
      })});
  } else {
    return new Promise((resolve, reject) => {
      gm(filePath).strip().interlace('Plane').gaussian('0.05').quality(100).resize(resize || 600).
      write(newfilePath, (err, stdout) => {
          if (err) {
            reject(err);
          } else {
            resolve(stdout);
          }
      })});
  }
}
