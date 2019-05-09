const Authing = require('../dist/authing-js-sdk');

const secret = 'b41a29583618d8e9de201d5e80db7056';
const clientId = '5a97ede6f8635a00018551a1';

const auth = new Authing({
  clientId,
  secret
});

auth.then((validAuth) => {
  validAuth.login({
    unionid: 'unionidsample4'
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    if (error.message.code === 2004) {
      // 用户不存在
      validAuth.register({
        unionid: 'unionidsample2',
        username: 'unionidsample2',
        registerMethod: 'oauth:wechat'
      }).then((data) => {
        console.log(data);
      }).catch((e) => {
        console.log(e);
      });
    }
  });
});
