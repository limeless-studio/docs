"use strict";(self.webpackChunkcore_docs=self.webpackChunkcore_docs||[]).push([[1811],{2870:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(5893),t=n(1151);const a={},r="How to use",i={id:"root/Core Docs/BehaviourSystem/Usage",title:"How to use",description:"MonoBehaviour based",source:"@site/docs/root/Core Docs/BehaviourSystem/Usage.md",sourceDirName:"root/Core Docs/BehaviourSystem",slug:"/root/Core Docs/BehaviourSystem/Usage",permalink:"/docs/docs/root/Core Docs/BehaviourSystem/Usage",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/root/Core Docs/BehaviourSystem/Usage.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Behaviour System",permalink:"/docs/docs/root/Core Docs/BehaviourSystem/"},next:{title:"Projects",permalink:"/docs/docs/root/Projects/"}},c={},d=[{value:"<code>MonoBehaviour</code> based",id:"monobehaviour-based",level:3},{value:"Pure <code>C#</code> class",id:"pure-c-class",level:3}];function l(e){const s={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsxs)(s.h3,{id:"monobehaviour-based",children:[(0,o.jsx)(s.code,{children:"MonoBehaviour"})," based"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-csharp",children:'using Core;\nusing UnityEngine;\n\npublic class UnityClass : CustomBehaviour, IUpdate, ILateUpdate, IFixedUpdate\n{\n    public void OnUpdate()\n    {\n        Debug.Log("Called every frame, alongside other scripts\' Update message");\n    }\n\n    public void OnLateUpdate()\n    {\n        Debug.Log("Also called every frame, after update, alongside other scripts\' LateUpdate message");\n    }\n\n    public void OnFixedUpdate()\n    {\n        Debug.Log("Also called every fixed frame, alongside other scripts\' FixedUpdate message");\n    }\n}\n'})}),"\n",(0,o.jsxs)(s.h3,{id:"pure-c-class",children:["Pure ",(0,o.jsx)(s.code,{children:"C#"})," class"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-csharp",children:'using UnityEngine;\n\npublic class PureClass : IUpdate, ILateUpdate, IFixedUpdate\n{\n    public void OnUpdate()\n    {\n        Debug.Log("Called every frame, alongside other scripts\' Update message");\n    }\n\n    public void OnLateUpdate()\n    {\n        Debug.Log("Also called every frame, after update, alongside other scripts\' LateUpdate message");\n    }\n\n    public void OnFixedUpdate()\n    {\n        Debug.Log("Also called every fixed frame, alongside other scripts\' FixedUpdate message");\n    }\n\n    // call this when you want Updates to start running\n    public void StartUpdating()\n    {\n        this.Register();\n        // ^ alias for `UpdateManager.Instance.Register(this)`\n    }\n\n    // call this when necessary to stop the updates\n    public void StopUpdating()\n    {\n        this.Unregister();\n        // ^ alias for `BehaviourManager.Instance.Unregister(this)`\n    }\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>r});var o=n(7294);const t={},a=o.createContext(t);function r(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);