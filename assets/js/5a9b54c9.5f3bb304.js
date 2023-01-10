"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[1644],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,s(s({ref:r},c),{},{components:t})):a.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},352:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(7462),n=(t(7294),t(3905)),o=t(4996);const s={description:"Learn more about how Kratix works with Crossplane",title:"Kratix and Crossplane",id:"crossplane"},i=void 0,l={unversionedId:"main/reference/how-kratix-complements/crossplane",id:"main/reference/how-kratix-complements/crossplane",title:"Kratix and Crossplane",description:"Learn more about how Kratix works with Crossplane",source:"@site/docs/main/05-reference/02-how-kratix-complements/03-kratix-and-crossplane.md",sourceDirName:"main/05-reference/02-how-kratix-complements",slug:"/main/reference/how-kratix-complements/crossplane",permalink:"/docs/main/reference/how-kratix-complements/crossplane",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/02-how-kratix-complements/03-kratix-and-crossplane.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn more about how Kratix works with Crossplane",title:"Kratix and Crossplane",id:"crossplane"},sidebar:"mainSidebar",previous:{title:"Kratix and Terraform",permalink:"/docs/main/reference/how-kratix-complements/terraform"},next:{title:"Kratix and Backstage",permalink:"/docs/main/reference/how-kratix-complements/backstage"}},p={},c=[],m={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},(0,n.kt)("a",{parentName:"strong",href:"https://www.crossplane.io/"},"Crossplane"))," is an open-source multi-cloud control plane that allows you to extend Kubernetes to connect to and from external sources like databases, the cloud and the edge.")),(0,n.kt)("img",{src:(0,o.Z)("/img/k+crossplane_arch.png"),alt:"Sample architecture with Kratix and Crossplane",style:{float:"right",width:"400px",margin:"20px 0 40px 40px"}}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"We have written a tremendous ",(0,n.kt)("a",{parentName:"em",href:"https://www.syntasso.io/post/building-your-platform-your-way-with-crossplane-and-kratix"},"blog")," about how Kratix and Crossplane complement each other.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../promises/intro"},"Kratix Promises")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.crossplane.io/v1.8/reference/composition/"},"Crossplane Compositions")," are similar in that they both provide declarative APIs and a facade into more complicated underlying platform orchestration."),(0,n.kt)("p",null,"Kratix does not aim to compete with Crossplane on cloud orchestration and it can help a platform builder already using Crossplane."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creating a ",(0,n.kt)("a",{parentName:"li",href:"../promises/intro"},"Promise")," for Crossplane simplifies the Crossplane installation experience."),(0,n.kt)("li",{parentName:"ul"},"Kratix provides ",(0,n.kt)("a",{parentName:"li",href:"../deployment-topology"},"multi-cluster support")," for free. Where Crossplane users are managing several Crossplane provider clusters, Kratix complements by providing the cross-cluster management of resources."),(0,n.kt)("li",{parentName:"ul"},"A Promise can abstract away Crossplane. If a Platform needs to provide a Postgres as a Service with a production version managed by Crossplane ",(0,n.kt)("em",{parentName:"li"},"and")," and they also need to provide an inexpensive dev version that is run on a densified development cluster then this can be handled for free with Kratix via Promises. See the ",(0,n.kt)("a",{parentName:"li",href:"https://www.syntasso.io/post/building-your-platform-your-way-with-crossplane-and-kratix"},"blog")," for more detail on this pattern."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../promises/intro"},"Kratix Promises")," can offer the benefits of pipelines. Tasks such as billing checks, security scans, audits, resource decoration etc can all happen in the Promise before a delegation to Crossplane is made."),(0,n.kt)("li",{parentName:"ul"},"Kratix provides GitOps out of the box so the state of Crossplane resources is all managed for free.")))}u.isMDXComponent=!0}}]);