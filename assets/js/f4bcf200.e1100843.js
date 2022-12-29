"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[7761],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var a=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,i=function(t,e){if(null==t)return{};var r,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var u=a.createContext({}),s=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(f,o(o({ref:e},c),{},{components:r})):a.createElement(f,o({ref:e},c))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[p]="string"==typeof t?t:i,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2880:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(7462),i=(r(7294),r(3905));const n={},o="Introduction",l={unversionedId:"main/intro",id:"main/intro",title:"Introduction",description:"What is Kratix?",source:"@site/docs/main/01-intro.md",sourceDirName:"main",slug:"/main/intro",permalink:"/docs/main/intro",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"mainSidebar",next:{title:"The Value of Kratix",permalink:"/docs/main/value-of-kratix"}},u={},s=[{value:"What is Kratix?",id:"what-is-kratix",level:2},{value:"Want to see Kratix in action?",id:"want-to-see-kratix-in-action",level:3},{value:"Using Kratix to build your platform you can:",id:"using-kratix-to-build-your-platform-you-can",level:3},{value:"Providing a Kratix-built platform allows your users to:",id:"providing-a-kratix-built-platform-allows-your-users-to",level:3},{value:"Guides: Jump right in",id:"guides-jump-right-in",level:2}],c={toc:s};function p(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"what-is-kratix"},"What is Kratix?"),(0,i.kt)("p",null,"Kratix is a framework used by platform teams to build the custom platforms tailored to their organisation."),(0,i.kt)("h3",{id:"want-to-see-kratix-in-action"},"Want to see Kratix in action?"),(0,i.kt)("p",null,"Check out a video overview of our product:"),(0,i.kt)("div",{style:{"text-align":"center"}},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ZZUD2NUCBJI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h3",{id:"using-kratix-to-build-your-platform-you-can"},"Using Kratix to build your platform you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use GitOps workflow with Flux and familiar Kubernetes-native constructs."),(0,i.kt)("li",{parentName:"ul"},"co-create capabilities by providing a clear contract between application and platform teams through the definition and creation of \u201cPromises\u201d. Learn more about Kratix Promises ",(0,i.kt)("a",{parentName:"li",href:"./guides/writing-a-promise"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"create a flexible platform with your paved paths as Promises."),(0,i.kt)("li",{parentName:"ul"},"evolve your platform easily as your business needs change."),(0,i.kt)("li",{parentName:"ul"},"start small on a laptop and expand to multi-team, multi-cluster, multi-region, and multi-cloud with a consistent API everywhere.")),(0,i.kt)("h3",{id:"providing-a-kratix-built-platform-allows-your-users-to"},"Providing a Kratix-built platform allows your users to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"discover available services that are already fit-for-purpose."),(0,i.kt)("li",{parentName:"ul"},"consume services on demand using standard Kubernetes APIs."),(0,i.kt)("li",{parentName:"ul"},"move focus away from infrastructure toward adding product value.")),(0,i.kt)("h2",{id:"guides-jump-right-in"},"Guides: Jump right in"),(0,i.kt)("p",null,"Follow our handy guides to get started on the basics as quickly as possible:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../category/installing-kratix"},"Installing Kratix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./guides/installing-a-promise"},"Installing and using a Promise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./guides/writing-a-promise"},"Writing a Promise"))),(0,i.kt)("p",null,"If you can't find what you need, or need help with building your platform as a product, reach out to us on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/syntasso/kratix/"},"Github")," or through ",(0,i.kt)("a",{parentName:"p",href:"https://www.syntasso.io/contact-us"},"Syntasso.io")," and we'll be happy to help."))}p.isMDXComponent=!0}}]);