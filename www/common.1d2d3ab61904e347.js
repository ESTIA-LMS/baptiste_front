"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7160:(y,_,l)=>{l.d(_,{c:()=>a});var g=l(2361),m=l(7683),u=l(3139);const a=(i,n)=>{let e,t;const o=(c,v,f)=>{if("undefined"==typeof document)return;const h=document.elementFromPoint(c,v);h&&n(h)?h!==e&&(d(),s(h,f)):d()},s=(c,v)=>{e=c,t||(t=e);const f=e;(0,g.c)(()=>f.classList.add("ion-activated")),v()},d=(c=!1)=>{if(!e)return;const v=e;(0,g.c)(()=>v.classList.remove("ion-activated")),c&&t!==e&&e.click(),e=void 0};return(0,u.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>o(c.currentX,c.currentY,m.a),onMove:c=>o(c.currentX,c.currentY,m.b),onEnd:()=>{d(!0),(0,m.h)(),t=void 0}})}},8685:(y,_,l)=>{l.d(_,{g:()=>g});const g=(n,e,t,o,s)=>u(n[1],e[1],t[1],o[1],s).map(d=>m(n[0],e[0],t[0],o[0],d)),m=(n,e,t,o,s)=>s*(3*e*Math.pow(s-1,2)+s*(-3*t*s+3*t+o*s))-n*Math.pow(s-1,3),u=(n,e,t,o,s)=>i((o-=s)-3*(t-=s)+3*(e-=s)-(n-=s),3*t-6*e+3*n,3*e-3*n,n).filter(c=>c>=0&&c<=1),i=(n,e,t,o)=>{if(0===n)return((n,e,t)=>{const o=e*e-4*n*t;return o<0?[]:[(-e+Math.sqrt(o))/(2*n),(-e-Math.sqrt(o))/(2*n)]})(e,t,o);const s=(3*(t/=n)-(e/=n)*e)/3,d=(2*e*e*e-9*e*t+27*(o/=n))/27;if(0===s)return[Math.pow(-d,1/3)];if(0===d)return[Math.sqrt(-s),-Math.sqrt(-s)];const c=Math.pow(d/2,2)+Math.pow(s/3,3);if(0===c)return[Math.pow(d/2,.5)-e/3];if(c>0)return[Math.pow(-d/2+Math.sqrt(c),1/3)-Math.pow(d/2+Math.sqrt(c),1/3)-e/3];const v=Math.sqrt(Math.pow(-s/3,3)),f=Math.acos(-d/(2*Math.sqrt(Math.pow(-s/3,3)))),h=2*Math.pow(v,1/3);return[h*Math.cos(f/3)-e/3,h*Math.cos((f+2*Math.PI)/3)-e/3,h*Math.cos((f+4*Math.PI)/3)-e/3]}},5062:(y,_,l)=>{l.d(_,{i:()=>g});const g=m=>m&&""!==m.dir?"rtl"===m.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1112:(y,_,l)=>{l.r(_),l.d(_,{startFocusVisible:()=>a});const g="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=i=>{let n=[],e=!0;const t=i?i.shadowRoot:document,o=i||document.body,s=p=>{n.forEach(w=>w.classList.remove(g)),p.forEach(w=>w.classList.add(g)),n=p},d=()=>{e=!1,s([])},c=p=>{e=u.includes(p.key),e||s([])},v=p=>{if(e&&p.composedPath){const w=p.composedPath().filter(E=>!!E.classList&&E.classList.contains("ion-focusable"));s(w)}},f=()=>{t.activeElement===o&&s([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",v),t.addEventListener("focusout",f),t.addEventListener("touchstart",d),t.addEventListener("mousedown",d),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",v),t.removeEventListener("focusout",f),t.removeEventListener("touchstart",d),t.removeEventListener("mousedown",d)},setFocus:s}}},1878:(y,_,l)=>{l.d(_,{C:()=>i,a:()=>u,d:()=>a});var g=l(5861),m=l(3756);const u=function(){var n=(0,g.Z)(function*(e,t,o,s,d,c){var v;if(e)return e.attachViewToDom(t,o,d,s);if(!(c||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof o?null===(v=t.ownerDocument)||void 0===v?void 0:v.createElement(o):o;return s&&s.forEach(h=>f.classList.add(h)),d&&Object.assign(f,d),t.appendChild(f),yield new Promise(h=>(0,m.c)(f,h)),f});return function(t,o,s,d,c,v){return n.apply(this,arguments)}}(),a=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},i=()=>{let n,e;return{attachViewToDom:function(){var s=(0,g.Z)(function*(d,c,v={},f=[]){var h,p;if(n=d,c){const E="string"==typeof c?null===(h=n.ownerDocument)||void 0===h?void 0:h.createElement(c):c;f.forEach(r=>E.classList.add(r)),Object.assign(E,v),n.appendChild(E),yield new Promise(r=>(0,m.c)(E,r))}else if(n.children.length>0){const E=null===(p=n.ownerDocument)||void 0===p?void 0:p.createElement("div");f.forEach(r=>E.classList.add(r)),E.append(...n.children),n.appendChild(E)}const w=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),n.parentNode.insertBefore(e,n),w.appendChild(n),n});return function(c,v){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&e&&(e.parentNode.insertBefore(n,e),e.remove()),Promise.resolve())}}},7683:(y,_,l)=>{l.d(_,{a:()=>u,b:()=>a,c:()=>m,d:()=>n,h:()=>i});const g={getEngine(){var e;const t=window;return t.TapticEngine||(null===(e=t.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:o})},notification(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},m=()=>{g.selection()},u=()=>{g.selectionStart()},a=()=>{g.selectionChanged()},i=()=>{g.selectionEnd()},n=e=>{g.impact(e)}},207:(y,_,l)=>{l.d(_,{a:()=>d,b:()=>v,f:()=>s,g:()=>o,i:()=>t,p:()=>f,s:()=>c});var g=l(5861),m=l(3756),u=l(7208);const i="ion-content",n=".ion-content-scroll-host",e=`${i}, ${n}`,t=h=>h&&"ION-CONTENT"===h.tagName,o=function(){var h=(0,g.Z)(function*(p){return t(p)?(yield new Promise(w=>(0,m.c)(p,w)),p.getScrollElement()):p});return function(w){return h.apply(this,arguments)}}(),s=h=>h.querySelector(n)||h.querySelector(e),d=h=>h.closest(e),c=(h,p)=>t(h)?h.scrollToTop(p):Promise.resolve(h.scrollTo({top:0,left:0,behavior:p>0?"smooth":"auto"})),v=(h,p,w,E)=>t(h)?h.scrollByPoint(p,w,E):Promise.resolve(h.scrollBy({top:w,left:p,behavior:E>0?"smooth":"auto"})),f=h=>(0,u.a)(h,i)},7208:(y,_,l)=>{l.d(_,{a:()=>u,b:()=>m,p:()=>g});const g=a=>console.warn(`[Ionic Warning]: ${a}`),m=(a,...i)=>console.error(`[Ionic Error]: ${a}`,...i),u=(a,...i)=>console.error(`<${a.tagName.toLowerCase()}> must be used inside ${i.join(" or ")}.`)},8439:(y,_,l)=>{l.d(_,{s:()=>g});const g=t=>{try{if(t instanceof class e{constructor(o){this.value=o}})return t.value;if(!a()||"string"!=typeof t||""===t)return t;const o=document.createDocumentFragment(),s=document.createElement("div");o.appendChild(s),s.innerHTML=t,n.forEach(f=>{const h=o.querySelectorAll(f);for(let p=h.length-1;p>=0;p--){const w=h[p];w.parentNode?w.parentNode.removeChild(w):o.removeChild(w);const E=u(w);for(let r=0;r<E.length;r++)m(E[r])}});const d=u(o);for(let f=0;f<d.length;f++)m(d[f]);const c=document.createElement("div");c.appendChild(o);const v=c.querySelector("div");return null!==v?v.innerHTML:c.innerHTML}catch(o){return console.error(o),""}},m=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let s=t.attributes.length-1;s>=0;s--){const d=t.attributes.item(s),c=d.name;if(!i.includes(c.toLowerCase())){t.removeAttribute(c);continue}const v=d.value;null!=v&&v.toLowerCase().includes("javascript:")&&t.removeAttribute(c)}const o=u(t);for(let s=0;s<o.length;s++)m(o[s])},u=t=>null!=t.children?t.children:t.childNodes,a=()=>{var t;const o=window,s=null===(t=null==o?void 0:o.Ionic)||void 0===t?void 0:t.config;return!s||(s.get?s.get("sanitizerEnabled",!0):!0===s.sanitizerEnabled||void 0===s.sanitizerEnabled)},i=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},8117:(y,_,l)=>{l.d(_,{a:()=>g,b:()=>d,c:()=>n,d:()=>c,e:()=>r,f:()=>u,g:()=>m,h:()=>w,i:()=>e,j:()=>o,k:()=>v,l:()=>t,m:()=>i,n:()=>a,o:()=>s,p:()=>f,q:()=>h,r:()=>p,s:()=>E});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},1316:(y,_,l)=>{l.r(_),l.d(_,{KEYBOARD_DID_CLOSE:()=>m,KEYBOARD_DID_OPEN:()=>g,copyVisualViewport:()=>E,keyboardDidClose:()=>f,keyboardDidOpen:()=>c,keyboardDidResize:()=>v,resetKeyboardAssist:()=>e,setKeyboardClose:()=>d,setKeyboardOpen:()=>s,startKeyboardAssist:()=>t,trackViewportChanges:()=>w});const g="ionKeyboardDidShow",m="ionKeyboardDidHide";let a={},i={},n=!1;const e=()=>{a={},i={},n=!1},t=r=>{o(r),r.visualViewport&&(i=E(r.visualViewport),r.visualViewport.onresize=()=>{w(r),c()||v(r)?s(r):f(r)&&d(r)})},o=r=>{r.addEventListener("keyboardDidShow",M=>s(r,M)),r.addEventListener("keyboardDidHide",()=>d(r))},s=(r,M)=>{h(r,M),n=!0},d=r=>{p(r),n=!1},c=()=>!n&&a.width===i.width&&(a.height-i.height)*i.scale>150,v=r=>n&&!f(r),f=r=>n&&i.height===r.innerHeight,h=(r,M)=>{const D=new CustomEvent(g,{detail:{keyboardHeight:M?M.keyboardHeight:r.innerHeight-i.height}});r.dispatchEvent(D)},p=r=>{const M=new CustomEvent(m);r.dispatchEvent(M)},w=r=>{a=Object.assign({},i),i=E(r.visualViewport)},E=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},7741:(y,_,l)=>{l.d(_,{S:()=>m});const m={bubbles:{dur:1e3,circles:9,fn:(u,a,i)=>{const n=u*a/i-u+"ms",e=2*Math.PI*a/i;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(u,a,i)=>{const n=a/i,e=u*n-u+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,a)=>({r:6,style:{left:9-9*a+"px","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,a,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*a+(a<i/2?180:-180)}deg)`,"animation-delay":u*a/i-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,a,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*a+(a<i/2?180:-180)}deg)`,"animation-delay":u*a/i-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,a,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":u*a/i-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,a,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":u*a/i-u+"ms"}})}}},6546:(y,_,l)=>{l.r(_),l.d(_,{createSwipeBackGesture:()=>i});var g=l(3756),m=l(5062),u=l(3139);l(3509);const i=(n,e,t,o,s)=>{const d=n.ownerDocument.defaultView,c=(0,m.i)(n),f=r=>c?-r.deltaX:r.deltaX;return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(r=>{const{startX:C}=r;return c?C>=d.innerWidth-50:C<=50})(r)&&e(),onStart:t,onMove:r=>{const C=f(r)/d.innerWidth;o(C)},onEnd:r=>{const M=f(r),C=d.innerWidth,D=M/C,L=(r=>c?-r.velocityX:r.velocityX)(r),O=L>=0&&(L>.2||M>C/2),T=(O?1-D:D)*C;let x=0;if(T>5){const S=T/Math.abs(L);x=Math.min(S,540)}s(O,D<=0?.01:(0,g.l)(0,D,.9999),x)}})}},2854:(y,_,l)=>{l.d(_,{c:()=>u,g:()=>i,h:()=>m,o:()=>e});var g=l(5861);const m=(t,o)=>null!==o.closest(t),u=(t,o)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},o):o,i=t=>{const o={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(t).forEach(s=>o[s]=!0),o},n=/^[a-z][a-z0-9+\-.]*:/,e=function(){var t=(0,g.Z)(function*(o,s,d,c){if(null!=o&&"#"!==o[0]&&!n.test(o)){const v=document.querySelector("ion-router");if(v)return null!=s&&s.preventDefault(),v.push(o,d,c)}return!1});return function(s,d,c,v){return t.apply(this,arguments)}}()},8368:(y,_,l)=>{l.d(_,{e:()=>i});var g=l(2340),m=l(1223),u=l(520),a=l(614);let i=(()=>{class n{constructor(t,o){this.http=t,this.tokenService=o}login(t,o){return this.http.post(g.N.apiURL+"auth/",{email:t,mdp:o})}updateMdp(t,o,s){const d=this.tokenService.getDecodedToken().id;return this.http.patch(g.N.apiURL+"auth/"+d,{oldPwd:t,newPwd:o,newPwdConf:s})}}return n.\u0275fac=function(t){return new(t||n)(m.LFG(u.eN),m.LFG(a.B))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},5089:(y,_,l)=>{l.d(_,{K:()=>i});var g=l(2340),m=l(1223),u=l(520),a=l(614);let i=(()=>{class n{constructor(t,o){this.http=t,this.tokenService=o}get1User(t){return this.http.get(g.N.apiURL+"users/"+String(t))}createUser(t,o,s,d,c){return this.http.post(g.N.apiURL+"users/",{nom:t,prenom:o,email:s,mdp:d,mdp1:c})}destroyUser(){const t=this.tokenService.getDecodedToken().id;return this.http.delete(g.N.apiURL+"users/"+t)}}return n.\u0275fac=function(t){return new(t||n)(m.LFG(u.eN),m.LFG(a.B))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);