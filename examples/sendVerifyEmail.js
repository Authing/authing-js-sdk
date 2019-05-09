const Authing = require('../dist/authing-js-sdk.js');

const secret = '427e24d3b7e289ae9469ab6724dc7ff0';
const clientId = '5a9fa26cf8635a000185528c';

const auth = new Authing({
  clientId,
  secret
});

auth.then((validAuth) => {
  validAuth.sendVerifyEmail({
    email: '597055914@qq.com'
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log('发送失败');
    console.log(error);
  });
});
