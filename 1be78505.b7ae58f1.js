(window.webpackJsonp=window.webpackJsonp||[]).push([[11,36],{109:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(99),o=a(98),c=a(104),s=a(48),i=a.n(s);t.a=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}={}}={}}=Object(o.a)(),{content:t,backgroundColor:a,textColor:n,isCloseable:s}=e,{isAnnouncementBarClosed:m,closeAnnouncementBar:u}=Object(c.a)();return!t||s&&m?null:r.a.createElement("div",{className:i.a.announcementBar,style:{backgroundColor:a,color:n},role:"banner"},r.a.createElement("div",{className:Object(l.a)(i.a.announcementBarContent,{[i.a.announcementBarCloseable]:s}),dangerouslySetInnerHTML:{__html:t}}),s?r.a.createElement("button",{type:"button",className:i.a.announcementBarClose,onClick:u,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)}},112:function(e,t,a){"use strict";a(2);var n=a(0),r=a.n(n),l=a(99),o=(a(100),a(98)),c=a(101);a(51);t.a=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:s,links:i=[],logo:m={}}=n||{};return Object(c.a)(m.src),n?r.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===n.style})}):null}},113:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),o=a(99),c=a(100),s=a(98),i=a(114),m=a(110),u=a.n(m),d=a(49),p=a.n(d);const b=({icon:e,style:t})=>l.a.createElement("span",{className:Object(o.a)(p.a.toggle,p.a.dark),style:t},e),h=({icon:e,style:t})=>l.a.createElement("span",{className:Object(o.a)(p.a.toggle,p.a.light),style:t},e);var g=function(e){const{siteConfig:{themeConfig:{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:r,lightIconStyle:o}}}},isClient:c}=Object(s.a)();return l.a.createElement(u.a,Object(n.a)({disabled:!c,icons:{checked:l.a.createElement(b,{icon:t,style:a}),unchecked:l.a.createElement(h,{icon:r,style:o})}},e))},y=a(102),f=a(115),v=a(105),k=a(106),E=a(107),j=a(50),O=a.n(j),C=a(111);const N="right";t.a=function(){const{siteConfig:{themeConfig:{navbar:{title:e="",items:t=[],hideOnScroll:a=!1,style:m}={},colorMode:{disableSwitch:u=!1}={}}},isClient:d}=Object(s.a)(),[p,b]=Object(r.useState)(!1),[h,j]=Object(r.useState)(!1),{isDarkTheme:_,setLightTheme:w,setDarkTheme:x}=Object(y.a)(),{navbarRef:L,isNavbarVisible:I}=Object(f.a)(a),{logoLink:S,logoLinkProps:B,logoImageUrl:T,logoAlt:P}=Object(E.a)();Object(v.a)(p);const M=Object(r.useCallback)((()=>{b(!0)}),[b]),D=Object(r.useCallback)((()=>{b(!1)}),[b]),A=Object(r.useCallback)((e=>e.target.checked?x():w()),[w,x]),R=Object(k.a)();Object(r.useEffect)((()=>{R===k.b.desktop&&b(!1)}),[R]);const{leftItems:$,rightItems:W}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:N)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:N)}))}}(t);return l.a.createElement("nav",{ref:L,className:Object(o.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===m,"navbar--primary":"primary"===m,"navbar-sidebar--show":p,[O.a.navbarHideable]:a,[O.a.navbarHidden]:!I})},l.a.createElement("div",{className:"navbar__inner",style:{paddingLeft:"5%",paddingRight:"5%"}},l.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(c.a,Object(n.a)({className:"navbar__brand",to:S},B),null!=e&&l.a.createElement("strong",{className:Object(o.a)("navbar__title",{[O.a.hideLogoText]:h})},e)),$.map(((e,t)=>l.a.createElement(C.a,Object(n.a)({},e,{key:t}))))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},W.map(((e,t)=>l.a.createElement(C.a,Object(n.a)({},e,{key:t})))),!u&&l.a.createElement(g,{className:O.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:_,onChange:A}),l.a.createElement(i.a,{handleSearchBarToggle:j,isSearchBarExpanded:h}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(c.a,Object(n.a)({className:"navbar__brand",onClick:D,to:S},B),null!=e&&l.a.createElement("strong",{className:"navbar__title"},e)),!u&&p&&l.a.createElement(g,{"aria-label":"Dark mode toggle in sidebar",checked:_,onChange:A})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},t.map(((e,t)=>l.a.createElement(C.a,Object(n.a)({mobile:!0},e,{onClick:D,key:t})))))))))}},116:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},117:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var l=[],o=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=o);for(var c=a;c!=r;c+=o)l.push(c);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},118:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),o=a(100),c=a(99),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(20).a,theme:s};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},b=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function g(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var y=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},c=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=u({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,c=[],s=[c];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,m=t[o],u=a[o][l];if("string"==typeof u?(m=o>0?m:["plain"],i=u):(m=b(m,u.type),u.alias&&(m=b(m,u.alias)),i=u.content),"string"==typeof i){var h=i.split(d),g=h.length;c.push({types:m,content:h[0]});for(var y=1;y<g;y++)p(c),s.push(c=[]),c.push({types:m,content:h[y]})}else o++,t.push(m),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return p(c),s}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),f=a(116),v=a.n(f),k=a(117),E=a.n(k),j=a(98),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},C=a(102);var N=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(j.a)(),{isDarkTheme:t}=Object(C.a)(),a=e.theme||O,n=e.darkTheme||a;return t?n:a},_=a(56),w=a.n(_);const x=/{([\d,-]+)}/,L=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},I=/title=".*"/;var S=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(j.a)(),[s,m]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d(!0)}),[]);const p=Object(r.useRef)(null);let b=[],h="";const g=N();if(a&&x.test(a)){const e=a.match(x)[1];b=E.a.parse(e).filter((e=>e>0))}a&&I.test(a)&&(h=a.match(I)[0].split("title=")[1].replace(/"+/g,""));let f=t&&t.replace(/language-/,"");!f&&o.defaultLanguage&&(f=o.defaultLanguage);let k=e.replace(/\n$/,"");if(0===b.length&&void 0!==f){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return L(["js","jsBlock"]);case"jsx":case"tsx":return L(["js","jsBlock","jsx"]);case"html":return L(["js","jsBlock","html"]);case"python":case"py":return L(["python"]);default:return L()}})(f),n=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<n.length;){const l=e+1,o=n[e].match(a);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=l+",";break;case"highlight-start":r=l;break;case"highlight-end":t+=`${r}-${l-1},`}n.splice(e,1)}else e+=1}b=E.a.parse(t),k=n.join("\n")}const O=()=>{v()(k),m(!0),setTimeout((()=>m(!1)),2e3)};return l.a.createElement(y,Object(n.a)({},i,{key:String(u),theme:g,code:k,language:f}),(({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:o})=>l.a.createElement(l.a.Fragment,null,h&&l.a.createElement("div",{style:t,className:w.a.codeBlockTitle},h),l.a.createElement("div",{className:w.a.codeBlockContent},l.a.createElement("button",{ref:p,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(w.a.copyButton,{[w.a.copyButtonWithTitle]:h}),onClick:O},s?"Copied":"Copy"),l.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,w.a.codeBlock,{[w.a.codeBlockWithTitle]:h})},l.a.createElement("div",{className:w.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=r({line:e,key:t});return b.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t}))))))}))))))))},B=(a(57),a(58)),T=a.n(B);var P=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(j.a)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",{[T.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},M=a(59),D=a.n(M);const A={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(S,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(o.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:D.a.mdxCodeBlock},e)),h1:P("h1"),h2:P("h2"),h3:P("h3"),h4:P("h4"),h5:P("h5"),h6:P("h6")};t.a=A},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(108);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(103),o=a(98),c=a(24),s=a(108),i=a(2),m=a(99),u=a(104),d=a(105),p=a(106),b=a(107),h=a(137),g=a(100),y=a(121),f=a(76),v=a.n(f);const k=(e,t)=>"link"===e.type?((e,t)=>{const a=e=>e.endsWith("/")?e:e+"/";return a(e)===a(t)})(e.href,t):"category"===e.type&&e.items.some((e=>k(e,t)));function E({item:e,onItemClick:t,collapsible:a,activePath:l,...o}){const{items:c,label:s}=e,u=k(e,l),d=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(u),[p,b]=Object(n.useState)((()=>!!a&&(!u&&e.collapsed)));Object(n.useEffect)((()=>{u&&!d&&p&&b(!1)}),[u,d,p]);const h=Object(n.useCallback)((e=>{e.preventDefault(),b((e=>!e))}),[b]);return 0===c.length?null:r.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":p}),key:s},r.a.createElement("a",Object(i.a)({className:Object(m.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&u,[v.a.menuLinkText]:!a}),onClick:a?h:void 0,href:a?"#!":void 0},o),s),r.a.createElement("ul",{className:"menu__list"},c.map((e=>r.a.createElement(O,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:l})))))}function j({item:e,onItemClick:t,activePath:a,collapsible:n,...l}){const{href:o,label:c}=e,s=k(e,a);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(g.a,Object(i.a)({className:Object(m.a)("menu__link",{"menu__link--active":s}),to:o},Object(y.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),c))}function O(e){switch(e.item.type){case"category":return r.a.createElement(E,e);case"link":default:return r.a.createElement(j,e)}}var C=function({path:e,sidebar:t,sidebarCollapsible:a=!0}){const[l,c]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:s="",hideOnScroll:y=!1}={}}={}}={},isClient:f}=Object(o.a)(),{logoLink:k,logoLinkProps:E,logoImageUrl:j,logoAlt:C}=Object(b.a)(),{isAnnouncementBarClosed:N}=Object(u.a)(),{scrollY:_}=Object(h.a)();Object(d.a)(l);const w=Object(p.a)();return Object(n.useEffect)((()=>{w===p.b.desktop&&c(!1)}),[w]),r.a.createElement("div",{className:Object(m.a)(v.a.sidebar,{[v.a.sidebarWithHideableNavbar]:y})},y&&r.a.createElement(g.a,Object(i.a)({tabIndex:-1,className:v.a.sidebarLogo,to:k},E),null!=j&&r.a.createElement("img",{key:f,src:j,alt:C}),null!=s&&r.a.createElement("strong",null,s)),r.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",v.a.menu,{"menu--show":l,[v.a.menuWithAnnouncementBar]:!N&&0===_})},r.a.createElement("button",{"aria-label":l?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{c(!l)}},l?r.a.createElement("span",{className:Object(m.a)(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(O,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),c(!1)},collapsible:a,activePath:e}))))))},N=a(118),_=a(133),w=a(122),x=a(119),L=a(77),I=a.n(L);function S({version:e,isLast:t}){const a=t?[e,"latest"]:[e];return r.a.createElement(x.a,null,r.a.createElement("meta",{name:"docsearch:version",content:a.join(",")}))}function B({currentDocRoute:e,versionMetadata:t,children:a}){var n,c;const{siteConfig:i,isClient:m}=Object(o.a)(),{permalinkToSidebar:u,docsSidebars:d,version:p,isLast:b}=t,h=u[e.path],g=d[h];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{version:p,isLast:b}),r.a.createElement(s.a,{key:m},r.a.createElement("div",{className:I.a.docPage},g&&r.a.createElement("div",{className:I.a.docSidebarContainer,role:"complementary"},r.a.createElement(C,{key:h,sidebar:g,path:e.path,sidebarCollapsible:null===(n=null===(c=i.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===n||n})),r.a.createElement("main",{className:I.a.docMainContainer},r.a.createElement(l.a,{components:N.a},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>Object(w.matchPath)(n.pathname,e)));return l?r.a.createElement(B,{currentDocRoute:l,versionMetadata:a},Object(c.a)(t)):r.a.createElement(_.default,e)}}}]);