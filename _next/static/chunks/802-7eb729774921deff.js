"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{7958:function(e,t,o){o.d(t,{N:function(){return i}});let n={"outside-top":["outside-bottom","outside-right","outside-left","outside-bottom"],"outside-bottom":["outside-top","outside-right","outside-left","outside-bottom"],"outside-left":["outside-right","outside-bottom","outside-top","outside-bottom"],"outside-right":["outside-left","outside-bottom","outside-top","outside-bottom"]},r={start:["end","center"],end:["start","center"],center:["end","start"]};function i(e,t,o={}){let i=function(e){if(function(e){var t;if("DIALOG"===e.tagName)return!0;try{if(e.matches(":popover-open")&&/native code/.test(null===(t=document.body.showPopover)||void 0===t?void 0:t.toString()))return!0}catch(e){}return!1}(e))return document.body;let t=e.parentNode;for(;null!==t;){if(t instanceof HTMLElement&&"static"!==getComputedStyle(t).position)return t;t=t.parentNode}return document.body}(e),s=function(e){let t=e;for(;null!==t&&t instanceof Element&&"visible"===getComputedStyle(t).overflow;)t=t.parentNode;let o=t!==document.body&&t instanceof HTMLElement?t:document.body,n=o.getBoundingClientRect(),r=getComputedStyle(o),[i,l,a,s]=[r.borderTopWidth,r.borderLeftWidth,r.borderRightWidth,r.borderBottomWidth].map(e=>parseInt(e,10)||0);return{top:n.top+i,left:n.left+l,width:n.width-a-l,height:Math.max(n.height-i-s,o===document.body?window.innerHeight:-1/0)}}(i),d=getComputedStyle(i),u=i.getBoundingClientRect(),[c,p]=[d.borderTopWidth,d.borderLeftWidth].map(e=>parseInt(e,10)||0);return function(e,t,o,i,{side:l,align:s,allowOutOfBounds:d,anchorOffset:u,alignmentOffset:c}){let p={top:e.top-t.top,left:e.left-t.left,width:e.width,height:e.height},f=a(o,i,l,s,u,c),m=l,h=s;if(f.top-=t.top,f.left-=t.left,!d){var g,v,b,w;let d=n[l],y=0;if(d){let e=l;for(;y<d.length&&(g=e,v=f,"outside-top"===g||"outside-bottom"===g?v.top<p.top||v.top+o.height>p.height+p.top:v.left<p.left||v.left+o.width>p.width+p.left);){let n=d[y++];e=n,f=a(o,i,n,s,u,c),f.top-=t.top,f.left-=t.left,m=n}}let E=r[s],A=0;if(E){let e=s;for(;A<E.length&&(b=e,w=f,"end"===b?w.left<p.left:"start"===b||"center"===b?w.left+o.width>p.left+p.width||w.left<p.left:void 0);){let n=E[A++];e=n,f=a(o,i,m,n,u,c),f.top-=t.top,f.left-=t.left,h=n}}f.top<p.top&&(f.top=p.top),f.left<p.left&&(f.left=p.left),f.left+o.width>e.width+p.left&&(f.left=e.width+p.left-o.width),d&&y<d.length&&f.top+o.height>e.height+p.top&&(f.top=Math.max(e.height+p.top-o.height,0))}return Object.assign(Object.assign({},f),{anchorSide:m,anchorAlign:h})}(s,{top:u.top+c,left:u.left+p},e.getBoundingClientRect(),t instanceof Element?t.getBoundingClientRect():t,function(e={}){var t,o,n,r,i;let a=null!==(t=e.side)&&void 0!==t?t:l.side,s=null!==(o=e.align)&&void 0!==o?o:l.align;return{side:a,align:s,anchorOffset:null!==(n=e.anchorOffset)&&void 0!==n?n:"inside-center"===a?0:l.anchorOffset,alignmentOffset:null!==(r=e.alignmentOffset)&&void 0!==r?r:"center"!==s&&a.startsWith("inside")?l.alignmentOffset:0,allowOutOfBounds:null!==(i=e.allowOutOfBounds)&&void 0!==i?i:l.allowOutOfBounds}}(o))}let l={side:"outside-bottom",align:"start",anchorOffset:4,alignmentOffset:4,allowOutOfBounds:!1};function a(e,t,o,n,r,i){let l=t.left+t.width,a=t.top+t.height,s=-1,d=-1;return"outside-top"===o?s=t.top-r-e.height:"outside-bottom"===o?s=a+r:"outside-left"===o?d=t.left-r-e.width:"outside-right"===o&&(d=l+r),("outside-top"===o||"outside-bottom"===o)&&(d="start"===n?t.left+i:"center"===n?t.left-(e.width-t.width)/2+i:l-e.width-i),("outside-left"===o||"outside-right"===o)&&(s="start"===n?t.top+i:"center"===n?t.top-(e.height-t.height)/2+i:a-e.height-i),"inside-top"===o?s=t.top+r:"inside-bottom"===o?s=a-r-e.height:"inside-left"===o?d=t.left+r:"inside-right"===o?d=l-r-e.width:"inside-center"===o&&(d=(l+t.left)/2-e.width/2+r),"inside-top"===o||"inside-bottom"===o?d="start"===n?t.left+i:"center"===n?t.left-(e.width-t.width)/2+i:l-e.width-i:("inside-left"===o||"inside-right"===o||"inside-center"===o)&&(s="start"===n?t.top+i:"center"===n?t.top-(e.height-t.height)/2+i:a-e.height-i),{top:s,left:d}}},8645:function(e,t,o){let n;o.d(t,{Qw:function(){return i},km:function(){return h}});var r,i,l=o(4385);function a(){return void 0===n&&(n=/^mac/i.test(window.navigator.platform)),n}var s=o(4665);let d=1e4;(0,l.O)(),(r=i||(i={}))[r.ArrowHorizontal=1]="ArrowHorizontal",r[r.ArrowVertical=2]="ArrowVertical",r[r.JK=4]="JK",r[r.HL=8]="HL",r[r.HomeAndEnd=16]="HomeAndEnd",r[r.PageUpDown=256]="PageUpDown",r[r.WS=32]="WS",r[r.AD=64]="AD",r[r.Tab=128]="Tab",r[r.Backspace=512]="Backspace",r[r.ArrowAll=3]="ArrowAll",r[r.HJKL=12]="HJKL",r[r.WASD=96]="WASD",r[r.All=511]="All";let u={ArrowLeft:i.ArrowHorizontal,ArrowDown:i.ArrowVertical,ArrowUp:i.ArrowVertical,ArrowRight:i.ArrowHorizontal,h:i.HL,j:i.JK,k:i.JK,l:i.HL,a:i.AD,s:i.WS,w:i.WS,d:i.AD,Tab:i.Tab,Home:i.HomeAndEnd,End:i.HomeAndEnd,PageUp:i.PageUpDown,PageDown:i.PageUpDown,Backspace:i.Backspace},c={ArrowLeft:"previous",ArrowDown:"next",ArrowUp:"previous",ArrowRight:"next",h:"previous",j:"next",k:"previous",l:"next",a:"previous",s:"next",w:"previous",d:"next",Tab:"next",Home:"start",End:"end",PageUp:"start",PageDown:"end",Backspace:"previous"};function p(e){let t=c[e.key];if("Tab"===e.key&&e.shiftKey)return"previous";let o=a();if(o&&e.metaKey||!o&&e.ctrlKey){if("ArrowLeft"===e.key||"ArrowUp"===e.key)return"start";if("ArrowRight"===e.key||"ArrowDown"===e.key)return"end"}return t}let f="data-is-active-descendant",m="data-has-active-descendant";function h(e,t){var o,n,r,l,h;let g,v,b;let w=[],y=new WeakMap,E=null!==(o=null==t?void 0:t.bindKeys)&&void 0!==o?o:((null==t?void 0:t.getNextFocusable)?i.ArrowAll:i.ArrowVertical)|i.HomeAndEnd,A=null!==(n=null==t?void 0:t.focusOutBehavior)&&void 0!==n?n:"stop",T=null!==(r=null==t?void 0:t.focusInStrategy)&&void 0!==r?r:"previous",L=null==t?void 0:t.activeDescendantControl,x=null==t?void 0:t.onActiveDescendantChanged,k=null!==(l=null==t?void 0:t.preventScroll)&&void 0!==l&&l;function M(e,t=!1){let o=g;if(g=e,L){e&&document.activeElement===L?H(o,e,t):S();return}o&&o!==e&&y.has(o)&&o.setAttribute("tabindex","-1"),null==e||e.setAttribute("tabindex","0")}function H(t,o,n=!1){o.id||o.setAttribute("id",`__primer_id_${d++}`),t&&t!==o&&t.removeAttribute(f),L&&(n||L.getAttribute("aria-activedescendant")!==o.id)&&(L.setAttribute("aria-activedescendant",o.id),e.setAttribute(m,o.id),o.setAttribute(f,n?"activated-directly":"activated-indirectly"),null==x||x(o,t,n))}function S(t=g){"first"===T&&(g=void 0),null==L||L.removeAttribute("aria-activedescendant"),e.removeAttribute(m),null==t||t.removeAttribute(f),null==x||x(void 0,t,!1)}function O(...e){let o=e.filter(e=>{var o,n;return null===(n=null===(o=null==t?void 0:t.focusableElementFilter)||void 0===o?void 0:o.call(t,e))||void 0===n||n});if(0!==o.length){for(let e of(w.splice(function(e){let t=e[0];if(0===w.length)return 0;let o=0,n=w.length-1;for(;o<=n;){let e=Math.floor((o+n)/2);(w[e].compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING)>0?n=e-1:o=e+1}return o}(o),0,...o),o))y.has(e)||y.set(e,e.getAttribute("tabindex")),e.setAttribute("tabindex","-1");g||M(w[0])}}function D(...e){for(let t of e){let e=w.indexOf(t);e>=0&&w.splice(e,1);let o=y.get(t);void 0!==o&&(null===o?t.removeAttribute("tabindex"):t.setAttribute("tabindex",o),y.delete(t)),t===g&&M(w[0])}}let P={reverse:null==t?void 0:t.reverse,strict:null==t?void 0:t.strict,onlyTabbable:null==t?void 0:t.onlyTabbable};O(...(0,s.hT)(e,P)),M("function"==typeof T?T(document.body):w[0]),new MutationObserver(e=>{for(let t of e){for(let e of t.removedNodes)e instanceof HTMLElement&&D(...(0,s.hT)(e));"attributes"===t.type&&null===t.oldValue&&t.target instanceof HTMLElement&&D(t.target)}for(let t of e){for(let e of t.addedNodes)e instanceof HTMLElement&&O(...(0,s.hT)(e,P));"attributes"===t.type&&null!==t.oldValue&&t.target instanceof HTMLElement&&O(t.target)}}).observe(e,{subtree:!0,childList:!0,attributeFilter:["hidden","disabled"],attributeOldValue:!0});let N=new AbortController,C=null!==(h=null==t?void 0:t.abortSignal)&&void 0!==h?h:N.signal;C.addEventListener("abort",()=>{D(...w)}),e.addEventListener("mousedown",e=>{e.target instanceof HTMLElement&&e.target!==document.activeElement&&(v=w.indexOf(e.target))},{signal:C}),L?(e.addEventListener("focusin",e=>{e.target instanceof HTMLElement&&w.includes(e.target)&&(L.focus({preventScroll:k}),M(e.target))}),e.addEventListener("mousemove",({target:e})=>{if(!(e instanceof Node))return;let t=w.find(t=>t.contains(e));t&&M(t)},{signal:C,capture:!0}),L.addEventListener("focusin",()=>{g?H(void 0,g):M(w[0])}),L.addEventListener("focusout",()=>{S()})):e.addEventListener("focusin",t=>{if(t.target instanceof HTMLElement){if(void 0!==v)v>=0&&w[v]!==g&&M(w[v]),v=void 0;else if("previous"===T)M(t.target);else if("closest"===T||"first"===T){if(t.relatedTarget instanceof Element&&!e.contains(t.relatedTarget)){let e="previous"===b?w.length-1:0,t=w[e];null==t||t.focus({preventScroll:k});return}M(t.target)}else if("function"==typeof T){if(t.relatedTarget instanceof Element&&!e.contains(t.relatedTarget)){let e=T(t.relatedTarget);if((e?w.indexOf(e):-1)>=0&&e instanceof HTMLElement){e.focus({preventScroll:k});return}console.warn("Element requested is not a known focusable element.")}else M(t.target)}}b=void 0},{signal:C});let R=null!=L?L:e;return"closest"===T&&document.addEventListener("keydown",e=>{"Tab"===e.key&&(b=p(e))},{signal:C,capture:!0}),R.addEventListener("keydown",o=>{var n;if(o.key in c){let r=u[o.key];if(!o.defaultPrevented&&(r&E)>0&&!function(e,t){let o=e.key,n=[...o].length,r=t instanceof HTMLInputElement&&"text"===t.type||t instanceof HTMLTextAreaElement;if(r&&(1===n||"Home"===o||"End"===o)||t instanceof HTMLSelectElement&&(1===n||"ArrowDown"===o&&a()&&!e.metaKey||"ArrowDown"===o&&!a()&&e.altKey)||t instanceof HTMLTextAreaElement&&("PageUp"===o||"PageDown"===o))return!0;if(r){let e=0===t.selectionStart&&0===t.selectionEnd,n=t.selectionStart===t.value.length&&t.selectionEnd===t.value.length;if("ArrowLeft"===o&&!e||"ArrowRight"===o&&!n||t instanceof HTMLTextAreaElement&&("ArrowUp"===o&&!e||"ArrowDown"===o&&!n))return!0}return!1}(o,document.activeElement)){let r;let i=p(o);if((null==t?void 0:t.getNextFocusable)&&(r=t.getNextFocusable(i,null!==(n=document.activeElement)&&void 0!==n?n:void 0,o)),!r){let t=function(){if(!g)return 0;let t=w.indexOf(g),o=g===e?-1:0;return -1!==t?t:o}(),n=t;"previous"===i?n-=1:"start"===i?n=0:"next"===i?n+=1:n=w.length-1,n<0&&(n="wrap"===A&&"Tab"!==o.key?w.length-1:0),n>=w.length&&(n="wrap"===A&&"Tab"!==o.key?0:w.length-1),t!==n&&(r=w[n])}L?M(r||g,!0):r&&(b=i,r.focus({preventScroll:k})),("Tab"!==o.key||r)&&o.preventDefault()}}},{signal:C}),N}},4385:function(e,t,o){o.d(t,{O:function(){return i}});let n=!1;function r(){}try{let e=Object.create({},{signal:{get(){n=!0}}});window.addEventListener("test",r,e),window.removeEventListener("test",r,e)}catch(e){}function i(){n||(!function(){if("undefined"==typeof window)return;let e=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(t,o,n){return"object"==typeof n&&"signal"in n&&n.signal instanceof AbortSignal&&e.call(n.signal,"abort",()=>{this.removeEventListener(t,o,n)}),e.call(this,t,o,n)}}(),n=!0)}},4665:function(e,t,o){function*n(e,t={}){var o,n;let r=null!==(o=t.strict)&&void 0!==o&&o,a=null!==(n=t.onlyTabbable)&&void 0!==n&&n?l:i,s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e instanceof HTMLElement&&a(e,r)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}),d=null;if(!t.reverse&&a(e,r)&&(yield e),t.reverse){let e=s.lastChild();for(;e;)d=e,e=s.lastChild()}else d=s.firstChild();for(;d instanceof HTMLElement;)yield d,d=t.reverse?s.previousNode():s.nextNode();t.reverse&&a(e,r)&&(yield e)}function r(e,t=!1){return n(e,{reverse:t,strict:!0,onlyTabbable:!0}).next().value}function i(e,t=!1){let o=["BUTTON","INPUT","SELECT","TEXTAREA","OPTGROUP","OPTION","FIELDSET"].includes(e.tagName)&&e.disabled,n=e.hidden,r=e instanceof HTMLInputElement&&"hidden"===e.type,i=e.classList.contains("sentinel");if(o||n||r||i)return!1;if(t){let t=getComputedStyle(e),o=0===e.offsetWidth||0===e.offsetHeight,n=["hidden","collapse"].includes(t.visibility),r="none"===t.display||!e.offsetParent,i=0===e.getClientRects().length;if(o||n||i||r)return!1}return null!=e.getAttribute("tabindex")||"true"===e.getAttribute("contenteditable")||"plaintext-only"===e.getAttribute("contenteditable")||(!(e instanceof HTMLAnchorElement)||null!=e.getAttribute("href"))&&-1!==e.tabIndex}function l(e,t=!1){return i(e,t)&&"-1"!==e.getAttribute("tabindex")}o.d(t,{EB:function(){return i},O:function(){return r},Wq:function(){return l},hT:function(){return n}})},8152:function(e,t,o){o.d(t,{h:function(){return u}});var n=o(2265),r=o(5906),i=o(8517),l=o(6835),a=o(4176),s=o(9579);function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)({}).hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(null,arguments)}let u=(0,n.forwardRef)(({sx:e=i.P,icon:t,"aria-label":o,description:u,disabled:c,tooltipDirection:p,unsafeDisableTooltip:f=!0,...m},h)=>{let g=e,{size:v}=m;null!==e&&Object.keys(e).length>0&&(g=(0,l.Z)({size:v},e));let{tooltipId:b}=n.useContext(a.d),{tooltipId:w}=n.useContext(s.d);return f||c||void 0===o||""===o||b||w?n.createElement(r.X,d({icon:t,"data-component":"IconButton",sx:g,type:"button","aria-label":o,disabled:c},m,{ref:h})):n.createElement(a.u,{ref:h,text:null!=u?u:o,type:u?void 0:"label",direction:p},n.createElement(r.X,d({icon:t,"data-component":"IconButton",sx:g,type:"button","aria-label":u?o:void 0},m)))})},9579:function(e,t,o){o.d(t,{Z:function(){return p},d:function(){return c}});var n=o(875),r=o(2265),i=o(9183),l=o(9739),a=o(7),s=o(1381);function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)({}).hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(null,arguments)}let u=i.ZP.span.withConfig({displayName:"Tooltip__TooltipBase",componentId:"sc-17tf59c-0"})(["position:relative;display:inline-block;&::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 ",";-webkit-font-smoothing:subpixel-antialiased;color:",";text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:",";border-radius:",";opacity:0;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:hover,&:active,&:focus,&:focus-within{&::after{display:inline-block;text-decoration:none;animation-name:tooltip-appear;animation-duration:0.1s;animation-fill-mode:forwards;animation-timing-function:ease-in;animation-delay:0s;}}&.tooltipped-no-delay:hover,&.tooltipped-no-delay:active,&.tooltipped-no-delay:focus,&.tooltipped-no-delay:focus-within{&::after{animation-delay:0s;}}&.tooltipped-multiline:hover,&.tooltipped-multiline:active,&.tooltipped-multiline:focus,&.tooltipped-multiline:focus-within{&::after{display:table-cell;}}&.tooltipped-s,&.tooltipped-se,&.tooltipped-sw{&::after{top:100%;right:50%;margin-top:6px;}}&.tooltipped-se{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-sw::after{margin-right:-",";}&.tooltipped-n,&.tooltipped-ne,&.tooltipped-nw{&::after{right:50%;bottom:100%;margin-bottom:6px;}}&.tooltipped-ne{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-nw::after{margin-right:-",";}&.tooltipped-s::after,&.tooltipped-n::after{transform:translateX(50%);}&.tooltipped-w{&::after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%);}}&.tooltipped-e{&::after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%);}}&.tooltipped-multiline{&::after{width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate;}&.tooltipped-s::after,&.tooltipped-n::after{right:auto;left:50%;transform:translateX(-50%);}&.tooltipped-w::after,&.tooltipped-e::after{right:100%;}}&.tooltipped-align-right-2::after{right:0;margin-right:0;}&.tooltipped-align-left-2::after{left:0;margin-left:0;}",";"],(0,l.U2)("fonts.normal"),(0,l.U2)("colors.fg.onEmphasis"),(0,l.U2)("colors.neutral.emphasisPlus"),(0,l.U2)("radii.2"),(0,l.U2)("space.3"),(0,l.U2)("space.3"),(0,l.U2)("space.3"),(0,l.U2)("space.3"),a.Z),c=r.createContext({});function p({direction:e="n",children:t,className:o,text:i,noDelay:l,align:a,wrap:p,id:f,...m}){let h=(0,s.M)(f),g=(0,n.Z)(o,`tooltipped-${e}`,a&&`tooltipped-align-${a}-2`,l&&"tooltipped-no-delay",p&&"tooltipped-multiline"),v=(0,r.useMemo)(()=>({tooltipId:h}),[h]);return r.createElement(c.Provider,{value:v},r.createElement(u,d({role:"tooltip","aria-label":i,id:h},m,{className:g}),t))}p.displayName="Tooltip",p.alignments=["left","right"],p.directions=["n","ne","e","se","s","sw","w","nw"]},4176:function(e,t,o){o.d(t,{u:function(){return X},d:function(){return J}});var n=o(2265),r=o(7),i=o(26),l=o(4560),a=o(7958),s=o(1381),d=o(8180),u=o(9183),c=o(9739),p=class extends Event{oldState;newState;constructor(e,{oldState:t="",newState:o="",...n}={}){super(e,n),this.oldState=String(t||""),this.newState=String(o||"")}},f=new WeakMap;function m(e,t,o){f.set(e,setTimeout(()=>{f.has(e)&&e.dispatchEvent(new p("toggle",{cancelable:!1,oldState:t,newState:o}))},0))}var h=globalThis.ShadowRoot||function(){},g=globalThis.HTMLDialogElement||function(){},v=new WeakMap,b=new WeakMap,w=new WeakMap;function y(e){return w.get(e)||"hidden"}var E=new WeakMap;function A(e,t){return!("auto"!==e.popover&&"manual"!==e.popover||!e.isConnected||t&&"showing"!==y(e)||!t&&"hidden"!==y(e)||e instanceof g&&e.hasAttribute("open"))&&document.fullscreenElement!==e}function T(e){return e?Array.from(b.get(e.ownerDocument)||[]).indexOf(e)+1:0}function L(e){let t=b.get(e);for(let e of t||[]){if(e.isConnected)return e;t.delete(e)}return null}function x(e){return"function"==typeof e.getRootNode?e.getRootNode():e.parentNode?x(e.parentNode):e}function k(e){for(;e;){if(e instanceof HTMLElement&&"auto"===e.popover&&"showing"===w.get(e))return e;if((e=e.parentElement||x(e))instanceof h&&(e=e.host),e instanceof Document)return}}var M=new WeakMap;function H(e){if(!A(e,!1))return;let t=e.ownerDocument;if(!e.dispatchEvent(new p("beforetoggle",{cancelable:!0,oldState:"closed",newState:"open"}))||!A(e,!1))return;let o=!1;if("auto"===e.popover){let o=e.getAttribute("popover");if(D(function(e){let t=new Map,o=0,n=e.ownerDocument;for(let e of b.get(n)||[])t.set(e,o),o+=1;t.set(e,o),o+=1;let r=null;return function(e){let o=k(e);if(null===o)return;let n=t.get(o);(null===r||t.get(r)<n)&&(r=o)}(e?.parentElement),r}(e)||t,!1,!0),o!==e.getAttribute("popover")||!A(e,!1))return}L(t)||(o=!0),M.delete(e);let n=t.activeElement;e.classList.add(":popover-open"),w.set(e,"showing"),v.has(t)||v.set(t,new Set),v.get(t).add(e),(function(e){if(e.shadowRoot&&!0!==e.shadowRoot.delegatesFocus)return null;let t=e;t.shadowRoot&&(t=t.shadowRoot);let o=t.querySelector("[autofocus]");if(o)return o;for(let e of t.querySelectorAll("slot"))for(let t of e.assignedElements({flatten:!0})){if(t.hasAttribute("autofocus"))return t;if(o=t.querySelector("[autofocus]"))return o}let n=e.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){var i;if(!((i=r).hidden||i instanceof h||(i instanceof HTMLButtonElement||i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement||i instanceof HTMLOptGroupElement||i instanceof HTMLOptionElement||i instanceof HTMLFieldSetElement)&&i.disabled||i instanceof HTMLInputElement&&"hidden"===i.type||i instanceof HTMLAnchorElement&&""===i.href)&&"number"==typeof i.tabIndex&&-1!==i.tabIndex)return r;r=n.nextNode()}})(e)?.focus(),"auto"===e.popover&&(b.has(t)||b.set(t,new Set),b.get(t).add(e),R(E.get(e),!0)),o&&n&&"auto"===e.popover&&M.set(e,n),m(e,"closed","open")}function S(e,t=!1,o=!1){if(!A(e,!0))return;let n=e.ownerDocument;if("auto"===e.popover&&(D(e,t,o),!A(e,!0))||(R(E.get(e),!1),E.delete(e),o&&(e.dispatchEvent(new p("beforetoggle",{oldState:"open",newState:"closed"})),!A(e,!0))))return;v.get(n)?.delete(e),b.get(n)?.delete(e),e.classList.remove(":popover-open"),w.set(e,"hidden"),o&&m(e,"open","closed");let r=M.get(e);r&&(M.delete(e),t&&r.focus())}function O(e,t=!1,o=!1){let n=L(e);for(;n;)S(n,t,o),n=L(e)}function D(e,t,o){let n=e.ownerDocument||e;if(e instanceof Document)return O(n,t,o);let r=null,i=!1;for(let t of b.get(n)||[])if(t===e)i=!0;else if(i){r=t;break}if(!i)return O(n,t,o);for(;r&&"showing"===y(r)&&b.get(n)?.size;)S(r,t,o)}var P=new WeakMap;function N(e){if(!e.isTrusted)return;let t=e.composedPath()[0];if(!t)return;let o=t.ownerDocument;if(!L(o))return;let n=function(e){let t=k(e),o=function(e){for(;e;){let t=e.popoverTargetElement;if(t instanceof HTMLElement)return t;if((e=e.parentElement||x(e))instanceof h&&(e=e.host),e instanceof Document)return}}(e);return T(t)>T(o)?t:o}(t);if(n&&"pointerdown"===e.type)P.set(o,n);else if("pointerup"===e.type){let e=P.get(o)===n;P.delete(o),e&&D(n||o,!1,!0)}}var C=new WeakMap;function R(e,t=!1){if(!e)return;C.has(e)||C.set(e,e.getAttribute("aria-expanded"));let o=e.popoverTargetElement;if(o instanceof HTMLElement&&"auto"===o.popover)e.setAttribute("aria-expanded",String(t));else{let t=C.get(e);t?e.setAttribute("aria-expanded",t):e.removeAttribute("aria-expanded")}}var I=globalThis.ShadowRoot||function(){};function W(e,t,o){let n=e[t];Object.defineProperty(e,t,{value(e){return n.call(this,o(e))}})}var U=/(^|[^\\]):popover-open\b/g,B=`
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }
`,j=null;function F(e){if(null===j)try{(j=new CSSStyleSheet).replaceSync(B)}catch{j=!1}if(!1===j){let t=document.createElement("style");t.textContent=B,e instanceof Document?e.head.prepend(t):e.prepend(t)}else e.adoptedStyleSheets=[j,...e.adoptedStyleSheets]}function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)({}).hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(null,arguments)}let K=`
  animation-name: tooltip-appear;
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-delay: 0s;
`,q=u.ZP.span.withConfig({displayName:"Tooltip__StyledTooltip",componentId:"sc-e45c7z-0"})(["display:none;&[popover]{position:absolute;padding:0.5em 0.75em;width:max-content;margin:auto;clip:auto;white-space:normal;font:normal normal 11px/1.5 ",";-webkit-font-smoothing:subpixel-antialiased;color:",";text-align:center;word-wrap:break-word;background:",";border-radius:",";border:0;opacity:0;max-width:250px;inset:auto;overflow:visible;}&[popover]:popover-open{display:block;}&[popover].\\:popover-open{display:block;}@media (forced-colors:active){outline:1px solid transparent;}&::after{position:absolute;display:block;right:0;left:0;height:var(--overlay-offset,0.25rem);content:'';}&[data-direction='n']::after,&[data-direction='ne']::after,&[data-direction='nw']::after{top:100%;}&[data-direction='s']::after,&[data-direction='se']::after,&[data-direction='sw']::after{bottom:100%;}&[data-direction='w']::after{position:absolute;display:block;height:100%;width:8px;content:'';bottom:0;left:100%;}&[data-direction='e']::after{position:absolute;display:block;height:100%;width:8px;content:'';bottom:0;right:100%;margin-left:-8px;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:popover-open,&:popover-open::before{","}&.\\:popover-open,&.\\:popover-open::before{","}",";"],(0,c.U2)("fonts.normal"),(0,c.U2)("colors.fg.onEmphasis"),(0,c.U2)("colors.neutral.emphasisPlus"),(0,c.U2)("radii.2"),K,K,r.Z),z={nw:{side:"outside-top",align:"end"},n:{side:"outside-top",align:"center"},ne:{side:"outside-top",align:"start"},e:{side:"outside-right",align:"center"},se:{side:"outside-bottom",align:"start"},s:{side:"outside-bottom",align:"center"},sw:{side:"outside-bottom",align:"end"},w:{side:"outside-left",align:"center"}},V={"outside-top-end":"nw","outside-top-center":"n","outside-top-start":"ne","outside-right-center":"e","outside-bottom-start":"se","outside-bottom-center":"s","outside-bottom-end":"sw","outside-left-center":"w"},Z=["a[href]","button:not(:disabled)","summary","select","input:not([type=hidden])","textarea"],$=e=>Z.some(t=>e.matches(t))||e.hasAttribute("role")&&"button"===e.getAttribute("role"),J=n.createContext({}),X=n.forwardRef(({direction:e="s",text:t,type:o="description",children:r,id:u,...c},f)=>{let m=(0,s.M)(u),h=n.Children.only(r),g=(0,i.i)(f),v=(0,n.useRef)(null),[b,T]=(0,n.useState)(e),[L,k]=(0,n.useState)(!1),M=()=>{if(v.current&&g.current&&v.current.hasAttribute("popover")&&!v.current.matches(":popover-open")){let t=v.current,o=g.current;t.showPopover(),k(!0);let n={side:z[e].side,align:z[e].align},{top:r,left:i,anchorAlign:l,anchorSide:s}=(0,a.N)(t,o,n);T(V[`${s}-${l}`]),t.style.top=`${r}px`,t.style.left=`${i}px`}},O=()=>{v.current&&g.current&&v.current.hasAttribute("popover")&&v.current.matches(":popover-open")&&(v.current.hidePopover(),k(!1))},P=(0,n.useMemo)(()=>({tooltipId:m}),[m]);return(0,n.useEffect)(()=>{if(!v.current||!g.current)return;let e=$(g.current),t=Array.from(g.current.childNodes).some(e=>e instanceof HTMLElement&&$(e));e||t||(0,d.k)(!1),"label"===o&&(g.current.hasAttribute("aria-label"),Array.from(g.current.childNodes).some(e=>e instanceof HTMLElement&&e.hasAttribute("aria-label"))),"undefined"==typeof window||"undefined"!=typeof HTMLElement&&"object"==typeof HTMLElement.prototype&&"popover"in HTMLElement.prototype||function(){var e;function t(e){return e?.includes(":popover-open")&&(e=e.replace(U,"$1.\\:popover-open")),e}window.ToggleEvent=window.ToggleEvent||p,W(Document.prototype,"querySelector",t),W(Document.prototype,"querySelectorAll",t),W(Element.prototype,"querySelector",t),W(Element.prototype,"querySelectorAll",t),W(Element.prototype,"matches",t),W(Element.prototype,"closest",t),W(DocumentFragment.prototype,"querySelectorAll",t),W(DocumentFragment.prototype,"querySelectorAll",t),Object.defineProperties(HTMLElement.prototype,{popover:{enumerable:!0,configurable:!0,get(){if(!this.hasAttribute("popover"))return null;let e=(this.getAttribute("popover")||"").toLowerCase();return""===e||"auto"==e?"auto":"manual"},set(e){this.setAttribute("popover",e)}},showPopover:{enumerable:!0,configurable:!0,value(){H(this)}},hidePopover:{enumerable:!0,configurable:!0,value(){S(this,!0,!0)}},togglePopover:{enumerable:!0,configurable:!0,value(e){"showing"===w.get(this)&&void 0===e||!1===e?S(this,!0,!0):(void 0===e||!0===e)&&H(this)}}});let o=Element.prototype.attachShadow;o&&Object.defineProperties(Element.prototype,{attachShadow:{enumerable:!0,configurable:!0,writable:!0,value(e){let t=o.call(this,e);return F(t),t}}});let n=HTMLElement.prototype.attachInternals;n&&Object.defineProperties(HTMLElement.prototype,{attachInternals:{enumerable:!0,configurable:!0,writable:!0,value(){let e=n.call(this);return e.shadowRoot&&F(e.shadowRoot),e}}});let r=new WeakMap;function i(e){Object.defineProperties(e.prototype,{popoverTargetElement:{enumerable:!0,configurable:!0,set(e){if(null===e)this.removeAttribute("popovertarget"),r.delete(this);else if(e instanceof Element)this.setAttribute("popovertarget",""),r.set(this,e);else throw TypeError("popoverTargetElement must be an element or null")},get(){if("button"!==this.localName&&"input"!==this.localName||"input"===this.localName&&"reset"!==this.type&&"image"!==this.type&&"button"!==this.type||this.disabled||this.form&&"submit"===this.type)return null;let e=r.get(this);if(e&&e.isConnected)return e;if(e&&!e.isConnected)return r.delete(this),null;let t=x(this),o=this.getAttribute("popovertarget");return(t instanceof Document||t instanceof I)&&o&&t.getElementById(o)||null}},popoverTargetAction:{enumerable:!0,configurable:!0,get(){let e=(this.getAttribute("popovertargetaction")||"").toLowerCase();return"show"===e||"hide"===e?e:"toggle"},set(e){this.setAttribute("popovertargetaction",e)}}})}i(HTMLButtonElement),i(HTMLInputElement),(e=document).addEventListener("click",e=>{let t=e.composedPath()[0];if(!(t instanceof Element)||t?.shadowRoot)return;let o=x(t);if(!(o instanceof I||o instanceof Document))return;let n=t.closest("[popovertargetaction],[popovertarget]");if(n){(function(e){let t=e.popoverTargetElement;if(!(t instanceof HTMLElement))return;let o=y(t);("show"!==e.popoverTargetAction||"showing"!==o)&&("hide"!==e.popoverTargetAction||"hidden"!==o)&&("showing"===o?S(t,!0,!0):A(t,!1)&&(E.set(t,e),H(t)))})(n),e.preventDefault();return}}),e.addEventListener("keydown",e=>{let t=e.key,o=e.target;!e.defaultPrevented&&o&&("Escape"===t||"Esc"===t)&&D(o.ownerDocument,!0,!0)}),e.addEventListener("pointerdown",N),e.addEventListener("pointerup",N),F(document)}(),v.current.setAttribute("popover","auto")},[v,g,e,o]),(0,l.o)(e=>{L&&(e.stopImmediatePropagation(),e.preventDefault(),O())},[L]),n.createElement(J.Provider,{value:P},n.createElement(n.Fragment,null,n.isValidElement(h)&&n.cloneElement(h,{ref:g,"aria-describedby":"description"===o?m:h.props["aria-describedby"],"aria-labelledby":"label"===o?m:h.props["aria-labelledby"],onBlur:e=>{var t,o;O(),null===(t=(o=h.props).onBlur)||void 0===t||t.call(o,e)},onFocus:e=>{var t,o;try{if(!e.target.matches(":focus-visible"))return}catch(e){}M(),null===(t=(o=h.props).onFocus)||void 0===t||t.call(o,e)},onMouseEnter:e=>{var t,o;M(),null===(t=(o=h.props).onMouseEnter)||void 0===t||t.call(o,e)},onMouseLeave:e=>{var t,o;O(),null===(t=(o=h.props).onMouseLeave)||void 0===t||t.call(o,e)}}),n.createElement(q,_({ref:v,"data-direction":b},c,{role:"description"===o?"tooltip":void 0,"aria-hidden":"label"===o||void 0,id:m,onMouseEnter:M,onMouseLeave:O}),t)))})},5168:function(e,t,o){o.d(t,{v:function(){return l}});var n=o(2265),r=o(8645),i=o(26);function l(e={},t=[]){let o=(0,i.i)(e.containerRef),l=!!e.activeDescendantFocus,a="boolean"!=typeof e.activeDescendantFocus&&e.activeDescendantFocus?e.activeDescendantFocus:void 0,s=(0,i.i)(a),d=e.disabled,u=n.useRef();return(0,n.useEffect)(()=>{if(o.current instanceof HTMLElement&&(!l||s.current instanceof HTMLElement)){var t,n;if(d)null===(n=u.current)||void 0===n||n.abort();else{let n={...e,activeDescendantControl:null!==(t=s.current)&&void 0!==t?t:void 0};return u.current=(0,r.km)(o.current,n),()=>{var e;null===(e=u.current)||void 0===e||e.abort()}}}},[d,...t]),{containerRef:o,activeDescendantControlRef:s}}},4560:function(e,t,o){o.d(t,{o:function(){return a}});var n=o(2265);function r(e){if(!e.defaultPrevented){for(let t of Object.values(i).reverse())if(t(e),e.defaultPrevented)break}}let i={},l=0,a=(e,t=[e])=>{let o=(0,n.useCallback)(e,t),a=(0,n.useCallback)(e=>{"Escape"===e.key&&o(e)},[o]),s=(0,n.useMemo)(()=>l++,[]);(0,n.useEffect)(()=>(0===Object.keys(i).length&&document.addEventListener("keydown",r),i[s]=a,()=>{delete i[s],0===Object.keys(i).length&&document.removeEventListener("keydown",r)}),[s,a])}},8180:function(e,t,o){o.d(t,{k:function(){return n}});let n=function(){}},875:function(e,t,o){t.Z=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=function e(t){var o,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(n=e(t[o]))&&(r&&(r+=" "),r+=n);else for(o in t)t[o]&&(r&&(r+=" "),r+=o)}return r}(e))&&(n&&(n+=" "),n+=t);return n}}}]);