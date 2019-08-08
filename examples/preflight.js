/* eslint-disable no-underscore-dangle */
const Authing = require('../dist/authing-js-sdk.js');

const secret = 'xxxxxxxx';
const clientId = 'xxx';

const auth = new Authing({
  clientId,
  secret,
  //   host: {
  //     user: 'http://localhost:5555/graphql',
  //     oauth: 'http://localhost:5556/graphql'
  //   },
  preflight: true
});


auth.then((authing) => {
  console.log(authing);
});
