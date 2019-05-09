/* jshint esversion: 6 */

const axios = require('axios');
const sha1 = require('js-sha1');
const configs = require('./src/configs');
const GraphQLClient = require('./src/graphql');
const encryption = require('./src/_encryption');

function Authing(opts) {
  const self = this;
  this.opts = opts;

  if (opts.host) {
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
    if (!opts.clientId) {
      throw new Error('clientId is not provided');
    }

    if (configs.inBrowser) {
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
    } else if (!opts.secret) {
      throw new Error('app secret is not provided');
    }
  }

  return this._auth().then((token) => {
    if (token) {
      self.initOwnerClient(token);
      self.loginFromLocalStorage();
    } else {
      self.ownerAuth.authed = true;
      self.ownerAuth.authSuccess = false;
      throw 'auth failed, please check your secret and client ID.';
    }
    return self;
  }).catch((error) => {
    self.ownerAuth.authed = true;
    self.ownerAuth.authSuccess = false;
    throw `auth failed: ${error.message.message}`;
  });
}

Authing.prototype = {

  constructor: Authing,

  _initClient(token) {
    const conf = {
      baseURL: configs.services.user.host
    };
    if (token) {
      conf.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    return new GraphQLClient(conf);
  },

  oAuthClientByUserToken() {
    this.haveLogined();
    const { token } = this.userAuth;
    if (!this._oAuthClientByUserToken) {
      this._oAuthClientByUserToken = new GraphQLClient({
        baseURL: configs.services.oauth.host,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return this._oAuthClientByUserToken;
  },

  initUserClient(token) {
    if (token) {
      this.userAuth = {
        authed: true,
        authSuccess: true,
        token
      };
      if (configs.inBrowser) {
        localStorage.setItem('_authing_token', token);
      }
    }
    this.UserClient = this._initClient(token);
  },

  initOwnerClient(token) {
    if (token) {
      this.ownerAuth = {
        authed: true,
        authSuccess: true,
        token
      };
    }
    this.ownerClient = this._initClient(token);
  },

  initOAuthClient() {
    this.OAuthClient = new GraphQLClient({
      baseURL: configs.services.oauth.host
    });
  },

  _auth() {
    const authOpts = {
      baseURL: configs.services.user.host
    };

    if (this.opts.accessToken) {
      authOpts.headers = {
        Authorization: `Bearer ${this.opts.accessToken}`
      };
    }

    if (!this.AuthService) {
      this.AuthService = new GraphQLClient(authOpts);
    }

    if (this.opts.accessToken && this.AuthService) {
      return new Promise((resolve) => {
        resolve(this.opts.accessToken);
      });
    }

    let options = {
      secret: this.opts.secret,
      clientId: this.opts.clientId
    };

    const self = this;

    let query = '';
    const queryField = `{
      accessToken
      clientInfo {
        _id
        name
        descriptions
        jwtExpired
        createdAt
        isDeleted
        logo
        emailVerifiedDefault
        registerDisabled
        allowedOrigins
        clientType {
          _id
          name
          description
          image
          example
        }
      }
    }`;

    if (configs.inBrowser) {
      options = {
        clientId: this.opts.clientId,
        timestamp: this.opts.timestamp,
        nonce: this.opts.nonce,
        signature: this.opts.signature
      };
      query = `query {
      getClientWhenSdkInit(timestamp: "${options.timestamp}", clientId: "${options.clientId}", nonce: ${options.nonce}, signature: "${options.signature}")${queryField}
      }`;
    } else {
      query = `query {
        getClientWhenSdkInit(secret: "${options.secret}", clientId: "${options.clientId}")${queryField}
      }`;
    }

    return this.AuthService.request({
      query
    })
      .then((data) => {
        let accessToken = '';
        if (data.getClientWhenSdkInit) {
          // eslint-disable-next-line prefer-destructuring
          accessToken = data.getClientWhenSdkInit.accessToken;
          self.clientInfo = data.getClientWhenSdkInit.clientInfo;
        }
        self.AuthService = new GraphQLClient({
          baseURL: configs.services.user.host,
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        return accessToken;
      });
  },

  loginFromLocalStorage() {
    const self = this;
    if (configs.inBrowser) {
      const authingToken = localStorage.getItem('_authing_token');
      if (authingToken) {
        self.initUserClient(authingToken);
      }
    }
  },

  checkLoginStatus(token) {
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
        token
      }
    }).then(res => res.checkLoginStatus);
  },

  _readOAuthList() {
    const self = this;

    this.haveAccess();

    if (!this._OAuthService) {
      this._OAuthService = new GraphQLClient({
        baseURL: configs.services.oauth.host,
        headers: {
          Authorization: `Bearer ${self.ownerAuth.token}`
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
      .then(res => res.ReadOauthList);
  },

  haveAccess() {
    if (!this.ownerAuth.authSuccess) {
      throw 'have no access, please check your secret and client ID.';
    }
  },

  haveLogined() {
    if (!this.userAuth.authSuccess) {
      throw 'not logined yet, please login first.';
    }
  },

  _chooseClient() {
    if (this.userAuth.authSuccess) {
      return this.UserClient;
    }
    return this.ownerClient;
  },

  _login(options) {
    if (!options) {
      throw 'options is not provided.';
    }
    /* eslint-disable no-param-reassign */

    options.registerInClient = this.opts.clientId;

    if (options.password) {
      options.password = encryption(options.password);
    }

    this.haveAccess();

    return this.UserClient.request({
      operationName: 'login',
      query: `mutation login($unionid: String, $email: String, $password: String, $lastIP: String, $registerInClient: String!, $verifyCode: String) {
          login(unionid: $unionid, email: $email, password: $password, lastIP: $lastIP, registerInClient: $registerInClient, verifyCode: $verifyCode) {
            _id
            email
            emailVerified
            unionid
            oauth
            registerMethod
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
    }).then(res => res.login);
  },

  _loginByLDAP(options) {
    if (!options) {
      throw 'options is not provided.';
    }

    options.clientId = this.opts.clientId;

    if (!options.password) {
      throw 'password is not provided.';
    }

    if (!options.username) {
      throw 'username is not provided.';
    }

    this.haveAccess();

    return this.OAuthClient.request({
      operationName: 'LoginByLDAP',
      query: `mutation LoginByLDAP($username: String!, $password: String!, $clientId: String!) {
      LoginByLDAP(username: $username, clientId: $clientId, password: $password) {
            _id
            email
            emailVerified
            unionid
            oauth
            registerMethod
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
          }
      }`,
      variables: options
    }).then(res => res.LoginByLDAP);
  },

  loginByLDAP(options) {
    const self = this;
    return this._loginByLDAP(options).then((user) => {
      if (user) {
        self.initUserClient(user.token);
      }
      return user;
    });
  },

  login(options) {
    const self = this;
    return this._login(options).then((user) => {
      if (user) {
        self.initUserClient(user.token);
      }
      return user;
    });
  },

  register(options) {
    this.haveAccess();

    if (!options) {
      throw 'options is not provided';
    }

    options.registerInClient = this.opts.clientId;

    if (options.password) {
      options.password = encryption(options.password);
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
              unionid,
              oauth,
              registerMethod,
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
      .then(res => res.register);
  },

  logout(_id) {
    this.haveAccess();

    if (!_id) {
      throw '_id is not provided';
    }

    this.userAuth = {
      authed: false,
      authSuccess: false,
      token: null
    };
    if (configs.inBrowser) {
      localStorage.removeItem('_authing_token');
    }

    return this.update({
      _id,
      tokenExpiredAt: 0
    });
  },

  user(options) {
    this.haveAccess();
    if (!options) {
      throw 'options is not provided';
    }
    if (!options.id) {
      throw 'id in options is not provided';
    }
    options.registerInClient = this.opts.clientId;

    const client = this._chooseClient();

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
    }).then(res => res.user);
  },

  userPatch(options) {
    this.haveAccess();
    if (!options) {
      throw 'options is not provided';
    }
    if (!options.ids) {
      throw 'ids in options is not provided';
    }
    options.registerInClient = this.opts.clientId;

    const client = this._chooseClient();

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
    }).then(res => res.userPatch);
  },

  list(page, count) {
    this.haveAccess();

    page = page || 1;
    count = count || 10;

    const options = {
      registerInClient: this.opts.clientId,
      page,
      count
    };

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
    }).then(res => res.users);
  },

  remove(_id, operator) {
    const self = this;

    this.haveAccess();

    if (!_id) {
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
    }).then(res => res.removeUsers);
  },

  _uploadAvatar(options) {
    const client = this._chooseClient();
    return client.request({
      operationName: 'qiNiuUploadToken',
      query: `query qiNiuUploadToken {
        qiNiuUploadToken
      }`
    }).then(data => data.qiNiuUploadToken).then((token) => {
      if (!token) {
        throw {
          graphQLErrors: [{
            message: {
              message: '获取文件上传token失败'
            }
          }]
        };
      }

      const formData = new FormData();
      formData.append('file', options.photo);
      formData.append('token', token);
      return axios.post('https://upload.qiniup.com/', formData, {
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }).then(data => data.data).then((data) => {
      if (data.key) {
        options.photo = `https://usercontents.authing.cn/${data.key}`;
      }
      return options;
    }).catch((e) => {
      if (e.graphQLErrors) {
        throw e.graphQLErrors[0];
      }
      throw {
        message: {
          message: e
        }
      };
    });
  },

  update(options) {
    const self = this;

    this.haveAccess();

    if (!options) {
      throw 'options is not provided';
    }

    // eslint-disable-next-line no-underscore-dangle
    if (!options._id) {
      throw '_id in options is not provided';
    }

    if (options.password) {
      if (!options.oldPassword) {
        throw 'oldPasswordin options is not provided';
      }
      options.password = encryption(options.password);
      options.oldPassword = encryption(options.oldPassword);
    }

    options.registerInClient = self.opts.clientId;

    const
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
      };
    const returnFields = `_id
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

    function generateArgs(opts) {
      const args = [];
      const argsFiller = [];
      let argsString = '';
      // eslint-disable-next-line no-restricted-syntax
      for (const key in opts) {
        if (keyTypeList[key]) {
          args.push(`$${key}: ${keyTypeList[key]}`);
          argsFiller.push(`${key}: $${key}`);
        }
      }
      argsString = args.join(', ');
      return {
        args,
        argsString,
        argsFiller
      };
    }

    const client = this._chooseClient();

    if (options.photo) {
      const { photo } = options;
      if (typeof photo !== 'string') {
        return this._uploadAvatar(options).then((opts) => {
          const arg = generateArgs(opts);
          return client.request({
            operationName: 'UpdateUser',
            query: `
              mutation UpdateUser(${arg.argsString}){
                updateUser(options: {
                  ${arg.argsFiller.join(', ')}
                }) {
                ${returnFields}
                }
              }
            `,
            variables: opts
          });
        }).then(res => res.updateUser);
      }
    }
    const args = generateArgs(options);
    return client.request({
      operationName: 'UpdateUser',
      query: `
        mutation UpdateUser(${args.argsString}){
          updateUser(options: {
            ${args.argsFiller.join(', ')}
          }) {
            ${returnFields}
          }
        }
      `,
      variables: options
    }).then(res => res.updateUser);
  },

  readOAuthList() {
    return this._readOAuthList()
      .then((list) => {
        if (list) {
          return list.filter(item => item.enabled);
        }
        throw {
          message: '获取OAuth列表失败，原因未知'
        };
      });
  },

  sendResetPasswordEmail(options) {
    if (!options) {
      throw 'options is not provided';
    }
    if (!options.email) {
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
    }).then(res => res.sendResetPasswordEmail);
  },

  verifyResetPasswordVerifyCode(options) {
    if (!options) {
      throw 'options is not provided';
    }
    if (!options.email) {
      throw 'email in options is not provided';
    }
    if (!options.verifyCode) {
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
    }).then(res => res.verifyResetPasswordVerifyCode);
  },

  changePassword(options) {
    if (!options) {
      throw 'options is not provided';
    }
    if (!options.email) {
      throw 'email in options is not provided';
    }
    if (!options.password) {
      throw 'password in options is not provided';
    }
    if (!options.verifyCode) {
      throw 'verifyCode in options is not provided';
    }
    options.client = this.opts.clientId;
    options.password = encryption(options.password);
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
    }).then(res => res.changePassword);
  },

  sendVerifyEmail(options) {
    if (!options.email) {
      throw 'email in options is not provided';
    }

    options.client = this.opts.clientId;

    return this.AuthService.request({
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
    }).then(res => res.sendVerifyEmail);
  },

  selectAvatarFile(cb) {
    if (!configs.inBrowser) {
      throw '当前不是浏览器环境，无法选取文件';
    }
    const inputElem = document.createElement('input');
    inputElem.type = 'file';
    inputElem.accept = 'image/*';
    inputElem.onchange = () => {
      cb(inputElem.files[0]);
    };
    inputElem.click();
  },

  decodeToken(token) {
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
        token
      }
    }).then(res => res.decodeJwtToken);
  },

  readUserOAuthList(variables) {
    const client = this.oAuthClientByUserToken();
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
    }).then(res => res.notBindOAuthList);
  },

  bindOAuth(variables) {
    if (!variables) {
      throw 'options is not provided';
    }
    if (!variables.type) {
      throw 'type in options is not provided';
    }
    if (!variables.unionid) {
      throw 'unionid in options is not provided';
    }
    if (!variables.userInfo) {
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
    if (!variables) {
      throw 'options is not provided';
    }
    if (!variables.type) {
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

  randomWord(randomFlag, min, max) {
    let str = '';
    let range = min;
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min;// 任意长度
    }

    for (let i = 0; i < range; i += 1) {
      const pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }

    return str;
  },

  genQRCode(clientId) {
    const random = this.randomWord(true, 12, 24);
    sessionStorage.randomWord = random;
    return axios.get(`https://oauth.authing.cn/oauth/wxapp/qrcode/${clientId}?random=${random}`);
  },

  checkQR() {
    const random = sessionStorage.randomWord || '';
    return axios.post(`https://oauth.authing.cn/oauth/wxapp/confirm/qr?random=${random}`);
  },

  startWXAppScaning(opts) {
    const self = this;

    if (!opts) {
      opts = {};
    }

    const mountNode = opts.mount || 'authing__qrcode-root-node';
    const interval = opts.interval || 1500;
    const { tips } = opts;

    let redirect = true;

    // eslint-disable-next-line no-prototype-builtins
    if (opts.hasOwnProperty('redirect')) {
      if (!opts.redirect) {
        redirect = false;
      }
    }

    const { onError } = opts;
    const { onSuccess } = opts;
    const { onIntervalStarting } = opts;

    let qrcodeNode = document.getElementById(mountNode);

    let needGenerate = false;
    let start = () => { };

    if (!qrcodeNode) {
      qrcodeNode = document.createElement('div');
      qrcodeNode.id = mountNode;
      qrcodeNode.style = 'z-index: 65535;position: fixed;background: #fff;width: 300px;height: 300px;left: 50%;margin-left: -150px;display: flex;justify-content: center;align-items: center;top: 50%;margin-top: -150px;border: 1px solid #ccc;';
      document.getElementsByTagName('body')[0].appendChild(qrcodeNode);
      needGenerate = true;
    } else {
      qrcodeNode.style = 'position:relative';
    }

    const styleNode = document.createElement('style'); const
      style = '#authing__retry a:hover{outline:0px;text-decoration:none;}#authing__spinner{position:absolute;left:50%;margin-left:-6px;}.spinner{margin:100px auto;width:20px;height:20px;position:relative}.container1>div,.container2>div,.container3>div{width:6px;height:6px;background-color:#00a1ea;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.2s infinite ease-in-out;animation:bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container{position:absolute;width:100%;height:100%}.container2{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.container3{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.container2 .circle1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.container1 .circle2{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.container2 .circle2{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.container3 .circle2{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.container1 .circle3{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.container2 .circle3{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.container3 .circle3{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.container1 .circle4{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.container2 .circle4{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.container3 .circle4{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}';

    styleNode.type = 'text/css';

    if (styleNode.styleSheet) {
      styleNode.styleSheet.cssText = style;
    } else {
      styleNode.innerHTML = style;
    }

    document.getElementsByTagName('head')[0].appendChild(styleNode);

    const loading = () => {
      qrcodeNode.innerHTML = '<div id="authing__spinner" class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
    };

    const unloading = () => {
      const child = document.getElementById('authing__spinner');
      qrcodeNode.removeChild(child);
    };

    const genTip = (text) => {
      const tip = document.createElement('span');
      tip.class = 'authing__heading-subtitle';
      if (!needGenerate) {
        tip.style = 'margin-top:11px;display: block;font-weight: 400;font-size: 15px;color: #888;ine-height: 48px;';
      } else {
        tip.style = 'margin-top:11px;display: block;font-weight: 400;font-size: 12px;color: #888;';
      }
      tip.innerHTML = text;
      return tip;
    };

    const genImage = (src) => {
      const qrcodeImage = document.createElement('img');
      qrcodeImage.class = 'authing__qrcode';
      qrcodeImage.src = src;
      qrcodeImage.width = 240;
      qrcodeImage.height = 240;
      return qrcodeImage;
    };

    const genShadow = (text, aOnClick) => {
      const shadow = document.createElement('div');
      shadow.id = 'authing__retry';
      shadow.style = 'text-align:center;width: 240px;height: 240px;position: absolute;left: 50%;top: 0px;margin-left: -120px;background-color: rgba(0,0,0, 0.5);line-height:240px;color:#fff;font-weight:600;';

      const shadowA = document.createElement('a');
      shadowA.innerHTML = text;
      shadowA.style = 'color:#fff;border-bottom: 1px solid #fff;cursor: pointer;';
      shadowA.onclick = aOnClick;
      shadow.appendChild(shadowA);
      return shadow;
    };

    function genRetry(qrcodeElm, tipText) {
      const tip = genTip(tipText);

      const qrcodeWrapper = document.createElement('div');
      qrcodeWrapper.id = 'authing__qrcode-wrapper';
      qrcodeWrapper.style = 'text-align: center';

      const qrcodeImage = genImage('https://usercontents.authing.cn/authing_user_manager_wxapp_qrcode.jpg');

      if (!needGenerate) {
        qrcodeImage.style = 'margin-top: 12px;';
      } else {
        qrcodeImage.style = 'margin-top: 16px;';
      }

      qrcodeImage.onload = () => {
        unloading();
      };

      const shadow = genShadow('点击重试', () => {
        start();
      });

      qrcodeWrapper.appendChild(qrcodeImage);
      qrcodeWrapper.appendChild(shadow);
      qrcodeWrapper.appendChild(tip);
      qrcodeElm.appendChild(qrcodeWrapper);
    }

    start = () => {
      loading();
      self.genQRCode(self.opts.clientId).then((qrRes) => {
        qrRes = qrRes.data;

        if (qrRes.code !== 200) {
          genRetry(qrcodeNode, qrRes.message);
          if (onError) {
            onError(qrRes);
          }
        } else {
          const qrcode = qrRes.data;
          sessionStorage.qrcodeUrl = qrcode.qrcode;
          sessionStorage.qrcode = JSON.stringify(qrcode);

          if (qrcodeNode) {
            const qrcodeWrapper = document.createElement('div');
            qrcodeWrapper.id = 'authing__qrcode-wrapper';
            qrcodeWrapper.style = 'text-align: center';

            const qrcodeImage = genImage(qrcode.qrcode);

            qrcodeImage.onload = () => {
              unloading();
              let inter = 0;
              inter = setInterval(() => {
                if (onIntervalStarting) {
                  onIntervalStarting(inter);
                }
                self.checkQR().then((checkRes) => {
                  const checkResult = checkRes.data.data;
                  if (checkResult.code === 200) {
                    clearInterval(inter);
                    if (redirect) {
                      const shadowX = genShadow('扫码成功，即将跳转', () => {
                        window.location.href = `${checkResult.redirect}?code=200&data=${JSON.stringify(checkResult.data)}`;
                      });
                      setTimeout(() => {
                        window.location.href = `${checkResult.redirect}?code=200&data=${JSON.stringify(checkResult.data)}`;
                      }, 600);
                      qrcodeNode.appendChild(shadowX);
                    } else {
                      const shadow = genShadow('扫码成功');
                      qrcodeNode.appendChild(shadow);
                      if (onSuccess) {
                        onSuccess(checkResult);
                      }
                    }
                  }
                });
              }, interval);
            };

            const tip = genTip(tips || '使用 <strong>微信</strong> 或小程序 <strong>身份管家</strong> 扫码登录');

            qrcodeWrapper.appendChild(qrcodeImage);
            qrcodeWrapper.appendChild(tip);
            qrcodeNode.appendChild(qrcodeWrapper);
          }
        }
      }).catch((error) => {
        genRetry(qrcodeNode, '网络出错，请重试');
        if (onError) {
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
      } else {
        return result.data;
      }
    });
  },

  loginByPhoneCode(options) {
    if (!options) {
      throw 'options is not provided.';
    }

    const self = this;

    this.haveAccess();

    const variables = {
      registerInClient: this.opts.clientId,
      phone: options.phone,
      phoneCode: parseInt(options.phoneCode, 10)
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
      variables
    }).then(res => res.login).then((user) => {
      if (user) {
        self.initUserClient(user.token);
      }
      return user;
    });
  },

  queryPermissions(userId) {
    if (!userId) {
      throw 'userId is not provided.';
    }

    this.haveAccess();

    const variables = {
      client: this.opts.clientId,
      user: userId
    };

    return this.ownerClient.request({
      operationName: 'QueryRoleByUserId',
      query: `query QueryRoleByUserId($user: String!, $client: String!){
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
      variables
    }).then(res => res.queryRoleByUserId);
  },

  queryRoles(options) {
    if (!options) {
      throw 'options is not provided.';
    }

    this.haveAccess();

    const variables = {
      clientId: this.opts.clientId,
      page: options.page,
      count: options.count
    };

    return this.ownerClient.request({
      operationName: 'ClientRoles',
      query: `
        query ClientRoles(
          $clientId: String!
          $page: Int
          $count: Int
        ) {
          clientRoles(
            client: $clientId
            page: $page
            count: $count
          ) {
            totalCount
            list {
              _id
              name
              descriptions
              client
              createdAt
              permissions
            }
          }
        }
      `,
      variables
    }).then(res => res.clientRoles);
  },

  createRole(options) {
    if (!options) {
      throw 'options is not provided.';
    }

    this.haveAccess();

    const variables = {
      client: this.opts.clientId,
      name: options.name,
      descriptions: options.descriptions
    };

    return this.ownerClient.request({
      operationName: 'CreateRole',
      query: `
        mutation CreateRole(
          $name: String!
          $client: String!
          $descriptions: String
        ) {
          createRole(
            name: $name
            client: $client
            descriptions: $descriptions
          ) {
            _id,
            name,
            client,
            descriptions
          }
        }
      `,
      variables
    }).then(res => res.createRole);
  },

  updateRolePermissions(options) {
    if (!options) {
      throw 'options is not provided.';
    }

    this.haveAccess();

    const variables = {
      client: this.opts.clientId,
      name: options.name,
      permissions: options.permissions,
      _id: options.roleId
    };

    return this.ownerClient.request({
      operationName: 'UpdateRole',
      query: `
        mutation UpdateRole(
          $_id: String!
          $name: String!
          $client: String!
          $descriptions: String
          $permissions: String
        ) {
          updateRole(
            _id: $_id
            name: $name
            client: $client
            descriptions: $descriptions
            permissions: $permissions
          ) {
            _id,
            name,
            client,
            descriptions,
            permissions
          }
        }
      `,
      variables
    }).then(res => res.updateRole);
  },

  assignUserToRole(options) {
    if (!options) {
      throw 'options is not provided.';
    }
    this.haveAccess();

    const variables = {
      client: this.opts.clientId,
      group: options.roleId,
      user: options.user
    };

    return this.ownerClient.request({
      operationName: 'AssignUserToRole',
      query: `
        mutation AssignUserToRole(
          $group: String!
          $client: String!
          $user: String!
        ) {
          assignUserToRole(
            group: $group
            client: $client
            user: $user
          ) {
            totalCount,
            list {
              _id,
              client {
                _id
              },
              user {
                _id
              },
              createdAt
            }
          }
        }
      `,
      variables
    }).then(res => res.assignUserToRole);
  },

  removeUserFromRole(options) {
    if (!options) {
      throw 'options is not provided.';
    }

    this.haveAccess();

    const variables = {
      client: this.opts.clientId,
      user: options.user,
      group: options.roleId
    };

    return this.ownerClient.request({
      operationName: 'RemoveUserFromGroup',
      query: `
        mutation RemoveUserFromGroup(
          $group: String!
          $client: String!
          $user: String!
        ) {
          removeUserFromGroup(
            group: $group
            client: $client
            user: $user
          ) {
            _id,
            group {
              _id
            },
            client {
              _id
            },
            user {
              _id
            }
          }
        }
      `,
      variables
    }).then(res => res.removeUserFromGroup);
  }

};

module.exports = Authing;
