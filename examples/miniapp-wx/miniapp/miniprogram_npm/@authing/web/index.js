module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1663598227735, function(require, module, exports) {
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("axios")):"function"==typeof define&&define.amd?define(["exports","axios"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).AuthingFactory={},e.axios)}(this,(function(e,t){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(t),r=function(){return r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};function i(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{a(n.next(e))}catch(e){i(e)}}function c(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,c)}a((n=n.apply(e,t||[])).next())}))}function s(e,t){var o,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function c(e){var t,o;return i(this,void 0,void 0,(function(){var n,r,i,c;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,e];case 1:return[2,s.sent()];case 2:if(n=s.sent(),n.isAxiosError&&(null===(o=null===(t=n.response)||void 0===t?void 0:t.data)||void 0===o?void 0:o.error))throw r=n.response.data,i=r.error,c=r.error_description,new Error("认证服务器返回错误 ".concat(i,": ").concat(c));throw n;case 3:return[2]}}))}))}function a(e,t){return i(this,void 0,void 0,(function(){var o;return s(this,(function(r){return o=d(t),[2,c(n.default.get(e,o))]}))}))}function u(e,t,o){return i(this,void 0,void 0,(function(){var r;return s(this,(function(i){return r=d(o),[2,c(n.default.post(e,t,r))]}))}))}function d(e){return Object.assign({},e||{},{headers:r(r({},null==e?void 0:e.headers),{"x-authing-request-from":"sdk-web","x-authing-sdk-version":"5.0.2"})})}var l="".concat("authing-spa",":").concat("1"),p="另一个认证流程正在进行中，请不要同时发起多个认证",h=function(){function e(){this.storage=Object.create(null)}return e.prototype.get=function(e){var t;return null!==(t=this.storage[e])&&void 0!==t?t:null},e.prototype.put=function(e,t){this.storage[e]=t},e.prototype.delete=function(e){delete this.storage[e]},e}(),f=function(){function e(){}return e.prototype.get=function(e){var t=localStorage.getItem(e);return null===t?null:JSON.parse(t)},e.prototype.put=function(e,t){localStorage.setItem(e,JSON.stringify(t))},e.prototype.delete=function(e){localStorage.removeItem(e)},e}(),g=function(){function e(){}return e.prototype.get=function(){return null},e.prototype.put=function(){},e.prototype.delete=function(){},e}(),v=function(){function e(){}return e.prototype.get=function(e){var t=sessionStorage.getItem(e);return null===t?null:JSON.parse(t)},e.prototype.put=function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},e.prototype.delete=function(e){sessionStorage.removeItem(e)},e}();function w(e){return Object.keys(e).filter((function(t){return null!==e[t]&&void 0!==e[t]})).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}function m(e){return[l,e,"login-state"].join(":")}function y(e,t){return[l,e,"tx",t].join(":")}function b(){return window.crypto||window.msCrypto}function k(){var e=b();return e.subtle||e.webkitSubtle}function _(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";return Array.from(b().getRandomValues(new Uint8Array(e))).map((function(e){return t[e%t.length]})).join("")}function T(e){for(var t=[],o=0;o<e.length;++o)t.push(e.charCodeAt(o));return new Uint8Array(t)}function I(e){return void 0===e&&(e="SHA-256"),i(this,void 0,void 0,(function(){var t,o;return s(this,(function(n){switch(n.label){case 0:return t=_(43),[4,k().digest(e,T(t))];case 1:return o=n.sent(),[2,{codeChallenge:function(e){for(var t=new Uint8Array(e),o="",n=0;n<t.byteLength;++n)o+=String.fromCharCode(t[n]);var r=window.btoa(o),i={"+":"-","/":"_","=":""};return r.replace(/[+/=]/g,(function(e){return i[e]}))}(o),codeVerifier:t}]}}))}))}function S(e){var t=e.split("."),o=t[0],n=t[1];if(!t[2])throw new Error("无效的 Token 格式");var r=JSON.parse(window.atob(o));if(r.enc)throw new Error("本 SDK 目前不支持处理加密 Token, 请在应用配置中关闭「ID Token 加密」功能");return n=n.replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(n).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")),{header:r,body:JSON.parse(n)}}var E=function(){function e(e){var t,o,n,r,i;if(this.options=e,this.domain=function(e){var t,o=/^((?:http)|(?:https):\/\/)?((?:[\w-_]+)(?:\.[\w-_]+)+)(?:\/.*)?$/.exec(e);if(o&&o[2])return"".concat(null!==(t=o[1])&&void 0!==t?t:"https://").concat(o[2]);throw Error("无效的域名配置: ".concat(e))}(this.options.domain),!(e.useImplicitMode||b()&&k()))throw new Error("PKCE 模式需要浏览器 crypto 能力, 请确保浏览器处于 https 域名下，或设置 useImplicitMode 为 true");"object"==typeof localStorage?this.loginStateProvider=new f:(console.warn("您的浏览器版本过低，登录态存储功能将不可用"),this.loginStateProvider=new h),"object"==typeof sessionStorage?this.transactionProvider=new v:(e.useImplicitMode||console.warn("您的浏览器版本过低，PKCE 重定向认证功能将不可用，请设置 useImplicitMode 为 true"),this.transactionProvider=new g),e.implicitResponseType=null!==(t=e.implicitResponseType)&&void 0!==t?t:"id_token token",e.redirectResponseMode=null!==(o=e.redirectResponseMode)&&void 0!==o?o:"fragment",e.popupWidth=null!==(n=e.popupWidth)&&void 0!==n?n:800,e.popupHeight=null!==(r=e.popupHeight)&&void 0!==r?r:600,e.scope=null!==(i=e.scope)&&void 0!==i?i:"openid profile"}return e.prototype.getLoginState=function(e){var t;return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var o,n,r,i,c,a,d,l,h,f,g;return s(this,(function(s){switch(s.label){case 0:return e.ignoreCache?[3,3]:[4,this.loginStateProvider.get(m(this.options.appId))];case 1:return(o=s.sent())&&o.expireAt&&o.expireAt>Date.now()?this.options.introspectAccessToken&&o.accessToken?[4,u("".concat(this.domain,"/oidc/token/introspection"),w({client_id:this.options.appId,token:o.accessToken}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})]:[2,o]:[3,3];case 2:if(!0===s.sent().data.active)return[2,o];s.label=3;case 3:return[4,this.loginStateProvider.delete(m(this.options.appId))];case 4:if(s.sent(),void 0!==this.globalMsgListener)throw new Error(p);return this.globalMsgListener=null,window.crossOriginIsolated?(console.warn("当前页面运行在隔离模式下，无法获取登录态"),[2,null]):(n=_(16),r=_(16),c=null!==(t=this.options.redirectUri)&&void 0!==t?t:window.location.origin,a={redirect_uri:c,response_mode:"web_message",response_type:this.options.useImplicitMode?this.options.implicitResponseType:"code",client_id:this.options.appId,state:n,nonce:r,prompt:"none",scope:this.options.scope},this.options.useImplicitMode?[3,6]:[4,I()]);case 5:d=s.sent(),l=d.codeChallenge,h=d.codeVerifier,i=h,a.code_challenge=l,a.code_challenge_method="S256",s.label=6;case 6:return(f=document.createElement("iframe")).hidden=!0,f.width=f.height="0",f.src="".concat(this.domain,"/oidc/auth?").concat(w(a)),window.navigator.userAgent.indexOf("MSIE")>=1||window.navigator.userAgent.indexOf("Trident")>=1&&window.navigator.userAgent.indexOf("rv")>=1||window.navigator.userAgent.indexOf("Edge")>=1?document.body.appendChild(f):document.body.append(f),[4,Promise.race([this.listenToPostMessage(n),new Promise((function(e){return setTimeout((function(){return e(null)}),5e3)}))])];case 7:if(g=s.sent(),this.globalMsgListener&&window.removeEventListener("message",this.globalMsgListener),this.globalMsgListener=void 0,f.remove(),null===g)return console.warn("登录态获取超时"),[2,null];if(g.error)return"login_required"!==g.error?console.warn("登录态获取失败，认证服务器返回错误: error=".concat(g.error,", error_description=").concat(g.errorDesc)):console.info("用户未登录"),[2,null];if(g.state!==n)throw new Error("state 验证失败");return[2,this.handleOIDCWebMsgResponse(g,r,c,i)]}}))}))},e.prototype.loginWithRedirect=function(e){var t;return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var o,n,i,c,a,u,d,l;return s(this,(function(s){switch(s.label){case 0:if(!(o=e.redirectUri||this.options.redirectUri))throw new Error("必须设置 redirect_uri");return n=_(16),i=_(16),c=r(r({redirect_uri:o,response_mode:this.options.redirectResponseMode,response_type:this.options.useImplicitMode?this.options.implicitResponseType:"code",client_id:this.options.appId},e.forced&&{prompt:"login"}),{state:n,nonce:i,scope:this.options.scope}),this.options.useImplicitMode?[3,2]:[4,I()];case 1:u=s.sent(),d=u.codeChallenge,l=u.codeVerifier,c.code_challenge=d,c.code_challenge_method="S256",a=l,s.label=2;case 2:return[4,this.transactionProvider.put(y(this.options.appId,n),r(r({codeVerifier:a,state:n,redirectUri:o,nonce:i},this.options.redirectToOriginalUri&&{originalUri:null!==(t=e.originalUri)&&void 0!==t?t:window.location.href}),void 0!==e.customState&&{customState:e.customState}))];case 3:return s.sent(),window.location.replace("".concat(this.domain,"/oidc/auth?").concat(w(c))),[2]}}))}))},e.prototype.isRedirectCallback=function(){var e=this.resolveCallbackParams();return!!e&&(!!e.error||(this.options.useImplicitMode?!(!e.access_token&&!e.id_token):!!e.code))},e.prototype.handleRedirectCallback=function(){return i(this,void 0,void 0,(function(){var e,t,o,n,i,c,a,u,d,l,p;return s(this,(function(s){switch(s.label){case 0:if(!(e=this.resolveCallbackParams()))throw new Error("非法的回调 URL");if(e.error)throw new Error("认证失败, error=".concat(e.error,", error_description=").concat(e.error_description));if(!(n=e.state))throw new Error("非法的回调 URL: 缺少 state");return[4,this.transactionProvider.get(y(this.options.appId,n))];case 1:return(i=s.sent())?[4,this.transactionProvider.delete(y(this.options.appId,n))]:[3,5];case 2:if(s.sent(),i.state!==n)throw new Error("state 验证失败");if(t=i.originalUri,o=i.customState,this.options.useImplicitMode)return[3,4];if(!(c=e.code))throw new Error("非法的回调 URL: 缺少 code");return[4,this.exchangeToken(c,i.redirectUri,i.codeVerifier,i.nonce)];case 3:return a=s.sent(),this.options.redirectToOriginalUri&&t&&window.location.replace(t),[2,a];case 4:return[3,6];case 5:if(!this.options.useImplicitMode)throw new Error("获取登录流程会话失败, 请确认是否重复访问了回调端点，以及浏览器是否支持 sessionStorage");s.label=6;case 6:if(u=e.id_token,d=e.access_token,l=null==i?void 0:i.nonce,this.options.implicitResponseType.includes("token")&&!d||this.options.implicitResponseType.includes("id_token")&&!u)throw new Error("非法的回调 URL: 缺少 token");return[4,this.saveLoginState({idToken:u,accessToken:d,nonce:l})];case 7:return p=s.sent(),this.options.redirectToOriginalUri&&t&&window.location.replace(t),[2,r(r({},p),{customState:o})]}}))}))},e.prototype.loginWithPopup=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t,o,n,i,c,a,u,d,l,h,f;return s(this,(function(s){switch(s.label){case 0:if(t=e.redirectUri||this.options.redirectUri||window.location.origin,void 0!==this.globalMsgListener)throw new Error(p);if(this.globalMsgListener=null,window.crossOriginIsolated)throw new Error("当前页面运行在隔离模式下, 无法进行此方式登录, 请使用 loginWithRedirect");return o=_(16),n=_(16),i=r(r({redirect_uri:t,response_mode:"web_message",response_type:this.options.useImplicitMode?this.options.implicitResponseType:"code",client_id:this.options.appId,state:o,nonce:n},e.forced&&{prompt:"login"}),{scope:this.options.scope}),this.options.useImplicitMode?[3,2]:[4,I()];case 1:a=s.sent(),u=a.codeChallenge,d=a.codeVerifier,c=d,i.code_challenge=u,i.code_challenge_method="S256",s.label=2;case 2:if(l="".concat(this.domain,"/oidc/auth?").concat(w(i)),!(h=window.open(l,"authing-spa-login-window","popup,width=".concat(this.options.popupWidth,",height=").concat(this.options.popupHeight))))throw new Error("弹出窗口失败");return[4,Promise.race([this.listenToPostMessage(o),new Promise((function(e){var t=setInterval((function(){h.closed&&(clearInterval(t),setTimeout((function(){return e(null)}),500))}),500)}))])];case 3:if(f=s.sent(),this.globalMsgListener&&window.removeEventListener("message",this.globalMsgListener),this.globalMsgListener=void 0,!f)return[2,null];if(f.error)throw new Error("登录失败，认证服务器返回错误: error=".concat(f.error,", error_description=").concat(f.errorDesc));if(f.state!==o)throw new Error("state 验证失败");return[2,this.handleOIDCWebMsgResponse(f,n,t,c)]}}))}))},e.prototype.getUserInfo=function(e){var t,o;return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var n,r,i;return s(this,(function(s){switch(s.label){case 0:return null===(t=e.accessToken)||void 0===t?[3,1]:(r=t,[3,3]);case 1:return[4,this.getLoginState()];case 2:r=null===(o=s.sent())||void 0===o?void 0:o.accessToken,s.label=3;case 3:if(!(n=r))throw new Error("未传入 access token");return[4,a("".concat(this.domain,"/api/v3/get-profile"),{headers:{Authorization:"Bearer ".concat(n),"x-authing-userpool-id":this.options.userPoolId}})];case 4:return(i=s.sent().data).data?[2,i.data]:[2,{apiCode:i.apiCode,message:i.message,statusCode:i.statusCode}]}}))}))},e.prototype.logoutWithRedirect=function(e){var t;return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var o,n,r;return s(this,(function(i){switch(i.label){case 0:return[4,this.loginStateProvider.get(m(this.options.appId))];case 1:return(o=i.sent())?[4,this.loginStateProvider.delete(m(this.options.appId))]:[2];case 2:return i.sent(),n={id_token_hint:o.idToken},(r=null!==(t=e.redirectUri)&&void 0!==t?t:this.options.logoutRedirectUri)&&(n.post_logout_redirect_uri=r,n.state=e.state),[4,this.loginStateProvider.delete(m(this.options.appId))];case 3:return i.sent(),window.location.replace("".concat(this.domain,"/oidc/session/end?").concat(w(n))),[2]}}))}))},e.prototype.listenToPostMessage=function(e){return i(this,void 0,void 0,(function(){var t=this;return s(this,(function(o){return[2,new Promise((function(o,n){var r=function(i){var s;if(i.origin===t.domain&&"authorization_response"===(null===(s=i.data)||void 0===s?void 0:s.type)){window.removeEventListener("message",r),t.globalMsgListener=void 0;var c=i.data.response;return c&&c.state===e?c.error?o({error:c.error,errorDesc:c.error_description}):o({accessToken:c.access_token,idToken:c.id_token,refreshToken:c.refresh_token,code:c.code,state:c.state}):n(new Error("非法的服务端返回值"))}};t.globalMsgListener=r,window.addEventListener("message",r)}))]}))}))},e.prototype.saveLoginState=function(e){return i(this,void 0,void 0,(function(){var t,o,n,r,i;return s(this,(function(s){switch(s.label){case 0:if(t=e.accessToken,o=e.idToken,n={accessToken:t,idToken:o,timestamp:Date.now()},o&&(r=S(o).body,n.parsedIdToken=r,n.expireAt=1e3*r.exp,e.nonce&&r.nonce!==e.nonce))throw new Error("nonce 验证失败");return t&&(i=S(t).body,n.parsedAccessToken=i,n.expireAt=1e3*i.exp),[4,this.loginStateProvider.put(m(this.options.appId),n)];case 1:return s.sent(),[2,n]}}))}))},e.prototype.exchangeToken=function(e,t,o,n){return i(this,void 0,void 0,(function(){var r,i;return s(this,(function(s){switch(s.label){case 0:return r={grant_type:"authorization_code",code:e,code_verifier:o,client_id:this.options.appId,redirect_uri:t},[4,u("".concat(this.domain,"/oidc/token"),w(r),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})];case 1:return i=s.sent().data,[2,this.saveLoginState({idToken:i.id_token,accessToken:i.access_token,nonce:n})]}}))}))},e.prototype.handleOIDCWebMsgResponse=function(e,t,o,n){return i(this,void 0,void 0,(function(){return s(this,(function(r){if(this.options.useImplicitMode){if(this.options.implicitResponseType.includes("token")&&"string"!=typeof e.accessToken||this.options.implicitResponseType.includes("id_token")&&"string"!=typeof e.idToken)throw new Error("无效的 Token 返回值");return[2,this.saveLoginState({accessToken:e.accessToken,idToken:e.idToken,nonce:t})]}if("string"!=typeof e.code)throw new Error("无效的 Code 返回值");if(!o||!n)throw new Error;return[2,this.exchangeToken(e.code,o,n,t)]}))}))},e.prototype.resolveCallbackParams=function(){var e="fragment"===this.options.redirectResponseMode?window.location.hash:window.location.search;if(!e)return null;var t=Object.create(null);return e.substring(1).split("&").forEach((function(e){var o=e.split("="),n=o[0],r=o[1];t[n]=r})),t},e}();e.Authing=E,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.global.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1663598227735);
})()
//miniprogram-npm-outsideDeps=["axios"]
//# sourceMappingURL=index.js.map