!function(t){function n(n){for(var e,o,i=n[0],a=n[1],u=0,s=[];u<i.length;u++)o=i[u],r[o]&&s.push(r[o][0]),r[o]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);for(c&&c(n);s.length;)s.shift()()}var e={},r={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise(function(n,o){e=r[t]=[n,o]});n.push(e[2]=i);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+""+({}[t]||t)+".js"}(t),a=function(n){u.onerror=u.onload=null,clearTimeout(c);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,e[1](a)}r[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},o.m=t,o.c=e,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/dist/",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var c=a;o(o.s=1)}([function(t,n,e){(function(t){!function(n){"use strict";var e=Object.freeze({get start(){return Mt},get ensureJQuerySupport(){return pt},get setBootstrapMaxTime(){return M},get setMountMaxTime(){return C},get setUnmountMaxTime(){return I},get setUnloadMaxTime(){return L},get registerApplication(){return Pt},get getMountedApps(){return yt},get getAppStatus(){return Et},get unloadApplication(){return St},get checkActivityFunctions(){return Tt},get getAppNames(){return bt},get declareChildApplication(){return Ot},get unloadChildApplication(){return Nt},get navigateToUrl(){return rt},get triggerAppChange(){return Ut},get addErrorHandler(){return f},get removeErrorHandler(){return l},get mountRootParcel(){return z},get NOT_LOADED(){return m},get LOADING_SOURCE_CODE(){return d},get NOT_BOOTSTRAPPED(){return h},get BOOTSTRAPPING(){return v},get NOT_MOUNTED(){return w},get MOUNTING(){return g},get UPDATING(){return b},get MOUNTED(){return y},get UNMOUNTING(){return E},get SKIP_BECAUSE_BROKEN(){return P}}),r=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).CustomEvent,o=function(){try{var t=new r("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?r:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){a(t,n,e[n])})}return t}var c=[];function s(t,n){var e=p(t,n);c.length?c.forEach(function(t){return t(e)}):setTimeout(function(){throw e})}function f(t){if("function"!=typeof t)throw new Error("a single-spa error handler must be a function");c.push(t)}function l(t){if("function"!=typeof t)throw new Error("a single-spa error handler must be a function");var n=!1;return c=c.filter(function(e){var r=e===t;return n=n||r,!r}),n}function p(t,n){var e,r=n.unmountThisParcel?"Parcel":"Application",o="".concat(r," '").concat(n.name,"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}e=t}else{console.warn("While ".concat(n.status,", '").concat(n.name,"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate."));try{e=new Error(o+JSON.stringify(t))}catch(n){e=t}}return e.appName=n.name,e.name=n.name,e}var m="NOT_LOADED",d="LOADING_SOURCE_CODE",h="NOT_BOOTSTRAPPED",v="BOOTSTRAPPING",w="NOT_MOUNTED",g="MOUNTING",y="MOUNTED",b="UPDATING",E="UNMOUNTING",O="UNLOADING",P="SKIP_BECAUSE_BROKEN";function T(t){return t.status===y}function A(t){return!T(t)}function N(t){return t.status!==m&&t.status!==d}function S(t){return!N(t)}function j(t){try{return t.activeWhen(window.location)}catch(n){s(n,t),t.status=P}}function _(t){try{return!t.activeWhen(window.location)}catch(n){s(n,t),t.status=P}}function x(t){return t!==P&&(!t||t.status!==P)}function U(t){return t.name}var D={bootstrap:{millis:4e3,dieOnTimeout:!1},mount:{millis:3e3,dieOnTimeout:!1},unmount:{millis:3e3,dieOnTimeout:!1},unload:{millis:3e3,dieOnTimeout:!1}};function M(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw new Error("bootstrap max time must be a positive integer number of milliseconds");D.bootstrap={millis:t,dieOnTimeout:n}}function C(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw new Error("mount max time must be a positive integer number of milliseconds");D.mount={millis:t,dieOnTimeout:n}}function I(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw new Error("unmount max time must be a positive integer number of milliseconds");D.unmount={millis:t,dieOnTimeout:n}}function L(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw new Error("unload max time must be a positive integer number of milliseconds");D.unload={millis:t,dieOnTimeout:n}}function B(t,n,e){var r=1e3;return new Promise(function(o,i){var a=!1,u=!1;function c(t){if(!a)if(!0===t)u=!0,e.dieOnTimeout?i("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds")):console.error("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds -- we're no longer going to warn you about it."));else if(!u){var o=t,s=o*r;console.warn("".concat(n," did not resolve or reject within ").concat(s," milliseconds")),s+r<e.millis&&setTimeout(function(){return c(o+1)},r)}}t.then(function(t){a=!0,o(t)}).catch(function(t){a=!0,i(t)}),setTimeout(function(){return c(1)},r),setTimeout(function(){return c(!0)},e.millis)})}function G(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u({},D,t)}function R(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function k(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!R(n,function(t){return"function"!=typeof t})));var n}function q(t,n){return 0===(t=Array.isArray(t)?t:[t]).length&&(t=[function(){return Promise.resolve()}]),function(e){return new Promise(function(r,o){!function i(a){var u=t[a](e);W(u)?u.then(function(){a===t.length-1?r():i(a+1)}).catch(o):o("".concat(n," at index ").concat(a," did not return a promise"))}(0)})}}function W(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function F(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==h?t:(t.status=v,B(t.bootstrap(Z(t)),"Bootstrapping appOrParcel '".concat(t.name,"'"),t.timeouts.bootstrap).then(function(){return t.status=w,t}).catch(function(e){if(t.status=P,n)throw p(e,t);return s(e,t),t}))})}function K(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){if(t.status!==y)return t;t.status=E;var e=Object.keys(t.parcels).map(function(n){return t.parcels[n].unmountThisParcel()});return Promise.all(e).then(r,function(e){return r().then(function(){var r=new Error(e.message);if(n){var o=p(r,t);throw t.status=P,o}s(r,t),t.status=P})}).then(function(){return t});function r(){return B(t.unmount(Z(t)),"Unmounting application ".concat(t.name,"'"),t.timeouts.unmount).then(function(){t.status=w}).catch(function(e){if(n){var r=p(e,t);throw t.status=P,r}s(e,t),t.status=P})}})}var H=!1,J=!1;function $(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==w?t:(H||(window.dispatchEvent(new o("single-spa:before-first-mount")),H=!0),B(t.mount(Z(t)),"Mounting application '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=y,J||(window.dispatchEvent(new o("single-spa:first-mount")),J=!0),t}).catch(function(e){return t.status=y,K(t).then(r,r);function r(){if(n){var r=p(e,t);throw t.status=P,r}return s(e,t),t.status=P,t}}))})}var Q=0,V={parcels:{}};function z(){return X.apply(V,arguments)}function X(t,n){var e=this;if(!t||"object"!==i(t)&&"function"!=typeof t)throw new Error("Cannot mount parcel without a config object or config loading function");if(t.name&&"string"!=typeof t.name)throw new Error("Parcel name must be a string, if provided");if("object"!==i(n))throw new Error("Parcel ".concat(name," has invalid customProps -- must be an object"));if(!n.domElement)throw new Error("Parcel ".concat(name," cannot be mounted without a domElement provided as a prop"));var r,o=Q++,a="function"==typeof t,u=a?t:function(){return Promise.resolve(t)},c={id:o,parcels:{},status:a?d:h,customProps:n,parentName:e.name,unmountThisParcel:function(){if(c.status!==y)throw new Error("Cannot unmount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return K(c,!0).then(function(t){return c.parentName&&delete e.parcels[c.id],t}).then(function(t){return f(t),t}).catch(function(t){throw c.status=P,l(t),t})}};e.parcels[o]=c;var s=u();if(!s||"function"!=typeof s.then)throw new Error("When mounting a parcel, the config loading function must return a promise that resolves with the parcel config");var f,l,m=(s=s.then(function(t){if(!t)throw new Error("When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config");var n=t.name||"parcel-".concat(o);if(!k(t.bootstrap))throw new Error("Parcel ".concat(n," must have a valid bootstrap function"));if(!k(t.mount))throw new Error("Parcel ".concat(n," must have a valid mount function"));if(!k(t.unmount))throw new Error("Parcel ".concat(n," must have a valid unmount function"));if(t.update&&!k(t.update))throw new Error("Parcel ".concat(n," provided an invalid update function"));var e=q(t.bootstrap),i=q(t.mount),a=q(t.unmount);c.status=h,c.name=n,c.bootstrap=e,c.mount=i,c.unmount=a,c.timeouts=G(t.timeouts),t.update&&(c.update=q(t.update),r.update=function(t){return c.customProps=t,Y(function(t){return Promise.resolve().then(function(){if(t.status!==y)throw new Error("Cannot update parcel '".concat(t.name,"' because it is not mounted"));return t.status=b,B(t.update(Z(t)),"Updating parcel '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=y,t}).catch(function(n){var e=p(n,t);throw t.status=P,e})})}(c))})})).then(function(){return F(c,!0)}),v=m.then(function(){return $(c,!0)}),g=new Promise(function(t,n){f=t,l=n});return r={mount:function(){return Y(Promise.resolve().then(function(){if(c.status!==w)throw new Error("Cannot mount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return e.parcels[o]=c,$(c)}))},unmount:function(){return Y(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:Y(s),bootstrapPromise:Y(m),mountPromise:Y(v),unmountPromise:Y(g)}}function Y(t){return t.then(function(){return null})}function Z(t){var n=u({},t.customProps,{name:t.name,mountParcel:X.bind(t),singleSpa:e});return t.unmountThisParcel&&(n.unmountSelf=t.unmountThisParcel),n}function tt(t){return Promise.resolve().then(function(){return t.status!==m?t:(t.status=d,Promise.resolve().then(function(){var e=t.loadImpl(Z(t));if(!W(e))throw new Error("single-spa loading function did not return a promise. Check the second argument to registerApplication('".concat(t.name,"', loadingFunction, activityFunction)"));return e.then(function(e){var r;return"object"!==i(n=e)&&(r="does not export anything"),k(n.bootstrap)||(r="does not export a bootstrap function or array of functions"),k(n.mount)||(r="does not export a mount function or array of functions"),k(n.unmount)||(r="does not export an unmount function or array of functions"),r?(s(r,t),t.status=P,t):(n.devtools&&n.devtools.overlays&&(t.devtools.overlays=u({},t.devtools.overlays,n.devtools.overlays)),t.status=h,t.bootstrap=q(n.bootstrap,"App '".concat(t.name,"' bootstrap function")),t.mount=q(n.mount,"App '".concat(t.name,"' mount function")),t.unmount=q(n.unmount,"App '".concat(t.name,"' unmount function")),t.unload=q(n.unload||[],"App '".concat(t.name,"' unload function")),t.timeouts=G(n.timeouts),t)})}).catch(function(n){return s(n,t),t.status=P,t}));var n})}var nt={hashchange:[],popstate:[]},et=["hashchange","popstate"];function rt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw new Error("singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag");n=t.currentTarget.href,t.preventDefault()}var r=ft(window.location.href),o=ft(n);if(0===n.indexOf("#"))window.location.hash="#"+o.anchor;else if(r.host!==o.host&&o.host){if(e.isTestingEnv)return{wouldHaveReloadedThePage:!0};window.location.href=n}else!function(t,n){return n===t||n==="/"+t}(o.path,r.path)?window.history.pushState(null,null,n):window.location.hash="#"+o.anchor}function ot(t){var n=this;if(t){var e=t[0].type;et.indexOf(e)>=0&&nt[e].forEach(function(e){e.apply(n,t)})}}function it(){Ut([],arguments)}window.addEventListener("hashchange",it),window.addEventListener("popstate",it);var at=window.addEventListener,ut=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&et.indexOf(t)>=0)||R(nt[t],function(t){return t===n}))return at.apply(this,arguments);nt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&et.indexOf(t)>=0))return ut.apply(this,arguments);nt[t]=nt[t].filter(function(t){return t!==n})};var ct=window.history.pushState;window.history.pushState=function(t){var n=ct.apply(this,arguments);return it(new PopStateEvent("popstate",{state:t})),n};var st=window.history.replaceState;function ft(t){for(var n={strictMode:!0,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},e=n.parser.strict.exec(t),r={},o=14;o--;)r[n.key[o]]=e[o]||"";return r[n.q.name]={},r[n.key[12]].replace(n.q.parser,function(t,e,o){e&&(r[n.q.name][e]=o)}),r}window.history.replaceState=function(t){var n=st.apply(this,arguments);return it(new PopStateEvent("popstate",{state:t})),n},window.singleSpaNavigate=rt;var lt=!1;function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!lt){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return mt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return mt.call(this,e,window.removeEventListener,t,n,arguments)},lt=!0}}function mt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach(function(t){et.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))}),""===e.trim()?this:t.apply(this,o))}var dt={};function ht(t){return Promise.resolve().then(function(){var n=dt[t.name];return n?t.status===m?(vt(t,n),t):t.status===O?n.promise.then(function(){return t}):t.status!==w?t:(t.status=O,B(t.unload(Z(t)),"Unloading application '".concat(t.name,"'"),t.timeouts.unload).then(function(){return vt(t,n),t}).catch(function(e){return function(t,n,e){delete dt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,s(e,t),t.status=P,n.reject(e)}(t,n,e),t})):t})}function vt(t,n){delete dt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=m,n.resolve()}function wt(t,n,e,r){dt[t.name]={app:t,resolve:e,reject:r},Object.defineProperty(dt[t.name],"promise",{get:n})}var gt=[];function yt(){return gt.filter(T).map(U)}function bt(){return gt.map(U)}function Et(t){var n=R(gt,function(n){return n.name===t});return n?n.status:null}function Ot(t,n,e){return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use "registerApplication" instead'),Pt(t,n,e)}function Pt(t,n,e){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("string"!=typeof t||0===t.length)throw new Error("The first argument must be a non-empty string 'appName'");if(-1!==bt().indexOf(t))throw new Error("There is already an app declared with name ".concat(t));if("object"!==i(o)||Array.isArray(o))throw new Error("customProps must be an object");if(!n)throw new Error("The application or loading function is required");if(r="function"!=typeof n?function(){return Promise.resolve(n)}:n,"function"!=typeof e)throw new Error("The activeWhen argument must be a function");gt.push({name:t,loadImpl:r,activeWhen:e,status:m,parcels:{},devtools:{overlays:{options:{},selectors:[]}},customProps:o}),pt(),Ut()}function Tt(t){for(var n=[],e=0;e<gt.length;e++)gt[e].activeWhen(t)&&n.push(gt[e].name);return n}function At(){return gt.filter(x).filter(S).filter(j)}function Nt(t,n){return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use "unloadApplication" instead'),St(t,n)}function St(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw new Error("unloadApplication requires a string 'appName'");var e=R(gt,function(n){return n.name===t});if(!e)throw new Error("Could not unload application '".concat(t,"' because no such application has been declared"));var r,o=function(t){return dt[t]}(e.name);if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise(function(t,n){wt(e,function(){return i},t,n)});return i}return o?(r=o.promise,jt(e,o.resolve,o.reject)):r=new Promise(function(t,n){wt(e,function(){return r},t,n),jt(e,t,n)}),r}function jt(t,n,e){K(t).then(ht).then(function(){n(),setTimeout(function(){Ut()})}).catch(e)}var _t=!1,xt=[];function Ut(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(_t)return new Promise(function(t,e){xt.push({resolve:t,reject:e,eventArguments:n})});_t=!0;var e=!0;return Dt?Promise.resolve().then(function(){window.dispatchEvent(new o("single-spa:before-routing-event",a()));var n=Object.keys(dt).map(function(t){return dt[t].app}).filter(A).map(ht),u=gt.filter(x).filter(T).filter(_).map(K).map(function(t){return t.then(ht)}),c=u.concat(n);c.length>0&&(e=!1);var s=Promise.all(c),f=At(),l=f.map(function(t){return tt(t).then(F).then(function(t){return s.then(function(){return $(t)})})});l.length>0&&(e=!1);var p=gt.filter(x).filter(A).filter(N).filter(j).filter(function(t){return f.indexOf(t)<0}).map(function(t){return F(t).then(function(){return s}).then(function(){return $(t)})});return p.length>0&&(e=!1),s.catch(function(t){throw i(),t}).then(function(){return i(),Promise.all(l.concat(p)).catch(function(n){throw t.forEach(function(t){return t.reject(n)}),n}).then(function(){return r(!1)})})}):Promise.resolve().then(function(){var t=At().map(tt);return t.length>0&&(e=!1),Promise.all(t).then(r).catch(function(t){throw i(),t})});function r(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=yt();n&&i(),t.forEach(function(t){return t.resolve(r)});try{var u=e?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new o(u,a())),window.dispatchEvent(new o("single-spa:routing-event",a()))}catch(t){setTimeout(function(){throw t})}if(_t=!1,xt.length>0){var c=xt;xt=[],Ut(c)}return r}function i(){t.forEach(function(t){ot(t.eventArguments)}),ot(n)}function a(){var t={detail:{}};return n&&n[0]&&(t.detail.originalEvent=n[0]),t}}var Dt=!1;function Mt(){Dt=!0,Ut()}setTimeout(function(){Dt||console.warn("singleSpa.start() has not been called, ".concat(5e3,"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start"))},5e3);var Ct={getRawAppData:function(){return[].concat(gt)},reroute:Ut,NOT_LOADED:m,toLoadPromise:tt,toBootstrapPromise:F};window&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Ct),n.BOOTSTRAPPING=v,n.LOADING_SOURCE_CODE=d,n.MOUNTED=y,n.MOUNTING=g,n.NOT_BOOTSTRAPPED=h,n.NOT_LOADED=m,n.NOT_MOUNTED=w,n.SKIP_BECAUSE_BROKEN=P,n.UNMOUNTING=E,n.UPDATING=b,n.addErrorHandler=f,n.checkActivityFunctions=Tt,n.declareChildApplication=Ot,n.ensureJQuerySupport=pt,n.getAppNames=bt,n.getAppStatus=Et,n.getMountedApps=yt,n.mountRootParcel=z,n.navigateToUrl=rt,n.registerApplication=Pt,n.removeErrorHandler=l,n.setBootstrapMaxTime=M,n.setMountMaxTime=C,n.setUnloadMaxTime=L,n.setUnmountMaxTime=I,n.start=Mt,n.triggerAppChange=Ut,n.unloadApplication=St,n.unloadChildApplication=Nt,Object.defineProperty(n,"__esModule",{value:!0})}(n)}).call(this,e(2))},function(t,n,e){"use strict";e.r(n);var r,o=e(0);Object(o.registerApplication)("intro",function(){return e.e(2).then(e.bind(null,3))},function(t){return""===t.pathname||"/"===t.pathname}),Object(o.registerApplication)("1",function(){return e.e(1).then(e.bind(null,4))},(r="/1",function(t){return t.pathname.startsWith(r)})),Object(o.start)()},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e}]);
//# sourceMappingURL=single-spa.config.js.map