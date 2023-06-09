(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8216:function(e,t,o){"use strict";o.d(t,{Z:function(){return d},r:function(){return l}});var n=o(7294),r=o(5230),a=o(7261);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}let l=(0,n.forwardRef)(({children:e,sx:t=a.P,...o},l)=>{let s=t,{block:c,size:p,leadingIcon:u,trailingIcon:g,trailingAction:b}=o;return null!==t&&Object.keys(t).length>0&&(s=d({block:c,size:p,leadingIcon:u,trailingIcon:g,trailingAction:b},t)),n.createElement(r.X,i({ref:l,as:"button",sx:s,type:"button"},o),e)});function d(e,t){let o=e.size&&"medium"!==e.size?`[data-size="${e.size}"]`:"",n=e.block?'[data-block="block"]':"",r=e.leadingIcon||e.trailingIcon||e.trailingAction?"":'[data-no-visuals="true"]',a=`&${o}${n}${r}`,i={};return t&&(i[a]=t),i}l.displayName="Button"},5230:function(e,t,o){"use strict";o.d(t,{X:function(){return w}});var n,r=o(7294),a=o(8386),i=o(9521),l=o(5173),d=o(5390);let s=(0,i.iv)(["box-shadow:none;outline:2px solid ",";"],(0,d.U2)("colors.accent.fg")),c=i.ZP.button.withConfig({displayName:"types__StyledButton",componentId:"sc-ws60qy-0"})(["",";",";"],(n="-2px",(0,i.iv)(["&:focus:not(:disabled){",";outline-offset:",";&:not(:focus-visible){outline:solid 1px transparent;}}&:focus-visible:not(:disabled){",";outline-offset:",";}"],s,void 0===n?"2px":n,s,void 0===n?"2px":n)),l.Z),p=(e="default",t)=>{let o={default:{color:"btn.text",backgroundColor:"btn.bg",boxShadow:`${null==t?void 0:t.shadows.btn.shadow}, ${null==t?void 0:t.shadows.btn.insetShadow}`,"&:hover:not([disabled])":{backgroundColor:"btn.hoverBg",borderColor:"btn.hoverBorder"},"&:active:not([disabled])":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"}},primary:{color:"btn.primary.text",backgroundColor:"btn.primary.bg",borderColor:"btn.primary.border",boxShadow:`${null==t?void 0:t.shadows.btn.primary.shadow}`,"&:hover:not([disabled])":{color:"btn.primary.hoverText",backgroundColor:"btn.primary.hoverBg"},"&:focus:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:focus-visible:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:active:not([disabled])":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.primary.selectedShadow}`},"&:disabled":{color:"btn.primary.disabledText",backgroundColor:"btn.primary.disabledBg","[data-component=ButtonCounter]":{color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.primary.counterBg",color:"btn.primary.text"},"&[aria-expanded=true]":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.primary.selectedShadow}`}},danger:{color:"btn.danger.text",backgroundColor:"btn.bg",boxShadow:`${null==t?void 0:t.shadows.btn.shadow}`,"&:hover:not([disabled])":{color:"btn.danger.hoverText",backgroundColor:"btn.danger.hoverBg",borderColor:"btn.danger.hoverBorder",boxShadow:`${null==t?void 0:t.shadows.btn.danger.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.danger.hoverCounterBg",color:"btn.danger.hoverText"}},"&:active:not([disabled])":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"},"&:disabled":{color:"btn.danger.disabledText",backgroundColor:"btn.danger.disabledBg",borderColor:"btn.danger.disabledBorder","[data-component=ButtonCounter]":{color:"inherit",backgroundColor:"btn.danger.disabledCounterBg"}},"[data-component=ButtonCounter]":{color:"btn.danger.text",backgroundColor:"btn.danger.counterBg"},"&[aria-expanded=true]":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"}},invisible:{color:"accent.fg",backgroundColor:"transparent",borderColor:"transparent",boxShadow:"none","&:hover:not([disabled])":{backgroundColor:"btn.hoverBg"},"&:active:not([disabled])":{backgroundColor:"btn.selectedBg"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.selectedBg"},'&[data-component="IconButton"][data-no-visuals]':{color:"fg.muted"},'[data-component="trailingAction"]':{color:"fg.muted"},'[data-component="leadingVisual"]':{color:"fg.muted"},"&[data-no-visuals]":{color:"accent.fg"},'&:has([data-component="ButtonCounter"])':{color:"accent.fg"},"&:disabled[data-no-visuals]":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}}},outline:{color:"btn.outline.text",boxShadow:`${null==t?void 0:t.shadows.btn.shadow}`,borderColor:"btn.border",backgroundColor:"btn.bg","&:hover:not([disabled])":{color:"btn.outline.hoverText",backgroundColor:"btn.outline.hoverBg",borderColor:"btn.outline.hoverBorder",boxShadow:`${null==t?void 0:t.shadows.btn.outline.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.hoverCounterBg",color:"inherit"}},"&:active:not([disabled])":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"},"&:disabled":{color:"btn.outline.disabledText",backgroundColor:"btn.outline.disabledBg",borderColor:"btn.border","[data-component=ButtonCounter]":{backgroundColor:"btn.outline.disabledCounterBg",color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.counterBg",color:"btn.outline.text"},"&[aria-expanded=true]":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${null==t?void 0:t.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"}}};return o[e]},u=e=>({borderRadius:"2",border:"1px solid",borderColor:null==e?void 0:e.colors.btn.border,fontFamily:"inherit",fontWeight:"semibold",fontSize:"1",cursor:"pointer",appearance:"none",userSelect:"none",textDecoration:"none",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"space-between",height:"32px",padding:"0 12px",gap:"8px",minWidth:"max-content",transition:"80ms cubic-bezier(0.65, 0, 0.35, 1)",transitionProperty:"color, fill, background-color, border-color","&[href]":{display:"inline-flex","&:hover":{textDecoration:"none"}},"&:hover":{transitionDuration:"80ms"},"&:active":{transition:"none"},"&:disabled":{cursor:"not-allowed",boxShadow:"none"},"@media (forced-colors: active)":{"&:focus":{outline:"solid 1px transparent"}},"[data-component=ButtonCounter]":{fontSize:"1"},"&[data-component=IconButton]":{display:"inline-grid",padding:"unset",placeContent:"center",width:"32px",minWidth:"unset"},'&[data-size="small"]':{padding:"0 8px",height:"28px",gap:"4px",fontSize:"0",'[data-component="text"]':{lineHeight:"calc(20 / 12)"},"[data-component=ButtonCounter]":{fontSize:"0"},'[data-component="buttonContent"] > :not(:last-child)':{mr:"4px"},"&[data-component=IconButton]":{width:"28px",padding:"unset"}},'&[data-size="large"]':{padding:"0 16px",height:"40px",gap:"8px",'[data-component="buttonContent"] > :not(:last-child)':{mr:"8px"},"&[data-component=IconButton]":{width:"40px",padding:"unset"}}}),g=e=>{let t={...u(e),'&[data-block="block"]':{width:"100%"},'[data-component="leadingVisual"]':{gridArea:"leadingVisual"},'[data-component="text"]':{gridArea:"text",lineHeight:"calc(20/14)",whiteSpace:"nowrap"},'[data-component="trailingVisual"]':{gridArea:"trailingVisual"},'[data-component="trailingAction"]':{marginRight:"-4px"},'[data-component="buttonContent"]':{flex:"1 0 auto",display:"grid",gridTemplateAreas:'"leadingVisual text trailingVisual"',gridTemplateColumns:"min-content minmax(0, auto) min-content",alignItems:"center",alignContent:"center"},'[data-component="buttonContent"] > :not(:last-child)':{mr:"8px"}};return t},b=(e="center")=>({justifyContent:"center"===e?"center":"flex-start"});var h=o(1171),f=o(7261),m=o(2483),v=o(9996),x=o.n(v);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}let w=(0,r.forwardRef)(({children:e,as:t="button",sx:o=f.P,...n},i)=>{let{leadingIcon:l,trailingIcon:d,trailingAction:s,icon:u,variant:v="default",size:w="medium",alignContent:k="center",block:C=!1,...B}=n,j=r.useRef(null);(0,h.z)(i,j);let{theme:M}=(0,a.Fg)(),I=(0,r.useMemo)(()=>x().all([g(M),p(v,M)]),[M,v]),O=(0,r.useMemo)(()=>x()(I,o),[I,o]),S={display:"flex",pointerEvents:"none"};return r.createElement(c,y({as:t,sx:O},B,{ref:j,"data-block":C?"block":null,"data-size":"small"===w||"large"===w?w:void 0,"data-no-visuals":!l&&!d&&!s||void 0}),u?r.createElement(u,null):r.createElement(r.Fragment,null,r.createElement(m.Z,{as:"span","data-component":"buttonContent",sx:b(k)},l&&r.createElement(m.Z,{as:"span","data-component":"leadingVisual",sx:{...S}},r.createElement(l,null)),e&&r.createElement("span",{"data-component":"text"},e),d&&r.createElement(m.Z,{as:"span","data-component":"trailingVisual",sx:{...S}},r.createElement(d,null))),s&&r.createElement(m.Z,{as:"span","data-component":"trailingAction",sx:{...S}},r.createElement(s,null))))})},7261:function(e,t,o){"use strict";o.d(t,{P:function(){return n}});let n={}},853:function(e,t,o){"use strict";o.d(t,{Z:function(){return m}});var n=o(7294),r=o(5697),a=o.n(r),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&g(e,o,t[o]);if(c)for(var o of c(t))u.call(t,o)&&g(e,o,t[o]);return e},h=(e,t)=>d(e,s(t)),f=(e,t)=>{var o={};for(var n in e)p.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&c)for(var n of c(e))0>t.indexOf(n)&&u.call(e,n)&&(o[n]=e[n]);return o},m=(e,t,o)=>{let r=(0,n.forwardRef)((t,r)=>{var{color:a="currentColor",size:l=24,stroke:d=2,children:s}=t,c=f(t,["color","size","stroke","children"]);return(0,n.createElement)("svg",b(h(b({ref:r},i),{width:l,height:l,stroke:a,strokeWidth:d,className:`tabler-icon tabler-icon-${e}`}),c),[...o.map(([e,t])=>(0,n.createElement)(e,t)),...s||[]])});return r.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),stroke:a().oneOfType([a().string,a().number])},r.displayName=`${t}`,r}},4184:function(e,t){var o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===a){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(o=(function(){return r}).apply(t,[]))&&(e.exports=o)}()},8269:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return o(7930)}])},7930:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return q},default:function(){return G}});var n=o(5893),r=o(1151),a=o(7294),i=o(5529),l=o(8386),d=o(2483),s=o(5308),c=o(5230),p=o(7261),u=o(8216);function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}let b=(0,a.forwardRef)(({sx:e=p.P,icon:t,...o},n)=>{let r=e,{size:i}=o;return null!==e&&Object.keys(e).length>0&&(r=(0,u.Z)({size:i},e)),a.createElement(c.X,g({icon:t,"data-component":"IconButton",sx:r},o,{ref:n}))});var h=o(4184),f=o.n(h),m=o(9521),v=o(5390),x=o(5173);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}let w=m.ZP.span.withConfig({displayName:"Tooltip__TooltipBase",componentId:"sc-uha8qm-0"})(["position:relative;&::before{position:absolute;z-index:1000001;display:none;width:0px;height:0px;color:",";pointer-events:none;content:'';border:6px solid transparent;opacity:0;}&::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 ",";-webkit-font-smoothing:subpixel-antialiased;color:",";text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:",";border-radius:",";opacity:0;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:hover,&:active,&:focus,&:focus-within{&::before,&::after{display:inline-block;text-decoration:none;animation-name:tooltip-appear;animation-duration:0.1s;animation-fill-mode:forwards;animation-timing-function:ease-in;animation-delay:0.4s;}}&.tooltipped-no-delay:hover,&.tooltipped-no-delay:active,&.tooltipped-no-delay:focus,&.tooltipped-no-delay:focus-within{&::before,&::after{animation-delay:0s;}}&.tooltipped-multiline:hover,&.tooltipped-multiline:active,&.tooltipped-multiline:focus,&.tooltipped-multiline:focus-within{&::after{display:table-cell;}}&.tooltipped-s,&.tooltipped-se,&.tooltipped-sw{&::after{top:100%;right:50%;margin-top:6px;}&::before{top:auto;right:50%;bottom:-7px;margin-right:-6px;border-bottom-color:",";}}&.tooltipped-se{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-sw::after{margin-right:-",";}&.tooltipped-n,&.tooltipped-ne,&.tooltipped-nw{&::after{right:50%;bottom:100%;margin-bottom:6px;}&::before{top:-7px;right:50%;bottom:auto;margin-right:-6px;border-top-color:",";}}&.tooltipped-ne{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-nw::after{margin-right:-",";}&.tooltipped-s::after,&.tooltipped-n::after{transform:translateX(50%);}&.tooltipped-w{&::after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%);}&::before{top:50%;bottom:50%;left:-7px;margin-top:-6px;border-left-color:",";}}&.tooltipped-e{&::after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%);}&::before{top:50%;right:-7px;bottom:50%;margin-top:-6px;border-right-color:",";}}&.tooltipped-multiline{&::after{width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate;}&.tooltipped-s::after,&.tooltipped-n::after{right:auto;left:50%;transform:translateX(-50%);}&.tooltipped-w::after,&.tooltipped-e::after{right:100%;}}&.tooltipped-align-right-2::after{right:0;margin-right:0;}&.tooltipped-align-right-2::before{right:15px;}&.tooltipped-align-left-2::after{left:0;margin-left:0;}&.tooltipped-align-left-2::before{left:10px;}",";"],(0,v.U2)("colors.neutral.emphasisPlus"),(0,v.U2)("fonts.normal"),(0,v.U2)("colors.fg.onEmphasis"),(0,v.U2)("colors.neutral.emphasisPlus"),(0,v.U2)("radii.1"),(0,v.U2)("colors.neutral.emphasisPlus"),(0,v.U2)("space.3"),(0,v.U2)("space.3"),(0,v.U2)("colors.neutral.emphasisPlus"),(0,v.U2)("space.3"),(0,v.U2)("space.3"),(0,v.U2)("colors.neutral.emphasisPlus"),(0,v.U2)("colors.neutral.emphasisPlus"),x.Z);function k({direction:e="n",children:t,className:o,text:n,noDelay:r,align:i,wrap:l,...d}){let s=f()(o,`tooltipped-${e}`,i&&`tooltipped-align-${i}-2`,r&&"tooltipped-no-delay",l&&"tooltipped-multiline");return a.createElement(w,y({role:"tooltip","aria-label":n},d,{className:s}),t)}k.displayName="Tooltip",k.alignments=["left","right"],k.directions=["n","ne","e","se","s","sw","w","nw"];let C=m.ZP.span.withConfig({displayName:"LabelGroup",componentId:"sc-6tqg8q-0"})(["& *{margin-right:",";}& *:last-child{margin-right:0;}",";"],(0,v.U2)("space.1"),x.Z);var B=o(6678);let j=m.ZP.span.withConfig({displayName:"Label",componentId:"sc-1dgcne-0"})(["align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:",";font-size:",";line-height:1;white-space:nowrap;",";",";",";"],(0,v.U2)("fontWeights.bold"),(0,v.U2)("fontSizes.0"),(0,B.variant)({variants:{default:{borderColor:"border.default"},primary:{borderColor:"fg.default"},secondary:{borderColor:"border.muted",color:"fg.muted"},accent:{borderColor:"accent.emphasis",color:"accent.fg"},success:{borderColor:"success.emphasis",color:"success.fg"},attention:{borderColor:"attention.emphasis",color:"attention.fg"},severe:{borderColor:"severe.emphasis",color:"severe.fg"},danger:{borderColor:"danger.emphasis",color:"danger.fg"},done:{borderColor:"done.emphasis",color:"done.fg"},sponsors:{borderColor:"sponsors.emphasis",color:"sponsors.fg"}}}),(0,B.variant)({prop:"size",variants:{small:{height:"20px",padding:"0 7px"},large:{height:"24px",padding:"0 10px"}}}),x.Z);j.defaultProps={size:"small",variant:"default"};var M=o(7011),I=o(853),O=(0,I.Z)("brand-bootstrap","IconBrandBootstrap",[["path",{d:"M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2",key:"svg-0"}],["path",{d:"M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2",key:"svg-1"}],["path",{d:"M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z",key:"svg-2"}]]),S=(0,I.Z)("brand-css3","IconBrandCss3",[["path",{d:"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z",key:"svg-0"}],["path",{d:"M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5",key:"svg-1"}]]),P=(0,I.Z)("brand-hexo","IconBrandHexo",[["path",{d:"M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z",key:"svg-0"}],["path",{d:"M9 8v8",key:"svg-1"}],["path",{d:"M15 8v8",key:"svg-2"}],["path",{d:"M9 12h6",key:"svg-3"}]]),Z=(0,I.Z)("brand-html5","IconBrandHtml5",[["path",{d:"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z",key:"svg-0"}],["path",{d:"M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5",key:"svg-1"}]]),T=(0,I.Z)("brand-javascript","IconBrandJavascript",[["path",{d:"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z",key:"svg-0"}],["path",{d:"M7.5 8h3v8l-2 -1",key:"svg-1"}],["path",{d:"M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5",key:"svg-2"}]]),z=(0,I.Z)("brand-nextjs","IconBrandNextjs",[["path",{d:"M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993",key:"svg-0"}],["path",{d:"M15 12v-3",key:"svg-1"}]]),E=(0,I.Z)("brand-php","IconBrandPhp",[["path",{d:"M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0",key:"svg-0"}],["path",{d:"M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653",key:"svg-1"}],["path",{d:"M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653",key:"svg-2"}],["path",{d:"M12 7.5l-1 5.5",key:"svg-3"}],["path",{d:"M11.6 10h2.4l-.5 3",key:"svg-4"}]]),_=(0,I.Z)("brand-react","IconBrandReact",[["path",{d:"M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102",key:"svg-0"}],["path",{d:"M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102",key:"svg-1"}],["path",{d:"M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2",key:"svg-2"}],["path",{d:"M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2",key:"svg-3"}],["path",{d:"M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896",key:"svg-4"}],["path",{d:"M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897",key:"svg-5"}],["path",{d:"M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z",key:"svg-6"}]]),$=(0,I.Z)("brand-typescript","IconBrandTypescript",[["path",{d:"M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5",key:"svg-0"}],["path",{d:"M9 12h4",key:"svg-1"}],["path",{d:"M11 12v6",key:"svg-2"}],["path",{d:"M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z",key:"svg-3"}]]),N=(0,I.Z)("brand-vite","IconBrandVite",[["path",{d:"M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z",key:"svg-0"}],["path",{d:"M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5",key:"svg-1"}]]),U=(0,I.Z)("network","IconNetwork",[["path",{d:"M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",key:"svg-0"}],["path",{d:"M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6",key:"svg-1"}],["path",{d:"M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6",key:"svg-2"}],["path",{d:"M6 9h12",key:"svg-3"}],["path",{d:"M3 19h7",key:"svg-4"}],["path",{d:"M14 19h7",key:"svg-5"}],["path",{d:"M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-6"}],["path",{d:"M12 15v2",key:"svg-7"}]]),R=(0,I.Z)("router","IconRouter",[["path",{d:"M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M17 17l0 .01",key:"svg-1"}],["path",{d:"M13 17l0 .01",key:"svg-2"}],["path",{d:"M15 13l0 -2",key:"svg-3"}],["path",{d:"M11.75 8.75a4 4 0 0 1 6.5 0",key:"svg-4"}],["path",{d:"M8.5 6.5a8 8 0 0 1 13 0",key:"svg-5"}]]),H=(0,I.Z)("question-mark","IconQuestionMark",[["path",{d:"M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4",key:"svg-0"}],["path",{d:"M12 19l0 .01",key:"svg-1"}]]),A=o(314),W=o(4124);let V={IconBrandBootstrap:O,IconBrandCss3:S,IconBrandHexo:P,IconBrandHtml5:Z,IconBrandJavascript:T,IconBrandNextjs:z,IconBrandPhp:E,IconBrandReact:_,IconBrandTypescript:$,IconBrandVite:N,IconNetwork:U,IconRouter:R,default:H},X=e=>{let{icon:t,...o}=e,r="string"==typeof t?V[t]:"icon"in t?"string"==typeof t.icon?V[t.icon]:t.icon:t,a="string"==typeof t?null:"title"in t?t.title:null;return a?(0,n.jsx)(k,{wrap:!0,noDelay:!0,"aria-label":a,sx:{lineHeight:0},children:(0,n.jsx)(r,{...o})}):(0,n.jsx)(r,{...o})};var D=Object.assign((0,a.memo)(e=>{let{children:t}=e,{theme:o}=(0,l.Fg)();return(0,n.jsx)(d.Z,{sx:{display:"grid",gridGap:o.space[3],gridTemplateColumns:[,,"1fr 1fr"],marginBottom:3},children:t})}),{Header:(0,a.memo)(()=>(0,n.jsxs)(d.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3,children:[(0,n.jsx)(s.Z,{as:"h1",sx:{...A.Z.style,fontWeight:700},children:"Projects"}),(0,n.jsx)("a",{href:"https://github.com/renbaoshuo",target:"_blank",rel:"noreferrer noopener",children:(0,n.jsx)(b,{"aria-label":"GitHub Profile",variant:"invisible",size:"large",icon:i.g_Y,sx:{"svg.octicon":{width:24,height:24}}})})]})),Item:(0,a.memo)(e=>{let{name:t,href:o,icons:r,description:a=" ",label:i=null,labels:s=[],...c}=e,{theme:p}=(0,l.Fg)(),u=s;return"string"==typeof u&&(u=[u]),i&&(u=[i,...u]),u=u.filter(Boolean).map(e=>"string"==typeof e?{text:e,variant:"default"}:e),(0,n.jsxs)(d.Z,{...c,borderWidth:"1px",borderStyle:"solid",borderColor:"border.default",borderRadius:2,paddingX:3,paddingY:2,children:[(0,n.jsxs)(d.Z,{display:"flex",children:[(0,n.jsxs)(d.Z,{sx:{flex:"1",display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:2},children:[(0,n.jsx)(W.Z,{href:o,sx:{fontWeight:"bold"},children:t}),u&&(0,n.jsx)(C,{children:u.map(e=>(0,n.jsx)(j,{variant:e.variant||"default",children:e.text},e.text))})]}),(0,n.jsx)(d.Z,{display:"flex",alignItems:"center",sx:{gap:1},children:null==r?void 0:r.map((e,t)=>(0,n.jsx)(X,{icon:e,size:p.fontSizes[2],color:p.colors.fg.muted},t))})]}),(0,n.jsx)(M.Z,{as:"p",sx:{marginTop:2,marginBottom:1,color:"fg.muted",fontSize:1},children:a})]})})});function F(e){let t=Object.assign({p:"p",a:"a"},(0,r.ah)(),e.components);return D||L("Projects",!1),D.Header||L("Projects.Header",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(D.Header,{}),"\n",(0,n.jsx)(D,{children:e.projects.map((e,t)=>(0,n.jsx)(D.Item,e,t))}),"\n",(0,n.jsxs)(t.p,{children:["You can visit ",(0,n.jsx)(t.a,{href:"https://github.com/renbaoshuo",children:"my GitHub profile"})," for more projects."]})]})}var q=!0,G=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(F,e)})):F(e)};function L(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2703:function(e,t,o){"use strict";var n=o(414);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,o,r,a,i){if(i!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return o.PropTypes=o,o}},5697:function(e,t,o){e.exports=o(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8269)}),_N_E=e.O()}]);