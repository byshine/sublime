const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
router.prefix('/api')

router.get('/hello', (ctx) => {
    ctx.body = "Hello Worlds"
})

app
 .use(router.routes())
 .use(router.allowedMethods())
 .listen(8000);
