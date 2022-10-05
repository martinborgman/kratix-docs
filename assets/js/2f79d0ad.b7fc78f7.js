"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[5355],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||n;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(7462),i=(r(7294),r(4137));const n={},o="Introduction",l={unversionedId:"main/intro",id:"main/intro",title:"Introduction",description:"What is Kratix?",source:"@site/docs/main/02-intro.md",sourceDirName:"main",slug:"/main/intro",permalink:"/docs/main/intro",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/02-intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/main/overview"},next:{title:"The Value of Kratix",permalink:"/docs/main/value-of-kratix"}},u={},s=[{value:"What is Kratix?",id:"what-is-kratix",level:2},{value:"Want to see Kratix in action?",id:"want-to-see-kratix-in-action",level:3},{value:"Using Kratix to build your platform you can:",id:"using-kratix-to-build-your-platform-you-can",level:3},{value:"Providing a Kratix-built platform allows your users to:",id:"providing-a-kratix-built-platform-allows-your-users-to",level:3},{value:"Guides: Jump right in",id:"guides-jump-right-in",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"what-is-kratix"},"What is Kratix?"),(0,i.kt)("p",null,"Kratix is a framework used by platform teams to build the custom platforms tailored to their organisation."),(0,i.kt)("h3",{id:"want-to-see-kratix-in-action"},"Want to see Kratix in action?"),(0,i.kt)("p",null,"Check out a video overview of our product:"),(0,i.kt)("div",{style:{"text-align":"center"}},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ZZUD2NUCBJI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h3",{id:"using-kratix-to-build-your-platform-you-can"},"Using Kratix to build your platform you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use GitOps workflow with Flux and familiar Kubernetes-native constructs."),(0,i.kt)("li",{parentName:"ul"},"co-create capabilities by providing a clear contract between application and platform teams through the definition and creation of \u201cPromises\u201d. Learn more about Kratix Promises ",(0,i.kt)("a",{parentName:"li",href:"./guides/writing-a-promise"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"create a flexible platform with your paved paths as Promises."),(0,i.kt)("li",{parentName:"ul"},"evolve your platform easily as your business needs change."),(0,i.kt)("li",{parentName:"ul"},"start small on a laptop and expand to multi-team, multi-cluster, multi-region, and multi-cloud with a consistent API everywhere.")),(0,i.kt)("h3",{id:"providing-a-kratix-built-platform-allows-your-users-to"},"Providing a Kratix-built platform allows your users to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"discover available services that are already fit-for-purpose."),(0,i.kt)("li",{parentName:"ul"},"consume services on demand using standard Kubernetes APIs."),(0,i.kt)("li",{parentName:"ul"},"move focus away from infrastructure toward adding product value.")),(0,i.kt)("h2",{id:"guides-jump-right-in"},"Guides: Jump right in"),(0,i.kt)("p",null,"Follow our handy guides to get started on the basics as quickly as possible:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../category/installing-kratix"},"Installing Kratix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./guides/installing-a-promise"},"Installing and using a Promise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./guides/writing-a-promise"},"Writing a Promise"))))}p.isMDXComponent=!0}}]);