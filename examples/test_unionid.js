var Authing = require('../dist/authing-js-sdk');

var secret = 'b41a29583618d8e9de201d5e80db7056';
var clientId = '5a97ede6f8635a00018551a1';

var auth = new Authing({
	clientId: clientId,
	secret: secret
});

auth.then(function(auth) {
	auth.login({
		unionid: 'unionidsample4'
	}).then(function(data) {
		console.log(data);
	}).catch(function(error) {
		if(error.message.code == 2004) {
			//用户不存在
			auth.register({
				unionid: 'unionidsample2',
				username: 'unionidsample2',
				registerMethod: 'oauth:wechat'
			}).then(function(data) {
				console.log(data);
			}).catch(function(error) {
				console.log(error);
			});	
		}
	});
});