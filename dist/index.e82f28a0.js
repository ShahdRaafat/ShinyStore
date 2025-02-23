// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aDUUU":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"dV6cC":[function(require,module,exports,__globalThis) {
var _recommendProductsJs = require("./recommendProducts.js");
var _sliderJs = require("./slider.js");
const recommendationsForm = document.querySelector(".recommendations-form");
const cityInput = document.querySelector(".city");
const weatherResults = document.querySelector(".results");
const menu = document.querySelector(".menu");
const items = document.querySelector(".items");
const links = document.querySelector(".links");
const join = document.querySelector(".join");
const loginBtn = document.querySelector(".login--btn");
const loginModal = document.querySelector(".login-modal");
const loginOverlay = document.querySelector(".login-overlay");
const closeIcon = document.querySelector(".close-icon");
const products = document.querySelector(".products");
const hearts = document.querySelectorAll(".products .fa-heart");
const viewProductOverlay = document.querySelector(".view-overlay");
const shoppingCart = document.querySelector(".cart");
const shopping = document.querySelector(".shopping");
const shoppingList = document.querySelector(".shopping-list");
const shoppingOverlay = document.querySelector(".shopping-overlay");
const closeCartBtn = document.querySelector(".close-cart");
const favoritesList = document.querySelector(".favorites-list");
const sections = document.querySelectorAll(".section");
const nav = document.querySelector(".nav-header");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll("nav .link");
const startBtn = document.querySelector(".start--btn");
//Revealing Sections
const revealSection = function(entries, observer) {
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1
});
sections.forEach((s)=>{
    s.classList.add("section-hidden");
    sectionObserver.observe(s);
});
//Sticky nav
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};
const navObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});
navObserver.observe(header);
// Activate Nav Link
const activateLink = function(sec) {
    if (!sec.id) return;
    const navLink = document.querySelector(`.${sec.id}-link`);
    navLinks.forEach((l)=>l.classList.remove("active-link"));
    navLink.classList.add("active-link");
};
const activateFunction = function(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    activateLink(entry.target);
};
const activateObserver = new IntersectionObserver(activateFunction, {
    root: null,
    threshold: 0.2
});
sections.forEach((s)=>{
    activateObserver.observe(s);
});
// Smooth Scrolling
const scrollTo = function(id) {
    document.querySelector(id).scrollIntoView({
        behavior: "smooth"
    });
};
//nav smooth scrolling
links.addEventListener("click", function(e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    scrollTo(id);
});
//button smooth scrolling
startBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    scrollTo(id);
});
//nav menu
function toggleMenu() {
    items.classList.toggle("show");
    links.classList.toggle("show");
    join.classList.toggle("show");
}
menu.addEventListener("click", toggleMenu);
//Show Login Form
const showModal = function() {
    loginModal.classList.remove("hidden");
    loginOverlay.classList.remove("hidden");
};
const hideModal = function() {
    loginModal.classList.add("hidden");
    loginOverlay.classList.add("hidden");
};
loginBtn.addEventListener("click", showModal);
closeIcon.addEventListener("click", hideModal);
//lazy loading
const imgTargets = document.querySelectorAll("img[data-src]");
const lazyloading = function(entries, observer) {
    entries.forEach((entry)=>{
        if (!entry.isIntersecting) return;
        const img = entry.target;
        if (img) {
            img.src = img.dataset.src; // Set the actual src
            img.addEventListener("load", function() {
                img.classList.remove("lazy-img");
            });
        }
        observer.unobserve(img);
    });
};
const imgObserver = new IntersectionObserver(lazyloading, {
    root: null,
    threshold: 0,
    rootMargin: "100px"
});
imgTargets.forEach((img)=>imgObserver.observe(img));
//view product info
const generateViewProduct = function(btn) {
    const product = btn.dataset.src;
    const name = document.querySelector(`.product-${product} .text .name`).textContent;
    const description = document.querySelector(`.product-${product} .text .description`).textContent;
    const price = document.querySelector(`.product-${product} .text .price`).textContent;
    const remainingPieces = Math.floor(Math.random() * 10) + 1;
    const markup = `
  <div class="vieww">
  <i class="fa-solid fa-xmark close-view"></i>
  <div class="view-product">
            <div class="view-image">
              <img src="/images/product${product}.webp" alt="product-1" />
            </div>
            <div class="view-info">
              
              <div class="text">
              <h3 class="name">${name}</h3>
                <h4 class="description">
                  ${description}
                </h4>
                <p class="price">${price}</p>
                <p class="tax">Tax Included</p>
                <p class="remaining">${remainingPieces} pieces left , buy yours now!</p>
                <div class="buttons">
                  <div class="input-quantity">
                    <i class="fa-solid fa-minus"></i>
                    <input
                      type="number"
                      name="quantity"
                      class="quantity"
                      placeholder="1"
                      data-current="1"
                      data-max="${remainingPieces}"
                    />
                    <i class="fa-solid fa-plus"></i>
                  </div>

                  <i class="fa-regular fa-heart" data-src="${product}" ></i>
                  <button class="add-to-cart btn" data-src="${product}">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          </div>`;
    viewProductOverlay.innerHTML = markup;
    const heartIcon = viewProductOverlay.querySelector(".fa-heart");
};
//Show view product modal
const showProduct = function() {
    viewProductOverlay.classList.remove("hidden");
};
//hide view product modal
const hideProduct = function() {
    viewProductOverlay.classList.add("hidden");
};
document.addEventListener("click", function(e) {
    const view = e.target.closest(".fa-eye");
    if (!view) return;
    generateViewProduct(view);
    showProduct();
});
//event listeners for the view product modal
viewProductOverlay.addEventListener("click", function(e) {
    //closing the modal
    if (e.target.classList.contains("close-view")) {
        hideProduct();
        return;
    }
    //increasing and decreasing quantity
    if (e.target.classList.contains("fa-minus") || e.target.classList.contains("fa-plus")) {
        const quantityField = viewProductOverlay.querySelector(".quantity");
        const maxQuantity = +quantityField.dataset.max;
        let currentQuantity = +quantityField.dataset.current;
        currentQuantity = e.target.classList.contains("fa-minus") ? Math.max(currentQuantity - 1, 1) : Math.min(currentQuantity + 1, maxQuantity);
        quantityField.dataset.current = currentQuantity;
        quantityField.value = currentQuantity;
    }
});
//open shopping cart
const openCart = function() {
    // shoppingOverlay.classList.remove("not-visible");
    shoppingOverlay.style.visibility = "visible";
    shopping.style.transform = "translateX(0%)";
};
//close shopping cart
const closeCart = function() {
    shopping.style.transform = "translateX(40%)";
    shoppingOverlay.style.visibility = "hidden";
// shoppingOverlay.classList.add("not-visible");
};
let cart = [];
let favorites = [];
//extract product data based on which button i have clicked
const getProductData = function(button) {
    const productElement = button.closest(".product");
    const ModalElement = button.closest(".view-product");
    const num = button.dataset.src;
    const imgUrl = `public/images/product${num}.webp`;
    const name = productElement?.querySelector(".name").textContent || ModalElement?.querySelector(".name").textContent;
    const price = productElement?.querySelector(".price").textContent || ModalElement?.querySelector(".price").textContent;
    const quantity = ModalElement?.querySelector(".quantity").value || 1;
    return {
        imgUrl,
        name,
        price,
        quantity: +quantity
    };
};
const generateProductMarkup = function(product) {
    return `
    <li class="cart-item">
      <div class="cart-img">
      <img src="${product.imgUrl}" alt="cart item image"/>
      </div>
      <div class="info">
        <p class="name">${product.name}</p>
        <p class="price">${product.price}</p>
        <p class="quantity">${product.quantity}</p>
        <i class="fa-solid fa-trash delete"></i>
      </div>
      
      
    </li>
  `;
};
// Add to shopping cart
const addToCart = function(product) {
    const existingProduct = cart.find((p)=>p.name === product.name);
    if (existingProduct) existingProduct.quantity += product.quantity;
    else cart.push(product);
    updateCartUi();
    showToast();
};
const updateCartUi = function() {
    shoppingList.innerHTML = "";
    cart.forEach((product)=>{
        const markup = generateProductMarkup(product);
        shoppingList.insertAdjacentHTML("afterbegin", markup);
    });
    //Calculating total number of items in the cart
    const cartCount = cart.reduce((total, product)=>total + product.quantity, 0);
    document.querySelector(".cart-count").textContent = cartCount;
    calculateTotal();
};
//Function Showing added Successfully Message
const showToast = ()=>{
    const toast = document.querySelector(".toast");
    toast.classList.add("show");
    // Hide toast after 3.5 seconds
    setTimeout(()=>{
        toast.classList.remove("show");
    }, 3500);
};
const extractNumber = (price)=>parseFloat(price.replace(/[^\d.]/g, ""));
const calculateTotal = function() {
    console.log(cart);
    const delivery = 50;
    const totalPrice = cart.reduce((total, item)=>total + extractNumber(item.price) * Number(item.quantity), 0) + delivery;
    document.querySelector(".cart-total").innerHTML = `
    <p>Subtotal: ${totalPrice - delivery} LE</p>
    <p>Delivery: ${delivery} LE</p>
    <p><strong>Total: ${totalPrice} LE</strong></p>
  `;
};
//Event Listeners for shopping cart
shoppingCart.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart")) {
        const product = getProductData(e.target);
        addToCart(product);
        if (e.target.closest(".view-product")) hideProduct();
    }
});
shoppingList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        const item = e.target.closest(".cart-item");
        const index = cart.findIndex((i)=>i.name === item.querySelector(".name").textContent);
        cart.splice(index, 1);
        updateCartUi();
    }
});
//Add to favorites
//Product like button transition
const fillHeart = function(heart) {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");
};
const emptyHeart = function(heart) {
    heart.classList.remove("fa-solid");
    heart.classList.add("fa-regular");
};
// const manipulateHeart = function (heart) {
//   let isClicked = false;
//   heart.addEventListener("mouseover", function () {
//     if (!isClicked) fillHeart(heart);
//   });
//   heart.addEventListener("mouseout", function () {
//     if (!isClicked) emptyHeart(heart);
//   });
//   heart.addEventListener("click", function () {
//     isClicked = !isClicked;
//     if (isClicked) {
//       fillHeart(heart);
//     } else {
//       emptyHeart(heart);
//     }
//   });
// };
// hearts.forEach((heart) => manipulateHeart(heart));
// Function to add/remove favorites
const toggleFavorite = (heart)=>{
    const product = getProductData(heart);
    const index = favorites.findIndex((p)=>p.name === product.name);
    if (index === -1) {
        // Product not in favorites -> Add it
        favorites.push(product);
        fillHeart(heart);
    } else {
        // Product exists in favorites -> Remove it
        favorites.splice(index, 1);
        emptyHeart(heart);
    }
    updateFavoritesUi();
};
const updateFavoritesUi = function() {
    favoritesList.innerHTML = "";
    favorites.forEach((product)=>{
        const markup = generateProductMarkup(product);
        favoritesList.insertAdjacentHTML("afterbegin", markup);
    });
};
//Event Listeners for favorites list
document.addEventListener("click", (e)=>{
    if (e.target.classList.contains("fa-heart")) toggleFavorite(e.target);
});
document.addEventListener("click", (e)=>{
    if (e.target.classList.contains("delete")) {
        const item = e.target.closest(".cart-item");
        // Remove from favorites if exists
        const favIndex = favorites.findIndex((p)=>p.name === item.querySelector(".name").textContent);
        if (favIndex !== -1) {
            favorites.splice(favIndex, 1);
            updateFavoritesUi();
            // Update heart icon to be regular (unfilled)
            document.querySelectorAll(".fa-heart").forEach((heart)=>{
                const heartProduct = heart.closest(".product");
                if (heartProduct && heartProduct.querySelector(".name").textContent === item.querySelector(".name").textContent) emptyHeart(heart);
            });
        }
    }
});
//Recommend products base on weather
recommendationsForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) try {
        const weatherData = await (0, _recommendProductsJs.getWeatherData)(city);
        (0, _recommendProductsJs.updateUI)(weatherData);
        weatherResults.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } catch (err) {
        console.error("Error fetching Weather data", err);
        alert("'Error fetching weather data. Please try again.'");
    }
});
//productSlider
const btnLeftProduct = document.querySelector(".fa-angle-left");
const btnRightProduct = document.querySelector(".fa-angle-right");
(0, _sliderJs.startAutoplay)();
btnLeftProduct.addEventListener("click", (0, _sliderJs.movePrev));
btnRightProduct.addEventListener("click", (0, _sliderJs.moveNext));
//Testimonials Slider
//Slider Elements
const btnLeft = document.querySelector(".fa-arrow-left");
const btnRight = document.querySelector(".fa-arrow-right");
const dotsContainer = document.querySelector(".dots");
//Initializing
(0, _sliderJs.init)();
//Slider Event Listeners
btnRight.addEventListener("click", (0, _sliderJs.nextSlide));
btnLeft.addEventListener("click", (0, _sliderJs.prevSlide));
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") (0, _sliderJs.nextSlide)();
    else if (e.key === "ArrowLeft") (0, _sliderJs.prevSlide)();
});
//Event Delegation <3
dotsContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        (0, _sliderJs.updateCurSlide)(+slide);
        (0, _sliderJs.goToSlide)(slide);
        (0, _sliderJs.activateDots)(slide);
    }
});

},{"./recommendProducts.js":"bgMBD","./slider.js":"aMYz0"}],"bgMBD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWeatherData", ()=>getWeatherData);
parcelHelpers.export(exports, "getWeatherCategory", ()=>getWeatherCategory);
parcelHelpers.export(exports, "updateUI", ()=>updateUI);
var _sunscreenWebp = require("../images/sunscreen.webp");
var _sunscreenWebpDefault = parcelHelpers.interopDefault(_sunscreenWebp);
var _aloeveraWebp = require("../images/aloevera.webp");
var _aloeveraWebpDefault = parcelHelpers.interopDefault(_aloeveraWebp);
var _waterproofWebp = require("../images/waterproof.webp");
var _waterproofWebpDefault = parcelHelpers.interopDefault(_waterproofWebp);
var _serumWebp = require("../images/serum.webp");
var _serumWebpDefault = parcelHelpers.interopDefault(_serumWebp);
var _bodyButterWebp = require("../images/bodyButter.webp");
var _bodyButterWebpDefault = parcelHelpers.interopDefault(_bodyButterWebp);
var _lipBalmWebp = require("../images/lipBalm.webp");
var _lipBalmWebpDefault = parcelHelpers.interopDefault(_lipBalmWebp);
const API_KEY = "9ca1eec279b0d19e2fd63afff224821e";
const recommendedProducts = document.querySelector(".recommended-products");
const weatherResults = document.querySelector(".results");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temp");
const humidityField = document.querySelector(".humidity");
const tip = document.querySelector(".tip");
//Weather Product recommendation
const weatherProducts = {
    sunny: [
        {
            name: "Sunscreen SPF 50",
            description: "Lightweight, broad-spectrum protection perfect for sunny days.",
            price: "500 LE",
            image: (0, _sunscreenWebpDefault.default)
        },
        {
            name: "Aloevera Gel",
            description: "Natural made aloevera gel to protect from sun damage.",
            price: "200 LE",
            image: (0, _aloeveraWebpDefault.default)
        }
    ],
    rainy: [
        {
            name: "Waterproof Moisturizer",
            description: "Long-lasting hydration that stays put in humid conditions.",
            price: "300 LE",
            image: (0, _waterproofWebpDefault.default)
        },
        {
            name: "Anti-Frizz Serum",
            description: "Keep your hair smooth and protected in humid weather.",
            price: "350 LE",
            image: (0, _serumWebpDefault.default)
        }
    ],
    cold: [
        {
            name: "Body Butter",
            description: "Deep moisturizing butter for cold weather protection.",
            price: "400 LE",
            image: (0, _bodyButterWebpDefault.default)
        },
        {
            name: "Lip Balm",
            description: "Protect your Lips from harsh winter conditions.",
            price: "120 LE",
            image: (0, _lipBalmWebpDefault.default)
        }
    ]
};
// Weather tips based on conditions
const weatherTips = {
    sunny: "\u2600\uFE0F Sunny day tip: Don't forget your sunscreen and stay hydrated!",
    rainy: "\uD83C\uDF27\uFE0F Rainy day tip: Use waterproof skincare products to maintain protection!",
    cold: "\u2744\uFE0F Cold day tip: Focus on moisture barrier protection and hydration!"
};
const getWeatherData = async function(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error("Weather data not found");
    const data = await response.json();
    console.log(data);
    return data;
};
const getWeatherCategory = function(temp, weatherMain) {
    if (temp > 30) return "sunny";
    if (weatherMain.toLowerCase().includes("rain")) return "rainy";
    if (temp < 20) return "cold";
    return "sunny";
};
const generateProductMarkup = function(weatherCategory) {
    const products = weatherProducts[weatherCategory];
    console.log(products);
    recommendedProducts.innerHTML = "";
    products.forEach((product)=>{
        const markup = `
        <div class="product">
                  <img
                    src=${product.image}
                    class="product-image"
                    alt="Image of product recommendation"
                  />

                  <div class="text">
                    <div class="product-description">
                      <p class="name">${product.name}</p>
                      <p class="description">
                        ${product.description}
                      </p>
                      <div class="last-row">
                        <p class="price">${product.price}</p>
                        <button class="add-to-cart btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
    `;
        recommendedProducts.innerHTML += markup;
    });
};
const updateUI = function(data) {
    weatherResults.classList.remove("hidden");
    //extracting info from weather data
    const temp = Math.round(data.main.temp);
    console.log(temp);
    console.log("shahd");
    const humidity = data.main.humidity;
    let weatherCategory = getWeatherCategory(temp, data.weather[0].main);
    let icon = "fa-sun";
    if (weatherCategory === "rainy") icon = "fa-cloud-rain";
    else if (weatherCategory === "cold") icon = "fa-cloud";
    //updating fields of weather data
    weatherIcon.classList.remove("fa-sun");
    weatherIcon.classList.remove("fa-cloud");
    weatherIcon.classList.remove("fa-cloud-rain");
    weatherIcon.classList.add(icon);
    temperature.textContent = `${temp}\xb0C`;
    humidityField.textContent = `Humidity: ${humidity}%`;
    tip.textContent = weatherTips[weatherCategory];
    //inserting the recommended products
    generateProductMarkup(weatherCategory);
};

},{"../images/sunscreen.webp":"11TKk","../images/aloevera.webp":"kwsYr","../images/waterproof.webp":"2m1Ma","../images/serum.webp":"gecqa","../images/bodyButter.webp":"iyEYa","../images/lipBalm.webp":"irjvC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11TKk":[function(require,module,exports,__globalThis) {
module.exports = require("277840b0629ace9c").getBundleURL('2MSMO') + "sunscreen.3810c931.webp" + "?" + Date.now();

},{"277840b0629ace9c":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"kwsYr":[function(require,module,exports,__globalThis) {
module.exports = require("b354ef26a5fe7d3").getBundleURL('2MSMO') + "aloevera.953cab16.webp" + "?" + Date.now();

},{"b354ef26a5fe7d3":"lgJ39"}],"2m1Ma":[function(require,module,exports,__globalThis) {
module.exports = require("69ee3eb381c73f6c").getBundleURL('2MSMO') + "waterproof.f37293ec.webp" + "?" + Date.now();

},{"69ee3eb381c73f6c":"lgJ39"}],"gecqa":[function(require,module,exports,__globalThis) {
module.exports = require("8017cf556310cbe").getBundleURL('2MSMO') + "serum.19ec5238.webp" + "?" + Date.now();

},{"8017cf556310cbe":"lgJ39"}],"iyEYa":[function(require,module,exports,__globalThis) {
module.exports = require("105f279c4abdd99d").getBundleURL('2MSMO') + "bodyButter.012aafd1.webp" + "?" + Date.now();

},{"105f279c4abdd99d":"lgJ39"}],"irjvC":[function(require,module,exports,__globalThis) {
module.exports = require("197f63b198021303").getBundleURL('2MSMO') + "lipBalm.f0393f3e.webp" + "?" + Date.now();

},{"197f63b198021303":"lgJ39"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aMYz0":[function(require,module,exports,__globalThis) {
//Products slider
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moveNext", ()=>moveNext);
parcelHelpers.export(exports, "movePrev", ()=>movePrev);
parcelHelpers.export(exports, "startAutoplay", ()=>startAutoplay);
//Testimonial Slider
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "prevSlide", ()=>prevSlide);
parcelHelpers.export(exports, "nextSlide", ()=>nextSlide);
parcelHelpers.export(exports, "activateDots", ()=>activateDots);
parcelHelpers.export(exports, "goToSlide", ()=>goToSlide);
parcelHelpers.export(exports, "updateCurSlide", ()=>updateCurSlide);
const slider = document.querySelector(".makeup .slider");
const productSlides = document.querySelectorAll(".makeup .slide");
const getVisibleSlides = function() {
    if (window.innerWidth > 1200) return 4;
    else if (window.innerWidth > 992 && window.innerWidth <= 1200) return 3;
    else if (window.innerWidth > 768 && window.innerWidth <= 992) return 2;
    else return 1;
};
let firstSlide = 0;
let visibleSlides = getVisibleSlides();
let autoSlideInterval;
console.log(visibleSlides);
let totalSlides = productSlides.length;
const updateSlider = function() {
    visibleSlides = getVisibleSlides();
    let slideWidth = productSlides[0].offsetWidth + 20;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${firstSlide * slideWidth}px)`;
};
updateSlider();
const moveNext = function() {
    if (firstSlide >= totalSlides - visibleSlides) firstSlide = 0;
    else firstSlide++;
    updateSlider();
};
const movePrev = function() {
    if (firstSlide <= 0) firstSlide = totalSlides - visibleSlides;
    else firstSlide--;
    updateSlider();
};
function startAutoplay() {
    autoSlideInterval = setInterval(()=>{
        moveNext();
    }, 3000);
}
// function resetAutoplay() {
//   clearInterval(autoSlideInterval);
//   startAutoplay();
// }
window.addEventListener("resize", updateSlider);
const slides = document.querySelectorAll(".testimonials .slide");
const dotsContainer = document.querySelector(".dots");
let curSlide = 0;
const lastSlide = slides.length - 1;
const goToSlide = function(slide) {
    slides.forEach((s, i)=>{
        s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
};
const prevSlide = function() {
    if (curSlide === 0) curSlide = lastSlide;
    else curSlide--;
    goToSlide(curSlide);
    activateDots(curSlide);
};
const nextSlide = function() {
    console.log(curSlide);
    if (curSlide === lastSlide) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDots(curSlide);
};
const createDots = function() {
    slides.forEach((_, i)=>{
        dotsContainer.insertAdjacentHTML("beforeend", `
            <button class="dots__dot" data-slide=${i}></button>
            `);
    });
};
const activateDots = function(slide) {
    document.querySelectorAll(".dots__dot").forEach((dot)=>dot.classList.remove("dots__dot--active"));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
};
const updateCurSlide = function(slide) {
    curSlide = slide;
    console.log(curSlide);
};
const init = function() {
    goToSlide(curSlide);
    createDots();
    activateDots(curSlide);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aDUUU","dV6cC"], "dV6cC", "parcelRequire94c2")

//# sourceMappingURL=index.e82f28a0.js.map
