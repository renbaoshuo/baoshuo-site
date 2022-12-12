import{j as R,a as h,F as de,L as fe}from"./index-2dc24c0c.js";import{B as P,L as D,n as he,b as pe,P as me,g as we,h as Z,o as ve,F as ge,i as be,X as ye,D as ee,T as ne,m as Re}from"./vendor-595f1930.js";function K(e,r){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},K(e,r)}function ke(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,K(e,r)}const z=window.React;var _e=function(r,t){return r===void 0&&(r=[]),t===void 0&&(t=[]),r.length!==t.length||r.some(function(o,a){return!Object.is(o,t[a])})},te={error:null},Ee=function(e){ke(r,e);function r(){for(var o,a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return o=e.call.apply(e,[this].concat(l))||this,o.state=te,o.resetErrorBoundary=function(){for(var m,d=arguments.length,c=new Array(d),p=0;p<d;p++)c[p]=arguments[p];o.props.onReset==null||(m=o.props).onReset.apply(m,c),o.reset()},o}r.getDerivedStateFromError=function(a){return{error:a}};var t=r.prototype;return t.reset=function(){this.setState(te)},t.componentDidCatch=function(a,l){var u,m;(u=(m=this.props).onError)==null||u.call(m,a,l)},t.componentDidUpdate=function(a,l){var u=this.state.error,m=this.props.resetKeys;if(u!==null&&l.error!==null&&_e(a.resetKeys,m)){var d,c;(d=(c=this.props).onResetKeysChange)==null||d.call(c,a.resetKeys,m),this.reset()}},t.render=function(){var a=this.state.error,l=this.props,u=l.fallbackRender,m=l.FallbackComponent,d=l.fallback;if(a!==null){var c={error:a,resetErrorBoundary:this.resetErrorBoundary};if(z.isValidElement(d))return d;if(typeof u=="function")return u(c);if(m)return z.createElement(m,c);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},r}(z.Component),B={exports:{}},oe={};(function(e){function r(n,i){var s=n.length;n.push(i);e:for(;0<s;){var f=s-1>>>1,g=n[f];if(0<a(g,i))n[f]=i,n[s]=g,s=f;else break e}}function t(n){return n.length===0?null:n[0]}function o(n){if(n.length===0)return null;var i=n[0],s=n.pop();if(s!==i){n[0]=s;e:for(var f=0,g=n.length,C=g>>>1;f<C;){var _=2*(f+1)-1,W=n[_],E=_+1,T=n[E];if(0>a(W,s))E<g&&0>a(T,W)?(n[f]=T,n[E]=s,f=E):(n[f]=W,n[_]=s,f=_);else if(E<g&&0>a(T,s))n[f]=T,n[E]=s,f=E;else break e}}return i}function a(n,i){var s=n.sortIndex-i.sortIndex;return s!==0?s:n.id-i.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,m=u.now();e.unstable_now=function(){return u.now()-m}}var d=[],c=[],p=1,w=null,v=3,k=!1,b=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(n){for(var i=t(c);i!==null;){if(i.callback===null)o(c);else if(i.startTime<=n)o(c),i.sortIndex=i.expirationTime,r(d,i);else break;i=t(c)}}function M(n){if(y=!1,L(n),!b)if(t(d)!==null)b=!0,U(A);else{var i=t(c);i!==null&&q(M,i.startTime-n)}}function A(n,i){b=!1,y&&(y=!1,V(F),F=-1),k=!0;var s=v;try{for(L(i),w=t(d);w!==null&&(!(w.expirationTime>i)||n&&!J());){var f=w.callback;if(typeof f=="function"){w.callback=null,v=w.priorityLevel;var g=f(w.expirationTime<=i);i=e.unstable_now(),typeof g=="function"?w.callback=g:w===t(d)&&o(d),L(i)}else o(d);w=t(d)}if(w!==null)var C=!0;else{var _=t(c);_!==null&&q(M,_.startTime-i),C=!1}return C}finally{w=null,v=s,k=!1}}var j=!1,x=null,F=-1,X=5,Y=-1;function J(){return!(e.unstable_now()-Y<X)}function N(){if(x!==null){var n=e.unstable_now();Y=n;var i=!0;try{i=x(!0,n)}finally{i?O():(j=!1,x=null)}}else j=!1}var O;if(typeof G=="function")O=function(){G(N)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ue=Q.port2;Q.port1.onmessage=N,O=function(){ue.postMessage(null)}}else O=function(){I(N,0)};function U(n){x=n,j||(j=!0,O())}function q(n,i){F=I(function(){n(e.unstable_now())},i)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(n){n.callback=null},e.unstable_continueExecution=function(){b||k||(b=!0,U(A))},e.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<n?Math.floor(1e3/n):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(n){switch(v){case 1:case 2:case 3:var i=3;break;default:i=v}var s=v;v=i;try{return n()}finally{v=s}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(n,i){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var s=v;v=n;try{return i()}finally{v=s}},e.unstable_scheduleCallback=function(n,i,s){var f=e.unstable_now();switch(typeof s=="object"&&s!==null?(s=s.delay,s=typeof s=="number"&&0<s?f+s:f):s=f,n){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=s+g,n={id:p++,callback:i,priorityLevel:n,startTime:s,expirationTime:g,sortIndex:-1},s>f?(n.sortIndex=s,r(c,n),t(d)===null&&n===t(c)&&(y?(V(F),F=-1):y=!0,q(M,s-f))):(n.sortIndex=g,r(d,n),b||k||(b=!0,U(A))),n},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(n){var i=v;return function(){var s=v;v=i;try{return n.apply(this,arguments)}finally{v=s}}}})(oe);(function(e){e.exports=oe})(B);const Pe=window.React.createContext,ie=window.React.useContext,Ie=window.React.useReducer,Fe=window.React.createElement,Oe=window.React.useEffect,Se=window.React.useLayoutEffect,H=window.React.useRef,je=window.React.useState,xe=window.ReactDOM.unstable_batchedUpdates,S=Symbol(),Ce=Symbol(),ae=typeof window>"u"||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?Oe:Se,Te=B.exports.unstable_runWithPriority?e=>B.exports.unstable_runWithPriority(B.exports.unstable_NormalPriority,e):e=>e();function De(e){const r=Pe({[S]:{v:{current:e},n:{current:-1},l:new Set,u:o=>o()}});var t;return r[Ce]=r.Provider,r.Provider=(t=r.Provider,({value:o,children:a})=>{const l=H(o),u=H(0),[m,d]=je(null);m&&(m(o),d(null));const c=H();if(!c.current){const p=new Set,w=(v,k)=>{xe(()=>{u.current+=1;const b={n:u.current};k!=null&&k.suspense&&(b.n*=-1,b.p=new Promise(y=>{d(()=>I=>{b.v=I,delete b.p,y(I)})})),p.forEach(y=>y(b)),v()})};c.current={[S]:{v:l,n:u,l:p,u:w}}}return ae(()=>{l.current=o,u.current+=1,Te(()=>{c.current[S].l.forEach(p=>{p({n:u.current,v:o})})})},[o]),Fe(t,{value:c.current},a)}),delete r.Consumer,r}function se(e,r){const t=ie(e)[S],{v:{current:o},n:{current:a},l}=t,u=r(o),[m,d]=Ie((c,p)=>{if(!p)return[o,u];if("p"in p)throw p.p;if(p.n===a)return Object.is(c[1],u)?c:[o,u];try{if("v"in p){if(Object.is(c[0],p.v))return c;const w=r(p.v);return Object.is(c[1],w)?c:[p.v,w]}}catch{}return[...c]},[o,u]);return Object.is(m[1],u)||d(),ae(()=>(l.add(d),()=>{l.delete(d)}),[l]),m[1]}function Be(e){const r=ie(e)[S],{u:t}=r;return t}const $e=window.React.createElement,Le=window.React.useState,re=window.React.useCallback,le=(e,r)=>{const t={input:r};return t.promise=new Promise((o,a)=>{e(r).then(l=>{t.result=l,o()}).catch(l=>{t.error=l,a(l)}).finally(()=>{delete t.promise})}),t},$=De(null),Me=({initialInputs:e,children:r})=>$e($.Provider,{value:Le(()=>{const t=new Map;if(e)for(const[o,a]of e)t.set(o,le(o,a));return t})},r);function Ae(e){const r=(t=>{const o=Be($),a=se($,l=>l?l[1]:"NO_PROVIDER");if(a==="NO_PROVIDER")throw new Error("missing Provider");return re(l=>{o(()=>{a(u=>new Map(u).set(t,l))},{suspense:!0})},[o,a,t])})(e);return re(t=>{r(le(e,t))},[r,e])}function Ne(e,r){let t=(o=>{const a=se($,l=>l?l[0].get(o):"NO_PROVIDER");if(a==="NO_PROVIDER")throw new Error("missing Provider");return a})(e);if(!t&&r!=null&&r.allowUndefined&&(t={input:void 0}),!t)throw new Error("missing initial input");if("promise"in t)throw t.promise;if("error"in t)throw t.error;return{input:t.input,result:t.result,refetch:Ae(e)}}const Ue=window.React.memo,qe=({name:e,link:r,logo:t,slogan:o="",...a})=>R(P,{display:"flex",alignItems:"center",borderWidth:"1px",borderStyle:"solid",borderColor:"border.default",borderRadius:2,maxHeight:"64px",overflow:"hidden",...a,children:[h(P,{flexBasis:"auto",flexShrink:0,flexGrow:0,height:"64px",width:"64px",overflow:"hidden",children:h("img",{loading:"lazy",decoding:"async",width:64,height:64,style:{objectFit:"cover"},src:new URL(t,"https://sb.cdn.baoshuo.ren/friends/img/").toString()})}),R(P,{padding:2,overflow:"hidden",children:[h(D,{href:r,target:"_blank",sx:{fontWeight:"bold"},children:e}),o&&h(he,{as:"p",title:o,sx:{fontSize:1,marginTop:1,marginBottom:0,color:"fg.muted",width:"100%",maxWidth:"100%"},children:o})]})]}),We=Ue(qe),ze=window.React.memo,He=window.React.Suspense,Ke=window.React.useRef,Ve=window.React.useState,Ge="https://friends.baoshuo.ren/links.json",ce=e=>fetch(Ge).then(r=>r.json()),Xe=()=>{const{result:e}=Ne(ce);return h(P,{display:"grid",gridTemplateColumns:[,,"1fr 1fr"],gridGap:3,children:e.map(r=>h(We,{...r},r.name))})},Ye=()=>{const[e,r]=Ve(!1),t=Ke(null);return R(de,{children:[h(pe,{children:h("title",{children:"Friends"})}),R(me.Content,{padding:"none",children:[R(P,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[h(we,{as:"h1",sx:{marginBottom:3},children:"Friends"}),h(Z,{leadingIcon:ve,size:"small",ref:t,onClick:()=>r(!0),children:"Add Your Site"})]}),h(Me,{initialInputs:[[ce,""]],children:h(Ee,{fallback:R(ge,{variant:"danger",children:[h(be,{icon:ye,size:18}),"Error when loading friend links, please"," ",h(D,{as:"button",onClick:()=>window.location.reload(),children:"refresh"})," ","and try again."]}),children:h(He,{fallback:h(fe,{}),children:h(Xe,{})})})})]}),e&&R(ee,{returnFocusRef:t,isOpen:e,onDismiss:()=>r(!1),"aria-labelledby":"header-id",children:[h(ee.Header,{children:"Add your site to this page"}),R(P,{p:3,children:[R(ne,{as:"p",marginTop:0,marginBottom:2,children:["Before adding your site to this page, please read the requirements at"," ",h(D,{href:"https://github.com/renbaoshuo/Friends",target:"_blank",children:"renbaoshuo/Friends"})," ","first."]}),h(ne,{as:"p",marginTop:0,marginBottom:3,children:"If your site meets every requirement, you can submit your site's info following the provided steps!"}),h(Z,{as:D,href:"https://github.com/renbaoshuo/Friends",target:"_blank",sx:{display:"block",":hover":{textDecoration:"none"}},leadingIcon:Re,children:"renbaoshuo/Friends"})]})]})]})},Ze=ze(Ye);export{Ze as default};
