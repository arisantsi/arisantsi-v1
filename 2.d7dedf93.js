/*! For license information please see 2.d7dedf93.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{102:function(e,t,n){"use strict";var a=n(0),r=n(134);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},104:function(e,t,n){"use strict";var a=n(0),r=n(135);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},105:function(e,t,n){"use strict";var a=n(0);t.a=function(e=!0){Object(a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[n,c]=Object(a.useState)(t);return Object(a.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){c(t())}}),[]),n}},107:function(e,t,n){"use strict";var a=n(98),r=n(102),c=n(101),o=n(121);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}={}}={}}=Object(a.a)(),{isDarkTheme:t}=Object(r.a)(),n=Object(c.a)(e.href||"/");let s={};e.target?s={target:e.target}:Object(o.a)(n)||(s={rel:"noopener noreferrer",target:"_blank"});const i=e.srcDark&&t?e.srcDark:e.src;return{logoLink:n,logoLinkProps:s,logoImageUrl:Object(c.a)(i),logoAlt:e.alt}}},108:function(e,t,n){"use strict";var a=n(2),r=n(0),c=n.n(r),o=n(99),s=n(119),i=n(98),l=n(101),u=n(8);const d="light",f="dark",h=e=>e===f?f:d,m=()=>u.a.canUseDOM?h(document.documentElement.getAttribute("data-theme")):d,v=e=>{try{localStorage.setItem("theme",h(e))}catch(t){console.error(t)}};var p=()=>{const{siteConfig:{themeConfig:{colorMode:{disableSwitch:e=!1}={}}={}}={}}=Object(i.a)(),[t,n]=Object(r.useState)(m),a=Object(r.useCallback)((()=>{n(d),v(d)}),[]),c=Object(r.useCallback)((()=>{n(f),v(f)}),[]);return Object(r.useEffect)((()=>{document.documentElement.setAttribute("data-theme",h(t))}),[t]),Object(r.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(h(e))}catch(t){console.error(t)}}),[n]),Object(r.useEffect)((()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{n(e?f:d)}))}),[]),{isDarkTheme:t===f,setLightTheme:a,setDarkTheme:c}},b=n(134);var g=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=p();return c.a.createElement(b.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)};const k="docusaurus.tab.";var E=()=>{const[e,t]=Object(r.useState)({}),n=Object(r.useCallback)(((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith(k)){e[n.substring(k.length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}};const O="docusaurus.announcement.dismiss",y="docusaurus.announcement.id";var w=()=>{const{announcementBar:e}=Object(i.a)().siteConfig.themeConfig,[t,n]=Object(r.useState)(!0),a=Object(r.useCallback)((()=>{localStorage.setItem(O,"true"),n(!0)}),[]);return Object(r.useEffect)((()=>{if(!e)return;const{id:t}=e;let a=localStorage.getItem(y);"annoucement-bar"===a&&(a="announcement-bar");const r=t!==a;localStorage.setItem(y,t),r&&localStorage.setItem(O,"false"),(r||"false"===localStorage.getItem(O))&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:a}},j=n(135);var C=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=E(),{isAnnouncementBarClosed:a,closeAnnouncementBar:r}=w();return c.a.createElement(j.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:a,closeAnnouncementBar:r}},e.children)},_=n(109),S=n(113),T=n(112);n(69);function N({children:e}){return c.a.createElement(g,null,c.a.createElement(C,null,e))}t.a=function(e){const{siteConfig:t}=Object(i.a)(),{favicon:n,title:r,themeConfig:{image:u,metadatas:d},url:f,titleDelimiter:h}=t,{children:m,title:v,noFooter:p,description:b,image:g,keywords:k,permalink:E,wrapperClassName:O}=e,y=v?`${v} ${h} ${r}`:r,w=g||u,j=Object(l.a)(w,{absolute:!0}),C=Object(l.a)(n);return c.a.createElement(N,null,c.a.createElement(s.a,null,c.a.createElement("html",{lang:"en"}),y&&c.a.createElement("title",null,y),y&&c.a.createElement("meta",{property:"og:title",content:y}),n&&c.a.createElement("link",{rel:"shortcut icon",href:C}),b&&c.a.createElement("meta",{name:"description",content:b}),b&&c.a.createElement("meta",{property:"og:description",content:b}),k&&k.length&&c.a.createElement("meta",{name:"keywords",content:k.join(",")}),w&&c.a.createElement("meta",{property:"og:image",content:j}),w&&c.a.createElement("meta",{property:"twitter:image",content:j}),w&&c.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),E&&c.a.createElement("meta",{property:"og:url",content:f+E}),E&&c.a.createElement("link",{rel:"canonical",href:f+E}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),c.a.createElement(s.a,null,d.map(((e,t)=>c.a.createElement("meta",Object(a.a)({key:"metadata_"+t},e))))),c.a.createElement(_.a,null),c.a.createElement(S.a,null),c.a.createElement("div",{className:Object(o.a)("main-wrapper",O)},m),!p&&c.a.createElement(T.a,null))}},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),s=f(n(136)),i=f(n(7)),l=f(n(148)),u=f(n(149)),d=n(150);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(l.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),c=n(131);const o={default:()=>c.a,docsVersion:()=>n(151).default,docsVersionDropdown:()=>n(155).default};function s({type:e,...t}){const n=((e="default")=>{const t=o[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return r.a.createElement(n,t)}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=()=>null},115:function(e,t,n){"use strict";var a=n(0),r=n(122);var c=function(e){const[t,n]=Object(a.useState)(e);return Object(a.useEffect)((()=>{const e=()=>n(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)}),[]),[t,n]},o=n(137);t.a=e=>{const[t,n]=Object(a.useState)(!0),[s,i]=Object(a.useState)(!1),[l,u]=Object(a.useState)(0),[d,f]=Object(a.useState)(0),h=Object(a.useCallback)((e=>{null!==e&&f(e.getBoundingClientRect().height)}),[]),m=Object(r.useLocation)(),[v,p]=c(m.hash);return Object(o.a)((({scrollY:t})=>{if(!e)return;if(0===t&&n(!0),t<d)return;if(s)return i(!1),n(!1),void u(t);const a=document.documentElement.scrollHeight-d,r=window.innerHeight;l&&t>=l?n(!1):t+r<a&&n(!0),u(t)}),[l,d]),Object(a.useEffect)((()=>{e&&(n(!0),p(m.hash))}),[m]),Object(a.useEffect)((()=>{e&&v&&i(!0)}),[v]),{navbarRef:h,isNavbarVisible:t}}},131:function(e,t,n){"use strict";var a,r=n(2),c=n(0),o=n.n(c),s=n(99),i=n(100),l=n(101);var u=function(){if(void 0!==a)return a;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),a=e,e},d=c.useLayoutEffect,f=function(e){var t=Object(c.useRef)(e);return d((function(){t.current=e})),t},h="touchstart",m=["mousedown",h],v=function(e){if(e===h)return u()?{passive:!0}:void 0};var p=function(e,t){var n=f(t);Object(c.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return m.forEach((function(e){document.addEventListener(e,a,v(e))})),function(){m.forEach((function(e){document.removeEventListener(e,a,v(e))}))}}}),[!t])};function b({activeBasePath:e,activeBaseRegex:t,to:n,href:a,label:c,activeClassName:s="navbar__link--active",prependBaseUrlToHref:u,...d}){const f=Object(l.a)(n),h=Object(l.a)(e),m=Object(l.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(r.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:u?m:a}:{isNavLink:!0,activeClassName:s,to:f,...e||t?{isActive:(e,n)=>t?new RegExp(t).test(n.pathname):n.pathname.startsWith(h)}:null},d),c)}function g({items:e,position:t,className:n,...a}){const i=o.a.useRef(null),l=o.a.useRef(null),[u,d]=Object(c.useState)(!1);function f(e){if(e){var t,n;const e=null==l||null===(t=l.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;e&&e.focus()}d(e)}p(i,(()=>f(!1)));const h=(e,t=!1)=>Object(s.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?o.a.createElement("div",{ref:i,className:Object(s.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},o.a.createElement(b,Object(r.a)({className:h(n)},a,{onClick:a.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{("Enter"===e.key&&!a.to||"Tab"===e.key)&&(e.preventDefault(),f(!0))}}),a.label),o.a.createElement("ul",{ref:l,className:"dropdown__menu"},e.map((({className:t,...n},a)=>o.a.createElement("li",{key:a},o.a.createElement(b,Object(r.a)({onKeyDown:t=>{a===e.length-1&&"Tab"===t.key&&(t.preventDefault(),f(!1))},activeClassName:"dropdown__link--active",className:h(t,!0)},n))))))):o.a.createElement(b,Object(r.a)({className:h(n)},a))}function k({items:e,position:t,className:n,...a}){const c=(e,t=!1)=>Object(s.a)("menu__link",{"menu__link--sublist":t},e);return e?o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(b,Object(r.a)({className:c(n,!0)},a),a.label),o.a.createElement("ul",{className:"menu__list"},e.map((({className:e,...t},n)=>o.a.createElement("li",{className:"menu__list-item",key:n},o.a.createElement(b,Object(r.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:a.onClick}))))))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(b,Object(r.a)({className:c(n)},a)))}t.a=function({mobile:e=!1,...t}){const n=e?k:g;return o.a.createElement(n,t)}},134:function(e,t,n){"use strict";var a=n(0);const r=n.n(a).a.createContext(void 0);t.a=r},135:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},136:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},137:function(e,t,n){"use strict";var a=n(0),r=n(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[n,r]=Object(a.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(a.useEffect)((()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0}))),t),n}},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(2),r=n(0),c=n.n(r),o=n(131),s=n(123);function i({label:e,to:t,docsPluginId:n,...r}){const i=Object(s.useActiveVersion)(n),l=Object(s.useLatestVersion)(n),u=null!=i?i:l,d=null!=e?e:u.label,f=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(u).path;return c.a.createElement(o.a,Object(a.a)({},r,{label:d,to:f}))}},155:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(2),r=n(0),c=n.n(r),o=n(131),s=n(123);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function l({mobile:e,docsPluginId:t,...n}){var r;const l=Object(s.useActiveDocContext)(t),u=Object(s.useVersions)(t),d=Object(s.useLatestVersion)(t);const f=null!==(r=l.activeVersion)&&void 0!==r?r:d,h=e?"Versions":f.label,m=e?void 0:i(f).path;return c.a.createElement(o.a,Object(a.a)({},n,{mobile:e,label:h,to:m,items:function(){if(!(u.length<=1))return u.map((e=>{const t=(null==l?void 0:l.alternateDocVersions[e.name])||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==l?void 0:l.activeVersion)}}))}()}))}}}]);