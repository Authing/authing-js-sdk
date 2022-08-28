var t={d:(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.d(n,{e:()=>j});var e={};function o(){}t.r(e),t.d(e,{clearStorage:()=>d,getStorage:()=>h,login:()=>s,removeStorage:()=>y,request:()=>f,scanCode:()=>l,setStorage:()=>p}),function(t){!function(t){t.use=function(t,n={}){const e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;const o=[n];return o.unshift(this),"function"==typeof t.install?t.install.apply(t,o):"function"==typeof t&&t.apply(null,o),e.push(t),this}}(t)}(o);const r=o;function i(){return["wx","ali","baidu","qq","tt","jd","ks","qa_webview","qa_ux","Mpx","Taro","uni"].reduce(((t,n)=>(t[`__authing_move_src_mode_${n}__`]=n,t)),{})}function u(t){console.error&&console.error(`[AuthingMove/api-proxy error in "uniapp"]:\n ${t}`)}function c(){}function a(t,n={},e={}){let o={};return Object.keys(t).forEach((e=>{const r=n.hasOwnProperty(e)?n[e]:e;r&&(o[r]=t[e])})),o=Object.assign({},o,e),o}function s(t={}){return undefined.login(t)}function f(t={}){return undefined.request(t)}function l(t={}){return undefined.scanCode(t)}function p(t={}){const n=a(t,{},{encrypt:!1});return undefined.setStorage(n)}function h(t={}){const n=a(t,{},{encrypt:!1});return undefined.getStorage(n)}function y(t={}){return undefined.removeStorage(t)}function d(t={}){return undefined.clearStorage(t)}const g=i();r.use((function(t,n={}){const{custom:o={}}=n,r=function(t){const n=void 0,o=Object.create(null);Object.keys(e).forEach((t=>{o[t]=n[t]||e[t]}));const r=Object.create(null);return Object.keys(o).forEach((i=>{"function"==typeof o[i]?r[i]=(...o)=>{let r=t.from;const c=t.to;o.length&&(r=o.pop(),"string"==typeof r&&g[r]||(o.push(r),r=t.from));const a=function(t="",n=""){return`${g[`__authing_move_src_mode_${t}__`]}_${n}`}(r,c);return t.custom[a]&&t.custom[a][i]?t.custom[a][i].apply(this,o):e[i]?e[i].apply(this,o):n[i]?n[i].apply(this,o):void u(`"${i}" method does not exist in the current context`)}:r[i]=o[i]})),r}({from:"wx",to:"uniapp",custom:o}),a=Object.assign({},r,function(t){const n=i();return Object.keys(t).reduce(((e,o)=>("function"!=typeof t[o]||(e[o]=function(...e){if(function(t){return/^get\w*Manager$/.test(t)||/^create\w*Context$/.test(t)||/^(on|off)/.test(t)||/\w+Sync$/.test(t)}(o))return t[o].apply(t,e);e[0]&&!n[e[0]]||e.unshift({success:c,fail:c});const r=e[0];let i;const u=new Promise(((n,u)=>{const c=r.success,a=r.fail;r.success=function(t){c&&c.call(this,t),n(t)},r.fail=function(t){a&&a.call(this,t),u(t)},i=t[o].apply(void 0,e)}));return u.__returned=i,u}),e)),{})}(r));Object.keys(a).forEach((n=>{try{if("function"!=typeof a[n])return void(t[n]=a[n]);t[n]=(...e)=>a[n].apply(t,e)}catch(e){u(`Call ${t}.${n} error:`+JSON.stringify(e))}}))}));var v=function(){function t(){}return t.prototype.get=function(t){return r.getStorage({key:t})},t.prototype.set=function(t,n){return r.setStorage({key:t,data:n})},t.prototype.remove=function(t){return r.removeStorage({key:t})},t}();function b(t){return n=this,e=void 0,i=function(){return function(t,n){var e,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((r=(r=u.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,r.request(t)];case 1:return[2,n.sent().data.data];case 2:throw n.sent(),new Error("认证服务器返回错误");case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,r){function u(t){try{a(i.next(t))}catch(t){r(t)}}function c(t){try{a(i.throw(t))}catch(t){r(t)}}function a(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(u,c)}a((i=i.apply(n,e||[])).next())}));var n,e,o,i}function w(t){return["authing",t,"access_token"].join(":")}function m(t){return["authing",t,"id_token"].join(":")}var _=function(){return _=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},_.apply(this,arguments)},S=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function u(t){try{a(o.next(t))}catch(t){i(t)}}function c(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}a((o=o.apply(t,n||[])).next())}))},O=function(t,n){var e,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((r=(r=u.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},k=function(){function t(t){this.options=t,this.storage=new v}return t.prototype.loginByCode=function(t){return S(this,void 0,void 0,(function(){var n;return O(this,(function(e){switch(e.label){case 0:return n=_(_({},t),{connection:"wechat_mini_program_code"}),[4,this.login(n)];case 1:return[2,e.sent()]}}))}))},t.prototype.loginByPhone=function(t){return S(this,void 0,void 0,(function(){var n;return O(this,(function(e){switch(e.label){case 0:return n=_(_({},t),{connection:"wechat_mini_program_phone"}),[4,this.login(n)];case 1:return[2,e.sent()]}}))}))},t.prototype.loginByPassword=function(){},t.prototype.logout=function(){this.clearLoginState()},t.prototype.getPhone=function(){},t.prototype.updateAvatar=function(){},t.prototype.updateProfile=function(){},t.prototype.saveLoginState=function(t,n){this.storage.set(w(this.options.appId),t),this.storage.set(m(this.options.appId),n)},t.prototype.clearLoginState=function(){this.storage.remove(w(this.options.appId)),this.storage.remove(m(this.options.appId))},t.prototype.login=function(t){return S(this,void 0,void 0,(function(){var n,e,o;return O(this,(function(r){switch(r.label){case 0:return[4,b({method:"POST",url:this.options.host+"/api/v3/signin-by-mobile",data:t,header:{"x-authing-app-id":this.options.appId}})];case 1:return n=r.sent(),e=n.access_token,o=n.id_token,this.saveLoginState(e,o),[2,{accessToken:e,idToken:o}]}}))}))},t}(),x=function(){return x=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},x.apply(this,arguments)},j=function(t){var n=x(x({},t),{host:t.host||"https://core.authing.cn"});this.core=new k(n)},P=n.e;export{P as Authing};