"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[3914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2682:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={custom_edit_url:"https://github.com/pyrsia/.github/edit/main/governance.md"},s="Pyrsia Bootstrap Governance",c={unversionedId:"developer/governance",id:"developer/governance",title:"Pyrsia Bootstrap Governance",description:"The initial bootstrap committee will consist of 5 individuals who are core stakeholders and/or contributors.",source:"@site/docs/developer/governance.md",sourceDirName:"developer",slug:"/developer/governance",permalink:"/docs/developer/governance",editUrl:"https://github.com/pyrsia/.github/edit/main/governance.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/.github/edit/main/governance.md"},sidebar:"tutorialSidebar",previous:{title:"Contributing to Pyrsia",permalink:"/docs/developer/contributing"},next:{title:"Security Policy",permalink:"/docs/developer/security"}},u={},p=[{value:"Committee Deliverables",id:"committee-deliverables",level:2},{value:"Initial Charter",id:"initial-charter",level:3},{value:"Transition Process",id:"transition-process",level:2},{value:"Contribution Process",id:"contribution-process",level:2},{value:"Security/Vulnerability Reporting and Response Process",id:"securityvulnerability-reporting-and-response-process",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Project Communication Channels",id:"project-communication-channels",level:2},{value:"Permissions and access",id:"permissions-and-access",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pyrsia-bootstrap-governance"},"Pyrsia Bootstrap Governance"),(0,o.kt)("p",null,"The initial bootstrap committee will consist of 5 individuals who are core stakeholders and/or contributors."),(0,o.kt)("p",null,"Members are (in alphabetical order by last name):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stephen Chin ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/steveonjava"},"@steveonjava"),", JFrog"),(0,o.kt)("li",{parentName:"ul"},"Chris Crone ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/chris-crone"},"@chris-crone"),", Docker"),(0,o.kt)("li",{parentName:"ul"},"Sudhindra Rao ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/betarelease"},"@betarelease"),", JFrog"),(0,o.kt)("li",{parentName:"ul"},"Steve Taylor ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sbtaylor15"},"@sbtaylor15"),", DeployHub/Ortelius OS"),(0,o.kt)("li",{parentName:"ul"},"Johan Vos ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/johanvos"},"@johanvos"),", Lodgon")),(0,o.kt)("p",null,"The committee MUST:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Represent a cross-section of interests, not just one company"),(0,o.kt)("li",{parentName:"ul"},"Balance technical, architectural, and governance expertise since its initial mission is the establishment of structure around contributions, community, and decision-making"),(0,o.kt)("li",{parentName:"ul"},"Hold staggered terms, sufficient to ensure an orderly transition of power via elections as designed and implemented by the committee (see below for specific deliverables)"),(0,o.kt)("li",{parentName:"ul"},"Provide designated alternates in cases where quorum is required but not attainable with the current set of members"),(0,o.kt)("li",{parentName:"ul"},"Communicate with the Continuous Delivery Foundation on a regular cadence")),(0,o.kt)("h2",{id:"committee-deliverables"},"Committee Deliverables"),(0,o.kt)("p",null,"The committee will be responsible for a series of specific artifacts and activities as outlined below."),(0,o.kt)("h3",{id:"initial-charter"},"Initial Charter"),(0,o.kt)("p",null,"This document will define how the committee is to manage the project until it has transitioned to an elected steering body, as well as what governance must be in place.\nThe Kubernetes Steering Committee Charter Draft serves as a good example."),(0,o.kt)("p",null,"A charter should cover all of the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scope of rights and responsibilities explicitly held by the committee"),(0,o.kt)("li",{parentName:"ul"},"Committee structure that meets the requirements above"),(0,o.kt)("li",{parentName:"ul"},"Election process, including:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"special elections in the case someone resigns or is impeached"),(0,o.kt)("li",{parentName:"ul"},"who is eligible to nominate candidates and how"),(0,o.kt)("li",{parentName:"ul"},"who is eligible to run as a candidate"),(0,o.kt)("li",{parentName:"ul"},"Voter registration and requirements"),(0,o.kt)("li",{parentName:"ul"},"election mechanics such as",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"committee company representation quotas"),(0,o.kt)("li",{parentName:"ul"},"Limits on electioneering"),(0,o.kt)("li",{parentName:"ul"},"Responses to election fraud"))),(0,o.kt)("li",{parentName:"ul"},"How are changes to the charter enacted, and by what process"),(0,o.kt)("li",{parentName:"ul"},"How are meetings conducted",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Recorded or not, and if not, how is the information shared"),(0,o.kt)("li",{parentName:"ul"},"How is work tracked? Example steering project board"),(0,o.kt)("li",{parentName:"ul"},"Is there a member note taker, or is there a neutral facilitator role that exists outside of the committee?"),(0,o.kt)("li",{parentName:"ul"},"Frequency, duration, and required consistency"))),(0,o.kt)("li",{parentName:"ul"},"Committee decision-making process, and specifically those areas of action that require more/less consensus, e.g. modifications the charter"),(0,o.kt)("li",{parentName:"ul"},"Sub-Steering Committee governance structure (see this example)")))),(0,o.kt)("h2",{id:"transition-process"},"Transition Process"),(0,o.kt)("p",null,"The transition process MUST:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Organize, execute, and validate an election for replacing bootstrap members (they may re-run, but would need to be re-elected in order to stay)"),(0,o.kt)("li",{parentName:"ul"},"Define the term lengths for newly-elected individuals, ideally so not all members change out at once"),(0,o.kt)("li",{parentName:"ul"},"Provide documentation for the community and committee members sufficient to smoothly continue the established practices of the committee")),(0,o.kt)("h2",{id:"contribution-process"},"Contribution Process"),(0,o.kt)("p",null,"The committee MUST define a contribution process that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explains to potential contributors how/if they can add code to the repository/repositories"),(0,o.kt)("li",{parentName:"ul"},"Documents Workflow and management of pull requests"),(0,o.kt)("li",{parentName:"ul"},"Identifies who is authorized to commit or revert code"),(0,o.kt)("li",{parentName:"ul"},"Identifies automation is required for normal operations"),(0,o.kt)("li",{parentName:"ul"},"Defines how release decisions are made",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Who is authorized to release and when."),(0,o.kt)("li",{parentName:"ul"},"Frequency limits"))),(0,o.kt)("li",{parentName:"ul"},"Defines the documentation process"),(0,o.kt)("li",{parentName:"ul"},"Defines what Contributor License Agreement (CLA) process is required and how it is programmatically enforced before code is merged")),(0,o.kt)("h3",{id:"securityvulnerability-reporting-and-response-process"},"Security/Vulnerability Reporting and Response Process"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Identify and document where vulnerability reporting can be done to the project"),(0,o.kt)("li",{parentName:"ul"},"Identify and document who is responsible for receiving vulnerability reports"),(0,o.kt)("li",{parentName:"ul"},"Document process responsible parties go through to triage and determine veracity of vulnerability"),(0,o.kt)("li",{parentName:"ul"},"Document process for facilitating fix, generating release update, and communicating vulnerability and fix to public")),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,o.kt)("p",null,"The code of conduct MUST set expectations for contributors on expected behavior, as well as explaining the consequences of violating the terms of the code.\nThe ",(0,o.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org"},"Contributor Covenant")," has become the de facto standard for this language."),(0,o.kt)("p",null,"Members of the governance committee will be responsible for handling ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/code-of-conduct"},"Pyrsia code of conduct"),"\nviolations via ",(0,o.kt)("a",{parentName:"p",href:"mailto:conduct@openssf.org"},"conduct@openssf.org"),"."),(0,o.kt)("h2",{id:"project-communication-channels"},"Project Communication Channels"),(0,o.kt)("p",null,"What are the primary communications channels the project will adopt and manage?\nThis can include Slack, mailing lists, an organized Stack Overflow topic, or exist only in GitHub issues and pull requests."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mailing list: ",(0,o.kt)("a",{parentName:"li",href:"https://groups.google.com/g/pyrsia"},"groups.google.com/g/pyrsia"),"."),(0,o.kt)("li",{parentName:"ul"},"Slack: #pyrsia_bootstrap ",(0,o.kt)("a",{parentName:"li",href:"https://openssf.slack.com/archives/C02RC7Y5EUV"},"slack channel")," on the OpenSSF slack.")),(0,o.kt)("p",null,"Governance decisions, votes and questions should take place on the ",(0,o.kt)("a",{parentName:"p",href:"mailto:pyrsia@googlegroups.com"},"pyrsia@googlegroups.com")," mailing list."),(0,o.kt)("h2",{id:"permissions-and-access"},"Permissions and access"),(0,o.kt)("p",null,"Members of the governing board will be given access to these resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google Groups Administrators"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/pyrsia/teams/admins"},"GitHub Org")," Administrators")))}d.isMDXComponent=!0}}]);