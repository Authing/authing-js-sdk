module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1675920961254, function(require, module, exports) {
var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.d(e,{e:()=>z});var n={};function o(){}t.r(n),t.d(n,{checkSession:()=>I,chooseImage:()=>C,clearStorage:()=>_,getStorage:()=>m,getUserProfile:()=>O,login:()=>d,removeStorage:()=>S,request:()=>g,scanCode:()=>v,setStorage:()=>b,uploadFile:()=>P}),function(t){!function(t){t.use=function(t,e={}){const n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(t)>-1)return this;const o=[e];return o.unshift(this),"function"==typeof t.install?t.install.apply(t,o):"function"==typeof t&&t.apply(null,o),n.push(t),this}}(t)}(o);const r=o;function i(t){return[null,t]}function s(t){return[t,void 0]}function a(){return["wx","ali","baidu","qq","tt","jd","ks","qa_webview","qa_ux","Mpx","Taro","uni"].reduce(((t,e)=>(t[`__authing_move_src_mode_${e}__`]=e,t)),{})}function u(t){console.error&&console.error(`[AuthingMove/api-proxy error in "wx"]:\n ${t}`)}function c(){}function p(t,e={},n={}){let o={};return Object.keys(t).forEach((n=>{const r=e.hasOwnProperty(n)?e[n]:n;r&&(o[r]=t[n])})),o=Object.assign({},o,n),o}function l(){return wx}const h=l();function d(t={}){return h.login(t)}const f=l();function g(t={}){return f.request(t)}const y=l();function v(t={}){return y.scanCode(t)}const w=l();function b(t={}){const e=p(t,{},{encrypt:!1});return w.setStorage(e)}function m(t={}){const e=p(t,{},{encrypt:!1});return w.getStorage(e)}function S(t={}){return w.removeStorage(t)}function _(t={}){return w.clearStorage(t)}const x=l();function C(t={}){return x.chooseMedia(t)}const E=l();function P(t={}){return E.uploadFile(t)}const T=l();function O(t={}){return T.getUserProfile(t)}const k=l();function I(t={}){return k.checkSession(t)}const R=a();const L=l();r.use((function(t,e={}){const{custom:o={}}=e,r=function(t){const e=l(),o=Object.create(null);Object.keys(n).forEach((t=>{o[t]=e[t]||n[t]}));const r=Object.create(null);return Object.keys(o).forEach((i=>{"function"==typeof o[i]?r[i]=(...o)=>{let r=t.from;const s=t.to;o.length&&(r=o.pop(),"string"==typeof r&&R[r]||(o.push(r),r=t.from));const a=function(t="",e=""){return`${R[`__authing_move_src_mode_${t}__`]}_${e}`}(r,s);return t.custom[a]&&t.custom[a][i]?t.custom[a][i].apply(this,o):n[i]?n[i].apply(this,o):e[i]?e[i].apply(this,o):void u(`"${i}" method does not exist in the current context`)}:r[i]=o[i]})),r}({from:"wx",to:"wx",custom:o}),i=Object.assign({},r,function(t){const e=a();return Object.keys(t).reduce(((n,o)=>("function"!=typeof t[o]||(n[o]=function(...n){if(function(t){return/^get\w*Manager$/.test(t)||/^create\w*Context$/.test(t)||/^(on|off)/.test(t)||/\w+Sync$/.test(t)}(o))return t[o].apply(t,n);n[0]&&!e[n[0]]||n.unshift({success:c,fail:c});const r=n[0];let i;const s=new Promise(((e,s)=>{const a=r.success,u=r.fail;r.success=function(t){a&&a.call(this,t),e(t)},r.fail=function(t){u&&u.call(this,t),s(t)},i=t[o].apply(L,n)}));return s.__returned=i,s}),n)),{})}(r));Object.keys(i).forEach((e=>{try{if("function"!=typeof i[e])return void(t[e]=i[e]);t[e]=(...n)=>i[e].apply(t,n)}catch(n){u(`Call ${t}.${e} error:`+JSON.stringify(n))}}))}));var D=function(){function t(){}return t.prototype.get=function(t){return r.getStorage({key:t})},t.prototype.set=function(t,e){return r.setStorage({key:t,data:e})},t.prototype.remove=function(t){return r.removeStorage({key:t})},t}();const N=JSON.parse('{"i8":"5.1.4-alpha.2"}');var j,$=function(){return $=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},$.apply(this,arguments)};function F(t){return e=this,n=void 0,a=function(){var e,n,o,a;return function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),e=Object.assign({},t,{header:$($({},t.header),{"x-authing-request-from":"sdk-miniapp","x-authing-sdk-version":N.i8})}),[4,r.request(e)];case 1:switch(n=u.sent().data,o=function(t,e){for(var n=[{test:/(\/api\/v3\/system)$/,validate:function(){return!(!e.rsa&&!e.sm2)}},{test:/(\/oidc\/token)$/,validate:function(){return!(!e.access_token&&!e.id_token)}},{test:/(\/oidc\/token\/revocation)$/,validate:function(){return""===e}}],o=0;o<n.length;o++){var r=t.match(n[o].test);if(r&&r[0])return n[o].validate()?j.INTERCEPTED_SUCCESS:j.INTERCEPTED_ERROR}return 200===e.statusCode?j.NOT_INTERCEPTED_SUCCESS:j.NOT_INTERCEPTED_ERROR}(t.url,n),o){case j.NOT_INTERCEPTED_SUCCESS:return[2,i(n.data||n)];case j.INTERCEPTED_SUCCESS:return[2,i(n)];default:return[2,s(n)]}return[3,3];case 2:return a=u.sent(),[2,s({message:JSON.stringify(a)})];case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,r){function i(t){try{u(a.next(t))}catch(t){r(t)}}function s(t){try{u(a.throw(t))}catch(t){r(t)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(i,s)}u((a=a.apply(e,n||[])).next())}));var e,n,o,a}function U(t){return["authing",t,"login-state"].join(":")}function W(t){return["authing",t,"wx-login-code"].join(":")}!function(t){t[t.NOT_INTERCEPTED_SUCCESS=0]="NOT_INTERCEPTED_SUCCESS",t[t.NOT_INTERCEPTED_ERROR=1]="NOT_INTERCEPTED_ERROR",t[t.INTERCEPTED_SUCCESS=2]="INTERCEPTED_SUCCESS",t[t.INTERCEPTED_ERROR=3]="INTERCEPTED_ERROR"}(j||(j={}));var q=function(){return q=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},q.apply(this,arguments)},A=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}))},M=function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},J=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return s},z=function(){function t(t){this.options=q(q({},t),{host:t.host||"https://core.authing.cn"}),this.storage=new D,this.encryptFunction=t.encryptFunction,this.resetWxLoginCode()}return t.prototype.getLoginState=function(){return A(this,void 0,void 0,(function(){var t,e,n;return M(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.storage.get(U(this.options.appId))];case 1:return t=o.sent(),(e=t.data).expires_at>Date.now()?[2,i(e)]:[2,s({message:"login state has expired, please login again"})];case 2:return n=o.sent(),[2,s({message:JSON.stringify(n)})];case 3:return[2]}}))}))},t.prototype.clearLoginState=function(){return A(this,void 0,void 0,(function(){var t;return M(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.storage.remove(U(this.options.appId))];case 1:return e.sent(),[2,i(!0)];case 2:return t=e.sent(),[2,s({message:JSON.stringify(t)})];case 3:return[2]}}))}))},t.prototype.saveLoginState=function(t){return A(this,void 0,void 0,(function(){var e;return M(this,(function(n){switch(n.label){case 0:return e=q(q({},t),{expires_at:1e3*t.expires_in+Date.now()-72e5}),[4,this.storage.set(U(this.options.appId),e)];case 1:return n.sent(),[2,e]}}))}))},t.prototype.getPublicKey=function(t){return A(this,void 0,void 0,(function(){var e,n,o,r;return M(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,F({method:"GET",url:this.options.host+"/api/v3/system"})];case 1:return e=J.apply(void 0,[a.sent(),2]),n=e[0],o=e[1],n?[2,s(n)]:[2,i(o[t].publicKey)];case 2:return r=a.sent(),[2,s({message:"get public key error: "+JSON.stringify(r)})];case 3:return[2]}}))}))},t.prototype.getCachedWxLoginCode=function(){return A(this,void 0,void 0,(function(){return M(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.storage.get(W(this.options.appId))];case 1:return[2,t.sent().data];case 2:return t.sent(),[2,""];case 3:return[2]}}))}))},t.prototype.cacheWxLoginCode=function(t){return A(this,void 0,void 0,(function(){return M(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.storage.set(W(this.options.appId),t)];case 1:return e.sent(),[2,t];case 2:return e.sent(),[2,""];case 3:return[2]}}))}))},t.prototype.resetWxLoginCode=function(){return A(this,void 0,void 0,(function(){var t,e=this;return M(this,(function(n){switch(n.label){case 0:t=function(){return A(e,void 0,void 0,(function(){var t;return M(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,r.login()];case 1:return t=e.sent(),[4,this.cacheWxLoginCode(t.code)];case 2:return e.sent(),[2,!0];case 3:return e.sent(),[2,!1];case 4:return[2]}}))}))},n.label=1;case 1:return n.trys.push([1,6,8,10]),[4,r.checkSession()];case 2:return n.sent(),[4,this.getCachedWxLoginCode()];case 3:return n.sent()?[3,5]:[4,t()];case 4:n.sent(),n.label=5;case 5:return[3,10];case 6:return n.sent(),this.storage.remove(W(this.options.appId)),[4,t()];case 7:return n.sent(),[3,10];case 8:return[4,this.getCachedWxLoginCode()];case 9:return[2,n.sent()];case 10:return[2]}}))}))},t.prototype.getLoginCode=function(){return A(this,void 0,void 0,(function(){return M(this,(function(t){switch(t.label){case 0:return[4,this.resetWxLoginCode()];case 1:return[2,t.sent()]}}))}))},t.prototype.loginByCode=function(t){return A(this,void 0,void 0,(function(){var e,n,o,r,a,u,c,p;return M(this,(function(l){switch(l.label){case 0:return[4,this.getLoginState()];case 1:return e=J.apply(void 0,[l.sent(),2]),(n=e[1])&&n.expires_at>Date.now()?[2,i(n)]:(o=t.extIdpConnidentifier,r=t.connection,a=t.wechatMiniProgramCodePayload,u=t.options,[4,this.resetWxLoginCode()]);case 2:return(c=l.sent())?(p={connection:r||"wechat_mini_program_code",extIdpConnidentifier:o,wechatMiniProgramCodePayload:{encryptedData:(null==a?void 0:a.encryptedData)||"",iv:(null==a?void 0:a.iv)||"",code:c},options:u},[4,this.login(p,"code")]):[2,s({message:"get wx login code error"})];case 3:return[2,l.sent()]}}))}))},t.prototype.loginByPassword=function(t){var e,n,o;return A(this,void 0,void 0,(function(){var r,i,a,u;return M(this,(function(c){switch(c.label){case 0:return(null===(e=t.options)||void 0===e?void 0:e.passwordEncryptType)&&"none"!==(null===(n=t.options)||void 0===n?void 0:n.passwordEncryptType)?this.encryptFunction?[4,this.getPublicKey(null===(o=t.options)||void 0===o?void 0:o.passwordEncryptType)]:[2,s({message:'encryptFunction is required, if passwordEncryptType is not "none"'})]:[3,2];case 1:if(r=J.apply(void 0,[c.sent(),2]),i=r[0],a=r[1],i)return[2,s(i)];t.passwordPayload.password=this.encryptFunction(t.passwordPayload.password,a),c.label=2;case 2:return u=q(q({},t),{connection:"PASSWORD"}),[4,this.login(u,"password")];case 3:return[2,c.sent()]}}))}))},t.prototype.loginByPassCode=function(t){return A(this,void 0,void 0,(function(){var e;return M(this,(function(n){switch(n.label){case 0:return t.passCodePayload.phone&&(t.passCodePayload.phoneCountryCode=t.passCodePayload.phoneCountryCode||"+86"),e=q(q({},t),{connection:"PASSCODE"}),[4,this.login(e,"passCode")];case 1:return[2,n.sent()]}}))}))},t.prototype.loginByPhone=function(t){var e,n;return A(this,void 0,void 0,(function(){var o,r,a,u,c,p,l;return M(this,(function(h){switch(h.label){case 0:return[4,this.getLoginState()];case 1:return o=J.apply(void 0,[h.sent(),2]),(r=o[1])&&r.expires_at>Date.now()?[2,i(r)]:(a=t.extIdpConnidentifier,u=t.wechatMiniProgramCodeAndPhonePayload,c=t.options,[4,this.resetWxLoginCode()]);case 2:return(p=h.sent())?(l={connection:"wechat_mini_program_code_and_phone",extIdpConnidentifier:a,wechatMiniProgramCodeAndPhonePayload:{wxPhoneInfo:u.wxPhoneInfo,wxLoginInfo:{encryptedData:(null===(e=null==u?void 0:u.wxLoginInfo)||void 0===e?void 0:e.encryptedData)||"",iv:(null===(n=null==u?void 0:u.wxLoginInfo)||void 0===n?void 0:n.iv)||"",code:p}},options:c},[4,this.login(l,"phone")]):[2,s({message:"get wx login code error"})];case 3:return[2,h.sent()]}}))}))},t.prototype.logout=function(){return A(this,void 0,void 0,(function(){var t,e,n,o,r,a,u,c;return M(this,(function(p){switch(p.label){case 0:return[4,this.getLoginState()];case 1:return t=J.apply(void 0,[p.sent(),2]),e=t[0],n=t[1],e?(this.clearLoginState(),[2,i(!0)]):(r=(o=n).access_token,a=o.expires_at,!r||a<Date.now()?[4,this.clearLoginState()]:[3,3]);case 2:case 5:return p.sent(),[2,i(!0)];case 3:return[4,F({method:"POST",url:this.options.host+"/oidc/token/revocation",data:{client_id:this.options.appId,token:r},header:{"content-type":"application/x-www-form-urlencoded"}})];case 4:return u=J.apply(void 0,[p.sent(),1]),(c=u[0])?[2,s(c)]:[4,this.clearLoginState()]}}))}))},t.prototype.sendSms=function(t){return A(this,void 0,void 0,(function(){var e,n,o;return M(this,(function(r){switch(r.label){case 0:return t.phoneCountryCode=t.phoneCountryCode||"+86",[4,F({method:"POST",url:this.options.host+"/api/v3/send-sms",data:t,header:{"x-authing-userpool-id":this.options.userPoolId}})];case 1:return e=J.apply(void 0,[r.sent(),2]),n=e[0],o=e[1],n?[2,s(n)]:[2,i(o)]}}))}))},t.prototype.login=function(t,e){return A(this,void 0,void 0,(function(){var n,o,r,a;return M(this,(function(u){switch(u.label){case 0:return n={code:"/api/v3/signin-by-mobile",phone:"/api/v3/signin-by-mobile",password:"/api/v3/signin",passCode:"/api/v3/signin"},[4,F({method:"POST",url:this.options.host+n[e],data:t,header:{"x-authing-app-id":this.options.appId}})];case 1:return o=J.apply(void 0,[u.sent(),2]),r=o[0],a=o[1],r?[2,s(r)]:a.access_token||a.id_token?[4,this.saveLoginState(a)]:[3,3];case 2:return[2,i(u.sent())];case 3:return[4,this.clearLoginState()];case 4:return u.sent(),[2,s(a)]}}))}))},t.prototype.refreshToken=function(){return A(this,void 0,void 0,(function(){var t,e,n,o,r,a,u,c,p,l;return M(this,(function(h){switch(h.label){case 0:return[4,this.getLoginState()];case 1:return t=J.apply(void 0,[h.sent(),2]),e=t[0],n=t[1],e?[2,s({message:"refresh_token has expired, please login again"})]:(r=(o=n).refresh_token,a=o.expires_at,r?a<Date.now()?[2,s({message:"refresh_token has expired, please login again"})]:(u={grant_type:"refresh_token",redirect_uri:"",refresh_token:r},[4,F({method:"POST",url:this.options.host+"/oidc/token",data:u,header:{"content-type":"application/x-www-form-urlencoded","x-authing-app-id":this.options.appId}})]):[2,s({message:"refresh_token must not be empty"})]);case 2:return c=J.apply(void 0,[h.sent(),2]),p=c[0],l=c[1],p?[2,s(p)]:[4,this.saveLoginState(l)];case 3:return[2,i(h.sent())]}}))}))},t.prototype.updatePassword=function(t){return A(this,void 0,void 0,(function(){var e,n,o,r,a,u,c,p,l,h,d;return M(this,(function(f){switch(f.label){case 0:return[4,this.getLoginState()];case 1:return e=J.apply(void 0,[f.sent(),2]),n=e[0],o=e[1],n?[2,s({message:"Token has expired, please login again"})]:(a=(r=o).access_token,r.expires_at<Date.now()?[2,s({message:"Token has expired, please login again"})]:t.passwordEncryptType&&"none"!==t.passwordEncryptType?this.encryptFunction?[4,this.getPublicKey(t.passwordEncryptType)]:[2,s({message:'encryptFunction is required, if passwordEncryptType is not "none"'})]:[3,3]);case 2:if(u=J.apply(void 0,[f.sent(),2]),c=u[0],p=u[1],c)return[2,s(c)];t.newPassword=this.encryptFunction(t.newPassword,p),f.label=3;case 3:return[4,F({method:"POST",url:this.options.host+"/api/v3/update-password",data:t,header:{"x-authing-userpool-id":this.options.userPoolId,Authorization:a}})];case 4:return l=J.apply(void 0,[f.sent(),2]),h=l[0],d=l[1],h?[2,s(h)]:[2,i(d)]}}))}))},t.prototype.getUserInfo=function(){return A(this,void 0,void 0,(function(){var t,e,n,o,r,a,u,c;return M(this,(function(p){switch(p.label){case 0:return[4,this.getLoginState()];case 1:return t=J.apply(void 0,[p.sent(),2]),e=t[0],n=t[1],e?[2,s({message:"Token has expired, please login again"})]:(r=(o=n).access_token,o.expires_at<Date.now()?[2,s({message:"Token has expired, please login again"})]:[4,F({method:"GET",url:this.options.host+"/api/v3/get-profile",header:{"x-authing-userpool-id":this.options.userPoolId,Authorization:r}})]);case 2:return a=J.apply(void 0,[p.sent(),2]),u=a[0],c=a[1],u?[2,s(u)]:[2,i(c)]}}))}))},t.prototype.updateAvatar=function(){return A(this,void 0,void 0,(function(){var t,e,n,o;return M(this,(function(a){switch(a.label){case 0:return a.trys.push([0,4,,5]),[4,r.chooseImage({count:1,sourceType:["album","camera"],sizeType:["original"]})];case 1:return t=a.sent(),[4,r.uploadFile({url:this.options.host+"/api/v2/upload?folder=avatar",name:"file",filePath:t.tempFiles[0].tempFilePath})];case 2:return e=a.sent(),n=JSON.parse(e.data),[4,this.updateUserInfo({photo:n.data.url})];case 3:return a.sent(),[2,i(n)];case 4:return o=a.sent(),[2,s({message:JSON.stringify(o)})];case 5:return[2]}}))}))},t.prototype.updateUserInfo=function(t){return A(this,void 0,void 0,(function(){var e,n,o,r,a,u,c,p;return M(this,(function(l){switch(l.label){case 0:return[4,this.getLoginState()];case 1:return e=J.apply(void 0,[l.sent(),2]),n=e[0],o=e[1],n?[2,s({message:"Token has expired, please login again"})]:(a=(r=o).access_token,r.expires_at<Date.now()?[2,s({message:"Token has expired, please login again"})]:[4,F({method:"POST",url:this.options.host+"/api/v3/update-profile",data:t,header:{"x-authing-userpool-id":this.options.userPoolId,Authorization:a}})]);case 2:return u=J.apply(void 0,[l.sent(),2]),c=u[0],p=u[1],c?[2,s(c)]:[2,i(p)]}}))}))},t.prototype.getPhone=function(t){return A(this,void 0,void 0,(function(){var e,n,o;return M(this,(function(r){switch(r.label){case 0:return[4,F({method:"POST",url:this.options.host+"/api/v3/get-wechat-miniprogram-phone",data:t,header:{"x-authing-userpool-id":this.options.userPoolId}})];case 1:return e=J.apply(void 0,[r.sent(),2]),n=e[0],o=e[1],n?[2,s(n)]:o.phone_info?[2,i(o.phone_info)]:[2,s(o)]}}))}))},t}(),B=e.e;if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Authing', { enumerable: true, configurable: true, get: function() { return B; } });
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1675920961254);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map