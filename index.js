/* jshint esversion: 6 */

const axios = require('axios');
const configs = require('./src/configs');
const GraphQLClient = require('./src/graphql');
const _encryption = require('./src/_encryption');
const sha1 = require('js-sha1');

var Authing = function(opts) {
	var self = this;
	this.opts = opts;

	if(opts.host) {
		configs.services.user.host = opts.host.user || configs.services.user.host;
		configs.services.oauth.host = opts.host.oauth || configs.services.oauth.host;
	}

	this.ownerAuth = {
		authed: false,
		authSuccess: false,
		token: null
	};

	this.userAuth = {
		authed: false,
		authSuccess: false,
		token: null
	};	

	this.initUserClient();
	this.initOwnerClient();
	this.initOAuthClient();

	if (!opts.accessToken) {
		if(!opts.clientId) {
			throw 'clientId is not provided';
		}
	
		if(configs.inBrowser) {
			if (opts.secret) {
				throw '检测到你处于浏览器环境，当前已不推荐在浏览器环境中暴露 secret，请到 https://docs.authing.cn/#/quick_start/javascript 查看最新的初始化方式';
			}
	
			if (!opts.timestamp) {
				throw 'timestamp is not provided';
			}
	
			if (!opts.nonce) {
				throw 'nonce is not provided';
			}
			
			this.opts.signature = sha1(opts.timestamp + opts.nonce.toString());
		} else {
			if(!opts.secret) {
				throw 'app secret is not provided';
			}	
		}
	}

	return this._auth().then(function(token) {
		if(token) {
			self.initOwnerClient(token);
			self._loginFromLocalStorage();
		}else {
			self.ownerAuth.authed = true;
			self.ownerAuth.authSuccess = false;
			throw 'auth failed, please check your secret and client ID.';			
		}
		return self;
	}).catch(function(error) {
		self.ownerAuth.authed = true;
		self.ownerAuth.authSuccess = false;
		throw 'auth failed: ' + error.message.message;
	});
}

