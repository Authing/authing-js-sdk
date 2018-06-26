var ApolloClientPreset = require('apollo-client-preset');
var ApolloLinkHttp = require('apollo-link-http');
var ApolloLinkPreset = require('apollo-link');

var ApolloCacheInmemory = require('apollo-cache-inmemory');
var gql = require('graphql-tag');

var nodeFetch = require('node-fetch');
var unfetch = require('unfetch');

var jsonwebtoken = require('jsonwebtoken');

var ApolloClient = ApolloClientPreset.ApolloClient;
var HttpLink = ApolloLinkHttp.HttpLink;
var InMemoryCache = ApolloCacheInmemory.InMemoryCache;

var ApolloLink = ApolloLinkPreset.ApolloLink;
var concat = ApolloLinkPreset.concat;

var configs = require('./src/configs');

var _encryption;
if(configs.inBrowser) {
	var JSEncrypt = require('jsencrypt');
	_encryption = function(paw) {
		var encrypt = new JSEncrypt.JSEncrypt(); // 实例化加密对象
		encrypt.setPublicKey(configs.openSSLSecret); // 设置公钥
		var encryptoPasswd = encrypt.encrypt(paw); // 加密明文
		return encryptoPasswd;
	};
	nodeFetch = unfetch.default || unfetch;
}else {
	var crypto = require('crypto');
	_encryption = function(paw) {
		var publicKey = configs.openSSLSecret;
		var pawBuffer, encryptText;
		pawBuffer = new Buffer(paw); // jsencrypt 库在加密后使用了base64编码,所以这里要先将base64编码后的密文转成buffer
		encryptText = crypto.publicEncrypt({
			key: new Buffer(publicKey), // 如果通过文件方式读入就不必转成Buffer
			padding: crypto.constants.RSA_PKCS1_PADDING
		}, pawBuffer).toString('base64');
		return encryptText;
	}
}

var Authing = function(opts) {
	var self = this;
	if(!opts.clientId) {
		throw 'clientId is not provided';
	}

	if(!opts.secret) {
		throw 'app secret is not provided';
	}

	if(opts.host) {
		configs.services.user.host = opts.host.user || configs.services.user.host;
		configs.services.oauth.host = opts.host.oauth || configs.services.oauth.host;
	}

	this.opts = opts;

	this.ownerAuth = {
		authed: false,
		authSuccess: false,
		token: null
	}
	this.userAuth = {
		authed: false,
		authSuccess: false,
		token: null
	}

	this.initUserClient();
	this.initOwnerClient();
	this.initOAuthClient();

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
		throw 'auth failed: ' + error.message;
	});
}

