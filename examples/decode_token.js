var Authing = require('../index.js');

var secret = '42aa3deba3b2c35aaf018acafdf503f8';
var clientId = '5b0dfcff82f4ce00014fdcd4';

var auth = new Authing({
    clientId: clientId,
    secret: secret
});

auth.then(function(auth) {

    let result = auth.decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiIiwidW5pb25pZCI6Im9lU0RUNUxiZ2k3R3Nud3hIS2tpc3BtWFpxRXMiLCJpZCI6IjViMmY3ZTNlZjc5ZGUyMDAwMWJlZjllNyIsImNsaWVudElkIjoiNWIwMTNkMGIwOTZhYTYwMDAxY2IyNmY2In0sImlhdCI6MTUyOTgzOTE2NiwiZXhwIjoxNTMxMTM1MTY2fQ.Y-29y6rPNUhexw9Z07qOMkSbzyMNOFvTB7YTb4lJUNA');
    console.log(result);

});
