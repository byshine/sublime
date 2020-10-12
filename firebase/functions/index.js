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

const {Storage} = require('@google-cloud/storage')
const storage = new Storage();
const bucket = storage.bucket("classicstyle-2c480.appspot.com")

const Firestore = require('@google-cloud/firestore');
const firestore = new Firestore({
    projectId: "classicstyle-2c480",
    timestampsInSnapshots: true,
});

app.post('/collaborate', (req, res) => {

        const busboy = new Busboy({headers: req.headers});
        const tmpdir = os.tmpdir();
      
        // This object will accumulate all the fields, keyed by their name
        const fields = {};
      
        // This object will accumulate all the uploaded files, keyed by their name.
        const uploads = {};
      
        // This code will process each non-file field in the form.
        busboy.on('field', (fieldname, val) => {
          // TODO(developer): Process submitted field values here
          console.log(`Processed field ${fieldname}: ${val}.`);
          fields[fieldname] = val;
        });
      
        const fileWrites = [];
      
        // This code will process each file uploaded.
        busboy.on('file', (fieldname, file, filename) => {
          // Note: os.tmpdir() points to an in-memory file system on GCF
          // Thus, any files in it must fit in the instance's memory.
          console.log(`Processed file ${filename}`);
          const filepath = path.join(tmpdir, filename);
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
      
          // TODO(developer): Process saved files here
          for (const file in uploads) {
            const filePath = uploads[file].filepath
            console.log("File Path", filePath)
            const fileName = uploads[file].filename
            bucket.upload(filePath, {
                destination: 'images/original/' + fileName
            }).then(result => {
                return new Promise((resolve, reject) => {
                    gm(filePath).strip().interlace('Plane').gaussian('0.05').quality(80).write(filePath, (err, stdout) => {
                        if (err) {
                          reject(err);
                        } else {
                          resolve(stdout);
                        }
                    });
                })
            }).then(() => {
                return bucket.upload(filePath, {
                    destination: 'images/optimized/' + fileName
                })
            }).then(result => {
                console.log("Optimized Result", result[0].metadata)
                return firestore.collection('Test').doc('rTdl1vV5q9RKMdvNR7rL').set({
                    city: 'Vancouver'
                }, { merge: true });
            }).then(result => {
                console.log("Db result", result)
            }).catch((e) => {
                console.error(e)
            })
            .finally(() => {
                fs.unlinkSync(filePath);
            })
         
          res.send();
        }});
        busboy.end(req.rawBody);
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.widgets = functions.https.onRequest(app);

//exports.collaborate = functions.https.onRequest(app);

