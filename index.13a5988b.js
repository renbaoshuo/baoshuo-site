import{j as u,B as w,a as t,S as v,T as y,L,c as b,b as O,d as x,u as E,P as f,e as P}from"./vendor.3b0bad8d.js";function K(){import("data:text/javascript,")}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const A="modulepreload",D=function(c){return"/"+c},p={},m=function(n,i,r){return!i||i.length===0?n():Promise.all(i.map(e=>{if(e=D(e),e in p)return;p[e]=!0;const o=e.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":A,o||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),o)return new Promise((_,S)=>{s.addEventListener("load",_),s.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},C=window.React.memo,T=()=>u(w,{height:400,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{gap:2},children:[t(v,{size:"large"}),t(y,{as:"div",children:"Loading..."})]}),k=C(T),B=window.React.memo,H=()=>u(y,{as:"footer",color:"fg.muted",fontSize:1,children:["Copyright \xA9 ",new Date().getFullYear()," Baoshuo"," \xB7 ",t(L,{muted:!0,href:"https://beian.miit.gov.cn",target:"_blank",rel:"noopener noreferer nofollow",children:"\u5180ICP\u590715024669\u53F7-3"})]}),F=B(H),R=String.fromCharCode(98,97,111,115,104,117,111,46,114,101,110),g=String.fromCharCode(104,116,116,112,115,58,47,47)+R,I=window.React,h=window.React.lazy,l=window.React.useEffect,M=window.React.Suspense,$=window.ReactRouterDOM.useLocation,j=window.ReactRouterDOM.BrowserRouter,U=window.ReactRouterDOM.Routes,d=window.ReactRouterDOM.Route,q=h(()=>m(()=>import("./home.de872f8a.js"),["home.de872f8a.js","vendor.3b0bad8d.js"])),z=h(()=>m(()=>import("./403.4f7a9bff.js"),["403.4f7a9bff.js","vendor.3b0bad8d.js"])),N=h(()=>m(()=>import("./404.1007fa5f.js"),["404.1007fa5f.js","vendor.3b0bad8d.js"])),{enableAutoPageviews:V,enableAutoOutboundTracking:G}=P({domain:"baoshuo.ren",apiHost:"https://stat.u.sb"}),W=()=>{const{colorScheme:c,theme:n}=E(),i=$();return l(()=>V(),[]),l(()=>G(),[]),l(()=>{var r;document.documentElement.style.colorScheme=c,(r=document.querySelector('meta[name="theme-color"]'))==null||r.setAttribute("content",n.colors.canvas.default)},[c]),l(()=>{var r;(r=document.querySelector('link[rel="canonical"]'))==null||r.setAttribute("href",g+i.pathname)},[i]),l(()=>{window.location.host!==R&&(window.location.href=g)},[]),u(w,{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:3,maxWidth:n.breakpoints[1],margin:"0 auto",sx:{minHeight:"100vh","@supports (min-height: 100dvh)":{minHeight:"100dvh"}},children:[t(f,{padding:"none",rowGap:"condensed",columnGap:"condensed",children:t(M,{fallback:t(k,{}),children:u(U,{children:[t(d,{index:!0,element:t(q,{})}),t(d,{path:"403",element:t(z,{})}),t(d,{path:"*",element:t(N,{})})]})})}),t(f.Footer,{divider:"line",children:t(F,{})})]})};b(document.getElementById("app")).render(t(I.StrictMode,{children:t(j,{children:t(O,{colorMode:"auto",children:t(x,{bg:"canvas.default",style:{minHeight:"100vh"},children:t(W,{})})})})}));export{K as __vite_legacy_guard};