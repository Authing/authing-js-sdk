var Authing = require('../index.js');

var secret = '42aa3deba3b2c35aaf018acafdf503f8';
var clientId = '5b0dfcff82f4ce00014fdcd4';

var auth = new Authing({
    clientId: clientId,
    secret: secret
});

auth.then(function(auth) {
    auth.decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoieGlleWFuZ0Bkb2RvcmEuY24iLCJpZCI6IjVhNTk3ZjM1MDg1YTIwMDAxNDRhMTBlZCIsImNsaWVudElkIjoiNTlmODZiNDgzMmViMjgwNzFiZGQ5MjE0In0sImlhdCI6MTUzNTUxNjk0OSwiZXhwIjoxNTM2ODEyOTQ5fQ.Fl800nI8-hIqmtq7UKv6N5YfqGRul_A0SirNlFnVTtM')
        .then(result => {
            console.log(result);
        }).catch(e => {
            console.log(e);
        });
}).catch(e => {
    console.log(e);
});
