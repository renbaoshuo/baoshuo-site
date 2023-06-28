(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4184:function(t,e){var o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var n=typeof o;if("string"===n||"number"===n)t.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&t.push(i)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){t.push(o.toString());continue}for(var l in o)a.call(o,l)&&o[l]&&t.push(l)}}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0!==(o=(function(){return r}).apply(e,[]))&&(t.exports=o)}()},8269:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return o(9982)}])},9982:function(t,e,o){"use strict";o.r(e),o.d(e,{__N_SSG:function(){return L},default:function(){return $}});var a=o(5893),r=o(1151),n=o(2962),i=o(5529),l=o(4555),s=o(7667),p=o.n(s),d=o(8386),c=o(2483),h=o(5308),g=o(4184),f=o.n(g),m=o(9521),u=o(5390),v=o(5173);function b(){return(b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t}).apply(this,arguments)}let y=m.ZP.span.withConfig({displayName:"Tooltip__TooltipBase",componentId:"sc-uha8qm-0"})(["position:relative;&::before{position:absolute;z-index:1000001;display:none;width:0px;height:0px;color:",";pointer-events:none;content:'';border:6px solid transparent;opacity:0;}&::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 ",";-webkit-font-smoothing:subpixel-antialiased;color:",";text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:",";border-radius:",";opacity:0;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:hover,&:active,&:focus,&:focus-within{&::before,&::after{display:inline-block;text-decoration:none;animation-name:tooltip-appear;animation-duration:0.1s;animation-fill-mode:forwards;animation-timing-function:ease-in;animation-delay:0.4s;}}&.tooltipped-no-delay:hover,&.tooltipped-no-delay:active,&.tooltipped-no-delay:focus,&.tooltipped-no-delay:focus-within{&::before,&::after{animation-delay:0s;}}&.tooltipped-multiline:hover,&.tooltipped-multiline:active,&.tooltipped-multiline:focus,&.tooltipped-multiline:focus-within{&::after{display:table-cell;}}&.tooltipped-s,&.tooltipped-se,&.tooltipped-sw{&::after{top:100%;right:50%;margin-top:6px;}&::before{top:auto;right:50%;bottom:-7px;margin-right:-6px;border-bottom-color:",";}}&.tooltipped-se{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-sw::after{margin-right:-",";}&.tooltipped-n,&.tooltipped-ne,&.tooltipped-nw{&::after{right:50%;bottom:100%;margin-bottom:6px;}&::before{top:-7px;right:50%;bottom:auto;margin-right:-6px;border-top-color:",";}}&.tooltipped-ne{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-nw::after{margin-right:-",";}&.tooltipped-s::after,&.tooltipped-n::after{transform:translateX(50%);}&.tooltipped-w{&::after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%);}&::before{top:50%;bottom:50%;left:-7px;margin-top:-6px;border-left-color:",";}}&.tooltipped-e{&::after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%);}&::before{top:50%;right:-7px;bottom:50%;margin-top:-6px;border-right-color:",";}}&.tooltipped-multiline{&::after{width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate;}&.tooltipped-s::after,&.tooltipped-n::after{right:auto;left:50%;transform:translateX(-50%);}&.tooltipped-w::after,&.tooltipped-e::after{right:100%;}}&.tooltipped-align-right-2::after{right:0;margin-right:0;}&.tooltipped-align-right-2::before{right:15px;}&.tooltipped-align-left-2::after{left:0;margin-left:0;}&.tooltipped-align-left-2::before{left:10px;}",";"],(0,u.U2)("colors.neutral.emphasisPlus"),(0,u.U2)("fonts.normal"),(0,u.U2)("colors.fg.onEmphasis"),(0,u.U2)("colors.neutral.emphasisPlus"),(0,u.U2)("radii.1"),(0,u.U2)("colors.neutral.emphasisPlus"),(0,u.U2)("space.3"),(0,u.U2)("space.3"),(0,u.U2)("colors.neutral.emphasisPlus"),(0,u.U2)("space.3"),(0,u.U2)("space.3"),(0,u.U2)("colors.neutral.emphasisPlus"),(0,u.U2)("colors.neutral.emphasisPlus"),v.Z);function x({direction:t="n",children:e,className:o,text:a,noDelay:r,align:n,wrap:i,...l}){let s=f()(o,`tooltipped-${t}`,n&&`tooltipped-align-${n}-2`,r&&"tooltipped-no-delay",i&&"tooltipped-multiline");return p().createElement(y,b({role:"tooltip","aria-label":a},l,{className:s}),e)}x.displayName="Tooltip",x.alignments=["left","right"],x.directions=["n","ne","e","se","s","sw","w","nw"];let k=m.ZP.span.withConfig({displayName:"LabelGroup",componentId:"sc-6tqg8q-0"})(["& *{margin-right:",";}& *:last-child{margin-right:0;}",";"],(0,u.U2)("space.1"),v.Z);var M=o(6678);let w=m.ZP.span.withConfig({displayName:"Label",componentId:"sc-1dgcne-0"})(["align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:",";font-size:",";line-height:1;white-space:nowrap;",";",";",";"],(0,u.U2)("fontWeights.bold"),(0,u.U2)("fontSizes.0"),(0,M.variant)({variants:{default:{borderColor:"border.default"},primary:{borderColor:"fg.default"},secondary:{borderColor:"border.muted",color:"fg.muted"},accent:{borderColor:"accent.emphasis",color:"accent.fg"},success:{borderColor:"success.emphasis",color:"success.fg"},attention:{borderColor:"attention.emphasis",color:"attention.fg"},severe:{borderColor:"severe.emphasis",color:"severe.fg"},danger:{borderColor:"danger.emphasis",color:"danger.fg"},done:{borderColor:"done.emphasis",color:"done.fg"},sponsors:{borderColor:"sponsors.emphasis",color:"sponsors.fg"}}}),(0,M.variant)({prop:"size",variants:{small:{height:"20px",padding:"0 7px"},large:{height:"24px",padding:"0 10px"}}}),v.Z);w.defaultProps={size:"small",variant:"default"};var j=o(7011),I=o(853),Z=(0,I.Z)("brand-bootstrap","IconBrandBootstrap",[["path",{d:"M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2",key:"svg-0"}],["path",{d:"M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2",key:"svg-1"}],["path",{d:"M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z",key:"svg-2"}]]),B=(0,I.Z)("brand-css3","IconBrandCss3",[["path",{d:"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z",key:"svg-0"}],["path",{d:"M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5",key:"svg-1"}]]),P=(0,I.Z)("brand-hexo","IconBrandHexo",[["path",{d:"M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z",key:"svg-0"}],["path",{d:"M9 8v8",key:"svg-1"}],["path",{d:"M15 8v8",key:"svg-2"}],["path",{d:"M9 12h6",key:"svg-3"}]]),_=(0,I.Z)("brand-html5","IconBrandHtml5",[["path",{d:"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z",key:"svg-0"}],["path",{d:"M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5",key:"svg-1"}]]),C=(0,I.Z)("brand-javascript","IconBrandJavascript",[["path",{d:"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z",key:"svg-0"}],["path",{d:"M7.5 8h3v8l-2 -1",key:"svg-1"}],["path",{d:"M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5",key:"svg-2"}]]),z=(0,I.Z)("brand-nextjs","IconBrandNextjs",[["path",{d:"M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993",key:"svg-0"}],["path",{d:"M15 12v-3",key:"svg-1"}]]),U=(0,I.Z)("brand-php","IconBrandPhp",[["path",{d:"M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0",key:"svg-0"}],["path",{d:"M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653",key:"svg-1"}],["path",{d:"M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653",key:"svg-2"}],["path",{d:"M12 7.5l-1 5.5",key:"svg-3"}],["path",{d:"M11.6 10h2.4l-.5 3",key:"svg-4"}]]),N=(0,I.Z)("brand-react","IconBrandReact",[["path",{d:"M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102",key:"svg-0"}],["path",{d:"M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102",key:"svg-1"}],["path",{d:"M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2",key:"svg-2"}],["path",{d:"M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2",key:"svg-3"}],["path",{d:"M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896",key:"svg-4"}],["path",{d:"M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897",key:"svg-5"}],["path",{d:"M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z",key:"svg-6"}]]),O=(0,I.Z)("brand-typescript","IconBrandTypescript",[["path",{d:"M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5",key:"svg-0"}],["path",{d:"M9 12h4",key:"svg-1"}],["path",{d:"M11 12v6",key:"svg-2"}],["path",{d:"M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z",key:"svg-3"}]]),S=(0,I.Z)("brand-vite","IconBrandVite",[["path",{d:"M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z",key:"svg-0"}],["path",{d:"M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5",key:"svg-1"}]]),T=(0,I.Z)("network","IconNetwork",[["path",{d:"M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",key:"svg-0"}],["path",{d:"M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6",key:"svg-1"}],["path",{d:"M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6",key:"svg-2"}],["path",{d:"M6 9h12",key:"svg-3"}],["path",{d:"M3 19h7",key:"svg-4"}],["path",{d:"M14 19h7",key:"svg-5"}],["path",{d:"M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-6"}],["path",{d:"M12 15v2",key:"svg-7"}]]),H=(0,I.Z)("router","IconRouter",[["path",{d:"M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M17 17l0 .01",key:"svg-1"}],["path",{d:"M13 17l0 .01",key:"svg-2"}],["path",{d:"M15 13l0 -2",key:"svg-3"}],["path",{d:"M11.75 8.75a4 4 0 0 1 6.5 0",key:"svg-4"}],["path",{d:"M8.5 6.5a8 8 0 0 1 13 0",key:"svg-5"}]]),E=(0,I.Z)("question-mark","IconQuestionMark",[["path",{d:"M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4",key:"svg-0"}],["path",{d:"M12 19l0 .01",key:"svg-1"}]]),G=o(314),Y=o(8053);let R={IconBrandBootstrap:Z,IconBrandCss3:B,IconBrandHexo:P,IconBrandHtml5:_,IconBrandJavascript:C,IconBrandNextjs:z,IconBrandPhp:U,IconBrandReact:N,IconBrandTypescript:O,IconBrandVite:S,IconNetwork:T,IconRouter:H,default:E},W=(0,s.memo)(()=>(0,a.jsxs)(c.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3,children:[(0,a.jsx)(h.Z,{as:"h1",sx:{...G.Z.style,fontWeight:700},children:"Projects"}),(0,a.jsx)(l.h,{as:"a",href:"https://github.com/renbaoshuo",target:"_blank",rel:"noreferrer noopener","aria-label":"GitHub Profile",variant:"invisible",size:"large",icon:i.g_Y,sx:{"svg.octicon":{width:24,height:24}}})]})),X=t=>{let{icon:e,...o}=t,r="string"==typeof e?R[e]:"icon"in e?"string"==typeof e.icon?R[e.icon]:e.icon:e,n="string"==typeof e?null:"title"in e?e.title:null;return n?(0,a.jsx)(x,{wrap:!0,noDelay:!0,"aria-label":n,sx:{lineHeight:0},children:(0,a.jsx)(r,{...o})}):(0,a.jsx)(r,{...o})},q=(0,s.memo)(t=>{let{name:e,href:o,icons:r,description:n=" ",label:i=null,labels:l=[],...s}=t,{theme:p}=(0,d.Fg)(),h=l;return"string"==typeof h&&(h=[h]),i&&(h=[i,...h]),h=h.filter(Boolean).map(t=>"string"==typeof t?{text:t,variant:"default"}:t),(0,a.jsxs)(c.Z,{...s,borderWidth:"1px",borderStyle:"solid",borderColor:"border.default",borderRadius:2,paddingX:3,paddingY:2,children:[(0,a.jsxs)(c.Z,{display:"flex",children:[(0,a.jsxs)(c.Z,{sx:{flex:"1",display:"flex",flexWrap:"wrap",alignItems:"center",columnGap:2},children:[(0,a.jsx)(Y.Z,{href:o,sx:{fontWeight:"bold"},children:e}),h&&(0,a.jsx)(k,{children:h.map(t=>(0,a.jsx)(w,{variant:t.variant||"default",children:t.text},t.text))})]}),(0,a.jsx)(c.Z,{display:"flex",alignItems:"center",sx:{gap:1},children:null==r?void 0:r.map((t,e)=>(0,a.jsx)(X,{icon:t,size:p.fontSizes[2],color:p.colors.fg.muted},e))})]}),(0,a.jsx)(j.Z,{as:"p",sx:{marginTop:2,marginBottom:1,color:"fg.muted",fontSize:1},children:n})]})});var F=Object.assign((0,s.memo)(t=>{let{children:e}=t,{theme:o}=(0,d.Fg)();return(0,a.jsx)(c.Z,{sx:{display:"grid",gridGap:o.space[3],gridTemplateColumns:[,,"1fr 1fr"],marginBottom:3},children:e})}),{Header:(0,s.memo)(W),Item:q}),A=o(329);let V=t=>{let{title:e,description:o,children:r}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.PB,{title:e,description:o}),(0,a.jsx)(A.VY,{title:"Projects",magicTitle:!1,trailingAccessory:(0,a.jsx)(l.h,{as:"a",href:"https://github.com/renbaoshuo",target:"_blank",rel:"noreferrer noopener","aria-label":"GitHub Profile",variant:"invisible",icon:i.g_Y,sx:{"svg.octicon":{width:24,height:24}}}),children:r})]})};function J(t){let e=Object.assign({p:"p",a:"a"},(0,r.ah)(),t.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(F,{children:t.projects.map((t,e)=>(0,a.jsx)(F.Item,t,e))}),"\n",(0,a.jsxs)(e.p,{children:["You can visit ",(0,a.jsx)(e.a,{href:"https://github.com/renbaoshuo",children:"my GitHub profile"})," for more projects."]})]})}var L=!0,$=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(V,Object.assign({},t,{children:(0,a.jsx)(J,t)}))}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8269)}),_N_E=t.O()}]);