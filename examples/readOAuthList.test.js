const Authing = require('../dist/authing-js-sdk.js');

const secret = '427e24d3b7e289ae9469ab6724dc7ff0';
const clientId = '5a9fa26cf8635a000185528c';

const auth = new Authing({
  clientId,
  secret
});

auth.then((validAuth) => {
  validAuth.readOAuthList().then((list) => {
    console.log('获取OAuth列表成功!');
    console.log(list);
  }).catch((error) => {
    console.log('获取OAuth列表失败!');
    console.log(error);
  });
});
