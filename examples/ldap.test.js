const Authing = require('../dist/authing-js-sdk');

const secret = '1f00fee1ff5580fd29e293e11e928dfc';
const clientId = '5ca4027c8a362c822e26d04f';

const auth = new Authing({
  clientId,
  secret,
  host: {
    oauth: 'http://localhost:5556/graphql',
    user: 'http://localhost:5555/graphql'
  }
});

auth.then(async (authing) => {
  authing.loginByLDAP({
    username: 'tesla',
    password: 'password'
  }).then((res) => {
    console.log('res-------', res);
  }).catch((err) => {
    console.log('err', err);
  });
});
