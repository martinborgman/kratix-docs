"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[1984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||n;return r?o.createElement(h,i(i({ref:t},m),{},{components:r})):o.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7086:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(3117),a=(r(7294),r(3905));const n={description:"Learn more about how to deploy Kratix in a prod-like environment",title:"Deployment topology",id:"intro"},i=void 0,s={unversionedId:"main/reference/deployment-topology/intro",id:"main/reference/deployment-topology/intro",title:"Deployment topology",description:"Learn more about how to deploy Kratix in a prod-like environment",source:"@site/docs/main/05-reference/01-deployment-topology/01-deployment-topology.md",sourceDirName:"main/05-reference/01-deployment-topology",slug:"/main/reference/deployment-topology/",permalink:"/docs/main/reference/deployment-topology/",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/01-deployment-topology/01-deployment-topology.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn more about how to deploy Kratix in a prod-like environment",title:"Deployment topology",id:"intro"},sidebar:"mainSidebar",previous:{title:"Reference",permalink:"/docs/category/reference"},next:{title:"Clusters",permalink:"/docs/main/reference/clusters/intro"}},l={},p=[{value:"Kratix Platform Cluster",id:"kratix-platform-cluster",level:2},{value:"GitOps Repository",id:"gitops-repository",level:2},{value:"Worker Clusters",id:"worker-clusters",level:2},{value:"Kratix Workloads",id:"kratix-workloads",level:3},{value:"Worker Resources",id:"worker-resources",level:3},{value:"Platform as a Worker",id:"platform-as-a-worker",level:3},{value:"Kratix Marketplace",id:"kratix-marketplace",level:2},{value:"Pipelines and Off Cluster Resources",id:"pipelines-and-off-cluster-resources",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page walks through the Kratix deployment topology for the Platform team for our example organisation EasyEaty. The organisation has a number of Application Development teams that all use the Platform to get the services they require."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Overview",src:r(5843).Z,width:"3494",height:"3625"})),(0,a.kt)("h2",{id:"kratix-platform-cluster"},"Kratix Platform Cluster"),(0,a.kt)("p",null,"The cluster where Kratix is installed is the Platform cluster, which is in the centre of the diagram and has the label ",(0,a.kt)("em",{parentName:"p"},"Platform"),". This is the cluster that both the Platform team and Application Development teams interface with."),(0,a.kt)("p",null,"The Platform contains three important elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Platform API:"),' the API for consumers of the platform. In the diagram, the API includes three "internal" CRDs and a number of installed CRDs.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Promises:")," the components authored and/or installed by the platform team to drive the set of services available in the Platform API. See more about ",(0,a.kt)("a",{parentName:"li",href:"./promises/intro"},"Kratix Promises"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Clusters:")," a registry of Kratix Worker Clusters. See more about ",(0,a.kt)("a",{parentName:"li",href:"./clusters/intro"},"Kratix Clusters"),".")),(0,a.kt)("h2",{id:"gitops-repository"},"GitOps Repository"),(0,a.kt)("p",null,"When a ",(0,a.kt)("a",{parentName:"p",href:"./promises/intro"},"Kratix Promise")," is installed, or when a new ",(0,a.kt)("a",{parentName:"p",href:"./resource-requests/intro"},"Resource Request")," comes in to the Platform, Kratix will react by writing documents to the Repository."),(0,a.kt)("p",null,"For example, the Repository in EasyEaty's topology is pictured to the right of the Platform cluster. When the ",(0,a.kt)("em",{parentName:"p"},"Web App Golden Path")," Promise was installed on the Platform, a set of documents required to fulfil the Promise was written to that Repository."),(0,a.kt)("h2",{id:"worker-clusters"},"Worker Clusters"),(0,a.kt)("p",null,"Kratix Worker Clusters watch and react to changes in the Repository via a GitOps toolkit like FluxCD. Kratix requires at least one Worker cluster to run workloads. All Worker clusters are registered to the Platform via the Kratix API (see more about ",(0,a.kt)("a",{parentName:"p",href:"./clusters/intro"},"Kratix Clusters"),")."),(0,a.kt)("p",null,"For example, in the diagram there are three clusters that are exclusively Worker clusters: ",(0,a.kt)("em",{parentName:"p"},"EKS"),", ",(0,a.kt)("em",{parentName:"p"},"GKE"),", and ",(0,a.kt)("em",{parentName:"p"},"On Prem / Edge"),"."),(0,a.kt)("h3",{id:"kratix-workloads"},"Kratix Workloads"),(0,a.kt)("p",null,"The primary role for these Worker clusters is to run workloads requested by consumers of the platform."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("em",{parentName:"p"},"EKS")," Worker cluster has a number of workloads that were requested by ",(0,a.kt)("em",{parentName:"p"},"Team 2")," via the ",(0,a.kt)("em",{parentName:"p"},"Web App Golden Path")," Promise: two instances of Jenkins, two instances of PostgreSQL, and three instances of Nginx."),(0,a.kt)("h3",{id:"worker-resources"},"Worker Resources"),(0,a.kt)("p",null,"To run these workloads, each Worker cluster also has a set of Worker Resources. These resources are baseline capabilities installed on the Worker cluster at the time the Promise is installed on the Platform, and they represent the software that needs to be running prior to any requested workload."),(0,a.kt)("p",null,"For example, when the ",(0,a.kt)("em",{parentName:"p"},"Web App Golden Path")," Promise was installed on the Platform cluster, one of the Worker Resources that was immediately installed on the ",(0,a.kt)("em",{parentName:"p"},"EKS")," Worker cluster was the Jenkins Operator, which is required before a request for an instance of Jenkins can be fulfilled."),(0,a.kt)("h3",{id:"platform-as-a-worker"},"Platform as a Worker"),(0,a.kt)("p",null,"The Platform itself can ",(0,a.kt)("em",{parentName:"p"},"also")," be registered as a Worker cluster, which is required if the Platform offers any ",(0,a.kt)("a",{parentName:"p",href:"../guides/composite-promises"},"Composite Promises"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Web App Golden Path")," Promise is a Composite Promise because it is composed of three lower-level Promises: Jenkins, PostgreSQL, and Nginx. Composite Promises allow Platform teams to provide higher-level value by combining lower-level Promises available in the Marketplace."),(0,a.kt)("h2",{id:"kratix-marketplace"},"Kratix Marketplace"),(0,a.kt)("p",null,"In order to populate the lower-level offerings in a Platform, Kratix has provided a number of pre-written Promises ready for use. These Promises can be installed on a Platform and configured to meet organisational needs. For example, Kratix offers an off-the-shelf Promise for Jenkins, and the Platform team installed this Promise after configuring properties that are specific to the EasyEaty organisation."),(0,a.kt)("h2",{id:"pipelines-and-off-cluster-resources"},"Pipelines and Off Cluster Resources"),(0,a.kt)("p",null,"Kratix Promises include a concept called Request Pipelines. These pipelines are defined by the Promise author and are executed in the Platform when a consumer makes a request for a Promise. Pipelines specify a set of containers that will run prior to the instantiation of workloads, and they encapsulate a number of organisational requirements."),(0,a.kt)("p",null,"For example, when ",(0,a.kt)("em",{parentName:"p"},"Team 2")," requested the ",(0,a.kt)("em",{parentName:"p"},"Web App Golden Path")," Promise, the Request Pipeline executed and sent notifications via Slack, set up an on-call rota on PagerDuty, and created the appropriate tickets in Zendesk."))}u.isMDXComponent=!0},5843:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/kratix-arch-diagram-5b6e2aea9ad74b61c1726a7b73047e8f.png"}}]);