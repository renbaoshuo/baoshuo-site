System.register(["./index-legacy.fcfd7119.js","./vendor-legacy.a033e0c1.js"],(function(e,t){"use strict";var n,o,r,i,l,a,c,s,h,d,u,m,g,f,p,w,b,v;return{setters:[e=>{n=e.j,o=e.a,r=e.F},e=>{i=e.B,l=e.g,a=e.h,c=e.L,s=e.i,h=e.T,d=e.k,u=e.C,m=e.M,g=e.K,f=e.u,p=e.R,w=e.l,b=e.m,v=e.P}],execute:function(){const t=window.React.memo,x=window.React.useEffect,k=window.React.useState,y=new Date(2006,5,4),S=new Date,M=S.getFullYear()-y.getFullYear()-Number(S.getMonth()-y.getMonth()<0||S.getMonth()-y.getMonth()==0&&S.getDate()<y.getDate()),z=t((()=>{const[e,t]=k(M);return x((()=>{const e=()=>{const e=new Date;t(e.getFullYear()-y.getFullYear()-Number(e.getMonth()-y.getMonth()<0||e.getMonth()-y.getMonth()==0&&e.getDate()<y.getDate()))};e();const n=setInterval(e,1e3);return()=>clearInterval(n)}),[]),n(i,{as:"section",children:[o(l,{as:"h2",sx:{fontSize:4},children:"About Me"}),n("p",{children:["I'm a ",e,"-year-old high school student. In my spare time, I am passionate about learning computer technology and actively participating in the open source community, which brings me a lot of fun."]}),o("p",{children:"In real life, I am a talkative person. Besides, I also enjoy listening to the radio, watching news and documentaries on TV."})]})})),I=window.React;function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},j.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=["size","color","stroke"],C=["size","color","stroke"],R=["size","color","stroke"],T=["size","color","stroke"];const B=window.React.memo,D=[{icon:function(e){var t=e.size,n=void 0===t?24:t,o=e.color,r=void 0===o?"currentColor":o,i=e.stroke,l=void 0===i?2:i,a=E(e,O);return I.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-github",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:l,stroke:r,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),I.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),I.createElement("path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"}))},text:"GitHub",href:"https://github.com/renbaoshuo"},{icon:function(e){var t=e.size,n=void 0===t?24:t,o=e.color,r=void 0===o?"currentColor":o,i=e.stroke,l=void 0===i?2:i,a=E(e,T);return I.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-twitter",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:l,stroke:r,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),I.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),I.createElement("path",{d:"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"}))},text:"Twitter",href:"https://twitter.com/renbaoshuo"},{icon:function(e){var t=e.size,n=void 0===t?24:t,o=e.color,r=void 0===o?"currentColor":o,i=e.stroke,l=void 0===i?2:i,a=E(e,C);return I.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-mastodon",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:l,stroke:r,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),I.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),I.createElement("path",{d:"M18.648 15.254c-1.816 1.763 -6.648 1.626 -6.648 1.626a18.262 18.262 0 0 1 -3.288 -.256c1.127 1.985 4.12 2.81 8.982 2.475c-1.945 2.013 -13.598 5.257 -13.668 -7.636l-.026 -1.154c0 -3.036 .023 -4.115 1.352 -5.633c1.671 -1.91 6.648 -1.666 6.648 -1.666s4.977 -.243 6.648 1.667c1.329 1.518 1.352 2.597 1.352 5.633s-.456 4.074 -1.352 4.944z"}),I.createElement("path",{d:"M12 11.204v-2.926c0 -1.258 -.895 -2.278 -2 -2.278s-2 1.02 -2 2.278v4.722m4 -4.722c0 -1.258 .895 -2.278 2 -2.278s2 1.02 2 2.278v4.722"}))},text:"Mastodon",href:"https://acg.mn/@baoshuo"},{icon:function(e){var t=e.size,n=void 0===t?24:t,o=e.color,r=void 0===o?"currentColor":o,i=e.stroke,l=void 0===i?2:i,a=E(e,R);return I.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-telegram",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:l,stroke:r,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),I.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),I.createElement("path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"}))},text:"Telegram",href:"https://t.me/renbaoshuo"}],H=B((()=>n(i,{as:"section",flex:"0 1 30%",children:[o(l,{as:"h2",sx:{fontSize:4},children:"Contact Me"}),o(i,{as:"ul",sx:{listStyle:"none",padding:0},display:["flex",,"block"],flexWrap:"wrap",alignItems:"center",children:D.map((({icon:e,text:t,href:n})=>o("li",{children:o(a,{as:"a",href:n,target:"_blank",rel:"me noopener noreferrer",variant:"invisible",leadingIcon:()=>o(e,{size:20,style:{display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}}),sx:{display:"block",textAlign:"left"},children:t})},t+n)))})]}))),L=(0,window.React.memo)((()=>n(i,{as:"section",flex:"0 0 70%",children:[o(l,{as:"h2",sx:{fontSize:4},children:"Who I am"}),n(i,{as:"ul",children:[n("li",{children:["Student and OIer at"," ",o(c,{href:"http://www.sjzezsyxx.com",target:"_blank",rel:"external nofollow noopener noreferrer",children:"The Shiyan School Attached To Shijiazhuang No.2 Middle School"})]}),n("li",{children:[o(c,{href:"https://hexo.io",target:"_blank",rel:"external nofollow noopener noreferrer",children:"Hexo"})," ","core team member"]}),n("li",{children:["Main developer of"," ",o(c,{href:"https://oier.baoshuo.dev/?utm_source=baoshuo.ren&utm_medium=who-i-am&utm_campaign=link",target:"_blank",rel:"external nofollow noopener noreferrer",children:"OIerDb NG"})]}),o("li",{children:"and more..."})]})]}))),N=window.React.memo,_=window.React.useEffect,F=window.React.useRef,W=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],A=N((()=>{const e=F(null);return _((()=>{const t=()=>{const t=new Date,n=new Date(t.getTime()+60*t.getTimezoneOffset()*1e3+288e5),o=t.getDate()!==n.getDate(),r=n.getHours().toString().padStart(2,"0"),i=n.getMinutes().toString().padStart(2,"0");e.current&&(e.current.innerHTML=`${o?W[n.getDay()-1]+" ":""}${r}:${i} (UTC+8)`)};t();const n=setInterval(t,1e3);return()=>clearInterval(n)}),[]),o(i,{as:"ul",m:0,p:0,sx:{listStyle:"none"},children:[{icon:d,text:"Shijiazhuang, China"},{icon:u,text:"UTC+8",ref:e,href:"https://time.is/UTC+8"},{icon:m,text:"i@baoshuo.ren",href:"mailto:i@baoshuo.ren"},{icon:g,text:"70F9 0A67 3FB1 AB68",href:"https://github.com/renbaoshuo.gpg"}].map((({icon:e,text:t,href:r,ref:l})=>n(i,{as:"li",fontSize:1,pt:"2px",children:[o(s,{icon:e,color:"fg.muted",sx:{float:"left",marginTop:1}}),r?o(c,{href:r,target:"_blank",sx:{paddingLeft:2,color:"fg.default"},hoverColor:"accent.fg",ref:null!=l?l:null,children:t}):o(h,{pl:2,ref:null!=l?l:null,children:t})]},t+r)))})})),U=window.React.memo,P=[{icon:p,text:"Blog",href:"https://blog.baoshuo.ren/?utm_medium=profile"},{icon:w,text:"OI Blog",href:"https://oi.baoshuo.ren/?utm_medium=profile"},{icon:b,text:"GitHub",href:"https://github.com/renbaoshuo"}],Y=U((()=>{const{theme:e}=f();return n(r,{children:[n(i,{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"flex-end",sx:{gap:e.space[2]},children:[n("div",{children:[n(l,{as:"h1",sx:{fontWeight:600,lineHeight:1.1,marginBottom:e.space[3],fontFamily:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"].join(", ")},children:[o(h,{fontSize:"0.85em",children:"Hello,"}),o("br",{}),"I'm"," ",o(h,{as:"mark",color:"accent.fg",bg:"transparent",sx:{position:"relative",background:`linear-gradient(180deg, transparent 75%, ${e.colors.accent.muted} 0)`},children:"Baoshuo"})]}),o(i,{mt:3,children:o(h,{color:"fg.muted",children:"Student / OIer / Developer"})})]}),o(A,{})]}),o(i,{mt:3,display:"flex",flexWrap:"wrap",sx:{gap:e.space[2]},children:P.map((({icon:e,text:t,href:n})=>o(a,{as:"a",leadingIcon:e,href:n,target:"_blank",sx:{display:"inline-block"},children:t},t+n)))})]})})),$=window.React.memo,G=window.React.useEffect;e("default",$((()=>(G((()=>{document.title="Baoshuo (@renbaoshuo)"}),[]),n(r,{children:[o(v.Header,{divider:"line",children:o(Y,{})}),n(v.Content,{children:[n(i,{display:["block","block","flex"],sx:{gap:3},children:[o(L,{}),o(H,{})]}),o(z,{})]})]})))))}}}));
