"use strict";(self.webpackChunkcore_docs=self.webpackChunkcore_docs||[]).push([[9956],{9207:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=s(5893),t=s(1151);const a={},r="How to use",i={id:"root/CoreDocs/BehaviourSystem/Usage",title:"How to use",description:"MonoBehaviour based",source:"@site/docs/root/CoreDocs/BehaviourSystem/Usage.md",sourceDirName:"root/CoreDocs/BehaviourSystem",slug:"/root/CoreDocs/BehaviourSystem/Usage",permalink:"/docs/docs/root/CoreDocs/BehaviourSystem/Usage",draft:!1,unlisted:!1,editUrl:"https://github.com/limeless-studio/docs/tree/main/docs/root/CoreDocs/BehaviourSystem/Usage.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Managed Behaviour System",permalink:"/docs/docs/root/CoreDocs/BehaviourSystem/"},next:{title:"Plugins",permalink:"/docs/docs/root/CoreDocs/Plugins/"}},d={},c=[{value:"<code>MonoBehaviour</code> based",id:"monobehaviour-based",level:3},{value:"Pure <code>C#</code> class",id:"pure-c-class",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsxs)(n.h3,{id:"monobehaviour-based",children:[(0,o.jsx)(n.code,{children:"MonoBehaviour"})," based"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'using Core;\nusing UnityEngine;\n\npublic class UnityClass : CustomBehaviour, IUpdate, ILateUpdate, IFixedUpdate\n{\n    public void OnUpdate()\n    {\n        Debug.Log("Called every frame, alongside other scripts\' Update message");\n    }\n\n    public void OnLateUpdate()\n    {\n        Debug.Log("Also called every frame, after update, alongside other scripts\' LateUpdate message");\n    }\n\n    public void OnFixedUpdate()\n    {\n        Debug.Log("Also called every fixed frame, alongside other scripts\' FixedUpdate message");\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"pure-c-class",children:["Pure ",(0,o.jsx)(n.code,{children:"C#"})," class"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'using UnityEngine;\n\npublic class PureClass : IUpdate, ILateUpdate, IFixedUpdate\n{\n    public void OnUpdate()\n    {\n        Debug.Log("Called every frame, alongside other scripts\' Update message");\n    }\n\n    public void OnLateUpdate()\n    {\n        Debug.Log("Also called every frame, after update, alongside other scripts\' LateUpdate message");\n    }\n\n    public void OnFixedUpdate()\n    {\n        Debug.Log("Also called every fixed frame, alongside other scripts\' FixedUpdate message");\n    }\n\n    // call this when you want Updates to start running\n    public void StartUpdating()\n    {\n        this.Register();\n        // ^ alias for `UpdateManager.Instance.Register(this)`\n    }\n\n    // call this when necessary to stop the updates\n    public void StopUpdating()\n    {\n        this.Unregister();\n        // ^ alias for `BehaviourManager.Instance.Unregister(this)`\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var o=s(7294);const t={},a=o.createContext(t);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);