Authing.prototype = {

	constructor: Authing,

	_initClient: function(token) {
		const conf = {
			baseURL: configs.services.user.host
		};
		if(token) {
			conf.headers = {
				'Authorization': `Bearer ${token}`
			};
		}
		return new GraphQLClient(conf);
	},

	oAuthClientByUserToken() {
		this.haveLogined();
		let token = this.userAuth.token;
		if(!this._oAuthClientByUserToken) {
			this._oAuthClientByUserToken = new GraphQLClient({
				baseURL: configs.services.oauth.host,
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
		}
		return this._oAuthClientByUserToken;
	},

	initUserClient: function(token) {
		if(token) {
			this.userAuth = {
				authed: true,
				authSuccess: true,
				token: token
			};
			if(configs.inBrowser) {
				localStorage.setItem('_authing_token', token);
			}
		}
		this.UserClient = this._initClient(token);
	},

	initOwnerClient: function(token) {
		if(token) {
			this.ownerAuth = {
				authed: true,
				authSuccess: true,
				token: token
			};
		}
		this.ownerClient = this._initClient(token);
	},

	initOAuthClient: function() {
		this.OAuthClient = new GraphQLClient({
			baseURL: configs.services.oauth.host
		});
	},

	_auth: function() {

		let authOpts = {
			baseURL: configs.services.user.host,
		};

		if (this.opts.accessToken) {
			authOpts['headers'] = {
				Authorization: `Bearer ${this.opts.accessToken}`,
			};
		}

		if(!this._AuthService) {
			this._AuthService = new GraphQLClient(authOpts);
		}

		if (this.opts.accessToken && this._AuthService) {
			return new Promise((resolve) => {
				resolve(this.opts.accessToken);
			});
		}

		let options = {
			secret: this.opts.secret,
			clientId: this.opts.clientId,
		}

		var self = this;

		let query = '';

		if (configs.inBrowser) {
			options = {
				clientId: this.opts.clientId,
				timestamp: this.opts.timestamp,
				nonce: this.opts.nonce,
				signature: this.opts.signature,
			}
			query = `query {
				getAccessTokenByAppSecret(timestamp: "${options.timestamp}", clientId: "${options.clientId}", nonce: ${options.nonce}, signature: "${options.signature}")
			}`;
		} else {
			query = `query {
				getAccessTokenByAppSecret(secret: "${options.secret}", clientId: "${options.clientId}")
			}`;
		}

		return this._AuthService.request({
			query,
		})
		.then(function(data) {
			self._AuthService = new GraphQLClient({
				baseURL: configs.services.user.host,
				headers: {
					Authorization: `Bearer ${data.getAccessTokenByAppSecret}`,
				}
			});	
			return data.getAccessTokenByAppSecret;
		});
	},

	_loginFromLocalStorage: function() {
		var self = this;
		if(configs.inBrowser) {
			var _authing_token = localStorage.getItem('_authing_token');
			if(_authing_token) {
				self.initUserClient(_authing_token);
			}
		}
	},

	checkLoginStatus: function(token) {
		return this.UserClient.request({
			operationName: 'checkLoginStatus',
			query: `query checkLoginStatus($token: String) {
					checkLoginStatus(token: $token) {
						status
						code
						message
					}
				}`, 
			variables: {
				token: token
			}
		}).then(function(res) {
			return res.checkLoginStatus;
		});
	},

	_readOAuthList: function() {

		var self = this;

		this.haveAccess();

		if(!this._OAuthService) {
			this._OAuthService = new GraphQLClient({
				baseURL: configs.services.oauth.host,
				headers: {
					Authorization: `Bearer ${self.ownerAuth.token}`,
				}
			});			
		}
		return this._OAuthService.request({
			operationName: 'getOAuthList',
			query: `query getOAuthList($clientId: String!) {
					ReadOauthList(clientId: $clientId) {
					    _id
					    name
					    image
					    description
					    enabled
					    client
					    user
					    url
					    alias
					}
				}`, 
			variables: {
				clientId: self.opts.clientId				
			}
		})
		.then(function(res) {
			return res.ReadOauthList;
		});
	},

	haveAccess: function() {
		if(!this.ownerAuth.authSuccess) {
			throw 'have no access, please check your secret and client ID.';
		}
	},

	haveLogined: function() {
		if(!this.userAuth.authSuccess) {
			throw 'not logined yet, please login first.';
		}
	},

	_chooseClient: function() {
		if(this.userAuth.authSuccess) {
			return this.UserClient;
		}
		return this.ownerClient;
	},

	_login: function(options) {

		if(!options) {
			throw 'options is not provided.';
		}

		options['registerInClient'] = this.opts.clientId;

		if(options.password) {
			options.password = _encryption(options.password);
		}

		this.haveAccess();

		return this.UserClient.request({
			operationName: 'login',
			query: `mutation login($unionid: String, $email: String, $password: String, $lastIP: String, $registerInClient: String!, $verifyCode: String) {
				    login(unionid: $unionid, email: $email, password: $password, lastIP: $lastIP, registerInClient: $registerInClient, verifyCode: $verifyCode) {
					    _id
					    email
					    emailVerified
					    username
					    nickname
					    company
					    photo
					    browser
					    token
					    tokenExpiredAt
					    loginsCount
					    lastLogin
					    lastIP
					    signedUp
					    blocked
					    isDeleted
				    }
				}`,
			variables: options
		}).then(function(res) {
			return res.login;
		});

	},

	login: function(options) {
		let self = this;
		return this._login(options).then(function(user) {
			if(user) {
				self.initUserClient(user.token);				
			}
			return user;
		});
	},

	register: function(options) {

		this.haveAccess();

		if(!options) {
			throw 'options is not provided';
		}

		options.registerInClient = this.opts.clientId;

		if(options.password) {
			options.password = _encryption(options.password);
		}

		return this.UserClient.request({
			operationName: 'register',
			query: `
				mutation register(
					$unionid: String,
				    $email: String, 
				    $password: String, 
				    $lastIP: String, 
				    $forceLogin: Boolean,
				    $registerInClient: String!,
				    $oauth: String,
				    $username: String,
				    $nickname: String,
				    $registerMethod: String,
						$photo: String,
						$company: String
				) {
				    register(userInfo: {
				    	unionid: $unionid,
				        email: $email,
				        password: $password,
				        lastIP: $lastIP,
				        forceLogin: $forceLogin,
				        registerInClient: $registerInClient,
				        oauth: $oauth,
				        registerMethod: $registerMethod,
				        photo: $photo,
				        username: $username,
								nickname: $nickname,
								company: $company
				    }) {
				        _id,
				        email,
				        emailVerified,
				        username,
				        nickname,
				        company,
				        photo,
				        browser,
				        password,
				        token,
				        group {
				            name
				        },
				        blocked
				    }
				}`,
			variables: options
		})
		.then(function(res) {
			return res.register;
		});
	},

	logout: function(_id) {

		this.haveAccess();

		if(!_id) {
			throw '_id is not provided';
		}

		var self = this;

		this.userAuth = {
			authed: false,
			authSuccess: false,
			token: null
		};
		if(configs.inBrowser) {
			localStorage.removeItem('_authing_token');
		}

		return this.update({
			_id: _id,
			tokenExpiredAt: 0
		});

	},

	user: function(options) {
		this.haveAccess();
		if(!options) {
			throw 'options is not provided';
		}
		if(!options.id) {
			throw 'id in options is not provided';
		}
		options.registerInClient = this.opts.clientId;
		
		var client = this._chooseClient();
		
		return client.request({
			operationName: 'user',
			query: `query user($id: String!, $registerInClient: String!){
				user(id: $id, registerInClient: $registerInClient) {
					_id
					unionid
					email
					emailVerified
					username
					nickname
					company
					photo
					browser
					registerInClient
					registerMethod
					oauth
					token
					tokenExpiredAt
					loginsCount
					lastLogin
					lastIP
					signedUp
					blocked
					isDeleted
					userLocation {
						_id
						when
						where
					}
					userLoginHistory {
						totalCount
						list {
							_id
							when
							success
							ip
							result
						}
					}					
				}
				
			}`,
			variables: options
		}).then(function(res) {
			return res.user;
		});
	},

	userPatch: function(options) {
		this.haveAccess();
		if(!options) {
			throw 'options is not provided';
		}
		if(!options.ids) {
			throw 'ids in options is not provided';
		}
		options.registerInClient = this.opts.clientId;
		
		var client = this._chooseClient();
		
		return client.request({
			operationName: 'userPatch',
			query: `query userPatch($ids: String!){
				userPatch(ids: $ids) {
					list {
						_id
						unionid
						email
						emailVerified
						username
						nickname
						company
						photo
						browser
						registerInClient
						registerMethod
						oauth
						token
						tokenExpiredAt
						loginsCount
						lastLogin
						lastIP
						signedUp
						blocked
						isDeleted
						userLocation {
							_id
							when
							where
						}
						userLoginHistory {
							totalCount
							list {
								_id
								when
								success
								ip
								result
							}
						}
					}
					totalCount
				}
				
			}`,
			variables: options
		}).then(function(res) {
			return res.userPatch;
		});
	},	

	list: function(page, count) {

		this.haveAccess();

		page = page || 1;
		count = count || 10;

		var options = {
			registerInClient: this.opts.clientId,
			page: page,
			count: count
		}

		return this.ownerClient.request({
			operationName: 'users',
			query: `query users($registerInClient: String, $page: Int, $count: Int){
				users(registerInClient: $registerInClient, page: $page, count: $count) {
				    totalCount
				    list {
						_id
						email
						emailVerified
						username
						nickname
						company
						photo
						browser
						password
						registerInClient
						token
						tokenExpiredAt
						loginsCount
						lastLogin
						lastIP
						signedUp
						blocked
						isDeleted
						group {
							_id
							name
							descriptions
							createdAt
						}
						clientType {
							_id
							name
							description
							image
							example
						}
						userLocation {
							_id
							when
							where
						}
						userLoginHistory {
							totalCount
							list{
								_id
								when
								success
								ip
								result
							}
						}
						systemApplicationType {
							_id
							name
							descriptions
							price
						}
					}
				}
			}`,
			variables: options
		}).then(function(res) {
			return res.users;
		});
	},

	remove: function(_id, operator) {

		var self = this;

		this.haveAccess();

		if(!_id) {
			throw '_id is not provided';
		}

		return this.ownerClient.request({
			query: `mutation removeUsers($ids: [String], $registerInClient: String, $operator: String){
				  removeUsers(ids: $ids, registerInClient: $registerInClient, operator: $operator) {
				    _id
				  }
				}`,
			variables: {
				ids: [_id],
				registerInClient: self.opts.clientId,
				operator
			}
		}).then(function(res) {
			return res.removeUsers;
		});	

	},

	_uploadAvatar: function(options) {
		var client = this._chooseClient();
		return client.request({
			operationName: 'qiNiuUploadToken',
			query: `query qiNiuUploadToken {
				qiNiuUploadToken
			}`
		}).then(function(data) {
			return data.qiNiuUploadToken;
		}).then(function(token) {
			if(!token) {
				throw {
					graphQLErrors: [{
						message: {
							message: '获取文件上传token失败'
						}
					}]
				}
			}

			var formData = new FormData();
			formData.append('file', options.photo);
			formData.append('token', token);
			return axios.post('https://upload.qiniup.com/', formData, {
				method: 'post',
				headers: {'Content-Type': 'multipart/form-data'}
			});
		}).then(function(data){
			return data.data;
		}).then(function(data) {
			if(data.key) {
				options.photo = 'https://usercontents.authing.cn/' + data.key
			}
			return options;
		}).catch(function(e) {
			if(e.graphQLErrors) {
				throw e.graphQLErrors[0];
			}
			throw {
				message: {
					message: e
				}
			};
		})
	},

	update: function(options) {

		var self = this;

		this.haveAccess();

		if(!options) {
			throw 'options is not provided';
		}

		if(!options._id) {
			throw '_id in options is not provided';
		}

		if(options.password) {
			if(!options.oldPassword) {
				throw 'oldPasswordin options is not provided'
			}
			options.password = _encryption(options.password);
			options.oldPassword = _encryption(options.oldPassword);
		}

		options['registerInClient'] = self.opts.clientId;

		var 
			keyTypeList = {
				_id: 'String!',
				email: 'String',
				emailVerified: 'Boolean',
				username: 'String',
				nickname: 'String',
				company: 'String',
				photo: 'String',
				oauth: 'String',
				browser: 'String',
				password: 'String',
				oldPassword: 'String',
				registerInClient: 'String!',
				token: 'String',
				tokenExpiredAt: 'String',
				loginsCount: 'Int',
				lastLogin: 'String',
				lastIP: 'String',
				signedUp: 'String',
				blocked: 'Boolean',
				isDeleted: 'Boolean'
			},
			returnFields = `_id
				email
				emailVerified
				username
				nickname
				company
				photo
				browser
				registerInClient
				registerMethod
				oauth
				token
				tokenExpiredAt
				loginsCount
				lastLogin
				lastIP
				signedUp
				blocked
				isDeleted`;

		function generateArgs(options) {
			var _args = [],
				_argsFiller = [],
				_argsString = '';
			for(var key in options) {
				if(keyTypeList[key]) {
					_args.push('$' + key + ': ' + keyTypeList[key]);
					_argsFiller.push(key + ': $' + key);
				}
			}
			_argsString = _args.join(', ');
			return {
				_args: _args,
				_argsString: _argsString,
				_argsFiller: _argsFiller
			}
		}

		var client = this._chooseClient();

		if(options.photo) {
			var photo = options.photo;
			if(typeof photo !== 'string') {
				return this._uploadAvatar(options).then(function(options) {
					var _arg = generateArgs(options);
					return client.request({
						operationName: 'UpdateUser',
						query: `
							mutation UpdateUser(${_arg._argsString}){
							  updateUser(options: {
								  ${_arg._argsFiller.join(', ')}
							  }) {
								${returnFields}
							  }
							}
						`,
						variables: options
					})
				}).then(function(res) {
					return res.updateUser;
				});
			}
		}
		var _arg = generateArgs(options);
		return client.request({
			operationName: 'UpdateUser',
			query: `
				mutation UpdateUser(${_arg._argsString}){
				  updateUser(options: {
				  	${_arg._argsFiller.join(', ')}
				  }) {
				    ${returnFields}
				  }
				}
			`,
			variables: options
		}).then(function(res) {
			return res.updateUser;
		});	
	},

	readOAuthList: function() {
		return this._readOAuthList()
		.then(function(list) {
			if(list) {
				return list.filter(function(item) {
					return item.enabled;
				});
			}else {
				throw {
					message: '获取OAuth列表失败，原因未知'
				}
			}
		});
	},
	
	sendResetPasswordEmail: function(options) {
		if(!options) {
			throw 'options is not provided';
		}
		if(!options.email) {
			throw 'email in options is not provided';
		}
	
		options.client = this.opts.clientId;
		return this.UserClient.request({
			operationName: 'sendResetPasswordEmail',
			query: `
				mutation sendResetPasswordEmail(
					$email: String!,
					$client: String!
				){
					sendResetPasswordEmail(
						email: $email,
						client: $client
					) {
					  	message
					  	code
					}
				}
			`,
			variables: options
		}).then(function(res) {
			return res.sendResetPasswordEmail;
		});
		
	},

	verifyResetPasswordVerifyCode: function(options) {
		
		if(!options) {
			throw 'options is not provided';
		}
		if(!options.email) {
			throw 'email in options is not provided';
		}
		if(!options.verifyCode) {
			throw 'verifyCode in options is not provided';
		}
		options.client = this.opts.clientId;
		return this.UserClient.request({
			operationName: 'verifyResetPasswordVerifyCode',
			query: `
				mutation verifyResetPasswordVerifyCode(
					$email: String!,
					$client: String!,
					$verifyCode: String!
				) {
					verifyResetPasswordVerifyCode(
						email: $email,
						client: $client,
						verifyCode: $verifyCode
					) {
					  	message
					  	code
					}
				}
			`,
			variables: options
		}).then(function(res) {
			return res.verifyResetPasswordVerifyCode;
		});
		
	},

	changePassword: function(options) {
		if(!options) {
			throw 'options is not provided';
		}
		if(!options.email) {
			throw 'email in options is not provided';
		}
		if(!options.password) {
			throw 'password in options is not provided';
		}
		if(!options.verifyCode) {
			throw 'verifyCode in options is not provided';
		}
		options.client = this.opts.clientId;
		options.password = _encryption(options.password)
		return this.UserClient.request({
			operationName: 'changePassword',
			query: `
				mutation changePassword(
					$email: String!,
					$client: String!,
					$password: String!,
					$verifyCode: String!
				){
					changePassword(
						email: $email,
						client: $client,
						password: $password,
						verifyCode: $verifyCode
					) {
						_id
						email
						emailVerified
						username
						nickname
						company
						photo
						browser
						registerInClient
						registerMethod
						oauth
						token
						tokenExpiredAt
						loginsCount
						lastLogin
						lastIP
						signedUp
						blocked
						isDeleted
					}
				}
			`,
			variables: options
		}).then(function(res) {
			return res.changePassword;
		});
	},

	sendVerifyEmail: function(options) {
		if(!options.email) {
			throw 'email in options is not provided';
		}

		options.client = this.opts.clientId;

		return this._AuthService.request({
			operationName: 'sendVerifyEmail',
			query: `
				mutation sendVerifyEmail(
					$email: String!,
					$client: String!
				){
					sendVerifyEmail(
						email: $email,
						client: $client
					) {
						message,
						code,
						status
					}
				}
			`,
			variables: options
		}).then(function(res) {
			return res.sendVerifyEmail;
		});
	},

	selectAvatarFile: function(cb) {
		if(!configs.inBrowser) {
			throw '当前不是浏览器环境，无法选取文件';
		}
		var inputElem =  document.createElement("input");  
		inputElem.type = "file"; 
		inputElem.accept = "image/*";             
		inputElem.onchange = function() {
			cb(inputElem.files[0]);
		};
		inputElem.click();
	},

	decodeToken: function(token) {
		return this.UserClient.request({
			operationName: 'decodeJwtToken',
			query: `query decodeJwtToken($token: String) {
				decodeJwtToken(token: $token) {
						data {
							email
							id
							clientId
						}
						status {
							code
							message
						}
						iat
						exp
					}
				}`, 
			variables: {
				token: token
			}
		}).then(function(res) {
			return res.decodeJwtToken;
		});
	},

	readUserOAuthList(variables) {
		let client = this.oAuthClientByUserToken();
		return client.request({
			operationName: 'notBindOAuthList',
			query: `query notBindOAuthList($user: String, $client: String) {
				notBindOAuthList(user: $user, client: $client) {
					type
					oAuthUrl
					image
					name
					binded
				}
			}`, 
			variables
		}).then(function(res) {
			return res.notBindOAuthList;
		});
	},

	bindOAuth(variables) {
		if(!variables) {
			throw 'options is not provided';
		}
		if(!variables.type) {
			throw 'type in options is not provided';
		}
		if(!variables.unionid) {
			throw 'unionid in options is not provided';
		}
		if(!variables.userInfo) {
			throw 'userInfo in options is not provided';
		}
		
		return this.UserClient.request({
			operationName: 'bindOtherOAuth',
			query: `mutation bindOtherOAuth(
				$user: String, 
				$client: String, 
				$type: String!, 
				$unionid: String!, 
				$userInfo: String!
			) {
				bindOtherOAuth (
					user: $user, 
					client: $client, 
					type: $type, 
					unionid: $unionid, 
					userInfo: $userInfo
				) {
					_id
					user
					client
					type
					userInfo
					unionid
					createdAt
				}
			}`,
			variables
		});
	},

	unbindOAuth(variables) {
		if(!variables) {
			throw 'options is not provided';
		}
		if(!variables.type) {
			throw 'type in options is not provided';
		}
		
		return this.UserClient.request({
			operationName: 'unbindOtherOAuth',
			query: `mutation unbindOtherOAuth(
				$user: String, 
				$client: String,
				$type: String!
			){
				unbindOtherOAuth(
					user: $user,
					client: $client,
					type: $type
				) {
					_id
					user
					client
					type
					userInfo
					unionid
					createdAt
				}
			}`,
			variables
		});
	},

	unbindEmail(variables) {
		return this.UserClient.request({
			operationName: 'unbindEmail',
			query: `mutation unbindEmail(
				$user: String, 
				$client: String,
			){
				unbindEmail(
					user: $user,
					client: $client,
				) {
					_id
					email
					emailVerified
					username
					nickname
					company
					photo
					browser
					registerInClient
					registerMethod
					oauth
					token
					tokenExpiredAt
					loginsCount
					lastLogin
					lastIP
					signedUp
					blocked
					isDeleted
				}
			}`,
			variables
		});
	},

	randomWord: function(randomFlag, min, max) {
	  let str = "",
	    range = min,
	    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
	      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
	      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	  	if (randomFlag) {
	    	range = Math.round(Math.random() * (max - min)) + min;// 任意长度
	  	}

	  	for (let i = 0; i < range; i++) {
	    	let pos = Math.round(Math.random() * (arr.length - 1));
	    	str += arr[pos];
	  	}
	  	
	  	return str;
	},

	genQRCode: function(clientId) {
		var random = this.randomWord(true, 12, 24);
		sessionStorage.randomWord = random;
		return axios.get('https://oauth.authing.cn/oauth/wxapp/qrcode/' + clientId + '?random=' + random);
	},

	checkQR: function() {
		var random = sessionStorage.randomWord || '';
		return axios.post('https://oauth.authing.cn/oauth/wxapp/confirm/qr?random=' + random);
	},

	startWXAppScaning: function(opts) {

		var self = this;

		if(!opts) {
			opts = {};
		}

		var mountNode = opts.mount || 'authing__qrcode-root-node';
		var interval = opts.interval || 1500;
		var tips = opts.tips;

		var redirect = true;

		if(opts.hasOwnProperty('redirect')) {
			if(!opts.redirect) {
				redirect = false;
			}
		}

		var onError = opts.onError;
		var onSuccess = opts.onSuccess;
		var onIntervalStarting = opts.onIntervalStarting;

	var qrcodeNode = document.getElementById(mountNode);
	
	var needGenerate = false;

		if(!qrcodeNode) {
			qrcodeNode = document.createElement('div');
			qrcodeNode.id = mountNode;
			qrcodeNode.style = "z-index: 65535;position: fixed;background: #fff;width: 300px;height: 300px;left: 50%;margin-left: -150px;display: flex;justify-content: center;align-items: center;top: 50%;margin-top: -150px;border: 1px solid #ccc;"        
			document.getElementsByTagName('body')[0].appendChild(qrcodeNode);
			needGenerate = true;
		}else {
			qrcodeNode.style = 'position:relative';
		}

		var styleNode = document.createElement('style'), style = '#authing__retry a:hover{outline:0px;text-decoration:none;}#authing__spinner{position:absolute;left:50%;margin-left:-6px;}.spinner{margin:100px auto;width:20px;height:20px;position:relative}.container1>div,.container2>div,.container3>div{width:6px;height:6px;background-color:#00a1ea;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.2s infinite ease-in-out;animation:bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container{position:absolute;width:100%;height:100%}.container2{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.container3{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.container2 .circle1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.container1 .circle2{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.container2 .circle2{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.container3 .circle2{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.container1 .circle3{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.container2 .circle3{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.container3 .circle3{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.container1 .circle4{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.container2 .circle4{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.container3 .circle4{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}';

		styleNode.type = "text/css";

		if(styleNode.styleSheet) {
			styleNode.styleSheet.cssText = style;
		}else {
			styleNode.innerHTML = style;
		}

		document.getElementsByTagName("head")[0].appendChild(styleNode);      

		var loading = function() {
			qrcodeNode.innerHTML = '<div id="authing__spinner" class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
		};

		var unloading = function() {
			var child = document.getElementById("authing__spinner");
			qrcodeNode.removeChild(child);
		};

		var genTip = function(text) {
			var tip = document.createElement('span');
			tip.class = 'authing__heading-subtitle';
			if(!needGenerate) {
				tip.style = 'margin-top:11px;display: block;font-weight: 400;font-size: 15px;color: #888;ine-height: 48px;';
			}else {
				tip.style = 'margin-top:11px;display: block;font-weight: 400;font-size: 12px;color: #888;';
			}
			tip.innerHTML = text;
			return tip;
		};

		var genImage = function(src) {
			var qrcodeImage = document.createElement('img');
			qrcodeImage.class = 'authing__qrcode';
			qrcodeImage.src = src;
			qrcodeImage.width = 240;
			qrcodeImage.height = 240;
			return qrcodeImage;
		};

		var genShadow = function(text, aOnClick) {
			var shadow = document.createElement('div');
			shadow.id = "authing__retry";
			shadow.style = "text-align:center;width: 240px;height: 240px;position: absolute;left: 50%;top: 0px;margin-left: -120px;background-color: rgba(0,0,0, 0.5);line-height:240px;color:#fff;font-weight:600;";

			var shadowA = document.createElement('a');
			shadowA.innerHTML = text;
			shadowA.style = "color:#fff;border-bottom: 1px solid #fff;cursor: pointer;"
			shadowA.onclick = aOnClick;
			shadow.appendChild(shadowA);
			return shadow;      
		};

		var genRetry = function(qrcodeNode, tipText) {
			var tip = genTip(tipText); 
			
			var qrcodeWrapper = document.createElement("div");
			qrcodeWrapper.id = 'authing__qrcode-wrapper';
			qrcodeWrapper.style = "text-align: center";

			var qrcodeImage = genImage('https://usercontents.authing.cn/authing_user_manager_wxapp_qrcode.jpg');

			if(!needGenerate) {
				qrcodeImage.style = "margin-top: 12px;"
			}else {
				qrcodeImage.style = "margin-top: 16px;"
			}

			qrcodeImage.onload = function() {
				unloading();
			};

			var shadow = genShadow('点击重试', function() {
				start();          
			});

			qrcodeWrapper.appendChild(qrcodeImage);
			qrcodeWrapper.appendChild(shadow);
			qrcodeWrapper.appendChild(tip);  
			qrcodeNode.appendChild(qrcodeWrapper);      
		};

		var start = function() {
			loading();
			self.genQRCode(self.opts.clientId).then(function(qrRes) {

				qrRes = qrRes.data;

				if(qrRes.code != 200) {
					genRetry(qrcodeNode, qrRes.message);
					if(onError) {
						onError(qrRes);
					}
				}else {
					var qrcode = qrRes.data;
					sessionStorage.qrcodeUrl = qrcode.qrcode;
					sessionStorage.qrcode = JSON.stringify(qrcode);

					if(qrcodeNode) {
						var qrcodeWrapper = document.createElement("div");
						qrcodeWrapper.id = 'authing__qrcode-wrapper';
						qrcodeWrapper.style = "text-align: center";              

						var qrcodeImage = genImage(qrcode.qrcode);

						qrcodeImage.onload = function() {
							unloading();
							var inter = 0;
							inter = setInterval(function() {
								if(onIntervalStarting) {
								onIntervalStarting(inter);
								}
								self.checkQR().then(function(checkRes) {
								var checkResult = checkRes.data.data;
								if(checkResult.code === 200) {
									clearInterval(inter);
									if(redirect) {
										var shadow = genShadow('扫码成功，即将跳转', function() {
											window.location.href = checkResult.redirect + '?code=200&data=' + (JSON.stringify(checkResult.data));
										});
										setTimeout(function() {
											window.location.href = checkResult.redirect + '?code=200&data=' + (JSON.stringify(checkResult.data));
										}, 600);
										qrcodeNode.appendChild(shadow);                      
									}else {
										var shadow = genShadow('扫码成功');
										qrcodeNode.appendChild(shadow);					  
										if(onSuccess) {
											onSuccess(checkResult);
										}
									}
								}
								});
							}, interval);
						}

						var tip = genTip(tips || "使用 <strong>微信</strong> 或小程序 <strong>身份管家</strong> 扫码登录");

						qrcodeWrapper.appendChild(qrcodeImage);
						qrcodeWrapper.appendChild(tip);
						qrcodeNode.appendChild(qrcodeWrapper);
					}
				}

			}).catch(function(error) {
				genRetry(qrcodeNode, '网络出错，请重试');
				if(onError) {
					onError(error);
				}
			});
		};

		start();

	},
	
	getVerificationCode(phone) {
		if (!phone) {
			throw 'phone is not provided';
		}

		const url = `${configs.services.user.host.replace('/graphql', '')}/send_smscode/${phone}/${this.opts.clientId}`;
		return axios.get(url).then((result) => {
			if (result.data.code !== 200) {
				throw result.data;
			}else {
				return result.data;
			}	
		});
	},

	permissions(userId) {
		if(!userId) {
			throw 'userId is not provided.';
		}
		let self = this;

		this.haveAccess();

		const variables = {
			client: this.opts.clientId,
			user: userId,
		};

		return this.UserClient.request({
			operationName: 'queryRoleByUserId',
			query: `query QueryRoleByUserId($user: String, $client: String!){
				queryRoleByUserId(user: $user, client: $client) {
					totalCount
					list {
						group {
							name
							permissions
						}
					}
				}
			}`,
			variables,
		}).then(function(res) {
			return res.queryRoleByUserId;
		});
	},

	loginByPhoneCode(options) {
		if(!options) {
			throw 'options is not provided.';
		}

		let self = this;

		this.haveAccess();

		const variables = {
			registerInClient: this.opts.clientId,
			phone: options.phone,
			phoneCode: parseInt(options.phoneCode),
		};

		return this.UserClient.request({
			operationName: 'login',
			query: `mutation login($phone: String, $phoneCode: Int, $registerInClient: String!) {
						login(phone: $phone, phoneCode: $phoneCode, registerInClient: $registerInClient) {
							_id
							email
							emailVerified
							username
							nickname
							phone
							company
							photo
							browser
							token
							tokenExpiredAt
							loginsCount
							lastLogin
							lastIP
							signedUp
							blocked
							isDeleted
						}
				}`,
			variables,
		}).then(function(res) {
			return res.login;
		}).then(function(user) {
			if(user) {
				self.initUserClient(user.token);				
			}
			return user;
		});
	}

};

module.exports = Authing;
