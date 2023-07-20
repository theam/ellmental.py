"use strict";(self.webpackChunkellmental=self.webpackChunkellmental||[]).push([[389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||s;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={slug:"/semantic-search/embedding-stores",title:"Embedding Stores",sidebar_label:"Embedding Stores"},o="Embedding stores",i={unversionedId:"semantic_search/embedding_stores",id:"semantic_search/embedding_stores",title:"Embedding Stores",description:"Once the embeddings have been generated, we need to store them in a database. However, not all databases are suitable for this task. The main problem is that the embeddings are high-dimensional vectors, which makes it difficult to store them in a database. It is also required that the database has a way to perform similarity searches on the embeddings.",source:"@site/docs/03_semantic_search/032_embedding_stores.md",sourceDirName:"03_semantic_search",slug:"/semantic-search/embedding-stores",permalink:"/semantic-search/embedding-stores",draft:!1,tags:[],version:"current",lastUpdatedBy:"Adri\xe1n Lorenzo Meli\xe1n",lastUpdatedAt:1689864166,formattedLastUpdatedAt:"Jul 20, 2023",sidebarPosition:32,frontMatter:{slug:"/semantic-search/embedding-stores",title:"Embedding Stores",sidebar_label:"Embedding Stores"},sidebar:"docs",previous:{title:"Embedding Generators",permalink:"/semantic-search/embedding-generators"},next:{title:"Contributing",permalink:"/contributing"}},l={},d=[{value:"Local store",id:"local-store",level:2},{value:"Chroma store",id:"chroma-store",level:2},{value:"Supabase store",id:"supabase-store",level:2}],c={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"embedding-stores"},"Embedding stores"),(0,n.kt)("p",null,"Once the embeddings have been generated, we need to store them in a database. However, not all databases are suitable for this task. The main problem is that the embeddings are high-dimensional vectors, which makes it difficult to store them in a database. It is also required that the database has a way to perform similarity searches on the embeddings."),(0,n.kt)("p",null,"Only a subset of databases can be used to store embeddings. ELLMental provides built-in clients to use different embedding stores, you just have to choose which one you want to use. Then, provide the required configuration for that store and eLLMental will take care of the rest."),(0,n.kt)("h2",{id:"local-store"},"Local store"),(0,n.kt)("p",null,"This is the most basic of the stores. It stores the embeddings in a local file using the Chroma client. This is useful for testing purposes, but it is not recommended for production environments."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-.env"},'EMBEDDING_STORE="LOCAL"\nSTORE_PATH="<STORE_PATH>"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"STORE_PATH")," is the path where the ChromaDB will be generated locally.")),(0,n.kt)("h2",{id:"chroma-store"},"Chroma store"),(0,n.kt)("p",null,"In case you want to use ChromaDB as a production database, you can use this store. It uses the Chroma client to store the embeddings in a ChromaDB database. This Chroma database doesn't have to be local, it can be a remote ChromaDB, which is recommended for production environments."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-.env"},'EMBEDDING_STORE="CHROMA"\nCHROMA_URL="<CHROMA_URL>"\nCHROMA_PORT="<CHROMA_PORT>"\nCHROMA_COLLECTION="<CHROMA_COLLECTION>"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CHROMA_URL")," is the URL of the ChromaDB database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CHROMA_PORT")," is the port of the ChromaDB database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CHROMA_COLLECTION")," is the collection where the embeddings are stored.")),(0,n.kt)("h2",{id:"supabase-store"},"Supabase store"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-.env"},'EMBEDDING_STORE="SUPABASE"\nSUPABASE_URL="<SUPABASE_URL>"\nSUPABASE_KEY="<SUPABASE_KEY>"\nSUPABASE_TABLE="<SUPABASE_TABLE>"\nSUPABASE_FUNCTION="<SUPABASE_FUNCTION>"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SUPABASE_URL")," is the URL of the Supabase database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SUPABASE_KEY")," is the access key of the Supabase database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SUPABASE_TABLE")," is the table where the embeddings are stored."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SUPABASE_FUNCTION")," is the function that is used to perform similarity searches.")),(0,n.kt)("p",null,"You can check out how to set up your Supabase database ",(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/blog/openai-embeddings-postgres-vector"},"here"),"."))}u.isMDXComponent=!0}}]);