Authing.prototype = {

	constructor: Authing,

	_initClient: function(token) {
		if(token) {

			var httpLink = new HttpLink({ 
		  		uri: configs.services.user.host, 
		  		fetch: nodeFetch
		  	});
			var authMiddleware = new ApolloLink((operation, forward) => {
				operation.setContext({
					headers: {
					authorization: 'Bearer ' + token,
					} 
				});

				return forward(operation);
			});			
			return new ApolloClient({
			  	link: concat(authMiddleware, httpLink),
			  	cache: new InMemoryCache()
			});
		}else {
			return new ApolloClient({
			  	link: new HttpLink({ uri: configs.services.user.host, fetch: nodeFetch }),
			  	cache: new InMemoryCache()
			});
		}
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
		this.OAuthClient = new ApolloClient({
		  link: new HttpLink({ uri: configs.services.oauth.host, fetch: nodeFetch }),
		  cache: new InMemoryCache()
		});
	},

	_auth: function() {

		if(!this._AuthService) {
			this._AuthService = new ApolloClient({
		  		link: new HttpLink({ uri: configs.services.user.host, fetch: nodeFetch }),
		  		cache: new InMemoryCache()
			});
		}

		let options = {
			secret: this.opts.secret,
			clientId: this.opts.clientId,
		}

		var self = this;

		return this._AuthService.query({
		  query: gql`
		  	query {
 	 			getAccessTokenByAppSecret(secret: "${options.secret}", clientId: "${options.clientId}")
		   	}
		  `,
		})
	  	.then(function(data) {

			var httpLink = new HttpLink({ 
		  		uri: configs.services.user.host, 
		  		fetch: nodeFetch
		  	});

			var authMiddleware = new ApolloLink((operation, forward) => {
			  operation.setContext({
			    headers: {
			      authorization: 'Bearer ' + data.data.getAccessTokenByAppSecret,
			    } 
			  });

			  return forward(operation);
			});			

			self._AuthService = new ApolloClient({
			  	link: concat(authMiddleware, httpLink),
			  	cache: new InMemoryCache()
			});	  		
	  		return data.data.getAccessTokenByAppSecret;
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

	checkLoginStatus: function() {
		var self = this;
		if(!self.userAuth.authSuccess) {
			return Promise.resolve({
                code: 2020,
                status: false,
                message: '未登录'
            });
		}
		return this.UserClient.query({
			query: gql`query checkLoginStatus {
				checkLoginStatus {
					status
					code
					message
				}
			}`
		}).then(function(res) {
			return res.data.checkLoginStatus;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
		});
	},

	_readOAuthList: function() {

		var self = this;

		this.haveAccess();

		if(!this._OAuthService) {
			var httpLink = new HttpLink({ 
		  		uri: configs.services.oauth.host, 
		  		fetch: nodeFetch
		  	});
			var authMiddleware = new ApolloLink((operation, forward) => {
			  operation.setContext({
			    headers: {
			      authorization: 'Bearer ' + self.ownerAuth.token,
			    } 
			  });

			  return forward(operation);
			});			
			this._OAuthService = new ApolloClient({
			  	link: concat(authMiddleware, httpLink),
			  	cache: new InMemoryCache()
			});			
		}

		var self = this;

		return this._OAuthService.query({
			query: gql`
				query getOAuthList($clientId: String!) {
					ReadOauthList(clientId: $clientId) {
					    _id
					    name
					    image
					    description
					    enabled
					    client
					    user
					    url
					}
				}
			`,
			variables: {
				clientId: self.opts.clientId				
			}
		})
		.then(function(res) {
			return res.data.ReadOauthList;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
		});
	},

	haveAccess: function() {
		if(!this.ownerAuth.authSuccess) {
			throw 'have no access, please check your secret and client ID.';
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

		return this.UserClient.mutate({
			mutation: gql`
				mutation login($unionid: String, $email: String, $password: String, $lastIP: String, $registerInClient: String!, $verifyCode: String) {
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
				}
			`,
			variables: options
		}).then(function(res) {
			return res.data.login;
		});

	},

	login: function(options) {
		let self = this;
		return this._login(options).then(function(user) {
			if(user) {
				self.initUserClient(user.token);				
			}
			return user;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
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

		return this.UserClient.mutate({
			mutation: gql`
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
				    $photo: String
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
				        nickname: $nickname
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
				}
			`,
			variables: options
		})
		.then(function(res) {
			return res.data.register;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
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
		}).catch(function(error) {
			throw error.graphQLErrors[0];
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
		
		return client.query({
			query: gql`query user($id: String!, $registerInClient: String!){
				user(id: $id, registerInClient: $registerInClient) {
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
			return res.data.user;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
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

		return this.ownerClient.query({
			query: gql`query users($registerInClient: String, $page: Int, $count: Int){
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
				}
			`,
			variables: options
		}).then(function(res) {
			return res.data.users;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
		});
	},

	remove: function(_id, operator) {

		var self = this;

		this.haveAccess();

		if(!_id) {
			throw '_id is not provided';
		}

		return this.ownerClient.mutate({
			mutation: gql `
				mutation removeUsers($ids: [String], $registerInClient: String, $operator: String){
				  removeUsers(ids: $ids, registerInClient: $registerInClient, operator: $operator) {
				    _id
				  }
				}
			`,
			variables: {
				ids: [_id],
				registerInClient: self.opts.clientId,
				operator
			}
		}).then(function(res) {
			return res.data.removeUsers;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
		});	

	},

	_uploadAvatar: function(options) {
		var client = this._chooseClient();
		return client.query({
			query: gql`query qiNiuUploadToken {
				qiNiuUploadToken
			}`
		}).then(function(data) {
			return data.data.qiNiuUploadToken;
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
			return fetch('https://upload.qiniup.com/" enctype="multipart/form-data', {
				method: 'post',
				body: formData
			});
		}).then(function(data){
			return data.json();
		}).then(function(data) {
			if(data.key) {
				options.photo = 'https://usercontents.authing.cn/' + data.key
			}
			return options;
		}).catch(function(e) {
			if(e.graphQLErrors) {
				throw e;
			}
			throw {
				graphQLErrors:[{
					message: {
						message: e
					}
				}]
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
					return client.mutate({
						mutation: gql`
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
					return res.data.updateUser;
				}).catch(function(error) {
					throw error.graphQLErrors[0];
				});
			}
		}
		var _arg = generateArgs(options);
		return client.mutate({
			mutation: gql`
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
			return res.data.updateUser;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
		});	
	},

	readOAuthList: function() {
		var self = this;
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

		/*
			.then(function(list) {
				var promises = [];
				if(configs.inBrowser) {
					promises = list.map(function(item){
						return fetch(`${configs.services.oauth.host.replace('/graphql', '')}/oauth/${item.alias}/url/${self.opts.clientId}`).then(function(data){
							return data.json();
						});
					})
				}else {
					var http = require('http');
					promises = list.map(function(item){
						return new Promise(function(resolve, reject){
							http.get(`${configs.services.oauth.host.replace('/graphql', '')}/oauth/${item.alias}/url/${self.opts.clientId}`, function(response) {
								var str = '';
								response.setEncoding('utf8');
								response.on('data', function (chunk) { str += chunk });
								response.on('end', function () {
									resolve(JSON.parse(str));
								});
								response.on('error', function(e) {
									reject(e);
								})
							})
						});
					});

				}

				return Promise.all(promises);
				
			}).then(function(list) {
				return list;
			});
		*/
	},
	
	sendResetPasswordEmail: function(options) {
		if(!options) {
			throw 'options is not provided';
		}
		if(!options.email) {
			throw 'email in options is not provided';
		}
	
		options.client = this.opts.clientId;
		return this.UserClient.mutate({
			mutation: gql`
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
			return res.data.sendResetPasswordEmail;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
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
		return this.UserClient.mutate({
			mutation: gql`
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
			return res.data.verifyResetPasswordVerifyCode;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
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
		return this.UserClient.mutate({
			mutation: gql`
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
			return res.data.changePassword;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
		});
	},

	sendVerifyEmail: function(options) {
		if(!options.email) {
			throw 'email in options is not provided';
		}

		options.client = this.opts.clientId;

		return this._AuthService.mutate({
			mutation: gql`
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
			return res.data.sendVerifyEmail;
		}).catch(function(error) {
			throw error.graphQLErrors[0];
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
		}
		inputElem.click()
	},

	decodeToken: function(token) {
		try {
		  	var decoded = jwt.verify(token, 'root');
		  	return decoded;
		} catch(err) {
		  	throw err;
		}
	}

}

module.exports = Authing;
