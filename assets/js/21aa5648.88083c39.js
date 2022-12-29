"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[7277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(o,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const s={description:"Get Kratix up and running"},l="Quick Start",i={unversionedId:"main/quick-start",id:"main/quick-start",title:"Quick Start",description:"Get Kratix up and running",source:"@site/docs/main/03-quick-start.md",sourceDirName:"main",slug:"/main/quick-start",permalink:"/docs/main/quick-start",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/03-quick-start.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Get Kratix up and running"},sidebar:"mainSidebar",previous:{title:"The Value of Kratix",permalink:"/docs/main/value-of-kratix"},next:{title:"Guides",permalink:"/docs/category/guides"}},o={},u=[{value:"Prerequisite: Kubernetes Cluster",id:"prerequisite-kubernetes-cluster",level:2},{value:"1. Install Kratix",id:"1-install-kratix",level:2},{value:"Configure",id:"configure",level:3},{value:"2. Provide Postgres-as-a-Service via a Kratix Promise",id:"2-provide-postgres-as-a-service-via-a-kratix-promise",level:2},{value:"3. Self serve a Postgres",id:"3-self-serve-a-postgres",level:2},{value:"Clean up",id:"clean-up",level:2},{value:"\ud83c\udf89 Congratulations!",id:"-congratulations",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"One of the most powerful features of Kratix is its ability to handle requests for\nresources, and deploy them to a remote specific cluster. However, Kratix also works well\nin a single cluster environment. This quick-start guide will walk you through the steps to\ninstall Kratix on a single cluster."),(0,a.kt)("h2",{id:"prerequisite-kubernetes-cluster"},"Prerequisite: Kubernetes Cluster"),(0,a.kt)("p",null,"Kratix requires a Kubernetes cluster to run. If you don't already have a cluster, we\nrecommend starting wtih a local cluster tool like\n",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"KinD")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),"."),(0,a.kt)("h2",{id:"1-install-kratix"},"1. Install Kratix"),(0,a.kt)("p",null,"Install Kratix and its dependencies with the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/single-cluster/install-all-in-one.yaml\n")),(0,a.kt)("p",null,"The above will install Kratix, MinIO, and FluxCD. MinIO will be the repository for the\nGitOps, while FluxCD will watch the repository for any changes that need to be applied to\nthe cluster. For production installations, both can be replaced with other tools and\ntechnologies depending on your preference."),(0,a.kt)("h3",{id:"configure"},"Configure"),(0,a.kt)("p",null,"Once Kratix is installed, you can register Kubernetes clusters where workloads should run.\nOn single cluster installations, the same cluster performs the role of the Platform and\nthe Worker clusters. The commands below will register the cluster, as well as configure\nFluxCD to watch for the cluster's repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/single-cluster/config-all-in-one.yaml\n")),(0,a.kt)("p",null,"Once the system reconciles, the Kratix resources should now be visible on the your\ncluster. You can verify its readiness by observing the ",(0,a.kt)("inlineCode",{parentName:"p"},"kratix-worker-system")," namespace\nappearing in the cluster (it may take a couple of minutes):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get namespace kratix-worker-system\nNAME                   STATUS   AGE\nkratix-worker-system   Active   1m\n")),(0,a.kt)("h2",{id:"2-provide-postgres-as-a-service-via-a-kratix-promise"},"2. Provide Postgres-as-a-Service via a Kratix Promise"),(0,a.kt)("p",null,"Install the sample Postgres Promise with the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/samples/postgres/postgres-promise.yaml\n")),(0,a.kt)("p",null,"Installing the Promise will eventually start the Postgres Operator on your Cluster. You\ncan verify by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods\n")),(0,a.kt)("p",null,"It may take a few seconds, but you should eventually see something similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"NAME                                 READY   STATUS    RESTARTS   AGE\npostgres-operator-7dccdbff7c-2hqhc   1/1     Running   0          1m\n")),(0,a.kt)("h2",{id:"3-self-serve-a-postgres"},"3. Self serve a Postgres"),(0,a.kt)("p",null,"Once the Postgres Operator is up and running, you can request a new Postgres instance with\nthe command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply --filename https://raw.githubusercontent.com/syntasso/kratix/main/samples/postgres/postgres-resource-request.yaml\n")),(0,a.kt)("p",null,"You can verify the pipeline pod by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pods\nNAME                                                 READY   STATUS      RESTARTS   AGE\n//highlight-next-line\nrequest-pipeline-ha-postgres-promise-default-152bb   0/1     Completed   0          72s\npostgres-operator-6c6dbd4459-pbcjp                   1/1     Running     0          6m55s\n")),(0,a.kt)("p",null,"Eventually, the Postgres instance pods will come up as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pods\nNAME                                                 READY   STATUS      RESTARTS   AGE\n//highlight-start\nacid-minimal-cluster-0                               1/1     Running     0          113s\nacid-minimal-cluster-1                               1/1     Running     0          90s\n//highlight-end\npostgres-operator-6c6dbd4459-pbcjp                   1/1     Running     0          6m55s\nrequest-pipeline-ha-postgres-promise-default-152bb   0/1     Completed   0          2m17s\n")),(0,a.kt)("p",null,"You are now ready to use your Postgres instance! To validate, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl exec -it acid-minimal-cluster-0 -- sh -c \"\n    PGPASSWORD=$(kubectl get secret zalando.acid-minimal-cluster.credentials -o 'jsonpath={.data.password}' | base64 -d) \\\n    PGUSER=$(kubectl get secret zalando.acid-minimal-cluster.credentials -o 'jsonpath={.data.username}' | base64 -d) \\\n    psql mydb\"\n")),(0,a.kt)("h2",{id:"clean-up"},"Clean up"),(0,a.kt)("p",null,"To clean up the created resources, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl delete --filename https://raw.githubusercontent.com/syntasso/kratix/main/samples/postgres/postgres-promise.yaml\nkubectl delete --filename https://raw.githubusercontent.com/syntasso/kratix/main/distribution/single-cluster/install-all-in-one.yaml\n")),(0,a.kt)("h2",{id:"-congratulations"},"\ud83c\udf89 Congratulations!"),(0,a.kt)("p",null,"You have successfully installed Kratix and used it to deliver Postgres-as-a-Service to\nyour platform. Check out our ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/guides"},"guides")," to learn more about Kratix\ncapabilities."))}p.isMDXComponent=!0}}]);