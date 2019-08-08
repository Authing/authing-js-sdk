/* eslint-disable no-underscore-dangle */
const Authing = require('../dist/authing-js-sdk.js');

const secret = '91d61f8ab38feea2a61bdfa85d604954';
const clientId = '5cc2a350e056c76eea71db8a';

const auth = new Authing({
  clientId,
  secret,
//   host: {
//     user: 'http://localhost:5555/graphql',
//     oauth: 'http://localhost:5556/graphql'
//   },
  preflight: true
}).catch(err => console.log('err'));

auth.then((authing) => {
  console.log(authing);
});
