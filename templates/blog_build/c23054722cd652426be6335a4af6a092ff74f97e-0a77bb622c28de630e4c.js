/*! For license information please see c23054722cd652426be6335a4af6a092ff74f97e-0a77bb622c28de630e4c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"29s/":function(t,n,e){var r=e("WEpk"),o=e("5T2Y"),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return a[t]||(a[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("uOPS")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(t,n,e){var r=e("eaoh");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"2faE":function(t,n,e){var r=e("5K7Z"),o=e("eUtF"),a=e("G8Mo"),i=Object.defineProperty;n.f=e("jmDH")?Object.defineProperty:function(t,n,e){if(r(t),n=a(n,!0),r(e),o)try{return i(t,n,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},"4AcO":function(t,n,e){},"5K7Z":function(t,n,e){var r=e("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"5vMV":function(t,n,e){var r=e("B+OT"),o=e("NsO/"),a=e("W070")(!1),i=e("VVlx")("IE_PROTO");t.exports=function(t,n){var e,u=o(t),c=0,s=[];for(e in u)e!=i&&r(u,e)&&s.push(e);for(;n.length>c;)r(u,e=n[c++])&&(~a(s,e)||s.push(e));return s}},"93I4":function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},"B+OT":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},Cg5c:function(t,n,e){"use strict";var r=e("VbXa"),o=e.n(r),a=e("q1tI"),i=e.n(a),u=e("TSYQ"),c=e.n(u),s=(e("WryT"),function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.children,e=t.cover,r=c()("main-header",this.props.className,{"no-cover":!e});return i.a.createElement("header",{className:r,style:e?{backgroundImage:'url("'+e+'")'}:null},n)},n}(i.a.Component));n.a=s},D8kY:function(t,n,e){var r=e("Ojgd"),o=Math.max,a=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):a(t,n)}},"E+KP":function(t,n,e){"use strict";var r=e("VbXa"),o=e.n(r),a=e("q1tI"),i=e.n(a),u=e("Wbzz"),c=(e("FalR"),function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.logo,e=t.url,r=t.title;return n?i.a.createElement(u.Link,{className:"blog-logo",to:e||"/"},i.a.createElement("img",{src:n,alt:r})):null},n}(a.Component));n.a=c},FalR:function(t,n,e){},FpHa:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(t,n,e){var r=e("93I4");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Hsns:function(t,n,e){var r=e("93I4"),o=e("5T2Y").document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},IMsF:function(t,n,e){"use strict";var r=e("VbXa"),o=e.n(r),a=e("q1tI"),i=e.n(a),u=e("TSYQ"),c=e.n(u),s=(e("abWc"),function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.children,e=t.className,r=c()("main-nav",["overlay","clearfix"],e);return i.a.createElement("nav",{className:r},n)},n}(i.a.Component));n.a=s},JB68:function(t,n,e){var r=e("Jes0");t.exports=function(t){return Object(r(t))}},Jes0:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},KUxP:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},KcPW:function(t,n,e){"use strict";var r=e("VbXa"),o=e.n(r),a=e("8OQS"),i=e.n(a),u=(e("UsjJ"),e("LJRI"),e("q1tI")),c=e.n(u),s=e("Wbzz");var f=function(t){var n=[{primaryText:"Home",component:s.Link,to:"/"},{divider:!0}];return t.userLinks&&t.userLinks.forEach((function(t){n.push({primaryText:t.label,component:"a",href:t.url})})),n.push({divider:!0}),n.push({primaryText:"About",component:s.Link,to:"/about/"}),n.push({primaryText:"Datenschutz",component:s.Link,to:"/datenschutz/"}),n},p=(e("dVLL"),e("d5RR"),function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props.url;return t?c.a.createElement("a",{className:"subscribe-button icon-feed",href:t},"Subscribe"):null},n}(c.a.Component)),l=function(){return null},m=function(t){var n=t.primaryText;return c.a.createElement("h3",null,n)},v=function(t){var n=t.primaryText,e=t.component,r=i()(t,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(u.createElement)(e,r,n))},h=function t(n,e){if("string"==typeof n||"number"==typeof n)return Object(u.createElement)(v,{key:n,primaryText:n});if(Object(u.isValidElement)(n))return n;var r,o=n.divider,a=n.subheader,c=n.nestedItems,s=i()(n,["divider","subheader","nestedItems"]);r=o?l:a?m:v;var f=Object.assign({},s,{key:n.key||e});return c&&(f.nestedItems=c.map(t)),Object(u.createElement)(r,f)},y=function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.config,e=t.onClose,r=f(n);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:e},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,r.map(h)),c.a.createElement(p,{url:n.siteRss})),c.a.createElement("span",{className:"nav-cover"}))},n}(u.Component);n.a=y},M1xp:function(t,n,e){var r=e("a0xu");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},NV0k:function(t,n){n.f={}.propertyIsEnumerable},NegM:function(t,n,e){var r=e("2faE"),o=e("rr1i");t.exports=e("jmDH")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},"NsO/":function(t,n,e){var r=e("M1xp"),o=e("Jes0");t.exports=function(t){return r(o(t))}},O6Ey:function(t,n,e){},Ojgd:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},P2sY:function(t,n,e){t.exports={default:e("UbbE"),__esModule:!0}},QbLZ:function(t,n,e){"use strict";n.__esModule=!0;var r,o=e("P2sY"),a=(r=o)&&r.__esModule?r:{default:r};n.default=a.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},TSYQ:function(t,n,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&t.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var u in r)e.call(r,u)&&r[u]&&t.push(u);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(t.exports=r)}()},UbbE:function(t,n,e){e("o8NH"),t.exports=e("WEpk").Object.assign},VVlx:function(t,n,e){var r=e("29s/")("keys"),o=e("YqAc");t.exports=function(t){return r[t]||(r[t]=o(t))}},W070:function(t,n,e){var r=e("NsO/"),o=e("tEej"),a=e("D8kY");t.exports=function(t){return function(n,e,i){var u,c=r(n),s=o(c.length),f=a(i,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},WEpk:function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},WryT:function(t,n,e){},Y7ZC:function(t,n,e){var r=e("5T2Y"),o=e("WEpk"),a=e("2GTP"),i=e("NegM"),u=e("B+OT"),c=function(t,n,e){var s,f,p,l=t&c.F,m=t&c.G,v=t&c.S,h=t&c.P,y=t&c.B,d=t&c.W,b=m?o:o[n]||(o[n]={}),x=b.prototype,E=m?r:v?r[n]:(r[n]||{}).prototype;for(s in m&&(e=n),e)(f=!l&&E&&void 0!==E[s])&&u(b,s)||(p=f?E[s]:e[s],b[s]=m&&"function"!=typeof E[s]?e[s]:y&&f?a(p,r):d&&E[s]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(p):h&&"function"==typeof p?a(Function.call,p):p,h&&((b.virtual||(b.virtual={}))[s]=p,t&c.R&&x&&!x[s]&&i(x,s,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},YqAc:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},a0xu:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},abWc:function(t,n,e){},d5RR:function(t,n,e){},dVLL:function(t,n,e){},eUtF:function(t,n,e){t.exports=!e("jmDH")&&!e("KUxP")((function(){return 7!=Object.defineProperty(e("Hsns")("div"),"a",{get:function(){return 7}}).a}))},eaoh:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},jdfF:function(t,n,e){},jmDH:function(t,n,e){t.exports=!e("KUxP")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},kwZ1:function(t,n,e){"use strict";var r=e("jmDH"),o=e("w6GO"),a=e("mqlF"),i=e("NV0k"),u=e("JB68"),c=e("M1xp"),s=Object.assign;t.exports=!s||e("KUxP")((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=r}))?function(t,n){for(var e=u(t),s=arguments.length,f=1,p=a.f,l=i.f;s>f;)for(var m,v=c(arguments[f++]),h=p?o(v).concat(p(v)):o(v),y=h.length,d=0;y>d;)m=h[d++],r&&!l.call(v,m)||(e[m]=v[m]);return e}:s},mqlF:function(t,n){n.f=Object.getOwnPropertySymbols},o8NH:function(t,n,e){var r=e("Y7ZC");r(r.S+r.F,"Object",{assign:e("kwZ1")})},"q/SA":function(t,n,e){"use strict";var r=e("VbXa"),o=e.n(r),a=e("q1tI"),i=e.n(a),u=(e("jdfF"),function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.navigation,e=t.onClick;return n&&e?i.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:e},i.a.createElement("span",{className:"word"},"Menu")):null},n}(a.Component));n.a=u},rr1i:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},rrFl:function(t,n,e){"use strict";var r=e("VbXa"),o=e.n(r),a=e("q1tI"),i=e.n(a),u=e("TSYQ"),c=e.n(u),s=(e("4AcO"),function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props,n=t.children,e=t.isOpen,r=t.className,o=c()(r,e?"nav-opened":"nav-closed");return i.a.createElement("div",{className:o},n)},n}(i.a.Component));n.a=s},s4cb:function(t,n,e){"use strict";var r=e("VbXa"),o=e.n(r),a=e("q1tI"),i=e.n(a),u=(e("v+pe"),function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=function(t){return t.show?i.a.createElement("section",{className:"poweredby"},"Proudly published with ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},n=this.props.promoteGatsby,e=this.props.copyright,r=e.label,o=e.url,a=e.year;return i.a.createElement("footer",{className:"site-footer clearfix"},i.a.createElement("section",{className:"copyright"},i.a.createElement("a",{href:o||"/"},r)," ©"," ",a||(new Date).getFullYear()),i.a.createElement(t,{show:n}))},n}(a.Component));n.a=u},tEej:function(t,n,e){var r=e("Ojgd"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},uOPS:function(t,n){t.exports=!0},"v+pe":function(t,n,e){},w6GO:function(t,n,e){var r=e("5vMV"),o=e("FpHa");t.exports=Object.keys||function(t){return r(t,o)}},xBKb:function(t,n,e){"use strict";var r=e("VbXa"),o=e.n(r),a=e("q1tI"),i=e.n(a),u=(e("O6Ey"),function(t){function n(){return t.apply(this,arguments)||this}return o()(n,t),n.prototype.render=function(){var t=this.props.children;return i.a.createElement("div",{className:"site-wrapper"},t)},n}(i.a.Component));n.a=u}}]);
//# sourceMappingURL=c23054722cd652426be6335a4af6a092ff74f97e-0a77bb622c28de630e4c.js.map