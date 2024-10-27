import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BdZwX4Fn.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_CeTHWlDD.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ekin04/Siti/boscoDiSantAntonio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"cookie_policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cookie_policy","isIndex":false,"type":"page","pattern":"^\\/cookie_policy\\/?$","segments":[[{"content":"cookie_policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cookie_policy.astro","pathname":"/cookie_policy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"privacy_policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy_policy","isIndex":false,"type":"page","pattern":"^\\/privacy_policy\\/?$","segments":[[{"content":"privacy_policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy_policy.astro","pathname":"/privacy_policy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");if(r)e.newDocument.body.append(r)})})(document);"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://boscodisantantonio.it","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ekin04/Siti/boscoDiSantAntonio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/ekin04/Siti/boscoDiSantAntonio/src/pages/cookie_policy.astro",{"propagation":"none","containsHead":true}],["/home/ekin04/Siti/boscoDiSantAntonio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/ekin04/Siti/boscoDiSantAntonio/src/pages/privacy_policy.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/cookie_policy@_@astro":"pages/cookie_policy.astro.mjs","\u0000@astro-page:src/pages/privacy_policy@_@astro":"pages/privacy_policy.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/ekin04/Siti/boscoDiSantAntonio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/home/ekin04/Siti/boscoDiSantAntonio/src/assets/img/hero/autunno/Autunno1.jpg":"chunks/Autunno1_ByhEL6aU.mjs","/home/ekin04/Siti/boscoDiSantAntonio/src/assets/img/hero/autunno/Autunno2.jpg":"chunks/Autunno2_BEHMSdVk.mjs","/home/ekin04/Siti/boscoDiSantAntonio/src/assets/img/hero/autunno/Autunno3.jpg":"chunks/Autunno3_yXI1Pxsb.mjs","/home/ekin04/Siti/boscoDiSantAntonio/src/assets/img/hero/primavera/primavera1.jpg":"chunks/primavera1_exRg0pGA.mjs","/home/ekin04/Siti/boscoDiSantAntonio/src/assets/img/hero/primavera/primavera2.jpg":"chunks/primavera2_DPhL_q8O.mjs","/home/ekin04/Siti/boscoDiSantAntonio/src/assets/img/hero/inverno/Inverno1.jpg":"chunks/Inverno1_DciE4_uD.mjs","/home/ekin04/Siti/boscoDiSantAntonio/src/assets/img/hero/inverno/Inverno2.jpg":"chunks/Inverno2_BdAtvzpC.mjs","/home/ekin04/Siti/boscoDiSantAntonio/src/assets/img/hero/inverno/Inverno3.jpg":"chunks/Inverno3_DTqcFBYO.mjs","\u0000@astrojs-manifest":"manifest_BpxGQNYI.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.zmxDW4xC.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Logo-maiella-escursioni.BmcPZe9l.webp","/_astro/funghi.DXDsrQi-.jpg","/_astro/monumentale.C6XR1rWc.webp","/_astro/confused-john-travolta.fr5fyt-z.gif","/_astro/lupo.KyhnvffF.webp","/_astro/orso.BkQcsVs7.jpg","/_astro/Tavola-Rotonda.C7tAjm_P.webp","/_astro/camoscio.CKNwQVw3.webp","/_astro/fonte-tari.CK5RYHJT.webp","/_astro/monte-amaro.BTSVC4_Y.jpg","/_astro/orso-bruno.CqshyqJk.webp","/_astro/Autunno1.fVcXYESE.jpg","/_astro/Autunno3.vwVwObZH.jpg","/_astro/Inverno2.Duu19uoq.jpg","/_astro/Inverno3.CRhKz8ay.jpg","/_astro/quadrato_scritta.DxRDUSzy.svg","/_astro/Autunno2.VmfX-Fmz.jpg","/_astro/primavera3.LGsKzF8H.jpg","/_astro/Inverno1.IOhn3fpE.jpg","/_astro/primavera1.DXB6Mv99.jpg","/_astro/primavera2.CwE7m2sx.jpg","/_astro/cookie_policy.jZ0eNWmN.css","/_astro/hoisted.zmxDW4xC.js","/favicon/apple-touch-icon.png","/favicon/favicon-48x48.png","/favicon/favicon.ico","/favicon/favicon.svg","/favicon/site.webmanifest","/favicon/web-app-manifest-192x192.png","/favicon/web-app-manifest-512x512.png","/img/og_banner.png","/404.html","/cookie_policy/index.html","/privacy_policy/index.html","/robots.txt","/index.html","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"hoONCKf6jAHDtgJpOLqWUCnbLev6s46H5Cf09Izorn8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
