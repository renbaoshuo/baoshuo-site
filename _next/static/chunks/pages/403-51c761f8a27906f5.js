(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{2244:function(e,o,n){"use strict";n.d(o,{z:function(){return j}});var t=n(7667),r=n.n(t),a=n(1296),d=n(8386),l=n(9739),i=n(5859),c=n(1171),s=n(9996),b=n.n(s);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}let g={},p={display:"inline-block"},h={...p,ml:2},m=(0,t.forwardRef)(({children:e,as:o="button",sx:n=g,...s},m)=>{let{leadingIcon:x,trailingIcon:f,variant:v="default",size:C="medium",...w}=s,y=r().useRef(null);(0,c.z)(m,y);let{theme:B}=(0,d.Fg)(),k=(0,t.useMemo)(()=>b().all([(0,i.fW)(B),(0,i.h8)(C,v,!1),(0,i.Yx)(v,B)]),[B,C,v]),S=(0,t.useMemo)(()=>b()(k,n),[k,n]);return r().createElement(l.S,u({as:o,sx:S},w,{ref:y}),x&&r().createElement(a.Z,{as:"span","data-component":"leadingIcon",sx:p},r().createElement(x,null)),e&&r().createElement("span",{"data-component":"text"},e),f&&r().createElement(a.Z,{as:"span","data-component":"trailingIcon",sx:h},r().createElement(f,null)))});function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}let f=(0,t.forwardRef)(({children:e,...o},n)=>r().createElement(m,x({ref:n,as:"button"},o),e));f.displayName="Button";var v=n(9521),C=n(5173);let w=v.ZP.span.withConfig({displayName:"_VisuallyHidden__VisuallyHidden",componentId:"sc-11jhm7a-0"})(["",""],e=>e.isVisible?C.Z:`
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    `);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}w.defaultProps={isVisible:!1};let B=({scheme:e="secondary",sx:o={},children:n,...t})=>r().createElement(r().Fragment,null,r().createElement(a.Z,y({as:"span","aria-hidden":"true",sx:b()({display:"inline-block",padding:"2px 5px",fontSize:0,fontWeight:"bold",lineHeight:"condensedUltra",borderRadius:"20px",backgroundColor:"primary"===e?"neutral.emphasis":"neutral.muted",color:"primary"===e?"fg.onEmphasis":"fg.default","&:empty":{display:"none"}},o)},t),n),r().createElement(w,null,"\xa0",`(${n})`));function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}B.displayName="CounterLabel";let S=({children:e,sx:o={},...n})=>r().createElement(B,k({"data-component":"ButtonCounter",sx:{ml:2,...o}},n),e);S.displayName="Counter";let j=Object.assign(f,{Counter:S})},5859:function(e,o,n){"use strict";n.d(o,{Yx:function(){return t},fW:function(){return d},h8:function(){return r},m2:function(){return a}});let t=(e="default",o)=>{let n={default:{color:"btn.text",backgroundColor:"btn.bg",boxShadow:`${null==o?void 0:o.shadows.btn.shadow}, ${null==o?void 0:o.shadows.btn.insetShadow}`,"&:hover:not([disabled])":{backgroundColor:"btn.hoverBg"},"&:active:not([disabled])":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"}},primary:{color:"btn.primary.text",backgroundColor:"btn.primary.bg",borderColor:"border.subtle",boxShadow:`${null==o?void 0:o.shadows.btn.primary.shadow}`,"&:hover:not([disabled])":{color:"btn.primary.hoverText",backgroundColor:"btn.primary.hoverBg"},"&:focus:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:focus-visible:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:active:not([disabled])":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.primary.selectedShadow}`},"&:disabled":{color:"btn.primary.disabledText",backgroundColor:"btn.primary.disabledBg","[data-component=ButtonCounter]":{color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.primary.counterBg",color:"btn.primary.text"},"&[aria-expanded=true]":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.primary.selectedShadow}`}},danger:{color:"btn.danger.text",backgroundColor:"btn.bg",boxShadow:`${null==o?void 0:o.shadows.btn.shadow}`,"&:hover:not([disabled])":{color:"btn.danger.hoverText",backgroundColor:"btn.danger.hoverBg",borderColor:"btn.danger.hoverBorder",boxShadow:`${null==o?void 0:o.shadows.btn.danger.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.danger.hoverCounterBg",color:"btn.danger.hoverText"}},"&:active:not([disabled])":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"},"&:disabled":{color:"btn.danger.disabledText",backgroundColor:"btn.danger.disabledBg",borderColor:"btn.danger.disabledBorder","[data-component=ButtonCounter]":{color:"inherit",backgroundColor:"btn.danger.disabledCounterBg"}},"[data-component=ButtonCounter]":{color:"btn.danger.text",backgroundColor:"btn.danger.counterBg"},"&[aria-expanded=true]":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"}},invisible:{color:"accent.fg",backgroundColor:"transparent",border:"0",boxShadow:"none","&:hover:not([disabled])":{backgroundColor:"btn.hoverBg"},"&:active:not([disabled])":{backgroundColor:"btn.selectedBg"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.selectedBg"}},outline:{color:"btn.outline.text",boxShadow:`${null==o?void 0:o.shadows.btn.shadow}`,borderColor:"btn.border",backgroundColor:"btn.bg","&:hover:not([disabled])":{color:"btn.outline.hoverText",backgroundColor:"btn.outline.hoverBg",borderColor:"btn.outline.hoverBorder",boxShadow:`${null==o?void 0:o.shadows.btn.outline.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.hoverCounterBg",color:"inherit"}},"&:active:not([disabled])":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"},"&:disabled":{color:"btn.outline.disabledText",backgroundColor:"btn.outline.disabledBg",borderColor:"btn.border","[data-component=ButtonCounter]":{backgroundColor:"btn.outline.disabledCounterBg",color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.counterBg",color:"btn.outline.text"},"&[aria-expanded=true]":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"}}};return n[e]},r=(e="medium",o="default",n)=>{let t,r,a;switch(e){case"small":t=3,r=12,a=0;break;case"large":t=9,r=20,a=2;break;default:t=5,r=16,a=1}return n&&(a=1,r=t+3),"invisible"===o&&(t+=1),{paddingY:`${t}px`,paddingX:`${r}px`,fontSize:a,"[data-component=ButtonCounter]":{fontSize:a}}},a=e=>({borderRadius:"2",border:"1px solid",borderColor:null==e?void 0:e.colors.btn.border,fontFamily:"inherit",fontWeight:"bold",lineHeight:"20px",whiteSpace:"nowrap",verticalAlign:"middle",cursor:"pointer",appearance:"none",userSelect:"none",textDecoration:"none",textAlign:"center","&:disabled":{cursor:"default"},"&:disabled svg":{opacity:"0.6"},"@media (forced-colors: active)":{"&:focus":{outline:"solid 1px transparent"}}}),d=e=>{let o={...a(e),display:"grid",gridTemplateAreas:'"leadingIcon text trailingIcon"',"& > :not(:last-child)":{mr:"2"},'[data-component="leadingIcon"]':{gridArea:"leadingIcon"},'[data-component="text"]':{gridArea:"text"},'[data-component="trailingIcon"]':{gridArea:"trailingIcon"}};return o}},9739:function(e,o,n){"use strict";n.d(o,{S:function(){return i}});var t,r=n(9521),a=n(5173),d=n(5390);let l=(0,r.iv)(["box-shadow:none;outline:2px solid ",";"],(0,d.U2)("colors.accent.fg")),i=r.ZP.button.withConfig({displayName:"types__StyledButton",componentId:"sc-ws60qy-0"})(["",";",";"],(t="-2px",(0,r.iv)(["&:focus:not(:disabled){",";outline-offset:",";&:not(:focus-visible){outline:solid 1px transparent;}}&:focus-visible:not(:disabled){",";outline-offset:",";}"],l,void 0===t?"2px":t,l,void 0===t?"2px":t)),a.Z)},1067:function(e,o,n){"use strict";n.d(o,{Z:function(){return c}});var t=n(7667),r=n.n(t),a=n(9521),d=n(5173);function l({icon:e,...o}){return r().createElement(e,o)}l.displayName="Octicon";let i=(0,a.ZP)(l).withConfig({displayName:"StyledOcticon",componentId:"sc-1lhyyr-0"})(["",""],({color:e,sx:o})=>(0,d.Z)({sx:{color:e,...o}}));i.defaultProps={size:16};var c=i},5541:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/403",function(){return n(7461)}])},7461:function(e,o,n){"use strict";n.r(o);var t=n(5893),r=n(2496),a=n(5529),d=n(1296),l=n(1067),i=n(2646),c=n(3625),s=n(2244),b=n(2962);let u=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.PB,{title:"Access Denied"}),(0,t.jsxs)(d.Z,{sx:{width:"100%",minHeight:400,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4},children:[(0,t.jsx)(l.Z,{icon:a.$No,size:64,color:"danger.fg"}),(0,t.jsx)(i.Z,{as:"h1",sx:{fontSize:4},children:"Access Denied"}),(0,t.jsx)(c.Z,{color:"fg.muted",children:"You don't have permission to access this page."}),(0,t.jsx)(s.z,{as:r.Z,to:"/",leadingIcon:a.wyc,children:"Back to Home"})]})]});o.default=u}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5541)}),_N_E=e.O()}]);