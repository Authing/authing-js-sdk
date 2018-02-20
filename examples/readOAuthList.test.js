var Authing = require('../index.js');

var email = "xxx@memect.co";
var password = "123456";
var secret = 'xxxxxxxxxxxxxxxxxxxxxx';
var clientId = 'xxxxxxxxxxxxxxxxxxxxxx';

var auth = new Authing({
	clientId: clientId,
	secret: secret
});

auth.then(function(auth) {

	auth.readOAuthList().then(function(list) {
		console.log('获取OAuth列表成功!');
		console.log(list);
	}).catch(function(error) {
		console.log('获取OAuth列表失败!');
		console.log(error);
	});

});
