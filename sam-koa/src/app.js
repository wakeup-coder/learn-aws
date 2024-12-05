const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app
  .use(router.routes())
  .use(router.allowedMethods());

router.get('/hello', async (ctx) => {
  ctx.body = 'Koa Lambda demo.';
});

module.exports = app;
