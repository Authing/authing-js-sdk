var Authing = require('../dist/authing-js-sdk');

var secret = 'b41a29583618d8e9de201d5e80db7056';
var clientId = '5a97ede6f8635a00018551a1';

var auth = new Authing({
	clientId: clientId,
	secret: secret
});

auth.then(function(auth) {
	auth.startWXAppScaning({
		redirect: true
	});
});