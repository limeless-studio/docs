"use strict";(self.webpackChunkcore_docs=self.webpackChunkcore_docs||[]).push([[9],{1271:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var o=s(5893),n=s(1151);const r={},i="Behaviour System",d={id:"root/CoreDocs/BehaviourSystem/BehaviourSystem",title:"Behaviour System",description:"Features",source:"@site/docs/root/CoreDocs/BehaviourSystem/BehaviourSystem.md",sourceDirName:"root/CoreDocs/BehaviourSystem",slug:"/root/CoreDocs/BehaviourSystem/",permalink:"/docs/docs/root/CoreDocs/BehaviourSystem/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/root/CoreDocs/BehaviourSystem/BehaviourSystem.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Validator Attributes",permalink:"/docs/docs/root/CoreDocs/Attributes/ValidatorAttributes"},next:{title:"How to use",permalink:"/docs/docs/root/CoreDocs/BehaviourSystem/Usage"}},c={},a=[{value:"Features",id:"features",level:2},{value:"To be implemented",id:"to-be-implemented",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"behaviour-system",children:"Behaviour System"}),"\n",(0,o.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Uses UpdateManager to call objects' ",(0,o.jsx)(t.code,{children:"OnUpdate"}),", ",(0,o.jsx)(t.code,{children:"OnFixedUpdate"}),", and ",(0,o.jsx)(t.code,{children:"OnLateUpdate"})," methods, bypassing Unity's ",(0,o.jsx)(t.code,{children:"MonoBehaviour"})," update system."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Both ",(0,o.jsx)(t.code,{children:"MonoBehaviour"})," and pure C# classes are supported, just implement ",(0,o.jsx)(t.code,{children:"IUpdate"}),", ",(0,o.jsx)(t.code,{children:"IFixedUpdate"})," and/or ",(0,o.jsx)(t.code,{children:"ILateUpdate"})," interfaces and register the object to be updated using ",(0,o.jsx)(t.code,{children:"Register()"})," extension method."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Remember to unregister the object using ",(0,o.jsx)(t.code,{children:"Unregister()"})," extension method when necessary."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Inherit ",(0,o.jsx)(t.code,{children:"CustomBehaviour"})," instead of ",(0,o.jsx)(t.code,{children:"MonoBehaviour"})," to automatically register and unregister the object in their ",(0,o.jsx)(t.code,{children:"OnEnable"})," and ",(0,o.jsx)(t.code,{children:"OnDisable"})," messaged. This class still needs to implement ",(0,o.jsx)(t.code,{children:"IUpdate"}),", ",(0,o.jsx)(t.code,{children:"IFixedUpdate"})," and/or ",(0,o.jsx)(t.code,{children:"ILateUpdate"})," interfaces for any of its methods to be called."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"to-be-implemented",children:"To be implemented"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Manage execution order of registered objects."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var o=s(7294);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);