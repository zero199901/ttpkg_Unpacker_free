define("api/qm-statistics.js",(function(e,n,r,t,o,a,i,c,s,u,p,l,d,f,m,v,y,h,b,g,_,j,S,w,k,O,q,A,P,x,E,I,R,D,L,H,U,C,M){"use strict";function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function z(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return Q(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function W(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function F(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?W(Object(r),!0).forEach((function(n){G(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function G(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=T(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,n||"default");if("object"!=T(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==T(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function N(e,n,r,t,a,i,c){try{var s=e[i](c),u=s.value}catch(e){return void r(e)}s.done?n(u):o.resolve(u).then(t,a)}function $(e){return function(){var n=this,r=arguments;return new o((function(t,o){var a=e.apply(n,r);function i(e){N(a,t,o,i,c,"next",e)}function c(e){N(a,t,o,i,c,"throw",e)}i(void 0)}))}}var B=e("../common/vendor.js"),J=e("../store/index.js"),K=e("../mixin/share.js"),V=e("../hooks/use-login.js");e("../hooks/use-pay.js");var X=e("../store/modules/global.js");Math;var Y=B.reactive({}),Z=[];function ee(e){var n=[];for(var r in e)n.push("".concat(r,"=").concat(encodeURIComponent(e[r])));return n.join("&")}var ne={__name:"App",setup:function(e){var n=V.useLogin(),r=X.useGlobalStore();return B.onLaunch(function(){var e=$(regeneratorRuntime.mark((function e(t){var o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.query,console.log("App Lauch",o),r.getSystemInfo(),r.getHeaderInfo(),B.index.hideShareMenu(),tt.disableUserScreenRecord(),Object.assign(Y,{track:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];Z.push(n)}}),te.provide("qmsa",Y),a=Y,e.next=5,$(regeneratorRuntime.mark((function e(){var n,r,t,o,a,i,c,s=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="reader_paid_dyminiapp",r="ttcd95bb2852a26b7c01",t=(s.length>0&&void 0!==s[0]?s[0]:{}).channel||"rd-default",o={qm:{waitLoginEnd:!0,show_log:!0,qmkey:"6528j4pbr2h85fodbu3n1neomgesj0tp",project:n,mp_app_id:r,channel:t,server_url:"https://drs.wtzw.com/frontend",environment:{debugmode:0}},sensors:{name:"sensors",server_url:"https://qm-data.wtzw.com/sa?project=demand_side_platform",autoTrack:{appLaunch:!0,appShow:!0,appHide:!0,pageShow:!0,pageShare:!0,mpClick:!1,mpFavorite:!0,pageLeave:!1},show_log:!0}},e.next=7,B.a(o);case 7:return a=e.sent,i=a.qm_sdk.get_params(),c=i.appversion,e.abrupt("return",(a.register_public({pub_project:n,mp_app_id:r,channel:t,appversion:c},"sensors"),Object.assign(Y,a),te.provide("qmsa",Y),a));case 11:case"end":return e.stop()}}),e)})))(o);case 5:a=e.sent,n.init(a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),B.onShow((function(){var e=B.index.getEnterOptionsSync(),n=e.scene,t=e.query;console.log("App Show",n,t),t.channel&&B.index.setStorageSync("last-channel",t.channel),t.channel&&t.channel!==r.entryQuery.channel&&function(e,n){(null==e?void 0:e.qm_sdk)&&(e.qm_sdk.set_identity({mktparams:ee(n)}),e.qm_sdk.set_environment({channel:n.channel}),e.register_public({channel:n.channel},"sensors"))}(B.inject("qmsa"),t),r.setEntryQuery(F(F({},t),{},{scene:n}))})),B.onHide((function(){console.log("App Hide")})),B.onExit((function(){tt.enableUserScreenRecord()})),function(){}}},re=function(){return"../components/qm-icon/index.js"},te=B.createSSRApp(ne);function oe(){return te.mixin(K.share),te.component("qmIcon",re),te.use(J.store),{app:te}}oe().app.mount("#app"),r.app=te,r.createApp=oe,r.getServerParams=function(e){var n=e.qm_sdk.get_params();return(null==n?void 0:n.appversion)&&(null==n?void 0:n.channel)||e.sensors_sdk.track("Dypaid_Sdk_Error",{error_log:"请检查serverParams，"+(n?"appversion:".concat(n.appversion,"，channel:").concat(n.channel):"没有获取到sdk的params")}),{"app-version":null==n?void 0:n.appversion,channel:null==n?void 0:n.channel}},r.statisticsInitParams=function(e,n){var r=console.error;console.error=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];r.apply(console,t);var a=t.join("。");(a.startsWith("请设置日志")||a.startsWith("请在identity中设置"))&&e.sensors_sdk.track("Dypaid_Sdk_Error",{error_log:a})},e.qm_sdk.set_identity(F(F({},n),{},{accountid:n.accountid,openid:n.openid,unionid:n.unionid,uid:n.openid})),e.register_public({openid:n.openid,unionid:n.unionid},"sensors"),e.login(n.accountid),Z.length>0&&(Z.forEach((function(n){e.track.apply(e,z(n))})),Z=[])}}));
//# sourceMappingURL=qm-statistics.js.map