"use strict";(self.webpackChunkellmental=self.webpackChunkellmental||[]).push([[799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,h=p["".concat(d,".").concat(c)]||p[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var a=n(7462),r=n(7294),i=n(3905);const o={terminalWindow:"terminalWindow_wGrl",terminalWindowHeader:"terminalWindowHeader_o9Cs",row:"row_Rn7G",buttons:"buttons_IGLB",right:"right_fWp9",terminalWindowAddressBar:"terminalWindowAddressBar_X8fO",dot:"dot_fGZE",terminalWindowMenuIcon:"terminalWindowMenuIcon_rtOE",bar:"bar_Ck8N",terminalWindowBody:"terminalWindowBody_tzdS"};function l(e){let{children:t}=e;return r.createElement("div",{className:o.terminalWindow},r.createElement("div",{className:o.terminalWindowHeader},r.createElement("div",{className:o.buttons},r.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),r.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),r.createElement("span",{className:o.dot,style:{background:"#58cb42"}}))),r.createElement("div",{className:o.terminalWindowBody},t))}const d={slug:"/semantic-search/getting-started",title:"Getting Started",sidebar_label:"Getting Started"},s="Getting started",m={unversionedId:"semantic_search/getting_started",id:"semantic_search/getting_started",title:"Getting Started",description:"In this section, you will look at different ways to set up, run and consume this service on your local machine. You can choose between using Docker, Makefile, or Poetry.",source:"@site/docs/03_semantic_search/030_getting_started.md",sourceDirName:"03_semantic_search",slug:"/semantic-search/getting-started",permalink:"/semantic-search/getting-started",draft:!1,tags:[],version:"current",lastUpdatedBy:"Adri\xe1n Lorenzo",lastUpdatedAt:1689844336,formattedLastUpdatedAt:"Jul 20, 2023",sidebarPosition:30,frontMatter:{slug:"/semantic-search/getting-started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"docs",previous:{title:"Semantic Search",permalink:"/semantic-search"},next:{title:"Embedding Generators",permalink:"/semantic-search/embedding-generators"}},p={},u=[{value:"Project configuration",id:"project-configuration",level:2},{value:"Running the project",id:"running-the-project",level:2},{value:"Docker",id:"docker",level:3},{value:"Makefile",id:"makefile",level:3},{value:"Poetry",id:"poetry",level:3}],c={toc:u},h="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"In this section, you will look at different ways to set up, run and consume this service on your local machine. You can choose between using Docker, Makefile, or Poetry."),(0,i.kt)("h2",{id:"project-configuration"},"Project configuration"),(0,i.kt)("p",null,"This application requires some configuration to be set. The recommended way is by using a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. You can find an example of this file in the application's directory (",(0,i.kt)("inlineCode",{parentName:"p"},"apps/semantic_search"),"). You can copy this file and rename it to ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),". Then, you can edit the values of the variables to match your desired configuration."),(0,i.kt)("p",null,"The following table describes the different variables that can be set on the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SERVER_PORT")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"The port where the server will be running")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"EMBEDDING_GENERATOR")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"The embedding generator to use. You can choose one of ",(0,i.kt)("a",{parentName:"td",href:"/semantic-search/embedding-generators"},"the available models"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"EMBEDDING_STORE")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"The embedding store to use. You can choose one of ",(0,i.kt)("a",{parentName:"td",href:"/semantic-search/embedding-stores"},"the available stores"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MATCH_THRESHOLD")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"The threshold to use when matching embeddings. The value has to be between 0 and 1, being 1 an exact match")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BATCH_SIZE")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount of text to be used when generating embeddings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SPACES_URL")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL where the embedding generator is located. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"SPACES_TEXT")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"SPACES_INSTRUCT")," embedding generator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SPACES_KEY")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The key to use when generating embeddings. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"SPACES_TEXT")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"SPACES_INSTRUCT")," embedding generator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OPENAI_TYPE")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of OpenAI model to use when generating embeddings (either from OpenAI or Azure). This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"OPENAI")," embedding generator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OPENAI_MODEL")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The model to use when generating embeddings. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"OPENAI")," embedding generator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OPENAI_API_KEY")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The key to use when generating embeddings. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"OPENAI")," embedding generator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AZURE_OPENAI_ENDPOINT")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The endpoint to use when generating embeddings. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"azure")," OpenAI integration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AZURE_OPENAI_VERSION")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The version to use when generating embeddings. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"AZURE_OPENAI")," embedding generator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AZURE_OPENAI_USE_ACTIVE_DIRECTORY")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to use Active Directory when generating embeddings. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"AZURE_OPENAI")," embedding generator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STORE_PATH")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The path where the embeddings will be stored. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"LOCAL")," embedding store")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CHROMA_URL")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL of the Chroma instance to use. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"CHROMA")," embedding store")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CHROMA_PORT")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The port of the Chroma instance to use. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"CHROMA")," embedding store")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CHROMA_COLLECTION")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The collection to use when storing embeddings. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"CHROMA")," embedding store")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SUPABASE_URL")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL of the Supabase instance to use. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"SUPABASE")," embedding store")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SUPABASE_KEY")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The key to use when connecting to Supabase. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"SUPABASE")," embedding store")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SUPABASE_TABLE")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The table to use when storing embeddings. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"SUPABASE")," embedding store")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SUPABASE_FUNCTION")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"The function to use when querying embeddings. This is only required if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"SUPABASE")," embedding store")))),(0,i.kt)("h2",{id:"running-the-project"},"Running the project"),(0,i.kt)("p",null,"There are several ways to run the project. You can use Docker, Makefile, or Poetry. You can find instructions on how to run the project with each of these options below."),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"The most recommended way to set up the project is by using Docker. The project comes with a Dockerfile, which allows you to build a virtual image of a machine with all the configurations and dependencies needed to run the project. "),(0,i.kt)("p",null,"To use Docker, you need to have it installed on your system. You can find instructions on how to install Docker ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),"."),(0,i.kt)("p",null,"Once you have Docker installed, you must move to the ",(0,i.kt)("inlineCode",{parentName:"p"},"semantic_search")," directory. To run that, open a terminal on the project's root directory and run the following command:"),(0,i.kt)(l,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd apps/semantic_search\n"))),(0,i.kt)("p",null,"Once you are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"semantic_search")," directory. You can proceed to build and run the Docker image. The build will create a virtual machine with all the requirements for the project to run correctly. Once the build is finished, just run the image to get your project up and running."),(0,i.kt)(l,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t semantic-search .\ndocker run -p 8000:8000 semantic-search\n"))),(0,i.kt)("h3",{id:"makefile"},"Makefile"),(0,i.kt)("p",null,"Another way to run the application is by using the Makefile script on the project directory. First, ensure that both ",(0,i.kt)("a",{parentName:"p",href:"https://makefiletutorial.com/"},"Make")," and ",(0,i.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/"},"Poetry")," are installed on your system."),(0,i.kt)("p",null,"Once you have ",(0,i.kt)("a",{parentName:"p",href:"https://makefiletutorial.com/"},"Make")," and ",(0,i.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/"},"Poetry")," installed, you must move to the ",(0,i.kt)("inlineCode",{parentName:"p"},"semantic_search")," directory. To run that, open a terminal on the project's root directory and run the following command:"),(0,i.kt)(l,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd apps/semantic_search\n"))),(0,i.kt)("p",null,"If it's the first time that you are running the project with Make, you must run the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command. This command will install all the dependencies needed to run the project."),(0,i.kt)(l,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make init\n"))),(0,i.kt)("p",null,"Once the dependencies are installed, you can run the project by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," command."),(0,i.kt)(l,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make dev\n"))),(0,i.kt)("h3",{id:"poetry"},"Poetry"),(0,i.kt)("p",null,"The most basic way to run the project is by installing the dependencies on your machine and running it with ",(0,i.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/"},"Poetry"),". To do this, you must have ",(0,i.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/"},"Poetry")," installed on your system."),(0,i.kt)("p",null,"Once you have ",(0,i.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/"},"Poetry")," installed, you must move to the ",(0,i.kt)("inlineCode",{parentName:"p"},"semantic_search")," directory. To run that, open a terminal on the project's root directory and run the following command:"),(0,i.kt)(l,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd apps/semantic_search\n"))),(0,i.kt)("p",null,"If it's the first time that you are running the project with Poetry, you must run the ",(0,i.kt)("inlineCode",{parentName:"p"},"install")," command. This command will install all the dependencies needed to run the project."),(0,i.kt)(l,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install\n"))),(0,i.kt)("p",null,"Once the dependencies are installed, you can run the project by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," command."),(0,i.kt)(l,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"poetry run start\n"))))}g.isMDXComponent=!0}}]);