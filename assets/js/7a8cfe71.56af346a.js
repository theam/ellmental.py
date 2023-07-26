"use strict";(self.webpackChunkellmental=self.webpackChunkellmental||[]).push([[389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={slug:"/semantic-search/embedding-stores",title:"Embedding Stores",sidebar_label:"Embedding Stores"},s="Embedding stores",i={unversionedId:"semantic_search/embedding_stores",id:"semantic_search/embedding_stores",title:"Embedding Stores",description:"Once the embeddings have been generated, we need to store them in a database. However, not all databases are suitable for this task. The main problem is that the embeddings are high-dimensional vectors, which makes it difficult to store them in a database. It is also required that the database has a way to perform similarity searches on the embeddings.",source:"@site/docs/03_semantic_search/032_embedding_stores.md",sourceDirName:"03_semantic_search",slug:"/semantic-search/embedding-stores",permalink:"/semantic-search/embedding-stores",draft:!1,tags:[],version:"current",lastUpdatedBy:"Borja Zarco",lastUpdatedAt:1690385322,formattedLastUpdatedAt:"Jul 26, 2023",sidebarPosition:32,frontMatter:{slug:"/semantic-search/embedding-stores",title:"Embedding Stores",sidebar_label:"Embedding Stores"},sidebar:"docs",previous:{title:"Embedding Generators",permalink:"/semantic-search/embedding-generators"},next:{title:"Community",permalink:"/community"}},l={},d=[{value:"Local store",id:"local-store",level:2},{value:"Chroma store",id:"chroma-store",level:2},{value:"Supabase store",id:"supabase-store",level:2},{value:"Pinecone store",id:"pinecone-store",level:2}],c={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"embedding-stores"},"Embedding stores"),(0,r.kt)("p",null,"Once the embeddings have been generated, we need to store them in a database. However, not all databases are suitable for this task. The main problem is that the embeddings are high-dimensional vectors, which makes it difficult to store them in a database. It is also required that the database has a way to perform similarity searches on the embeddings."),(0,r.kt)("p",null,"Only a subset of databases can be used to store embeddings. ELLMental provides built-in clients to use different embedding stores, you just have to choose which one you want to use. Then, provide the required configuration for that store and eLLMental will take care of the rest."),(0,r.kt)("h2",{id:"local-store"},"Local store"),(0,r.kt)("p",null,"This is the most basic of the stores. It stores the embeddings in a local file using the Chroma client. This is useful for testing purposes, but it is not recommended for production environments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},'EMBEDDING_STORE="LOCAL"\nSTORE_PATH="<STORE_PATH>"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STORE_PATH")," is the path where the ChromaDB will be generated locally.")),(0,r.kt)("h2",{id:"chroma-store"},"Chroma store"),(0,r.kt)("p",null,"In case you want to use ChromaDB as a production database, you can use this store. It uses the Chroma client to store the embeddings in a ChromaDB database. This Chroma database doesn't have to be local, it can be a remote ChromaDB, which is recommended for production environments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},'EMBEDDING_STORE="CHROMA"\nCHROMA_URL="<CHROMA_URL>"\nCHROMA_PORT="<CHROMA_PORT>"\nCHROMA_COLLECTION="<CHROMA_COLLECTION>"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHROMA_URL")," is the URL of the ChromaDB database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHROMA_PORT")," is the port of the ChromaDB database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHROMA_COLLECTION")," is the collection where the embeddings are stored.")),(0,r.kt)("h2",{id:"supabase-store"},"Supabase store"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},'EMBEDDING_STORE="SUPABASE"\nSUPABASE_URL="<SUPABASE_URL>"\nSUPABASE_KEY="<SUPABASE_KEY>"\nSUPABASE_TABLE="<SUPABASE_TABLE>"\nSUPABASE_FUNCTION="<SUPABASE_FUNCTION>"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SUPABASE_URL")," is the URL of the Supabase database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SUPABASE_KEY")," is the access key of the Supabase database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SUPABASE_TABLE")," is the table where the embeddings are stored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SUPABASE_FUNCTION")," is the function that is used to perform similarity searches.")),(0,r.kt)("p",null,"You can check out how to set up your Supabase database ",(0,r.kt)("a",{parentName:"p",href:"https://supabase.com/blog/openai-embeddings-postgres-vector"},"here"),"."),(0,r.kt)("h2",{id:"pinecone-store"},"Pinecone store"),(0,r.kt)("p",null,"Another alternative could be ",(0,r.kt)("a",{parentName:"p",href:"https://www.pinecone.io/"},"Pinecone"),". It is a vector-oriented database created specifically for semanitc search. It is a cloud-based service, so you don't have to worry about setting up a database by yourself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},'EMBEDDING_STORE="PINECONE"\nPINECONE_KEY="<PINECONE_KEY>"\nPINECONE_ENVIRONMENT="<PINECONE_ENVIRONMENT>"\nPINECONE_INDEX="<PINECONE_INDEX>"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PINECONE_KEY")," is the access key of the Pinecone database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PINECONE_ENVIRONMENT")," is the environment where the Pinecone project is placed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PINECONE_INDEX")," is the Pinecone index (database) where embeddings are stored and queried.")),(0,r.kt)("p",null,"You can check out how to set up your Pinecone database ",(0,r.kt)("a",{parentName:"p",href:"https://www.pinecone.io/"},"here"),"."))}u.isMDXComponent=!0}}]);