const Router = require('koa-router');

let router = new Router({prefix: '/user'});

router.post('/login', async(ctx, next) => {
  const {userName, pass} = ctx.request.body;
  // mock
  if (userName === 'xinconan' && pass === 'abc123') {
    ctx.body = {
      code: 0,
      data: true,
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '用户名或密码不正确'
    }
  }
})


module.exports = router;
// export default router;