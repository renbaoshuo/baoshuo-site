import{j as n,B as i,a as e,h as m,i as p,L as d,k as I,T as u,l as v,C as y,M,K as S,u as T,F as b,R as B,m as R,n as C,f}from"./vendor.00e88377.js";import{G as g}from"./iconBase.9a00ca8e.js";const j=window.React.memo,z=window.React.useEffect,D=window.React.useState,l=new Date(2006,5,4),h=new Date,H=h.getFullYear()-l.getFullYear()-Number(h.getMonth()-l.getMonth()<0||h.getMonth()-l.getMonth()===0&&h.getDate()<l.getDate()),$=()=>{const[t,c]=D(H);return z(()=>{const o=()=>{const a=new Date;c(a.getFullYear()-l.getFullYear()-Number(a.getMonth()-l.getMonth()<0||a.getMonth()-l.getMonth()===0&&a.getDate()<l.getDate()))};o();const s=setInterval(o,1e3);return()=>clearInterval(s)},[]),n(i,{as:"section",children:[e(m,{as:"h2",sx:{fontSize:4},children:"About Me"}),n("p",{children:["I'm a ",t,"-year-old high school student. In my spare time, I am passionate about learning computer technology and actively participating in the open source community, which brings me a lot of fun."]}),e("p",{children:"In real life, I am a talkative person. Besides, I also enjoy listening to the radio, watching news and documentaries on TV."})]})},A=j($);function F(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"}}]})(t)}function L(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"}}]})(t)}function W(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"}}]})(t)}const _=window.React.memo,E=[{icon:F,text:"GitHub",href:"https://github.com/renbaoshuo"},{icon:W,text:"Twitter",href:"https://twitter.com/renbaoshuo"},{icon:L,text:"Telegram",href:"https://t.me/renbaoshuo"}],G=()=>n(i,{as:"section",flex:"0 1 30%",children:[e(m,{as:"h2",sx:{fontSize:4},children:"Contact Me"}),e(i,{as:"ul",sx:{listStyle:"none",padding:0},display:["flex",,"block"],flexWrap:"wrap",alignItems:"center",children:E.map(({icon:t,text:c,href:o})=>e("li",{children:e(p,{as:"a",href:o,target:"_blank",rel:"me noopener noreferrer",variant:"invisible",leadingIcon:()=>e(t,{size:20,style:{display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}}),sx:{display:"block",textAlign:"left"},children:c})},c+o))})]}),N=_(G),O=window.React.memo,U=()=>n(i,{as:"section",flex:"0 0 70%",children:[e(m,{as:"h2",sx:{fontSize:4},children:"Who I am"}),n(i,{as:"ul",children:[n("li",{children:["Student and OIer at"," ",e(d,{href:"http://www.sjzezsyxx.com",target:"_blank",rel:"external nofollow noopener noreferrer",children:"The Shiyan School Attached To Shijiazhuang No.2 Middle School"})]}),n("li",{children:[e(d,{href:"https://hexo.io",target:"_blank",rel:"external nofollow noopener noreferrer",children:"Hexo"})," ","core team member"]}),n("li",{children:["Main developer of"," ",e(d,{href:"https://oier.baoshuo.dev/?utm_source=baoshuo.ren&utm_medium=who-i-am&utm_campaign=link",target:"_blank",rel:"external nofollow noopener noreferrer",children:"OIerDb NG"})]}),e("li",{children:"and more..."})]})]}),P=O(U),Y=window.React.memo,K=window.React.useEffect,V=window.React.useRef,q=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],J=()=>{const t=V(null);return K(()=>{const o=()=>{const a=new Date,r=new Date(a.getTime()+a.getTimezoneOffset()*60*1e3+8*60*60*1e3),w=a.getDate()!==r.getDate(),x=r.getHours().toString().padStart(2,"0"),k=r.getMinutes().toString().padStart(2,"0");t.current&&(t.current.innerHTML=`${w?q[r.getDay()-1]+" ":""}${x}:${k} (UTC+8)`)};o();const s=setInterval(o,1e3);return()=>clearInterval(s)},[]),e(i,{as:"ul",m:0,p:0,sx:{listStyle:"none"},children:[{icon:v,text:"Shijiazhuang, China"},{icon:y,text:"UTC+8",ref:t,href:"https://time.is/UTC+8"},{icon:M,text:"i@baoshuo.ren",href:"mailto:i@baoshuo.ren"},{icon:S,text:"70F9 0A67 3FB1 AB68",href:"https://github.com/renbaoshuo.gpg"}].map(({icon:o,text:s,href:a,ref:r})=>n(i,{as:"li",fontSize:1,pt:"2px",children:[e(I,{icon:o,color:"fg.muted",sx:{float:"left",marginTop:1}}),a?e(d,{href:a,target:"_blank",sx:{paddingLeft:2,color:"fg.default"},hoverColor:"accent.fg",ref:r!=null?r:null,children:s}):e(u,{pl:2,ref:r!=null?r:null,children:s})]},s+a))})},Q=Y(J),X=window.React.memo,Z=[{icon:B,text:"Blog",href:"https://blog.baoshuo.ren/?utm_medium=profile"},{icon:R,text:"OI Blog",href:"https://oi.baoshuo.ren/?utm_medium=profile"},{icon:C,text:"GitHub",href:"https://github.com/renbaoshuo"}],ee=()=>{const{theme:t}=T();return n(b,{children:[n(i,{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"flex-end",sx:{gap:t.space[2]},children:[n("div",{children:[n(m,{as:"h1",sx:{fontWeight:600,lineHeight:1.1,marginBottom:t.space[3],fontFamily:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"].join(", ")},children:[e(u,{fontSize:"0.85em",children:"Hello,"}),e("br",{}),"I'm"," ",e(u,{as:"mark",color:"accent.fg",bg:"transparent",sx:{position:"relative",background:`linear-gradient(180deg, transparent 75%, ${t.colors.accent.muted} 0)`},children:"Baoshuo"})]}),e(i,{mt:3,children:e(u,{color:"fg.muted",children:"Student / OIer / Developer"})})]}),e(Q,{})]}),e(i,{mt:3,display:"flex",flexWrap:"wrap",sx:{gap:t.space[2]},children:Z.map(({icon:c,text:o,href:s})=>e(p,{as:"a",leadingIcon:c,href:s,target:"_blank",sx:{display:"inline-block"},children:o},o+s))})]})},te=X(ee),ne=window.React.memo,oe=window.React.useEffect,ae=()=>(oe(()=>{document.title="Baoshuo (@renbaoshuo)"},[]),n(b,{children:[e(f.Header,{divider:"line",children:e(te,{})}),n(f.Content,{children:[n(i,{display:["block","block","flex"],sx:{gap:3},children:[e(P,{}),e(N,{})]}),e(A,{})]})]})),se=ne(ae);export{se as default};
