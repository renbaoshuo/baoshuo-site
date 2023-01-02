(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2244:function(e,o,t){"use strict";t.d(o,{z:function(){return S}});var n=t(7294),r=t(1296),a=t(8386),d=t(9739),l=t(5859),i=t(1171),c=t(9996),s=t.n(c);function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let u={},g={display:"inline-block"},p={...g,ml:2},h=(0,n.forwardRef)(({children:e,as:o="button",sx:t=u,...c},h)=>{let{leadingIcon:m,trailingIcon:f,variant:x="default",size:v="medium",...w}=c,C=n.useRef(null);(0,i.z)(h,C);let{theme:y}=(0,a.Fg)(),B=(0,n.useMemo)(()=>s().all([(0,l.fW)(y),(0,l.h8)(v,x,!1),(0,l.Yx)(x,y)]),[y,v,x]),k=(0,n.useMemo)(()=>s()(B,t),[B,t]);return n.createElement(d.S,b({as:o,sx:k},w,{ref:C}),m&&n.createElement(r.Z,{as:"span","data-component":"leadingIcon",sx:g},n.createElement(m,null)),e&&n.createElement("span",{"data-component":"text"},e),f&&n.createElement(r.Z,{as:"span","data-component":"trailingIcon",sx:p},n.createElement(f,null)))});function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let f=(0,n.forwardRef)(({children:e,...o},t)=>n.createElement(h,m({ref:t,as:"button"},o),e));f.displayName="Button";var x=t(9521),v=t(5173);let w=x.ZP.span.withConfig({displayName:"_VisuallyHidden__VisuallyHidden",componentId:"sc-11jhm7a-0"})(["",""],e=>e.isVisible?v.Z:`
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    `);function C(){return(C=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}w.defaultProps={isVisible:!1};let y=({scheme:e="secondary",sx:o={},children:t,...a})=>n.createElement(n.Fragment,null,n.createElement(r.Z,C({as:"span","aria-hidden":"true",sx:s()({display:"inline-block",padding:"2px 5px",fontSize:0,fontWeight:"bold",lineHeight:"condensedUltra",borderRadius:"20px",backgroundColor:"primary"===e?"neutral.emphasis":"neutral.muted",color:"primary"===e?"fg.onEmphasis":"fg.default","&:empty":{display:"none"}},o)},a),t),n.createElement(w,null,"\xa0",`(${t})`));function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}y.displayName="CounterLabel";let k=({children:e,sx:o={},...t})=>n.createElement(y,B({"data-component":"ButtonCounter",sx:{ml:2,...o}},t),e);k.displayName="Counter";let S=Object.assign(f,{Counter:k})},5859:function(e,o,t){"use strict";t.d(o,{Yx:function(){return n},fW:function(){return d},h8:function(){return r},m2:function(){return a}});let n=(e="default",o)=>{let t={default:{color:"btn.text",backgroundColor:"btn.bg",boxShadow:`${null==o?void 0:o.shadows.btn.shadow}, ${null==o?void 0:o.shadows.btn.insetShadow}`,"&:hover:not([disabled])":{backgroundColor:"btn.hoverBg"},"&:active:not([disabled])":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"}},primary:{color:"btn.primary.text",backgroundColor:"btn.primary.bg",borderColor:"border.subtle",boxShadow:`${null==o?void 0:o.shadows.btn.primary.shadow}`,"&:hover:not([disabled])":{color:"btn.primary.hoverText",backgroundColor:"btn.primary.hoverBg"},"&:focus:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:focus-visible:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:active:not([disabled])":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.primary.selectedShadow}`},"&:disabled":{color:"btn.primary.disabledText",backgroundColor:"btn.primary.disabledBg","[data-component=ButtonCounter]":{color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.primary.counterBg",color:"btn.primary.text"},"&[aria-expanded=true]":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.primary.selectedShadow}`}},danger:{color:"btn.danger.text",backgroundColor:"btn.bg",boxShadow:`${null==o?void 0:o.shadows.btn.shadow}`,"&:hover:not([disabled])":{color:"btn.danger.hoverText",backgroundColor:"btn.danger.hoverBg",borderColor:"btn.danger.hoverBorder",boxShadow:`${null==o?void 0:o.shadows.btn.danger.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.danger.hoverCounterBg",color:"btn.danger.hoverText"}},"&:active:not([disabled])":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"},"&:disabled":{color:"btn.danger.disabledText",backgroundColor:"btn.danger.disabledBg",borderColor:"btn.danger.disabledBorder","[data-component=ButtonCounter]":{color:"inherit",backgroundColor:"btn.danger.disabledCounterBg"}},"[data-component=ButtonCounter]":{color:"btn.danger.text",backgroundColor:"btn.danger.counterBg"},"&[aria-expanded=true]":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"}},invisible:{color:"accent.fg",backgroundColor:"transparent",border:"0",boxShadow:"none","&:hover:not([disabled])":{backgroundColor:"btn.hoverBg"},"&:active:not([disabled])":{backgroundColor:"btn.selectedBg"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.selectedBg"}},outline:{color:"btn.outline.text",boxShadow:`${null==o?void 0:o.shadows.btn.shadow}`,borderColor:"btn.border",backgroundColor:"btn.bg","&:hover:not([disabled])":{color:"btn.outline.hoverText",backgroundColor:"btn.outline.hoverBg",borderColor:"btn.outline.hoverBorder",boxShadow:`${null==o?void 0:o.shadows.btn.outline.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.hoverCounterBg",color:"inherit"}},"&:active:not([disabled])":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"},"&:disabled":{color:"btn.outline.disabledText",backgroundColor:"btn.outline.disabledBg",borderColor:"btn.border","[data-component=ButtonCounter]":{backgroundColor:"btn.outline.disabledCounterBg",color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.counterBg",color:"btn.outline.text"},"&[aria-expanded=true]":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${null==o?void 0:o.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"}}};return t[e]},r=(e="medium",o="default",t)=>{let n,r,a;switch(e){case"small":n=3,r=12,a=0;break;case"large":n=9,r=20,a=2;break;default:n=5,r=16,a=1}return t&&(a=1,r=n+3),"invisible"===o&&(n+=1),{paddingY:`${n}px`,paddingX:`${r}px`,fontSize:a,"[data-component=ButtonCounter]":{fontSize:a}}},a=e=>({borderRadius:"2",border:"1px solid",borderColor:null==e?void 0:e.colors.btn.border,fontFamily:"inherit",fontWeight:"bold",lineHeight:"20px",whiteSpace:"nowrap",verticalAlign:"middle",cursor:"pointer",appearance:"none",userSelect:"none",textDecoration:"none",textAlign:"center","&:disabled":{cursor:"default"},"&:disabled svg":{opacity:"0.6"},"@media (forced-colors: active)":{"&:focus":{outline:"solid 1px transparent"}}}),d=e=>{let o={...a(e),display:"grid",gridTemplateAreas:'"leadingIcon text trailingIcon"',"& > :not(:last-child)":{mr:"2"},'[data-component="leadingIcon"]':{gridArea:"leadingIcon"},'[data-component="text"]':{gridArea:"text"},'[data-component="trailingIcon"]':{gridArea:"trailingIcon"}};return o}},9739:function(e,o,t){"use strict";t.d(o,{S:function(){return i}});var n,r=t(9521),a=t(5173),d=t(5390);let l=(0,r.iv)(["box-shadow:none;outline:2px solid ",";"],(0,d.U2)("colors.accent.fg")),i=r.ZP.button.withConfig({displayName:"types__StyledButton",componentId:"sc-ws60qy-0"})(["",";",";"],(n="-2px",(0,r.iv)(["&:focus:not(:disabled){",";outline-offset:",";&:not(:focus-visible){outline:solid 1px transparent;}}&:focus-visible:not(:disabled){",";outline-offset:",";}"],l,void 0===n?"2px":n,l,void 0===n?"2px":n)),a.Z)},1067:function(e,o,t){"use strict";t.d(o,{Z:function(){return i}});var n=t(7294),r=t(9521),a=t(5173);function d({icon:e,...o}){return n.createElement(e,o)}d.displayName="Octicon";let l=(0,r.ZP)(d).withConfig({displayName:"StyledOcticon",componentId:"sc-1lhyyr-0"})(["",""],({color:e,sx:o})=>(0,a.Z)({sx:{color:e,...o}}));l.defaultProps={size:16};var i=l},6141:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(7492)}])},7492:function(e,o,t){"use strict";t.r(o);var n=t(5893);t(7294);var r=t(5529),a=t(1296),d=t(1067),l=t(2646),i=t(3625),c=t(2244),s=t(2962),b=t(1664),u=t.n(b);let g=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.PB,{title:"Not Found"}),(0,n.jsxs)(a.Z,{sx:{width:"100%",minHeight:400,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4},children:[(0,n.jsx)(d.Z,{icon:r.wNq,size:64,color:"danger.fg"}),(0,n.jsx)(l.Z,{as:"h1",sx:{fontSize:4},children:"Lost your way?"}),(0,n.jsx)(i.Z,{color:"fg.muted",children:"It seems that you're in a wrong place."}),(0,n.jsx)(c.z,{as:u(),href:"/",leadingIcon:r.wyc,children:"Back to Home"})]})]});o.default=g}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);