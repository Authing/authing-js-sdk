const Authing = require('../dist/authing-js-sdk');

const secret = '42aa3deba3b2c35aaf018acafdf503f8';
const clientId = '5b0dfcff82f4ce00014fdcd4';

const auth = new Authing({
  clientId,
  secret
});

auth.then((validAuth) => {
  validAuth.decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoienk2NTYxODQ1MjZAMTYzLmNvbSIsImlkIjoiNWIwZGZjZTg4MmY0Y2UwMDAxNGZkY2NlIn0sImlhdCI6MTU1MTE0Mjc0MSwiZXhwIjoxNTUyNDM4NzQxfQ.4LTcs_apbFlqVVLpCAD-l1Wtd16AIPgwoMptGoMq7r8')
    .then((result) => {
      console.log(result);
    }).catch((e) => {
      console.log(e);
    });
}).catch((e) => {
  console.log(e);
});
