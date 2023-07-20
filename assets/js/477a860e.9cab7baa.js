"use strict";(self.webpackChunkellmental=self.webpackChunkellmental||[]).push([[664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={slug:"/semantic-search/embedding-generators",title:"Embedding Generators",sidebar_label:"Embedding Generators"},o="Embedding generators",s={unversionedId:"semantic_search/embedding_generators",id:"semantic_search/embedding_generators",title:"Embedding Generators",description:"One of the components that make the semantic search system work is the embedding generator. The embedding generator is a neural network that takes some text as input and outputs a vector that represents its meaning. This vector is called an embedding.",source:"@site/docs/03_semantic_search/031_embedding_generators.md",sourceDirName:"03_semantic_search",slug:"/semantic-search/embedding-generators",permalink:"/semantic-search/embedding-generators",draft:!1,tags:[],version:"current",lastUpdatedBy:"Adri\xe1n Lorenzo Meli\xe1n",lastUpdatedAt:1689840841,formattedLastUpdatedAt:"Jul 20, 2023",sidebarPosition:31,frontMatter:{slug:"/semantic-search/embedding-generators",title:"Embedding Generators",sidebar_label:"Embedding Generators"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/semantic-search/getting-started"},next:{title:"Embedding Stores",permalink:"/semantic-search/embedding-stores"}},l={},d=[{value:"OpenAI Generators",id:"openai-generators",level:2},{value:"Azure OpenAI configuration",id:"azure-openai-configuration",level:3},{value:"Hugging Face Spaces",id:"hugging-face-spaces",level:2},{value:"Instruct Embedding Generator",id:"instruct-embedding-generator",level:3},{value:"Text Embedding Generator",id:"text-embedding-generator",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"embedding-generators"},"Embedding generators"),(0,r.kt)("p",null,"One of the components that make the semantic search system work is the embedding generator. The embedding generator is a neural network that takes some text as input and outputs a vector that represents its meaning. This vector is called an embedding."),(0,r.kt)("p",null,"ELLMental provides built-in clients to use different embedding generators, you just have to choose which one you want to use. Then, provide the required configuration for that generator and eLLMental will take care of the rest."),(0,r.kt)("p",null,"All embedding generators have to have configured the following parameters to work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},"EMBEDDING_GENERATOR= # Can be OPENAI | SPACES_TEXT | SPACES_INSTRUCT\nBATCH_SIZE= # Number of embeddings to generate in each batch\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EMBEDDING_GENERATOR")," let you select between the different types of generators that you can use natively. For now, we support:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#openai-generators"},(0,r.kt)("inlineCode",{parentName:"a"},"OPENAI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hugging-face-spaces"},(0,r.kt)("inlineCode",{parentName:"a"},"SPACES_TEXT"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hugging-face-spaces"},(0,r.kt)("inlineCode",{parentName:"a"},"SPACES_INSTRUCT"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BATCH_SIZE")," is the size of the chunks to be generated. It is recommended to have a batch size of ",(0,r.kt)("inlineCode",{parentName:"li"},"50"),".")),(0,r.kt)("h2",{id:"openai-generators"},"OpenAI Generators"),(0,r.kt)("p",null,"OpenAI provides a set of pre-trained models that can be used to generate embeddings for text. ELLMental has a built-in module that allows you to connect to these models and use them to generate embeddings. To use them you have to provide the following environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},"OPENAI_TYPE= # Can be azure | openai\nOPENAI_API_KEY= # Your OpenAI API key\nOPENAI_MODEL=  # Your OpenAI model. See: https://platform.openai.com/docs/guides/embeddings\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENAI_TYPE")," you can select between two different implementations:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure"),", which requires specific implementation that can be found ",(0,r.kt)("a",{parentName:"li",href:"#azure-openai-configuration"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openai"),", which doesn't need specific configuration."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENAI_API_KEY")," can be found in your ",(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/"},"OpenAI dashboard")," or it can be through the ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/cognitive-services/openai-service"},"Azure Integration"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPENAI_MODEL")," has to be the name of one of the ",(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/models/overview"},"OpenAI Embeddings models"),". We recommend using the ",(0,r.kt)("inlineCode",{parentName:"li"},"text-embeddings-ada-002")," or the ",(0,r.kt)("inlineCode",{parentName:"li"},"gpt-4")," model.")),(0,r.kt)("h3",{id:"azure-openai-configuration"},"Azure OpenAI configuration"),(0,r.kt)("p",null,"To make use of ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/openai/overview"},"Azure OpenAI"),", you need to configure the following environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},'AZURE_OPENAI_ENDPOINT= # E.g: https://example-endpoint.openai.azure.com\nAZURE_OPENAI_VERSION= # E.g: "2023-05-15"\nAZURE_OPENAI_USE_ACTIVE_DIRECTORY= # True if you want to use a token provided by Azure Active Directory\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AZURE_OPENAI_ENDPOINT"),", the endpoint to the service in your resource group."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AZURE_OPENAI_VERSION"),", the version of the API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AZURE_OPENAI_USE_ACTIVE_DIRECTORY")," is a flag to indicate that the token comes from Azure Active Directory.")),(0,r.kt)("h2",{id:"hugging-face-spaces"},"Hugging Face Spaces"),(0,r.kt)("p",null,"The eLLMental team has worked on providing ready-to-use alternative models. These are models that have been hosted as ",(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/spaces"},"Hugging Face Spaces"),". The team has worked on preparing these models to be ready to use and hosted on Hugging Face."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EMBEDDINGS_GENERATION_URL")," is the URL of the model hosted on Huggingface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EMBEDDINGS_GENERATION_KEY")," is the access key of the model hosted on Huggingface.")),(0,r.kt)("h3",{id:"instruct-embedding-generator"},"Instruct Embedding Generator"),(0,r.kt)("p",null,"Some interesting embedding generators are those that use ",(0,r.kt)("a",{parentName:"p",href:"https://instructor-embedding.github.io/"},"instructions to represent embedding intention"),". This is an instruction-finetuned text embedding model that can generate text embeddings tailored to any task."),(0,r.kt)("p",null,"You can integrate yours by setting the proper environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},"EMBEDDING_GENERATOR=SPACES_INSTRUCT\n")),(0,r.kt)("h3",{id:"text-embedding-generator"},"Text Embedding Generator"),(0,r.kt)("p",null,"You can integrate your own text embedding generators hosted on ",(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/spaces"},"Hugging Face Spaces")," by setting the proper environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},"EMBEDDING_GENERATOR=SPACES_TEXT\n")),(0,r.kt)("p",null,"You can find a curated and production-ready model ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/theam/embedding-models/tree/main/e5-multilanguage"},"here"),"."))}c.isMDXComponent=!0}}]);