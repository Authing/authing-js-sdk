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
    unionid: 'unionidsample45',
    openid: 'unionidsample44'
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
    if (error.message.code === 2004) {
      // 用户不存在
      validAuth.register({
        unionid: 'unionidsample44',
        openid: 'unionidsample44',
        username: 'unionidsample44',
        registerMethod: 'oauth:wxapp'
      }).then((data) => {
        console.log(data);
      }).catch((e) => {
        console.log(e);
      });
    }
  });
});
