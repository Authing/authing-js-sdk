/* eslint-disable no-underscore-dangle */
const Authing = require('../dist/authing-js-sdk.js');

let email = '';
let password = '';
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
  email = '597055914@qq.com';
  password = '123456';

  validAuth.readOAuthList().then((list) => {
    console.log('获取OAuth列表成功!');
    console.log(list);
  }).catch((error) => {
    console.log('获取OAuth列表失败!');
    console.log(error);
  });

  validAuth.login({
    email,
    password
  }).then((user) => {
    console.log('登录成功!');
    console.log(user);

    validAuth.checkLoginStatus(user.token).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });

    validAuth.list().then((res) => {
      console.log('获取用户列表成功!');
      console.log(res);
    }).catch((error) => {
      console.log('获取用户列表失败!');
      console.log(error);
    });

    validAuth.update({
      _id: user._id,
      nickname: 'fuckuaxxa',
      username: 'xxxxxxxxx'
    })
      .then((res) => {
        console.log('修改资料成功!');
        console.log(res);

        validAuth.remove(res._id)
          .then((res2) => {
            console.log('删除用户成功');
            console.log(res2);
          })
          .catch((error) => {
            console.log('删除用户失败');
            console.log(error);
          });
      }).catch((error) => {
        console.log('修改资料失败!');
        console.log(error);
      });
  }).catch((error) => {
    console.log('登录失败!');
    console.log(error);
  });

  validAuth.register({
    email,
    password
  }).then((res) => {
    console.log('注册成功!');
    console.log(res);
  }).catch((error) => {
    console.log('注册失败!');
    console.log(error);
  });
});
