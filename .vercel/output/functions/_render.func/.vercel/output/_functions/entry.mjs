import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_fjWBz8Jl.mjs';
import { manifest } from './manifest_BpxGQNYI.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/cookie_policy.astro.mjs');
const _page3 = () => import('./pages/privacy_policy.astro.mjs');
const _page4 = () => import('./pages/robots.txt.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/cookie_policy.astro", _page2],
    ["src/pages/privacy_policy.astro", _page3],
    ["src/pages/robots.txt.ts", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b8712d97-b60a-4115-9ad7-d72ec394338b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
