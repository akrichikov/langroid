(self.webpackJsonp=self.webpackJsonp||[]).push([[36],{2254:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0),a=r(3),o=r(142),c=r(814);const l=({error:e})=>{const{actions:t}=Object(a.e)(),r=s(e)?e.code:404;return t.router.forceStatusCode(r),500===r?n.createElement(c.a,null):n.createElement(o.a,null)},s=e=>!(!e||"object"!=typeof e||!("code"in e))&&"number"==typeof e.code},2418:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),a=r(2),o=r(3);const c=({branchNodeId:e,uri:t,projectSlug:r,pause:c})=>{var l,s,u;const{effects:d,state:i}=Object(o.e)(),[{data:g,error:p,fetching:m}]=Object(a.Z)({variables:{uri:t,workspaceSlug:null===(l=i.workspaces.currentWorkspace)||void 0===l?void 0:l.slug,projectSlug:r},pause:c}),[{data:h,error:b,fetching:f}]=Object(a.mb)({variables:{branchNodeId:e,maxDepth:20},pause:c}),j=(null==g?void 0:g.branchNodes)?null==g?void 0:g.branchNodes[0]:void 0,v=null==h?void 0:h.sl_sl_node_edges.reduce((e,t)=>e.concat(t.toBranchNode.changes),[]),E=null===(u=null===(s=null==h?void 0:h.sl_sl_node_edges_aggregate.aggregate)||void 0===s?void 0:s.max)||void 0===u?void 0:u.depth;n.useEffect(()=>{20===E&&d.reporter.log({event:"changelog_max_depth_reached",payload:{branch_node_id:e}})},[E,d.reporter,e]);const y=p||b;return{changes:[...(null==j?void 0:j.changes)||[],...v||[]],error:y,fetching:m||f}}},2419:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),a=r(12),o=r(0);const c=o.memo(({changes:e=[]})=>{if(!e||!e.length)return o.createElement(n.e,{color:"muted"},"No changes for this resource.");const t=Object(a.orderBy)(e,[e=>new Date(e.createdAt).getTime()],["desc"]),r=Object(a.groupBy)(t,e=>new Date(e.createdAt).toDateString());return o.createElement(n.Y,{divider:!0,spacing:4},Object.keys(r).map((e,t)=>o.createElement(n.Y,{key:t,spacing:2,"data-test":"changelog-group"},o.createElement(n.e,{fontWeight:"bold"},e),r[e].map((e,t)=>o.createElement(n.n,{key:t,fontSize:"sm",justify:"between","data-test":"changelog"},o.createElement(n.e,{flex:1},e.message),o.createElement(n.e,{fontWeight:"semibold",textTransform:"lowercase"},e.semver))))))})},2918:function(e,t,r){"use strict";r.r(t);var n=r(22),a=r(17),o=r(20),c=r(275),l=r(1),s=r(0),u=r(218),d=r(97),i=r(1113),g=r(579),p=r.n(g),m=r(2),h=r(5),b=r(2418),f=r(3),j=r(813),v=r(2419);const E=({branchNodeId:e,nodeType:t,nodeUri:r,projectSlug:n,dialogLocation:a})=>{const{isOpen:o,open:c,close:u}=Object(l.jb)(),{log:d}=Object(h.m)(),i="true"!==window.localStorage.getItem("feedback"),{changes:g,error:p,fetching:m}=Object(b.a)({branchNodeId:e,uri:r,projectSlug:n,pause:!o});return s.useEffect(()=>{o&&!m&&d({event:"changelog_dialog_opened",payload:{location:a,node_type:t,changes_count:null==g?void 0:g.length}})},[o,t,m,g,a,d]),s.createElement(s.Fragment,null,s.createElement(l.f,{"data-test":"changelog-btn",size:"sm",icon:s.createElement(l.q,{icon:["fas","exchange-alt"]}),onPress:c},"Changelog"),s.createElement(l.A,{isOpen:o,onClose:u,title:"Changelog",footer:i?void 0:s.createElement(y,{nodeType:t,changesCount:g.length})},p?s.createElement(j.a,{error:p}):s.createElement(v.a,{changes:g})))};function y({nodeType:e,changesCount:t}){const{reporter:r}=Object(f.c)(),[n,a]=s.useState(!1);return n?s.createElement(l.e,null,"Thank you for your feedback!"):s.createElement(l.o,{spacing:4},s.createElement(l.e,null,"Do you find this information useful?"),s.createElement(l.f,{icon:s.createElement(l.q,{icon:["far","thumbs-up"]}),onPress:()=>{a(!0),r.log({event:"feedback_given",payload:{target:"changelog_dialog",value:"positive",node_type:e,changes_count:t}}),window.localStorage.setItem("feedback",JSON.stringify(!0))}}),s.createElement(l.f,{icon:s.createElement(l.q,{icon:["far","thumbs-down"]}),onPress:()=>{a(!0),r.log({event:"feedback_given",payload:{target:"changelog_dialog",value:"negative",node_type:e,changes_count:t}}),window.localStorage.setItem("feedback",JSON.stringify(!0))}}))}var _=r(1074);const S=s.memo(({projectSlug:e,node:t,hideChangelogButton:r,nodeContentProps:n})=>{const{currentWorkspace:a}=Object(h.v)(),{jwt:g,isLoggedIn:p}=Object(h.b)(),{danger:b,info:f}=Object(h.i)(),j=null==a?void 0:a.showTryit,v=null==a?void 0:a.showTryitMockServer,y=t.type===m.n.Article;return s.createElement(d.c,{value:{img:Object(_.a)(t.project_id,t.branch_id,t.uri)}},s.createElement(l.e,{"data-test":"project-page",px:20,py:16,mx:"auto",w:"full",style:{maxWidth:1500}},!r&&p&&!y&&e&&s.createElement(l.n,{justify:"end"},s.createElement(E,{branchNodeId:t.branch_node_id,nodeType:t.type,nodeUri:t.uri,projectSlug:e,dialogLocation:"project_doc_page"})),s.createElement(c.b,Object.assign({},n,{hideTryIt:!j,hideMocking:!v,Link:o.a,node:t,onExportRequest:async e=>{var r;try{let r;if(f({message:"Export started. Please wait."}),r="bundled"===e?await fetch(t.links.export_bundled_file_url,{headers:Object.assign({Accept:"*/*"},g?{Authorization:"Bearer "+g}:{})}):await fetch(t.links.export_original_file_url,{}),!r.ok)throw await r.json();const n=document.createElement("a");n.href=URL.createObjectURL(await r.blob()),n.setAttribute("download",Object(i.a)(t.uri)),n.click()}catch(e){let t="There was a problem completing your export.";Object(u.f)(e)?t="Too many requests for export."+(e.retry_after?` Try again after ${e.retry_after} second(s).`:""):Object(u.d)(e)?t=null!==(r=e.detail)&&void 0!==r?r:e.title:"string"==typeof e&&(t=e),b({message:t})}}}))))},p.a);var w=r(1112),O=r(1077),k=r(2254),I=r(142),N=r(581),T=r(286),x=r(16);const B=({projectSlug:e,branchSlug:t,nodeUri:r})=>{const{branchNode:a,fetching:c,error:l}=function({projectSlug:e,branchSlug:t,nodeUri:r}){const{state:n}=Object(f.e)(),a=!x.h||!n.metadata.dataBootstrapComplete,o=n.workspaces.currentWorkspaceId,[c]=Object(m.X)({pause:a||!t,variables:{workspaceId:o,projectSlug:e,branchSlug:t,uri:"/"+r}}),[l]=Object(m.Y)({pause:Boolean(a||t),variables:{workspaceId:o,projectSlug:e,uri:"/"+r}}),{data:s,error:u}=t?c:l;return{branchNode:(null==s?void 0:s.branchNodes)?s.branchNodes[0]:void 0,fetching:!s&&!u,error:u}}({projectSlug:e,branchSlug:t,nodeUri:r});if(a){const e=Object(T.a)({type:a.snapshot.type,nodeId:a.nodeId,stableId:a.stable_id,name:a.name,slug:a.slug});return s.createElement(o.d,{to:e,noThrow:!0})}return c?s.createElement(n.e,null):l?s.createElement(j.a,{error:l}):s.createElement(I.a,null)};const C=({projectId:e,projectSlug:t,projectName:r,nodeSlug:l,branchSlug:u,defaultBranchSlug:d})=>{var i;const{state:g,effects:p}=Object(f.e)(),{state:m}=Object(o.i)(),h=null===(i=g.workspaces.currentWorkspace)||void 0===i?void 0:i.slug,b=Object(a.b)("prj",e),{data:j,isLoading:v,error:E}=Object(c.g)({nodeSlug:l||"",projectId:b,branchSlug:u});s.useEffect(()=>{p.reporter.log({event:"project_docs_viewed",payload:{project:t,workspace_slug:h}})},[p.reporter,h,t]);let y=null;if(E){if(null==m?void 0:m.branchSwitch)return s.createElement(o.d,{to:U(t,u),replace:!0,noThrow:!0});y=E instanceof c.c&&404===E.code?s.createElement(L,null):s.createElement(k.a,{error:E})}else if(v)y=s.createElement(n.e,null);else if(j){if((null==j?void 0:j.slug)&&l!==j.slug)return s.createElement(o.d,{to:"./"+j.slug,replace:!0,noThrow:!0});y=s.createElement(S,{projectSlug:t,branchSlug:null!=u?u:d,node:j})}else y=s.createElement(L,null);return s.createElement(s.Fragment,null,j&&s.createElement(O.a,{projectName:r,nodeName:j.title,nodeSummary:j.summary}),y)};function U(e,t){const r="/docs/"+encodeURIComponent(e);return t?`${r}/branches/${encodeURIComponent(t)}`:r}const L=()=>{var e;const{state:t}=Object(f.e)();return s.createElement(I.a,null,t.auth.isLoggedIn?"This page does not exist or you do not have sufficient permission":(null===(e=t.workspaces.currentWorkspace)||void 0===e?void 0:e.hideSignIn)?null:s.createElement(s.Fragment,null,"Are you a member of the workspace? ",s.createElement(o.a,{to:"/auth"},"Login here")))};t.default=({projectId:e,projectSlug:t,projectName:r,nodeSlug:n,branchSlug:a,defaultBranchSlug:o})=>{var c;const{state:u}=Object(f.e)(),d=null===(c=u.workspaces.currentWorkspace)||void 0===c?void 0:c.slug;Object(N.a)({event:"docs_viewed_from_daily_digest",payload:{project_slug:t,workspace_slug:d}},"daily_summary");const i=u.flags.isFlagEnabled("appcues_launchpad");return s.createElement(s.Fragment,null,s.createElement(l.n,{w:"full",borderB:!0,className:"h-TopNav",pl:10,pr:4,alignItems:"center"},s.createElement(l.e,{flexGrow:!0},s.createElement(w.a,{branchSlug:a,projectId:e,placeholder:`Search ${r||""}...`})),i&&s.createElement(l.e,{className:"larger-appcues-icon",id:"appcues-launchpad"})),Object(T.c)(n)?s.createElement(C,{projectId:e,projectSlug:t,projectName:r,nodeSlug:n,branchSlug:a,defaultBranchSlug:o}):s.createElement(B,{projectSlug:t,nodeUri:n,branchSlug:a}))}}}]);