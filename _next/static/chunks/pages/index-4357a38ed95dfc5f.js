(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2244:function(e,t,o){"use strict";o.d(t,{z:function(){return B}});var n=o(7667),r=o.n(n),a=o(1296),l=o(8386),i=o(9739),d=o(5859),s=o(1171),c=o(9996),u=o.n(c);function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}let h={},g={display:"inline-block"},p={...g,ml:2},m=(0,n.forwardRef)(({children:e,as:t="button",sx:o=h,...c},m)=>{let{leadingIcon:x,trailingIcon:f,variant:v="default",size:w="medium",...y}=c,C=r().useRef(null);(0,s.z)(m,C);let{theme:j}=(0,l.Fg)(),k=(0,n.useMemo)(()=>u().all([(0,d.fW)(j),(0,d.h8)(w,v,!1),(0,d.Yx)(v,j)]),[j,w,v]),S=(0,n.useMemo)(()=>u()(k,o),[k,o]);return r().createElement(i.S,b({as:t,sx:S},y,{ref:C}),x&&r().createElement(a.Z,{as:"span","data-component":"leadingIcon",sx:g},r().createElement(x,null)),e&&r().createElement("span",{"data-component":"text"},e),f&&r().createElement(a.Z,{as:"span","data-component":"trailingIcon",sx:p},r().createElement(f,null)))});function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}let f=(0,n.forwardRef)(({children:e,...t},o)=>r().createElement(m,x({ref:o,as:"button"},t),e));f.displayName="Button";var v=o(9521),w=o(5173);let y=v.ZP.span.withConfig({displayName:"_VisuallyHidden__VisuallyHidden",componentId:"sc-11jhm7a-0"})(["",""],e=>e.isVisible?w.Z:`
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    `);function C(){return(C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}y.defaultProps={isVisible:!1};let j=({scheme:e="secondary",sx:t={},children:o,...n})=>r().createElement(r().Fragment,null,r().createElement(a.Z,C({as:"span","aria-hidden":"true",sx:u()({display:"inline-block",padding:"2px 5px",fontSize:0,fontWeight:"bold",lineHeight:"condensedUltra",borderRadius:"20px",backgroundColor:"primary"===e?"neutral.emphasis":"neutral.muted",color:"primary"===e?"fg.onEmphasis":"fg.default","&:empty":{display:"none"}},t)},n),o),r().createElement(y,null,"\xa0",`(${o})`));function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}j.displayName="CounterLabel";let S=({children:e,sx:t={},...o})=>r().createElement(j,k({"data-component":"ButtonCounter",sx:{ml:2,...t}},o),e);S.displayName="Counter";let B=Object.assign(f,{Counter:S})},5859:function(e,t,o){"use strict";o.d(t,{Yx:function(){return n},fW:function(){return l},h8:function(){return r},m2:function(){return a}});let n=(e="default",t)=>{let o={default:{color:"btn.text",backgroundColor:"btn.bg",boxShadow:`${null==t?void 0:t.shadows.btn.shadow}, ${null==t?void 0:t.shadows.btn.insetShadow}`,"&:hover:not([disabled])":{backgroundColor:"btn.hoverBg"},"&:active:not([disabled])":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"}},primary:{color:"btn.primary.text",backgroundColor:"btn.primary.bg",borderColor:"border.subtle",boxShadow:`${null==t?void 0:t.shadows.btn.primary.shadow}`,"&:hover:not([disabled])":{color:"btn.primary.hoverText",backgroundColor:"btn.primary.hoverBg"},"&:focus:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:focus-visible:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:active:not([disabled])":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.primary.selectedShadow}`},"&:disabled":{color:"btn.primary.disabledText",backgroundColor:"btn.primary.disabledBg","[data-component=ButtonCounter]":{color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.primary.counterBg",color:"btn.primary.text"},"&[aria-expanded=true]":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.primary.selectedShadow}`}},danger:{color:"btn.danger.text",backgroundColor:"btn.bg",boxShadow:`${null==t?void 0:t.shadows.btn.shadow}`,"&:hover:not([disabled])":{color:"btn.danger.hoverText",backgroundColor:"btn.danger.hoverBg",borderColor:"btn.danger.hoverBorder",boxShadow:`${null==t?void 0:t.shadows.btn.danger.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.danger.hoverCounterBg",color:"btn.danger.hoverText"}},"&:active:not([disabled])":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"},"&:disabled":{color:"btn.danger.disabledText",backgroundColor:"btn.danger.disabledBg",borderColor:"btn.danger.disabledBorder","[data-component=ButtonCounter]":{color:"inherit",backgroundColor:"btn.danger.disabledCounterBg"}},"[data-component=ButtonCounter]":{color:"btn.danger.text",backgroundColor:"btn.danger.counterBg"},"&[aria-expanded=true]":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"}},invisible:{color:"accent.fg",backgroundColor:"transparent",border:"0",boxShadow:"none","&:hover:not([disabled])":{backgroundColor:"btn.hoverBg"},"&:active:not([disabled])":{backgroundColor:"btn.selectedBg"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.selectedBg"}},outline:{color:"btn.outline.text",boxShadow:`${null==t?void 0:t.shadows.btn.shadow}`,borderColor:"btn.border",backgroundColor:"btn.bg","&:hover:not([disabled])":{color:"btn.outline.hoverText",backgroundColor:"btn.outline.hoverBg",borderColor:"btn.outline.hoverBorder",boxShadow:`${null==t?void 0:t.shadows.btn.outline.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.hoverCounterBg",color:"inherit"}},"&:active:not([disabled])":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"},"&:disabled":{color:"btn.outline.disabledText",backgroundColor:"btn.outline.disabledBg",borderColor:"btn.border","[data-component=ButtonCounter]":{backgroundColor:"btn.outline.disabledCounterBg",color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.counterBg",color:"btn.outline.text"},"&[aria-expanded=true]":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"}}};return o[e]},r=(e="medium",t="default",o)=>{let n,r,a;switch(e){case"small":n=3,r=12,a=0;break;case"large":n=9,r=20,a=2;break;default:n=5,r=16,a=1}return o&&(a=1,r=n+3),"invisible"===t&&(n+=1),{paddingY:`${n}px`,paddingX:`${r}px`,fontSize:a,"[data-component=ButtonCounter]":{fontSize:a}}},a=e=>({borderRadius:"2",border:"1px solid",borderColor:null==e?void 0:e.colors.btn.border,fontFamily:"inherit",fontWeight:"bold",lineHeight:"20px",whiteSpace:"nowrap",verticalAlign:"middle",cursor:"pointer",appearance:"none",userSelect:"none",textDecoration:"none",textAlign:"center","&:disabled":{cursor:"default"},"&:disabled svg":{opacity:"0.6"},"@media (forced-colors: active)":{"&:focus":{outline:"solid 1px transparent"}}}),l=e=>{let t={...a(e),display:"grid",gridTemplateAreas:'"leadingIcon text trailingIcon"',"& > :not(:last-child)":{mr:"2"},'[data-component="leadingIcon"]':{gridArea:"leadingIcon"},'[data-component="text"]':{gridArea:"text"},'[data-component="trailingIcon"]':{gridArea:"trailingIcon"}};return t}},9739:function(e,t,o){"use strict";o.d(t,{S:function(){return d}});var n,r=o(9521),a=o(5173),l=o(5390);let i=(0,r.iv)(["box-shadow:none;outline:2px solid ",";"],(0,l.U2)("colors.accent.fg")),d=r.ZP.button.withConfig({displayName:"types__StyledButton",componentId:"sc-ws60qy-0"})(["",";",";"],(n="-2px",(0,r.iv)(["&:focus:not(:disabled){",";outline-offset:",";&:not(:focus-visible){outline:solid 1px transparent;}}&:focus-visible:not(:disabled){",";outline-offset:",";}"],i,void 0===n?"2px":n,i,void 0===n?"2px":n)),a.Z)},1067:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var n=o(7667),r=o.n(n),a=o(9521),l=o(5173);function i({icon:e,...t}){return r().createElement(e,t)}i.displayName="Octicon";let d=(0,a.ZP)(i).withConfig({displayName:"StyledOcticon",componentId:"sc-1lhyyr-0"})(["",""],({color:e,sx:t})=>(0,l.Z)({sx:{color:e,...t}}));d.defaultProps={size:16};var s=d},8312:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(5596)}])},5596:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return z}});var n=o(5893),r=o(7667),a=o(1296),l=o(2646),i=o(2496);let d=new Date(2006,5,4),s=new Date,c=s.getFullYear()-d.getFullYear()-Number(s.getMonth()-d.getMonth()<0||s.getMonth()-d.getMonth()==0&&s.getDate()<d.getDate()),u=()=>{let[e,t]=(0,r.useState)(c);return(0,r.useEffect)(()=>{let e=()=>{let e=new Date;t(e.getFullYear()-d.getFullYear()-Number(e.getMonth()-d.getMonth()<0||e.getMonth()-d.getMonth()==0&&e.getDate()<d.getDate()))};e();let o=setInterval(e,1e3);return()=>clearInterval(o)},[]),(0,n.jsxs)(a.Z,{as:"section",children:[(0,n.jsx)(l.Z,{as:"h2",sx:{fontSize:4},children:"About Me"}),(0,n.jsxs)("p",{children:["I'm a ",e,"-year-old high school student. I have always been fascinated by the way computers work and the endless possibilities of what can be achieved through code. This interest has led me to participate in the Olympiad in Informatics, where I had the opportunity to showcase my skills and learn from others in the field."]}),(0,n.jsxs)("p",{children:["Besides, I am also interested in computer network. I have my own Autonomous System Number (",(0,n.jsx)(i.Z,{href:"https://bgp.he.net/AS141776",target:"_blank",rel:"noopener nofollow noreferrer",children:"AS141776"}),") and IPv4 & IPv6 prefixes. I use them to conduct research on the global Internet. (",(0,n.jsx)(i.Z,{href:"/network",children:"details"}),")"]}),(0,n.jsx)("p",{children:"In addition to my academic pursuits, I am also actively involved in the open source community. I believe in the power of collaboration and sharing knowledge, and I find great joy in contributing to projects and learning from others in the community."}),(0,n.jsx)("p",{children:"In my personal life, I am a outgoing and sociable person who enjoys staying active and engaging with others. I have a love for reading, and can often be found with my nose buried in a good book. I am also an avid listener of the radio and enjoy watching television in my spare time."})]})};var b=(0,r.memo)(u),h=o(2244),g=o(3991);let p=[{icon:g.oBr,text:"GitHub",href:"https://github.com/renbaoshuo"},{icon:g.nyZ,text:"Twitter",href:"https://twitter.com/renbaoshuo"},{icon:g._up,text:"Mastodon",href:"https://acg.mn/@baoshuo"},{icon:g.BJe,text:"Telegram",href:"https://t.me/renbaoshuo"}],m=()=>(0,n.jsxs)(a.Z,{as:"section",flex:"0 1 30%",children:[(0,n.jsx)(l.Z,{as:"h2",sx:{fontSize:4},children:"Contact Me"}),(0,n.jsx)(a.Z,{as:"ul",sx:{listStyle:"none",padding:0,display:["flex",,"block"]},flexWrap:"wrap",alignItems:"center",children:p.map(e=>{let{icon:t,text:o,href:r}=e;return(0,n.jsx)("li",{children:(0,n.jsx)(h.z,{as:"a",href:r,target:"_blank",rel:"me noopener noreferrer",variant:"invisible",leadingIcon:()=>(0,n.jsx)(t,{size:20,style:{display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}}),sx:{display:"block",textAlign:"left"},children:o})},o+r)})})]});var x=(0,r.memo)(m),f=o(4777),v=o(5529),w=o(8386),y=o(3625),C=o(1067),j=o(1152);let k=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],S=()=>{let e=(0,r.useRef)(null);(0,r.useEffect)(()=>{let t=()=>{let t=new Date,o=new Date(t.getTime()+6e4*t.getTimezoneOffset()+288e5),n=t.getDate()!==o.getDate(),r=o.getHours().toString().padStart(2,"0"),a=o.getMinutes().toString().padStart(2,"0");e.current&&(e.current.innerHTML="".concat(n?k[o.getDay()-1]+" ":"").concat(r,":").concat(a," (UTC+8)"))};t();let o=setInterval(t,1e3);return()=>clearInterval(o)},[]);let t=[{icon:v._tJ,text:"Shijiazhuang, China"},{icon:v.T39,text:"UTC+8",ref:e,href:"https://time.is/UTC+8"},{icon:v.bV6,text:"i@baoshuo.ren",href:"mailto:i@baoshuo.ren"},{icon:v._m8,text:"70F9 0A67 3FB1 AB68",href:"https://github.com/renbaoshuo.gpg"}];return(0,n.jsx)(a.Z,{as:"ul",m:0,p:0,sx:{listStyle:"none"},children:t.map(e=>{let{icon:t,text:o,href:r,ref:l}=e;return(0,n.jsxs)(a.Z,{as:"li",fontSize:1,pt:"2px",children:[(0,n.jsx)(C.Z,{icon:t,color:"fg.muted",sx:{float:"left",marginTop:1}}),r?(0,n.jsx)(j.Z,{href:r,target:"_blank",sx:{paddingLeft:2,color:"fg.default"},hoverColor:"accent.fg",ref:null!=l?l:null,children:o}):(0,n.jsx)(y.Z,{pl:2,ref:null!=l?l:null,children:o})]},o+r)})})};var B=(0,r.memo)(S);let I=[{icon:v.H0r,text:"Blog",href:"https://blog.baoshuo.ren/?utm_medium=profile"},{icon:v.gmr,text:"OI Blog",href:"https://oi.baoshuo.ren/?utm_medium=profile"},{icon:v.g_Y,text:"GitHub",href:"https://github.com/renbaoshuo"}],Z=()=>{let{theme:e}=(0,w.Fg)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.Z,{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"flex-end",sx:{gap:e.space[2]},children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(l.Z,{as:"h1",sx:{fontWeight:600,lineHeight:1.1,marginBottom:e.space[3],fontFamily:"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"},children:[(0,n.jsx)(y.Z,{fontSize:"0.85em",children:"Hello,"}),(0,n.jsx)("br",{}),"I'm"," ",(0,n.jsx)(y.Z,{as:"mark",color:"accent.fg",bg:"transparent",sx:{position:"relative",background:"linear-gradient(180deg, transparent 75%, ".concat(e.colors.accent.muted," 0)")},children:"Baoshuo"})]}),(0,n.jsx)(a.Z,{mt:3,children:(0,n.jsx)(y.Z,{color:"fg.muted",children:"Student / OIer / Developer"})})]}),(0,n.jsx)(B,{})]}),(0,n.jsx)(a.Z,{mt:3,display:"flex",flexWrap:"wrap",sx:{gap:e.space[2]},children:I.map(e=>{let{icon:t,text:o,href:r}=e;return(0,n.jsx)(h.z,{as:"a",leadingIcon:t,href:r,target:"_blank",sx:{display:"inline-block"},children:o},o+r)})})]})};var _=(0,r.memo)(Z);let T=()=>(0,n.jsxs)(a.Z,{as:"section",flex:"0 0 70%",children:[(0,n.jsx)(l.Z,{as:"h2",sx:{fontSize:4},children:"Who I am"}),(0,n.jsxs)(a.Z,{as:"ul",children:[(0,n.jsxs)("li",{children:["Student and OIer at"," ",(0,n.jsx)(j.Z,{href:"http://www.sjzezsyxx.com",target:"_blank",rel:"external nofollow noopener noreferrer",children:"The Shiyan School Attached To Shijiazhuang No.2 Middle School"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(j.Z,{href:"https://hexo.io",target:"_blank",rel:"external nofollow noopener noreferrer",children:"Hexo"})," ","core team member"]}),(0,n.jsxs)("li",{children:["Main developer of"," ",(0,n.jsx)(j.Z,{href:"https://oier.baoshuo.dev/?utm_source=baoshuo.ren&utm_medium=who-i-am&utm_campaign=link",target:"_blank",rel:"external nofollow noopener noreferrer",children:"OIerDb NG"})]}),(0,n.jsx)("li",{children:"and more..."})]})]});var O=(0,r.memo)(T),E=o(817),N=o(2962);let M=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.PB,{}),(0,n.jsxs)(E.X.Content,{children:[(0,n.jsx)(_,{}),(0,n.jsx)(f.Z,{sx:{marginY:3}}),(0,n.jsxs)(a.Z,{display:["block","block","flex"],sx:{gap:3},children:[(0,n.jsx)(O,{}),(0,n.jsx)(x,{})]}),(0,n.jsx)(b,{})]})]});var z=M}},function(e){e.O(0,[584,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);