module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1662259787375, function(require, module, exports) {
var t={d:(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.d(n,{e:()=>W});var e={};function r(){}t.r(e),t.d(e,{chooseImage:()=>_,clearStorage:()=>O,getStorage:()=>b,login:()=>p,removeStorage:()=>w,request:()=>f,scanCode:()=>y,setStorage:()=>v,uploadFile:()=>x}),function(t){!function(t){t.use=function(t,n={}){const e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;const r=[n];return r.unshift(this),"function"==typeof t.install?t.install.apply(t,r):"function"==typeof t&&t.apply(null,r),e.push(t),this}}(t)}(r);const o=r;function i(){return["wx","ali","baidu","qq","tt","jd","ks","qa_webview","qa_ux","Mpx","Taro","uni"].reduce(((t,n)=>(t[`__authing_move_src_mode_${n}__`]=n,t)),{})}function s(t){console.error&&console.error(`[AuthingMove/api-proxy error in "wx"]:\n ${t}`)}function a(){}function u(t,n={},e={}){let r={};return Object.keys(t).forEach((e=>{const o=n.hasOwnProperty(e)?n[e]:e;o&&(r[o]=t[e])})),r=Object.assign({},r,e),r}function c(){return wx}const l=c();function p(t={}){return l.login(t)}const h=c();function f(t={}){return h.request(t)}const d=c();function y(t={}){return d.scanCode(t)}const g=c();function v(t={}){const n=u(t,{},{encrypt:!1});return g.setStorage(n)}function b(t={}){const n=u(t,{},{encrypt:!1});return g.getStorage(n)}function w(t={}){return g.removeStorage(t)}function O(t={}){return g.clearStorage(t)}const m=c();function _(t={}){return m.chooseMedia(t)}const S=c();function x(t={}){return S.uploadFile(t)}const P=i();const k=c();o.use((function(t,n={}){const{custom:r={}}=n,o=function(t){const n=c(),r=Object.create(null);Object.keys(e).forEach((t=>{r[t]=n[t]||e[t]}));const o=Object.create(null);return Object.keys(r).forEach((i=>{"function"==typeof r[i]?o[i]=(...r)=>{let o=t.from;const a=t.to;r.length&&(o=r.pop(),"string"==typeof o&&P[o]||(r.push(o),o=t.from));const u=function(t="",n=""){return`${P[`__authing_move_src_mode_${t}__`]}_${n}`}(o,a);return t.custom[u]&&t.custom[u][i]?t.custom[u][i].apply(this,r):e[i]?e[i].apply(this,r):n[i]?n[i].apply(this,r):void s(`"${i}" method does not exist in the current context`)}:o[i]=r[i]})),o}({from:"wx",to:"wx",custom:r}),u=Object.assign({},o,function(t){const n=i();return Object.keys(t).reduce(((e,r)=>("function"!=typeof t[r]||(e[r]=function(...e){if(function(t){return/^get\w*Manager$/.test(t)||/^create\w*Context$/.test(t)||/^(on|off)/.test(t)||/\w+Sync$/.test(t)}(r))return t[r].apply(t,e);e[0]&&!n[e[0]]||e.unshift({success:a,fail:a});const o=e[0];let i;const s=new Promise(((n,s)=>{const a=o.success,u=o.fail;o.success=function(t){a&&a.call(this,t),n(t)},o.fail=function(t){u&&u.call(this,t),s(t)},i=t[r].apply(k,e)}));return s.__returned=i,s}),e)),{})}(o));Object.keys(u).forEach((n=>{try{if("function"!=typeof u[n])return void(t[n]=u[n]);t[n]=(...e)=>u[n].apply(t,e)}catch(e){s(`Call ${t}.${n} error:`+JSON.stringify(e))}}))}));var T=function(){function t(){}return t.prototype.get=function(t){return o.getStorage({key:t})},t.prototype.set=function(t,n){return o.setStorage({key:t,data:n})},t.prototype.remove=function(t){return o.removeStorage({key:t})},t}();const j=JSON.parse('{"i8":"5.0.0-alpha.18"}');var C=function(){return C=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},C.apply(this,arguments)};function E(t){return n=this,e=void 0,i=function(){var n,e,r;return function(t,n){var e,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n=Object.assign({},t,{header:C(C({},t.header),{"x-authing-request-from":"miniprogram-sdk","x-authing-client-version":j.i8})}),[4,o.request(n)];case 1:return[2,(e=i.sent().data).data||e];case 2:return r=i.sent(),console.error("认证服务器返回错误: ",r),[3,3];case 3:return[2]}}))},new((r=void 0)||(r=Promise))((function(t,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function a(t){try{u(i.throw(t))}catch(t){o(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((i=i.apply(n,e||[])).next())}));var n,e,r,i}function I(t){return["authing",t,"login-state"].join(":")}function F(t,n){console.error('Authing miniprogram sdk error in "'+t+'": ',n)}var L,A=function(){return A=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},A.apply(this,arguments)},q=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,a)}u((r=r.apply(t,n||[])).next())}))},$=function(t,n){var e,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},D=function(){function t(t){this.authingOptions=t.authingOptions,this.storage=t.storage,this.encryptFunction=t.encryptFunction}return t.prototype.getLoginState=function(){return q(this,void 0,void 0,(function(){return $(this,(function(t){switch(t.label){case 0:return[4,this.storage.get(I(this.authingOptions.appId))];case 1:return[2,t.sent().data]}}))}))},t.prototype.clearLoginState=function(){return q(this,void 0,void 0,(function(){return $(this,(function(t){switch(t.label){case 0:return[4,this.storage.remove(I(this.authingOptions.appId))];case 1:return[2,t.sent()]}}))}))},t.prototype.saveLoginState=function(t){return q(this,void 0,void 0,(function(){var n;return $(this,(function(e){switch(e.label){case 0:return n=A(A({},t),{expires_at:1e3*t.expires_in+Date.now()}),[4,this.storage.set(I(this.authingOptions.appId),n)];case 1:return e.sent(),[2,n]}}))}))},t.prototype.getPublicKey=function(t){return q(this,void 0,void 0,(function(){return $(this,(function(n){switch(n.label){case 0:return[4,E({method:"GET",url:this.authingOptions.host+"/api/v3/system"})];case 1:return[2,n.sent()[t].publicKey]}}))}))},t}(),G=(L=function(t,n){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},L(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}L(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),M=function(){return M=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},M.apply(this,arguments)},z=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,a)}u((r=r.apply(t,n||[])).next())}))},B=function(t,n){var e,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},K=function(t){function n(n){return t.call(this,n)||this}return G(n,t),n.prototype.loginByCode=function(t){return z(this,void 0,void 0,(function(){var n;return B(this,(function(e){switch(e.label){case 0:return n=M(M({},t),{connection:"wechat_mini_program_code"}),[4,this.login(n,"code")];case 1:return[2,e.sent()]}}))}))},n.prototype.loginByPhone=function(t){return z(this,void 0,void 0,(function(){var n;return B(this,(function(e){switch(e.label){case 0:return n=M(M({},t),{connection:"wechat_mini_program_phone"}),[4,this.login(n,"phone")];case 1:return[2,e.sent()]}}))}))},n.prototype.loginByPassword=function(t){var n,e,r;return z(this,void 0,void 0,(function(){var o,i;return B(this,(function(s){switch(s.label){case 0:return(null===(n=t.options)||void 0===n?void 0:n.passwordEncryptType)&&"none"!==(null===(e=t.options)||void 0===e?void 0:e.passwordEncryptType)?this.encryptFunction?[4,this.getPublicKey(null===(r=t.options)||void 0===r?void 0:r.passwordEncryptType)]:[2,F("loginByPassword",'encryptFunction is requiered, if passwordEncryptType is not "none"')]:[3,2];case 1:o=s.sent(),t.passwordPayload.password=this.encryptFunction(t.passwordPayload.password,o),s.label=2;case 2:return i=M(M({},t),{connection:"PASSWORD"}),[4,this.login(i,"password")];case 3:return[2,s.sent()]}}))}))},n.prototype.loginByPassCode=function(t){return z(this,void 0,void 0,(function(){var n;return B(this,(function(e){switch(e.label){case 0:return t.passCodePayload.phone&&(t.passCodePayload.phoneCountryCode=t.passCodePayload.phoneCountryCode||"+86"),n=M(M({},t),{connection:"PASSCODE"}),[4,this.login(n,"passCode")];case 1:return[2,e.sent()]}}))}))},n.prototype.logout=function(){return z(this,void 0,void 0,(function(){var t;return B(this,(function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,this.getLoginState()];case 1:return t=n.sent().access_token,[4,E({method:"POST",url:this.authingOptions.host+"/oidc/token/revocation",data:{client_id:this.authingOptions.appId,token:t}})];case 2:return n.sent(),[4,this.clearLoginState()];case 3:return[2,n.sent()];case 4:return F("logout",n.sent()),[3,5];case 5:return[2]}}))}))},n.prototype.sendSms=function(t){return z(this,void 0,void 0,(function(){return B(this,(function(n){switch(n.label){case 0:return t.phoneCountryCode=t.phoneCountryCode||"+86",[4,E({method:"POST",url:this.authingOptions.host+"/api/v3/send-sms",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId}})];case 1:return[2,n.sent()]}}))}))},n.prototype.login=function(t,n){return z(this,void 0,void 0,(function(){var e,r;return B(this,(function(o){switch(o.label){case 0:return e={code:"/api/v3/signin-by-mobile",phone:"/api/v3/signin-by-mobile",password:"/api/v3/signin",passCode:"/api/v3/signin"},[4,E({method:"POST",url:this.authingOptions.host+e[n],data:t,header:{"x-authing-app-id":this.authingOptions.appId}})];case 1:return(r=o.sent()).access_token?[4,this.saveLoginState(r)]:[3,3];case 2:return[2,o.sent()];case 3:return[4,this.clearLoginState()];case 4:return o.sent(),[2]}}))}))},n.prototype.refreshToken=function(){return z(this,void 0,void 0,(function(){var t,n,e;return B(this,(function(r){switch(r.label){case 0:return[4,this.getLoginState()];case 1:return(t=r.sent().refresh_token)?(n={grant_type:"refresh_token",redirect_uri:"",refresh_token:t},[4,E({method:"POST",url:this.authingOptions.host+"/oidc/token",data:n,header:{"content-type":"application/x-www-form-urlencoded","x-authing-app-id":this.authingOptions.appId}})]):[2,F("refreshToken","refresh_token must not be empty")];case 2:return(e=r.sent()).access_token?[4,this.saveLoginState(e)]:[3,4];case 3:return[2,r.sent()];case 4:return[4,this.clearLoginState()];case 5:return r.sent(),[2]}}))}))},n.prototype.changeQrcodeStatus=function(t){return z(this,void 0,void 0,(function(){var n,e;return B(this,(function(r){switch(r.label){case 0:return[4,this.getLoginState()];case 1:return n=r.sent(),e=n.access_token,n.expires_at<Date.now()?[2,F("changeQrcodeStatus","Token has expired, please login again")]:[4,E({method:"POST",url:this.authingOptions.host+"/api/v3/change-qrcode-status",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId,Authorization:e}})];case 2:return[2,r.sent()]}}))}))},n}(D),Q=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),J=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,a)}u((r=r.apply(t,n||[])).next())}))},N=function(t,n){var e,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},U=function(t){function n(n){return t.call(this,n)||this}return Q(n,t),n.prototype.updatePassword=function(t){return J(this,void 0,void 0,(function(){var n,e,r;return N(this,(function(o){switch(o.label){case 0:return[4,this.getLoginState()];case 1:return n=o.sent(),e=n.access_token,n.expires_at<Date.now()?[2,F("changeQrcodeStatus","Token has expired, please login again")]:t.passwordEncryptType&&"none"!==t.passwordEncryptType?this.encryptFunction?[4,this.getPublicKey(t.passwordEncryptType)]:[2,F("updatePassword",'encryptFunction is requiered, if passwordEncryptType is not "none"')]:[3,3];case 2:r=o.sent(),t.newPassword=this.encryptFunction(t.newPassword,r),o.label=3;case 3:return[4,E({method:"POST",url:this.authingOptions.host+"/api/v3/update-password",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId,Authorization:e}})];case 4:return[2,o.sent()]}}))}))},n.prototype.getUserInfo=function(){return J(this,void 0,void 0,(function(){var t,n;return N(this,(function(e){switch(e.label){case 0:return[4,this.getLoginState()];case 1:return t=e.sent(),n=t.access_token,t.expires_at<Date.now()?[2,F("getUserInfo","Token has expired, please login again")]:[4,E({method:"GET",url:this.authingOptions.host+"/api/v3/get-profile",header:{"x-authing-userpool-id":this.authingOptions.userPoolId,Authorization:n}})];case 2:return[2,e.sent()]}}))}))},n.prototype.updateAvatar=function(){return J(this,void 0,void 0,(function(){var t,n;return N(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,o.chooseImage({count:1,sourceType:["album","camera"],sizeType:["original"]})];case 1:return t=e.sent(),[4,o.uploadFile({url:this.authingOptions.host+"/api/v2/upload?folder=avatar",name:"file",filePath:t.tempFiles[0].tempFilePath})];case 2:return n=e.sent(),[2,JSON.parse(n.data)];case 3:return F("updateAvatar",e.sent()),[3,4];case 4:return[2]}}))}))},n.prototype.updateUserInfo=function(t){return J(this,void 0,void 0,(function(){var n,e;return N(this,(function(r){switch(r.label){case 0:return[4,this.getLoginState()];case 1:return n=r.sent(),e=n.access_token,n.expires_at<Date.now()?[2,F("changeQrcodeStatus","Token has expired, please login again")]:[4,E({method:"POST",url:this.authingOptions.host+"/api/v3/update-profile",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId,Authorization:e}})];case 2:return[2,r.sent()]}}))}))},n.prototype.getPhone=function(t){return J(this,void 0,void 0,(function(){return N(this,(function(n){switch(n.label){case 0:return[4,E({method:"POST",url:this.authingOptions.host+"/api/v3/get-wechat-miniprogram-phone",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId}})];case 1:return[2,n.sent().phone_info]}}))}))},n}(D),R=function(){return R=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},R.apply(this,arguments)},W=function(t){var n=R(R({},t),{host:t.host||"https://core.authing.cn"}),e=new T,r=t.encryptFunction;this.core=new K({authingOptions:n,storage:e,encryptFunction:r}),this.user=new U({authingOptions:n,storage:e,encryptFunction:r})},H=n.e;if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Authing', { enumerable: true, configurable: true, get: function() { return H; } });
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1662259787375);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map