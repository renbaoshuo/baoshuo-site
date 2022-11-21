import{j as a,T as v,a as e,L as P,P as g,c as R,B as m,S as k,b as E,H as O,d as A,e as D,u as H,f as B,g as T}from"./vendor.00e88377.js";function ue(){import("data:text/javascript,")}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const C="modulepreload",I=function(n){return"/"+n},y={},p=function(t,i,s){if(!i||i.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(i.map(o=>{if(o=I(o),o in y)return;y[o]=!0;const c=o.endsWith(".css"),S=c?'[rel="stylesheet"]':"";if(!!s)for(let d=r.length-1;d>=0;d--){const h=r[d];if(h.href===o&&(!c||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${S}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":C,c||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),c)return new Promise((d,h)=>{l.addEventListener("load",d),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},$=window.React.memo,j=n=>a(v,{...n,as:"footer",color:"fg.muted",fontSize:1,children:["Copyright \xA9 ",new Date().getFullYear()," Baoshuo"," \xB7 ",e(P,{muted:!0,href:"https://beian.miit.gov.cn",target:"_blank",rel:"noopener noreferer nofollow",children:"\u5180ICP\u590715024669\u53F7-3"})]}),M=$(j),N=window.React.memo,z=window.ReactRouterDOM.NavLink,F=[{name:"Projects",href:"/projects"}],_=({to:n,children:t,...i})=>e(g.Link,{...i,as:z,to:n,sx:s=>R({color:s.colors.fg.default,":hover":{color:s.colors.fg.muted},":focus":{color:s.colors.fg.default}},i.sx||{}),children:t}),X=n=>a(g,{...n,sx:t=>R({backgroundColor:t.colors.canvas.default},n.sx||{}),children:[e(g.Item,{children:e(_,{to:"/",children:"Home"})}),e(g.Item,{full:!0,children:F.map(({name:t,href:i})=>e(_,{to:i,sx:{marginRight:3},children:t},t))})]}),V=N(X);function q(n){return Array.isArray(n)?n.map(t=>t===null?null:-t):n===null?null:-n}const G=window.React.memo,U={none:0,condensed:3,normal:[3,null,null,4]},W=({sx:n={},padding:t="none"})=>e(m,{sx:i=>R({marginX:q(U[t]),display:"block",height:1,backgroundColor:"border.default",[`@media screen and (min-width: ${i.breakpoints[1]})`]:{marginX:"0 !important"}},n)}),x=G(W),Y=window.React.memo,K=()=>a(m,{height:400,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{gap:2},children:[e(k,{size:"large"}),e(v,{as:"div",children:"Loading..."})]}),J=Y(K),L=String.fromCharCode(98,97,111,115,104,117,111,46,114,101,110),b=String.fromCharCode(104,116,116,112,115,58,47,47)+L,Q=window.React,w=window.React.lazy,Z=window.React.Suspense,u=window.React.useEffect,ee=window.ReactRouterDOM.BrowserRouter,f=window.ReactRouterDOM.Route,te=window.ReactRouterDOM.Routes,oe=window.ReactRouterDOM.useLocation,ne=w(()=>p(()=>import("./home.1277409e.js"),["home.1277409e.js","vendor.00e88377.js","iconBase.9a00ca8e.js"])),re=w(()=>p(()=>import("./projects.4316c3be.js"),["projects.4316c3be.js","vendor.00e88377.js","iconBase.9a00ca8e.js"])),ie=w(()=>p(()=>import("./403.d999c132.js"),["403.d999c132.js","vendor.00e88377.js"])),se=w(()=>p(()=>import("./404.ad70fc61.js"),["404.ad70fc61.js","vendor.00e88377.js"])),{enableAutoPageviews:ce,enableAutoOutboundTracking:ae}=T({domain:"baoshuo.ren",apiHost:"https://stat.u.sb"}),le=()=>{const{colorScheme:n,theme:t}=H(),i=oe();return u(()=>ce(),[]),u(()=>ae(),[]),u(()=>{var s;document.documentElement.style.colorScheme=n,(s=document.querySelector('meta[name="theme-color"]'))==null||s.setAttribute("content",t.colors.canvas.default)},[n]),u(()=>{var s;(s=document.querySelector('link[rel="canonical"]'))==null||s.setAttribute("href",b+i.pathname)},[i]),u(()=>{window.location.host!==L&&(window.location.href=b)},[]),a(m,{display:"flex",flexDirection:"column",maxWidth:t.breakpoints[1],marginX:"auto",sx:{minHeight:"100vh","@supports (min-height: 100dvh)":{minHeight:"100dvh"}},children:[a(m,{paddingX:3,children:[e(V,{sx:{paddingX:0}}),e(x,{padding:"condensed"})]}),e(B,{padding:"condensed",rowGap:"condensed",columnGap:"condensed",containerWidth:"full",sx:{flexGrow:1},children:e(Z,{fallback:e(J,{}),children:a(te,{children:[e(f,{index:!0,element:e(ne,{})}),e(f,{path:"projects",element:e(re,{})}),e(f,{path:"403",element:e(ie,{})}),e(f,{path:"*",element:e(se,{})})]})})}),a(m,{paddingX:3,children:[e(x,{padding:"condensed"}),e(M,{paddingY:3})]})]})};E(document.getElementById("app")).render(a(Q.StrictMode,{children:[e(O,{defaultTitle:"Baoshuo (@renbaoshuo)",titleTemplate:"%s - Baoshuo (@renbaoshuo)"}),e(ee,{children:e(A,{colorMode:"auto",children:e(D,{bg:"canvas.default",style:{minHeight:"100vh"},children:e(le,{})})})})]}));export{ue as __vite_legacy_guard};
