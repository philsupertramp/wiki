(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/PZL":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},"2Tzu":function(e,t,n){},"7FV1":function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n("q1tI"),u=(n("i8i4"),n("xFC4"),n("wT0s")),c=n("zPnG"),p=n("17x9"),f=n("Dy/p"),d={to:p.string.isRequired,containerId:p.string,container:p.object,activeClass:p.string,spy:p.bool,smooth:p.oneOfType([p.bool,p.string]),offset:p.number,delay:p.number,isDynamic:p.bool,onClick:p.func,duration:p.oneOfType([p.number,p.func]),absolute:p.bool,onSetActive:p.func,onSetInactive:p.func,ignoreCancelEvents:p.bool,hashSpy:p.bool},m={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||c,p=function(t){function c(e){a(this,c);var t=i(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return m.call(t),t.state={active:!1},t}return s(c,t),r(c,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();u.isMounted(e)||u.mount(e),this.props.hashSpy&&(f.isMounted()||f.mount(n),f.mapContainer(this.props.to,e)),this.props.spy&&u.addStateHandler(this.stateHandler),u.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){u.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in d)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,l.createElement(e,n)}}]),c}(l.Component),m=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!f.isMounted()||f.isInitialized()){var r=e.props.to,a=null,i=0,s=0,l=0;if(o.getBoundingClientRect)l=o.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(r)))return;var c=a.getBoundingClientRect();s=(i=c.top-l+t)+c.height}var p=t-e.props.offset,d=p>=Math.floor(i)&&p<Math.floor(s),m=p<Math.floor(i)||p>=Math.floor(s),h=n.getActiveLink();return m?(r===h&&n.setActiveLink(void 0),e.props.hashSpy&&f.getHash()===r&&f.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),u.updateStates()):d&&h!==r?(n.setActiveLink(r),e.props.hashSpy&&f.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),u.updateStates()):void 0}}};return p.propTypes=d,p.defaultProps={offset:0},p},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(e){c.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return t.propTypes={name:p.string,id:p.string},t}};e.exports=m},"7wkA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=i(n("q1tI")),a=i(n("pUFB"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),t}(r.default.Component);t.default=(0,a.default)(u)},"8QoP":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("QLqi"),r=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&r.forEach((function(t){return(0,o.addPassiveEventListener)(document,t,e)}))}}},"Dy/p":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("QLqi");var o,r=n("xFC4"),a=(o=r)&&o.__esModule?o:{default:o};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var o=this.containers[e]||document;n.scrollTo(e,{container:o})}},getHash:function(){return a.default.getHash()},changeHash:function(e,t){this.isInitialized()&&a.default.getHash()!==e&&a.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=i},FxiC:function(e,t,n){},I40e:function(e,t,n){},NEP4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(s(n("xFC4")),s(n("/PZL"))),a=s(n("8QoP")),i=s(n("QQPg"));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return r.default[e.smooth]||r.default.defaultEasing},u=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},c=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},p=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},f=function e(t,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var a=e.bind(null,t,n);u.call(window,a)}else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPosition);else i.default.registered.end&&i.default.registered.end(r.to,r.target,r.currentPositionY)},d=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},m=function(e,t,n,o){if(t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),a.default.subscribe((function(){t.data.cancel=!0})),d(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?c(t):p(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var r;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"==typeof(r=t.duration)?r:function(){return r})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=o;var s=l(t),m=f.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),u.call(window,m)}),t.delay):(i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),u.call(window,m))}else i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},h=function(e){return(e=o({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:m,getAnimationType:l,scrollToTop:function(e){m(0,h(e))},scrollToBottom:function(e){e=h(e),d(e),m(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,o=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(e),e)},scrollTo:function(e,t){m(e,h(t))},scrollMore:function(e,t){t=h(t),d(t);var n=t.horizontal?c(t):p(t);m(e+n,t)}}},PGca:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("q1tI")),r=a(n("pUFB"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,n,r;i(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(o.default.Component);t.default=(0,r.default)(l)},QLqi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,n,!!o&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},QQPg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={registered:{},scrollEvent:{register:function(e,t){o.registered[e]=t},remove:function(e){o.registered[e]=null}}};t.default=o},QweS:function(e,t,n){},Recq:function(e,t,n){"use strict";var o=n("VbXa"),r=n.n(o),a=n("q1tI"),i=n.n(a),s=(n("I40e"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.a.createElement("h1",{className:"page-title"},e):null},t}(i.a.Component));t.a=s},Y30y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=l(n("q1tI")),i=l(n("w2Tm")),s=l(n("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this,t=o({},this.props);return t.parentBindings&&delete t.parentBindings,a.default.createElement("div",o({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);p.propTypes={name:s.default.string,id:s.default.string},t.default=(0,i.default)(p)},gJIw:function(e,t,n){"use strict";var o=n("VbXa"),r=n.n(o),a=n("q1tI"),i=n.n(a),s=n("TSYQ"),l=n.n(s),u=(n("2Tzu"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=l()("content",this.props.className);return i.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(i.a.Component));t.a=u},gsHG:function(e,t,n){"use strict";var o=n("VbXa"),r=n.n(o),a=n("q1tI"),i=n.n(a),s=n("gJIw"),l=(n("UsjJ"),n("Wbzz")),u=(n("rVe6"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=Object.assign({},this.props);return delete t.style,delete t.className,delete t.text,delete t.url,i.a.createElement(l.Link,Object.assign({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(i.a.Component)),c=(n("iPNO"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,o=e.prev,r=e.next;return i.a.createElement("nav",{className:"pagination"},i.a.createElement(u,{className:"newer-posts",url:o,text:"← Newer Posts"}),i.a.createElement("span",{className:"page-number"},"Page ",t," of ",n),i.a.createElement(u,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(i.a.Component)),p=(n("QweS"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,o=e.prev,r=e.next,a=e.children,l="";return t>1&&(l+=" paged"),i.a.createElement(s.a,{className:l},i.a.createElement("div",{className:"extra-pagination inner"},i.a.createElement(c,{page:t,pages:n,prev:o,next:r})),a,i.a.createElement(c,{page:t,pages:n,prev:o,next:r}))},t}(i.a.Component));t.a=p},"hKI/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=s||l||Function("return this")(),c=Object.prototype.toString,p=Math.max,f=Math.min,d=function(){return u.Date.now()};function m(e,t,n){var o,r,a,i,s,l,u=0,c=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,a=r;return o=r=void 0,u=t,i=e.apply(a,n)}function b(e){return u=e,s=setTimeout(E,t),c?g(e):i}function w(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-u>=a}function E(){var e=d();if(w(e))return O(e);s=setTimeout(E,function(e){var n=t-(e-l);return m?f(n,a-(e-u)):n}(e))}function O(e){return s=void 0,v&&o?g(e):(o=r=void 0,i)}function P(){var e=d(),n=w(e);if(o=arguments,r=this,l=e,n){if(void 0===s)return b(l);if(m)return s=setTimeout(E,t),g(l)}return void 0===s&&(s=setTimeout(E,t)),i}return t=y(t)||0,h(n)&&(c=!!n.leading,a=(m="maxWait"in n)?p(y(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),P.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=l=r=s=void 0},P.flush=function(){return void 0===s?i:O(d())},P}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=r.test(e);return s||a.test(e)?i(e.slice(2),s?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})}}).call(this,n("yLpj"))},iPNO:function(e,t,n){},okzv:function(e,t,n){"use strict";var o=n("VbXa"),r=n.n(o),a=n("q1tI"),i=n.n(a),s=n("TJpk"),l=n.n(s),u=n("IpnI"),c=n.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,o,r=this.props,a=r.postNode,s=r.postPath,u=r.postSEO;if(u){var p=a.frontmatter;e=p.title,t=p.description?p.description:a.excerpt,n=p.cover,o=c.a.siteUrl+c.a.pathPrefix+s}else e=c.a.siteTitle,t=c.a.siteDescription,n=c.a.siteLogo;var f="/"===c.a.pathPrefix?"":c.a.pathPrefix;n=c.a.siteUrl+f+n;var d=c.a.siteUrl+c.a.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:""}];return u&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":o,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),i.a.createElement("meta",{property:"og:url",content:u?o:d}),u?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID?c.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:c.a.userTwitter?c.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:n}))},t}(a.Component);t.a=p},oqc9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Helpers=t.ScrollElement=t.ScrollLink=t.animateScroll=t.scrollSpy=t.Events=t.scroller=t.Element=t.Button=t.Link=void 0;var o=d(n("PGca")),r=d(n("7wkA")),a=d(n("Y30y")),i=d(n("zPnG")),s=d(n("QQPg")),l=d(n("wT0s")),u=d(n("NEP4")),c=d(n("pUFB")),p=d(n("w2Tm")),f=d(n("7FV1"));function d(e){return e&&e.__esModule?e:{default:e}}t.Link=o.default,t.Button=r.default,t.Element=a.default,t.scroller=i.default,t.Events=s.default,t.scrollSpy=l.default,t.animateScroll=u.default,t.ScrollLink=c.default,t.ScrollElement=p.default,t.Helpers=f.default,t.default={Link:o.default,Button:r.default,Element:a.default,scroller:i.default,Events:s.default,scrollSpy:l.default,animateScroll:u.default,ScrollLink:c.default,ScrollElement:p.default,Helpers:f.default}},pUFB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=c(n("q1tI")),i=c(n("wT0s")),s=c(n("zPnG")),l=c(n("17x9")),u=c(n("Dy/p"));function c(e){return e&&e.__esModule?e:{default:e}}var p={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool};t.default=function(e,t){var n=t||s.default,l=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return c.call(t),t.state={active:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),r(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();i.default.isMounted(e)||i.default.mount(e),this.props.hashSpy&&(u.default.isMounted()||u.default.mount(n),u.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in p)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,a.default.createElement(e,n)}}]),s}(a.default.PureComponent),c=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,o){var r=e.getScrollSpyContainer();if(!u.default.isMounted()||u.default.isInitialized()){var a=e.props.horizontal,i=e.props.to,s=null,l=void 0,c=void 0;if(a){var p=0,f=0,d=0;if(r.getBoundingClientRect)d=r.getBoundingClientRect().left;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var m=s.getBoundingClientRect();f=(p=m.left-d+t)+m.width}var h=t-e.props.offset;l=h>=Math.floor(p)&&h<Math.floor(f),c=h<Math.floor(p)||h>=Math.floor(f)}else{var y=0,v=0,g=0;if(r.getBoundingClientRect)g=r.getBoundingClientRect().top;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var b=s.getBoundingClientRect();v=(y=b.top-g+o)+b.height}var w=o-e.props.offset;l=w>=Math.floor(y)&&w<Math.floor(v),c=w<Math.floor(y)||w>=Math.floor(v)}var E=n.getActiveLink();if(c){if(i===E&&n.setActiveLink(void 0),e.props.hashSpy&&u.default.getHash()===i){var O=e.props.saveHashHistory,P=void 0!==O&&O;u.default.changeHash("",P)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(i,s))}if(l&&(E!==i||!1===e.state.active)){n.setActiveLink(i);var S=e.props.saveHashHistory,C=void 0!==S&&S;e.props.hashSpy&&u.default.changeHash(i,C),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i,s))}}}};return l.propTypes=p,l.defaultProps={offset:0},l}},pvmo:function(e,t,n){"use strict";var o=n("VbXa"),r=n.n(o),a=n("q1tI"),i=n.n(a),s=(n("FxiC"),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.a.createElement("h2",{className:"page-description"},e):null},t}(i.a.Component));t.a=s},rVe6:function(e,t,n){},w2Tm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=l(n("q1tI")),i=(l(n("i8i4")),l(n("zPnG"))),s=l(n("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:s.default.string,id:s.default.string},t}},wMyX:function(e,t,n){"use strict";n.r(t);var o=n("VbXa"),r=n.n(o),a=n("q1tI"),i=n.n(a),s=n("TJpk"),l=n.n(s),u=n("oqc9"),c=n("1wty"),p=n("okzv"),f=n("IpnI"),d=n.n(f),m=n("rrFl"),h=n("KcPW"),y=n("xBKb"),v=n("s4cb"),g=n("Cg5c"),b=n("IMsF"),w=n("E+KP"),E=n("Recq"),O=n("pvmo"),P=n("gsHG"),S=n("TwUq"),C=n("L12J"),_=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.nodes,n=e.page,o=e.pages,r=e.total,a=e.limit,s=e.prev,f=e.next,_=this.props.data.authors.edges;return i.a.createElement(C.a,{location:this.props.location},i.a.createElement(m.a,{className:"home-template",isOpen:this.state.menuOpen},i.a.createElement(l.a,{title:d.a.siteTitle}),i.a.createElement(p.a,{postEdges:t}),i.a.createElement(h.a,{config:d.a,onClose:this.handleOnClose}),i.a.createElement(y.a,null,i.a.createElement("div",{className:"home-template"},i.a.createElement(g.a,{cover:d.a.siteCover},i.a.createElement(b.a,{overlay:d.a.siteCover},i.a.createElement(w.a,{logo:d.a.siteLogo,title:d.a.siteTitle})),i.a.createElement("div",{className:"vertical"},i.a.createElement("div",{className:"main-header-content inner"},i.a.createElement(E.a,{text:d.a.siteTitle}),i.a.createElement(O.a,{text:d.a.siteDescription}),i.a.createElement(S.a,{urls:d.a.siteSocialUrls,color:"currentColor"}))),i.a.createElement(u.Link,{className:"scroll-down icon-arrow-left",to:"content","data-offset":"-45",spy:!0,smooth:!0,duration:500},i.a.createElement("span",{className:"hidden"},"Scroll Down"))),i.a.createElement(P.a,{page:n,pages:o,total:r,limit:a,prev:s,next:f},i.a.createElement(c.a,{postEdges:t,postAuthors:_}))),i.a.createElement(v.a,{copyright:d.a.copyright,promoteGatsby:d.a.promoteGatsby}))))},t}(i.a.Component);t.default=_},wT0s:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("hKI/"),a=(o=r)&&o.__esModule?o:{default:o},i=n("QLqi");var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e){if(e){var t=function(e){return(0,a.default)(e,66)}((function(t){s.scrollHandler(e)}));s.scrollSpyContainers.push(e),(0,i.addPassiveEventListener)(e,"scroll",t)}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(s.currentPositionX(e),s.currentPositionY(e))}))},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(s.currentPositionX(t),s.currentPositionY(t))},updateStates:function(){s.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){s.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(e){return s.scrollHandler(e)}))}};t.default=s},xFC4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,o=n?"#"+n:"",r=window&&window.location,a=o?r.pathname+r.search+o:r.pathname+r.search;t?history.pushState(null,"",a):history.replaceState(null,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,n){return n?e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft:e===document?t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset):"static"!==getComputedStyle(e).position?t.offsetTop:t.offsetTop-e.offsetTop}}},zPnG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=s(n("xFC4")),a=s(n("NEP4")),i=s(n("QQPg"));function s(e){return e&&e.__esModule?e:{default:e}}var l={},u=void 0;t.default={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return u=e},getActiveLink:function(){return u},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=o({},t,{absolute:!1})).containerId,l=t.container,u=void 0;u=s?document.getElementById(s):l&&l.nodeType?l:document,t.absolute=!0;var c=t.horizontal,p=r.default.scrollOffset(u,n,c)+(t.offset||0);if(!t.smooth)return i.default.registered.begin&&i.default.registered.begin(e,n),u===document?t.horizontal?window.scrollTo(p,0):window.scrollTo(0,p):u.scrollTop=p,void(i.default.registered.end&&i.default.registered.end(e,n));a.default.animateTopScroll(p,t,e,n)}else console.warn("target Element not found")}}}}]);
//# sourceMappingURL=component---src-templates-index-jsx-b499ea8c601b232390f7.js.map