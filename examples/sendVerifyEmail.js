var Authing = require('../dist/authing-js-sdk.js');

var secret = '427e24d3b7e289ae9469ab6724dc7ff0';
var clientId = '5a9fa26cf8635a000185528c';

var auth = new Authing({
	clientId: clientId,
	secret: secret
});

auth.then(function(auth) {
	auth.sendVerifyEmail({
		email: '597055914@qq.com'
	}).then(function(data) {
		console.log(data);
	}).catch(function(error) {
		console.log('发送失败');
		console.log(error);
	});
});