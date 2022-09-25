module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1664001529473, function(require, module, exports) {
/******/ var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {

  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(2);
  /* harmony import */ var _global_api__WEBPACK_IMPORTED_MODULE_1__ = __authing_webpack_require__(3);
  
  
  
  (0,_global_api__WEBPACK_IMPORTED_MODULE_1__.initGlobalApi)(_instance__WEBPACK_IMPORTED_MODULE_0__["default"])
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_instance__WEBPACK_IMPORTED_MODULE_0__["default"]);
  
  
  /***/ }),
  /* 2 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ AuthingMove)
  /* harmony export */ });
  function AuthingMove () {}
  
  
  /***/ }),
  /* 3 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "initGlobalApi": () => (/* binding */ initGlobalApi)
  /* harmony export */ });
  /* harmony import */ var _use__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(4);
  
  
  function initGlobalApi (AuthingMove) {
    (0,_use__WEBPACK_IMPORTED_MODULE_0__.initUse)(AuthingMove)
  }
  
  
  /***/ }),
  /* 4 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "initUse": () => (/* binding */ initUse)
  /* harmony export */ });
  function initUse (AuthingMove) {
    AuthingMove.use = function use (plugin, options = {}) {
      const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
  
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }
  
      const args = [options]
  
      args.unshift(this)
  
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args)
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args)
      }
  
      installedPlugins.push(plugin)
  
      return this
    }
  }
  
  
  /***/ }),
  /* 5 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "Authing": () => (/* binding */ Authing)
  /* harmony export */ });
  /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(6);
  /* harmony import */ var _AuthingMove__WEBPACK_IMPORTED_MODULE_1__ = __authing_webpack_require__(8);
  var __assign = (undefined && undefined.__assign) || function () {
      __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  };
  
  
  var Authing = /** @class */ (function () {
      function Authing(options) {
          this.options = __assign(__assign({}, options), { host: options.host || 'https://core.authing.cn' });
          this.storage = new _helpers__WEBPACK_IMPORTED_MODULE_0__.StorageProvider();
          this.encryptFunction = options.encryptFunction;
      }
      Authing.prototype.getLoginState = function () {
          return __awaiter(this, void 0, void 0, function () {
              var res, loginState, e_1;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, , 3]);
                          return [4 /*yield*/, this.storage.get((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getLoginStateKey)(this.options.appId))];
                      case 1:
                          res = _a.sent();
                          loginState = res.data;
                          if (loginState.expires_at > Date.now()) {
                              return [2 /*return*/, loginState];
                          }
                          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('getLoginState', 'loginState has expired, please login again');
                          return [2 /*return*/, null];
                      case 2:
                          e_1 = _a.sent();
                          return [2 /*return*/, null];
                      case 3: return [2 /*return*/];
                  }
              });
          });
      };
      Authing.prototype.clearLoginState = function () {
          return __awaiter(this, void 0, void 0, function () {
              var e_2;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, , 3]);
                          return [4 /*yield*/, this.storage.remove((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getLoginStateKey)(this.options.appId))];
                      case 1:
                          _a.sent();
                          return [2 /*return*/, true];
                      case 2:
                          e_2 = _a.sent();
                          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('clearLoginState', e_2);
                          return [2 /*return*/, false];
                      case 3: return [2 /*return*/];
                  }
              });
          });
      };
      Authing.prototype.saveLoginState = function (loginState) {
          return __awaiter(this, void 0, void 0, function () {
              var _loginState;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _loginState = __assign(__assign({}, loginState), { expires_at: loginState.expires_in * 1000 + Date.now() - 3600 * 1000 * 2 });
                          return [4 /*yield*/, this.storage.set((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getLoginStateKey)(this.options.appId), _loginState)];
                      case 1:
                          _a.sent();
                          return [2 /*return*/, _loginState];
                  }
              });
          });
      };
      Authing.prototype.getPublicKey = function (encryptType) {
          return __awaiter(this, void 0, void 0, function () {
              var res, e_3;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, , 3]);
                          return [4 /*yield*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.request)({
                                  method: 'GET',
                                  url: this.options.host + "/api/v3/system"
                              })];
                      case 1:
                          res = _a.sent();
                          return [2 /*return*/, res[encryptType].publicKey];
                      case 2:
                          e_3 = _a.sent();
                          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('getPublicKey', e_3);
                          return [2 /*return*/, ''];
                      case 3: return [2 /*return*/];
                  }
              });
          });
      };
      Authing.prototype.resetWxCode = function () {
          return __awaiter(this, void 0, void 0, function () {
              var code;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, _AuthingMove__WEBPACK_IMPORTED_MODULE_1__.AuthingMove.login()];
                      case 1:
                          code = (_a.sent()).code;
                          return [4 /*yield*/, this.storage.set((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getWxLoginCodeKey)(this.options.appId), code)];
                      case 2:
                          _a.sent();
                          return [2 /*return*/, code];
                  }
              });
          });
      };
      Authing.prototype.getCachedWxLoginCode = function () {
          return __awaiter(this, void 0, void 0, function () {
              var res, e_4;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, , 3]);
                          return [4 /*yield*/, this.storage.get((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getWxLoginCodeKey)(this.options.appId))];
                      case 1:
                          res = _a.sent();
                          return [2 /*return*/, res.data];
                      case 2:
                          e_4 = _a.sent();
                          return [2 /*return*/, ''];
                      case 3: return [2 /*return*/];
                  }
              });
          });
      };
      Authing.prototype.loginByCode = function (data) {
          return __awaiter(this, void 0, void 0, function () {
              var loginState, code, e_5, extIdpConnidentifier, connection, wechatMiniProgramCodePayload, options, _data;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.getLoginState()];
                      case 1:
                          loginState = _a.sent();
                          if (loginState && loginState.expires_at > Date.now()) {
                              return [2 /*return*/, loginState];
                          }
                          return [4 /*yield*/, this.getCachedWxLoginCode()];
                      case 2:
                          code = _a.sent();
                          if (!code) return [3 /*break*/, 8];
                          _a.label = 3;
                      case 3:
                          _a.trys.push([3, 5, , 7]);
                          return [4 /*yield*/, _AuthingMove__WEBPACK_IMPORTED_MODULE_1__.AuthingMove.checkSession()];
                      case 4:
                          _a.sent();
                          console.log(123);
                          return [3 /*break*/, 7];
                      case 5:
                          e_5 = _a.sent();
                          return [4 /*yield*/, this.resetWxCode()];
                      case 6:
                          code = _a.sent();
                          console.log(456);
                          return [3 /*break*/, 7];
                      case 7: return [3 /*break*/, 10];
                      case 8: return [4 /*yield*/, this.resetWxCode()];
                      case 9:
                          code = _a.sent();
                          console.log(789);
                          _a.label = 10;
                      case 10:
                          extIdpConnidentifier = data.extIdpConnidentifier, connection = data.connection, wechatMiniProgramCodePayload = data.wechatMiniProgramCodePayload, options = data.options;
                          _data = {
                              connection: connection || 'wechat_mini_program_code',
                              extIdpConnidentifier: extIdpConnidentifier,
                              wechatMiniProgramCodePayload: __assign(__assign({}, wechatMiniProgramCodePayload), { code: code }),
                              options: options
                          };
                          return [4 /*yield*/, this.login(_data, 'code')];
                      case 11: return [2 /*return*/, _a.sent()];
                  }
              });
          });
      };
      Authing.prototype.loginByPassword = function (data) {
          var _a, _b, _c;
          return __awaiter(this, void 0, void 0, function () {
              var publicKey, _data;
              return __generator(this, function (_d) {
                  switch (_d.label) {
                      case 0:
                          if (!(((_a = data.options) === null || _a === void 0 ? void 0 : _a.passwordEncryptType) &&
                              ((_b = data.options) === null || _b === void 0 ? void 0 : _b.passwordEncryptType) !== 'none')) return [3 /*break*/, 2];
                          if (!this.encryptFunction) {
                              return [2 /*return*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('loginByPassword', 'encryptFunction is required, if passwordEncryptType is not "none"')];
                          }
                          return [4 /*yield*/, this.getPublicKey((_c = data.options) === null || _c === void 0 ? void 0 : _c.passwordEncryptType)];
                      case 1:
                          publicKey = _d.sent();
                          if (!publicKey) {
                              return [2 /*return*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('loginByPassword', 'publicKey is invalid')];
                          }
                          data.passwordPayload.password = this.encryptFunction(data.passwordPayload.password, publicKey);
                          _d.label = 2;
                      case 2:
                          _data = __assign(__assign({}, data), { connection: 'PASSWORD' });
                          return [4 /*yield*/, this.login(_data, 'password')];
                      case 3: return [2 /*return*/, _d.sent()];
                  }
              });
          });
      };
      Authing.prototype.loginByPassCode = function (data) {
          return __awaiter(this, void 0, void 0, function () {
              var _data;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (data.passCodePayload.phone) {
                              data.passCodePayload.phoneCountryCode =
                                  data.passCodePayload.phoneCountryCode || '+86';
                          }
                          _data = __assign(__assign({}, data), { connection: 'PASSCODE' });
                          return [4 /*yield*/, this.login(_data, 'passCode')];
                      case 1: return [2 /*return*/, _a.sent()];
                  }
              });
          });
      };
      Authing.prototype.logout = function () {
          return __awaiter(this, void 0, void 0, function () {
              var loginState, access_token, expires_at;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.getLoginState()];
                      case 1:
                          loginState = _a.sent();
                          if (!loginState) {
                              return [2 /*return*/, true];
                          }
                          access_token = loginState.access_token, expires_at = loginState.expires_at;
                          if (!(!access_token || expires_at < Date.now())) return [3 /*break*/, 3];
                          return [4 /*yield*/, this.clearLoginState()];
                      case 2:
                          _a.sent();
                          return [2 /*return*/, true];
                      case 3: return [4 /*yield*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.request)({
                              method: 'POST',
                              url: this.options.host + "/oidc/token/revocation",
                              data: {
                                  client_id: this.options.appId,
                                  token: access_token
                              },
                              header: {
                                  'content-type': 'application/x-www-form-urlencoded'
                              }
                          })];
                      case 4:
                          _a.sent();
                          return [4 /*yield*/, this.clearLoginState()];
                      case 5:
                          _a.sent();
                          return [2 /*return*/, true];
                  }
              });
          });
      };
      Authing.prototype.sendSms = function (data) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          data.phoneCountryCode = data.phoneCountryCode || '+86';
                          return [4 /*yield*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.request)({
                                  method: 'POST',
                                  url: this.options.host + "/api/v3/send-sms",
                                  data: data,
                                  header: {
                                      'x-authing-userpool-id': this.options.userPoolId
                                  }
                              })];
                      case 1: return [2 /*return*/, _a.sent()];
                  }
              });
          });
      };
      Authing.prototype.login = function (data, type) {
          return __awaiter(this, void 0, void 0, function () {
              var urlMap, res, loginState;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          urlMap = {
                              code: '/api/v3/signin-by-mobile',
                              phone: '/api/v3/signin-by-mobile',
                              password: '/api/v3/signin',
                              passCode: '/api/v3/signin'
                          };
                          return [4 /*yield*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.request)({
                                  method: 'POST',
                                  url: this.options.host + urlMap[type],
                                  data: data,
                                  header: {
                                      'x-authing-app-id': this.options.appId
                                  }
                              })];
                      case 1:
                          res = _a.sent();
                          if (!(res.access_token || res.id_token)) return [3 /*break*/, 3];
                          return [4 /*yield*/, this.saveLoginState(res)];
                      case 2:
                          loginState = _a.sent();
                          return [2 /*return*/, loginState];
                      case 3: return [4 /*yield*/, this.clearLoginState()];
                      case 4:
                          _a.sent();
                          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('login', res);
                          return [2 /*return*/];
                  }
              });
          });
      };
      Authing.prototype.refreshToken = function () {
          return __awaiter(this, void 0, void 0, function () {
              var loginState, refresh_token, expires_at, data, res, loginState_1;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.getLoginState()];
                      case 1:
                          loginState = _a.sent();
                          if (!loginState) {
                              return [2 /*return*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('refreshToken', 'refresh_token has expired, please login again')];
                          }
                          refresh_token = loginState.refresh_token, expires_at = loginState.expires_at;
                          if (!refresh_token) {
                              return [2 /*return*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('refreshToken', 'refresh_token must not be empty')];
                          }
                          if (expires_at < Date.now()) {
                              return [2 /*return*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('refreshToken', 'refresh_token has expired, please login again')];
                          }
                          data = {
                              grant_type: 'refresh_token',
                              redirect_uri: '',
                              refresh_token: refresh_token
                          };
                          return [4 /*yield*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.request)({
                                  method: 'POST',
                                  url: this.options.host + "/oidc/token",
                                  data: data,
                                  header: {
                                      'content-type': 'application/x-www-form-urlencoded',
                                      'x-authing-app-id': this.options.appId
                                  }
                              })];
                      case 2:
                          res = _a.sent();
                          if (!(res.access_token || res.id_token)) return [3 /*break*/, 4];
                          return [4 /*yield*/, this.saveLoginState(res)];
                      case 3:
                          loginState_1 = _a.sent();
                          return [2 /*return*/, loginState_1];
                      case 4:
                          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('refreshToken', res);
                          return [2 /*return*/];
                  }
              });
          });
      };
      Authing.prototype.updatePassword = function (data) {
          return __awaiter(this, void 0, void 0, function () {
              var loginState, access_token, expires_at, publicKey, res;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.getLoginState()];
                      case 1:
                          loginState = _a.sent();
                          if (!loginState) {
                              (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('updatePassword', 'Token has expired, please login again');
                              return [2 /*return*/, false];
                          }
                          access_token = loginState.access_token, expires_at = loginState.expires_at;
                          if (expires_at < Date.now()) {
                              (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('updatePassword', 'Token has expired, please login again');
                              return [2 /*return*/, false];
                          }
                          if (!(data.passwordEncryptType && data.passwordEncryptType !== 'none')) return [3 /*break*/, 3];
                          if (!this.encryptFunction) {
                              (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('updatePassword', 'encryptFunction is required, if passwordEncryptType is not "none"');
                              return [2 /*return*/, false];
                          }
                          return [4 /*yield*/, this.getPublicKey(data.passwordEncryptType)];
                      case 2:
                          publicKey = _a.sent();
                          if (!publicKey) {
                              (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('loginByPassword', 'publicKey is invalid');
                              return [2 /*return*/, false];
                          }
                          data.newPassword = this.encryptFunction(data.newPassword, publicKey);
                          _a.label = 3;
                      case 3: return [4 /*yield*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.request)({
                              method: 'POST',
                              url: this.options.host + "/api/v3/update-password",
                              data: data,
                              header: {
                                  'x-authing-userpool-id': this.options.userPoolId,
                                  Authorization: access_token
                              }
                          })];
                      case 4:
                          res = _a.sent();
                          if (res.statusCode === 200) {
                              return [2 /*return*/, true];
                          }
                          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('updatePassword', res);
                          return [2 /*return*/, false];
                  }
              });
          });
      };
      Authing.prototype.getUserInfo = function () {
          return __awaiter(this, void 0, void 0, function () {
              var loginState, access_token, expires_at, res;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.getLoginState()];
                      case 1:
                          loginState = _a.sent();
                          if (!loginState) {
                              return [2 /*return*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('getUserInfo', 'Token has expired, please login again')];
                          }
                          access_token = loginState.access_token, expires_at = loginState.expires_at;
                          if (expires_at < Date.now()) {
                              return [2 /*return*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('getUserInfo', 'Token has expired, please login again')];
                          }
                          return [4 /*yield*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.request)({
                                  method: 'GET',
                                  url: this.options.host + "/api/v3/get-profile",
                                  header: {
                                      'x-authing-userpool-id': this.options.userPoolId,
                                      Authorization: access_token
                                  }
                              })];
                      case 2:
                          res = _a.sent();
                          if (res.userId) {
                              return [2 /*return*/, res];
                          }
                          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('getUserInfo', res);
                          return [2 /*return*/];
                  }
              });
          });
      };
      Authing.prototype.updateAvatar = function () {
          return __awaiter(this, void 0, void 0, function () {
              var res, uploadRes, parsedUploadRed, e_6;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 4, , 5]);
                          return [4 /*yield*/, _AuthingMove__WEBPACK_IMPORTED_MODULE_1__.AuthingMove.chooseImage({
                                  count: 1,
                                  sourceType: ['album', 'camera'],
                                  sizeType: ['original']
                              })];
                      case 1:
                          res = _a.sent();
                          return [4 /*yield*/, _AuthingMove__WEBPACK_IMPORTED_MODULE_1__.AuthingMove.uploadFile({
                                  url: this.options.host + "/api/v2/upload?folder=avatar",
                                  name: 'file',
                                  filePath: res.tempFiles[0].tempFilePath
                              })];
                      case 2:
                          uploadRes = _a.sent();
                          parsedUploadRed = JSON.parse(uploadRes.data);
                          return [4 /*yield*/, this.updateUserInfo({
                                  photo: parsedUploadRed.data.url
                              })];
                      case 3:
                          _a.sent();
                          return [2 /*return*/, parsedUploadRed];
                      case 4:
                          e_6 = _a.sent();
                          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('updateAvatar', e_6);
                          return [3 /*break*/, 5];
                      case 5: return [2 /*return*/];
                  }
              });
          });
      };
      Authing.prototype.updateUserInfo = function (data) {
          return __awaiter(this, void 0, void 0, function () {
              var loginState, access_token, expires_at, res;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.getLoginState()];
                      case 1:
                          loginState = _a.sent();
                          if (!loginState) {
                              return [2 /*return*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('updateUserInfo', 'Token has expired, please login again')];
                          }
                          access_token = loginState.access_token, expires_at = loginState.expires_at;
                          if (expires_at < Date.now()) {
                              return [2 /*return*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('updateUserInfo', 'Token has expired, please login again')];
                          }
                          return [4 /*yield*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.request)({
                                  method: 'POST',
                                  url: this.options.host + "/api/v3/update-profile",
                                  data: data,
                                  header: {
                                      'x-authing-userpool-id': this.options.userPoolId,
                                      Authorization: access_token
                                  }
                              })];
                      case 2:
                          res = _a.sent();
                          if (res.userId) {
                              return [2 /*return*/, res];
                          }
                          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('updateUserInfo', res);
                          return [2 /*return*/];
                  }
              });
          });
      };
      Authing.prototype.getPhone = function (data) {
          return __awaiter(this, void 0, void 0, function () {
              var res;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.request)({
                              method: 'POST',
                              url: this.options.host + "/api/v3/get-wechat-miniprogram-phone",
                              data: data,
                              header: {
                                  'x-authing-userpool-id': this.options.userPoolId
                              }
                          })];
                      case 1:
                          res = _a.sent();
                          return [2 /*return*/, res.phone_info || (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)('getPhone', res)];
                  }
              });
          });
      };
      return Authing;
  }());
  
  
  
  /***/ }),
  /* 6 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "StorageProvider": () => (/* reexport safe */ _StorageProvider__WEBPACK_IMPORTED_MODULE_0__.StorageProvider),
  /* harmony export */   "error": () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_3__.error),
  /* harmony export */   "getLoginStateKey": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getLoginStateKey),
  /* harmony export */   "getWxLoginCodeKey": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getWxLoginCodeKey),
  /* harmony export */   "request": () => (/* reexport safe */ _request__WEBPACK_IMPORTED_MODULE_1__.request)
  /* harmony export */ });
  /* harmony import */ var _StorageProvider__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(7);
  /* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __authing_webpack_require__(23);
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __authing_webpack_require__(25);
  /* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __authing_webpack_require__(26);
  
  
  
  
  
  
  /***/ }),
  /* 7 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "StorageProvider": () => (/* binding */ StorageProvider)
  /* harmony export */ });
  /* harmony import */ var _AuthingMove__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(8);
  
  var StorageProvider = /** @class */ (function () {
      function StorageProvider() {
      }
      StorageProvider.prototype.get = function (key) {
          return _AuthingMove__WEBPACK_IMPORTED_MODULE_0__.AuthingMove.getStorage({
              key: key
          });
      };
      StorageProvider.prototype.set = function (key, data) {
          return _AuthingMove__WEBPACK_IMPORTED_MODULE_0__.AuthingMove.setStorage({
              key: key,
              data: data
          });
      };
      StorageProvider.prototype.remove = function (key) {
          return _AuthingMove__WEBPACK_IMPORTED_MODULE_0__.AuthingMove.removeStorage({
              key: key
          });
      };
      return StorageProvider;
  }());
  
  
  
  /***/ }),
  /* 8 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "AuthingMove": () => (/* reexport safe */ _authing_authingmove_core__WEBPACK_IMPORTED_MODULE_0__["default"])
  /* harmony export */ });
  /* harmony import */ var _authing_authingmove_core__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(1);
  /* harmony import */ var _authing_authingmove_api_proxy__WEBPACK_IMPORTED_MODULE_1__ = __authing_webpack_require__(9);
  
  
  _authing_authingmove_core__WEBPACK_IMPORTED_MODULE_0__["default"].use(_authing_authingmove_api_proxy__WEBPACK_IMPORTED_MODULE_1__["default"]);
  
  
  
  /***/ }),
  /* 9 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ install)
  /* harmony export */ });
  /* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(10);
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __authing_webpack_require__(11);
  /* harmony import */ var _promisify__WEBPACK_IMPORTED_MODULE_2__ = __authing_webpack_require__(22);
  
  
  
  
  function install (AuthingMove, options = {}) {
    const {
      custom = {} // custom transform rules
    } = options
    const from = "wx" || 0
    const to = "wx" || 0
  
    const transformedApis = (0,_transform__WEBPACK_IMPORTED_MODULE_0__["default"])({
      from,
      to,
      custom
    })
  
    // reserve some expansion space
    const apis = Object.assign({}, transformedApis, (0,_promisify__WEBPACK_IMPORTED_MODULE_2__.promisify)(transformedApis))
  
    Object.keys(apis).forEach(api => {
      try {
        if (typeof apis[api] !== 'function') {
          AuthingMove[api] = apis[api]
          return
        }
  
        AuthingMove[api] = (...args) => apis[api].apply(AuthingMove, args)
      } catch (e) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)(`Call ${AuthingMove}.${api} error:` + JSON.stringify(e))
      }
    })
  }
  
  
  /***/ }),
  /* 10 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ transformApi)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  /* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_1__ = __authing_webpack_require__(13);
  
  
  
  const fromMap = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateFromMap)()
  
  function joinName (from = '', to = '') {
    const _from = `__authing_move_src_mode_${from}__`
    return `${fromMap[_from]}_${to}`
  }
  
  function transformApi (options) {
    const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
    const needProxy = Object.create(null)
  
    Object.keys(_apis__WEBPACK_IMPORTED_MODULE_1__).forEach(key => {
      needProxy[key] = envContext[key] || _apis__WEBPACK_IMPORTED_MODULE_1__[key]
    })
  
    const apis = Object.create(null)
  
    Object.keys(needProxy).forEach(api => {
      if (typeof needProxy[api] !== 'function') {
        apis[api] = needProxy[api]
        return
      }
  
      apis[api] = (...args) => {
        let from = options.from
        const to = options.to
  
        if (args.length) {
          from = args.pop()
  
          if (typeof from !== 'string' || !fromMap[from]) {
            args.push(from)
            from = options.from
          }
        }
  
        const fromTo = joinName(from, to)
  
        if (options.custom[fromTo] && options.custom[fromTo][api]) {
          return options.custom[fromTo][api].apply(this, args)
        }
  
        if (_apis__WEBPACK_IMPORTED_MODULE_1__[api]) {
          return _apis__WEBPACK_IMPORTED_MODULE_1__[api].apply(this, args)
        }
  
        if (envContext[api]) {
          return envContext[api].apply(this, args)
        }
  
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.error)(`"${api}" method does not exist in the current context`)
      }
    })
  
    return apis
  }
  
  
  /***/ }),
  /* 11 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "adaptOptions": () => (/* binding */ adaptOptions),
  /* harmony export */   "error": () => (/* binding */ error),
  /* harmony export */   "generateFromMap": () => (/* binding */ generateFromMap),
  /* harmony export */   "getEnvContext": () => (/* reexport safe */ _runtime_env__WEBPACK_IMPORTED_MODULE_0__.getEnvContext),
  /* harmony export */   "handleSuccess": () => (/* binding */ handleSuccess),
  /* harmony export */   "makeMap": () => (/* binding */ makeMap),
  /* harmony export */   "noop": () => (/* binding */ noop),
  /* harmony export */   "transformTempFiles": () => (/* binding */ transformTempFiles),
  /* harmony export */   "warn": () => (/* binding */ warn)
  /* harmony export */ });
  /* harmony import */ var _runtime_env__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(12);
  
  
  function generateFromMap () {
    const platforms = ['wx', 'ali', 'baidu', 'qq', 'tt', 'jd', 'ks', 'qa_webview', 'qa_ux', 'Mpx', 'Taro', 'uni']
    return platforms.reduce((map, platform) => {
      map[`__authing_move_src_mode_${platform}__`] = platform
      return map
    }, {})
  }
  
  function makeMap (arr) {
    return arr.reduce((map, item) => {
      map[item] = true
      return map
    }, {})
  }
  
  function warn (message) {
    console.warn && console.warn(`[AuthingMove/api-proxy warn in "${"wx"}"]:\n ${message}`)
  }
  
  function error (message) {
    console.error && console.error(`[AuthingMove/api-proxy error in "${"wx"}"]:\n ${message}`)
  }
  
  function noop () {}
  
  function adaptOptions (originalOptions, matchedOptions = {}, extraOptions = {}) {
    let options = {}
  
    Object.keys(originalOptions).forEach(key => {
      const _key = matchedOptions.hasOwnProperty(key) ? matchedOptions[key] : key
      if (_key) {
        options[_key] = originalOptions[key]
      }
    })
  
    options = Object.assign({}, options, extraOptions)
  
    return options
  }
  
  function handleSuccess (originalOptions, wrappedSuccess = noop, context) {
    if (!originalOptions.success) {
      return
    }
  
    const _this = context || this
    const cachedSuccess = originalOptions.success
  
    originalOptions.success = res => cachedSuccess.call(_this, wrappedSuccess(res) || res)
  }
  
  function transformTempFiles (tempFiles) {
    return tempFiles.map(file => {
      return {
        ...file,
        tempFilePath: file.path
      }
    })
  }
  
  
  /***/ }),
  /* 12 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "getEnvContext": () => (/* binding */ getEnvContext)
  /* harmony export */ });
  function getEnvContext () {
    const noopEnv = {}
  
    switch ("wx") {
    case 'wx':
    case 'Mpx':
      return wx
    case 'ali':
      return my
    case 'baidu':
      return swan
    case 'qq':
      return qq
    case 'tt':
      return tt
    case 'jd':
      return jd
    case 'ks':
      return ks
    case 'qa_webview':
      return qa
    case 'qa_ux':
      return noopEnv
    case 'Taro':
      return Taro
    case 'uni':
      return uni
    }
  }
  
  
  /***/ }),
  /* 13 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "checkSession": () => (/* reexport safe */ _checkSession_checkSession__WEBPACK_IMPORTED_MODULE_7__.checkSession),
  /* harmony export */   "chooseImage": () => (/* reexport safe */ _image_image__WEBPACK_IMPORTED_MODULE_4__.chooseImage),
  /* harmony export */   "clearStorage": () => (/* reexport safe */ _storage_storage__WEBPACK_IMPORTED_MODULE_3__.clearStorage),
  /* harmony export */   "getStorage": () => (/* reexport safe */ _storage_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage),
  /* harmony export */   "getUserProfile": () => (/* reexport safe */ _userInfo_getUserProfile__WEBPACK_IMPORTED_MODULE_6__.getUserProfile),
  /* harmony export */   "login": () => (/* reexport safe */ _login_login__WEBPACK_IMPORTED_MODULE_0__.login),
  /* harmony export */   "removeStorage": () => (/* reexport safe */ _storage_storage__WEBPACK_IMPORTED_MODULE_3__.removeStorage),
  /* harmony export */   "request": () => (/* reexport safe */ _request_request__WEBPACK_IMPORTED_MODULE_1__.request),
  /* harmony export */   "scanCode": () => (/* reexport safe */ _scan_scan__WEBPACK_IMPORTED_MODULE_2__.scanCode),
  /* harmony export */   "setStorage": () => (/* reexport safe */ _storage_storage__WEBPACK_IMPORTED_MODULE_3__.setStorage),
  /* harmony export */   "uploadFile": () => (/* reexport safe */ _upload_upload__WEBPACK_IMPORTED_MODULE_5__.uploadFile)
  /* harmony export */ });
  /* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(14);
  /* harmony import */ var _request_request__WEBPACK_IMPORTED_MODULE_1__ = __authing_webpack_require__(15);
  /* harmony import */ var _scan_scan__WEBPACK_IMPORTED_MODULE_2__ = __authing_webpack_require__(16);
  /* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __authing_webpack_require__(17);
  /* harmony import */ var _image_image__WEBPACK_IMPORTED_MODULE_4__ = __authing_webpack_require__(18);
  /* harmony import */ var _upload_upload__WEBPACK_IMPORTED_MODULE_5__ = __authing_webpack_require__(19);
  /* harmony import */ var _userInfo_getUserProfile__WEBPACK_IMPORTED_MODULE_6__ = __authing_webpack_require__(20);
  /* harmony import */ var _checkSession_checkSession__WEBPACK_IMPORTED_MODULE_7__ = __authing_webpack_require__(21);
  
  
  
  
  
  
  
  
  
  
  /***/ }),
  /* 14 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "login": () => (/* binding */ login)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  
  
  const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  
  function login (options = {}) {
    return envContext.login(options)
  }
  
  
  /***/ }),
  /* 15 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "request": () => (/* binding */ request)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  
  
  const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  
  function request (options = {}) {
    return envContext.request(options)
  }
  
  
  /***/ }),
  /* 16 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "scanCode": () => (/* binding */ scanCode)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  
  
  const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  
  function scanCode (options = {}) {
    return envContext.scanCode(options)
  }
  
  
  /***/ }),
  /* 17 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "clearStorage": () => (/* binding */ clearStorage),
  /* harmony export */   "getStorage": () => (/* binding */ getStorage),
  /* harmony export */   "removeStorage": () => (/* binding */ removeStorage),
  /* harmony export */   "setStorage": () => (/* binding */ setStorage)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  
  
  const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  
  function setStorage (options = {}) {
    const _options = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(options, {}, {
      encrypt: false
    })
    return envContext.setStorage(_options)
  }
  
  function getStorage (options = {}) {
    const _options = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(options, {}, {
      encrypt: false
    })
    return envContext.getStorage(_options)
  }
  
  function removeStorage (options = {}) {
    return envContext.removeStorage(options)
  }
  
  function clearStorage (options = {}) {
    return envContext.clearStorage(options)
  }
  
  
  /***/ }),
  /* 18 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "chooseImage": () => (/* binding */ chooseImage)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  
  
  const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  
  function chooseImage (options = {}) {
    return envContext.chooseMedia(options)
  }
  
  
  /***/ }),
  /* 19 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "uploadFile": () => (/* binding */ uploadFile)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  
  
  const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  
  function uploadFile (options = {}) {
    return envContext.uploadFile(options)
  }
  
  
  /***/ }),
  /* 20 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "getUserProfile": () => (/* binding */ getUserProfile)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  
  
  const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  
  function getUserProfile (options = {}) {
    return envContext.getUserProfile(options)
  }
  
  
  /***/ }),
  /* 21 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "checkSession": () => (/* binding */ checkSession)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  
  
  const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  
  function checkSession (options = {}) {
    return envContext.checkSession(options)
  }
  
  
  /***/ }),
  /* 22 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "promisify": () => (/* binding */ promisify)
  /* harmony export */ });
  /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(11);
  
  
  const envContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  
  function promisify (apis) {
    const fromMap = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateFromMap)()
  
    return Object.keys(apis).reduce((map, key) => {
      if (typeof apis[key] !== 'function') {
        return map
      }
  
      map[key] = function (...args) {
        if (promisifyFilter(key)) {
          return apis[key].apply(apis, args)
        }
  
        if (!args[0] || fromMap[args[0]]) {
          args.unshift({
            success: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
            fail: _utils__WEBPACK_IMPORTED_MODULE_0__.noop
          })
        }
  
        const options = args[0]
        let returned
  
        const promise = new Promise((resolve, reject) => {
          const originalSuccess = options.success
          const originalFail = options.fail
  
          options.success = function success (res) {
            originalSuccess && originalSuccess.call(this, res)
            resolve(res)
          }
  
          options.fail = function fail (res) {
            originalFail && originalFail.call(this, res)
            reject(res)
          }
  
          returned = apis[key].apply(envContext, args)
        })
  
        promise.__returned = returned
        return promise
      }
  
      return map
    }, {})
  }
  
  function promisifyFilter (key) {
    return /^get\w*Manager$/.test(key) ||
      /^create\w*Context$/.test(key) ||
      /^(on|off)/.test(key) ||
      /\w+Sync$/.test(key)
  }
  
  
  /***/ }),
  /* 23 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "request": () => (/* binding */ request)
  /* harmony export */ });
  /* harmony import */ var _AuthingMove__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(8);
  /* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __authing_webpack_require__(24);
  var __assign = (undefined && undefined.__assign) || function () {
      __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  };
  
  
  function request(options) {
      return __awaiter(this, void 0, void 0, function () {
          var _options, data, e_1;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      _a.trys.push([0, 2, , 3]);
                      _options = Object.assign({}, options, {
                          header: __assign(__assign({}, options.header), { 'x-authing-request-from': 'sdk-miniapp', 'x-authing-sdk-version': _package_json__WEBPACK_IMPORTED_MODULE_1__.version })
                      });
                      return [4 /*yield*/, _AuthingMove__WEBPACK_IMPORTED_MODULE_0__.AuthingMove.request(_options)
                          // /oidc/token 直接返回 data，没有 data.data
                          // /api/v3/update-password 只返回 message 和 statusCode，没有 data.data
                      ];
                  case 1:
                      data = (_a.sent()).data;
                      // /oidc/token 直接返回 data，没有 data.data
                      // /api/v3/update-password 只返回 message 和 statusCode，没有 data.data
                      return [2 /*return*/, data.data || data];
                  case 2:
                      e_1 = _a.sent();
                      return [2 /*return*/, e_1];
                  case 3: return [2 /*return*/];
              }
          });
      });
  }
  
  
  /***/ }),
  /* 24 */
  /***/ ((module) => {
  
  module.exports = JSON.parse('{"name":"@authing/miniapp","version":"5.0.5-alpha.0","description":"Authing miniapp sdk source code","main":"src/index.ts","module":"src/index.ts","scripts":{"autoinstall":"npm ci","dev":"node ./scripts/build.js watch","build":"node ./scripts/build.js","release:official":"npm publish --verbose --access public","release:alpha":"npm publish --verbose --tag=alpha --access public"},"dependencies":{"@authing/authingmove-api-proxy":"^1.0.1-alpha.13","@authing/authingmove-core":"^1.0.1-alpha.13"},"devDependencies":{"@authing/authingmove-webpack-plugin":"^1.0.1-alpha.13"},"repository":{"type":"git","url":"git+https://github.com/Authing/authing-js-sdk.git"},"author":"https://github.com/authing","license":"MIT","bugs":{"url":"https://github.com/Authing/authing-js-sdk/issues"},"homepage":"https://github.com/Authing/authing-js-sdk#readme","publishConfig":{"access":"public","registry":"https://registry.npmjs.org"}}');
  
  /***/ }),
  /* 25 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "getLoginStateKey": () => (/* binding */ getLoginStateKey),
  /* harmony export */   "getWxLoginCodeKey": () => (/* binding */ getWxLoginCodeKey)
  /* harmony export */ });
  function getLoginStateKey(appId) {
      return ['authing', appId, 'login-state'].join(':');
  }
  function getWxLoginCodeKey(appId) {
      return ['authing', appId, 'wx-login-code'].join(':');
  }
  
  
  /***/ }),
  /* 26 */
  /***/ ((__unused_webpack_module, __authing_webpack_exports__, __authing_webpack_require__) => {
  
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "error": () => (/* binding */ error)
  /* harmony export */ });
  function error(errorFunction, errorContent) {
      console.error("Authing Miniapp SDK error in \"" + errorFunction + "\": ", errorContent);
  }
  
  
  /***/ })
  /******/ ]);
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/ 
  /******/ // The require function
  /******/ function __authing_webpack_require__(moduleId) {
  /******/ 	// Check if module is in cache
  /******/ 	var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 	if (cachedModule !== undefined) {
  /******/ 		return cachedModule.exports;
  /******/ 	}
  /******/ 	// Create a new module (and put it into the cache)
  /******/ 	var module = __webpack_module_cache__[moduleId] = {
  /******/ 		// no module.id needed
  /******/ 		// no module.loaded needed
  /******/ 		exports: {}
  /******/ 	};
  /******/ 
  /******/ 	// Execute the module function
  /******/ 	__webpack_modules__[moduleId](module, module.exports, __authing_webpack_require__);
  /******/ 
  /******/ 	// Return the exports of the module
  /******/ 	return module.exports;
  /******/ }
  /******/ 
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
  /******/ 	// define getter functions for harmony exports
  /******/ 	__authing_webpack_require__.d = (exports, definition) => {
  /******/ 		for(var key in definition) {
  /******/ 			if(__authing_webpack_require__.o(definition, key) && !__authing_webpack_require__.o(exports, key)) {
  /******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 			}
  /******/ 		}
  /******/ 	};
  /******/ })();
  /******/ 
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
  /******/ 	__authing_webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ })();
  /******/ 
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
  /******/ 	// define __esModule on exports
  /******/ 	__authing_webpack_require__.r = (exports) => {
  /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 		}
  /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 	};
  /******/ })();
  /******/ 
  /************************************************************************/
  var __authing_webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
  __authing_webpack_require__.r(__authing_webpack_exports__);
  /* harmony export */ __authing_webpack_require__.d(__authing_webpack_exports__, {
  /* harmony export */   "Authing": () => (/* reexport safe */ _Authing__WEBPACK_IMPORTED_MODULE_1__.Authing)
  /* harmony export */ });
  /* harmony import */ var _authing_authingmove_core__WEBPACK_IMPORTED_MODULE_0__ = __authing_webpack_require__(1);
  /* harmony import */ var _Authing__WEBPACK_IMPORTED_MODULE_1__ = __authing_webpack_require__(5);
  
  
  
  })();
  
  var __authing_webpack_exports__Authing = __authing_webpack_exports__.Authing;
  if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Authing', { enumerable: true, configurable: true, get: function() { return __authing_webpack_exports__Authing; } });
  
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1664001529473);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map