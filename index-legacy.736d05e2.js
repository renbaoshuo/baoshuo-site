System.register(["./vendor-legacy.6a11db27.js"],(function(e,t){"use strict";var n,o,i,r,c,a,d,l,s,u,h,m;return{setters:[e=>{n=e.j,o=e.B,i=e.a,r=e.S,c=e.T,a=e.L,d=e.c,l=e.b,s=e.d,u=e.u,h=e.P,m=e.e}],execute:function(){const e=function(e,t,n){return e()},w=(0,window.React.memo)((()=>n(o,{height:400,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{gap:2},children:[i(r,{size:"large"}),i(c,{as:"div",children:"Loading..."})]}))),g=(0,window.React.memo)((()=>n(c,{as:"footer",color:"fg.muted",fontSize:1,children:["Copyright © ",(new Date).getFullYear()," Baoshuo"," · ",i(a,{muted:!0,href:"https://beian.miit.gov.cn",target:"_blank",rel:"noopener noreferer nofollow",children:"冀ICP备15024669号-3"})]}))),p=String.fromCharCode(98,97,111,115,104,117,111,46,114,101,110),f=String.fromCharCode(104,116,116,112,115,58,47,47)+p,b=window.React,R=window.React.lazy,v=window.React.useEffect,y=window.React.Suspense,S=window.ReactRouterDOM.useLocation,x=window.ReactRouterDOM.BrowserRouter,C=window.ReactRouterDOM.Routes,j=window.ReactRouterDOM.Route,D=R((()=>e((()=>t.import("./home-legacy.2c1b35c2.js"))))),M=R((()=>e((()=>t.import("./403-legacy.b86ce6e6.js"))))),k=R((()=>e((()=>t.import("./404-legacy.6a3e1eac.js"))))),{enableAutoPageviews:O,enableAutoOutboundTracking:A}=m({domain:"baoshuo.ren",apiHost:"https://stat.u.sb"}),B=()=>{const{colorScheme:e,theme:t}=u(),r=S();return v((()=>O()),[]),v((()=>A()),[]),v((()=>{var n;document.documentElement.style.colorScheme=e,null===(n=document.querySelector('meta[name="theme-color"]'))||void 0===n||n.setAttribute("content",t.colors.canvas.default)}),[e]),v((()=>{var e;null===(e=document.querySelector('link[rel="canonical"]'))||void 0===e||e.setAttribute("href",f+r.pathname)}),[r]),v((()=>{window.location.host!==p&&(window.location.href=f)}),[]),n(o,{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:3,maxWidth:t.breakpoints[1],margin:"0 auto",sx:{minHeight:"100vh","@supports (min-height: 100dvh)":{minHeight:"100dvh"}},children:[i(h,{padding:"none",rowGap:"condensed",columnGap:"condensed",children:i(y,{fallback:i(w,{}),children:n(C,{children:[i(j,{index:!0,element:i(D,{})}),i(j,{path:"403",element:i(M,{})}),i(j,{path:"*",element:i(k,{})})]})})}),i(h.Footer,{divider:"line",children:i(g,{})})]})};d(document.getElementById("app")).render(i(b.StrictMode,{children:i(x,{children:i(l,{colorMode:"auto",children:i(s,{bg:"canvas.default",style:{minHeight:"100vh"},children:i(B,{})})})})}))}}}));
