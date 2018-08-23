var Authing = require('../index.js');

var email = "xxx@memect.co";
var password = "123456";
var secret = '427e24d3b7e289ae9469ab6724dc7ff0';
var clientId = '5a9fa26cf8635a000185528c';

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
