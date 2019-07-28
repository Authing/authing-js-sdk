const Authing = require('../dist/authing-js-sdk');

const secret = '84f722faeb08e6a1f00c505b96092706';
const clientId = '5d3d38c7fbf29055ce45c0b4';

const auth = new Authing({
  clientId,
  secret,
  host: {
    user: 'http://localhost:5555/graphql',
    oauth: 'http://localhost:5556/graphql'
  }
});

auth.then((validAuth) => {
  validAuth.login({
    unionid: 'unionidsample33',
    openid: 'unionidsample33'
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
    if (error.message.code === 2004) {
      // 用户不存在
      validAuth.register({
        unionid: 'unionidsample33',
        openid: 'unionidsample33',
        username: 'unionidsample33',
        registerMethod: 'oauth:wechat'
      }).then((data) => {
        console.log(data);
      }).catch((e) => {
        console.log(e);
      });
    }
  });
});
