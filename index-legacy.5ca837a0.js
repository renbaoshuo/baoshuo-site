System.register(["./vendor-legacy.7dd060c7.js"],(function(e,t){"use strict";var n,o,i,r,a,c,d,l,u,s,h,m;return{setters:[e=>{n=e.j,o=e.B,i=e.a,r=e.S,a=e.T,c=e.L,d=e.c,l=e.b,u=e.d,s=e.u,h=e.P,m=e.e}],execute:function(){const e=function(e,t,n){return e()},w=(0,window.React.memo)((()=>n(o,{height:400,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{gap:2},children:[i(r,{size:"large"}),i(a,{as:"div",children:"Loading..."})]}))),g=(0,window.React.memo)((()=>n(a,{as:"footer",color:"fg.muted",fontSize:1,children:["Copyright © ",(new Date).getFullYear()," Baoshuo"," · ",i(c,{muted:!0,href:"https://beian.miit.gov.cn",target:"_blank",rel:"noopener noreferer nofollow",children:"冀ICP备15024669号-3"})]}))),f=String.fromCharCode(98,97,111,115,104,117,111,46,114,101,110),p=String.fromCharCode(104,116,116,112,115,58,47,47)+f,R=window.React,b=window.React.lazy,v=window.React.useEffect,y=window.React.Suspense,S=window.ReactRouterDOM.useLocation,x=window.ReactRouterDOM.BrowserRouter,C=window.ReactRouterDOM.Routes,D=window.ReactRouterDOM.Route,j=b((()=>e((()=>t.import("./home-legacy.3843a16a.js"))))),M=b((()=>e((()=>t.import("./404-legacy.ba8e802b.js"))))),{enableAutoPageviews:k,enableAutoOutboundTracking:O}=m({domain:"baoshuo.ren",apiHost:"https://stat.u.sb"}),A=()=>{const{colorScheme:e,theme:t}=s(),r=S();return v((()=>k()),[]),v((()=>O()),[]),v((()=>{var n;document.documentElement.style.colorScheme=e,null===(n=document.querySelector('meta[name="theme-color"]'))||void 0===n||n.setAttribute("content",t.colors.canvas.default)}),[e]),v((()=>{var e;null===(e=document.querySelector('link[rel="canonical"]'))||void 0===e||e.setAttribute("href",p+r.pathname)}),[r]),v((()=>{window.location.host!==f&&(window.location.href=p)}),[]),n(o,{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:3,maxWidth:t.breakpoints[1],margin:"0 auto",sx:{minHeight:"100vh","@supports (min-height: 100dvh)":{minHeight:"100dvh"}},children:[i(h,{padding:"none",rowGap:"condensed",columnGap:"condensed",children:i(y,{fallback:i(w,{}),children:n(C,{children:[i(D,{index:!0,element:i(j,{})}),i(D,{path:"*",element:i(M,{})})]})})}),i(h.Footer,{divider:"line",children:i(g,{})})]})};d(document.getElementById("app")).render(i(R.StrictMode,{children:i(x,{children:i(l,{colorMode:"auto",children:i(u,{bg:"canvas.default",style:{minHeight:"100vh"},children:i(A,{})})})})}))}}}));
