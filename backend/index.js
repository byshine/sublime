const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const multer = require('@koa/multer');
const fs = require('fs');


const app = new Koa();
app.use(bodyParser());
const upload = multer(); // note you can pass `multer` options here
const router = new Router();
router.prefix('/api')

router.get('/hello', (ctx) => {
    ctx.body = "Hello Worlds"
})

router.post('/collaborate', upload.single('file'), (ctx) => {
    console.log('ctx.request.file', ctx.request.file);
    console.log('ctx.file', ctx.file);
    console.log('ctx.request.body', ctx.request.body);

    fs.writeFile(ctx.file.originalname, ctx.file.buffer, function (err) {
        if (err) return console.log(err);
        console.log('Success');
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
