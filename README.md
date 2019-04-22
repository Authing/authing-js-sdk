# authing.js

----------

Authing 的 JavaScript SDK 支持 **Angular.js**, **React.js**, **Vue.js** 以及 **Node.js**.我们提供了完全一致的接口.

[点击体验](http://sample.authing.cn)

<img width="300" height="300" src="https://cdn.authing.cn/sdk/guide/image/authing-login-form.png"/>

## 安装

----------

#### NPM

当构建大规模应用时，我们推荐使用 ```npm``` 进行安装， 它可以与一些模块打包工具很好地配合使用，如 ```Webpack```， ```Browserify。```

``` shell
# latest stable
$ npm install authing-js-sdk --save
```
----------

## 初始化

先从 [Authing 控制台](https://authing.cn/dashboard) 中[获取 Client ID](https://docs.authing.cn/#/quick_start/howto)。

为保证 secret 安全，在服务端的初始化和客户端的初始化有所不同。

### 服务端

服务端可直接传入 `clientId` 和 `secret`。

``` javascript
const auth = new Authing({
	clientId: 'your_client_id',
	secret: 'your_client_secret'
});

auth.then((authing) => {
	// authing.login
	// authing.register
	// ...
});
```

### 客户端

#### 客户端需传入三个参数

- **clientId**
	- 应用 ID，可从 [Authing 控制台](https://authing.cn/dashboard)中[获取](https://docs.authing.cn/#/quick_start/howto)。
- **timestamp**
    - 当前时间戳
- **nonce**
	- 一个随机数字，不要超过十位数

#### 示例

``` javascript
const auth = new Authing({
	clientId: 'your_client_id',
	timestamp: Math.round(new Date() / 1000),
	nonce: Math.ceil(Math.random() * Math.pow(10, 6)),
});
auth.then((authing) => {
	// authing.login
	// authing.register
	// ...
});
```

### 使用 accessToken

除了使用 clientId 和 secret 外，我们还支持传入 accessToken（需要 v1.5.0 版本及以上），示例如下：

``` javascript
  const auth = new Authing({
    accessToken: '71fc55de0fccba1b3f7feb68277e4f379a1019e5'
  });
  auth.then((authing) => {
		// authing.login
		// authing.register
		// ...
  });
```

使用 accessToken 适用于 OAuth 场景，获取 accessToken 的方法请参考 [OAuth 授权流程](https://docs.authing.cn/#/oauthProvider/authorize)。

### 使用方法

Authing SDK 的所有 API 都支持 **Promise**。

``` javascript
const Authing = require('authing-js-sdk');

// 对 Client ID 和 Client Secret 进行验证，获取 Access Token
const auth = new Authing({
	// 若在浏览器端请使用 timestamp + nonce + clientId 的形式	
	clientId: 'your_client_id',
	secret: 'your_app_secret' 
});

auth.then(function(authing) {

	//验证成功后返回新的 authing-js-sdk 实例(authing)，可以将此实例挂在全局

	authing.login({
		email: 'test@testmail.com',
		password: 'testpassword'
	}).then(function(user) {
		console.log(user);	
	}).catch(function(error) {
		console.log(error);	
	});
	
}).catch(function(error) {
	//验证失败
	console.log(error);
});

```

如果你使用 `ES6+` 推荐用 `await` 处理异步，示例如下：

``` javascript
import Authing from 'authing-js-sdk';

const main = async () => {

	//使用async时需要使用 try...catch... 捕捉错误

	let auth;

	try{
		auth = await new Authing({
			// 若在浏览器端请使用 timestamp + nonce + clientId 的形式			
			clientId: 'your_client_id',
			secret: 'your_app_secret'
		});
	}catch(error) {
		console.log('Authing 验证失败:', error);
	}

	if(auth) {

		let user;

		try {
			user = await auth.login({
				email: 'test@testmail.com',
				password: 'testpassword'
			});
		}catch(error) {
			console.log('登录失败:', error);
		}

		if(user) {
			console.log('login success');
		}else {
			console.log('login failed');
		}

	}

}

main();

```

## API

全部 API 请参考：[用户接口](https://docs.authing.cn/#/user_service/user_service)。

## 小程序扫码登录

小程序扫码登录指使用 Authing 小程序 ``身份管家`` 执行微信登录。
示例：[小程序扫码登录](http://sample.authing.cn)

![扫码 demo](https://usercontents.authing.cn/wxapp-scaning-demo.gif)

### 基础用法

使用 ``startWXAppScaning`` 方法： 

``` javascript

const Authing = require('authing-js-sdk');

const auth = new Authing({
	clientId: 'your_client_id',
	timestamp: Math.round(new Date() / 1000),
	nonce: Math.ceil(Math.random() * Math.pow(10, 6)),
});

auth.then(function(authing) {

	authing.startWXAppScaning({
  	mount: 'qrcode-node', //二维码挂载点的 HTML 元素 ID，如不写则默认漂浮在文档中间
	});
	
})

```

扫码完成后会自动跳到用户配置的URL上。

### 参数说明

``` javascript

authing.startWXAppScaning({
  	mount: 'qrcode-node', // 二维码挂载点，如不写则默认漂浮在文档中间
  	redirect: true, // 是否执行跳转（在用户后台配置的 URL），默认为 true，相关用户信息回传至 url 上
  	onSuccess: function(res) {}, // 登录成功后回调函数，redirect 为 true 时不回调此函数
  	onError: function(error) {}, // 登录失败后回调函数，一般为网络问题
  	onIntervalStarting: function(intervalNum) {}, // 轮询时的回调函数，intervalNum 为 setInterval 返回的数值，可使用 clearInterval 停止轮询
  	interval: 1500, // 每隔多少秒检查一次，默认 1500
  	tips: '搜索小程序 <strong>身份管家</strong> 扫码登录', // 提示信息，可写 HTML
});

```

了解更多，请查看：[使用小程序扫码登录](https://docs.authing.cn/#/quick_start/wxapp_scan_login)

## 自定义请求链接

```Authing``` 构造函数包含一个名为 ```host``` 对象，可接收自定义的请求链接（适合私有部署 Authing 的用户使用），使用方法如下：

``` javascript

const auth = new Authing({
	clientId: 'xxxx',
	secret: 'xxxxxx',
	host: {
		user: 'https://users.authing.cn/graphql',
		oauth: 'https://oauth.authing.cn/graphql'
	}
});

```

```host``` 对象中 ```user``` 和 ```oauth``` 的默认值是 Authing 官方的请求链接：

- [https://users.authing.cn/graphql](https://users.authing.cn/graphql)
- [https://oauth.authing.cn/graphql](https://oauth.authing.cn/graphql)

## Node.js其他生态中间件

1. [express-middleware](https://github.com/Authing/express-middleware)
2. [vue-authing](https://github.com/Authing/vue-authing)

当在浏览器使用时，我们会将用户 token 以 '_authing_token' 字段存在 localStorage 中，后面都会从 localStorage 中读取并进行验证。

了解更多报错的详情，请查看[错误代码](https://docs.authing.cn/#/quick_start/error_code)。

获取 Client ID 和 Client Secret，请[点击这里](https://docs.authing.cn/#/quick_start/howto)。
