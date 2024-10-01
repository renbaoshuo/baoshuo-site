(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7775],{3745:function(e,t,o){Promise.resolve().then(o.bind(o,871)),Promise.resolve().then(o.bind(o,3662)),Promise.resolve().then(o.bind(o,2264)),Promise.resolve().then(o.bind(o,4918)),Promise.resolve().then(o.bind(o,5702)),Promise.resolve().then(o.bind(o,6969)),Promise.resolve().then(o.bind(o,356)),Promise.resolve().then(o.bind(o,5609)),Promise.resolve().then(o.bind(o,6478)),Promise.resolve().then(o.bind(o,1441)),Promise.resolve().then(o.bind(o,7844)),Promise.resolve().then(o.bind(o,9985)),Promise.resolve().then(o.bind(o,1264)),Promise.resolve().then(o.t.bind(o,231,23))},871:function(e,t,o){"use strict";var r=o(7437),i=o(2265),n=o(818),a=o(1826),s=o(9529),c=o(6845),l=o(1952);let d=e=>/^[a-zA-Z0-9\-_.]{3,24}$/.test(e),f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"for-the-badge";return"https://cfrating.baoshuo.dev/rating?username=".concat(e,"&style=").concat(t)},m=e=>"https://codeforces/profile/".concat(e),u=["for-the-badge","flat","flat-square","plastic","social"];t.default=(0,i.memo)(()=>{let[e,t]=(0,i.useState)("baoshuo"),[o,h]=(0,i.useState)(!1),[b,g]=(0,i.useState)(u[0]),p=(0,i.useCallback)(e=>{let o=e.target.value,r=d(o);if(""===o){h(!1),t("baoshuo");return}r?(h(!1),t(o)):h(!0)},[]),x=(0,i.useCallback)(e=>{g(e.target.value)},[]),v=(0,i.useCallback)(e=>{e.currentTarget.select()},[]),w=(0,i.useCallback)(e=>{navigator.clipboard.writeText(e.currentTarget.dataset.copyData)},[]),Z=(0,i.useMemo)(()=>f(e,b),[e,b]),U=(0,i.useMemo)(()=>m(e),[e]);return(0,r.jsxs)(a.Z,{sx:{display:"flex",gap:3,flexDirection:["column-reverse","row"]},children:[(0,r.jsxs)(a.Z,{sx:{width:[,"50%"],display:"flex",flexDirection:"column",gap:2},children:[(0,r.jsxs)(a.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsxs)(s.Z,{sx:{flexGrow:1,flexShrink:0},children:[(0,r.jsx)(s.Z.Label,{children:"Codeforces Handle"}),(0,r.jsx)(c.Z,{placeholder:"baoshuo",onChange:p,autoComplete:"off",block:!0}),o&&(0,r.jsx)(s.Z.Validation,{variant:"error",children:"Invalid handle."})]}),(0,r.jsxs)(s.Z,{sx:{flexGrow:0,flexShrink:0},children:[(0,r.jsx)(s.Z.Label,{children:"Style"}),(0,r.jsx)(l.Z,{onChange:x,children:u.map(e=>(0,r.jsx)(l.Z.Option,{value:e,children:e},e))})]})]}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(s.Z.Label,{children:"Image URL"}),(0,r.jsx)(c.Z,{value:Z,readOnly:!0,block:!0,onClick:v,trailingAction:(0,r.jsx)(c.Z.Action,{onClick:w,icon:n.TIy,"aria-label":"Copy",sx:{color:"fg.subtle"},"data-copy-data":Z})})]}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(s.Z.Label,{children:"Markdown"}),(0,r.jsx)(c.Z,{value:"[![Codeforces Rating of @".concat(e,"](").concat(Z,")](").concat(U,")"),readOnly:!0,block:!0,onClick:v,trailingAction:(0,r.jsx)(c.Z.Action,{onClick:w,icon:n.TIy,"aria-label":"Copy",sx:{color:"fg.subtle"},"data-copy-data":"[![Codeforces Rating of @".concat(e,"](").concat(Z,")](").concat(U,")")})})]}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(s.Z.Label,{children:"HTML"}),(0,r.jsx)(c.Z,{value:'<a href="'.concat(U,'" target="_blank"><img src="').concat(Z,'" alt="Codeforces Rating of @').concat(e,'"></a>'),readOnly:!0,block:!0,onClick:v,trailingAction:(0,r.jsx)(c.Z.Action,{onClick:w,icon:n.TIy,"aria-label":"Copy",sx:{color:"fg.subtle"},"data-copy-data":'<a href="'.concat(U,'" target="_blank"><img src="').concat(Z,'" alt="Codeforces Rating of @').concat(e,'"></a>')})})]})]}),(0,r.jsxs)(a.Z,{sx:{width:[,"50%"]},children:[(0,r.jsx)(s.Z.Label,{children:"Preview"}),(0,r.jsx)("img",{src:Z,alt:"Badge for @".concat(e)},Z)]})]})})},3662:function(e,t,o){"use strict";var r=o(2265),i=o(9739);let n=o(5229).ZP.blockquote.withConfig({componentId:"sc-8df15f68-0"})(["margin:0 0 ",";padding:0 ",";color:",";border-left:0.25em solid ",";> :first-child{margin-top:0;}> :last-child{margin-bottom:0;}"],(0,i.U2)("space.3"),(0,i.U2)("space.3"),(0,i.U2)("colors.fg.muted"),(0,i.U2)("colors.border.default"));t.default=(0,r.memo)(n)},2264:function(e,t,o){"use strict";var r=o(2265),i=o(9739);let n=o(5229).ZP.pre.withConfig({componentId:"sc-eb83102a-0"})(["display:block;word-wrap:normal;padding:",";margin-bottom:",";background-color:",";overflow:auto;font-size:85%;line-height:1.45;border-radius:",";code{font-size:100%;}> code{padding:0;margin:0;word-break:normal;white-space:pre;background:transparent;border:0;}code,tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0;}"],(0,i.U2)("space.3"),(0,i.U2)("space.3"),(0,i.U2)("colors.canvas.subtle"),(0,i.U2)("radii.2"));t.default=(0,r.memo)(n)},4918:function(e,t,o){"use strict";var r=o(2265),i=o(9739);let n=o(5229).ZP.dl.withConfig({componentId:"sc-b38917fd-0"})(["padding:0;dt{padding:0;margin-top:",";font-size:1em;font-style:italic;font-weight:",";}dd{padding:0 ",";margin:0 0 ",";}"],(0,i.U2)("space.3"),(0,i.U2)("fontWeights.bold"),(0,i.U2)("space.3"),(0,i.U2)("space.3"));t.default=(0,r.memo)(n)},5702:function(e,t,o){"use strict";o.d(t,{H1:function(){return b},H2:function(){return g},H3:function(){return p},H4:function(){return x},H5:function(){return v},H6:function(){return w}});var r=o(7437),i=o(2265),n=o(818),a=o(2383),s=o(9739),c=o(1131),l=o(93),d=o(530),f=o.n(d),m=o(5229);let u=(0,m.ZP)(a.Z).withConfig({componentId:"sc-e02f9fb7-0"})(["margin-top:",";margin-bottom:",";font-weight:600;& .octicon-link{visibility:hidden;}&:hover .octicon-link,&:focus-within .octicon-link{visibility:visible;}"],(0,s.U2)("space.4"),(0,s.U2)("space.3")),h=e=>{let{children:t,...o}=e,a=(0,i.useMemo)(()=>t?f()(t):"",[t]),s=(0,i.useMemo)(()=>{let e=new l.Z;return a?e.slug(a):""},[a]);return(0,r.jsxs)(u,{id:s,...o,children:[(0,r.jsx)(c.Z,{href:"#".concat(s),"aria-label":"".concat(a," permalink"),sx:{p:2,ml:-32,color:"fg.default"},children:(0,r.jsx)(n.xPt,{className:"octicon-link",verticalAlign:"middle"})}),t]})},b=(0,i.memo)((0,m.ZP)(h).attrs({as:"h1"}).withConfig({componentId:"sc-e02f9fb7-1"})(["padding-bottom:",";font-size:",";border-bottom:1px solid ",";"],(0,s.U2)("space.1"),(0,s.U2)("fontSizes.5"),(0,s.U2)("colors.border.default"))),g=(0,i.memo)((0,m.ZP)(h).attrs({as:"h2"}).withConfig({componentId:"sc-e02f9fb7-2"})(["padding-bottom:",";font-size:",";border-bottom:1px solid ",";"],(0,s.U2)("space.1"),(0,s.U2)("fontSizes.4"),(0,s.U2)("colors.border.default"))),p=(0,i.memo)((0,m.ZP)(u).attrs({as:"h3"}).withConfig({componentId:"sc-e02f9fb7-3"})(["font-size:",";"],(0,s.U2)("fontSizes.3"))),x=(0,i.memo)((0,m.ZP)(u).attrs({as:"h4"}).withConfig({componentId:"sc-e02f9fb7-4"})(["font-size:",";"],(0,s.U2)("fontSizes.2"))),v=(0,i.memo)((0,m.ZP)(u).attrs({as:"h5"}).withConfig({componentId:"sc-e02f9fb7-5"})(["font-size:",";"],(0,s.U2)("fontSizes.1"))),w=(0,i.memo)((0,m.ZP)(u).attrs({as:"h6"}).withConfig({componentId:"sc-e02f9fb7-6"})(["font-size:",";color:",";"],(0,s.U2)("fontSizes.1"),(0,s.U2)("colors.fg.muted")))},6969:function(e,t,o){"use strict";var r=o(2265),i=o(9739);let n=o(5229).ZP.hr.withConfig({componentId:"sc-cb115914-0"})(["height:",";padding:0;margin:"," 0;background-color:",";border:0;"],(0,i.U2)("borderWidths.1"),(0,i.U2)("space.4"),(0,i.U2)("colors.border.default"));t.default=(0,r.memo)(n)},356:function(e,t,o){"use strict";var r=o(2265),i=o(9739),n=o(7);let a=o(5229).ZP.img.withConfig({componentId:"sc-a1502565-0"})(["max-width:100%;box-sizing:content-box;background-color:",";",""],(0,i.U2)("colors.white"),n.Z);t.default=(0,r.memo)(a)},5609:function(e,t,o){"use strict";var r=o(2265),i=o(9739);let n=o(5229).ZP.code.withConfig({componentId:"sc-455792d2-0"})(["padding:0.2em 0.4em;font-family:",";font-size:85%;background-color:",";border-radius:",";"],(0,i.U2)("fonts.mono"),(0,i.U2)("colors.neutral.muted"),(0,i.U2)("radii.2"));t.default=(0,r.memo)(n)},6478:function(e,t,o){"use strict";o.d(t,{OrderedList:function(){return s}});var r=o(2265),i=o(9739),n=o(5229);let a=n.ZP.ul.withConfig({componentId:"sc-ac2bd5ce-0"})(["padding-left:2em;ul,ol{margin-top:0;margin-bottom:0;}li{word-wrap:break-all;}li > p{margin-top:",";}li + li{margin-top:",";}"],(0,i.U2)("space.3"),(0,i.U2)("space.1")),s=(0,r.memo)((0,n.ZP)(a).attrs({as:"ol"}).withConfig({componentId:"sc-ac2bd5ce-1"})([""]));t.default=(0,r.memo)(a)},1441:function(e,t,o){"use strict";var r=o(7437),i=o(3742),n=o(2265),a=o(3082),s=o(8324),c=o(3280),l=o(1746);t.default=e=>{let{data:t}=e,o=(0,i.b9)(c.P),d=JSON.parse(t);(0,n.useEffect)(()=>{o(d)},[d,o]);let{title:f,show_title:m=!0,description:u,show_description:h=!0}=d;return m?(0,r.jsxs)(s.m,{sx:{marginBottom:3,paddingBottom:2,borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"border.default"},children:[(0,r.jsx)(s.m.TitleArea,{children:(0,r.jsx)(s.m.Title,{as:"h1",className:l.Z.className,sx:{fontSize:5,fontWeight:"bold"},children:(0,r.jsx)("span",{style:{fontSize:32},children:f||""})})}),u&&(null==h||h)&&(0,r.jsx)(s.m.Description,{children:(0,r.jsx)(a.Z,{sx:{fontSize:1,color:"fg.muted"},children:u})})]}):null}},7844:function(e,t,o){"use strict";var r=o(2265),i=o(3082),n=o(9739);let a=(0,o(5229).ZP)(i.Z).attrs({as:"p"}).withConfig({componentId:"sc-55dd9e6a-0"})(["margin:0 0 ",";"],(0,n.U2)("space.3"));t.default=(0,r.memo)(a)},9985:function(e,t,o){"use strict";var r=o(2265),i=o(9739);let n=o(5229).ZP.table.withConfig({componentId:"sc-45290fb8-0"})(["width:100%;margin:0 0 ",";overflow:auto;border-collapse:separate;border-spacing:0px;th{font-weight:",";background-color:",";}th,td{padding:"," ",";border-color:",";border-style:solid;border-width:0;border-left-width:",";border-top-width:",";}tr:last-child td{border-bottom-width:",";}tr td:last-child,tr th:last-child{border-right-width:",";}thead th:first-child{border-top-left-radius:",";}thead th:last-child{border-top-right-radius:",";}tbody tr:last-child td:last-child{border-bottom-right-radius:",";}tbody tr:last-child td:first-child{border-bottom-left-radius:",";}img{background-color:transparent;vertical-align:middle;}"],(0,i.U2)("space.3"),(0,i.U2)("fontWeights.bold"),(0,i.U2)("colors.neutral.subtle"),(0,i.U2)("space.2"),(0,i.U2)("space.3"),(0,i.U2)("colors.border.muted"),(0,i.U2)("borderWidths.1"),(0,i.U2)("borderWidths.1"),(0,i.U2)("borderWidths.1"),(0,i.U2)("borderWidths.1"),(0,i.U2)("radii.2"),(0,i.U2)("radii.2"),(0,i.U2)("radii.2"),(0,i.U2)("radii.2"));t.default=(0,r.memo)(n)},3280:function(e,t,o){"use strict";o.d(t,{C:function(){return i},P:function(){return n}});var r=o(9910);let i=(0,r.cn)(!1),n=(0,r.cn)({})},1746:function(e,t,o){"use strict";var r=o(5890),i=o.n(r);t.Z=i()}},function(e){e.O(0,[7234,754,9961,5712,5161,6509,8280,6835,8152,3742,9695,3157,2971,7023,1744],function(){return e(e.s=3745)}),_N_E=e.O()}]);