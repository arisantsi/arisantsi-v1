(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{66:function(a,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"RandomPickerChoice",(function(){return d})),n.d(t,"RandomPickerControls",(function(){return m})),n.d(t,"Kocok",(function(){return l})),n.d(t,"default",(function(){return k}));var e=n(2),i=n(6),r=n(0),o=n(87),c={slug:"arisan-putaran-pertama",title:"Arisan Putaran Pertama",author_url:"https://www.instagram.com/anisfikriyyah/",tags:["arisan","mamah","bunda","tsi"]},s={permalink:"/blog/arisan-putaran-pertama",source:"@site/blog/2021-01-30-arisan-1.mdx",description:"Siapa yah kira-kira?",date:"2021-01-30T00:00:00.000Z",tags:[{label:"arisan",permalink:"/blog/tags/arisan"},{label:"mamah",permalink:"/blog/tags/mamah"},{label:"bunda",permalink:"/blog/tags/bunda"},{label:"tsi",permalink:"/blog/tags/tsi"}],title:"Arisan Putaran Pertama",readingTime:2.07,truncated:!0},u=[{value:"Siapa yah kira-kira?",id:"siapa-yah-kira-kira",children:[]}],d=function(a){var t=a.choice,n=t.trim().length>0?t:"?";return Object(o.b)("div",{className:"RandomPicker__choice"},Object(o.b)("span",{className:"RandomPicker__choiceItem"},n))},m=function(a){var t=a.isRunning,n=a.hasChoice,e=a.start,i=a.stop,r=a.reset;return Object(o.b)("div",{className:"RandomPicker__controls"},Object(o.b)("button",{className:"RandomPicker__button "+(t&&"RandomPicker__button--stop"),onClick:t?i:e},t?"stop":"start"),Object(o.b)("button",{disabled:t||!n,className:"RandomPicker__button RandomPicker__button--reset",onClick:r},"Ulangi"))},l=function(){var a=Object(r.useState)(null),t=a[0],n=a[1],e=Object(r.useState)(5),i=e[0],c=(e[1],Object(r.useState)(1e3)),s=(c[0],c[1],Object(r.useState)("")),u=s[0],l=s[1],b=Object(r.useState)(!1),k=b[0],p=b[1],h=Object(r.useState)(["Bunda Zezo","Bunda Nada","Bunda Gulshan (rani) E 16","Metta","Bunda Queela-Andin","Bunda Rayyan-eka","Intan C14","Oma C","Mama thalita B 27","Ibu Kiya(Enno) E6","Anis C10","Lina B14","Yustina B26","Nopita B13","Mama Usa \u201cdwi c13\u201d","Mama Mirza","Bunda Yudia B25","Mami Rauf C 1","Mama Rakha C11","Auliya B-12","Dian B15","Bunda Abi b29","Atiko(mama Rara) B21","Widya B11","Reni C9","Rika E-26","Suci - E25","Yunis - C12","Bunda Darren","Bunda Radit"]),g=h[0],R=(h[1],function(){l((function(a){return g[Math.floor(Math.random()*g.length)]}))});return Object(o.b)("div",null,Object(o.b)("div",{id:"random-picker"},Object(o.b)("div",{className:"RandomPicker"},Object(o.b)(d,{choice:u,mdxType:"RandomPickerChoice"}),Object(o.b)(m,{isRunning:k,hasChoice:u.trim().length>0,start:function(){var a=prompt("Paswordnya apa ibu?");"hariinimenang"===a||"tsikompak"===a?(p(!0),clearInterval(t),n(setInterval(R,i))):alert("password Salah!")},stop:function(){clearInterval(t),p(!1)},reset:function(){clearInterval(t),p(!1),l("")},mdxType:"RandomPickerControls"}))))},b={rightToc:u,RandomPickerChoice:d,RandomPickerControls:m,Kocok:l};function k(a){var t=a.components,n=Object(i.a)(a,["components"]);return Object(o.b)("wrapper",Object(e.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"siapa-yah-kira-kira"},"Siapa yah kira-kira?"),Object(o.b)(l,{mdxType:"Kocok"}))}k.isMDXComponent=!0}}]);