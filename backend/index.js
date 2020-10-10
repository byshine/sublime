const imageService = require('./services/image')
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const multer = require('@koa/multer');
const fs = require('fs');
const path = require('path')

const app = new Koa();
app.use(bodyParser());
const upload = multer(); // note you can pass `multer` options here
const router = new Router();
router.prefix('/api')

router.post('/collaborate', upload.single('file'), (ctx) => {

    const imageName = ctx.file.originalname
    const directory = `${path.resolve(__dirname)}/files/images/original/`
    const imagePath = directory + imageName

    fs.writeFile(imagePath, ctx.file.buffer, function (err) {
        if (err) return console.error(err);
        imageService.optimize(imageName).then(result =>{
            console.log("Optimized?", result)
        }).catch((e) => {
            console.error(e)
        }) 
    });
    
    ctx.body = {
        status: 'success',
        json: ctx.request.body
    };
});

app
 .use(router.routes())
 .use(router.allowedMethods())
 .listen(8000);
