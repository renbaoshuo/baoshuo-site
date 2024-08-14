"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8521:function(e,t,n){n.r(t),n.d(t,{Content:function(){return I},LayoutInner:function(){return W},default:function(){return _}});var i=n(7437),o=n(2265),r=n(6463),a=n(1826),l=n(818),s=n(8782),d=n(8100),c=n(8152),h=n(3082),u=n(1131),m=n(9535),x=n.n(m),f=n(7178),p=n(5935),g=n(1444),b=n(3742),j=n(7138),v=n(3280),C=n(1746),w=n(7069);let k=[{items:[{name:"Home",href:"/",icon:l.tvw},{name:"Projects",href:"/projects/",icon:l.dNJ},{name:"Devices",href:"/devices/",icon:l.Uoy},{name:"Friends",href:"/friends/",icon:l.t0Z},{name:"Changelog",href:"/changelog/",icon:l.F_y}]},{title:"Social",items:[{name:"GitHub",href:"https://github.com/renbaoshuo",description:"@renbaoshuo",icon:l.g_Y},{name:"Mastodon",href:"https://acg.mn/@baoshuo",description:"@baoshuo@acg.mn",icon:p.Z}]}],Z=(0,o.memo)(e=>{let{href:t,...n}=e,r=(0,b.b9)(v.C),a=(0,o.useCallback)(()=>r(!1),[r]);return t&&(0,g.Z)(t)?(0,i.jsx)(s.S.LinkItem,{as:j.default,...n,href:t,prefetch:!1,onClick:a}):(0,i.jsx)(s.S.LinkItem,{target:"_blank",rel:"noreferrer noopener",href:t,...n,onClick:a})}),y=(0,o.memo)(e=>{let{name:t,href:n,icon:o,description:a}=e,l=(0,r.usePathname)();return(0,i.jsxs)(Z,{href:n,active:l===n,sx:{span:{fontWeight:"normal"}},children:[(0,i.jsx)(s.S.LeadingVisual,{children:(0,i.jsx)(o,{size:16})}),t,a&&(0,i.jsx)(s.S.Description,{children:a})]},n)}),S=(0,o.memo)(e=>(0,i.jsx)(s.S,{...e,children:k.map((e,t)=>{let{title:n,items:o}=e;return(0,i.jsx)(s.S.Group,{title:n,children:o.map(e=>(0,i.jsx)(y,{...e},e.name))},t)})})),A=(0,o.memo)(()=>{let e=(0,b.b9)(v.C),{theme:t}=(0,d.Fg)();return(0,i.jsxs)(f.m,{as:"header",sx:{position:"sticky",top:0,backgroundColor:"canvas.default",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"border.default",padding:2,paddingX:3,fontSize:3,fontWeight:700,...C.Z.style,zIndex:1},children:[(0,i.jsxs)(f.m.TitleArea,{children:[(0,i.jsx)(f.m.LeadingAction,{hidden:!1,sx:{paddingRight:1},children:(0,i.jsx)(w.Z,{style:{width:28,height:28}})}),(0,i.jsx)(f.m.Title,{hidden:!1,sx:{fontSize:3,fontWeight:700,overflow:"hidden",...C.Z.style},children:"Baoshuo"})]}),(0,i.jsx)(f.m.Actions,{hidden:!1,children:(0,i.jsx)(c.h,{icon:l.b0D,variant:"invisible",size:"small","aria-label":"Close",onClick:(0,o.useCallback)(()=>e(!1),[e]),sx:{["@media (min-width: ".concat(t.breakpoints[2],")")]:{display:"none"}}})})]})}),R=(0,o.memo)(()=>(0,i.jsxs)(a.Z,{as:"footer",sx:{position:"sticky",bottom:0,backgroundColor:"canvas.default",borderTopWidth:1,borderTopStyle:"solid",borderTopColor:"border.default",flexShrink:0,flexGrow:0,padding:2,color:"fg.muted",textAlign:"center",fontSize:1,...C.Z.style,zIndex:1},children:[(0,i.jsxs)(h.Z,{children:["Copyright \xa9 2019-",new Date().getFullYear()," Baoshuo"]}),(0,i.jsx)("br",{}),(0,i.jsx)(u.Z,{href:"https://beian.miit.gov.cn",target:"_blank",rel:"noopener noreferer nofollow",sx:{fontSize:0,color:"fg.muted",":hover":{textDecoration:"none",color:"accent.fg"}},children:"冀ICP备2024075581号-1"}),(0,i.jsx)("br",{}),(0,i.jsx)(u.Z,{href:"https://beian.mps.gov.cn/#/query/webSearch?code=13010202004136",rel:"noopener noreferer nofollow",sx:{fontSize:0,color:"fg.muted",":hover":{textDecoration:"none",color:"accent.fg"}},children:"冀公网安备13010202004136号"})]})),M=(0,o.memo)(()=>{let{theme:e}=(0,d.Fg)(),[t,n]=(0,b.KO)(v.C),r=(0,o.useCallback)(()=>n(!1),[n]);return(0,i.jsx)(a.Z,{sx:{opacity:t?1:0,pointerEvents:t?"auto":"none",transitionDuration:"0.2s",transitionTimingFunction:"transition.easeOutCubic",position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:98,backgroundColor:"neutral.muted",["@media (min-width: ".concat(e.breakpoints[2],")")]:{opacity:0,pointerEvents:"none"}},onClick:r})}),B=(0,o.memo)(e=>{let{sx:t={},...n}=e,{theme:o}=(0,d.Fg)(),r=(0,b.Dv)(v.C);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{...n,sx:x()(t,{display:"flex",flexDirection:"column",width:"75%",borderRightWidth:1,borderRightStyle:"solid",borderRightColor:"border.default",position:"relative",["@media (min-width: ".concat(o.breakpoints[0],")")]:{width:"50%"},["@media (min-width: ".concat(o.breakpoints[1],")")]:{width:"33.3%"},["@media (min-width: ".concat(o.breakpoints[2],")")]:{width:256},["@media (max-width: ".concat(o.breakpoints[2],")")]:{position:"absolute",top:0,left:0,zIndex:99,borderTopRightRadius:"12px",borderBottomRightRadius:"12px",boxShadow:r?"overlay.shadow":null,transitionDuration:"0.2s",transitionTimingFunction:"transition.easeOutCubic",transitionProperty:"transform",transform:r?"translateX(0)":"translateX(-100%)"}}),children:[(0,i.jsx)(A,{}),(0,i.jsx)(a.Z,{sx:{flexBasis:1,flexGrow:1,padding:2,paddingY:1,backgroundColor:"canvas.default"},children:(0,i.jsx)(S,{})}),(0,i.jsx)(R,{})]}),(0,i.jsx)(M,{})]})}),T=(0,o.memo)(e=>{let{title:t,magicTitle:n=!0,titleRef:r=null,scrollContainerRef:a=null,trailingAccessory:s=null}=e,h=(0,b.b9)(v.C),{theme:u}=(0,d.Fg)(),[m,x]=(0,o.useState)(200),[p,g]=(0,o.useState)(0),[j,w]=(0,o.useState)(0),[k,Z]=(0,o.useState)({top:0,bottom:0}),y=(0,o.useRef)(k),S=e=>{y.current=e,Z(e)},A=(0,o.useRef)(p),R=e=>{A.current=e,g(e)},M=(0,o.useRef)(j),B=e=>{M.current=e,w(e)},T=(0,o.useCallback)(()=>{if(!(null==a?void 0:a.current))return;let e=a.current.scrollTop/200;if(B(e>.12?.12:e),!(null==r?void 0:r.current)||!(null==y?void 0:y.current))return;let t=r.current.getBoundingClientRect().top,n=r.current.getBoundingClientRect().bottom,i=y.current,o=100*parseFloat((n/i.bottom).toFixed(2)),l=-1*parseFloat((t/i.top).toFixed(2));x(Math.min(Math.max(o,0),100)),R(Math.max(Math.min(l,1),-1))},[r,a]);return(0,o.useEffect)(()=>{if(!(null==a?void 0:a.current))return;let e=a.current;return e.addEventListener("scroll",T),()=>{e.removeEventListener("scroll",T)}},[r,a,T]),(0,o.useEffect)(()=>{(null==r?void 0:r.current)&&(null==a?void 0:a.current)&&(R(0),S({top:r.current.getBoundingClientRect().top,bottom:r.current.getBoundingClientRect().bottom}))},[r,a]),(0,i.jsxs)(f.m,{sx:{position:"sticky",top:0,backgroundColor:"baoshuo.canvas.backdrop",backdropFilter:"saturate(120%) blur(8px)",boxShadow:"0 1px 3px rgba(0, 0, 0, ".concat(j,")"),padding:2,paddingX:3,zIndex:10},children:[(0,i.jsxs)(f.m.TitleArea,{children:[(0,i.jsx)(f.m.LeadingAction,{hidden:!1,children:(0,i.jsx)(c.h,{icon:l.sOM,"aria-label":"Toggle sidebar",onClick:(0,o.useCallback)(()=>h(e=>!e),[h]),variant:"invisible",sx:{["@media (min-width: ".concat(u.breakpoints[2],")")]:{display:"none"}}})}),t&&(0,i.jsx)(f.m.Title,{hidden:!1,sx:{fontSize:3,fontWeight:700,overflow:"hidden",...C.Z.style,...n?{transform:"translateY(".concat(m,"%)"),opacity:p}:{}},children:t})]}),!!s&&(0,i.jsx)(f.m.Actions,{hidden:!1,children:s})]})}),F=(0,o.memo)((0,o.forwardRef)((e,t)=>{let{children:n}=e,l=(0,r.usePathname)(),s=(0,o.useRef)(null);return(0,o.useEffect)(()=>{s.current&&(s.current.scrollTop=0)},[l]),(0,o.useImperativeHandle)(t,()=>s.current,[]),(0,i.jsx)(a.Z,{sx:{"@supports (max-height: 100dvh)":{maxHeight:"100dvh"},maxHeight:"100vh",overflowY:"auto",position:"relative"},ref:s,children:n})})),z={full:"100%",medium:"768px",large:"1012px",xlarge:"1280px"},H=(0,o.memo)(e=>{var t;let{containerWidth:n="large",children:o}=e;return(0,i.jsx)(a.Z,{sx:{maxWidth:"string"==typeof n&&null!==(t=z[n])&&void 0!==t?t:n,marginX:"auto",paddingX:3,paddingTop:1,paddingBottom:3},children:o})}),I=(0,o.memo)(e=>{let{title:t,magicTitle:n=!0,titleRef:r,children:a,containerWidth:l,trailingAccessory:s}=e,d=(0,o.useRef)(null);return(0,i.jsxs)(F,{ref:d,children:[(0,i.jsx)(T,{title:t,magicTitle:n,titleRef:r,scrollContainerRef:d,trailingAccessory:s}),(0,i.jsx)(H,{containerWidth:l,children:a})]})}),L=(0,o.memo)(e=>{let{children:t}=e;return(0,i.jsx)(a.Z,{sx:{display:"flex",flexDirection:"row",width:"100%",height:"100%",minHeight:"100vh",position:"relative",zIndex:0,"@supports (max-height: 100dvh)":{maxHeight:"100dvh"}},children:t})}),D=(0,o.memo)(()=>(0,i.jsx)(B,{sx:{flexGrow:0,flexShrink:0,flexBasis:"auto",overflowY:"auto",height:"100%","@supports (max-height: 100dvh)":{maxHeight:"100dvh"},"@supports (min-height: 100dvh)":{minHeight:"100dvh"},maxHeight:"100vh",minHeight:"100vh"}})),E=(0,o.memo)(e=>{let{children:t}=e;return(0,i.jsx)(a.Z,{sx:{flexGrow:1,flexShrink:1,flexBasis:"0%",width:"100%"},children:t})}),W=H;var _=Object.assign((0,o.memo)(e=>{let{children:t}=e;return(0,i.jsxs)(L,{children:[(0,i.jsx)(D,{}),(0,i.jsx)(E,{children:t})]})}),{Left:D,Right:E,ContentContainer:I,ContentWrapper:F,TitleBar:T,Inner:H})},7069:function(e,t,n){var i=n(7437);let o=(0,n(2265).memo)(e=>(0,i.jsxs)("svg",{id:"Main",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:[(0,i.jsx)("path",{d:"M471,256A214.8122,214.8122,0,0,1,256,471a216.4337,216.4337,0,0,1-40.955-3.896A214.86,214.86,0,0,1,41,256,214.9809,214.9809,0,0,1,256,41a214.4584,214.4584,0,0,1,154.4137,65.4129q6.911,7.1214,13.146,14.8661c1.3337,1.6587,2.6413,3.3258,3.9229,5.0281A214.5854,214.5854,0,0,1,471,256Z",fill:"#5897d1"}),(0,i.jsx)("path",{d:"M419.2572,204.2572A163.1145,163.1145,0,0,1,256,367.5136a164.3664,164.3664,0,0,1-31.0985-2.9579A163.271,163.271,0,1,1,419.2572,204.2572Z",fill:"#9fc5e6"}),(0,i.jsx)("path",{d:"M418.8558,63.0971v44.65A10.5833,10.5833,0,0,1,408.2729,118.33H333.7074V52.5134h74.5655A10.584,10.584,0,0,1,418.8558,63.0971Z",fill:"#ff668c"}),(0,i.jsx)("path",{d:"M329.7492,458.0118A215.2574,215.2574,0,0,1,60.2534,345.0537l67.6679-90.0019a30.79,30.79,0,0,1,49.2216,0l38.5328,51.2574Z",fill:"#343a6e"}),(0,i.jsx)("path",{d:"M408.6937,77.1989a8.2229,8.2229,0,0,1-8.2229,8.223H371.8716a8.2271,8.2271,0,0,0,0,16.4542h9.8724a8.2271,8.2271,0,1,1,0,16.4542H333.7065V52.5134h46.87a8.2238,8.2238,0,0,1,8.2229,8.2313,8.2246,8.2246,0,0,0,8.2313,8.2229h3.44A8.23,8.23,0,0,1,408.6937,77.1989Z",fill:"#ef487d"}),(0,i.jsx)("path",{d:"M328.6658,41.0008h0a7.2391,7.2391,0,0,0-7.2394,7.24V230.2126h14.4789V48.24A7.24,7.24,0,0,0,328.6658,41.0008Z",fill:"#f9df73"}),(0,i.jsx)("path",{d:"M454.3619,339.0513q-2.87,6.8317-6.1872,13.4266A215.3468,215.3468,0,0,1,215.045,467.104a214.1378,214.1378,0,0,1-82.1653-34.83L299.2368,211.0171a36.8115,36.8115,0,0,1,58.8571,0Z",fill:"#484b7f"}),(0,i.jsx)("path",{d:"M328.67,196.3173c-5.6429,0-11.285,4.8972-15.0584,14.699L215.045,467.104a213.7775,213.7775,0,0,1-82.1653-34.83L299.2461,211.0171A36.578,36.578,0,0,1,328.67,196.3173Z",fill:"#343a6e"}),(0,i.jsx)("path",{d:"M448.1747,352.4779A215.3468,215.3468,0,0,1,215.045,467.104a213.4209,213.4209,0,0,1-59.4366-20.9382L264.82,337.7974c-17.0068,44.185,31.1885,55.6372,81.2087,37.2085C391.9237,358.0939,396.8116,340.0692,448.1747,352.4779Z",fill:"#343a6e"}),(0,i.jsx)("path",{d:"M215.6766,306.31c-25.6245.886-50.9072,16.0419-67.0884,16.0419-25.0106,0-54.584-22.1845-20.6661-67.2992a30.79,30.79,0,0,1,49.2216,0Z",fill:"#484b7f"})]}));t.Z=o},3280:function(e,t,n){n.d(t,{C:function(){return o},P:function(){return r}});var i=n(9910);let o=(0,i.cn)(!1),r=(0,i.cn)({})},1746:function(e,t,n){var i=n(5890),o=n.n(i);t.Z=o()}}]);