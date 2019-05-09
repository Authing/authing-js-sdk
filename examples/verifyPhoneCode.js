const Authing = require('../dist/authing-js-sdk');

const secret = '03bb8b2fca823137c7dec63fd0029fc2';
const clientId = '5c344f102e450b000170190a';
const phone = '18000179176';
const code = 4138;

const auth = new Authing({
  clientId,
  secret
});

auth.then(async (validAuth) => {
  validAuth.loginByPhoneCode({
    phone,
    phoneCode: code
  }).then((res) => {
    console.log('res-------', res);
  }).catch((err) => {
    console.log('err', err);
  });
});
