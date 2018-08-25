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
var axios = require('axios');

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
						authorization: 'Bearer ' + token
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

	checkLoginStatus: function(token) {
		var self = this;
		return this.UserClient.query({
			query: gql`
				query checkLoginStatus($token: String) {
					checkLoginStatus(token: $token) {
						status
						code
						message
					}
				}
			`,
			variables: {
				token: token
			}
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
					    alias
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
					return item.enabled && item.alias != 'wxapp';
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
		  	var decoded = jsonwebtoken.verify(token, 'root');
		  	return decoded;
		} catch(err) {
		  	throw err;
		}
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
      }

      var styleNode = document.createElement('style'), style = '#authing__spinner{position:absolute;left:50%;margin-left:-6px;}.spinner{margin:100px auto;width:20px;height:20px;position:relative}.container1>div,.container2>div,.container3>div{width:6px;height:6px;background-color:#00a1ea;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.2s infinite ease-in-out;animation:bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container{position:absolute;width:100%;height:100%}.container2{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.container3{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.container2 .circle1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.container1 .circle2{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.container2 .circle2{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.container3 .circle2{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.container1 .circle3{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.container2 .circle3{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.container3 .circle3{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.container1 .circle4{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.container2 .circle4{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.container3 .circle4{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}';

      styleNode.type = "text/css";

      if(styleNode.styleSheet) {
        styleNode.styleSheet.cssText = style;
      }else{
        styleNode.innerHTML = style;
      }

      document.getElementsByTagName("head")[0].appendChild(styleNode);      

      var loading = function() {
        qrcodeNode.innerHTML = '<div id="authing__spinner" class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
      }

      var unloading = function() {
        var child = document.getElementById("authing__spinner");
        qrcodeNode.removeChild(child);
      }      

      var genTip = function(text) {
        var tip = document.createElement('span')
		tip.class = 'authing__heading-subtitle';
		if(!needGenerate) {
			tip.style = 'margin-top:11px;display: block;font-weight: 400;font-size: 15px;color: #888;ine-height: 48px;';
		}else {
			tip.style = 'margin-top:11px;display: block;font-weight: 400;font-size: 12px;color: #888;';
		}
        tip.innerHTML = text;
        return tip;
      }

      var genImage = function(src) {
        var qrcodeImage = document.createElement('img');
        qrcodeImage.class = 'authing__qrcode';
        qrcodeImage.src = src;
        qrcodeImage.width = 240;
        qrcodeImage.height = 240;
        return qrcodeImage;
      }

      var genShadow = function(text, aOnClick) {
        var shadow = document.createElement('div');
        shadow.id = "authing__retry";
        shadow.style = "text-align:center;width: 240px;height: 240px;position: absolute;left: 50%;top: 2;top: 12px;margin-left: -120px;background-color: rgba(0,0,0, 0.5);line-height:240px;color:#fff;font-weight:600;";

        var shadowA = document.createElement('a');
        shadowA.innerHTML = text;
        shadowA.style = "border-bottom: 1px solid #fff;cursor: pointer;"
        shadowA.onclick = aOnClick;
        shadow.appendChild(shadowA);
        return shadow;      
      }

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
        }

        var shadow = genShadow('点击重试', function() {
          start();          
        });

        qrcodeWrapper.appendChild(qrcodeImage);
        qrcodeWrapper.appendChild(shadow);
		qrcodeWrapper.appendChild(tip);  
		qrcodeNode.appendChild(qrcodeWrapper);      
      }

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
                      var shadow = genShadow('验证成功', function() {
                        window.location.href = checkResult.redirect + '?code=200&data=' + (JSON.stringify(checkResult.data));
                      });                    	
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
      }

      start();

    }

}

if(typeof window === 'object') {
	window.Authing = Authing;
}

module.exports = Authing;
