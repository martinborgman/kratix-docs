"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[6453],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>h});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?t.createElement(h,o(o({ref:r},l),{},{components:n})):t.createElement(h,o({ref:r},l))}));function h(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[m]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},517:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const s={id:"intro"},o="Resource Requests",a={unversionedId:"main/reference/resource-requests/intro",id:"main/reference/resource-requests/intro",title:"Resource Requests",description:"One of the components of a Kratix Promise is the xaasCrd. xaasCrd sets the contract between the Platform and its users, and it defines what properties the user can configure in the Promised service.",source:"@site/docs/main/05-reference/04-resource-requests/01-intro.md",sourceDirName:"main/05-reference/04-resource-requests",slug:"/main/reference/resource-requests/intro",permalink:"/docs/main/reference/resource-requests/intro",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/04-resource-requests/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro"},sidebar:"mainSidebar",previous:{title:"Deleting",permalink:"/docs/main/reference/promises/deleting-a-promise"},next:{title:"Pipelines",permalink:"/docs/main/reference/resource-requests/pipelines"}},c={},p=[],l={toc:p};function m(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resource-requests"},"Resource Requests"),(0,i.kt)("p",null,"One of the components of a ",(0,i.kt)("a",{parentName:"p",href:"../promises/intro"},"Kratix Promise")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"xaasCrd"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"xaasCrd")," sets the contract between the Platform and its users, and it defines what properties the user can configure in the Promised service."),(0,i.kt)("p",null,"The Resource Request is the document Platform Users write, following the ",(0,i.kt)("inlineCode",{parentName:"p"},"xaasCrd")," contract, to request instances of the Promised service. Each Promise has its own contract, so each Promise will have its own Resource Request format."),(0,i.kt)("p",null,"Consider a Promise with the following ",(0,i.kt)("inlineCode",{parentName:"p"},"xaasCrd"),", paying special attention to the highlighted fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"apiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: someservice.example.promise.syntasso.io\nspec:\n  # highlight-next-line\n  group: example.promise.syntasso.io\n  names:\n    # highlight-next-line\n    kind: someservice\n    plural: someservices\n    singular: someservice\n  scope: Namespaced\n  versions:\n    # highlight-next-line\n    - name: v1\n      served: true\n      storage: true\n      schema:\n        openAPIV3Schema:\n          type: object\n          properties:\n            # highlight-start\n            spec:\n              type: object\n              properties:\n                region: { type: string }\n                storageGB: { type: integer }\n            # highlight-end\n")),(0,i.kt)("p",null,"The Schema in this Promise defines, as the contract, two properties under ",(0,i.kt)("inlineCode",{parentName:"p"},"spec"),": a\nstring ",(0,i.kt)("inlineCode",{parentName:"p"},"region")," and a integer ",(0,i.kt)("inlineCode",{parentName:"p"},"storageGB"),"."),(0,i.kt)("p",null,"A example Resource Request to get an instance of this Promised service would look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Promise spec.group and versions\napiVersion: example.promise.syntasso.io/v1\n\n# Promise spec.names.kind\nkind: someservice\n\n# Name of this Resource Request\nmetadata:\n  name: some-name\n\n# From the spec.versions.v1 Schema\nspec:\n  region: some-region\n  storageGB: 10\n")),(0,i.kt)("p",null,"When applied to the Platform Cluster, Kratix will trigger the Pipeline. For more details on the Pipeline, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/main/reference/resource-requests/pipelines"},"Pipeline reference"),"."),(0,i.kt)("p",null,"For a in-depth exploration of the Resource Request and Pipelines, check the ",(0,i.kt)("a",{parentName:"p",href:"../../guides/writing-a-promise"},"Writing a Promise")," and ",(0,i.kt)("a",{parentName:"p",href:"../../guides/enhancing-a-promise"},"Enhancing a Promise")," guides."))}m.isMDXComponent=!0}}]);