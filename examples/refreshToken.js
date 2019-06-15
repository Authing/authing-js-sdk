const Authing = require('../dist/authing-js-sdk');

const secret = '801b071780162742214e90f9e9364e5d';
const clientId = '5d04639787d6e90496a710b8';

const auth = new Authing({
  clientId,
  secret,
  host: {
    oauth: 'http://localhost:5556/graphql',
    user: 'http://localhost:5555/graphql'
  }
});

auth.then(async (authing) => {
  authing.login({
    username: 'ivydom',
    password: '123456'
  }).then((user) => {
    console.log('res-------', user);
    authing.refreshToken({
      // eslint-disable-next-line no-underscore-dangle
      user: user._id
    }).then((token) => {
        console.log(token);
        // eslint-disable-next-line no-underscore-dangle
        authing.user({
            id: user._id
        }).then(newUser => console.log(newUser));
    }).catch(error => console.log(error));
  }).catch((err) => {
    console.log('err', err);
  });
});
