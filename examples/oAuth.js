const Authing = require('../dist/authing-js-sdk');

let email = '';
let password = '';
const secret = '42aa3deba3b2c35aaf018acafdf503f8';
const clientId = '5b0dfcff82f4ce00014fdcd4';

const auth = new Authing({
  clientId,
  secret
});

auth.then((validAuth) => {
  email = 'demo@demo.com';
  password = '123456';

  validAuth.login({
    email,
    password
  }).then(() => {
    console.log('登录成功!');
    validAuth.readUserOAuthList().then((res) => {
      console.log('获取OAuth列表成功');
      let oauth;
      for (let i = 0; i < res.length; i += 1) {
        if (res[i].binded === false) {
          oauth = res[i];
          break;
        }
      }
      validAuth.bindOAuth({
        type: oauth.type,
        unionid: '12345678',
        userInfo: '{"uniondid":"12345678","username":"demo"}'
      }).then(() => {
        console.log(`绑定${oauth.type}账号成功`);
        validAuth.unbindOAuth({
          type: 'github'
        }).then(() => {
          console.log(`解绑${oauth.type}账号成功`);
        }).catch((e) => {
          console.log(e);
        });
      }).catch((e) => {
        console.log(e);
      });
    }).catch((e) => {
      console.log(e);
    });
  }).catch((error) => {
    console.log('登录失败!');
    console.log(error);
  });
});
