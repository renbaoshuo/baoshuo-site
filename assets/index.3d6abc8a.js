function it(){import("data:text/javascript,")}const Se=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))_(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&_(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Se();var L,u,ce,le,A,G,se,B={},ae=[],Ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(t,e){for(var n in e)t[n]=e[n];return t}function ue(t){var e=t.parentNode;e&&e.removeChild(t)}function D(t,e,n){var _,i,o,c={};for(o in e)o=="key"?_=e[o]:o=="ref"?i=e[o]:c[o]=e[o];if(arguments.length>2&&(c.children=arguments.length>3?L.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)c[o]===void 0&&(c[o]=t.defaultProps[o]);return H(t,c,_,i,null)}function H(t,e,n,_,i){var o={type:t,props:e,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++ce:i};return i==null&&u.vnode!=null&&u.vnode(o),o}function Pe(){return{current:null}}function M(t){return t.children}function $(t,e){this.props=t,this.context=e}function E(t,e){if(e==null)return t.__?E(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?E(t):null}function fe(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return fe(t)}}function q(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!F.__r++||G!==u.debounceRendering)&&((G=u.debounceRendering)||setTimeout)(F)}function F(){for(var t;F.__r=A.length;)t=A.sort(function(e,n){return e.__v.__b-n.__v.__b}),A=[],t.some(function(e){var n,_,i,o,c,s;e.__d&&(c=(o=(n=e).__v).__e,(s=n.__P)&&(_=[],(i=x({},o)).__v=o.__v+1,W(s,o,i,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[c]:null,_,c==null?E(o):c,o.__h),me(_,o),o.__e!=c&&fe(o)))})}function he(t,e,n,_,i,o,c,s,f,p){var r,v,h,l,a,S,m,g=_&&_.__k||ae,w=g.length;for(n.__k=[],r=0;r<e.length;r++)if((l=n.__k[r]=(l=e[r])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?H(null,l,null,null,l):Array.isArray(l)?H(M,{children:l},null,null,null):l.__b>0?H(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(h=g[r])===null||h&&l.key==h.key&&l.type===h.type)g[r]=void 0;else for(v=0;v<w;v++){if((h=g[v])&&l.key==h.key&&l.type===h.type){g[v]=void 0;break}h=null}W(t,l,h=h||B,i,o,c,s,f,p),a=l.__e,(v=l.ref)&&h.ref!=v&&(m||(m=[]),h.ref&&m.push(h.ref,null,l),m.push(v,l.__c||a,l)),a!=null?(S==null&&(S=a),typeof l.type=="function"&&l.__k===h.__k?l.__d=f=pe(l,f,t):f=ve(t,l,h,g,a,f),typeof n.type=="function"&&(n.__d=f)):f&&h.__e==f&&f.parentNode!=t&&(f=E(h))}for(n.__e=S,r=w;r--;)g[r]!=null&&(typeof n.type=="function"&&g[r].__e!=null&&g[r].__e==n.__d&&(n.__d=E(_,r+1)),ye(g[r],g[r]));if(m)for(r=0;r<m.length;r++)ge(m[r],m[++r],m[++r])}function pe(t,e,n){for(var _,i=t.__k,o=0;i&&o<i.length;o++)(_=i[o])&&(_.__=t,e=typeof _.type=="function"?pe(_,e,n):ve(n,_,_,i,_.__e,e));return e}function de(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){de(n,e)}):e.push(t)),e}function ve(t,e,n,_,i,o){var c,s,f;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(i),c=null;else{for(s=o,f=0;(s=s.nextSibling)&&f<_.length;f+=2)if(s==i)break e;t.insertBefore(i,o),c=o}return c!==void 0?c:i.nextSibling}function Ae(t,e,n,_,i){var o;for(o in n)o==="children"||o==="key"||o in e||j(t,o,null,n[o],_);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||j(t,o,e[o],n[o],_)}function Y(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Ee.test(e)?n:n+"px"}function j(t,e,n,_,i){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||Y(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||Y(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?_||t.addEventListener(e,o?X:K,o):t.removeEventListener(e,o?X:K,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function K(t){this.l[t.type+!1](u.event?u.event(t):t)}function X(t){this.l[t.type+!0](u.event?u.event(t):t)}function W(t,e,n,_,i,o,c,s,f){var p,r,v,h,l,a,S,m,g,w,P,J,N,b=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,s=e.__e=n.__e,e.__h=null,o=[s]),(p=u.__b)&&p(e);try{e:if(typeof b=="function"){if(m=e.props,g=(p=b.contextType)&&_[p.__c],w=p?g?g.props.value:p.__:_,n.__c?S=(r=e.__c=n.__c).__=r.__E:("prototype"in b&&b.prototype.render?e.__c=r=new b(m,w):(e.__c=r=new $(m,w),r.constructor=b,r.render=$e),g&&g.sub(r),r.props=m,r.state||(r.state={}),r.context=w,r.__n=_,v=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),b.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=x({},r.__s)),x(r.__s,b.getDerivedStateFromProps(m,r.__s))),h=r.props,l=r.state,v)b.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(b.getDerivedStateFromProps==null&&m!==h&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(m,w),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(m,r.__s,w)===!1||e.__v===n.__v){r.props=m,r.state=r.__s,e.__v!==n.__v&&(r.__d=!1),r.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(T){T&&(T.__=e)}),r.__h.length&&c.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(m,r.__s,w),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(h,l,a)})}if(r.context=w,r.props=m,r.__v=e,r.__P=t,P=u.__r,J=0,"prototype"in b&&b.prototype.render)r.state=r.__s,r.__d=!1,P&&P(e),p=r.render(r.props,r.state,r.context);else do r.__d=!1,P&&P(e),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++J<25);r.state=r.__s,r.getChildContext!=null&&(_=x(x({},_),r.getChildContext())),v||r.getSnapshotBeforeUpdate==null||(a=r.getSnapshotBeforeUpdate(h,l)),N=p!=null&&p.type===M&&p.key==null?p.props.children:p,he(t,Array.isArray(N)?N:[N],e,n,_,i,o,c,s,f),r.base=e.__e,e.__h=null,r.__h.length&&c.push(r),S&&(r.__E=r.__=null),r.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=He(n.__e,e,n,_,i,o,c,f);(p=u.diffed)&&p(e)}catch(T){e.__v=null,(f||o!=null)&&(e.__e=s,e.__h=!!f,o[o.indexOf(s)]=null),u.__e(T,e,n)}}function me(t,e){u.__c&&u.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(_){_.call(n)})}catch(_){u.__e(_,n.__v)}})}function He(t,e,n,_,i,o,c,s){var f,p,r,v=n.props,h=e.props,l=e.type,a=0;if(l==="svg"&&(i=!0),o!=null){for(;a<o.length;a++)if((f=o[a])&&"setAttribute"in f==!!l&&(l?f.localName===l:f.nodeType===3)){t=f,o[a]=null;break}}if(t==null){if(l===null)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,h.is&&h),o=null,s=!1}if(l===null)v===h||s&&t.data===h||(t.data=h);else{if(o=o&&L.call(t.childNodes),p=(v=n.props||B).dangerouslySetInnerHTML,r=h.dangerouslySetInnerHTML,!s){if(o!=null)for(v={},a=0;a<t.attributes.length;a++)v[t.attributes[a].name]=t.attributes[a].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(Ae(t,h,v,i,s),r)e.__k=[];else if(a=e.props.children,he(t,Array.isArray(a)?a:[a],e,n,_,i&&l!=="foreignObject",o,c,o?o[0]:n.__k&&E(n,0),s),o!=null)for(a=o.length;a--;)o[a]!=null&&ue(o[a]);s||("value"in h&&(a=h.value)!==void 0&&(a!==t.value||l==="progress"&&!a||l==="option"&&a!==v.value)&&j(t,"value",a,v.value,!1),"checked"in h&&(a=h.checked)!==void 0&&a!==t.checked&&j(t,"checked",a,v.checked,!1))}return t}function ge(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(_){u.__e(_,n)}}function ye(t,e,n){var _,i;if(u.unmount&&u.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||ge(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){u.__e(o,e)}_.base=_.__P=null}if(_=t.__k)for(i=0;i<_.length;i++)_[i]&&ye(_[i],e,typeof t.type!="function");n||t.__e==null||ue(t.__e),t.__e=t.__d=void 0}function $e(t,e,n){return this.constructor(t,n)}function R(t,e,n){var _,i,o;u.__&&u.__(t,e),i=(_=typeof n=="function")?null:n&&n.__k||e.__k,o=[],W(e,t=(!_&&n||e).__k=D(M,null,[t]),i||B,B,e.ownerSVGElement!==void 0,!_&&n?[n]:i?null:e.firstChild?L.call(e.childNodes):null,o,!_&&n?n:i?i.__e:e.firstChild,_),me(o,t)}function be(t,e){R(t,e,be)}function Le(t,e,n){var _,i,o,c=x({},t.props);for(o in e)o=="key"?_=e[o]:o=="ref"?i=e[o]:c[o]=e[o];return arguments.length>2&&(c.children=arguments.length>3?L.call(arguments,2):n),H(t.type,c,_||t.key,i||t.ref,null)}function Me(t,e){var n={__c:e="__cC"+se++,__:t,Consumer:function(_,i){return _.children(i)},Provider:function(_){var i,o;return this.getChildContext||(i=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&i.some(q)},this.sub=function(c){i.push(c);var s=c.componentWillUnmount;c.componentWillUnmount=function(){i.splice(i.indexOf(c),1),s&&s.call(c)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}L=ae.slice,u={__e:function(t,e,n,_){for(var i,o,c;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(t)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,_||{}),c=i.__d),c)return i.__E=i}catch(s){t=s}throw t}},ce=0,le=function(t){return t!=null&&t.constructor===void 0},$.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},n),this.props)),t&&x(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),q(this))},$.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),q(this))},$.prototype.render=M,A=[],F.__r=0,se=0;const Ne=Object.freeze(Object.defineProperty({__proto__:null,render:R,hydrate:be,createElement:D,h:D,Fragment:M,createRef:Pe,get isValidElement(){return le},Component:$,cloneElement:Le,createContext:Me,toChildArray:de,get options(){return u}},Symbol.toStringTag,{value:"Module"}));var we,y,I,Q,Z=0,ke=[],O=[],ee=u.__b,te=u.__r,ne=u.diffed,oe=u.__c,re=u.unmount;function Te(t,e){u.__h&&u.__h(y,t,Z||e),Z=0;var n=y.__H||(y.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:O}),n.__[t]}function Oe(t,e){var n=Te(we++,3);!u.__s&&Be(n.__H,e)&&(n.__=t,n.u=e,y.__H.__h.push(n))}function ze(){for(var t;t=ke.shift();)if(t.__P)try{t.__H.__h.forEach(z),t.__H.__h.forEach(U),t.__H.__h=[]}catch(e){t.__H.__h=[],u.__e(e,t.__v)}}u.__b=function(t){y=null,ee&&ee(t)},u.__r=function(t){te&&te(t),we=0;var e=(y=t.__c).__H;e&&(I===y?(e.__h=[],y.__h=[],e.__.forEach(function(n){n.__V=O,n.u=void 0})):(e.__h.forEach(z),e.__h.forEach(U),e.__h=[])),I=y},u.diffed=function(t){ne&&ne(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ke.push(e)!==1&&Q===u.requestAnimationFrame||((Q=u.requestAnimationFrame)||function(n){var _,i=function(){clearTimeout(o),_e&&cancelAnimationFrame(_),setTimeout(n)},o=setTimeout(i,100);_e&&(_=requestAnimationFrame(i))})(ze)),e.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.__V!==O&&(n.__=n.__V),n.u=void 0,n.__V=O})),I=y=null},u.__c=function(t,e){e.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(_){return!_.__||U(_)})}catch(_){e.some(function(i){i.__h&&(i.__h=[])}),e=[],u.__e(_,n.__v)}}),oe&&oe(t,e)},u.unmount=function(t){re&&re(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{z(_)}catch(i){e=i}}),e&&u.__e(e,n.__v))};var _e=typeof requestAnimationFrame=="function";function z(t){var e=y,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),y=e}function U(t){var e=y;t.__c=t.__(),y=e}function Be(t,e){return!t||t.length!==e.length||e.some(function(n,_){return n!==t[_]})}function Fe(t,e,n){const _=/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname)||location.protocol==="file:";if(!e.trackLocalhost&&_)return console.warn("[Plausible] Ignoring event because website is running locally");try{if(window.localStorage.plausible_ignore==="true")return console.warn('[Plausible] Ignoring event because "plausible_ignore" is set to "true" in localStorage')}catch{}const i={n:t,u:e.url,d:e.domain,r:e.referrer,w:e.deviceWidth,h:e.hashMode?1:0,p:n&&n.props?JSON.stringify(n.props):void 0},o=new XMLHttpRequest;o.open("POST",`${e.apiHost}/api/event`,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(i)),o.onreadystatechange=()=>{o.readyState===4&&n&&n.callback&&n.callback()}}function je(t){const e=()=>({hashMode:!1,trackLocalhost:!1,url:location.href,domain:location.hostname,referrer:document.referrer||null,deviceWidth:window.innerWidth,apiHost:"https://plausible.io",...t}),n=(c,s,f)=>{Fe(c,{...e(),...f},s)},_=(c,s)=>{n("pageview",s,c)};return{trackEvent:n,trackPageview:_,enableAutoPageviews:()=>{const c=()=>_(),s=history.pushState;return s&&(history.pushState=function(f,p,r){s.apply(this,[f,p,r]),c()},addEventListener("popstate",c)),t&&t.hashMode&&addEventListener("hashchange",c),_(),function(){s&&(history.pushState=s,removeEventListener("popstate",c)),t&&t.hashMode&&removeEventListener("hashchange",c)}},enableAutoOutboundTracking:(c=document,s={subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]})=>{function f(l){n("Outbound Link: Click",{props:{url:this.href}}),typeof process<"u"&&process,setTimeout(()=>{location.href=this.href},150),l.preventDefault()}const p=new Set;function r(l){l instanceof HTMLAnchorElement?l.host!==location.host&&(l.addEventListener("click",f),p.add(l)):"querySelectorAll"in l&&l.querySelectorAll("a").forEach(r)}function v(l){l instanceof HTMLAnchorElement?(l.removeEventListener("click",f),p.delete(l)):"querySelectorAll"in l&&l.querySelectorAll("a").forEach(v)}const h=new MutationObserver(l=>{l.forEach(a=>{a.type==="attributes"?(v(a.target),r(a.target)):a.type==="childList"&&(a.addedNodes.forEach(r),a.removedNodes.forEach(v))})});return c.querySelectorAll("a").forEach(r),h.observe(c,s),function(){p.forEach(a=>{a.removeEventListener("click",f)}),p.clear(),h.disconnect()}}}}const Ie="bs-__0MTaonYc",De="bs-__Ekfd4LrJ",qe="bs-__iPCdbfaD",Ue="bs-__0gj-Pzcw",Ve="bs-__-J9XyK4x",C={"text-shadow":"bs-__ECI4-t-J",profile:Ie,person:De,"person-info":"bs-__jtpcCajr","person-name":"bs-__PeQMe2-Y","person-description":"bs-__F3Vh5BdT",content:qe,social:Ue,tooltip:Ve};function We(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(_){var i=Object.getOwnPropertyDescriptor(t,_);Object.defineProperty(n,_,i.get?i:{enumerable:!0,get:function(){return t[_]}})}),n}const Re=We(Ne);var xe,Ce,V=Re,Je=0;function ie(t,e,n,_,i){var o,c,s={};for(c in e)c=="ref"?o=e[c]:s[c]=e[c];var f={type:t,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Je,__source:i,__self:_};if(typeof t=="function"&&(o=t.defaultProps))for(c in o)s[c]===void 0&&(s[c]=o[c]);return V.options.vnode&&V.options.vnode(f),f}V.Fragment,Ce=ie,xe=ie;const d=Ce,k=xe,Ge=()=>d("svg",{width:"20px",height:"20px",viewBox:"0 0 496 512","aria-hidden":"true","data-icon":"github","data-prefix":"fab",xmlns:"http://www.w3.org/2000/svg",children:d("path",{fill:"currentColor",d:"M166 397c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3 3-1 6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2-1-5-4-5c-3-1-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zM245 8A240 240 0 000 252a251 251 0 00170 239c12 2 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 24 2 38 26 22 38 59 27 73 21 2-16 9-28 16-34-56-6-112-14-112-111 0-27 7-41 23-59a95 95 0 013-67c21-7 69 27 69 27a235 235 0 01126 0s48-34 69-27a94 94 0 012 67c16 18 26 32 26 59 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12a248 248 0 00168-239C496 113 384 8 245 8zM97 353c-1 1-1 3 1 5 1 2 4 2 5 1s1-3-1-5c-1-2-4-2-5-1zm-11-8l3 4c1 1 3 0 4-1s0-3-2-4-4 0-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14v6c2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z"})}),Ye=()=>k("svg",{width:"20px",height:"20px",viewBox:"0 0 16 16","aria-hidden":"true",class:"bi bi-file-earmark-post",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[d("path",{d:"M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"}),d("path",{d:"M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3zM4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7z"}),d("path",{"fill-rule":"evenodd",d:"M4 3.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5z"})]}),Ke=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"book","data-prefix":"fas",width:"20px",height:"20px",viewBox:"0 0 448 512",children:d("path",{fill:"currentColor",d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"})}),Xe=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"telegram-plane","data-prefix":"fab",width:"20px",height:"20px",viewBox:"0 0 448 512",children:d("path",{fill:"currentColor",d:"M447 99l-68 318c-5 23-18 28-37 18l-103-76-50 48c-5 5-10 10-21 10l8-105 191-172c8-8-2-12-13-5L118 284 16 252c-22-7-22-22 5-33L418 67c19-6 35 5 29 33z"})}),Qe=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"twitter","data-prefix":"fab",width:"20px",height:"20px",viewBox:"0 0 512 512",children:d("path",{fill:"currentColor",d:"M459.4 151.7c.3 4.6.3 9.1.3 13.7 0 138.7-105.6 298.5-298.6 298.5A296.5 296.5 0 010 417a217 217 0 0025.3 1.2c49 0 94.3-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8a111 111 0 0047.4-2 105 105 0 01-84.1-103v-1.2c14 7.8 30.2 12.6 47.4 13.3A104.9 104.9 0 0135.7 67.2a298.3 298.3 0 00216.4 109.9 104.9 104.9 0 01179-95.8 206.6 206.6 0 0066.6-25.4 104.7 104.7 0 01-46.1 57.8c21-2.3 41.6-8.1 60.4-16.2a225.6 225.6 0 01-52.6 54.2z"})}),Ze=[{name:"GitHub",url:"https://github.com/renbaoshuo",icon:Ge},{name:"Blog",url:"https://blog.baoshuo.ren/?utm_source=baoshuo.ren",icon:Ye},{name:"OI Blog",url:"https://oi.baoshuo.ren/?utm_source=baoshuo.ren",icon:Ke},{name:"Telegram",url:"https://t.me/baoshuo",icon:Xe},{name:"Twitter",url:"https://twitter.com/renbaoshuo",icon:Qe}],et=()=>k("main",{className:C.profile,children:[k("div",{className:C.person,children:[k("picture",{children:[d("source",{srcset:"//jsd.baoshuo.ren/bsi@0.0.7/avatar-with-border/128x128.webp",type:"image/webp"}),d("img",{src:"//jsd.baoshuo.ren/bsi@0.0.7/avatar-with-border/128x128.png",height:"96",width:"96",alt:"Baoshuo"})]}),k("div",{className:C["person-info"],children:[d("div",{className:C["person-name"],children:"Baoshuo"}),d("div",{className:C["person-description"],children:"Student & Developer"})]})]}),k("div",{className:C.content,children:[k("p",{children:["zh-CN & en-US / C++ & JavaScript & CSS & PHP & Python /"," ",d("a",{className:"text-blue-600 dark:text-blue-300",href:"https://bgp.he.net/AS141776",target:"_blank",children:"AS141776"})," ","/ VSCode / Tab: 4 spaces / Open Source"]}),d("ul",{className:C.social,children:Ze.map(({name:t,url:e,icon:n})=>d("li",{className:"block mx-2",children:d("a",{className:C.tooltip,href:e,title:t,target:"_blank",children:d("i",{children:d(n,{})})})}))})]})]}),tt=()=>k("footer",{className:"text-xs text-gray-600 select-none",children:["Copyright \xA9 ",new Date().getFullYear()," Baoshuo"," \xB7 ",d("a",{href:"https://beian.miit.gov.cn",target:"_blank",rel:"noopener noreferer nofollow",children:"\u5180ICP\u590715024669\u53F7-3"})]}),nt="bs-__fiPTo3li",ot={container:nt};const{enableAutoPageviews:rt}=je({domain:"baoshuo.ren",apiHost:"https://stat.u.sb"}),_t=()=>(Oe(()=>rt(),[]),k("div",{className:ot.container,children:[d("nav",{}),d("div",{children:d(et,{})}),d(tt,{})]}));R(d(_t,{}),document.getElementById("app"));export{it as __vite_legacy_guard};