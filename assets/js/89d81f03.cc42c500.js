(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[4087],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=l,g=d["".concat(o,".").concat(p)]||d[p]||m[p]||i;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7305:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return m}});var a=t(2122),l=t(9756),i=(t(7294),t(3905)),r=["components"],s={id:"bulma-css",title:"Bulma CSS",sidebar_label:"Bulma CSS"},o={unversionedId:"bulma-css",id:"bulma-css",isDocsHomePage:!1,title:"Bulma CSS",description:"Its a CSS framework",source:"@site/docs/bulma-css.md",sourceDirName:".",slug:"/bulma-css",permalink:"/docs/bulma-css",version:"current",sidebar_label:"Bulma CSS",frontMatter:{id:"bulma-css",title:"Bulma CSS",sidebar_label:"Bulma CSS"},sidebar:"someSidebar",previous:{title:"Flutter",permalink:"/docs/flutter-usefull-resources"},next:{title:"Learning german",permalink:"/docs/german-learne"}},c=[{value:"Debugging",id:"debugging",children:[]},{value:"Sizing",id:"sizing",children:[]},{value:"Collumns",id:"collumns",children:[]},{value:"Images",id:"images",children:[]},{value:"Media",id:"media",children:[]},{value:"Helpers",id:"helpers",children:[]},{value:"Helper CSS, not related to bulma",id:"helper-css-not-related-to-bulma",children:[]},{value:"Bulma docs",id:"bulma-docs",children:[]}],u={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Its a CSS framework "),(0,i.kt)("h3",{id:"debugging"},"Debugging"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"/*! debug.css | MIT License | zaydek.github.com/debug.css */\n*:not(path):not(g) {\n    color:                    hsla(210, 100%, 100%, 0.9) !important;\n    background:               hsla(210, 100%,  50%, 0.5) !important;\n    outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;\n    box-shadow: none !important;\n}\n")),(0,i.kt)("h3",{id:"sizing"},"Sizing"),(0,i.kt)("p",null,"as we have titles, we can change their sizer by: ",(0,i.kt)("inlineCode",{parentName:"p"},"is-size-x")," like follow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<h1 class="title is-size-4">Bulma?</h1>\n')),(0,i.kt)("h3",{id:"collumns"},"Collumns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"is-multiline ")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"is-0")," removes the gap over a grid"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"is-mobile")," keeps the size over mobile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="columns is-variable is-2">\n    <div class="column">\n        <figure class="image card">\n            <img src="images/blog-1.png">\n        </figure>\n    </div>\n    <div class="column">\n        <figure class="image card">\n            <img src="images/blog-2.png">\n        </figure>\n    </div>\n    <div class="column">\n        <figure class="image card">\n            <img src="images/blog-3.png">\n        </figure>\n    </div>\n</div>\n')),(0,i.kt)("p",null,"to center we can use a ",(0,i.kt)("a",{parentName:"p",href:"https://bulma.io/documentation/layout/level/"},"level")," with one element"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<figcaption class="level">\n    <small class="level-item">\n        The blog we\'ll build. Click to continue on Scrimba\n    </small>\n</figcaption>\n')),(0,i.kt)("h3",{id:"images"},"Images"),(0,i.kt)("p",null,"you can specify a size, so the browser knows how to preload them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<figure class="image is-128x128">\n    <img src="https://bulma.io/images/placeholders/128x128.png">\n</figure>\n')),(0,i.kt)("h3",{id:"media"},"Media"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<article class="media center">\n    <figure class="media-left">\n        <span class="image is-64x64">\n            <img src="images/me.jpg">\n        </span>\n    </figure>\n    <div class="media-content">\n        <div class="content">\n            <p>\n                <strong>Zaydek Michels-Gualtieri</strong> <a>@username_zaydek</a><br>\n                <span class="has-text-grey">Self-taught, inspired to learn<br>\n                <time datetime="2018-04-20">Apr 20</time> \xb7 20 min read</span>\n            </p>\n        </div>\n    </div>\n</article>\n')),(0,i.kt)("h3",{id:"helpers"},"Helpers"),(0,i.kt)("p",null,"to remove margins:\n",(0,i.kt)("inlineCode",{parentName:"p"},"is-marginless")," "),(0,i.kt)("p",null,"to remove paddings:\n",(0,i.kt)("inlineCode",{parentName:"p"},"is-paddingless")),(0,i.kt)("h3",{id:"helper-css-not-related-to-bulma"},"Helper CSS, not related to bulma"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".center, .center-column, .top, .right, .bottom, .left {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.center-column {\n    flex-direction: column;\n}\n\n.top    { align-items:     flex-start; }\n.right  { justify-content: flex-end;   }\n.bottom { align-items:     flex-end;   }\n.left   { justify-content: flex-start; }\n\n.single-spaced, .single-spaced * {\n    line-height: 1;\n}\n\n@media (max-width: 1024px) {\n    .desktop {\n        display: none;\n    }\n}\n")),(0,i.kt)("h3",{id:"bulma-docs"},"Bulma docs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n    hero:       https://bulma.io/documentation/layout/hero/\n    section:    https://bulma.io/documentation/layout/section/\n    image:      https://bulma.io/documentation/elements/image/\n    columns:    https://bulma.io/documentation/columns/basics/\n    media:      https://bulma.io/documentation/layout/media-object/\n    icon:       https://bulma.io/documentation/elements/icon/\n    breadcrumb: https://bulma.io/documentation/components/breadcrumb/\n    level:      https://bulma.io/documentation/layout/level/\n--\x3e\n\n\x3c!-- hero: https://bulma.io/documentation/layout/hero/ --\x3e\n<section class="hero">\n    <div class="hero-body">\n        \x3c!-- ... --\x3e\n    </div>\n</section>\n\n\x3c!-- section: https://bulma.io/documentation/layout/section/ --\x3e\n<section class="section">\n    <div class="container">\n        \x3c!-- ... --\x3e\n    </div>\n</section>\n\n\x3c!-- image: https://bulma.io/documentation/elements/image/ --\x3e\n<figure class="image is-128x128">\n    <img src="https://bulma.io/images/placeholders/128x128.png">\n</figure>\n\n\x3c!-- columns: https://bulma.io/documentation/columns/basics/ --\x3e\n<div class="columns">\n    <div class="column">\n        \x3c!-- ... --\x3e\n    </div>\n</div>\n\n\x3c!-- media: https://bulma.io/documentation/layout/media-object/ --\x3e\n<article class="media">\n    <figure class="media-left">\n        \x3c!-- ... --\x3e\n    </figure>\n    <div class="media-content">\n        <div class="content">\n            \x3c!-- ... --\x3e\n        </div>\n    </div>\n</article>\n\n\x3c!-- icon: https://bulma.io/documentation/elements/icon/ --\x3e\n<span class="icon has-text-success">\n    <i class="fas fa-check-square"></i>\n</span>\n\n\x3c!-- breadcrumb: https://bulma.io/documentation/components/breadcrumb/ --\x3e\n<nav class="breadcrumb" aria-label="breadcrumbs">\n    <ul>\n        <li><a href="#">\x3c!-- ... --\x3e</a></li>\n        <li class="is-active"><a href="#" aria-current="page">\x3c!-- ... --\x3e</a></li>\n    </ul>\n</nav>\n\n\x3c!-- level: https://bulma.io/documentation/layout/level/ --\x3e\n<div class="level">\n    <div class="level-item">\n        \x3c!-- ... --\x3e\n    </div>\n</div>\n')))}m.isMDXComponent=!0}}]);