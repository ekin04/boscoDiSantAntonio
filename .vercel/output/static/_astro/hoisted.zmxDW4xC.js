var Mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ot(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ot={exports:{}};(function(t,n){(function(o,e){t.exports=e()})(Mt,function(){return function(o){function e(c){if(l[c])return l[c].exports;var d=l[c]={exports:{},id:c,loaded:!1};return o[c].call(d.exports,d,d.exports,e),d.loaded=!0,d.exports}var l={};return e.m=o,e.c=l,e.p="dist/",e(0)}([function(o,e,l){function c(w){return w&&w.__esModule?w:{default:w}}var d=Object.assign||function(w){for(var N=1;N<arguments.length;N++){var Z=arguments[N];for(var F in Z)Object.prototype.hasOwnProperty.call(Z,F)&&(w[F]=Z[F])}return w},i=l(1),s=(c(i),l(6)),u=c(s),b=l(7),a=c(b),f=l(8),m=c(f),p=l(9),k=c(p),_=l(10),O=c(_),T=l(11),x=c(T),S=l(14),E=c(S),P=[],D=!1,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},V=function(){var w=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(w&&(D=!0),D)return P=(0,x.default)(P,j),(0,O.default)(P,j.once),P},Q=function(){P=(0,E.default)(),V()},y=function(){P.forEach(function(w,N){w.node.removeAttribute("data-aos"),w.node.removeAttribute("data-aos-easing"),w.node.removeAttribute("data-aos-duration"),w.node.removeAttribute("data-aos-delay")})},g=function(w){return w===!0||w==="mobile"&&k.default.mobile()||w==="phone"&&k.default.phone()||w==="tablet"&&k.default.tablet()||typeof w=="function"&&w()===!0},M=function(w){j=d(j,w),P=(0,E.default)();var N=document.all&&!window.atob;return g(j.disable)||N?y():(j.disableMutationObserver||m.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),j.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),j.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?V(!0):j.startEvent==="load"?window.addEventListener(j.startEvent,function(){V(!0)}):document.addEventListener(j.startEvent,function(){V(!0)}),window.addEventListener("resize",(0,a.default)(V,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,a.default)(V,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,O.default)(P,j.once)},j.throttleDelay)),j.disableMutationObserver||m.default.ready("[data-aos]",Q),P)};o.exports={init:M,refresh:V,refreshHard:Q}},function(o,e){},,,,,function(o,e){(function(l){function c(g,M,w){function N(z){var $=ee,K=le;return ee=le=void 0,te=z,q=g.apply(K,$)}function Z(z){return te=z,L=setTimeout(U,M),oe?N(z):q}function F(z){var $=z-B,K=z-te,ke=M-$;return ie?Q(ke,Y-K):ke}function X(z){var $=z-B,K=z-te;return B===void 0||$>=M||$<0||ie&&K>=Y}function U(){var z=y();return X(z)?re(z):void(L=setTimeout(U,F(z)))}function re(z){return L=void 0,I&&ee?N(z):(ee=le=void 0,q)}function se(){L!==void 0&&clearTimeout(L),te=0,ee=B=le=L=void 0}function J(){return L===void 0?q:re(y())}function ce(){var z=y(),$=X(z);if(ee=arguments,le=this,B=z,$){if(L===void 0)return Z(B);if(ie)return L=setTimeout(U,M),N(B)}return L===void 0&&(L=setTimeout(U,M)),q}var ee,le,Y,q,L,B,te=0,oe=!1,ie=!1,I=!0;if(typeof g!="function")throw new TypeError(f);return M=b(M)||0,i(w)&&(oe=!!w.leading,ie="maxWait"in w,Y=ie?V(b(w.maxWait)||0,M):Y,I="trailing"in w?!!w.trailing:I),ce.cancel=se,ce.flush=J,ce}function d(g,M,w){var N=!0,Z=!0;if(typeof g!="function")throw new TypeError(f);return i(w)&&(N="leading"in w?!!w.leading:N,Z="trailing"in w?!!w.trailing:Z),c(g,M,{leading:N,maxWait:M,trailing:Z})}function i(g){var M=typeof g>"u"?"undefined":a(g);return!!g&&(M=="object"||M=="function")}function s(g){return!!g&&(typeof g>"u"?"undefined":a(g))=="object"}function u(g){return(typeof g>"u"?"undefined":a(g))=="symbol"||s(g)&&j.call(g)==p}function b(g){if(typeof g=="number")return g;if(u(g))return m;if(i(g)){var M=typeof g.valueOf=="function"?g.valueOf():g;g=i(M)?M+"":M}if(typeof g!="string")return g===0?g:+g;g=g.replace(k,"");var w=O.test(g);return w||T.test(g)?x(g.slice(2),w?2:8):_.test(g)?m:+g}var a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},f="Expected a function",m=NaN,p="[object Symbol]",k=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,T=/^0o[0-7]+$/i,x=parseInt,S=(typeof l>"u"?"undefined":a(l))=="object"&&l&&l.Object===Object&&l,E=(typeof self>"u"?"undefined":a(self))=="object"&&self&&self.Object===Object&&self,P=S||E||Function("return this")(),D=Object.prototype,j=D.toString,V=Math.max,Q=Math.min,y=function(){return P.Date.now()};o.exports=d}).call(e,function(){return this}())},function(o,e){(function(l){function c(y,g,M){function w(I){var z=ce,$=ee;return ce=ee=void 0,B=I,Y=y.apply($,z)}function N(I){return B=I,q=setTimeout(X,g),te?w(I):Y}function Z(I){var z=I-L,$=I-B,K=g-z;return oe?V(K,le-$):K}function F(I){var z=I-L,$=I-B;return L===void 0||z>=g||z<0||oe&&$>=le}function X(){var I=Q();return F(I)?U(I):void(q=setTimeout(X,Z(I)))}function U(I){return q=void 0,ie&&ce?w(I):(ce=ee=void 0,Y)}function re(){q!==void 0&&clearTimeout(q),B=0,ce=L=ee=q=void 0}function se(){return q===void 0?Y:U(Q())}function J(){var I=Q(),z=F(I);if(ce=arguments,ee=this,L=I,z){if(q===void 0)return N(L);if(oe)return q=setTimeout(X,g),w(L)}return q===void 0&&(q=setTimeout(X,g)),Y}var ce,ee,le,Y,q,L,B=0,te=!1,oe=!1,ie=!0;if(typeof y!="function")throw new TypeError(a);return g=u(g)||0,d(M)&&(te=!!M.leading,oe="maxWait"in M,le=oe?j(u(M.maxWait)||0,g):le,ie="trailing"in M?!!M.trailing:ie),J.cancel=re,J.flush=se,J}function d(y){var g=typeof y>"u"?"undefined":b(y);return!!y&&(g=="object"||g=="function")}function i(y){return!!y&&(typeof y>"u"?"undefined":b(y))=="object"}function s(y){return(typeof y>"u"?"undefined":b(y))=="symbol"||i(y)&&D.call(y)==m}function u(y){if(typeof y=="number")return y;if(s(y))return f;if(d(y)){var g=typeof y.valueOf=="function"?y.valueOf():y;y=d(g)?g+"":g}if(typeof y!="string")return y===0?y:+y;y=y.replace(p,"");var M=_.test(y);return M||O.test(y)?T(y.slice(2),M?2:8):k.test(y)?f:+y}var b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},a="Expected a function",f=NaN,m="[object Symbol]",p=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,O=/^0o[0-7]+$/i,T=parseInt,x=(typeof l>"u"?"undefined":b(l))=="object"&&l&&l.Object===Object&&l,S=(typeof self>"u"?"undefined":b(self))=="object"&&self&&self.Object===Object&&self,E=x||S||Function("return this")(),P=Object.prototype,D=P.toString,j=Math.max,V=Math.min,Q=function(){return E.Date.now()};o.exports=c}).call(e,function(){return this}())},function(o,e){function l(b){var a=void 0,f=void 0;for(a=0;a<b.length;a+=1)if(f=b[a],f.dataset&&f.dataset.aos||f.children&&l(f.children))return!0;return!1}function c(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function d(){return!!c()}function i(b,a){var f=window.document,m=c(),p=new m(s);u=a,p.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(b){b&&b.forEach(function(a){var f=Array.prototype.slice.call(a.addedNodes),m=Array.prototype.slice.call(a.removedNodes),p=f.concat(m);if(l(p))return u()})}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){};e.default={isSupported:d,ready:i}},function(o,e){function l(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}function c(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var d=function(){function f(m,p){for(var k=0;k<p.length;k++){var _=p[k];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(m,_.key,_)}}return function(m,p,k){return p&&f(m.prototype,p),k&&f(m,k),m}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,b=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=function(){function f(){l(this,f)}return d(f,[{key:"phone",value:function(){var m=c();return!(!i.test(m)&&!s.test(m.substr(0,4)))}},{key:"mobile",value:function(){var m=c();return!(!u.test(m)&&!b.test(m.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();e.default=new a},function(o,e){Object.defineProperty(e,"__esModule",{value:!0});var l=function(d,i,s){var u=d.node.getAttribute("data-aos-once");i>d.position?d.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!s&&u!=="true")&&d.node.classList.remove("aos-animate")},c=function(d,i){var s=window.pageYOffset,u=window.innerHeight;d.forEach(function(b,a){l(b,u+s,i)})};e.default=c},function(o,e,l){function c(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(e,"__esModule",{value:!0});var d=l(12),i=c(d),s=function(u,b){return u.forEach(function(a,f){a.node.classList.add("aos-init"),a.position=(0,i.default)(a.node,b.offset)}),u};e.default=s},function(o,e,l){function c(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(e,"__esModule",{value:!0});var d=l(13),i=c(d),s=function(u,b){var a=0,f=0,m=window.innerHeight,p={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(p.offset&&!isNaN(p.offset)&&(f=parseInt(p.offset)),p.anchor&&document.querySelectorAll(p.anchor)&&(u=document.querySelectorAll(p.anchor)[0]),a=(0,i.default)(u).top,p.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=u.offsetHeight/2;break;case"bottom-bottom":a+=u.offsetHeight;break;case"top-center":a+=m/2;break;case"bottom-center":a+=m/2+u.offsetHeight;break;case"center-center":a+=m/2+u.offsetHeight/2;break;case"top-top":a+=m;break;case"bottom-top":a+=u.offsetHeight+m;break;case"center-top":a+=u.offsetHeight/2+m}return p.anchorPlacement||p.offset||isNaN(b)||(f=b),a+f};e.default=s},function(o,e){Object.defineProperty(e,"__esModule",{value:!0});var l=function(c){for(var d=0,i=0;c&&!isNaN(c.offsetLeft)&&!isNaN(c.offsetTop);)d+=c.offsetLeft-(c.tagName!="BODY"?c.scrollLeft:0),i+=c.offsetTop-(c.tagName!="BODY"?c.scrollTop:0),c=c.offsetParent;return{top:i,left:d}};e.default=l},function(o,e){Object.defineProperty(e,"__esModule",{value:!0});var l=function(c){return c=c||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(c,function(d){return{node:d}})};e.default=l}])})})(ot);var Lt=ot.exports;const Tt=Ot(Lt);function nt(){Tt.init({duration:800,easing:"ease-out-cubic",once:!0,offset:50})}nt();document.addEventListener("astro:after-swap",nt);/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/const it="opt-in",_e="opt-out",at="show--consent",rt="show--preferences",Ue="disable--interaction",je="data-category",H="div",ue="button",de="aria-hidden",Se="btn-group",ne="click",ye="data-role",Ye="consentModal",Ge="preferencesModal";class jt{constructor(){this.t={mode:it,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:"cc_cookie",expiresAfterDays:182,domain:"",path:"/",sameSite:"Lax"}},this.o={i:{},l:"",_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:"",D:!0,T:!1,k:!1,A:!1,N:!1,H:[],V:!1,I:!0,L:[],j:!1,F:"",P:!1,O:[],R:[],B:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:"cc:onFirstConsent",le:"cc:onConsent",de:"cc:onChange",fe:"cc:onModalShow",_e:"cc:onModalHide",ue:"cc:onModalReady"}}}const r=new jt,ct=(t,n)=>t.indexOf(n),R=(t,n)=>ct(t,n)!==-1,De=t=>Array.isArray(t),we=t=>typeof t=="string",Ie=t=>!!t&&typeof t=="object"&&!De(t),fe=t=>typeof t=="function",he=t=>Object.keys(t),st=t=>Array.from(new Set(t)),ze=()=>document.activeElement,ve=t=>t.preventDefault(),Fe=(t,n)=>t.querySelectorAll(n),v=t=>{const n=document.createElement(t);return t===ue&&(n.type=t),n},C=(t,n,o)=>t.setAttribute(n,o),He=(t,n,o)=>{t.removeAttribute(o?"data-"+n:n)},Le=(t,n,o)=>t.getAttribute(o?"data-"+n:n),h=(t,n)=>t.appendChild(n),G=(t,n)=>t.classList.add(n),ae=(t,n)=>G(t,"cm__"+n),A=(t,n)=>G(t,"pm__"+n),ge=(t,n)=>t.classList.remove(n),be=t=>{if(typeof t!="object")return t;if(t instanceof Date)return new Date(t.getTime());let n=Array.isArray(t)?[]:{};for(let o in t){let e=t[o];n[o]=be(e)}return n},Xe=(t,n)=>dispatchEvent(new CustomEvent(t,{detail:n})),W=(t,n,o,e)=>{t.addEventListener(n,o),e&&r.o.m.push({pe:t,me:n,ge:o})},zt=()=>{const t=r.t.cookie.expiresAfterDays;return fe(t)?t(r.o.F):t},Pe=(t,n)=>{const o=t||[],e=n||[];return o.filter(l=>!R(e,l)).concat(e.filter(l=>!R(o,l)))},lt=t=>{r.o.R=st(t),r.o.F=(()=>{let n="custom";const{R:o,O:e,B:l}=r.o,c=o.length;return c===e.length?n="all":c===l.length&&(n="necessary"),n})()},ut=(t,n,o,e)=>{const l="accept-",{show:c,showPreferences:d,hide:i,hidePreferences:s,acceptCategory:u}=n,b=t||document,a=x=>Fe(b,`[data-cc="${x}"]`),f=(x,S)=>{ve(x),u(S),s(),i()},m=a("show-preferencesModal"),p=a("show-consentModal"),k=a(l+"all"),_=a(l+"necessary"),O=a(l+"custom"),T=r.t.lazyHtmlGeneration;for(const x of m)C(x,"aria-haspopup","dialog"),W(x,ne,S=>{ve(S),d()}),T&&(W(x,"mouseenter",S=>{ve(S),r.o.N||o(n,e)},!0),W(x,"focus",()=>{r.o.N||o(n,e)}));for(let x of p)C(x,"aria-haspopup","dialog"),W(x,ne,S=>{ve(S),c(!0)},!0);for(let x of k)W(x,ne,S=>{f(S,"all")},!0);for(let x of O)W(x,ne,S=>{f(S)},!0);for(let x of _)W(x,ne,S=>{f(S,[])},!0)},pe=(t,n)=>{t&&(n&&(t.tabIndex=-1),t.focus(),n&&t.removeAttribute("tabindex"))},dt=(t,n)=>{const o=e=>{e.target.removeEventListener("transitionend",o),e.propertyName==="opacity"&&getComputedStyle(t).opacity==="1"&&pe((l=>l===1?r.ne.be:r.ne.ve)(n))};W(t,"transitionend",o)};let Je;const ft=t=>{clearTimeout(Je),t?G(r.ne.ye,Ue):Je=setTimeout(()=>{ge(r.ne.ye,Ue)},500)},At=["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5","M 3.572 13.406 L 8.281 18.115 L 20.428 5.885","M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "],Me=(t=0,n=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${n}"><path d="${At[t]}"/></svg>`,pt=t=>{const n=r.ne,o=r.o;(e=>{const l=e===n.he,c=o.i.disablePageInteraction?n.ye:l?n.Ce:n.ye;W(c,"keydown",d=>{if(d.key!=="Tab"||!(l?o.k&&!o.A:o.A))return;const i=ze(),s=l?o.q:o.K;s.length!==0&&(d.shiftKey?i!==s[0]&&e.contains(i)||(ve(d),pe(s[1])):i!==s[1]&&e.contains(i)||(ve(d),pe(s[0])))},!0)})(t)},Dt=["[href]",ue,"input","details","[tabindex]"].map(t=>t+':not([tabindex="-1"])').join(","),mt=t=>{const{o:n,ne:o}=r,e=(l,c)=>{const d=Fe(l,Dt);c[0]=d[0],c[1]=d[d.length-1]};t===1&&n.T&&e(o.he,n.q),t===2&&n.N&&e(o.we,n.K)},me=(t,n,o)=>{const{de:e,le:l,ie:c,_e:d,ue:i,fe:s}=r.ce,u=r.re;if(n){const a={modalName:n};return t===u.fe?fe(s)&&s(a):t===u._e?fe(d)&&d(a):(a.modal=o,fe(i)&&i(a)),Xe(t,a)}const b={cookie:r.o.p};t===u.ie?fe(c)&&c(be(b)):t===u.le?fe(l)&&l(be(b)):(b.changedCategories=r.o.L,b.changedServices=r.o.ee,fe(e)&&e(be(b))),Xe(t,be(b))},Ae=(t,n)=>{try{return t()}catch(o){return!n&&console.warn("CookieConsent:",o),!1}},Be=t=>{const{Y:n,ee:o,O:e,X:l,oe:c,p:d,L:i}=r.o;for(const a of e){const f=o[a]||n[a]||[];for(const m of f){const p=l[a][m];if(!p)continue;const{onAccept:k,onReject:_}=p;!p.Se&&R(n[a],m)?(p.Se=!0,fe(k)&&k()):p.Se&&!R(n[a],m)&&(p.Se=!1,fe(_)&&_())}}if(!r.t.manageScriptTags)return;const s=c,u=t||d.categories||[],b=(a,f)=>{if(f>=a.length)return;const m=c[f];if(m.xe)return b(a,f+1);const p=m.Me,k=m.De,_=m.Te,O=R(u,k),T=!!_&&R(n[k],_);if(!_&&!m.ke&&O||!_&&m.ke&&!O&&R(i,k)||_&&!m.ke&&T||_&&m.ke&&!T&&R(o[k]||[],_)){m.xe=!0;const x=Le(p,"type",!0);He(p,"type",!!x),He(p,je);let S=Le(p,"src",!0);S&&He(p,"src",!0);const E=v("script");E.textContent=p.innerHTML;for(const{nodeName:D}of p.attributes)C(E,D,p[D]||Le(p,D));x&&(E.type=x),S?E.src=S:S=p.src;const P=!!S&&(!x||["text/javascript","module"].includes(x));if(P&&(E.onload=E.onerror=()=>{b(a,++f)}),p.replaceWith(E),P)return}b(a,++f)};b(s,0)},Te="bottom",Re="left",bt="center",We="right",Ee="inline",gt="wide",ht="pm--",Ne=["middle","top",Te],Ve=[Re,bt,We],Ht={box:{Ee:[gt,Ee],Ae:Ne,Ne:Ve,He:Te,Ve:We},cloud:{Ee:[Ee],Ae:Ne,Ne:Ve,He:Te,Ve:bt},bar:{Ee:[Ee],Ae:Ne.slice(1),Ne:[],He:Te,Ve:""}},Pt={box:{Ee:[],Ae:[],Ne:[],He:"",Ve:""},bar:{Ee:[gt],Ae:[],Ne:[Re,We],He:"",Ve:Re}},vt=t=>{const n=r.o.i.guiOptions,o=n&&n.consentModal,e=n&&n.preferencesModal;t===0&&Ke(r.ne.he,Ht,o,"cm--","box","cm"),t===1&&Ke(r.ne.we,Pt,e,ht,"box","pm")},Ke=(t,n,o,e,l,c)=>{t.className=c;const d=o&&o.layout,i=o&&o.position,s=o&&o.flipButtons,u=!o||o.equalWeightButtons!==!1,b=d&&d.split(" ")||[],a=b[0],f=b[1],m=a in n?a:l,p=n[m],k=R(p.Ee,f)&&f,_=i&&i.split(" ")||[],O=_[0],T=e===ht?_[0]:_[1],x=R(p.Ae,O)?O:p.He,S=R(p.Ne,T)?T:p.Ve,E=D=>{D&&G(t,e+D)};E(m),E(k),E(x),E(S),s&&E("flip");const P=c+"__btn--secondary";if(c==="cm"){const{Ie:D,Le:j}=r.ne;D&&(u?ge(D,P):G(D,P)),j&&(u?ge(j,P):G(j,P))}else{const{je:D}=r.ne;D&&(u?ge(D,P):G(D,P))}},Oe=(t,n)=>{const o=r.o,e=r.ne,{hide:l,hidePreferences:c,acceptCategory:d}=t,i=S=>{d(S),c(),l()},s=o.u&&o.u.preferencesModal;if(!s)return;const u=s.title,b=s.closeIconLabel,a=s.acceptAllBtn,f=s.acceptNecessaryBtn,m=s.savePreferencesBtn,p=s.sections||[],k=a||f||m;if(e.Fe)e.Pe=v(H),A(e.Pe,"body");else{e.Fe=v(H),G(e.Fe,"pm-wrapper");const S=v("div");G(S,"pm-overlay"),h(e.Fe,S),W(S,ne,c),e.we=v(H),G(e.we,"pm"),C(e.we,"role","dialog"),C(e.we,de,!0),C(e.we,"aria-modal",!0),C(e.we,"aria-labelledby","pm__title"),W(e.ye,"keydown",E=>{E.keyCode===27&&c()},!0),e.Oe=v(H),A(e.Oe,"header"),e.Re=v("h2"),A(e.Re,"title"),e.Re.id="pm__title",e.Be=v(ue),A(e.Be,"close-btn"),C(e.Be,"aria-label",s.closeIconLabel||""),W(e.Be,ne,c),e.Ge=v("span"),e.Ge.innerHTML=Me(),h(e.Be,e.Ge),e.Je=v(H),A(e.Je,"body"),e.Ue=v(H),A(e.Ue,"footer");var _=v(H);G(_,"btns");var O=v(H),T=v(H);A(O,Se),A(T,Se),h(e.Ue,O),h(e.Ue,T),h(e.Oe,e.Re),h(e.Oe,e.Be),e.ve=v(H),C(e.ve,"tabIndex",-1),h(e.we,e.ve),h(e.we,e.Oe),h(e.we,e.Je),k&&h(e.we,e.Ue),h(e.Fe,e.we)}let x;u&&(e.Re.innerHTML=u,b&&C(e.Be,"aria-label",b)),p.forEach((S,E)=>{const P=S.title,D=S.description,j=S.linkedCategory,V=j&&o.P[j],Q=S.cookieTable,y=Q&&Q.body,g=Q&&Q.caption,M=y&&y.length>0,w=!!V,N=w&&o.X[j],Z=Ie(N)&&he(N)||[],F=w&&(!!D||!!M||he(N).length>0);var X=v(H);if(A(X,"section"),F||D){var U=v(H);A(U,"section-desc-wrapper")}let re=Z.length;if(F&&re>0){const Y=v(H);A(Y,"section-services");for(const q of Z){const L=N[q],B=L&&L.label||q,te=v(H),oe=v(H),ie=v(H),I=v(H);A(te,"service"),A(I,"service-title"),A(oe,"service-header"),A(ie,"service-icon");const z=Qe(B,q,V,!0,j);I.innerHTML=B,h(oe,ie),h(oe,I),h(te,oe),h(te,z),h(Y,te)}h(U,Y)}if(P){var se=v(H),J=v(w?ue:H);if(A(se,"section-title-wrapper"),A(J,"section-title"),J.innerHTML=P,h(se,J),w){const Y=v("span");Y.innerHTML=Me(2,3.5),A(Y,"section-arrow"),h(se,Y),X.className+="--toggle";const q=Qe(P,j,V);let L=s.serviceCounterLabel;if(re>0&&we(L)){let B=v("span");A(B,"badge"),A(B,"service-counter"),C(B,de,!0),C(B,"data-servicecounter",re),L&&(L=L.split("|"),L=L.length>1&&re>1?L[1]:L[0],C(B,"data-counterlabel",L)),B.innerHTML=re+(L?" "+L:""),h(J,B)}if(F){A(X,"section--expandable");var ce=j+"-desc";C(J,"aria-expanded",!1),C(J,"aria-controls",ce)}h(se,q)}else C(J,"role","heading"),C(J,"aria-level","3");h(X,se)}if(D){var ee=v("p");A(ee,"section-desc"),ee.innerHTML=D,h(U,ee)}if(F&&(C(U,de,"true"),U.id=ce,((Y,q,L)=>{W(J,ne,()=>{q.classList.contains("is-expanded")?(ge(q,"is-expanded"),C(L,"aria-expanded","false"),C(Y,de,"true")):(G(q,"is-expanded"),C(L,"aria-expanded","true"),C(Y,de,"false"))})})(U,X,J),M)){const Y=v("table"),q=v("thead"),L=v("tbody");if(g){const z=v("caption");A(z,"table-caption"),z.innerHTML=g,Y.appendChild(z)}A(Y,"section-table"),A(q,"table-head"),A(L,"table-body");const B=Q.headers,te=he(B),oe=e.$e.createDocumentFragment(),ie=v("tr");for(const z of te){const $=B[z],K=v("th");K.id="cc__row-"+$+E,C(K,"scope","col"),A(K,"table-th"),K.innerHTML=$,h(oe,K)}h(ie,oe),h(q,ie);const I=e.$e.createDocumentFragment();for(const z of y){const $=v("tr");A($,"table-tr");for(const K of te){const ke=B[K],Ct=z[K],xe=v("td"),Ze=v(H);A(xe,"table-td"),C(xe,"data-column",ke),C(xe,"headers","cc__row-"+ke+E),Ze.insertAdjacentHTML("beforeend",Ct),h(xe,Ze),h($,xe)}h(I,$)}h(L,I),h(Y,q),h(Y,L),h(U,Y)}(F||D)&&h(X,U);const le=e.Pe||e.Je;w?(x||(x=v(H),A(x,"section-toggles")),x.appendChild(X)):x=null,h(le,x||X)}),a&&(e.ze||(e.ze=v(ue),A(e.ze,"btn"),C(e.ze,ye,"all"),h(O,e.ze),W(e.ze,ne,()=>i("all"))),e.ze.innerHTML=a),f&&(e.je||(e.je=v(ue),A(e.je,"btn"),C(e.je,ye,"necessary"),h(O,e.je),W(e.je,ne,()=>i([]))),e.je.innerHTML=f),m&&(e.qe||(e.qe=v(ue),A(e.qe,"btn"),A(e.qe,"btn--secondary"),C(e.qe,ye,"save"),h(T,e.qe),W(e.qe,ne,()=>i())),e.qe.innerHTML=m),e.Pe&&(e.we.replaceChild(e.Pe,e.Je),e.Je=e.Pe),vt(1),o.N||(o.N=!0,me(r.re.ue,Ge,e.we),n(t),h(e.Ce,e.Fe),pt(e.we),setTimeout(()=>G(e.Fe,"cc--anim"),100)),mt(2)};function Qe(t,n,o,e,l){const c=r.o,d=r.ne,i=v("label"),s=v("input"),u=v("span"),b=v("span"),a=v("span"),f=v("span"),m=v("span");if(f.innerHTML=Me(1,3),m.innerHTML=Me(0,3),s.type="checkbox",G(i,"section__toggle-wrapper"),G(s,"section__toggle"),G(f,"toggle__icon-on"),G(m,"toggle__icon-off"),G(u,"toggle__icon"),G(b,"toggle__icon-circle"),G(a,"toggle__label"),C(u,de,"true"),e?(G(i,"toggle-service"),C(s,je,l),d.se[l][n]=s):d.ae[n]=s,e?(p=>{W(s,"change",()=>{const k=d.se[p],_=d.ae[p];c.Z[p]=[];for(let O in k){const T=k[O];T.checked&&c.Z[p].push(T.value)}_.checked=c.Z[p].length>0})})(l):(p=>{W(s,ne,()=>{const k=d.se[p],_=s.checked;c.Z[p]=[];for(let O in k)k[O].checked=_,_&&c.Z[p].push(O)})})(n),s.value=n,a.textContent=t.replace(/<.*>.*<\/.*>/gm,""),h(b,m),h(b,f),h(u,b),c.D)(o.readOnly||o.enabled)&&(s.checked=!0);else if(e){const p=c.Y[l];s.checked=o.readOnly||R(p,n)}else R(c.R,n)&&(s.checked=!0);return o.readOnly&&(s.disabled=!0),h(i,s),h(i,u),h(i,a),i}const qe=()=>{const t=v("span");return r.ne.Ke||(r.ne.Ke=t),t},yt=(t,n)=>{const o=r.o,e=r.ne,{hide:l,showPreferences:c,acceptCategory:d}=t,i=o.u&&o.u.consentModal;if(!i)return;const s=i.acceptAllBtn,u=i.acceptNecessaryBtn,b=i.showPreferencesBtn,a=i.closeIconLabel,f=i.footer,m=i.label,p=i.title,k=O=>{l(),d(O)};if(!e.Qe){e.Qe=v(H),e.he=v(H),e.We=v(H),e.Xe=v(H),e.Ye=v(H),G(e.Qe,"cm-wrapper"),G(e.he,"cm"),ae(e.We,"body"),ae(e.Xe,"texts"),ae(e.Ye,"btns"),C(e.he,"role","dialog"),C(e.he,"aria-modal","true"),C(e.he,de,"false"),C(e.he,"aria-describedby","cm__desc"),m?C(e.he,"aria-label",m):p&&C(e.he,"aria-labelledby","cm__title");const O="box",T=o.i.guiOptions,x=T&&T.consentModal,S=(x&&x.layout||O).split(" ")[0]===O;p&&a&&S&&(e.Le||(e.Le=v(ue),e.Le.innerHTML=Me(),ae(e.Le,"btn"),ae(e.Le,"btn--close"),W(e.Le,ne,()=>{k([])}),h(e.We,e.Le)),C(e.Le,"aria-label",a)),h(e.We,e.Xe),(s||u||b)&&h(e.We,e.Ye),e.be=v(H),C(e.be,"tabIndex",-1),h(e.he,e.be),h(e.he,e.We),h(e.Qe,e.he)}p&&(e.Ze||(e.Ze=v("h2"),e.Ze.className=e.Ze.id="cm__title",h(e.Xe,e.Ze)),e.Ze.innerHTML=p);let _=i.description;if(_&&(o.V&&(_=_.replace("{{revisionMessage}}",o.I?"":i.revisionMessage||"")),e.et||(e.et=v("p"),e.et.className=e.et.id="cm__desc",h(e.Xe,e.et)),e.et.innerHTML=_),s&&(e.tt||(e.tt=v(ue),h(e.tt,qe()),ae(e.tt,"btn"),C(e.tt,ye,"all"),W(e.tt,ne,()=>{k("all")})),e.tt.firstElementChild.innerHTML=s),u&&(e.Ie||(e.Ie=v(ue),h(e.Ie,qe()),ae(e.Ie,"btn"),C(e.Ie,ye,"necessary"),W(e.Ie,ne,()=>{k([])})),e.Ie.firstElementChild.innerHTML=u),b&&(e.ot||(e.ot=v(ue),h(e.ot,qe()),ae(e.ot,"btn"),ae(e.ot,"btn--secondary"),C(e.ot,ye,"show"),W(e.ot,"mouseenter",()=>{o.N||Oe(t,n)}),W(e.ot,ne,c)),e.ot.firstElementChild.innerHTML=b),e.nt||(e.nt=v(H),ae(e.nt,Se),s&&h(e.nt,e.tt),u&&h(e.nt,e.Ie),(s||u)&&h(e.We,e.nt),h(e.Ye,e.nt)),e.ot&&!e.st&&(e.st=v(H),e.Ie&&e.tt?(ae(e.st,Se),h(e.st,e.ot),h(e.Ye,e.st)):(h(e.nt,e.ot),ae(e.nt,Se+"--uneven"))),f){if(!e.ct){let O=v(H),T=v(H);e.ct=v(H),ae(O,"footer"),ae(T,"links"),ae(e.ct,"link-group"),h(T,e.ct),h(O,T),h(e.he,O)}e.ct.innerHTML=f}vt(0),o.T||(o.T=!0,me(r.re.ue,Ye,e.he),n(t),h(e.Ce,e.Qe),pt(e.he),setTimeout(()=>G(e.Qe,"cc--anim"),100)),mt(1),ut(e.We,t,Oe,n)},wt=t=>{if(!we(t))return null;if(t in r.o._)return t;let n=t.slice(0,2);return n in r.o._?n:null},kt=()=>r.o.l||r.o.i.language.default,xt=t=>{t&&(r.o.l=t)},Et=async t=>{const n=r.o;let o=wt(t)?t:kt(),e=n._[o];return we(e)?e=await(async l=>{try{return await(await fetch(l)).json()}catch(c){return console.error(c),!1}})(e):fe(e)&&(e=await e()),!!e&&(n.u=e,xt(o),!0)},Nt=()=>{let t=r.o.i.language.rtl,n=r.ne.Ce;t&&n&&(De(t)||(t=[t]),R(t,r.o.l)?G(n,"cc--rtl"):ge(n,"cc--rtl"))},Ce=()=>{const t=r.ne;if(t.Ce)return;t.Ce=v(H),t.Ce.id="cc-main",t.Ce.setAttribute("data-nosnippet",""),Nt();let n=r.o.i.root;n&&we(n)&&(n=document.querySelector(n)),(n||t.$e.body).appendChild(t.Ce)},qt=t=>Ae(()=>localStorage.removeItem(t)),et=(t,n)=>{if(n instanceof RegExp)return t.filter(o=>n.test(o));{const o=ct(t,n);return o>-1?[t[o]]:[]}},It=t=>{const{hostname:n,protocol:o}=location,{name:e,path:l,domain:c,sameSite:d,useLocalStorage:i}=r.t.cookie,s=864e5*zt(),u=new Date;u.setTime(u.getTime()+s),r.o.p.expirationTime=u.getTime();const b=JSON.stringify(r.o.p);let a=e+"="+encodeURIComponent(b)+(s!==0?"; expires="+u.toUTCString():"")+"; Path="+l+"; SameSite="+d;R(n,".")&&(a+="; Domain="+c),o==="https:"&&(a+="; Secure"),i?((f,m)=>{Ae(()=>localStorage.setItem(f,m))})(e,b):document.cookie=a,r.o.p},tt=(t,n,o)=>{if(t.length===0)return;const e=o||r.t.cookie.domain,l=n||r.t.cookie.path,c=e.slice(0,4)==="www.",d=c&&e.substring(4),i=(s,u)=>{document.cookie=s+"=; path="+l+(u?"; domain=."+u:"")+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;"};for(const s of t)i(s),i(s,e),c&&i(s,d)},Bt=t=>{const n=r.t.cookie.name,o=r.t.cookie.useLocalStorage;return((l,c)=>{let d;return d=Ae(()=>JSON.parse(c?l:decodeURIComponent(l)),!0)||{},d})(o?(e=n,Ae(()=>localStorage.getItem(e))||""):Rt(n),o);var e},Rt=(t,n)=>{const o=document.cookie.match("(^|;)\\s*"+t+"\\s*=\\s*([^;]+)");return o?o.pop():""},Yt=t=>{const n=document.cookie.split(/;\s*/),o=[];for(const e of n){let l=e.split("=")[0];o.push(l)}return o},Gt=(t,n=[])=>{((o,e)=>{const{O:l,R:c,B:d,N:i,Z:s,G:u,X:b}=r.o;let a=[];if(o){De(o)?a.push(...o):we(o)&&(a=o==="all"?l:[o]);for(const f of l)s[f]=R(a,f)?he(b[f]):[]}else a=[...c,...u],i&&(a=(()=>{const f=r.ne.ae;if(!f)return[];let m=[];for(let p in f)f[p].checked&&m.push(p);return m})());a=a.filter(f=>!R(l,f)||!R(e,f)),a.push(...d),lt(a)})(t,n),(o=>{const e=r.o,{Z:l,B:c,Y:d,X:i,O:s}=e,u=s;e.te=be(d);for(const b of u){const a=i[b],f=he(a),m=l[b]&&l[b].length>0,p=R(c,b);if(f.length!==0){if(d[b]=[],p)d[b].push(...f);else if(m){const k=l[b];d[b].push(...k)}else d[b]=e.Z[b];d[b]=st(d[b])}}})(),(()=>{const o=r.o;o.L=r.t.mode===_e&&o.D?Pe(o.G,o.R):Pe(o.R,o.p.categories);let e=o.L.length>0,l=!1;for(const s of o.O)o.ee[s]=Pe(o.Y[s],o.te[s]),o.ee[s].length>0&&(l=!0);const c=r.ne.ae;for(const s in c)c[s].checked=R(o.R,s);for(const s of o.O){const u=r.ne.se[s],b=o.Y[s];for(const a in u)u[a].checked=R(b,a)}o.C||(o.C=new Date),o.M||(o.M=("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,s=>(s^crypto.getRandomValues(new Uint8Array(1))[0]&15>>s/4).toString(16))),o.p={categories:be(o.R),revision:r.t.revision,data:o.h,consentTimestamp:o.C.toISOString(),consentId:o.M,services:be(o.Y)};let d=!1;const i=e||l;(o.D||i)&&(o.D&&(o.D=!1,d=!0),o.S=o.S?new Date:o.C,o.p.lastConsentTimestamp=o.S.toISOString(),It(),r.t.autoClearCookies&&(d||i)&&(s=>{const u=r.o,b=Yt(),a=(f=>{const m=r.o;return(f?m.O:m.L).filter(p=>{const k=m.P[p];return!!k&&!k.readOnly&&!!k.autoClear})})(s);for(const f in u.ee)for(const m of u.ee[f]){const p=u.X[f][m].cookies;if(!R(u.Y[f],m)&&p)for(const k of p){const _=et(b,k.name);tt(_,k.path,k.domain)}}for(const f of a){const m=u.P[f].autoClear,p=m&&m.cookies||[],k=R(u.L,f),_=!R(u.R,f),O=k&&_;if(s?_:O){m.reloadPage&&O&&(u.j=!0);for(const T of p){const x=et(b,T.name);tt(x,T.path,T.domain)}}}})(d),Be()),d&&(me(r.re.ie),me(r.re.le),r.t.mode===it)||(i&&me(r.re.de),o.j&&(o.j=!1,location.reload()))})()},Ft=t=>{const n=r.o.D?[]:r.o.R;return R(n,t)},Wt=(t,n)=>{const o=r.o.D?[]:r.o.Y[n]||[];return R(o,t)},_t=t=>{const{ne:n,o}=r;if(!o.k){if(!o.T){if(!t)return;yt($e,Ce)}o.k=!0,o.U=ze(),o.v&&ft(!0),dt(n.he,1),G(n.ye,at),C(n.he,de,"false"),setTimeout(()=>{pe(r.ne.be)},100),me(r.re.fe,Ye)}},$t=()=>{const{ne:t,o:n,re:o}=r;n.k&&(n.k=!1,n.v&&ft(),pe(t.Ke,!0),ge(t.ye,at),C(t.he,de,"true"),pe(n.U),n.U=null,me(o._e,Ye))},Zt=()=>{const t=r.o;t.A||(t.N||Oe($e,Ce),t.A=!0,t.k?t.$=ze():t.U=ze(),dt(r.ne.we,2),G(r.ne.ye,rt),C(r.ne.we,de,"false"),setTimeout(()=>{pe(r.ne.ve)},100),me(r.re.fe,Ge))},Ut=()=>{const t=r.o;t.A&&(t.A=!1,(()=>{const n=St(),o=r.o.P,e=r.ne.ae,l=r.ne.se,c=d=>R(r.o.G,d);for(const d in e){const i=!!o[d].readOnly;e[d].checked=i||(n?Ft(d):c(d));for(const s in l[d])l[d][s].checked=i||(n?Wt(s,d):c(d))}})(),pe(r.ne.Ge,!0),ge(r.ne.ye,rt),C(r.ne.we,de,"true"),t.k?(pe(t.$),t.$=null):(pe(t.U),t.U=null),me(r.re._e,Ge))};var $e={show:_t,hide:$t,showPreferences:Zt,hidePreferences:Ut,acceptCategory:Gt};const St=()=>!r.o.D,Xt=async t=>{const{o:n,t:o,re:e}=r,l=window;if(!l._ccRun){if(l._ccRun=!0,(i=>{const{ne:s,t:u,o:b}=r,a=u,f=b,{cookie:m}=a,p=r.ce,k=i.cookie,_=i.categories,O=he(_)||[],T=navigator,x=document;s.$e=x,s.ye=x.documentElement,m.domain=location.hostname,f.i=i,f.P=_,f.O=O,f._=i.language.translations,f.v=!!i.disablePageInteraction,p.ie=i.onFirstConsent,p.le=i.onConsent,p.de=i.onChange,p._e=i.onModalHide,p.fe=i.onModalShow,p.ue=i.onModalReady;const{mode:S,autoShow:E,lazyHtmlGeneration:P,autoClearCookies:D,revision:j,manageScriptTags:V,hideFromBots:Q}=i;S===_e&&(a.mode=S),typeof D=="boolean"&&(a.autoClearCookies=D),typeof V=="boolean"&&(a.manageScriptTags=V),typeof j=="number"&&j>=0&&(a.revision=j,f.V=!0),typeof E=="boolean"&&(a.autoShow=E),typeof P=="boolean"&&(a.lazyHtmlGeneration=P),Q===!1&&(a.hideFromBots=!1),a.hideFromBots===!0&&T&&(f.J=T.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(T.userAgent)||T.webdriver),Ie(k)&&(a.cookie={...m,...k}),a.autoClearCookies,f.V,a.manageScriptTags,(y=>{const{P:g,X:M,Y:w,Z:N,B:Z}=r.o;for(let F of y){const X=g[F],U=X.services||{},re=Ie(U)&&he(U)||[];M[F]={},w[F]=[],N[F]=[],X.readOnly&&(Z.push(F),w[F]=re),r.ne.se[F]={};for(let se of re){const J=U[se];J.Se=!1,M[F][se]=J}}})(O),(()=>{if(!r.t.manageScriptTags)return;const y=r.o,g=Fe(document,"script["+je+"]");for(const M of g){let w=Le(M,je),N=M.dataset.service||"",Z=!1;if(w&&w.charAt(0)==="!"&&(w=w.slice(1),Z=!0),N.charAt(0)==="!"&&(N=N.slice(1),Z=!0),R(y.O,w)&&(y.oe.push({Me:M,xe:!1,ke:Z,De:w,Te:N}),N)){const F=y.X[w];F[N]||(F[N]={Se:!1})}}})(),xt((()=>{const y=r.o.i.language.autoDetect;if(y){const g={browser:navigator.language,document:document.documentElement.lang},M=wt(g[y]);if(M)return M}return kt()})())})(t),n.J)return;(()=>{const i=r.o,s=r.t,u=Bt(),{categories:b,services:a,consentId:f,consentTimestamp:m,lastConsentTimestamp:p,data:k,revision:_}=u,O=De(b);i.p=u,i.M=f;const T=!!f&&we(f);i.C=m,i.C&&(i.C=new Date(m)),i.S=p,i.S&&(i.S=new Date(p)),i.h=k!==void 0?k:null,i.V&&T&&_!==s.revision&&(i.I=!1),i.D=!(T&&i.I&&i.C&&i.S&&O),s.cookie.useLocalStorage&&!i.D&&(i.D=new Date().getTime()>(u.expirationTime||0),i.D&&qt(s.cookie.name)),i.D,(()=>{const x=r.o;for(const S of x.O){const E=x.P[S];if(E.readOnly||E.enabled){x.G.push(S);const P=x.X[S]||{};for(let D in P)x.Z[S].push(D),x.i.mode===_e&&x.Y[S].push(D)}}})(),i.D?s.mode===_e&&(i.R=[...i.G]):(i.Z={...i.Y},i.Y={...i.Y,...a},lt([...i.B,...b]))})();const d=St();if(!await Et())return!1;if(ut(null,c=$e,Oe,Ce),r.o.D&&yt(c,Ce),r.t.lazyHtmlGeneration||Oe(c,Ce),o.autoShow&&!d&&_t(!0),d)return Be(),me(e.le);o.mode===_e&&Be(n.G)}var c},Jt={guiOptions:{consentModal:{layout:"box inline",position:"bottom right"},preferencesModal:{layout:"box",position:"right",equalWeightButtons:!0,flipButtons:!1}},categories:{necessary:{readOnly:!0},functionality:{},analytics:{services:{ga4:{label:'<a href="https://marketingplatform.google.com/about/analytics/terms/it/" target="_blank">Google Analytics 4</a>',onAccept:()=>{console.log("ga4 accepted")},onReject:()=>{console.log("ga4 rejected")},cookies:[{name:/^_ga/}]}}}},language:{default:"it",translations:{it:{consentModal:{title:"Lo vuoi un biscotto? - Cookie Consent",description:"Navigando sul nostro sito, accetti l'uso dei cookie per offrirti contenuti personalizzati e analizzare il traffico per soli fine statistico, vi promettiamo che non vi manderemo immagini di gattini",acceptAllBtn:"Accetta tutti",acceptNecessaryBtn:"Rifiuta",showPreferencesBtn:"Gestisci preferenze",footer:`<a href="/privacy_policy">Privacy Policy</a>
<a href="/cookie_policy">Cookie Policy</a>`},preferencesModal:{title:"Gestisci le preferenze dei cookie",acceptAllBtn:"Accetta tutto",acceptNecessaryBtn:"Rifiuta",savePreferencesBtn:"Salva le preferenze",closeIconLabel:"Chiudi modal",serviceCounterLabel:"Servizio|Servizi",sections:[{title:"Cookie utilizzati",description:"Da questa schermata puoi rimuovere o accettare i cookie che utilizziamo per offrirti la migliore esperienza di navigazione"},{title:'Cookie Tecnici <span class="pm__badge">Sempre attivo</span>',description:"Sono dei piccoli frammenti di codice che vengono salvati sul tuo dispositivo, hanno la possibilità di aiutarci a migliorare la tua esperienza di navigazione. Es. se chiudi questo popup, questo frammento di codice ci permette di sapere se hai accettato o meno i cookie e quindi il messaggio non comparirà di nuovo",linkedCategory:"necessary"},{title:"Analytics Cookies",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",linkedCategory:"analytics"},{title:"Altre informazioni",description:'Per qualsiasi domanda in relazione alla mia politica sui cookie per favore <a class="cc__link" href="mailto:info@maiellaescursioni.it">Contattami</a>.'}]}}}}};document.body.classList.add("cc--light-funky");Xt(Jt);
