var Authing = require('../dist/authing-js-sdk');

var email = "", password = "";
var secret = '42aa3deba3b2c35aaf018acafdf503f8';
var clientId = '5b0dfcff82f4ce00014fdcd4';

var auth = new Authing({
	clientId: clientId,
	secret: secret
});

auth.then(function(auth) {

	email = "demo@demo.com";
    password = "123456";

    auth.login({
        email: email,
        password: password
    }).then(function(user) {
        console.log('登录成功!');
        auth.readUserOAuthList().then(function(res) {
            console.log('获取OAuth列表成功');
            var oauth;
            for(var i = 0; i < res.length; i++) {
                if(res[i].binded === false) {
                    oauth = res[i];
                    break;
                }
            }
            auth.bindOAuth({
                type: oauth.type,
                unionid: '12345678',
                userInfo: '{"uniondid":"12345678","username":"demo"}'
            }).then(function(res) {
                console.log('绑定' + oauth.type + '账号成功');
                auth.unbindOAuth({
                    type: 'github'
                }).then(function(res) {
                    console.log('解绑' + oauth.type + '账号成功');
                }).catch(function(e) {
                    console.log(e)
                });
            }).catch(function(e) {
                console.log(e)
            });
        }).catch(function(e) {
            console.log(e);
        });
    }).catch(function(error) {
        console.log('登录失败!')
        console.log(error);
    });

});