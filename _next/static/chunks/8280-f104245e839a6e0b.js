(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8280],{2383:function(e,t,i){"use strict";i.d(t,{Z:function(){return m}});var a=i(2265),n=i(5229),r=i(9739);i(8712);var l=i(564),o=i(7);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(null,arguments)}let d=n.ZP.h2.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-1c1dgg0-0"})(["font-weight:",";font-size:",";margin:0;",";"],(0,r.U2)("fontWeights.bold"),(0,r.U2)("fontSizes.5"),o.Z),m=(0,a.forwardRef)(({as:e="h2",...t},i)=>{let n=a.useRef(null);return(0,l.z)(i,n),a.createElement(d,s({as:e},t,{ref:n}))});m.displayName="Heading"},8324:function(e,t,i){"use strict";i.d(t,{m:function(){return W}});var a,n=i(2265),r=i(1826);let l=!!("undefined"!=typeof window&&window.document&&window.document.createElement);function o(e,t){let i=(0,n.useContext)(s),[a,r]=n.useState(()=>void 0!==i[e]?i[e]:void 0!==t?t:!!l&&window.matchMedia(e).matches);return(0,n.useEffect)(()=>{void 0!==i[e]&&r(i[e])},[i,e]),(0,n.useEffect)(()=>{if(void 0!==i[e])return;function t(e){r(e.matches)}let a=window.matchMedia(e);return a.addEventListener?a.addEventListener("change",t):a.addListener(t),r(a.matches),()=>{a.addEventListener?a.removeEventListener("change",t):a.removeListener(t)}},[i,e]),a}let s=(0,n.createContext)({});function d(e){return"object"==typeof e&&Object.keys(e).some(e=>["narrow","regular","wide"].includes(e))}var m=i(9535),c=i.n(m),g=i(2383),u=i(2307),f=i(1131),p=i(3703);let h={xsmall:{width:"320px"},small:{width:p.Z.breakpoints[0]},medium:{width:p.Z.breakpoints[1]},large:{width:p.Z.breakpoints[2]},xlarge:{width:p.Z.breakpoints[3]},xxlarge:{width:"1400px"}};function x(e){return`@media screen and (min-width: ${e})`}let w={narrow:(a=h.medium.width,`@media screen and (max-width: calc(${a} - 0.02px))`),regular:x(h.medium.width),wide:x(h.xxlarge.width)};function y(e,t,i){if(!d(e))return{[t]:i(e)};{let a="narrow"in e?{[w.narrow]:{[t]:i(e.narrow)}}:{},n="regular"in e?{[w.regular]:{[t]:i(e.regular)}}:{},r="wide"in e?{[w.wide]:{[t]:i(e.wide)}}:{};return!function(e){if("narrow"in e&&"regular"in e&&"wide"in e){let t=Object.values(e);return t.every(e=>e===t[0])}return!1}(e)?"regular"in e&&"wide"in e&&e.regular===e.wide?{...a,...n}:{...a,...n,...r}:{[t]:i(e.narrow)}}}var v=i(26);i(8712);let b={narrow:!1,regular:!0,wide:!0},N={narrow:!0,regular:!1,wide:!1},H=n.forwardRef(({children:e,className:t,sx:i={},as:a="div"},l)=>{let o={display:"grid",gridTemplateColumns:"auto auto auto auto 1fr",gridTemplateAreas:`
      'context-area context-area context-area context-area context-area'
      'leading-action  breadcrumbs title-area trailing-action actions'
      'description description description description description'
      'navigation navigation navigation navigation navigation'
    `,'&:has([data-component="TitleArea"][data-size-variant="large"])':{fontSize:"var(--custom-font-size, var(--text-title-size-large, 2rem))",lineHeight:"var(--custom-line-height, var(--text-title-lineHeight-large, 1.5))",fontWeight:"var(--custom-font-weight, var(--base-text-weight-normal, 400))","--title-line-height":"var(--custom-line-height, var(--text-title-lineHeight-large, 1.5))"},'&:has([data-component="TitleArea"][data-size-variant="medium"])':{fontSize:"var(--custom-font-size, var(--text-title-size-medium, 1.25rem))",lineHeight:"var(--custom-line-height, var(--text-title-lineHeight-medium, 1.6))",fontWeight:"var(--custom-font-weight, var(--base-text-weight-semibold, 600))","--title-line-height":"var(--custom-line-height, var(--text-title-lineHeight-medium, 1.6))"},'&:has([data-component="TitleArea"][data-size-variant="subtitle"])':{fontSize:"var(--custom-font-size, var(--text-title-size-medium, 1.25rem))",lineHeight:"var(--custom-line-height, var(--text-title-lineHeight-medium, 1.6))",fontWeight:"var(--custom-font-weight, var(--base-text-weight-normal, 400))","--title-line-height":"var(--custom-line-height, var(--text-title-lineHeight-medium, 1.6))"},'[data-component="PH_LeadingAction"], [data-component="PH_TrailingAction"],[data-component="PH_Actions"], [data-component="PH_LeadingVisual"], [data-component="PH_TrailingVisual"]':{height:"calc(var(--title-line-height) * 1em)"}},s=(0,v.i)(l);return(0,n.useEffect)(function(){},[e,s]),n.createElement(r.Z,{ref:s,as:a,className:t,sx:c()(o,i)},e)}),E=({children:e,className:t,hidden:i=b,sx:a={}})=>{let l={gridRow:1,gridArea:"context-area",display:"flex",flexDirection:"row",alignItems:"center",paddingBottom:"0.5rem",gap:"0.5rem",...y(i,"display",e=>e?"none":"flex"),fontWeight:"initial",lineHeight:"var(--text-body-lineHeight-medium, 1.4285)",fontSize:"var(--text-body-size-medium, 0.875rem)"};return n.createElement(r.Z,{className:t,sx:c()(l,a)},e)};E.displayName="ContextArea";let A=n.forwardRef(({children:e,className:t,sx:i={},href:a,"aria-label":l,as:o="a",hidden:s=b},d)=>n.createElement(n.Fragment,null,n.createElement(f.Z,{ref:d,as:o,"aria-label":l,muted:!0,className:t,sx:c()({display:"flex",alignItems:"center",order:0,gap:"0.5rem",...y(s,"display",e=>e?"none":"flex")},i),href:a},n.createElement(u.Y4O,null),n.createElement(r.Z,null,e))));A.displayName="ParentLink";let z=({children:e,className:t,sx:i={},hidden:a=b})=>n.createElement(r.Z,{className:t,sx:c()({display:"flex",order:1,...y(a,"display",e=>e?"none":"flex")},i)},e);z.displayName="ContextBar";let _=({children:e,className:t,sx:i={},hidden:a=b})=>n.createElement(r.Z,{className:t,sx:c()({display:"flex",flexDirection:"row",order:2,alignItems:"center",gap:"0.5rem",flexGrow:"1",justifyContent:"right",...y(a,"display",e=>e?"none":"flex")},i)},e);_.displayName="ContextAreaActions";let Z=n.forwardRef(({children:e,className:t,sx:i={},hidden:a=!1,variant:l="medium"},s)=>{let m=(0,v.i)(s),g=function(e,t){let i=o("(max-width: calc(768px - 0.02px))",!1),a=o("(min-width: 768px)",!1),n=o("(min-width: 1400px)",!1);return d(e)?i&&"narrow"in e?e.narrow:n&&"wide"in e?e.wide:a&&"regular"in e?e.regular:t:e}(l,"medium");return n.createElement(r.Z,{className:t,ref:m,"data-component":"TitleArea","data-size-variant":g,sx:c()({gridRow:2,gridArea:"title-area",display:"flex",gap:"0.5rem",...y(a,"display",e=>e?"none":"flex"),flexDirection:"row",alignItems:"flex-start"},i)},e)});Z.displayName="TitleArea";let S=({children:e,className:t,sx:i={},hidden:a=N})=>{let l={},{height:o}=i;return o&&(l["--custom-height"]=o),n.createElement(r.Z,{className:t,"data-component":"PH_LeadingAction",sx:c()({gridRow:2,gridArea:"leading-action",paddingRight:"0.5rem",display:"flex",...y(a,"display",e=>e?"none":"flex"),alignItems:"center"},i),style:l},e)};S.displayName="LeadingAction";let R=({children:e,className:t,sx:i={},hidden:a=!1})=>n.createElement(r.Z,{className:t,"data-component":"PH_Breadcrumbs",sx:c()({gridRow:2,gridArea:"breadcrumbs",paddingRight:"0.5rem",display:"flex",...y(a,"display",e=>e?"none":"flex"),alignItems:"center",fontWeight:"initial",lineHeight:"var(--text-body-lineHeight-medium, 1.4285)",fontSize:"var(--text-body-size-medium, 0.875rem)"},i)},e);R.displayName="Breadcrumbs";let T=({children:e,className:t,sx:i={},hidden:a=!1})=>{let l={},{height:o}=i;return o&&(l["--custom-height"]=o),n.createElement(r.Z,{className:t,"data-component":"PH_LeadingVisual",sx:c()({display:"flex",order:0,...y(a,"display",e=>e?"none":"flex"),alignItems:"center"},i),style:l},e)};T.displayName="LeadingVisual";let P=({children:e,className:t,sx:i={},hidden:a=!1,as:r="h2"})=>{let l={},{fontSize:o,lineHeight:s,fontWeight:d}=i;return o&&(l["--custom-font-size"]=o),s&&(l["--custom-line-height"]=s),d&&(l["--custom-font-weight"]=d),n.createElement(g.Z,{className:t,"data-component":"PH_Title",as:r,style:l,sx:c()({display:"flex",order:1,...y(a,"display",e=>e?"none":"block"),fontSize:"inherit",fontWeight:"inherit"},i)},e)};P.displayName="Title";let I=({children:e,className:t,sx:i={},hidden:a=!1})=>{let l={},{height:o}=i;return o&&(l["--custom-height"]=o),n.createElement(r.Z,{className:t,"data-component":"PH_TrailingVisual",sx:c()({display:"flex",order:2,...y(a,"display",e=>e?"none":"flex"),alignItems:"center"},i),style:l},e)};I.displayName="TrailingVisual";let L=({children:e,className:t,sx:i={},hidden:a=N})=>{let l={},{height:o}=i;return o&&(l["--custom-height"]=o),n.createElement(r.Z,{className:t,"data-component":"PH_TrailingAction",sx:c()({gridRow:2,gridArea:"trailing-action",paddingLeft:"0.5rem",display:"flex",...y(a,"display",e=>e?"none":"flex"),alignItems:"center"},i),style:l},e)};L.displayName="TrailingAction";let k=({children:e,className:t,sx:i={},hidden:a=!1})=>{let l={},{height:o}=i;return o&&(l["--custom-height"]=o),n.createElement(r.Z,{className:t,"data-component":"PH_Actions",sx:c()({gridRow:2,gridArea:"actions",display:"flex",...y(a,"display",e=>e?"none":"flex"),flexDirection:"row",paddingLeft:"0.5rem",gap:"0.5rem",minWidth:"max-content",justifyContent:"right",alignItems:"center"},i),style:l},e)};k.displayName="Actions";let C=({children:e,className:t,sx:i={},hidden:a=!1})=>n.createElement(r.Z,{className:t,sx:c()({gridRow:3,gridArea:"description",display:"flex",...y(a,"display",e=>e?"none":"flex"),flexDirection:"row",alignItems:"center",paddingTop:"0.5rem",gap:"0.5rem",fontWeight:"initial",lineHeight:"var(--text-body-lineHeight-medium, 1.4285)",fontSize:"var(--text-body-size-medium, 0.875rem)"},i)},e);C.displayName="Description";let j=({children:e,className:t,sx:i={},hidden:a=!1,as:l,"aria-label":o,"aria-labelledby":s})=>n.createElement(r.Z,{as:l,"aria-label":"nav"===l?o:void 0,"aria-labelledby":"nav"===l?s:void 0,className:t,sx:c()({gridRow:4,gridArea:"navigation",paddingTop:"0.5rem",display:"flex",...y(a,"display",e=>e?"none":"block"),fontWeight:"initial",lineHeight:"var(--text-body-lineHeight-medium, 1.4285)",fontSize:"var(--text-body-size-medium, 0.875rem)"},i)},e);j.displayName="Navigation";let W=Object.assign(H,{ContextArea:E,ParentLink:A,ContextBar:z,TitleArea:Z,ContextAreaActions:_,LeadingAction:S,Breadcrumbs:R,LeadingVisual:T,Title:P,TrailingVisual:I,TrailingAction:L,Actions:k,Description:C,Navigation:j});W.displayName="PageHeader"},26:function(e,t,i){"use strict";i.d(t,{i:function(){return n}});var a=i(2265);function n(e){let t=a.useRef(null);return null!=e?e:t}},5890:function(e){e.exports={style:{fontFamily:"'__monaSans_979d33', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"},className:"__className_979d33"}}}]);