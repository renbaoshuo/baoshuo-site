"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6164],{4019:function(e,t,r){r.d(t,{V:function(){return H}});var n=r(2265),o=r(5229),a=r(6835),i=r(1826),l=r(9739),s=r(26),d=r(4560),c=r(8712),u=r(564),f=r(1381),m=r(4014),g=r(7),p=r(2357),b=r(2307),h=r(5168),v=r(8168);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let w={position:"relative",overflow:"auto"};function x({"aria-label":e,"aria-labelledby":t,children:r,...o}){let a=n.useRef(null),l=function(e){let[t,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(null===e.current)return;let t=new ResizeObserver(e=>{for(let t of e)if(t.target.scrollHeight>t.target.clientHeight||t.target.scrollWidth>t.target.clientWidth){r(!0);break}});return t.observe(e.current),()=>{t.disconnect()}},[e]),t}(a);return n.createElement(i.Z,y({},o,l?{"aria-label":e,"aria-labelledby":t,role:"region",tabIndex:0}:{},{ref:a,sx:w}),r)}function E(){return(E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}x.displayName="ScrollableRegion";let k=(0,o.ZP)("div").withConfig({displayName:"Dialog__Backdrop",componentId:"sc-uaxjsn-0"})(["position:fixed;top:0;left:0;bottom:0;right:0;display:flex;align-items:center;justify-content:center;background-color:",";animation:dialog-backdrop-appear 200ms ",";&[data-position-regular='center']{align-items:center;justify-content:center;}&[data-position-regular='left']{align-items:center;justify-content:flex-start;}&[data-position-regular='right']{align-items:center;justify-content:flex-end;}.DialogOverflowWrapper{flex-grow:1;}@media (max-width:767px){&[data-position-narrow='center']{align-items:center;justify-content:center;}&[data-position-narrow='bottom']{align-items:end;justify-content:center;}}@keyframes dialog-backdrop-appear{0%{opacity:0;}100%{opacity:1;}}"],(0,l.U2)("colors.primer.canvas.backdrop"),(0,l.U2)("animation.easeOutCubic")),C={small:"480px",large:"640px",auto:"auto"},Z={small:"296px",medium:"320px",large:"480px",xlarge:"640px"},O=o.ZP.div.withConfig({displayName:"Dialog__StyledDialog",componentId:"sc-uaxjsn-1"})(["display:flex;flex-direction:column;background-color:",";box-shadow:",";width:",";height:",";min-width:296px;max-width:calc(100dvw - 64px);max-height:calc(100dvh - 64px);border-radius:12px;opacity:1;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-scaleFade 0.2s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}&[data-position-regular='center']{border-radius:var(--borderRadius-large,0.75rem);@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-scaleFade 0.2s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}&[data-position-regular='left']{height:100dvh;max-height:unset;border-radius:var(--borderRadius-large,0.75rem);border-top-left-radius:0;border-bottom-left-radius:0;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-slideInRight 0.25s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}&[data-position-regular='right']{height:100dvh;max-height:unset;border-radius:var(--borderRadius-large,0.75rem);border-top-right-radius:0;border-bottom-right-radius:0;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-slideInLeft 0.25s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}@media (max-width:767px){&[data-position-narrow='center']{border-radius:var(--borderRadius-large,0.75rem);width:",";height:",";}&[data-position-narrow='bottom']{width:100dvw;height:auto;max-width:100dvw;max-height:calc(100dvh - 64px);border-radius:var(--borderRadius-large,0.75rem);border-bottom-right-radius:0;border-bottom-left-radius:0;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-slideUp 0.25s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}&[data-position-narrow='fullscreen']{width:100%;max-width:100dvw;height:100%;max-height:100dvh;border-radius:unset !important;flex-grow:1;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-scaleFade 0.2s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}}@keyframes Overlay--motion-scaleFade{0%{opacity:0;transform:scale(0.5);}100%{opacity:1;transform:scale(1);}}@keyframes Overlay--motion-slideUp{from{transform:translateY(100%);}}@keyframes Overlay--motion-slideInRight{from{transform:translateX(-100%);}}@keyframes Overlay--motion-slideInLeft{from{transform:translateX(100%);}}",";"],(0,l.U2)("colors.canvas.overlay"),(0,l.U2)("shadows.overlay.shadow"),e=>{var t;return Z[null!==(t=e.width)&&void 0!==t?t:"xlarge"]},e=>{var t;return C[null!==(t=e.height)&&void 0!==t?t:"auto"]},e=>{var t;return Z[null!==(t=e.width)&&void 0!==t?t:"xlarge"]},e=>{var t;return C[null!==(t=e.height)&&void 0!==t?t:"auto"]},g.Z),_=({dialogLabelId:e,title:t,subtitle:r,dialogDescriptionId:o,onClose:a})=>{let l=(0,n.useCallback)(()=>{a("close-button")},[a]);return n.createElement(H.Header,null,n.createElement(i.Z,{display:"flex"},n.createElement(i.Z,{display:"flex",px:2,py:"6px",flexDirection:"column",flexGrow:1},n.createElement(H.Title,{id:e},null!=t?t:"Dialog"),r&&n.createElement(H.Subtitle,{id:o},r)),n.createElement(H.CloseButton,{onClose:l})))};_.displayName="DefaultHeader";let R=({children:e})=>n.createElement(H.Body,null,e);R.displayName="DefaultBody";let j=({footerButtons:e})=>{let{containerRef:t}=(0,h.v)({bindKeys:c.Qw.ArrowHorizontal|c.Qw.Tab,focusInStrategy:"closest"});return e?n.createElement(H.Footer,{ref:t},n.createElement(H.Buttons,{buttons:e})):null},U={narrow:"center",regular:"center"},z=n.forwardRef((e,t)=>{let{title:r="Dialog",subtitle:o="",renderHeader:a,renderBody:i,renderFooter:l,onClose:s,role:c="dialog",width:g="xlarge",height:p="auto",footerButtons:b=[],position:h=U,returnFocusRef:y,initialFocusRef:w,sx:C}=e,Z=(0,f.M)(),z=(0,f.M)(),N=(0,n.useRef)(null);for(let e of b)e.autoFocus&&(e.ref=N);let D={...e,title:r,subtitle:o,role:c,dialogLabelId:Z,dialogDescriptionId:z},I=(0,n.useCallback)(e=>{e.target===e.currentTarget&&s("escape")},[s]),P=(0,n.useRef)(null);(0,u.z)(t,P);let F=(0,n.useRef)(null);(0,m.P)({containerRef:P,initialFocusRef:null!=w?w:N,restoreFocusOnCleanUp:null==y||!y.current,returnFocusRef:y}),(0,d.o)(e=>{s("escape"),e.preventDefault()},[s]),n.useEffect(()=>{let e=document.body.style.overflow||"";if("hidden"!==e)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[]);let B=(null!=a?a:_)(D),S=(null!=i?i:R)(D),H=(null!=l?l:j)(D),L="string"==typeof h?{"data-position-regular":h}:Object.fromEntries(Object.entries(h).map(([e,t])=>[`data-position-${e}`,t]));return n.createElement(n.Fragment,null,n.createElement(v.h,null,n.createElement(k,E({ref:F},L,{onClick:I}),n.createElement(O,E({width:g,height:p,ref:P,role:c,"aria-labelledby":Z,"aria-describedby":z,"aria-modal":!0},L,{sx:C}),B,n.createElement(x,{"aria-labelledby":Z,className:"DialogOverflowWrapper"},S),H))))});z.displayName="Dialog";let N=o.ZP.div.withConfig({displayName:"Dialog__Header",componentId:"sc-uaxjsn-2"})(["box-shadow:0 1px 0 ",";padding:",";z-index:1;flex-shrink:0;",";"],(0,l.U2)("colors.border.default"),(0,l.U2)("space.2"),g.Z),D=o.ZP.h1.withConfig({displayName:"Dialog__Title",componentId:"sc-uaxjsn-3"})(["font-size:",";font-weight:",";margin:0;",";"],(0,l.U2)("fontSizes.1"),(0,l.U2)("fontWeights.bold"),g.Z),I=o.ZP.h2.withConfig({displayName:"Dialog__Subtitle",componentId:"sc-uaxjsn-4"})(["font-size:",";color:",";margin:0;margin-top:",";font-weight:normal;",";"],(0,l.U2)("fontSizes.0"),(0,l.U2)("colors.fg.muted"),(0,l.U2)("space.1"),g.Z),P=o.ZP.div.withConfig({displayName:"Dialog__Body",componentId:"sc-uaxjsn-5"})(["flex-grow:1;overflow:auto;padding:",";",";"],(0,l.U2)("space.3"),g.Z),F=o.ZP.div.withConfig({displayName:"Dialog__Footer",componentId:"sc-uaxjsn-6"})(["box-shadow:0 -1px 0 ",";padding:",";display:flex;flex-flow:wrap;justify-content:flex-end;gap:",";z-index:1;flex-shrink:0;",";"],(0,l.U2)("colors.border.default"),(0,l.U2)("space.3"),(0,l.U2)("space.2"),g.Z),B=(0,o.ZP)(a.r).withConfig({displayName:"Dialog__DialogCloseButton",componentId:"sc-uaxjsn-7"})(["border-radius:4px;background:transparent;border:0;vertical-align:middle;color:",";padding:",";align-self:flex-start;line-height:normal;box-shadow:none;"],(0,l.U2)("colors.fg.muted"),(0,l.U2)("space.2")),S=({onClose:e})=>n.createElement(B,{"aria-label":"Close",onClick:e},n.createElement(p.Z,{icon:b.b0D}));S.displayName="CloseButton";let H=Object.assign(z,{Header:N,Title:D,Subtitle:I,Body:P,Footer:F,Buttons:({buttons:e})=>{var t;let r=(0,s.i)(null===(t=e.find(e=>e.autoFocus))||void 0===t?void 0:t.ref),o=0,[i,l]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(1===i){var e;null===(e=r.current)||void 0===e||e.focus()}else l(i+1)},[r,i]),n.createElement(n.Fragment,null,e.map((e,t)=>{let{content:i,buttonType:l="default",autoFocus:s=!1,...d}=e;return n.createElement(a.r,E({key:t},d,{variant:"normal"===l?"default":l,ref:s&&0===o?(o++,r):null}),i)}))},CloseButton:S})},5945:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(2265),o=r(5229),a=r(2166),i=r(9739),l=r(7);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let d=(0,a.bU)({variants:{default:{color:"fg.default",backgroundColor:"accent.subtle",borderColor:"accent.muted",svg:{color:"accent.fg"}},success:{color:"fg.default",backgroundColor:"success.subtle",borderColor:"success.muted",svg:{color:"success.fg"}},danger:{color:"fg.default",backgroundColor:"danger.subtle",borderColor:"danger.muted",svg:{color:"danger.fg"}},warning:{color:"fg.default",backgroundColor:"attention.subtle",borderColor:"attention.muted",svg:{color:"attention.fg"}}}}),c=o.ZP.div.withConfig({displayName:"Flash__StyledFlash",componentId:"sc-hzrzfc-0"})(["position:relative;color:",";padding:",";border-style:solid;border-width:",";border-radius:",";margin-top:",";p:last-child{margin-bottom:0;}svg{margin-right:",";}",";",";"],(0,i.U2)("colors.fg.default"),(0,i.U2)("space.3"),e=>e.full?"1px 0px":"1px",e=>e.full?"0":(0,i.U2)("radii.2"),e=>e.full?"-1px":"0",(0,i.U2)("space.2"),d,l.Z),u=n.forwardRef(function({as:e,variant:t="default",...r},o){return n.createElement(c,s({ref:o,as:e,variant:t},r))})},2357:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(2265),o=r(5229),a=r(7);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let l=n.forwardRef((e,t)=>{let{icon:r,...o}=e;return n.createElement(r,i({},o,{ref:t}))}),s=(0,o.ZP)(l).withConfig({displayName:"Octicon",componentId:"sc-9kayk9-0"})(["",""],({color:e,sx:t})=>(0,a.Z)({sx:{color:e,...t}}))},8168:function(e,t,r){r.d(t,{h:function(){return d}});var n=r(2265),o=r(4887),a=r(6576);let i="__primerPortalRoot__",l="__default__",s={},d=({children:e,onMount:t,containerName:r})=>{let d=n.useRef(null);if(!d.current){let e=document.createElement("div");e.style.position="relative",e.style.zIndex="1",d.current=e}let c=d.current;return(0,a.Z)(()=>{let e=r;void 0===e&&(e=l,function(){let e=s[l];if(!e||!document.body.contains(e)){let e=document.getElementById(i);if(!(e instanceof Element)){(e=document.createElement("div")).setAttribute("id",i),e.style.position="absolute",e.style.top="0",e.style.left="0";let t=document.querySelector("[data-portal-root]");t?t.appendChild(e):document.body.appendChild(e)}!function(e,t=l){s[t]=e}(e)}}());let n=s[e];if(!n)throw Error(`Portal container '${r}' is not yet registered. Container must be registered with registerPortal before use.`);return n.appendChild(c),null==t||t(),()=>{n.removeChild(c)}},[c]),(0,o.createPortal)(e,c)}},4014:function(e,t,r){r.d(t,{P:function(){return i}});var n=r(2265),o=r(8712),a=r(26);function i(e,t=[]){let r=(0,a.i)(null==e?void 0:e.containerRef),i=(0,a.i)(null==e?void 0:e.initialFocusRef),l=null==e?void 0:e.disabled,s=n.useRef(),d=n.useRef(null);function c(){var t;null===(t=s.current)||void 0===t||t.abort(),null!=e&&e.returnFocusRef&&e.returnFocusRef.current instanceof HTMLElement?e.returnFocusRef.current.focus():null!=e&&e.restoreFocusOnCleanUp&&d.current instanceof HTMLElement&&(d.current.focus(),d.current=null)}return d.current||null!=e&&e.disabled||(d.current=document.activeElement),n.useEffect(()=>{if(r.current instanceof HTMLElement){if(l)c();else{var e;return s.current=(0,o.eI)(r.current,null!==(e=i.current)&&void 0!==e?e:void 0),()=>{c()}}}},[r,i,l,...t]),{containerRef:r,initialFocusRef:i}}},6576:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(2265);let o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect},7138:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(231),o=r.n(n)},5487:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(2265),o={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};let a=(e,t,r,a)=>{let i=(0,n.forwardRef)((r,i)=>{let{color:l="currentColor",size:s=24,stroke:d=2,title:c,className:u,children:f,...m}=r;return(0,n.createElement)("svg",{ref:i,...o[e],width:s,height:s,className:["tabler-icon","tabler-icon-".concat(t),u].join(" "),..."filled"===e?{fill:l}:{strokeWidth:d,stroke:l},...m},[c&&(0,n.createElement)("title",{key:"svg-title"},c),...a.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(f)?f:[f]])});return i.displayName="".concat(r),i}},5935:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(5487).Z)("outline","brand-mastodon","IconBrandMastodon",[["path",{d:"M18.648 15.254c-1.816 1.763 -6.648 1.626 -6.648 1.626a18.262 18.262 0 0 1 -3.288 -.256c1.127 1.985 4.12 2.81 8.982 2.475c-1.945 2.013 -13.598 5.257 -13.668 -7.636l-.026 -1.154c0 -3.036 .023 -4.115 1.352 -5.633c1.671 -1.91 6.648 -1.666 6.648 -1.666s4.977 -.243 6.648 1.667c1.329 1.518 1.352 2.597 1.352 5.633s-.456 4.074 -1.352 4.944z",key:"svg-0"}],["path",{d:"M12 11.204v-2.926c0 -1.258 -.895 -2.278 -2 -2.278s-2 1.02 -2 2.278v4.722m4 -4.722c0 -1.258 .895 -2.278 2 -2.278s2 1.02 2 2.278v4.722",key:"svg-1"}]])},1444:function(e,t,r){r.d(t,{Z:function(){return a}});let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=/^[a-zA-Z]:\\/;function a(e){return!function(e){if("string"!=typeof e)throw TypeError(`Expected a \`string\`, got \`${typeof e}\``);return!o.test(e)&&n.test(e)}(e)}}}]);