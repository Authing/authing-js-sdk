var Authing = require('../dist/authing-js-sdk');

var email = "", password = "";
var secret = '42aa3deba3b2c35aaf018acafdf503f8';
var clientId = '5b0dfcff82f4ce00014fdcd4';

var auth = new Authing({
	clientId: clientId,
	secret: secret
});

auth.then(function(auth) {

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

		auth.checkLoginStatus(user.token).then(function(res) {
			console.log(res);
		}).catch(function(error) {
			console.log(error);
		});

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
			console.log('修改资料成功!');
			console.log(res);

			auth.remove(res._id)
			.then(function(res) {
				console.log('删除用户成功')
				console.log(res);
			})
			.catch(function(error) {
				console.log('删除用户失败')
				console.log(error);
			})

		}).catch(function(error) {
			console.log('修改资料失败!');
			console.log(error);
		});

	}).catch(function(error) {
		console.log('登录失败!')
		console.log(error);
	});

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