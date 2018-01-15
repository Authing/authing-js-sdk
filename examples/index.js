var Authing = require('../index.js');

var email = "xxx@memect.co";
var password = "123456";
var secret = '5cf63e2b82f2d6b41bdcfec8b483b740';
var clientId = '5a48b6ae863b3b0001893bbc';

var auth = new Authing({
	clientId: clientId,
	secret: secret,
	host: {
		user: 'http://users.authing.dodora.cn/graphql',
		oauth: 'http://oauth.authing.dodora.cn/graphql'
	}
});

auth.then(function(auth) {

	// console.log(auth);

	email = "597055914@qq.com";
	password = "123456";

	auth.readOAuthList().then(function(list) {
		console.log('获取OAuth列表成功!');
		console.log(list);
	}).catch(function(error) {
		console.log('获取OAuth列表失败!');
		console.log(error);
	});

	auth.login({
		email: email,
		password: password
	}).then(function(user) {
		console.log('登录成功!');
		console.log(user);

		auth.list().then(function(res) {
			console.log('获取用户列表成功!');
			console.log(res);
		}).catch(function(error) {
			console.log('获取用户列表失败!');
			console.log(error);
		});

		auth.update({
			_id: user._id,
			nickname: 'fuckuaxxa',
			username: 'xxxxxxxxx'
		})
		.then(function(res) {
			console.log('修改资料成功!')
			console.log(res);
		}).catch(function(error) {
			console.log('修改资料失败!')
			console.log(error);
		});

	}).catch(function(error) {
		console.log('登录失败!')
		console.log(error);
	});

	email = "xxxxx@qqm";
	password = "123456";

	auth.register({
		email: email,
		password: password
	}).then(function(res) {
		console.log('注册成功!')
		console.log(res);
	}).catch(function(error) {
		console.log('注册失败!')
		console.log(error);
	});


});

