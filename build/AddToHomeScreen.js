!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["add-to-homescreen-react"]=t():e["add-to-homescreen-react"]=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=1},function(e){e.exports=JSON.parse('{"appID":"ServicePortal","debug":false,"logging":false,"modal":false,"mandatory":false,"autoStart":true,"skipFirstVisit":false,"minPageViews":0,"startDelay":1,"lifespan":15,"displayPace":1440,"mustShowCustomPrompt":false,"maxDisplayCount":0,"validLocation":[],"onInit":null,"onShow":null,"onAdd":null,"onInstall":null,"onCancel":null,"customCriteria":null,"customPromptContent":{},"athWrapper":".ath-container","athGuidance":"ath-guidance","showClasses":["animated","d-flex"],"showClass":"d-flex","hideClass":"d-none","customPromptElements":{"title":".ath-banner-title","body":".ath-banner","logo":".ath-prompt-logo","cancel":".btn-cancel","install":".btn-install"},"customPromptPlatformDependencies":{"native":{"showClasses":["fadeInUp","right-banner"]},"edge":{"showClasses":["edge-wrapper","animated","fadeIn","d-block","right-banner"],"imgs":[{"src":"./images/guidance/chromium.png","alt":"Tap the Add to home screen Icon"}]},"chromium":{"showClasses":["chromium-wrapper","animated","fadeIn","d-block","right-banner"],"imgs":[{"src":"./images/guidance/chromium.png","alt":"Tap the Add to home screen Icon"}]},"iphone":{"showClasses":["iphone-wrapper","animated","fadeIn","d-block"],"imgs":[{"src":"./images/guidance/iphone.png","alt":"Tap the Share Icon and select Add to home screen entry"}]},"ipad":{"showClasses":["ipad-wrapper","animated","fadeIn","d-block"],"imgs":[{"src":"./images/guidance/ipad.png","alt":"Tap the Add to home screen Icon"}]},"firefox":{"showClasses":["firefox-wrapper","animated","fadeIn","d-block"],"imgs":[{"src":"./images/guidance/firefoxAndroid.png","alt":"Tap the Add to home screen Icon"}]},"samsung":{"showClasses":["samsung-wrapper","animated","fadeIn","d-block"],"imgs":[{"src":"./images/guidance/firefoxAndroid.png","alt":"Tap the Add to home screen Icon"}]},"opera":{"showClasses":["opera-home-screen-wrapper","animated","fadeIn","d-block"],"imgs":[{"src":"./images/guidance/opera.png","alt":"Tap the Add to home screen Icon"}]}}}')},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var o=n(0),a=n.n(o),i=(n(4),n(2));function s({options:e}){const t={title:"Install Service Portal?",src:"./images/defaultLogo.png",cancelMsg:"Not Now",installMsg:"Install"},s={lastDisplayTime:0,returningVisitor:!1,displayCount:0,optedOut:!1,added:!1,pageViews:0};let r,l,c,d=Object.assign({},i,e),u={},p={},m=[],f=!1,h=!1;function g(e){e||(b("no service worker"),p.isCompatible=!1),u.pageViews+=1,w(),d&&d.debug&&void 0===d.logging&&(d.logging=!0),d.mandatory=d.mandatory&&("standalone"in window.navigator||d.debug),d.modal=d.modal||d.mandatory,d.mandatory&&(d.startDelay=-.5),d.debug&&(p.isCompatible=!0),d.onInit&&d.onInit.call(this),d.autoStart&&l?(b("Add to home screen: autoStart displaying callout"),C()):h||C()}function b(e){d.logging&&console.log(e)}function w(){window.localStorage.setItem(d.appID,JSON.stringify(u))}function y(e){return d.debug&&"string"==typeof d.debug?d.debug:p.isChromium&&void 0===e?"native":p.isFireFox?"firefox":p.isiPad?"ipad":p.isiPhone?"iphone":p.isOpera?"opera":p.isSamsung?"samsung":p.isEdge?"edge":p.isChromium?"chromium":""}function v(e){e.preventDefault(),b("capturing the native A2HS prompt"),l=e,x()}function x(){setTimeout(S,1e3*d.startDelay+500)}function C(){f?b("Add to home screen: not displaying callout because already shown on screen"):(f=!0,"interactive"===document.readyState||"complete"===document.readyState?x():document.onreadystatechange=function(){"complete"===document.readyState&&x()})}function S(){if(function(){if(void 0!==r)return r;if(r=!1,null!==d.customCriteria){if(!("function"==typeof d.customCriteria?d.customCriteria():!!d.customCriteria))return b("Add to home screen: not displaying callout because a custom criteria was not met."),!1}if(!("serviceWorker"in navigator))return b("Add to home screen: not displaying callout because service workers are not supported"),!1;if(!p.isCompatible)return b("Add to home screen: not displaying callout because device not supported"),!1;let e=Date.now(),t=u.lastDisplayTime;if(e-t<6e4*d.displayPace)return b("Add to home screen: not displaying callout because displayed recently"),!1;if(d.maxDisplayCount&&u.displayCount>=d.maxDisplayCount)return b("Add to home screen: not displaying callout because displayed too many times already"),!1;let n=!d.validLocation.length;for(let e=d.validLocation.length;e--;)if(d.validLocation[e].test(document.location.href)){n=!0;break}if(!n)return b("Add to home screen: not displaying callout because not a valid location"),!1;let o=!1;for(let e=m.length;e--;)if(document.location.href.indexOf(m[e])>-1){o=!0;break}if(o)return b("Add to home screen: not displaying callout because this is a guidance URL"),!1;if(u.pageViews<d.minPageViews)return b("Add to home screen: not displaying callout because not enough visits"),!1;if(u.optedOut)return b("Add to home screen: not displaying callout because user opted out"),!1;if(u.added)return b("Add to home screen: not displaying callout because already added to the home screen"),!1;if(p.isStandalone)return u.added||(u.added=!0,w(),d.onAdd&&d.onAdd.call(this)),b("Add to home screen: not displaying callout because in standalone mode"),!1;if(!u.returningVisitor&&(u.returningVisitor=!0,w(),d.skipFirstVisit))return b("Add to home screen: not displaying callout because skipping first visit"),!1;return r=!0,!0}()){if(l&&!d.mustShowCustomPrompt)b("show native prompt"),P();else{let e=y(),n=document.querySelector(d.athWrapper);if(b(`show generic prompt for platform ${e}`),n&&!u.optedOut){n.classList.remove(d.hideClass);let o=Object.assign({},t,d.customPromptContent,d.customPromptPlatformDependencies[e]);o.showClasses?o.showClasses=o.showClasses.concat(d.showClasses):o.showClasses=d.showClasses;for(let e=0;e<o.showClasses.length;e++)n.classList.add(o.showClasses[e]);let a=n.querySelector(d.customPromptElements.title),i=n.querySelector(d.customPromptElements.logo),s=n.querySelector(d.customPromptElements.cancel),r=n.querySelector(d.customPromptElements.install);a&&o.title&&(a.innerText=o.title),i&&o.src&&(i.src=o.src,i.alt=o.title||"Install PWA"),r&&(r.addEventListener("click",O),r.classList.remove(d.hideClass),r.innerText=o.installMsg?o.installMsg:o.action&&o.action.ok?o.action.ok:d.customPromptElements.action.ok),s&&(s.addEventListener("click",I),s.classList.remove(d.hideClass),s.innerText=o.cancelMsg?o.cancelMsg:o.action&&o.action.cancel?o.action.cancel:d.customPromptElements.action.cancel)}d.lifespan&&d.lifespan>0&&(c=setTimeout(k,1e3*d.lifespan))}d.onShow&&d.onShow.call(this),u.lastDisplayTime=Date.now(),u.displayCount++,w()}}function P(){return l.prompt().then((function(){return l.userChoice})).then((function(e){u.added="accepted"===e.outcome,u.added?(b("User accepted the A2HS prompt"),d.onAdd&&d.onAdd()):(d.onCancel&&d.onCancel(),u.optedOut=!0,b("User dismissed the A2HS prompt")),w(),l=null})).catch((function(e){if(b(e.message),e.message.indexOf("user gesture")>-1)d.mustShowCustomPrompt=!0,x();else{if(!(e.message.indexOf("The app is already installed")>-1))return b(e),e;b(e.message),u.added=!0,w()}}))}function I(e){return e.preventDefault(),d.onCancel&&d.onCancel(),A(),!1}function A(){let e=document.querySelector(d.athWrapper);e&&e.classList.remove(...d.showClasses)}function O(){return d.onInstall&&d.onInstall(),!l||d.debug&&"native"!==y()?function(e){let o=y(e),a=document.querySelector(d.athWrapper);if(a)if(c&&clearTimeout(c),!e&&"native"===o&&l)A(),P();else{let e=Object.assign({},t,d.customPromptContent,d.customPromptPlatformDependencies[o]);if(e.targetUrl)location.replace(e.targetUrl);else{let t=a.querySelector(d.customPromptElements.body);if(e.imgs&&e.imgs.length>0){t.innerHTML="",t.classList.add(d.athGuidance);for(let o=0;o<e.imgs.length;o++){let a=new Image;a.src=n(1)(e.imgs[o].src),a.alt=e.imgs[o].alt,e.imgs[o].classes&&a.classList.add(...e.imgs[o].classes),a.classList.add(d.showClass),t.appendChild(a)}}(function(e){let t=e.getBoundingClientRect();return 0!==t.width&&0!==t.height})(a)||(a.classList.add(...e.showClasses),a.classList.remove(d.hideClass));let o=d.lifespan>=10?d.lifespan:10;c=setTimeout(k,1e3*o)}}}(!0):(A(),P()),!1}function k(){let e=y(),t=document.querySelector(d.athWrapper);if(t){let n=d.customPromptPlatformDependencies[e];n.showClasses=n.showClasses.concat(d.showClasses),t.classList.remove(...n.showClasses),t.classList.add(d.hideClass)}}return Object(o.useEffect)((function(){"onbeforeinstallprompt"in window&&(window.addEventListener("beforeinstallprompt",v),h=!0);"onappinstalled"in window&&window.addEventListener("appinstalled",(function(e){b("a2hs installed"),u.added=!0,w(),d.onInstall&&d.onInstall.call(this)}));!function(){let e=window.navigator.userAgent;p.isIDevice=/iphone|ipod|ipad/i.test(e),p.isSamsung=/Samsung/i.test(e),p.isFireFox=/Firefox/i.test(e),p.isOpera=/opr/i.test(e),p.isEdge=/edg/i.test(e),p.isFireFox&&(p.isFireFox=/android/i.test(e));p.isOpera&&(p.isOpera=/android/i.test(e));p.isChromium="onbeforeinstallprompt"in window,p.isInWebAppiOS=!0===window.navigator.standalone,p.isInWebAppChrome=window.matchMedia("(display-mode: standalone)").matches,p.isMobileSafari=p.isIDevice&&e.indexOf("Safari")>-1&&e.indexOf("CriOS")<0,p.isStandalone=p.isInWebAppiOS||p.isInWebAppChrome,p.isiPad=p.isMobileSafari&&e.indexOf("iPad")>-1,p.isiPhone=p.isMobileSafari&&-1===e.indexOf("iPad"),p.isCompatible=p.isChromium||p.isMobileSafari||p.isSamsung||p.isFireFox||p.isOpera}();let e=window.localStorage.getItem(d.appID);if(u=e?JSON.parse(e):s,u&&u.added)return;if("serviceWorker"in navigator){document.querySelector("[rel='manifest']")||(b("no manifest file"),p.isCompatible=!1),navigator.serviceWorker.getRegistration().then(g),function(e){for(let t in e)if(e.hasOwnProperty(t)){let n=e[t].targetUrl;n&&m.push(n)}}(d.customPromptPlatformDependencies)}else g({})}),[]),a.a.createElement("div",{className:"ath-container banner-bottom-center"},a.a.createElement("div",{className:"ath-banner"},a.a.createElement("div",{className:"ath-banner-cell"},a.a.createElement("img",{alt:"PWA",className:"ath-prompt-logo",src:n(1)("./images/defaultLogo.png")})),a.a.createElement("div",{className:"ath-banner-title"}),a.a.createElement("div",{className:"ath-banner-cell"},a.a.createElement("button",{className:"btn btn-cancel btn-link button"},"Not Now")),a.a.createElement("div",{className:"ath-banner-cell"},a.a.createElement("button",{className:"btn btn-install btn-success button button--primary"},"Install"))))}},function(e,t,n){var o=n(5),a=n(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},s=(o("!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./addToHomeScreen.scss",a,i),a.locals?a.locals:{});e.exports=s},function(e,t,n){"use strict";var o,a={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function r(e,t,n){e=n.base?e+n.base:e,a[e]||(a[e]=[]);for(var o=0;o<t.length;o++){var i=t[o],s={css:i[1],media:i[2],sourceMap:i[3]},r=a[e];r[o]?r[o].updater(s):r.push({updater:h(s,n)})}for(var l=t.length;l<a[e].length;l++)a[e][l].updater();a[e].length=t.length,0===a[e].length&&delete a[e]}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,o){var a=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(e,t){var n,o,a;if(t.singleton){var i=f++;n=m||(m=l(t)),o=u.bind(null,n,i,!1),a=u.bind(null,n,i,!0)}else n=l(t),o=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i()),r(e,t,n),function(t){r(e,t||[],n)}}},function(e,t,n){(t=n(7)(!1)).push([e.i,".ath-container{background-color:#eeeeee;color:#000000;display:none;flex-direction:column;padding:1%;position:fixed;text-align:center;width:100%;z-index:1000}.ath-banner{display:flex;flex-direction:row;justify-content:center;position:relative}.ath-banner-title{align-items:center;display:flex;font-size:1rem;justify-content:center;text-align:center;width:calc(100% - 240px)}.ath-banner-cell-2x,.ath-banner-cell{align-items:center;display:flex;justify-content:center;margin:5px;width:70px}.ath-banner-cell-2x{width:120px}.log-target{overflow-wrap:break-word}.banner-top-left{left:0;top:0}.banner-top-right{right:0;top:0}.banner-bottom-left{bottom:0;left:0}.banner-bottom-right{bottom:0;right:0}.banner-center{left:25%;top:25%}.banner-center-left{left:0;top:25%}.banner-center-right{right:0;top:25%}.banner-top-center{left:25%;top:12px;width:50%}.banner-bottom-center{bottom:12px}.ath-guidance img{bottom:0}@media (min-width: 576px){.banner-dialog-centered{min-height:calc(100% - 3.5rem)}.ath-banner-cell{margin:3px;width:90px}}@media (min-width: 768px){.ath-banner-title{width:calc(100% - 360px)}.ath-banner-cell-2x,.ath-banner-cell{width:120px}.ath-banner-cell-2x{width:160px}}@media (min-width: 992px){.banner-lg{width:50%}.banner-lg-top-center{left:25%;top:12px}.banner-lg-bottom-center{bottom:12px;left:25%}.banner-bottom-center{left:20%;width:60%}.ath-container img{left:15%}}.edge-wrapper,.firefox-wrapper,.samsung-wrapper,.opera-home-screen-wrapper{opacity:1}.firefox-wrapper,.samsung-wrapper,.opera-home-screen-wrapper{bottom:21px}.opera-home-screen-wrapper{left:auto;max-width:483px;right:6px;width:100%}.ipad-wrapper img{top:0}.animated.delay-7s{animation-delay:7s}.overlay-1{z-index:2020}.overlay-2{z-index:2040}.overlay{bottom:0;height:100%;left:0;opacity:0;position:absolute;right:0;top:0;transition:.3s ease;width:100%}.ath-container p{font-size:1.1em;margin:0;padding:0;position:relative;text-shadow:0 0.1em 0 #ffffff;z-index:2147483642}.d-none{display:none !important}.d-block{display:block !important}.d-flex{display:-ms-flexbox !important;display:flex !important}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=(s=o,r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var s,r,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var a=[].concat(e[o]);n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a)}},t}}])}));