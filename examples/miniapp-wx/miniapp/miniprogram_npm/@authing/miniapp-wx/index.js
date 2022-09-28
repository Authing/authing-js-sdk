module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1664336657659, function(require, module, exports) {
var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.d(e,{e:()=>K});var n={};function o(){}t.r(n),t.d(n,{checkSession:()=>I,chooseImage:()=>_,clearStorage:()=>m,getStorage:()=>w,getUserProfile:()=>O,login:()=>p,removeStorage:()=>b,request:()=>d,scanCode:()=>y,setStorage:()=>v,uploadFile:()=>S}),function(t){!function(t){t.use=function(t,e={}){const n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(t)>-1)return this;const o=[e];return o.unshift(this),"function"==typeof t.install?t.install.apply(t,o):"function"==typeof t&&t.apply(null,o),n.push(t),this}}(t)}(o);const r=o;function i(){return["wx","ali","baidu","qq","tt","jd","ks","qa_webview","qa_ux","Mpx","Taro","uni"].reduce(((t,e)=>(t[`__authing_move_src_mode_${e}__`]=e,t)),{})}function s(t){console.error&&console.error(`[AuthingMove/api-proxy error in "wx"]:\n ${t}`)}function a(){}function u(t,e={},n={}){let o={};return Object.keys(t).forEach((n=>{const r=e.hasOwnProperty(n)?e[n]:n;r&&(o[r]=t[n])})),o=Object.assign({},o,n),o}function c(){return wx}const l=c();function p(t={}){return l.login(t)}const h=c();function d(t={}){return h.request(t)}const f=c();function y(t={}){return f.scanCode(t)}const g=c();function v(t={}){const e=u(t,{},{encrypt:!1});return g.setStorage(e)}function w(t={}){const e=u(t,{},{encrypt:!1});return g.getStorage(e)}function b(t={}){return g.removeStorage(t)}function m(t={}){return g.clearStorage(t)}const P=c();function _(t={}){return P.chooseMedia(t)}const x=c();function S(t={}){return x.uploadFile(t)}const k=c();function O(t={}){return k.getUserProfile(t)}const T=c();function I(t={}){return T.checkSession(t)}const C=i();const j=c();r.use((function(t,e={}){const{custom:o={}}=e,r=function(t){const e=c(),o=Object.create(null);Object.keys(n).forEach((t=>{o[t]=e[t]||n[t]}));const r=Object.create(null);return Object.keys(o).forEach((i=>{"function"==typeof o[i]?r[i]=(...o)=>{let r=t.from;const a=t.to;o.length&&(r=o.pop(),"string"==typeof r&&C[r]||(o.push(r),r=t.from));const u=function(t="",e=""){return`${C[`__authing_move_src_mode_${t}__`]}_${e}`}(r,a);return t.custom[u]&&t.custom[u][i]?t.custom[u][i].apply(this,o):n[i]?n[i].apply(this,o):e[i]?e[i].apply(this,o):void s(`"${i}" method does not exist in the current context`)}:r[i]=o[i]})),r}({from:"wx",to:"wx",custom:o}),u=Object.assign({},r,function(t){const e=i();return Object.keys(t).reduce(((n,o)=>("function"!=typeof t[o]||(n[o]=function(...n){if(function(t){return/^get\w*Manager$/.test(t)||/^create\w*Context$/.test(t)||/^(on|off)/.test(t)||/\w+Sync$/.test(t)}(o))return t[o].apply(t,n);n[0]&&!e[n[0]]||n.unshift({success:a,fail:a});const r=n[0];let i;const s=new Promise(((e,s)=>{const a=r.success,u=r.fail;r.success=function(t){a&&a.call(this,t),e(t)},r.fail=function(t){u&&u.call(this,t),s(t)},i=t[o].apply(j,n)}));return s.__returned=i,s}),n)),{})}(r));Object.keys(u).forEach((e=>{try{if("function"!=typeof u[e])return void(t[e]=u[e]);t[e]=(...n)=>u[e].apply(t,n)}catch(n){s(`Call ${t}.${e} error:`+JSON.stringify(n))}}))}));var E=function(){function t(){}return t.prototype.get=function(t){return r.getStorage({key:t})},t.prototype.set=function(t,e){return r.setStorage({key:t,data:e})},t.prototype.remove=function(t){return r.removeStorage({key:t})},t}();const L=JSON.parse('{"i8":"5.0.7-alpha.0"}');var F=function(){return F=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},F.apply(this,arguments)};function D(t){return e=this,n=void 0,i=function(){var e,n;return function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),e=Object.assign({},t,{header:F(F({},t.header),{"x-authing-request-from":"sdk-miniapp","x-authing-sdk-version":L.i8})}),[4,r.request(e)];case 1:return[2,(n=o.sent().data).data||n];case 2:return[2,o.sent()];case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(s,a)}u((i=i.apply(e,n||[])).next())}));var e,n,o,i}function M(t){return["authing",t,"login-state"].join(":")}function U(t,e){console.error('Authing Miniapp SDK error in "'+t+'": ',e)}var $=function(){return $=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},$.apply(this,arguments)},q=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}))},A=function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},K=function(){function t(t){this.options=$($({},t),{host:t.host||"https://core.authing.cn"}),this.storage=new E,this.encryptFunction=t.encryptFunction}return t.prototype.getLoginState=function(){return q(this,void 0,void 0,(function(){var t,e;return A(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.storage.get(M(this.options.appId))];case 1:return t=n.sent(),(e=t.data).expires_at>Date.now()?[2,e]:(U("getLoginState","loginState has expired, please login again"),[2,null]);case 2:return n.sent(),[2,null];case 3:return[2]}}))}))},t.prototype.clearLoginState=function(){return q(this,void 0,void 0,(function(){return A(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.storage.remove(M(this.options.appId))];case 1:return t.sent(),[2,!0];case 2:return U("clearLoginState",t.sent()),[2,!1];case 3:return[2]}}))}))},t.prototype.saveLoginState=function(t){return q(this,void 0,void 0,(function(){var e;return A(this,(function(n){switch(n.label){case 0:return e=$($({},t),{expires_at:1e3*t.expires_in+Date.now()-72e5}),[4,this.storage.set(M(this.options.appId),e)];case 1:return n.sent(),[2,e]}}))}))},t.prototype.getPublicKey=function(t){return q(this,void 0,void 0,(function(){return A(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,D({method:"GET",url:this.options.host+"/api/v3/system"})];case 1:return[2,e.sent()[t].publicKey];case 2:return U("getPublicKey",e.sent()),[2,""];case 3:return[2]}}))}))},t.prototype.loginByCode=function(t){return q(this,void 0,void 0,(function(){function e(){return q(this,void 0,void 0,(function(){var t,n,l;return A(this,(function(p){switch(p.label){case 0:return[4,r.login()];case 1:return t=p.sent().code,n={connection:i||"wechat_mini_program_code",extIdpConnidentifier:o,wechatMiniProgramCodePayload:$($({},s),{code:t}),options:a},[4,u.login(n,"code")];case 2:return(l=p.sent())?[2,l]:0!==c?[3,4]:(c+=1,[4,e()]);case 3:return[2,p.sent()];case 4:return[2,null]}}))}))}var n,o,i,s,a,u,c;return A(this,(function(r){switch(r.label){case 0:return[4,this.getLoginState()];case 1:return(n=r.sent())&&n.expires_at>Date.now()?[2,n]:(o=t.extIdpConnidentifier,i=t.connection,s=t.wechatMiniProgramCodePayload,a=t.options,u=this,c=0,[4,e()]);case 2:return[2,r.sent()]}}))}))},t.prototype.loginByPhone=function(t){return q(this,void 0,void 0,(function(){function e(){return q(this,void 0,void 0,(function(){var t,n,l;return A(this,(function(p){switch(p.label){case 0:return[4,r.login()];case 1:return t=p.sent().code,n={connection:i||"wechat_mini_program_phone",extIdpConnidentifier:o,wechatMiniProgramPhonePayload:$($({},s),{code:t}),options:a},[4,u.login(n,"phone")];case 2:return(l=p.sent())?[2,l]:0!==c?[3,4]:(c+=1,[4,e()]);case 3:return[2,p.sent()];case 4:return[2,null]}}))}))}var n,o,i,s,a,u,c;return A(this,(function(r){switch(r.label){case 0:return[4,this.getLoginState()];case 1:return(n=r.sent())&&n.expires_at>Date.now()?[2,n]:(o=t.extIdpConnidentifier,i=t.connection,s=t.wechatMiniProgramPhonePayload,a=t.options,u=this,c=0,[4,e()]);case 2:return[2,r.sent()]}}))}))},t.prototype.loginByPassword=function(t){var e,n,o;return q(this,void 0,void 0,(function(){var r,i;return A(this,(function(s){switch(s.label){case 0:return(null===(e=t.options)||void 0===e?void 0:e.passwordEncryptType)&&"none"!==(null===(n=t.options)||void 0===n?void 0:n.passwordEncryptType)?this.encryptFunction?[4,this.getPublicKey(null===(o=t.options)||void 0===o?void 0:o.passwordEncryptType)]:(U("loginByPassword",'encryptFunction is required, if passwordEncryptType is not "none"'),[2,null]):[3,2];case 1:if(!(r=s.sent()))return U("loginByPassword","publicKey is invalid"),[2,null];t.passwordPayload.password=this.encryptFunction(t.passwordPayload.password,r),s.label=2;case 2:return i=$($({},t),{connection:"PASSWORD"}),[4,this.login(i,"password")];case 3:return[2,s.sent()]}}))}))},t.prototype.loginByPassCode=function(t){return q(this,void 0,void 0,(function(){var e;return A(this,(function(n){switch(n.label){case 0:return t.passCodePayload.phone&&(t.passCodePayload.phoneCountryCode=t.passCodePayload.phoneCountryCode||"+86"),e=$($({},t),{connection:"PASSCODE"}),[4,this.login(e,"passCode")];case 1:return[2,n.sent()]}}))}))},t.prototype.logout=function(){return q(this,void 0,void 0,(function(){var t,e,n;return A(this,(function(o){switch(o.label){case 0:return[4,this.getLoginState()];case 1:return(t=o.sent())?(e=t.access_token,n=t.expires_at,!e||n<Date.now()?[4,this.clearLoginState()]:[3,3]):[2,!0];case 2:case 5:return o.sent(),[2,!0];case 3:return[4,D({method:"POST",url:this.options.host+"/oidc/token/revocation",data:{client_id:this.options.appId,token:e},header:{"content-type":"application/x-www-form-urlencoded"}})];case 4:return o.sent(),[4,this.clearLoginState()]}}))}))},t.prototype.sendSms=function(t){return q(this,void 0,void 0,(function(){return A(this,(function(e){switch(e.label){case 0:return t.phoneCountryCode=t.phoneCountryCode||"+86",[4,D({method:"POST",url:this.options.host+"/api/v3/send-sms",data:t,header:{"x-authing-userpool-id":this.options.userPoolId}})];case 1:return[2,e.sent()]}}))}))},t.prototype.login=function(t,e){return q(this,void 0,void 0,(function(){var n,o;return A(this,(function(r){switch(r.label){case 0:return n={code:"/api/v3/signin-by-mobile",phone:"/api/v3/signin-by-mobile",password:"/api/v3/signin",passCode:"/api/v3/signin"},[4,D({method:"POST",url:this.options.host+n[e],data:t,header:{"x-authing-app-id":this.options.appId}})];case 1:return(o=r.sent()).access_token||o.id_token?[4,this.saveLoginState(o)]:[3,3];case 2:return[2,r.sent()];case 3:return[4,this.clearLoginState()];case 4:return r.sent(),U("login",o),[2,null]}}))}))},t.prototype.refreshToken=function(){return q(this,void 0,void 0,(function(){var t,e,n,o,r;return A(this,(function(i){switch(i.label){case 0:return[4,this.getLoginState()];case 1:return(t=i.sent())?(e=t.refresh_token,n=t.expires_at,e?n<Date.now()?(U("refreshToken","refresh_token has expired, please login again"),[2,null]):(o={grant_type:"refresh_token",redirect_uri:"",refresh_token:e},[4,D({method:"POST",url:this.options.host+"/oidc/token",data:o,header:{"content-type":"application/x-www-form-urlencoded","x-authing-app-id":this.options.appId}})]):(U("refreshToken","refresh_token must not be empty"),[2,null])):(U("refreshToken","refresh_token has expired, please login again"),[2,null]);case 2:return(r=i.sent()).access_token||r.id_token?[4,this.saveLoginState(r)]:[3,4];case 3:return[2,i.sent()];case 4:return U("refreshToken",r),[2,null]}}))}))},t.prototype.updatePassword=function(t){return q(this,void 0,void 0,(function(){var e,n,o,r;return A(this,(function(i){switch(i.label){case 0:return[4,this.getLoginState()];case 1:return(e=i.sent())?(n=e.access_token,e.expires_at<Date.now()?(U("updatePassword","Token has expired, please login again"),[2,!1]):t.passwordEncryptType&&"none"!==t.passwordEncryptType?this.encryptFunction?[4,this.getPublicKey(t.passwordEncryptType)]:(U("updatePassword",'encryptFunction is required, if passwordEncryptType is not "none"'),[2,!1]):[3,3]):(U("updatePassword","Token has expired, please login again"),[2,!1]);case 2:if(!(o=i.sent()))return U("loginByPassword","publicKey is invalid"),[2,!1];t.newPassword=this.encryptFunction(t.newPassword,o),i.label=3;case 3:return[4,D({method:"POST",url:this.options.host+"/api/v3/update-password",data:t,header:{"x-authing-userpool-id":this.options.userPoolId,Authorization:n}})];case 4:return 200===(r=i.sent()).statusCode?[2,!0]:(U("updatePassword",r),[2,!1])}}))}))},t.prototype.getUserInfo=function(){return q(this,void 0,void 0,(function(){var t,e,n;return A(this,(function(o){switch(o.label){case 0:return[4,this.getLoginState()];case 1:return(t=o.sent())?(e=t.access_token,t.expires_at<Date.now()?(U("getUserInfo","Token has expired, please login again"),[2,null]):[4,D({method:"GET",url:this.options.host+"/api/v3/get-profile",header:{"x-authing-userpool-id":this.options.userPoolId,Authorization:e}})]):(U("getUserInfo","Token has expired, please login again"),[2,null]);case 2:return(n=o.sent()).userId?[2,n]:(U("getUserInfo",n),[2,null])}}))}))},t.prototype.updateAvatar=function(){return q(this,void 0,void 0,(function(){var t,e,n;return A(this,(function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),[4,r.chooseImage({count:1,sourceType:["album","camera"],sizeType:["original"]})];case 1:return t=o.sent(),[4,r.uploadFile({url:this.options.host+"/api/v2/upload?folder=avatar",name:"file",filePath:t.tempFiles[0].tempFilePath})];case 2:return e=o.sent(),n=JSON.parse(e.data),[4,this.updateUserInfo({photo:n.data.url})];case 3:return o.sent(),[2,n];case 4:return U("updateAvatar",o.sent()),[2,null];case 5:return[2]}}))}))},t.prototype.updateUserInfo=function(t){return q(this,void 0,void 0,(function(){var e,n,o;return A(this,(function(r){switch(r.label){case 0:return[4,this.getLoginState()];case 1:return(e=r.sent())?(n=e.access_token,e.expires_at<Date.now()&&U("updateUserInfo","Token has expired, please login again"),[4,D({method:"POST",url:this.options.host+"/api/v3/update-profile",data:t,header:{"x-authing-userpool-id":this.options.userPoolId,Authorization:n}})]):(U("updateUserInfo","Token has expired, please login again"),[2,null]);case 2:return(o=r.sent()).userId?[2,o]:(U("updateUserInfo",o),[2,null])}}))}))},t.prototype.getPhone=function(t){return q(this,void 0,void 0,(function(){var e;return A(this,(function(n){switch(n.label){case 0:return[4,D({method:"POST",url:this.options.host+"/api/v3/get-wechat-miniprogram-phone",data:t,header:{"x-authing-userpool-id":this.options.userPoolId}})];case 1:return[2,(e=n.sent()).phone_info||U("getPhone",e)]}}))}))},t}(),B=e.e;if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Authing', { enumerable: true, configurable: true, get: function() { return B; } });
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1664336657659);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map