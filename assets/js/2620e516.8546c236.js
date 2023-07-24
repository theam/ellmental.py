"use strict";(self.webpackChunkellmental=self.webpackChunkellmental||[]).push([[548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>E,default:()=>C,frontMatter:()=>O,metadata:()=>S,toc:()=>P});var a=n(7462),r=n(7294),o=n(3905),l=n(6010),i=n(2466),s=n(6550),u=n(1980),c=n(7392),d=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:a}),[c,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var g=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},i,{className:(0,l.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}const I={tabItem:"tabItem_Ymn6"};function N(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(I.tabItem,a),hidden:n},t)}const O={slug:"/semantic-search/usage",title:"Usage",sidebar_label:"Usage"},E=void 0,S={unversionedId:"semantic_search/semantic_search_usage",id:"semantic_search/semantic_search_usage",title:"Usage",description:"The Semantic Search service can be used through a REST API. You would need to consume it by sending HTTP requests to the different service endpoints. There is an endpoint for every action available in the service.",source:"@site/docs/03_semantic_search/033_semantic_search_usage.mdx",sourceDirName:"03_semantic_search",slug:"/semantic-search/usage",permalink:"/semantic-search/usage",draft:!1,tags:[],version:"current",lastUpdatedBy:"Borja Zarco",lastUpdatedAt:1690201123,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:33,frontMatter:{slug:"/semantic-search/usage",title:"Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/semantic-search/getting-started"},next:{title:"Embedding Generators",permalink:"/semantic-search/embedding-generators"}},_={},P=[{value:"OpenAPI documentation",id:"openapi-documentation",level:2},{value:"Available endpoints",id:"available-endpoints",level:2},{value:"Learn endpoint",id:"learn-endpoint",level:3},{value:"Search endpoint",id:"search-endpoint",level:3}],j={toc:P},x="wrapper";function C(e){let{components:t,...n}=e;return(0,o.kt)(x,(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Semantic Search service can be used through a REST API. You would need to consume it by sending HTTP requests to the different service endpoints. There is an endpoint for every action available in the service."),(0,o.kt)("h2",{id:"openapi-documentation"},"OpenAPI documentation"),(0,o.kt)("p",null,"The REST API has been developed following the OpenAPI specification. This means that the REST API complies with the OpenAPI standard and that you can use the OpenAPI documentation to learn how to use the API. "),(0,o.kt)("p",null,"In fact, the Semantic Search service provides an endpoint where you can find the OpenAPI documentation. You can find it at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/docs"},"http://localhost:8000/docs"),"."),(0,o.kt)("p",null,"This endpoint will open a ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger UI")," page where you can find all the information about the API. You can also try the API from this page, as it provides a way to send requests to the different endpoints."),(0,o.kt)("p",null,"Additionally, you can get the openapi.json file from the ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs")," endpoint. You can find it at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/openapi.json"},"http://localhost:8000/openapi.json"),"."),(0,o.kt)("h2",{id:"available-endpoints"},"Available endpoints"),(0,o.kt)("p",null,"The Semantic Search service provides two endpoints: ",(0,o.kt)("inlineCode",{parentName:"p"},"learn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"search"),". You can find more information about them in the following sections."),(0,o.kt)("h3",{id:"learn-endpoint"},"Learn endpoint"),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"learn")," endpoint, you can make your service learn from a set of documents' content (or any text you'd like!). You\njust need to provide the endpoint with ",(0,o.kt)("inlineCode",{parentName:"p"},"content"),", so it can then be turned into embeddings and stored in the local database."),(0,o.kt)("p",null,"You can try the service by sending a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/learn"},"http://localhost:8000/learn"),"."),(0,o.kt)(T,{groupId:"api-request",mdxType:"Tabs"},(0,o.kt)(N,{value:"json",label:"JSON Body",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n      {\n        "content": { "text": "Grain in dogs food is not good for them."},      \n        "metadata": {"key1": "value1", "key2": "value2"},\n        "cluster_id": "your_file_id"\n      }\n    ]\n}\n'))),(0,o.kt)(N,{value:"curl",label:"CURL Request",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  curl --location \'http://127.0.0.1:8000/learn\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n    "items": [\n      {\n        "content": { "text": "Grain in dogs food is not good for them."},      \n        "metadata": {"key1": "value1", "key2": "value2"},\n        "cluster_id": "your_file_id"\n      }\n    ]\n  }\'\n')))),(0,o.kt)("h3",{id:"search-endpoint"},"Search endpoint"),(0,o.kt)("p",null,"With the search endpoint, you will get answers to your questions, based on what you have ingested with\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"learn")," endpoint. You just need to provide the endpoint with a ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),", and the service will return the most\nrelevant information based on the embeddings stored in the local database."),(0,o.kt)("p",null,"You can try this endpoint by sending a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/search"},"http://localhost:8000/search")," with the following body:"),(0,o.kt)(T,{groupId:"api-request",mdxType:"Tabs"},(0,o.kt)(N,{value:"json",label:"JSON Body",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query": "How does grain food affect dogs?",\n  "cluster_ids": ["your_file_id"]\n}\n'))),(0,o.kt)(N,{value:"curl",label:"CURL Request",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  curl --location \'http://127.0.0.1:8000/search\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "query": "How does grain food affect dogs?",\n  "cluster_ids": ["your_file_id"]\n  }\'\n')))))}C.isMDXComponent=!0}}]);