module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1662085259026, function(require, module, exports) {
var t={d:(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.d(n,{e:()=>Q});var e={};function o(){}t.r(e),t.d(e,{chooseImage:()=>_,clearStorage:()=>O,getStorage:()=>b,login:()=>p,removeStorage:()=>w,request:()=>f,scanCode:()=>y,setStorage:()=>v,uploadFile:()=>P}),function(t){!function(t){t.use=function(t,n={}){const e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;const o=[n];return o.unshift(this),"function"==typeof t.install?t.install.apply(t,o):"function"==typeof t&&t.apply(null,o),e.push(t),this}}(t)}(o);const r=o;function i(){return["wx","ali","baidu","qq","tt","jd","ks","qa_webview","qa_ux","Mpx","Taro","uni"].reduce(((t,n)=>(t[`__authing_move_src_mode_${n}__`]=n,t)),{})}function s(t){console.error&&console.error(`[AuthingMove/api-proxy error in "wx"]:\n ${t}`)}function u(){}function a(t,n={},e={}){let o={};return Object.keys(t).forEach((e=>{const r=n.hasOwnProperty(e)?n[e]:e;r&&(o[r]=t[e])})),o=Object.assign({},o,e),o}function c(){return wx}const l=c();function p(t={}){return l.login(t)}const h=c();function f(t={}){return h.request(t)}const d=c();function y(t={}){return d.scanCode(t)}const g=c();function v(t={}){const n=a(t,{},{encrypt:!1});return g.setStorage(n)}function b(t={}){const n=a(t,{},{encrypt:!1});return g.getStorage(n)}function w(t={}){return g.removeStorage(t)}function O(t={}){return g.clearStorage(t)}const m=c();function _(t={}){return m.chooseMedia(t)}const k=c();function P(t={}){return k.uploadFile(t)}const S=i();const x=c();r.use((function(t,n={}){const{custom:o={}}=n,r=function(t){const n=c(),o=Object.create(null);Object.keys(e).forEach((t=>{o[t]=n[t]||e[t]}));const r=Object.create(null);return Object.keys(o).forEach((i=>{"function"==typeof o[i]?r[i]=(...o)=>{let r=t.from;const u=t.to;o.length&&(r=o.pop(),"string"==typeof r&&S[r]||(o.push(r),r=t.from));const a=function(t="",n=""){return`${S[`__authing_move_src_mode_${t}__`]}_${n}`}(r,u);return t.custom[a]&&t.custom[a][i]?t.custom[a][i].apply(this,o):e[i]?e[i].apply(this,o):n[i]?n[i].apply(this,o):void s(`"${i}" method does not exist in the current context`)}:r[i]=o[i]})),r}({from:"wx",to:"wx",custom:o}),a=Object.assign({},r,function(t){const n=i();return Object.keys(t).reduce(((e,o)=>("function"!=typeof t[o]||(e[o]=function(...e){if(function(t){return/^get\w*Manager$/.test(t)||/^create\w*Context$/.test(t)||/^(on|off)/.test(t)||/\w+Sync$/.test(t)}(o))return t[o].apply(t,e);e[0]&&!n[e[0]]||e.unshift({success:u,fail:u});const r=e[0];let i;const s=new Promise(((n,s)=>{const u=r.success,a=r.fail;r.success=function(t){u&&u.call(this,t),n(t)},r.fail=function(t){a&&a.call(this,t),s(t)},i=t[o].apply(x,e)}));return s.__returned=i,s}),e)),{})}(r));Object.keys(a).forEach((n=>{try{if("function"!=typeof a[n])return void(t[n]=a[n]);t[n]=(...e)=>a[n].apply(t,e)}catch(e){s(`Call ${t}.${n} error:`+JSON.stringify(e))}}))}));var T=function(){function t(){}return t.prototype.get=function(t){return r.getStorage({key:t})},t.prototype.set=function(t,n){return r.setStorage({key:t,data:n})},t.prototype.remove=function(t){return r.removeStorage({key:t})},t}();function j(t){return n=this,e=void 0,i=function(){var n;return function(t,n){var e,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,r.request(t)];case 1:return[2,e.sent().data.data];case 2:return n=e.sent(),console.error("认证服务器返回错误: ",n),[3,3];case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,r){function s(t){try{a(i.next(t))}catch(t){r(t)}}function u(t){try{a(i.throw(t))}catch(t){r(t)}}function a(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,u)}a((i=i.apply(n,e||[])).next())}));var n,e,o,i}function C(t){return["authing",t,"access_token"].join(":")}function I(t){return["authing",t,"id_token"].join(":")}function E(t){return["authing",t,"refresh_token"].join(":")}function F(t,n){console.error('Authing miniprogram sdk error in "'+t+'": ',n)}var A,$=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,u)}a((o=o.apply(t,n||[])).next())}))},L=function(t,n){var e,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},q=function(){function t(t){this.authingOptions=t.authingOptions,this.storage=t.storage,this.encryptFunction=t.encryptFunction}return t.prototype.getLoginState=function(){return $(this,void 0,void 0,(function(){var t,n,e;return L(this,(function(o){switch(o.label){case 0:return[4,this.storage.get(I(this.authingOptions.appId))];case 1:return t=o.sent(),[4,this.storage.get(C(this.authingOptions.appId))];case 2:return n=o.sent(),[4,this.storage.get(E(this.authingOptions.appId))];case 3:return e=o.sent(),[2,{idToken:t.data,accessToken:n.data,refreshTokenRes:e.data}]}}))}))},t.prototype.clearLoginState=function(){this.storage.remove(C(this.authingOptions.appId)),this.storage.remove(I(this.authingOptions.appId)),this.storage.remove(E(this.authingOptions.appId))},t.prototype.saveLoginState=function(t,n,e){return $(this,void 0,void 0,(function(){return L(this,(function(o){switch(o.label){case 0:return[4,this.storage.set(C(this.authingOptions.appId),t)];case 1:return o.sent(),[4,this.storage.set(I(this.authingOptions.appId),n)];case 2:return o.sent(),[4,this.storage.set(E(this.authingOptions.appId),e)];case 3:return o.sent(),[2]}}))}))},t.prototype.getPublicKey=function(){return $(this,void 0,void 0,(function(){return L(this,(function(t){switch(t.label){case 0:return[4,j({method:"GET",url:"https://core.authing.cn/api/v2/.well-known"})];case 1:return[2,t.sent().publicKey]}}))}))},t}(),G=(A=function(t,n){return A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},A(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}A(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),M=function(){return M=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},M.apply(this,arguments)},z=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,u)}a((o=o.apply(t,n||[])).next())}))},B=function(t,n){var e,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},K=function(t){function n(n){return t.call(this,n)||this}return G(n,t),n.prototype.loginByCode=function(t){return z(this,void 0,void 0,(function(){var n;return B(this,(function(e){switch(e.label){case 0:return n=M(M({},t),{connection:"wechat_mini_program_code"}),[4,this.login(n,"code")];case 1:return[2,e.sent()]}}))}))},n.prototype.loginByPhone=function(t){return z(this,void 0,void 0,(function(){var n;return B(this,(function(e){switch(e.label){case 0:return n=M(M({},t),{connection:"wechat_mini_program_phone"}),[4,this.login(n,"phone")];case 1:return[2,e.sent()]}}))}))},n.prototype.loginByPassword=function(t){var n;return z(this,void 0,void 0,(function(){var e,o;return B(this,(function(r){switch(r.label){case 0:return"rsa"!==(null===(n=t.options)||void 0===n?void 0:n.passwordEncryptType)?[3,2]:this.encryptFunction?[4,this.getPublicKey()]:[2,console.error('encryptFunction is requiered, if passwordEncryptType is not "none"')];case 1:e=r.sent(),t.passwordPayload.password=this.encryptFunction(t.passwordPayload.password,e),r.label=2;case 2:return o=M(M({},t),{connection:"PASSWORD"}),[4,this.login(o,"password")];case 3:return[2,r.sent()]}}))}))},n.prototype.loginByPassCode=function(t){return z(this,void 0,void 0,(function(){var n;return B(this,(function(e){switch(e.label){case 0:return t.passCodePayload.phone&&(t.passCodePayload.phoneCountryCode=t.passCodePayload.phoneCountryCode||"+86"),n=M(M({},t),{connection:"PASSCODE"}),[4,this.login(n,"passCode")];case 1:return[2,e.sent()]}}))}))},n.prototype.logout=function(){return z(this,void 0,void 0,(function(){return B(this,(function(t){return this.clearLoginState(),[2]}))}))},n.prototype.sendSms=function(t){return z(this,void 0,void 0,(function(){return B(this,(function(n){switch(n.label){case 0:return t.phoneCountryCode=t.phoneCountryCode||"+86",[4,j({method:"POST",url:this.authingOptions.host+"/api/v3/send-sms",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId}})];case 1:return[2,n.sent()]}}))}))},n.prototype.login=function(t,n){return z(this,void 0,void 0,(function(){var e,o,r,i,s;return B(this,(function(u){switch(u.label){case 0:return e={code:"/api/v3/signin-by-mobile",phone:"/api/v3/signin-by-mobile",password:"/api/v3/signin",passCode:"/api/v3/signin"},[4,j({method:"POST",url:this.authingOptions.host+e[n],data:t,header:{"x-authing-app-id":this.authingOptions.appId}})];case 1:return o=u.sent(),r=o.access_token,i=o.id_token,s=o.refresh_token,[4,this.saveLoginState(r,i,s)];case 2:return u.sent(),[2,{accessToken:r,idToken:i}]}}))}))},n.prototype.refreshToken=function(t){return z(this,void 0,void 0,(function(){var n,e,o,r;return B(this,(function(i){switch(i.label){case 0:return[4,j({method:"POST",url:this.authingOptions.host+"/oidc/token",data:t,header:{"content-type":"application/x-www-form-urlencoded","x-authing-app-id":this.authingOptions.appId}})];case 1:return n=i.sent(),e=n.access_token,o=n.id_token,r=n.refresh_token,[4,this.saveLoginState(e,o,r)];case 2:return i.sent(),[2,{accessToken:e,idToken:o,refreshToken:r}]}}))}))},n.prototype.changeQrcodeStatus=function(t){return z(this,void 0,void 0,(function(){var n;return B(this,(function(e){switch(e.label){case 0:return[4,this.getLoginState()];case 1:return n=e.sent().accessToken,[4,j({method:"POST",url:this.authingOptions.host+"/oidc/token",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId,Authorization:n}})];case 2:return[2,e.sent()]}}))}))},n}(q),D=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),R=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,u)}a((o=o.apply(t,n||[])).next())}))},U=function(t,n){var e,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},J=function(t){function n(n){return t.call(this,n)||this}return D(n,t),n.prototype.updatePassword=function(t){return R(this,void 0,void 0,(function(){var n,e;return U(this,(function(o){switch(o.label){case 0:return[4,this.getLoginState()];case 1:return n=o.sent().accessToken,"rsa"!==t.passwordEncryptType?[3,3]:this.encryptFunction?[4,this.getPublicKey()]:[2,F("updatePassword",'encryptFunction is requiered, if passwordEncryptType is not "none"')];case 2:e=o.sent(),t.newPassword=this.encryptFunction(t.newPassword,e),o.label=3;case 3:return[4,j({method:"POST",url:this.authingOptions.host+"/api/v3/update-password",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId,Authorization:n}})];case 4:return[2,o.sent()]}}))}))},n.prototype.getUserInfo=function(){return R(this,void 0,void 0,(function(){var t;return U(this,(function(n){switch(n.label){case 0:return[4,this.getLoginState()];case 1:return t=n.sent().accessToken,[4,j({method:"GET",url:this.authingOptions.host+"/api/v3/get-profile",header:{"x-authing-userpool-id":this.authingOptions.userPoolId,Authorization:t}})];case 2:return[2,n.sent()]}}))}))},n.prototype.updateAvatar=function(){return R(this,void 0,void 0,(function(){var t;return U(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,r.chooseImage({count:1,sourceType:["album","camera"],sizeType:["original"]})];case 1:return t=n.sent(),[4,r.uploadFile({url:this.authingOptions.host+"/api/v2/upload?folder=avatar",name:"file",filePath:t.tempFiles[0].tempFilePath})];case 2:return n.sent(),[3,4];case 3:return F("updateAvatar",n.sent()),[3,4];case 4:return[2]}}))}))},n.prototype.updateUserInfo=function(t){return R(this,void 0,void 0,(function(){var n;return U(this,(function(e){switch(e.label){case 0:return[4,this.getLoginState()];case 1:return n=e.sent().accessToken,[4,j({method:"POST",url:this.authingOptions.host+"/api/v3/update-profile",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId,Authorization:n}})];case 2:return[2,e.sent()]}}))}))},n.prototype.getPhone=function(t){return R(this,void 0,void 0,(function(){return U(this,(function(n){switch(n.label){case 0:return[4,j({method:"POST",url:this.authingOptions.host+"/api/v3/get-wechat-miniprogram-phone",data:t,header:{"x-authing-userpool-id":this.authingOptions.userPoolId}})];case 1:return[2,n.sent()]}}))}))},n}(q),N=function(){return N=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},N.apply(this,arguments)},Q=function(t){var n=N(N({},t),{host:t.host||"https://core.authing.cn"}),e=new T,o=t.encryptFunction;this.core=new K({authingOptions:n,storage:e,encryptFunction:o}),this.user=new J({authingOptions:n,storage:e,encryptFunction:o})},W=n.e;if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Authing', { enumerable: true, configurable: true, get: function() { return W; } });
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1662085259026);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map