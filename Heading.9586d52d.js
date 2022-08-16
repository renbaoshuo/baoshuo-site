import{g as l,s as h,u as S,c as A,a as H,j as n,B as f}from"./index.19951ba9.js";const y=window.styled.css,w=y(["box-shadow:none;outline:2px solid ",";"],l("colors.accent.fg")),M=t=>y(["&:focus:not(:disabled){",";outline-offset:",";&:not(:focus-visible){outline:solid 1px transparent;}}&:focus-visible:not(:disabled){",";outline-offset:",";}"],w,typeof t>"u"?"2px":t,w,typeof t>"u"?"2px":t),k=M,L=window.styled,I=L.button.withConfig({displayName:"types__StyledButton",componentId:"sc-ws60qy-0"})(["",";",";"],k("-2px"),h),$="20px",D=(t="default",o)=>({default:{color:"btn.text",backgroundColor:"btn.bg",boxShadow:`${o==null?void 0:o.shadows.btn.shadow}, ${o==null?void 0:o.shadows.btn.insetShadow}`,"&:hover:not([disabled])":{backgroundColor:"btn.hoverBg"},"&:active:not([disabled])":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.activeBg",borderColor:"btn.activeBorder"}},primary:{color:"btn.primary.text",backgroundColor:"btn.primary.bg",borderColor:"border.subtle",boxShadow:`${o==null?void 0:o.shadows.btn.primary.shadow}`,"&:hover:not([disabled])":{color:"btn.primary.hoverText",backgroundColor:"btn.primary.hoverBg"},"&:focus:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:focus-visible:not([disabled])":{boxShadow:"inset 0 0 0 3px"},"&:active:not([disabled])":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${o==null?void 0:o.shadows.btn.primary.selectedShadow}`},"&:disabled":{color:"btn.primary.disabledText",backgroundColor:"btn.primary.disabledBg","[data-component=ButtonCounter]":{color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.primary.counterBg",color:"btn.primary.text"},"&[aria-expanded=true]":{backgroundColor:"btn.primary.selectedBg",boxShadow:`${o==null?void 0:o.shadows.btn.primary.selectedShadow}`}},danger:{color:"btn.danger.text",backgroundColor:"btn.bg",boxShadow:`${o==null?void 0:o.shadows.btn.shadow}`,"&:hover:not([disabled])":{color:"btn.danger.hoverText",backgroundColor:"btn.danger.hoverBg",borderColor:"btn.danger.hoverBorder",boxShadow:`${o==null?void 0:o.shadows.btn.danger.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.danger.hoverCounterBg",color:"btn.danger.hoverText"}},"&:active:not([disabled])":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${o==null?void 0:o.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"},"&:disabled":{color:"btn.danger.disabledText",backgroundColor:"btn.danger.disabledBg",borderColor:"btn.danger.disabledBorder","[data-component=ButtonCounter]":{color:"inherit",backgroundColor:"btn.danger.disabledCounterBg"}},"[data-component=ButtonCounter]":{color:"btn.danger.text",backgroundColor:"btn.danger.counterBg"},"&[aria-expanded=true]":{color:"btn.danger.selectedText",backgroundColor:"btn.danger.selectedBg",boxShadow:`${o==null?void 0:o.shadows.btn.danger.selectedShadow}`,borderColor:"btn.danger.selectedBorder"}},invisible:{color:"accent.fg",backgroundColor:"transparent",border:"0",boxShadow:"none","&:hover:not([disabled])":{backgroundColor:"btn.hoverBg"},"&:active:not([disabled])":{backgroundColor:"btn.selectedBg"},"&:disabled":{color:"primer.fg.disabled","[data-component=ButtonCounter]":{color:"inherit"}},"&[aria-expanded=true]":{backgroundColor:"btn.selectedBg"}},outline:{color:"btn.outline.text",boxShadow:`${o==null?void 0:o.shadows.btn.shadow}`,borderColor:"btn.border",backgroundColor:"btn.bg","&:hover:not([disabled])":{color:"btn.outline.hoverText",backgroundColor:"btn.outline.hoverBg",borderColor:"outline.hoverBorder",boxShadow:`${o==null?void 0:o.shadows.btn.outline.hoverShadow}`,"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.hoverCounterBg",color:"inherit"}},"&:active:not([disabled])":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${o==null?void 0:o.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"},"&:disabled":{color:"btn.outline.disabledText",backgroundColor:"btn.outline.disabledBg",borderColor:"btn.border","[data-component=ButtonCounter]":{backgroundColor:"btn.outline.disabledCounterBg",color:"inherit"}},"[data-component=ButtonCounter]":{backgroundColor:"btn.outline.counterBg",color:"btn.outline.text"},"&[aria-expanded=true]":{color:"btn.outline.selectedText",backgroundColor:"btn.outline.selectedBg",boxShadow:`${o==null?void 0:o.shadows.btn.outline.selectedShadow}`,borderColor:"btn.outline.selectedBorder"}}})[t],V=(t="medium",o="default",e)=>{let a,d,r;switch(t){case"small":a=3,d=12,r=0;break;case"large":a=9,d=20,r=2;break;case"medium":default:a=5,d=16,r=1}return e&&(r=1,d=a+3),o==="invisible"&&(a=a+1),{paddingY:`${a}px`,paddingX:`${d}px`,fontSize:r,"[data-component=ButtonCounter]":{fontSize:r}}},N=t=>({borderRadius:"2",border:"1px solid",borderColor:t==null?void 0:t.colors.btn.border,fontFamily:"inherit",fontWeight:"bold",lineHeight:$,whiteSpace:"nowrap",verticalAlign:"middle",cursor:"pointer",appearance:"none",userSelect:"none",textDecoration:"none",textAlign:"center","&:disabled":{cursor:"default"},"&:disabled svg":{opacity:"0.6"},"@media (forced-colors: active)":{"&:focus":{outline:"solid 1px transparent"}}}),T=t=>({...N(t),display:"grid",gridTemplateAreas:'"leadingIcon text trailingIcon"',"& > :not(:last-child)":{mr:"2"},'[data-component="leadingIcon"]':{gridArea:"leadingIcon"},'[data-component="text"]':{gridArea:"text"},'[data-component="trailingIcon"]':{gridArea:"trailingIcon"}}),P=window.React.forwardRef,R=P(({children:t,as:o="button",sx:e={},...a},d)=>{const{leadingIcon:r,trailingIcon:v,variant:u="default",size:b="medium"}=a,{theme:c}=S(),g={display:"inline-block"},p=A.all([T(c),V(b,u,!1),D(u,c),e]);return H(I,{as:o,sx:p,...a,ref:d,children:[r&&n(f,{as:"span","data-component":"leadingIcon",sx:g,children:n(r,{})}),t&&n("span",{"data-component":"text",children:t}),v&&n(f,{as:"span","data-component":"trailingIcon",sx:{...g,ml:2},children:n(v,{})})]})}),j=window.React.forwardRef,x=j(({children:t,...o},e)=>n(R,{ref:e,as:"button",...o,children:t}));x.displayName="Button";const O=window.styled,W=({scheme:t,...o})=>({color:t==="secondary"?l("colors.fg.default")(o):t==="primary"?l("colors.fg.onEmphasis")(o):l("colors.fg.default")(o)}),F=({scheme:t,...o})=>({backgroundColor:t==="secondary"?l("colors.neutral.muted")(o):t==="primary"?l("colors.neutral.emphasis")(o):l("colors.neutral.muted")(o)}),G=O.span.withConfig({displayName:"CounterLabel",componentId:"sc-13ceqbg-0"})(["display:inline-block;padding:2px 5px;font-size:",";font-weight:",";line-height:",";border-radius:20px;",";",";&:empty{display:none;}",";"],l("fontSizes.0"),l("fontWeights.bold"),l("lineHeights.condensedUltra"),W,F,h),E=G,B=({children:t,sx:o={},...e})=>n(E,{"data-component":"ButtonCounter",sx:{ml:2,...o},...e,children:t});B.displayName="Counter";const l5=Object.assign(x,{Counter:B});var X={small:16,medium:32,large:64};function i(t){var o=t["aria-label"],e=t.className,a=t.fill,d=a===void 0?"currentColor":a,r=t.size,v=t.verticalAlign,u=t.svgDataByHeight,b=X[r]||r,c=_(Object.keys(u),b),g=u[c].width,p=b*(g/c),z=u[c].path;return{"aria-hidden":o?"false":"true","aria-label":o,role:"img",className:e,viewBox:"0 0 "+g+" "+c,width:p,height:b,fill:d,style:{display:"inline-block",userSelect:"none",verticalAlign:v,overflow:"visible"},dangerouslySetInnerHTML:{__html:z}}}function _(t,o){return t.map(function(e){return parseInt(e,10)}).reduce(function(e,a){return a<=o?a:e},t[0])}var s=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};function q(t){var o={16:{width:16,path:'<path fill-rule="evenodd" d="M9.78 12.78a.75.75 0 01-1.06 0L4.47 8.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L6.06 8l3.72 3.72a.75.75 0 010 1.06z"></path>'},24:{width:24,path:'<path fill-rule="evenodd" d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"></path>'}};return n("svg",{...i(s({},t,{svgDataByHeight:o}))})}q.defaultProps={className:"octicon octicon-chevron-left",size:16,verticalAlign:"text-bottom"};function K(t){var o={16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"></path>'},24:{width:24,path:'<path d="M12.5 7.25a.75.75 0 00-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 00.744-1.302L12.5 12.315V7.25z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path>'}};return n("svg",{...i(s({},t,{svgDataByHeight:o}))})}K.defaultProps={className:"octicon octicon-clock",size:16,verticalAlign:"text-bottom"};function Y(t){var o={16:{width:16,path:'<path fill-rule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path>'},24:{width:24,path:'<path d="M16.75 8.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"></path><path fill-rule="evenodd" d="M15.75 0a8.25 8.25 0 00-7.851 10.79L.513 18.178A1.75 1.75 0 000 19.414v2.836C0 23.217.784 24 1.75 24h1.5A1.75 1.75 0 005 22.25v-1a.25.25 0 01.25-.25h2.735a.75.75 0 00.545-.22l.214-.213A.875.875 0 009 19.948V18.5a.25.25 0 01.25-.25h1.086c.464 0 .91-.184 1.237-.513l1.636-1.636A8.25 8.25 0 1015.75 0zM9 8.25a6.75 6.75 0 114.288 6.287.75.75 0 00-.804.168l-1.971 1.972a.25.25 0 01-.177.073H9.25A1.75 1.75 0 007.5 18.5v1H5.25a1.75 1.75 0 00-1.75 1.75v1a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25v-2.836a.25.25 0 01.073-.177l7.722-7.721a.75.75 0 00.168-.804A6.73 6.73 0 019 8.25z"></path>'}};return n("svg",{...i(s({},t,{svgDataByHeight:o}))})}Y.defaultProps={className:"octicon octicon-key",size:16,verticalAlign:"text-bottom"};function U(t){var o={16:{width:16,path:'<path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>'},24:{width:24,path:'<path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path><path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>'}};return n("svg",{...i(s({},t,{svgDataByHeight:o}))})}U.defaultProps={className:"octicon octicon-location",size:16,verticalAlign:"text-bottom"};function J(t){var o={16:{width:16,path:'<path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path>'},24:{width:24,path:'<path fill-rule="evenodd" d="M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z"></path>'}};return n("svg",{...i(s({},t,{svgDataByHeight:o}))})}J.defaultProps={className:"octicon octicon-mail",size:16,verticalAlign:"text-bottom"};function Q(t){var o={16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}};return n("svg",{...i(s({},t,{svgDataByHeight:o}))})}Q.defaultProps={className:"octicon octicon-mark-github",size:16,verticalAlign:"text-bottom"};function Z(t){var o={16:{width:16,path:'<path fill-rule="evenodd" d="M7.693 1.066a.75.75 0 01.614 0l7.25 3.25a.75.75 0 010 1.368L13 6.831v2.794c0 1.024-.81 1.749-1.66 2.173-.893.447-2.075.702-3.34.702-.278 0-.55-.012-.816-.036a.75.75 0 01.133-1.494c.22.02.45.03.683.03 1.082 0 2.025-.221 2.67-.543.69-.345.83-.682.83-.832V7.503L8.307 8.934a.75.75 0 01-.614 0L4 7.28v1.663c.296.105.575.275.812.512.438.438.688 1.059.688 1.796v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3c0-.737.25-1.358.688-1.796.237-.237.516-.407.812-.512V6.606L.443 5.684a.75.75 0 010-1.368l7.25-3.25zM2.583 5L8 7.428 13.416 5 8 2.572 2.583 5zM2.5 11.25c0-.388.125-.611.25-.735a.704.704 0 01.5-.203c.19 0 .37.071.5.203.125.124.25.347.25.735v2.25H2.5v-2.25z"></path>'},24:{width:24,path:'<path fill-rule="evenodd" d="M12.292 2.06a.75.75 0 00-.584 0L.458 6.81a.75.75 0 000 1.38L4.25 9.793v3.803a2.901 2.901 0 00-1.327.757c-.579.58-.923 1.41-.923 2.43v4.5c0 .248.128.486.335.624.06.04.117.073.22.124.124.062.297.138.52.213.448.149 1.09.288 1.925.288s1.477-.14 1.925-.288c.223-.075.396-.15.52-.213a2.11 2.11 0 00.21-.117A.762.762 0 008 21.28v-4.5c0-1.018-.344-1.85-.923-2.428a2.9 2.9 0 00-1.327-.758v-3.17l5.958 2.516a.75.75 0 00.584 0l5.208-2.2v4.003a2.552 2.552 0 01-.079.085 4.057 4.057 0 01-.849.65c-.826.488-2.255 1.021-4.572 1.021-.612 0-1.162-.037-1.654-.1a.75.75 0 00-.192 1.487c.56.072 1.173.113 1.846.113 2.558 0 4.254-.592 5.334-1.23.538-.316.914-.64 1.163-.896a2.84 2.84 0 00.392-.482h.001A.75.75 0 0019 15v-4.892l4.542-1.917a.75.75 0 000-1.382l-11.25-4.75zM5 15c-.377 0-.745.141-1.017.413-.265.265-.483.7-.483 1.368v4.022c.299.105.797.228 1.5.228s1.201-.123 1.5-.228V16.78c0-.669-.218-1.103-.483-1.368A1.431 1.431 0 005 15zm7-3.564L2.678 7.5 12 3.564 21.322 7.5 12 11.436z"></path>'}};return n("svg",{...i(s({},t,{svgDataByHeight:o}))})}Z.defaultProps={className:"octicon octicon-mortar-board",size:16,verticalAlign:"text-bottom"};function o5(t){var o={16:{width:16,path:'<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'},24:{width:24,path:'<path fill-rule="evenodd" d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"></path><path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"></path>'}};return n("svg",{...i(s({},t,{svgDataByHeight:o}))})}o5.defaultProps={className:"octicon octicon-repo",size:16,verticalAlign:"text-bottom"};function t5(t){var o={16:{width:16,path:'<path fill-rule="evenodd" d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"></path>'},24:{width:24,path:'<path d="M12 7a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 7zm0 10a1 1 0 100-2 1 1 0 000 2z"></path><path fill-rule="evenodd" d="M7.328 1.47a.75.75 0 01.53-.22h8.284a.75.75 0 01.53.22l5.858 5.858c.141.14.22.33.22.53v8.284a.75.75 0 01-.22.53l-5.858 5.858a.75.75 0 01-.53.22H7.858a.75.75 0 01-.53-.22L1.47 16.672a.75.75 0 01-.22-.53V7.858a.75.75 0 01.22-.53L7.328 1.47zm.84 1.28L2.75 8.169v7.662l5.419 5.419h7.662l5.419-5.418V8.168L15.832 2.75H8.168z"></path>'}};return n("svg",{...i(s({},t,{svgDataByHeight:o}))})}t5.defaultProps={className:"octicon octicon-stop",size:16,verticalAlign:"text-bottom"};const a5=window.styled;function C({icon:t,...o}){return n(t,{...o})}C.displayName="Octicon";const m=a5(C).withConfig({displayName:"StyledOcticon",componentId:"sc-1lhyyr-0"})(["",""],({color:t,sx:o})=>h({sx:{color:t,...o}}));m.defaultProps={size:16};const d5=m,e5=window.styled,n5=e5.h2.withConfig({displayName:"Heading",componentId:"sc-1irtotl-0"})(["font-weight:",";font-size:",";margin:0;",";"],l("fontWeights.bold"),l("fontSizes.5"),h),i5=n5;export{l5 as B,K as C,i5 as H,Y as K,U as L,J as M,o5 as R,d5 as S,Z as a,Q as b,t5 as c,q as d};
