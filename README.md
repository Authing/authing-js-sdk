# authing.js

----------

Authing 的 JavaScript SDK 支持 **Angular.js**, **React.js**, **Vue.js** 以及 **Node.js**.我们提供了完全一致的接口.

[点击体验](http://sample.authing.cn)

<img width="300" height="300" src="https://cdn.authing.cn/sdk/guide/image/authing-login-form.png"/>

## 安装

----------

[![Build Status](https://travis-ci.org/Authing/authing.js.svg?branch=next)](https://travis-ci.org/Authing/authing.js) [![codebeat badge](https://codebeat.co/badges/428bd4ce-0ad9-43c4-9c88-b8037a483cfa)](https://codebeat.co/projects/github-com-authing-authing-js-next) [![codecov](https://codecov.io/gh/Authing/authing.js/branch/next/graph/badge.svg)](https://codecov.io/gh/Authing/authing.js)

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

### 超时说明

Authing SDK 的默认请求超时时间是 10s，如果想加大或减小超时时间，请在 SDK 中指定 `timeout` 参数，以下以在浏览器中初始化为例：

``` javascript
const auth = new Authing({
	clientId: 'your_client_id',
	timestamp: Math.round(new Date() / 1000),
	nonce: Math.ceil(Math.random() * Math.pow(10, 6)),
	timeout: 20000 // 20 秒超时
});
auth.then((authing) => {
	// authing.login
	// authing.register
	// ...
});
```

### 其他参数

- **preflight**
	- 是否开启网络状况预检，默认为 false，此参数适用于检查用户的网络是否屏蔽了 authing.cn 这个域名（某些企业的内网会屏蔽这个域名），检查成功不进行任何通知，检查失败后会抛出错误，开发者可在 `promise` 的 `catch` 或 `try...catch...` 中捕获错误。**执行预检之后会导致 SDK 初始化速度变慢，请谨慎使用。**
- **timeout**
    - 超时时间，默认为 10000（10 秒）。

## API

全部 API 请参考：[用户接口](https://docs.authing.cn/authing/sdk/authing-sdk-for-web)。

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
	noSecurityCheck: true, // 关闭安全检测，网络安全预检在某些特殊网络环境下可能导致 SDK 无法正常初始化
	enableFetchPhone: true // 启用获取手机号
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
	onQRCodeLoad: function(qRcode) {}, // 小程序码获取成功后的回调函数，qRcode 为小程序码的相关信息，是一个对象
	onQRCodeShow: function(qRcode) {}, // 小程序码图片加载完成后的回调函数，qRcode 为小程序码的相关信息，是一个对象
  	interval: 1500, // 每隔多少秒检查一次，默认 1500
  	tips: '搜索小程序 <strong>身份管家</strong> 扫码登录', // 提示信息，可写 HTML
});

```

了解更多，请查看：[使用小程序扫码登录](https://docs.authing.cn/authing/advanced/wxapp-qrcode)

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

获取 Client ID 和 Client Secret，请[点击这里](https://learn.authing.cn/authing/others/faq#ru-he-huo-qu-client-id-he-client-secret)。
