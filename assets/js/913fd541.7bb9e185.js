"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4e3],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2986:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:1.1},l="Getting Started",c={unversionedId:"tools/lsp-factoryjs/getting-started",id:"tools/lsp-factoryjs/getting-started",title:"Getting Started",description:"The @lukso/lsp-factory.js package allows simple deployments of ERC725-UniversalProfiles, LSP7-DigitalAssets and LSP8-IdentifiableDigitalAssets.",source:"@site/docs/tools/lsp-factoryjs/getting-started.md",sourceDirName:"tools/lsp-factoryjs",slug:"/tools/lsp-factoryjs/getting-started",permalink:"/tools/lsp-factoryjs/getting-started",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/getting-started.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"toolsSidebar",previous:{title:"ERC725",permalink:"/tools/erc725js/classes/ERC725"},next:{title:"Universal Profile",permalink:"/tools/lsp-factoryjs/deployment/universal-profile"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Instantiation",id:"instantiation",level:2},{value:"Using LSPFactory in a Dapp",id:"using-lspfactory-in-a-dapp",level:2},{value:"Usage",id:"usage",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@lukso/lsp-factory.js")," package allows simple deployments of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md"},"ERC725-UniversalProfiles"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md"},"LSP7-DigitalAssets")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md"},"LSP8-IdentifiableDigitalAssets"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub repo: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/tools-lsp-factory"},"https://github.com/lukso-network/tools-lsp-factory")),(0,o.kt)("li",{parentName:"ul"},"NPM: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@lukso/lsp-factory.js"},"https://www.npmjs.com/package/@lukso/lsp-factory.js"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lukso/lsp-factory.js\n")),(0,o.kt)("h2",{id:"instantiation"},"Instantiation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { LSPFactory } from '@lukso/lsp-factory.js';\n\nconst provider = 'https://rpc.l14.lukso.network'; // RPC provider url\n\nconst lspFactory = new LSPFactory(provider, {\n  deployKey: '0x...', // Private key of the account which will deploy any smart contract,\n  chainId: 22, // Chain Id of the network you want to deploy to\n});\n")),(0,o.kt)("h2",{id:"using-lspfactory-in-a-dapp"},"Using LSPFactory in a Dapp"),(0,o.kt)("p",null,"If being used in the browser in a Dapp, pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"ethereum")," object as the provider parameter to connect to a browser extension like the UniversalProfile Browser extension or MetaMask. This will then prompt users to sign the transactions the LSPFactory deploys smart contracts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await ethereum.request({ method: 'eth_requestAccounts', params: [] });\n\nconst lspFactory = new LSPFactory(ethereum);\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Deploying a Universal Profile is as simple as running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myContracts = await lspFactory.UniversalProfile.deploy({\n    controllingAccounts: ['0x...'], // Account addresses which will control the UP\n    lsp3Profile: myLSP3MetaData\n  });\n};\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," contains the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#JSONURL"},"LSP3 Metadata")," of your Universal Profile. This is the 'face' of your Universal Profile and contains all the public information people will see when they view your UP like your name, description and profile image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myLSP3MetaData = {\n  name: 'My Universal Profile',\n  description: 'My cool Universal Profile',\n  profileImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      // bytes32 hex string of the image hash\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n  backgroundImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      // bytes32 hex string of the image hash\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n  tags: ['public profile', 'creator'],\n  links: [\n    {\n      title: 'My Website',\n      url: 'www.my-website.com',\n    },\n  ],\n  ...\n};\n")),(0,o.kt)("p",null,"When deploying your Universal Profile your LSP3 data will be automatically uploaded to IPFS."),(0,o.kt)("p",null,"If you already have LSP3 data uploaded then simply pass an IPFS URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myLSP3MetaData = 'ipfs://QmPzUfdKhY6vfcTNDnitwKnnpm5GqjYSmw9todNVmi4bqy';\n")),(0,o.kt)("p",null,"To create a 'faceless' Universal Profile, omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," value. This can be useful if you wish to create the LSP3 metadata later or create an anonymous UP."),(0,o.kt)("p",null,"You can now continue using your UP address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myUPAddress = myContracts.ERC725Account.address;\n")))}m.isMDXComponent=!0}}]);