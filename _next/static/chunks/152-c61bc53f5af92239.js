"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{7958:function(e,t,o){o.d(t,{N:function(){return i}});let n={"outside-top":["outside-bottom","outside-right","outside-left","outside-bottom"],"outside-bottom":["outside-top","outside-right","outside-left","outside-bottom"],"outside-left":["outside-right","outside-bottom","outside-top","outside-bottom"],"outside-right":["outside-left","outside-bottom","outside-top","outside-bottom"]},r={start:["end","center"],end:["start","center"],center:["end","start"]};function i(e,t,o={}){let i=function(e){if(function(e){var t;if("DIALOG"===e.tagName)return!0;try{if(e.matches(":popover-open")&&/native code/.test(null===(t=document.body.showPopover)||void 0===t?void 0:t.toString()))return!0}catch(e){}return!1}(e))return document.body;let t=e.parentNode;for(;null!==t;){if(t instanceof HTMLElement&&"static"!==getComputedStyle(t).position)return t;t=t.parentNode}return document.body}(e),s=function(e){let t=e;for(;null!==t&&t instanceof Element&&"visible"===getComputedStyle(t).overflow;)t=t.parentNode;let o=t!==document.body&&t instanceof HTMLElement?t:document.body,n=o.getBoundingClientRect(),r=getComputedStyle(o),[i,a,l,s]=[r.borderTopWidth,r.borderLeftWidth,r.borderRightWidth,r.borderBottomWidth].map(e=>parseInt(e,10)||0);return{top:n.top+i,left:n.left+a,width:n.width-l-a,height:Math.max(n.height-i-s,o===document.body?window.innerHeight:-1/0)}}(i),p=getComputedStyle(i),d=i.getBoundingClientRect(),[u,c]=[p.borderTopWidth,p.borderLeftWidth].map(e=>parseInt(e,10)||0);return function(e,t,o,i,{side:a,align:s,allowOutOfBounds:p,anchorOffset:d,alignmentOffset:u}){let c={top:e.top-t.top,left:e.left-t.left,width:e.width,height:e.height},f=l(o,i,a,s,d,u),h=a,m=s;if(f.top-=t.top,f.left-=t.left,!p){var g,b,v,w;let p=n[a],y=0;if(p){let e=a;for(;y<p.length&&(g=e,b=f,"outside-top"===g||"outside-bottom"===g?b.top<c.top||b.top+o.height>c.height+c.top:b.left<c.left||b.left+o.width>c.width+c.left);){let n=p[y++];e=n,f=l(o,i,n,s,d,u),f.top-=t.top,f.left-=t.left,h=n}}let E=r[s],x=0;if(E){let e=s;for(;x<E.length&&(v=e,w=f,"end"===v?w.left<c.left:"start"===v||"center"===v?w.left+o.width>c.left+c.width||w.left<c.left:void 0);){let n=E[x++];e=n,f=l(o,i,h,n,d,u),f.top-=t.top,f.left-=t.left,m=n}}f.top<c.top&&(f.top=c.top),f.left<c.left&&(f.left=c.left),f.left+o.width>e.width+c.left&&(f.left=e.width+c.left-o.width),p&&y<p.length&&f.top+o.height>e.height+c.top&&(f.top=Math.max(e.height+c.top-o.height,0))}return Object.assign(Object.assign({},f),{anchorSide:h,anchorAlign:m})}(s,{top:d.top+u,left:d.left+c},e.getBoundingClientRect(),t instanceof Element?t.getBoundingClientRect():t,function(e={}){var t,o,n,r,i;let l=null!==(t=e.side)&&void 0!==t?t:a.side,s=null!==(o=e.align)&&void 0!==o?o:a.align;return{side:l,align:s,anchorOffset:null!==(n=e.anchorOffset)&&void 0!==n?n:"inside-center"===l?0:a.anchorOffset,alignmentOffset:null!==(r=e.alignmentOffset)&&void 0!==r?r:"center"!==s&&l.startsWith("inside")?a.alignmentOffset:0,allowOutOfBounds:null!==(i=e.allowOutOfBounds)&&void 0!==i?i:a.allowOutOfBounds}}(o))}let a={side:"outside-bottom",align:"start",anchorOffset:4,alignmentOffset:4,allowOutOfBounds:!1};function l(e,t,o,n,r,i){let a=t.left+t.width,l=t.top+t.height,s=-1,p=-1;return"outside-top"===o?s=t.top-r-e.height:"outside-bottom"===o?s=l+r:"outside-left"===o?p=t.left-r-e.width:"outside-right"===o&&(p=a+r),("outside-top"===o||"outside-bottom"===o)&&(p="start"===n?t.left+i:"center"===n?t.left-(e.width-t.width)/2+i:a-e.width-i),("outside-left"===o||"outside-right"===o)&&(s="start"===n?t.top+i:"center"===n?t.top-(e.height-t.height)/2+i:l-e.height-i),"inside-top"===o?s=t.top+r:"inside-bottom"===o?s=l-r-e.height:"inside-left"===o?p=t.left+r:"inside-right"===o?p=a-r-e.width:"inside-center"===o&&(p=(a+t.left)/2-e.width/2+r),"inside-top"===o||"inside-bottom"===o?p="start"===n?t.left+i:"center"===n?t.left-(e.width-t.width)/2+i:a-e.width-i:("inside-left"===o||"inside-right"===o||"inside-center"===o)&&(s="start"===n?t.top+i:"center"===n?t.top-(e.height-t.height)/2+i:l-e.height-i),{top:s,left:p}}},8152:function(e,t,o){o.d(t,{h:function(){return d}});var n=o(2265),r=o(5906),i=o(8517),a=o(6835),l=o(4176),s=o(9579);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)({}).hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(null,arguments)}let d=(0,n.forwardRef)(({sx:e=i.P,icon:t,"aria-label":o,description:d,disabled:u,tooltipDirection:c,unsafeDisableTooltip:f=!0,...h},m)=>{let g=e,{size:b}=h;null!==e&&Object.keys(e).length>0&&(g=(0,a.Z)({size:b},e));let{tooltipId:v}=n.useContext(l.d),{tooltipId:w}=n.useContext(s.d);return f||u||void 0===o||""===o||v||w?n.createElement(r.X,p({icon:t,"data-component":"IconButton",sx:g,type:"button","aria-label":o,disabled:u},h,{ref:m})):n.createElement(l.u,{ref:m,text:null!=d?d:o,type:d?void 0:"label",direction:c},n.createElement(r.X,p({icon:t,"data-component":"IconButton",sx:g,type:"button","aria-label":d?o:void 0},h)))})},9579:function(e,t,o){o.d(t,{Z:function(){return c},d:function(){return u}});var n=o(875),r=o(2265),i=o(9183),a=o(9739),l=o(7),s=o(1381);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)({}).hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(null,arguments)}let d=i.ZP.span.withConfig({displayName:"Tooltip__TooltipBase",componentId:"sc-17tf59c-0"})(["position:relative;display:inline-block;&::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 ",";-webkit-font-smoothing:subpixel-antialiased;color:",";text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:",";border-radius:",";opacity:0;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:hover,&:active,&:focus,&:focus-within{&::after{display:inline-block;text-decoration:none;animation-name:tooltip-appear;animation-duration:0.1s;animation-fill-mode:forwards;animation-timing-function:ease-in;animation-delay:0s;}}&.tooltipped-no-delay:hover,&.tooltipped-no-delay:active,&.tooltipped-no-delay:focus,&.tooltipped-no-delay:focus-within{&::after{animation-delay:0s;}}&.tooltipped-multiline:hover,&.tooltipped-multiline:active,&.tooltipped-multiline:focus,&.tooltipped-multiline:focus-within{&::after{display:table-cell;}}&.tooltipped-s,&.tooltipped-se,&.tooltipped-sw{&::after{top:100%;right:50%;margin-top:6px;}}&.tooltipped-se{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-sw::after{margin-right:-",";}&.tooltipped-n,&.tooltipped-ne,&.tooltipped-nw{&::after{right:50%;bottom:100%;margin-bottom:6px;}}&.tooltipped-ne{&::after{right:auto;left:50%;margin-left:-",";}}&.tooltipped-nw::after{margin-right:-",";}&.tooltipped-s::after,&.tooltipped-n::after{transform:translateX(50%);}&.tooltipped-w{&::after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%);}}&.tooltipped-e{&::after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%);}}&.tooltipped-multiline{&::after{width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate;}&.tooltipped-s::after,&.tooltipped-n::after{right:auto;left:50%;transform:translateX(-50%);}&.tooltipped-w::after,&.tooltipped-e::after{right:100%;}}&.tooltipped-align-right-2::after{right:0;margin-right:0;}&.tooltipped-align-left-2::after{left:0;margin-left:0;}",";"],(0,a.U2)("fonts.normal"),(0,a.U2)("colors.fg.onEmphasis"),(0,a.U2)("colors.neutral.emphasisPlus"),(0,a.U2)("radii.2"),(0,a.U2)("space.3"),(0,a.U2)("space.3"),(0,a.U2)("space.3"),(0,a.U2)("space.3"),l.Z),u=r.createContext({});function c({direction:e="n",children:t,className:o,text:i,noDelay:a,align:l,wrap:c,id:f,...h}){let m=(0,s.M)(f),g=(0,n.Z)(o,`tooltipped-${e}`,l&&`tooltipped-align-${l}-2`,a&&"tooltipped-no-delay",c&&"tooltipped-multiline"),b=(0,r.useMemo)(()=>({tooltipId:m}),[m]);return r.createElement(u.Provider,{value:b},r.createElement(d,p({role:"tooltip","aria-label":i,id:m},h,{className:g}),t))}c.displayName="Tooltip",c.alignments=["left","right"],c.directions=["n","ne","e","se","s","sw","w","nw"]},4176:function(e,t,o){o.d(t,{u:function(){return V},d:function(){return Y}});var n=o(2265),r=o(7),i=o(26),a=o(4560),l=o(7958),s=o(1381),p=o(8180),d=o(9183),u=o(9739),c=class extends Event{oldState;newState;constructor(e,{oldState:t="",newState:o="",...n}={}){super(e,n),this.oldState=String(t||""),this.newState=String(o||"")}},f=new WeakMap;function h(e,t,o){f.set(e,setTimeout(()=>{f.has(e)&&e.dispatchEvent(new c("toggle",{cancelable:!1,oldState:t,newState:o}))},0))}var m=globalThis.ShadowRoot||function(){},g=globalThis.HTMLDialogElement||function(){},b=new WeakMap,v=new WeakMap,w=new WeakMap;function y(e){return w.get(e)||"hidden"}var E=new WeakMap;function x(e,t){return!("auto"!==e.popover&&"manual"!==e.popover||!e.isConnected||t&&"showing"!==y(e)||!t&&"hidden"!==y(e)||e instanceof g&&e.hasAttribute("open"))&&document.fullscreenElement!==e}function T(e){return e?Array.from(v.get(e.ownerDocument)||[]).indexOf(e)+1:0}function M(e){let t=v.get(e);for(let e of t||[]){if(e.isConnected)return e;t.delete(e)}return null}function k(e){return"function"==typeof e.getRootNode?e.getRootNode():e.parentNode?k(e.parentNode):e}function S(e){for(;e;){if(e instanceof HTMLElement&&"auto"===e.popover&&"showing"===w.get(e))return e;if((e=e.parentElement||k(e))instanceof m&&(e=e.host),e instanceof Document)return}}var L=new WeakMap;function O(e){if(!x(e,!1))return;let t=e.ownerDocument;if(!e.dispatchEvent(new c("beforetoggle",{cancelable:!0,oldState:"closed",newState:"open"}))||!x(e,!1))return;let o=!1;if("auto"===e.popover){let o=e.getAttribute("popover");if(C(function(e){let t=new Map,o=0,n=e.ownerDocument;for(let e of v.get(n)||[])t.set(e,o),o+=1;t.set(e,o),o+=1;let r=null;return function(e){let o=S(e);if(null===o)return;let n=t.get(o);(null===r||t.get(r)<n)&&(r=o)}(e?.parentElement),r}(e)||t,!1,!0),o!==e.getAttribute("popover")||!x(e,!1))return}M(t)||(o=!0),L.delete(e);let n=t.activeElement;e.classList.add(":popover-open"),w.set(e,"showing"),b.has(t)||b.set(t,new Set),b.get(t).add(e),(function(e){if(e.shadowRoot&&!0!==e.shadowRoot.delegatesFocus)return null;let t=e;t.shadowRoot&&(t=t.shadowRoot);let o=t.querySelector("[autofocus]");if(o)return o;for(let e of t.querySelectorAll("slot"))for(let t of e.assignedElements({flatten:!0})){if(t.hasAttribute("autofocus"))return t;if(o=t.querySelector("[autofocus]"))return o}let n=e.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){var i;if(!((i=r).hidden||i instanceof m||(i instanceof HTMLButtonElement||i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement||i instanceof HTMLOptGroupElement||i instanceof HTMLOptionElement||i instanceof HTMLFieldSetElement)&&i.disabled||i instanceof HTMLInputElement&&"hidden"===i.type||i instanceof HTMLAnchorElement&&""===i.href)&&"number"==typeof i.tabIndex&&-1!==i.tabIndex)return r;r=n.nextNode()}})(e)?.focus(),"auto"===e.popover&&(v.has(t)||v.set(t,new Set),v.get(t).add(e),j(E.get(e),!0)),o&&n&&"auto"===e.popover&&L.set(e,n),h(e,"closed","open")}function A(e,t=!1,o=!1){if(!x(e,!0))return;let n=e.ownerDocument;if("auto"===e.popover&&(C(e,t,o),!x(e,!0))||(j(E.get(e),!1),E.delete(e),o&&(e.dispatchEvent(new c("beforetoggle",{oldState:"open",newState:"closed"})),!x(e,!0))))return;b.get(n)?.delete(e),v.get(n)?.delete(e),e.classList.remove(":popover-open"),w.set(e,"hidden"),o&&h(e,"open","closed");let r=L.get(e);r&&(L.delete(e),t&&r.focus())}function H(e,t=!1,o=!1){let n=M(e);for(;n;)A(n,t,o),n=M(e)}function C(e,t,o){let n=e.ownerDocument||e;if(e instanceof Document)return H(n,t,o);let r=null,i=!1;for(let t of v.get(n)||[])if(t===e)i=!0;else if(i){r=t;break}if(!i)return H(n,t,o);for(;r&&"showing"===y(r)&&v.get(n)?.size;)A(r,t,o)}var P=new WeakMap;function N(e){if(!e.isTrusted)return;let t=e.composedPath()[0];if(!t)return;let o=t.ownerDocument;if(!M(o))return;let n=function(e){let t=S(e),o=function(e){for(;e;){let t=e.popoverTargetElement;if(t instanceof HTMLElement)return t;if((e=e.parentElement||k(e))instanceof m&&(e=e.host),e instanceof Document)return}}(e);return T(t)>T(o)?t:o}(t);if(n&&"pointerdown"===e.type)P.set(o,n);else if("pointerup"===e.type){let e=P.get(o)===n;P.delete(o),e&&C(n||o,!1,!0)}}var D=new WeakMap;function j(e,t=!1){if(!e)return;D.has(e)||D.set(e,e.getAttribute("aria-expanded"));let o=e.popoverTargetElement;if(o instanceof HTMLElement&&"auto"===o.popover)e.setAttribute("aria-expanded",String(t));else{let t=D.get(e);t?e.setAttribute("aria-expanded",t):e.removeAttribute("aria-expanded")}}var R=globalThis.ShadowRoot||function(){};function W(e,t,o){let n=e[t];Object.defineProperty(e,t,{value(e){return n.call(this,o(e))}})}var B=/(^|[^\\]):popover-open\b/g,I=`
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
`,U=null;function q(e){if(null===U)try{(U=new CSSStyleSheet).replaceSync(I)}catch{U=!1}if(!1===U){let t=document.createElement("style");t.textContent=I,e instanceof Document?e.head.prepend(t):e.prepend(t)}else e.adoptedStyleSheets=[U,...e.adoptedStyleSheets]}function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)({}).hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(null,arguments)}let F=`
  animation-name: tooltip-appear;
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-delay: 0s;
`,Z=d.ZP.span.withConfig({displayName:"Tooltip__StyledTooltip",componentId:"sc-e45c7z-0"})(["display:none;&[popover]{position:absolute;padding:0.5em 0.75em;width:max-content;margin:auto;clip:auto;white-space:normal;font:normal normal 11px/1.5 ",";-webkit-font-smoothing:subpixel-antialiased;color:",";text-align:center;word-wrap:break-word;background:",";border-radius:",";border:0;opacity:0;max-width:250px;inset:auto;overflow:visible;}&[popover]:popover-open{display:block;}&[popover].\\:popover-open{display:block;}@media (forced-colors:active){outline:1px solid transparent;}&::after{position:absolute;display:block;right:0;left:0;height:var(--overlay-offset,0.25rem);content:'';}&[data-direction='n']::after,&[data-direction='ne']::after,&[data-direction='nw']::after{top:100%;}&[data-direction='s']::after,&[data-direction='se']::after,&[data-direction='sw']::after{bottom:100%;}&[data-direction='w']::after{position:absolute;display:block;height:100%;width:8px;content:'';bottom:0;left:100%;}&[data-direction='e']::after{position:absolute;display:block;height:100%;width:8px;content:'';bottom:0;right:100%;margin-left:-8px;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:popover-open,&:popover-open::before{","}&.\\:popover-open,&.\\:popover-open::before{","}",";"],(0,u.U2)("fonts.normal"),(0,u.U2)("colors.fg.onEmphasis"),(0,u.U2)("colors.neutral.emphasisPlus"),(0,u.U2)("radii.2"),F,F,r.Z),z={nw:{side:"outside-top",align:"end"},n:{side:"outside-top",align:"center"},ne:{side:"outside-top",align:"start"},e:{side:"outside-right",align:"center"},se:{side:"outside-bottom",align:"start"},s:{side:"outside-bottom",align:"center"},sw:{side:"outside-bottom",align:"end"},w:{side:"outside-left",align:"center"}},$={"outside-top-end":"nw","outside-top-center":"n","outside-top-start":"ne","outside-right-center":"e","outside-bottom-start":"se","outside-bottom-center":"s","outside-bottom-end":"sw","outside-left-center":"w"},X=["a[href]","button:not(:disabled)","summary","select","input:not([type=hidden])","textarea"],G=e=>X.some(t=>e.matches(t))||e.hasAttribute("role")&&"button"===e.getAttribute("role"),Y=n.createContext({}),V=n.forwardRef(({direction:e="s",text:t,type:o="description",children:r,id:d,...u},f)=>{let h=(0,s.M)(d),m=n.Children.only(r),g=(0,i.i)(f),b=(0,n.useRef)(null),[v,T]=(0,n.useState)(e),[M,S]=(0,n.useState)(!1),L=()=>{if(b.current&&g.current&&b.current.hasAttribute("popover")&&!b.current.matches(":popover-open")){let t=b.current,o=g.current;t.showPopover(),S(!0);let n={side:z[e].side,align:z[e].align},{top:r,left:i,anchorAlign:a,anchorSide:s}=(0,l.N)(t,o,n);T($[`${s}-${a}`]),t.style.top=`${r}px`,t.style.left=`${i}px`}},H=()=>{b.current&&g.current&&b.current.hasAttribute("popover")&&b.current.matches(":popover-open")&&(b.current.hidePopover(),S(!1))},P=(0,n.useMemo)(()=>({tooltipId:h}),[h]);return(0,n.useEffect)(()=>{if(!b.current||!g.current)return;let e=G(g.current),t=Array.from(g.current.childNodes).some(e=>e instanceof HTMLElement&&G(e));e||t||(0,p.k)(!1),"label"===o&&(g.current.hasAttribute("aria-label"),Array.from(g.current.childNodes).some(e=>e instanceof HTMLElement&&e.hasAttribute("aria-label"))),"undefined"==typeof window||"undefined"!=typeof HTMLElement&&"object"==typeof HTMLElement.prototype&&"popover"in HTMLElement.prototype||function(){var e;function t(e){return e?.includes(":popover-open")&&(e=e.replace(B,"$1.\\:popover-open")),e}window.ToggleEvent=window.ToggleEvent||c,W(Document.prototype,"querySelector",t),W(Document.prototype,"querySelectorAll",t),W(Element.prototype,"querySelector",t),W(Element.prototype,"querySelectorAll",t),W(Element.prototype,"matches",t),W(Element.prototype,"closest",t),W(DocumentFragment.prototype,"querySelectorAll",t),W(DocumentFragment.prototype,"querySelectorAll",t),Object.defineProperties(HTMLElement.prototype,{popover:{enumerable:!0,configurable:!0,get(){if(!this.hasAttribute("popover"))return null;let e=(this.getAttribute("popover")||"").toLowerCase();return""===e||"auto"==e?"auto":"manual"},set(e){this.setAttribute("popover",e)}},showPopover:{enumerable:!0,configurable:!0,value(){O(this)}},hidePopover:{enumerable:!0,configurable:!0,value(){A(this,!0,!0)}},togglePopover:{enumerable:!0,configurable:!0,value(e){"showing"===w.get(this)&&void 0===e||!1===e?A(this,!0,!0):(void 0===e||!0===e)&&O(this)}}});let o=Element.prototype.attachShadow;o&&Object.defineProperties(Element.prototype,{attachShadow:{enumerable:!0,configurable:!0,writable:!0,value(e){let t=o.call(this,e);return q(t),t}}});let n=HTMLElement.prototype.attachInternals;n&&Object.defineProperties(HTMLElement.prototype,{attachInternals:{enumerable:!0,configurable:!0,writable:!0,value(){let e=n.call(this);return e.shadowRoot&&q(e.shadowRoot),e}}});let r=new WeakMap;function i(e){Object.defineProperties(e.prototype,{popoverTargetElement:{enumerable:!0,configurable:!0,set(e){if(null===e)this.removeAttribute("popovertarget"),r.delete(this);else if(e instanceof Element)this.setAttribute("popovertarget",""),r.set(this,e);else throw TypeError("popoverTargetElement must be an element or null")},get(){if("button"!==this.localName&&"input"!==this.localName||"input"===this.localName&&"reset"!==this.type&&"image"!==this.type&&"button"!==this.type||this.disabled||this.form&&"submit"===this.type)return null;let e=r.get(this);if(e&&e.isConnected)return e;if(e&&!e.isConnected)return r.delete(this),null;let t=k(this),o=this.getAttribute("popovertarget");return(t instanceof Document||t instanceof R)&&o&&t.getElementById(o)||null}},popoverTargetAction:{enumerable:!0,configurable:!0,get(){let e=(this.getAttribute("popovertargetaction")||"").toLowerCase();return"show"===e||"hide"===e?e:"toggle"},set(e){this.setAttribute("popovertargetaction",e)}}})}i(HTMLButtonElement),i(HTMLInputElement),(e=document).addEventListener("click",e=>{let t=e.composedPath()[0];if(!(t instanceof Element)||t?.shadowRoot)return;let o=k(t);if(!(o instanceof R||o instanceof Document))return;let n=t.closest("[popovertargetaction],[popovertarget]");if(n){(function(e){let t=e.popoverTargetElement;if(!(t instanceof HTMLElement))return;let o=y(t);("show"!==e.popoverTargetAction||"showing"!==o)&&("hide"!==e.popoverTargetAction||"hidden"!==o)&&("showing"===o?A(t,!0,!0):x(t,!1)&&(E.set(t,e),O(t)))})(n),e.preventDefault();return}}),e.addEventListener("keydown",e=>{let t=e.key,o=e.target;!e.defaultPrevented&&o&&("Escape"===t||"Esc"===t)&&C(o.ownerDocument,!0,!0)}),e.addEventListener("pointerdown",N),e.addEventListener("pointerup",N),q(document)}(),b.current.setAttribute("popover","auto")},[b,g,e,o]),(0,a.o)(e=>{M&&(e.stopImmediatePropagation(),e.preventDefault(),H())},[M]),n.createElement(Y.Provider,{value:P},n.createElement(n.Fragment,null,n.isValidElement(m)&&n.cloneElement(m,{ref:g,"aria-describedby":"description"===o?h:m.props["aria-describedby"],"aria-labelledby":"label"===o?h:m.props["aria-labelledby"],onBlur:e=>{var t,o;H(),null===(t=(o=m.props).onBlur)||void 0===t||t.call(o,e)},onFocus:e=>{var t,o;try{if(!e.target.matches(":focus-visible"))return}catch(e){}L(),null===(t=(o=m.props).onFocus)||void 0===t||t.call(o,e)},onMouseEnter:e=>{var t,o;L(),null===(t=(o=m.props).onMouseEnter)||void 0===t||t.call(o,e)},onMouseLeave:e=>{var t,o;H(),null===(t=(o=m.props).onMouseLeave)||void 0===t||t.call(o,e)}}),n.createElement(Z,_({ref:b,"data-direction":v},u,{role:"description"===o?"tooltip":void 0,"aria-hidden":"label"===o||void 0,id:h,onMouseEnter:L,onMouseLeave:H}),t)))})},4560:function(e,t,o){o.d(t,{o:function(){return l}});var n=o(2265);function r(e){if(!e.defaultPrevented){for(let t of Object.values(i).reverse())if(t(e),e.defaultPrevented)break}}let i={},a=0,l=(e,t=[e])=>{let o=(0,n.useCallback)(e,t),l=(0,n.useCallback)(e=>{"Escape"===e.key&&o(e)},[o]),s=(0,n.useMemo)(()=>a++,[]);(0,n.useEffect)(()=>(0===Object.keys(i).length&&document.addEventListener("keydown",r),i[s]=l,()=>{delete i[s],0===Object.keys(i).length&&document.removeEventListener("keydown",r)}),[s,l])}},8180:function(e,t,o){o.d(t,{k:function(){return n}});let n=function(){}},875:function(e,t,o){t.Z=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=function e(t){var o,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(n=e(t[o]))&&(r&&(r+=" "),r+=n);else for(o in t)t[o]&&(r&&(r+=" "),r+=o)}return r}(e))&&(n&&(n+=" "),n+=t);return n}}}]);