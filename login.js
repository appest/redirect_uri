!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1269)}({1269:function(e,t){!function(){"use strict";Office.initialize=function(){$(document).ready((function(){var e,t=window.location.origin+"/add-in/login",n=function(e){var t=window.location.hash;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[#&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("access_token");if(window.location.hash.length>0)n?(e={status:"auth success",token:n},Office.context.ui.messageParent(JSON.stringify(e))):function(){var e={status:"failed",token:void 0};Office.context.ui.messageParent(JSON.stringify(e))}();else{var o="https://ticktick.com/oauth/authorize?client_id=29xVAE6nMzik67IBhN&redirect_uri="+t+"&response_type=token";window.location.replace(o)}}))}}(),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(n)if("function"!=typeof n){for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var r=void 0;try{r=n[o]}catch(e){continue}e.register(r,o,"/Users/lijiawei/Developer/Web-Addons/outlook-ticktick/src/settings/login.js")}}else e.register(n,"module.exports","/Users/lijiawei/Developer/Web-Addons/outlook-ticktick/src/settings/login.js")}}()}});
//# sourceMappingURL=login.js.map