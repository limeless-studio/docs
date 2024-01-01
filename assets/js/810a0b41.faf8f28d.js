"use strict";(self.webpackChunkcore_docs=self.webpackChunkcore_docs||[]).push([[9956],{9207:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var n=s(5893),o=s(1151);const t={},a="How to use",i={id:"root/CoreDocs/BehaviourSystem/Usage",title:"How to use",description:"MonoBehaviour based",source:"@site/docs/root/CoreDocs/BehaviourSystem/Usage.md",sourceDirName:"root/CoreDocs/BehaviourSystem",slug:"/root/CoreDocs/BehaviourSystem/Usage",permalink:"/docs/docs/root/CoreDocs/BehaviourSystem/Usage",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/root/CoreDocs/BehaviourSystem/Usage.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Behaviour System",permalink:"/docs/docs/root/CoreDocs/BehaviourSystem/"},next:{title:"Projects",permalink:"/docs/docs/root/Projects/"}},c={},d=[{value:"<code>MonoBehaviour</code> based",id:"monobehaviour-based",level:3},{value:"Pure <code>C#</code> class",id:"pure-c-class",level:3}];function l(e){const r={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"how-to-use",children:"How to use"}),"\n",(0,n.jsxs)(r.h3,{id:"monobehaviour-based",children:[(0,n.jsx)(r.code,{children:"MonoBehaviour"})," based"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csharp",children:'using Core;\r\nusing UnityEngine;\r\n\r\npublic class UnityClass : CustomBehaviour, IUpdate, ILateUpdate, IFixedUpdate\r\n{\r\n    public void OnUpdate()\r\n    {\r\n        Debug.Log("Called every frame, alongside other scripts\' Update message");\r\n    }\r\n\r\n    public void OnLateUpdate()\r\n    {\r\n        Debug.Log("Also called every frame, after update, alongside other scripts\' LateUpdate message");\r\n    }\r\n\r\n    public void OnFixedUpdate()\r\n    {\r\n        Debug.Log("Also called every fixed frame, alongside other scripts\' FixedUpdate message");\r\n    }\r\n}\n'})}),"\n",(0,n.jsxs)(r.h3,{id:"pure-c-class",children:["Pure ",(0,n.jsx)(r.code,{children:"C#"})," class"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csharp",children:'using UnityEngine;\r\n\r\npublic class PureClass : IUpdate, ILateUpdate, IFixedUpdate\r\n{\r\n    public void OnUpdate()\r\n    {\r\n        Debug.Log("Called every frame, alongside other scripts\' Update message");\r\n    }\r\n\r\n    public void OnLateUpdate()\r\n    {\r\n        Debug.Log("Also called every frame, after update, alongside other scripts\' LateUpdate message");\r\n    }\r\n\r\n    public void OnFixedUpdate()\r\n    {\r\n        Debug.Log("Also called every fixed frame, alongside other scripts\' FixedUpdate message");\r\n    }\r\n\r\n    // call this when you want Updates to start running\r\n    public void StartUpdating()\r\n    {\r\n        this.Register();\r\n        // ^ alias for `UpdateManager.Instance.Register(this)`\r\n    }\r\n\r\n    // call this when necessary to stop the updates\r\n    public void StopUpdating()\r\n    {\r\n        this.Unregister();\r\n        // ^ alias for `BehaviourManager.Instance.Unregister(this)`\r\n    }\r\n}\n'})})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>a});var n=s(7294);const o={},t=n.createContext(o);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);