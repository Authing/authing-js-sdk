const Authing = require('../dist/authing-js-sdk.js');

const secret = '427e24d3b7e289ae9469ab6724dc7ff0';
const clientId = '5a9fa26cf8635a000185528c';

const auth = new Authing({
  clientId,
  secret,
});

auth.then((validAuth) => {
  validAuth.register({
    username: 'fuck',
    password: '123456x'
  }).then((userInfo) => {
    console.log('注册成功');
    console.log(userInfo);
    validAuth.login({
      username: 'fuck',
      password: '123456x'
    }).then((loginInfo) => {
      console.log('登录成功');
      console.log(loginInfo);
    }).catch((error) => {
      console.log('登录失败!');
      console.log(error);
    });
  }).catch((error) => {
    console.log('注册失败!');
    console.log(error);
  });
});
