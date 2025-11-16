import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, shallowRef, h, resolveComponent, hasInjectionContext, inject, computed, unref, mergeProps, withCtx, renderSlot, toValue, getCurrentInstance, onServerPrefetch, ref, toRef, nextTick, createElementBlock, provide, cloneVNode, defineAsyncComponent, useSSRContext, Suspense, Fragment, createApp, createVNode, shallowReactive, onErrorCaptured, resolveDynamicComponent, reactive, effectScope, isReadonly, isRef, isShallow, isReactive, toRaw, withAsyncContext, getCurrentScope, toDisplayString, createTextVNode, createBlock, openBlock, createSlots, renderList, normalizeProps, guardReactiveProps, watch, createCommentVNode, onMounted, onScopeDispose } from 'vue';
import { j as parseQuery, k as klona, l as defuFn, m as hasProtocol, n as joinURL, w as withQuery, o as withTrailingSlash, q as withoutTrailingSlash, r as isScriptProtocol, s as getContext, t as sanitizeStatusCode, e as createError$1, $ as $fetch$1, v as baseURL, x as createHooks, y as executeAsync, z as toRouteMatcher, A as createRouter$1, B as defu, C as parseURL } from '../nitro/nitro.mjs';
import { defineStore, setActivePinia, createPinia, shouldHydrate } from 'pinia';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { useScript as useScript$2 } from 'unhead/scripts';
import { _api, addAPIProvider, setCustomIconsLoader } from '@iconify/vue';
import { useLocalStorage, reactiveOmit, provideSSRWidth } from '@vueuse/core';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderSuspense, ssrRenderVNode, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { cva } from 'class-variance-authority';
import { Primitive, useForwardProps, NavigationMenuViewport, useForwardPropsEmits, NavigationMenuRoot, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, Separator, CollapsibleRoot, CollapsibleContent, CollapsibleTrigger } from 'reka-ui';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, LogIn, Menu, ChevronRight, Plus, Minus, Facebook, Instagram } from 'lucide-vue-next';
import { DrawerRoot, DrawerOverlay, DrawerPortal, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from 'vaul-vue';
import { debounce } from 'perfect-debounce';
import { u as useSeoMeta$1, a as useHead$1, h as headSymbol$1 } from '../routes/renderer.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "deep": false };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    versions: {
      get nuxt() {
        return "4.2.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
function injectHead$1(nuxtApp) {
  const nuxt = nuxtApp || useNuxtApp();
  return nuxt.ssrContext?.head || nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      const head = inject(headSymbol$1);
      if (!head) {
        throw new Error("[nuxt] [unhead] Missing Unhead instance.");
      }
      return head;
    }
  });
}
function useHead(input, options = {}) {
  const head = options.head || injectHead$1(options.nuxt);
  return useHead$1(input, { head, ...options });
}
function useSeoMeta(input, options = {}) {
  const head = options.head || injectHead$1(options.nuxt);
  return useSeoMeta$1(input, { head, ...options });
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (!instance) {
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    }
    return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const _routes = [
  {
    name: "slug",
    path: "/:slug(.*)*",
    component: () => import('./_...slug_-D1PrHv9y.mjs')
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[to.matched.length - 1]?.components?.default === from.matched[from.matched.length - 1]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        return nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
function registerVueScopeHandlers(script, scope) {
  if (!scope) {
    return;
  }
  const _registerCb = (key, cb) => {
    if (!script._cbs[key]) {
      cb(script.instance);
      return () => {
      };
    }
    let i = script._cbs[key].push(cb);
    const destroy = () => {
      if (i) {
        script._cbs[key]?.splice(i - 1, 1);
        i = null;
      }
    };
    onScopeDispose(destroy);
    return destroy;
  };
  script.onLoaded = (cb) => _registerCb("loaded", cb);
  script.onError = (cb) => _registerCb("error", cb);
  onScopeDispose(() => {
    script._triggerAbortController?.abort();
  });
}
function useScript$1(_input, _options) {
  const input = typeof _input === "string" ? { src: _input } : _input;
  const options = _options || {};
  const head = options?.head || /* @__PURE__ */ injectHead();
  options.head = head;
  const scope = getCurrentInstance();
  options.eventContext = scope;
  if (scope && typeof options.trigger === "undefined") {
    options.trigger = onMounted;
  } else if (isRef(options.trigger)) {
    const refTrigger = options.trigger;
    let off;
    options.trigger = new Promise((resolve) => {
      off = watch(refTrigger, (val) => {
        if (val) {
          resolve(true);
        }
      }, {
        immediate: true
      });
      onScopeDispose(() => resolve(false), true);
    }).then((val) => {
      off?.();
      return val;
    });
  }
  head._scriptStatusWatcher = head._scriptStatusWatcher || head.hooks.hook("script:updated", ({ script: s }) => {
    s._statusRef.value = s.status;
  });
  const script = useScript$2(head, input, options);
  script._statusRef = script._statusRef || ref(script.status);
  registerVueScopeHandlers(script, scope);
  return new Proxy(script, {
    get(_2, key, a) {
      return Reflect.get(_2, key === "status" ? "_statusRef" : key, a);
    }
  });
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const onNuxtReady = (callback) => {
  {
    return;
  }
};
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry2 = nuxtApp._asyncData[key.value];
      if (entry2?._abortController) {
        try {
          entry2._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry2._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) {
          return;
        }
        if (asyncData._abortController?.signal.aborted) {
          return;
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return;
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to });
    const href = computed(() => {
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            return props.replace ? router.replace(href.value) : router.push(href.value);
          }
        }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const inlineConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  }
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  nuxtApp._appConfig ||= klona(__appConfig);
  return nuxtApp._appConfig;
}
function resolveTrigger(trigger) {
  return null;
}
function useNuxtScriptRuntimeConfig() {
  return (/* @__PURE__ */ useRuntimeConfig()).public["nuxt-scripts"];
}
function resolveScriptKey(input) {
  return input.key || input.src || (typeof input.innerHTML === "string" ? input.innerHTML : "");
}
function useScript(input, options) {
  input = typeof input === "string" ? { src: input } : input;
  options = defu(options, useNuxtScriptRuntimeConfig()?.defaultScriptOptions);
  if (options.trigger && typeof options.trigger === "object" && !("then" in options.trigger)) {
    resolveTrigger(options.trigger);
  }
  const id = String(resolveScriptKey(input));
  const nuxtApp = useNuxtApp();
  options.head = options.head || injectHead$1();
  if (!options.head) {
    throw new Error("useScript() has been called without Nuxt context.");
  }
  nuxtApp.$scripts = nuxtApp.$scripts || reactive({});
  !!nuxtApp.$scripts?.[id];
  const err = options._validate?.();
  if (options.trigger === "onNuxtReady" || options.trigger === "client") {
    if (!options.warmupStrategy) {
      options.warmupStrategy = "preload";
    }
    if (options.trigger === "onNuxtReady") {
      options.trigger = onNuxtReady;
    }
  }
  const instance = useScript$1(input, options);
  const _remove = instance.remove;
  instance.remove = () => {
    nuxtApp.$scripts[id] = void 0;
    return _remove();
  };
  const _load = instance.load;
  instance.load = async () => {
    if (err) {
      return Promise.reject(err);
    }
    return _load();
  };
  nuxtApp.$scripts[id] = instance;
  return instance;
}
const noop = Object.freeze(
  Object.assign(
    () => {
    },
    { __mock__: true }
  )
);
const object = noop;
const string = noop;
const boolean = noop;
const optional = noop;
const literal = noop;
const union = noop;
function scriptRuntimeConfig(key) {
  return ((/* @__PURE__ */ useRuntimeConfig()).public.scripts || {})[key];
}
function useRegistryScript(registryKey, optionsFn, _userOptions) {
  const scriptConfig = scriptRuntimeConfig(registryKey);
  const userOptions = Object.assign(_userOptions || {}, typeof scriptConfig === "object" ? scriptConfig : {});
  const options = optionsFn(userOptions, { scriptInput: userOptions.scriptInput });
  let finalScriptInput = options.scriptInput;
  const userSrc = userOptions.scriptInput?.src;
  const optionsSrc = options.scriptInput?.src;
  if (userSrc && optionsSrc && typeof optionsSrc === "string" && typeof userSrc === "string") {
    const defaultUrl = parseURL(optionsSrc);
    const customUrl = parseURL(userSrc);
    const defaultQuery = parseQuery(defaultUrl.search || "");
    const customQuery = parseQuery(customUrl.search || "");
    const mergedQuery = { ...defaultQuery, ...customQuery };
    const baseUrl = customUrl.href?.split("?")[0] || userSrc;
    finalScriptInput = {
      ...options.scriptInput || {},
      src: withQuery(baseUrl, mergedQuery)
    };
  }
  const scriptInput = defu(finalScriptInput, userOptions.scriptInput, { key: registryKey });
  const scriptOptions = Object.assign(userOptions?.scriptOptions || {}, options.scriptOptions || {});
  const init = scriptOptions.beforeInit;
  scriptOptions.beforeInit = () => {
    init?.();
  };
  return useScript(scriptInput, scriptOptions);
}
object({
  /** GTM container ID (format: GTM-XXXXXX) */
  id: string(),
  /** Optional dataLayer variable name */
  l: optional(string()),
  /** Authentication token for environment-specific container versions */
  auth: optional(string()),
  /** Preview environment name */
  preview: optional(string()),
  /** Forces GTM cookies to take precedence when true */
  cookiesWin: optional(union([boolean(), literal("x")])),
  /** Enables debug mode when true */
  debug: optional(union([boolean(), literal("x")])),
  /** No Personal Advertising - disables advertising features when true */
  npa: optional(union([boolean(), literal("1")])),
  /** Custom dataLayer name (alternative to "l" property) */
  dataLayer: optional(string()),
  /** Environment name for environment-specific container */
  envName: optional(string()),
  /** Referrer policy for analytics requests */
  authReferrerPolicy: optional(string())
});
function useScriptGoogleTagManager(options) {
  return useRegistryScript(
    options?.key || "googleTagManager",
    (opts) => {
      const dataLayerName = opts?.l ?? opts?.dataLayer ?? "dataLayer";
      return {
        scriptInput: {
          src: withQuery("https://www.googletagmanager.com/gtm.js", {
            id: opts.id,
            l: opts.l,
            gtm_auth: opts.auth,
            gtm_preview: opts.preview,
            gtm_cookies_win: opts.cookiesWin ? "x" : void 0,
            gtm_debug: opts.debug ? "x" : void 0,
            gtm_npa: opts.npa ? "1" : void 0,
            gtm_data_layer: opts.dataLayer,
            gtm_env: opts.envName,
            gtm_auth_referrer_policy: opts.authReferrerPolicy
          })
        },
        schema: void 0,
        scriptOptions: {
          use: () => {
            return {
              dataLayer: (void 0)[dataLayerName],
              google_tag_manager: (void 0).google_tag_manager
            };
          }
        },
        clientInit: void 0
      };
    },
    options
  );
}
object({
  id: optional(string()),
  // The GA4 measurement ID (format: G-XXXXXXXX)
  l: optional(string())
  // Optional global name for dataLayer (defaults to 'dataLayer')
});
function useScriptGoogleAnalytics(_options) {
  return useRegistryScript(_options?.key || "googleAnalytics", (options) => {
    const dataLayerName = options?.l ?? "dataLayer";
    const w = {};
    return {
      scriptInput: {
        src: withQuery("https://www.googletagmanager.com/gtag/js", { id: options?.id, l: options?.l })
      },
      schema: void 0,
      scriptOptions: {
        use: () => {
          return {
            dataLayer: w[dataLayerName],
            gtag: w.gtag
          };
        }
      },
      clientInit: void 0
    };
  }, _options);
}
const plugin_UGq4Ty9llav6T81PDabKpQVSL3u5o61aRk8pAUr1ST4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "scripts:init",
  env: { islands: false },
  parallel: true,
  setup() {
    const googleAnalytics = useScriptGoogleAnalytics({ "id": "G-0DZR46SWDK" });
    const googleTagManager = useScriptGoogleTagManager({ "id": "GTM-TSRND95" });
    return { provide: { $scripts: { googleAnalytics, googleTagManager } } };
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    if (nuxtApp.payload && nuxtApp.payload.pinia) {
      pinia.state.value = nuxtApp.payload.pinia;
    }
    return {
      provide: {
        pinia
      }
    };
  },
  hooks: {
    "app:rendered"() {
      const nuxtApp = useNuxtApp();
      nuxtApp.payload.pinia = toRaw(nuxtApp.$pinia).state.value;
      setActivePinia(void 0);
    }
  }
});
const LazyButtonItem = defineAsyncComponent(() => import('./button-item-Bok5DjA7.mjs').then((r) => r["default"] || r.default || r));
const LazyPageDefault = defineAsyncComponent(() => import('./page-default-_rbvXIxN.mjs').then((r) => r["default"] || r.default || r));
const LazyPageHero = defineAsyncComponent(() => import('./page-hero-C08jWwBS.mjs').then((r) => r["default"] || r.default || r));
const LazyIcon = defineAsyncComponent(() => import('./index-aSgfcAq2.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["ButtonItem", LazyButtonItem],
  ["PageDefault", LazyPageDefault],
  ["PageHero", LazyPageHero],
  ["Icon", LazyIcon]
];
const components_plugin_4kY4pyzJIYX99vmMAAIorFf3CnAaptHitJgf7JxiED8 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const plugin_MeUvTuoKUi51yb_kBguab6hdcExVXeTtZtTg9TZZBB8 = /* @__PURE__ */ defineNuxtPlugin({
  name: "@nuxt/icon",
  setup() {
    const configs = /* @__PURE__ */ useRuntimeConfig();
    const options = useAppConfig().icon;
    _api.setFetch($fetch.native);
    const resources = [];
    if (options.provider === "server") {
      const baseURL2 = configs.app?.baseURL?.replace(/\/$/, "") ?? "";
      resources.push(baseURL2 + (options.localApiEndpoint || "/api/_nuxt_icon"));
      if (options.fallbackToApi === true || options.fallbackToApi === "client-only") {
        resources.push(options.iconifyApiEndpoint);
      }
    } else if (options.provider === "none") {
      _api.setFetch(() => Promise.resolve(new Response()));
    } else {
      resources.push(options.iconifyApiEndpoint);
    }
    async function customIconLoader(icons, prefix) {
      try {
        const data = await $fetch(resources[0] + "/" + prefix + ".json", {
          query: {
            icons: icons.join(",")
          }
        });
        if (!data || data.prefix !== prefix || !data.icons)
          throw new Error("Invalid data" + JSON.stringify(data));
        return data;
      } catch (e) {
        console.error("Failed to load custom icons", e);
        return null;
      }
    }
    addAPIProvider("", { resources });
    for (const prefix of options.customCollections || []) {
      if (prefix)
        setCustomIconsLoader(customIconLoader, prefix);
    }
  }
  // For type portability
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
});
var Re = Object.defineProperty, $e = (e, t, r) => t in e ? Re(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r, b = (e, t, r) => $e(e, typeof t != "symbol" ? t + "" : t, r);
let k = /* @__PURE__ */ (function(e) {
  return e.DOCUMENT = "doc", e.HEADING = "heading", e.PARAGRAPH = "paragraph", e.QUOTE = "blockquote", e.OL_LIST = "ordered_list", e.UL_LIST = "bullet_list", e.LIST_ITEM = "list_item", e.CODE_BLOCK = "code_block", e.HR = "horizontal_rule", e.BR = "hard_break", e.IMAGE = "image", e.EMOJI = "emoji", e.COMPONENT = "blok", e.TABLE = "table", e.TABLE_ROW = "tableRow", e.TABLE_CELL = "tableCell", e.TABLE_HEADER = "tableHeader", e;
})({}), _ = /* @__PURE__ */ (function(e) {
  return e.BOLD = "bold", e.STRONG = "strong", e.STRIKE = "strike", e.UNDERLINE = "underline", e.ITALIC = "italic", e.CODE = "code", e.LINK = "link", e.ANCHOR = "anchor", e.STYLED = "styled", e.SUPERSCRIPT = "superscript", e.SUBSCRIPT = "subscript", e.TEXT_STYLE = "textStyle", e.HIGHLIGHT = "highlight", e;
})({}), Ae = /* @__PURE__ */ (function(e) {
  return e.TEXT = "text", e;
})({}), O = /* @__PURE__ */ (function(e) {
  return e.URL = "url", e.STORY = "story", e.ASSET = "asset", e.EMAIL = "email", e;
})({});
const Se = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
], Ee = (e = {}) => {
  const { custom: t, ...r } = e, s = {
    ...r,
    ...t
  };
  return Object.keys(s).map((n) => `${n}="${s[n]}"`).join(" ");
}, Le = (e = {}) => Object.keys(e).map((t) => `${t}: ${e[t]}`).join("; ");
function Ie(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
const L = (e) => Object.fromEntries(Object.entries(e).filter(([t, r]) => r !== void 0));
function Ce(e, t) {
  if (!t) return {
    src: e,
    attrs: {}
  };
  let r = 0, s = 0;
  const n = {}, o = [];
  function a(c, u, f, y, R) {
    typeof c != "number" || c <= u || c >= f ? console.warn(`[StoryblokRichText] - ${y.charAt(0).toUpperCase() + y.slice(1)} value must be a number between ${u} and ${f} (inclusive)`) : R.push(`${y}(${c})`);
  }
  if (typeof t == "object") {
    if (t.width !== void 0 && (typeof t.width == "number" && t.width >= 0 ? (n.width = t.width, r = t.width) : console.warn("[StoryblokRichText] - Width value must be a number greater than or equal to 0")), t.height !== void 0 && (typeof t.height == "number" && t.height >= 0 ? (n.height = t.height, s = t.height) : console.warn("[StoryblokRichText] - Height value must be a number greater than or equal to 0")), t.height === 0 && t.width === 0 && (delete n.width, delete n.height, console.warn("[StoryblokRichText] - Width and height values cannot both be 0")), t.loading && ["lazy", "eager"].includes(t.loading) && (n.loading = t.loading), t.class && (n.class = t.class), t.filters) {
      const { filters: c } = t || {}, { blur: u, brightness: f, fill: y, format: R, grayscale: P, quality: T, rotate: S } = c || {};
      u && a(u, 0, 100, "blur", o), T && a(T, 0, 100, "quality", o), f && a(f, 0, 100, "brightness", o), y && o.push(`fill(${y})`), P && o.push("grayscale()"), S && [
        0,
        90,
        180,
        270
      ].includes(t.filters.rotate || 0) && o.push(`rotate(${S})`), R && [
        "webp",
        "png",
        "jpeg"
      ].includes(R) && o.push(`format(${R})`);
    }
    t.srcset && (n.srcset = t.srcset.map((c) => {
      if (typeof c == "number") return `${e}/m/${c}x0/${o.length > 0 ? `filters:${o.join(":")}` : ""} ${c}w`;
      if (Array.isArray(c) && c.length === 2) {
        const [u, f] = c;
        return `${e}/m/${u}x${f}/${o.length > 0 ? `filters:${o.join(":")}` : ""} ${u}w`;
      } else {
        console.warn("[StoryblokRichText] - srcset entry must be a number or a tuple of two numbers");
        return;
      }
    }).join(", ")), t.sizes && (n.sizes = t.sizes.join(", "));
  }
  let l = `${e}/m/`;
  return (r > 0 || s > 0) && (l = `${l}${r}x${s}/`), o.length > 0 && (l = `${l}filters:${o.join(":")}`), {
    src: l,
    attrs: n
  };
}
function V(e, t = {}, r) {
  const s = Ee(t), n = s ? `${e} ${s}` : e, o = Array.isArray(r) ? r.join("") : r || "";
  if (e) {
    if (Se.includes(e)) return `<${n}>`;
  } else return o;
  return `<${n}>${o}</${e}>`;
}
function ee(e = {}) {
  const t = /* @__PURE__ */ new Map(), { renderFn: r = V, textFn: s = Ie, resolvers: n = {}, optimizeImages: o = false, keyedResolvers: a = false } = e, l = r !== V, c = (i = {}) => {
    const { textAlign: h2, class: d, id: p, style: m, ...v } = i, g = [];
    return m && g.push(m.endsWith(";") ? m : `${m};`), h2 && g.push(`text-align: ${h2};`), L({
      ...v,
      class: d,
      id: p,
      ...g.length > 0 ? { style: g.join(" ") } : {}
    });
  }, u = (i) => (h2, d) => {
    const p = c(h2.attrs);
    return d.render(i, p, h2.children || null);
  }, f = (i, h2) => {
    const { src: d, alt: p, title: m, srcset: v, sizes: g } = i.attrs || {};
    let $ = d, w = {};
    if (o) {
      const { src: ue, attrs: he } = Ce(d, o);
      $ = ue, w = he;
    }
    const E = {
      src: $,
      alt: p,
      title: m,
      srcset: v,
      sizes: g,
      ...w
    };
    return h2.render("img", L(E));
  }, y = (i, h2) => {
    const { level: d, ...p } = i.attrs || {}, m = c(p);
    return h2.render(`h${d}`, m, i.children);
  }, R = (i, h2) => {
    var d, p, m, v;
    const g = h2.render("img", {
      src: (d = i.attrs) == null ? void 0 : d.fallbackImage,
      alt: (p = i.attrs) == null ? void 0 : p.alt,
      style: "width: 1.25em; height: 1.25em; vertical-align: text-top",
      draggable: "false",
      loading: "lazy"
    });
    return h2.render("span", {
      "data-type": "emoji",
      "data-name": (m = i.attrs) == null ? void 0 : m.name,
      "data-emoji": (v = i.attrs) == null ? void 0 : v.emoji
    }, g);
  }, P = (i, h2) => h2.render("pre", i.attrs || {}, h2.render("code", {}, i.children || "")), T = (i, h2 = false) => ({ text: d, attrs: p }, m) => {
    const { class: v, id: g, ...$ } = p || {}, w = h2 ? {
      class: v,
      id: g,
      style: Le($) || void 0
    } : p || {};
    return m.render(i, L(w), d);
  }, S = (i) => N(i), se = (i) => {
    const { marks: h2, ...d } = i;
    if ("text" in i) {
      if (h2) return h2.reduce((m, v) => S({
        ...v,
        text: m
      }), S({
        ...d,
        children: d.children
      }));
      const p = i.attrs || {};
      if (a) {
        const m = t.get("txt") || 0;
        t.set("txt", m + 1), p.key = `txt-${m}`;
      }
      return s(d.text, p);
    }
    return "";
  }, B = (i, h2) => {
    const { linktype: d, href: p, anchor: m, ...v } = i.attrs || {};
    let g = "";
    switch (d) {
      case O.ASSET:
      case O.URL:
        g = p;
        break;
      case O.EMAIL:
        g = `mailto:${p}`;
        break;
      case O.STORY:
        g = p, m && (g = `${g}#${m}`);
        break;
      default:
        g = p;
        break;
    }
    const $ = { ...v };
    return g && ($.href = g), h2.render("a", $, i.text);
  }, ne = (i, h2) => {
    var d, p;
    return console.warn("[StoryblokRichtText] - BLOK resolver is not available for vanilla usage"), h2.render("span", {
      blok: (d = i == null ? void 0 : i.attrs) == null ? void 0 : d.body[0],
      id: (p = i.attrs) == null ? void 0 : p.id,
      style: "display: none"
    });
  }, oe = (i, h2) => {
    const d = c(i.attrs), p = i.children || null;
    return h2.render("table", d, h2.render("tbody", {}, p));
  }, ie = (i, h2) => {
    const d = c(i.attrs);
    return h2.render("tr", d, i.children);
  }, ae = (i, h2) => {
    const { colspan: d, rowspan: p, colwidth: m, backgroundColor: v, textAlign: g, ...$ } = i.attrs || {}, w = [];
    m && w.push(`width: ${m}px;`), v && w.push(`background-color: ${v};`), g && w.push(`text-align: ${g};`);
    const E = {
      ...$,
      ...d > 1 ? { colspan: d } : {},
      ...p > 1 ? { rowspan: p } : {},
      ...w.length > 0 ? { style: w.join(" ") } : {}
    };
    return h2.render("td", L(E), i.children);
  }, le = (i, h2) => {
    const { colspan: d, rowspan: p, colwidth: m, backgroundColor: v, textAlign: g, ...$ } = i.attrs || {}, w = [];
    m && w.push(`width: ${m}px;`), v && w.push(`background-color: ${v};`), g && w.push(`text-align: ${g};`);
    const E = {
      ...$,
      ...d > 1 ? { colspan: d } : {},
      ...p > 1 ? { rowspan: p } : {},
      ...w.length > 0 ? { style: w.join(" ") } : {}
    };
    return h2.render("th", L(E), i.children);
  }, M = /* @__PURE__ */ new Map([
    [k.DOCUMENT, u("")],
    [k.HEADING, y],
    [k.PARAGRAPH, u("p")],
    [k.UL_LIST, u("ul")],
    [k.OL_LIST, u("ol")],
    [k.LIST_ITEM, u("li")],
    [k.IMAGE, f],
    [k.EMOJI, R],
    [k.CODE_BLOCK, P],
    [k.HR, u("hr")],
    [k.BR, u("br")],
    [k.QUOTE, u("blockquote")],
    [k.COMPONENT, ne],
    [Ae.TEXT, se],
    [_.LINK, B],
    [_.ANCHOR, B],
    [_.STYLED, T("span", true)],
    [_.BOLD, T("strong")],
    [_.TEXT_STYLE, T("span", true)],
    [_.ITALIC, T("em")],
    [_.UNDERLINE, T("u")],
    [_.STRIKE, T("s")],
    [_.CODE, T("code")],
    [_.SUPERSCRIPT, T("sup")],
    [_.SUBSCRIPT, T("sub")],
    [_.HIGHLIGHT, T("mark")],
    [k.TABLE, oe],
    [k.TABLE_ROW, ie],
    [k.TABLE_CELL, ae],
    [k.TABLE_HEADER, le]
  ]), F = new Map([...M, ...Object.entries(n).map(([i, h2]) => [i, h2])]), ce = () => ({
    render: (i, h2 = {}, d) => {
      if (a && i) {
        const p = t.get(i) || 0;
        t.set(i, p + 1), h2.key = `${i}-${p}`;
      }
      return r(i, h2, d);
    },
    originalResolvers: M,
    mergedResolvers: F
  });
  function C(i) {
    const h2 = F.get(i.type);
    if (!h2)
      return console.error("<Storyblok>", `No resolver found for node type ${i.type}`), "";
    const d = ce();
    if (i.type === "text") return h2(i, d);
    const p = i.content ? i.content.map(N) : void 0;
    return h2({
      ...i,
      children: p
    }, d);
  }
  function N(i) {
    return i.type === "doc" ? l ? i.content.map(C) : i.content.map(C).join("") : Array.isArray(i) ? i.map(C) : C(i);
  }
  return { render: N };
}
var je = class extends Error {
  constructor(e) {
    super(e), this.name = "AbortError";
  }
};
function xe(e, t, r) {
  if (!Number.isFinite(t)) throw new TypeError("Expected `limit` to be a finite number");
  if (!Number.isFinite(r)) throw new TypeError("Expected `interval` to be a finite number");
  const s = [];
  let n = [], o = 0, a = false;
  const l = async () => {
    o++;
    const u = s.shift();
    if (u) try {
      const y = await e(...u.args);
      u.resolve(y);
    } catch (y) {
      u.reject(y);
    }
    const f = setTimeout(() => {
      o--, s.length > 0 && l(), n = n.filter((y) => y !== f);
    }, r);
    n.includes(f) || n.push(f);
  }, c = (...u) => a ? Promise.reject(/* @__PURE__ */ new Error("Throttled function is already aborted and not accepting new promises")) : new Promise((f, y) => {
    s.push({
      resolve: f,
      reject: y,
      args: u
    }), o < t && l();
  });
  return c.abort = () => {
    a = true, n.forEach(clearTimeout), n = [], s.forEach((u) => u.reject(() => new je("Throttle function aborted"))), s.length = 0;
  }, c;
}
var Pe = xe;
const G = (e = "") => e.includes("/cdn/"), Ne = (e, t = 25, r = 1) => ({
  ...e,
  per_page: t,
  page: r
}), He = (e) => new Promise((t) => setTimeout(t, e)), Ue = (e = 0, t) => Array.from({ length: e }, t), De = (e = 0, t = e) => {
  const r = Math.abs(t - e) || 0, s = e < t ? 1 : -1;
  return Ue(r, (n, o) => o * s + e);
}, Be = async (e, t) => Promise.all(e.map(t)), Me = (e = [], t) => e.map(t).reduce((r, s) => [...r, ...s], []), D = (e, t, r) => {
  const s = [];
  for (const n in e) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
    const o = e[n];
    if (o == null) continue;
    const a = r ? "" : encodeURIComponent(n);
    let l;
    typeof o == "object" ? l = D(o, t ? t + encodeURIComponent(`[${a}]`) : a, Array.isArray(o)) : l = `${t ? t + encodeURIComponent(`[${a}]`) : a}=${encodeURIComponent(o)}`, s.push(l);
  }
  return s.join("&");
}, J = (e) => {
  const t = {
    eu: "api.storyblok.com",
    us: "api-us.storyblok.com",
    cn: "app.storyblokchina.cn",
    ap: "api-ap.storyblok.com",
    ca: "api-ca.storyblok.com"
  };
  return t[e] ?? t.eu;
};
var Fe = class {
  constructor(e) {
    b(this, "baseURL"), b(this, "timeout"), b(this, "headers"), b(this, "responseInterceptor"), b(this, "fetch"), b(this, "ejectInterceptor"), b(this, "url"), b(this, "parameters"), b(this, "fetchOptions"), this.baseURL = e.baseURL, this.headers = e.headers || new Headers(), this.timeout = e != null && e.timeout ? e.timeout * 1e3 : 0, this.responseInterceptor = e.responseInterceptor, this.fetch = (...t) => e.fetch ? e.fetch(...t) : fetch(...t), this.ejectInterceptor = false, this.url = "", this.parameters = {}, this.fetchOptions = {};
  }
  /**
  *
  * @param url string
  * @param params ISbStoriesParams
  * @returns Promise<ISbResponse | Error>
  */
  get(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("get");
  }
  post(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("post");
  }
  put(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("put");
  }
  delete(e, t) {
    return this.url = e, this.parameters = t ?? {}, this._methodHandler("delete");
  }
  async _responseHandler(e) {
    const t = [], r = {
      data: {},
      headers: {},
      status: 0,
      statusText: ""
    };
    e.status !== 204 && await e.json().then((s) => {
      r.data = s;
    });
    for (const s of e.headers.entries()) t[s[0]] = s[1];
    return r.headers = { ...t }, r.status = e.status, r.statusText = e.statusText, r;
  }
  async _methodHandler(e) {
    let t = `${this.baseURL}${this.url}`, r = null;
    e === "get" ? t = `${this.baseURL}${this.url}?${D(this.parameters)}` : r = JSON.stringify(this.parameters);
    const s = new URL(t), n = new AbortController(), { signal: o } = n;
    let a = null;
    this.timeout && (a = setTimeout(() => n.abort(), this.timeout));
    try {
      const l = await this.fetch(`${s}`, {
        method: e,
        headers: this.headers,
        body: r,
        signal: o,
        ...this.fetchOptions
      });
      this.timeout && a && clearTimeout(a);
      const c = await this._responseHandler(l);
      return this.responseInterceptor && !this.ejectInterceptor ? this._statusHandler(this.responseInterceptor(c)) : this._statusHandler(c);
    } catch (l) {
      return { message: l };
    }
  }
  setFetchOptions(e = {}) {
    Object.keys(e).length > 0 && "method" in e && delete e.method, this.fetchOptions = { ...e };
  }
  eject() {
    this.ejectInterceptor = true;
  }
  /**
  * Normalizes error messages from different response structures
  * @param data The response data that might contain error information
  * @returns A normalized error message string
  */
  _normalizeErrorMessage(e) {
    if (Array.isArray(e)) return e[0] || "Unknown error";
    if (e && typeof e == "object") {
      if (e.error) return e.error;
      for (const t in e) {
        if (Array.isArray(e[t])) return `${t}: ${e[t][0]}`;
        if (typeof e[t] == "string") return `${t}: ${e[t]}`;
      }
      if (e.slug) return e.slug;
    }
    return "Unknown error";
  }
  _statusHandler(e) {
    const t = /20[0-6]/g;
    return new Promise((r, s) => {
      if (t.test(`${e.status}`)) return r(e);
      const n = {
        message: this._normalizeErrorMessage(e.data),
        status: e.status,
        response: e
      };
      s(n);
    });
  }
}, Ve = Fe;
const K = "SB-Agent", U = {
  defaultAgentName: "SB-JS-CLIENT",
  defaultAgentVersion: "SB-Agent-Version",
  packageVersion: "7.0.0"
}, ze = {
  PUBLISHED: "published"
};
let j = {};
const A = {};
var qe = class {
  /**
  *
  * @param config ISbConfig interface
  * @param pEndpoint string, optional
  */
  constructor(e, t) {
    b(this, "client"), b(this, "maxRetries"), b(this, "retriesDelay"), b(this, "throttle"), b(this, "accessToken"), b(this, "cache"), b(this, "resolveCounter"), b(this, "relations"), b(this, "links"), b(this, "version"), b(this, "richTextResolver"), b(this, "resolveNestedRelations"), b(this, "stringifiedStoriesCache"), b(this, "inlineAssets");
    let r = e.endpoint || t;
    if (!r) {
      const o = e.https === false ? "http" : "https";
      e.oauthToken ? r = `${o}://${J(e.region)}/v1` : r = `${o}://${J(e.region)}/v2`;
    }
    const s = new Headers();
    s.set("Content-Type", "application/json"), s.set("Accept", "application/json"), e.headers && (e.headers.constructor.name === "Headers" ? e.headers.entries().toArray() : Object.entries(e.headers)).forEach(([o, a]) => {
      s.set(o, a);
    }), s.has(K) || (s.set(K, U.defaultAgentName), s.set(U.defaultAgentVersion, U.packageVersion));
    let n = 5;
    e.oauthToken && (s.set("Authorization", e.oauthToken), n = 3), e.rateLimit && (n = e.rateLimit), this.maxRetries = e.maxRetries || 10, this.retriesDelay = 300, this.throttle = Pe(this.throttledRequest.bind(this), n, 1e3), this.accessToken = e.accessToken || "", this.relations = {}, this.links = {}, this.cache = e.cache || { clear: "manual" }, this.resolveCounter = 0, this.resolveNestedRelations = e.resolveNestedRelations || true, this.stringifiedStoriesCache = {}, this.version = e.version || ze.PUBLISHED, this.inlineAssets = e.inlineAssets || false, this.client = new Ve({
      baseURL: r,
      timeout: e.timeout || 0,
      headers: s,
      responseInterceptor: e.responseInterceptor,
      fetch: e.fetch
    });
  }
  parseParams(e) {
    return e.token || (e.token = this.getToken()), e.cv || (e.cv = A[e.token]), Array.isArray(e.resolve_relations) && (e.resolve_relations = e.resolve_relations.join(",")), typeof e.resolve_relations < "u" && (e.resolve_level = 2), e;
  }
  factoryParamOptions(e, t) {
    return G(e) ? this.parseParams(t) : t;
  }
  makeRequest(e, t, r, s, n) {
    const o = this.factoryParamOptions(e, Ne(t, r, s));
    return this.cacheResponse(e, o, void 0, n);
  }
  get(e, t = {}, r) {
    t || (t = {});
    const s = `/${e}`;
    G(s) && (t.version = t.version || this.version);
    const n = this.factoryParamOptions(s, t);
    return this.cacheResponse(s, n, void 0, r);
  }
  async getAll(e, t = {}, r, s) {
    const n = (t == null ? void 0 : t.per_page) || 25, o = `/${e}`.replace(/\/$/, ""), a = r ?? o.substring(o.lastIndexOf("/") + 1);
    t.version = t.version || this.version;
    const l = 1, c = await this.makeRequest(o, t, n, l, s), u = c.total ? Math.ceil(c.total / (c.perPage || n)) : 1, f = await Be(De(l, u), (y) => this.makeRequest(o, t, n, y + 1, s));
    return Me([c, ...f], (y) => Object.values(y.data[a]));
  }
  post(e, t = {}, r) {
    const s = `/${e}`;
    return this.throttle("post", s, t, r);
  }
  put(e, t = {}, r) {
    const s = `/${e}`;
    return this.throttle("put", s, t, r);
  }
  delete(e, t = {}, r) {
    t || (t = {});
    const s = `/${e}`;
    return this.throttle("delete", s, t, r);
  }
  getStories(e = {}, t) {
    return this._addResolveLevel(e), this.get("cdn/stories", e, t);
  }
  getStory(e, t = {}, r) {
    return this._addResolveLevel(t), this.get(`cdn/stories/${e}`, t, r);
  }
  getToken() {
    return this.accessToken;
  }
  ejectInterceptor() {
    this.client.eject();
  }
  _addResolveLevel(e) {
    typeof e.resolve_relations < "u" && (e.resolve_level = 2);
  }
  _cleanCopy(e) {
    return JSON.parse(JSON.stringify(e));
  }
  _insertLinks(e, t, r) {
    const s = e[t];
    s && s.fieldtype === "multilink" && s.linktype === "story" && typeof s.id == "string" && this.links[r][s.id] ? s.story = this._cleanCopy(this.links[r][s.id]) : s && s.linktype === "story" && typeof s.uuid == "string" && this.links[r][s.uuid] && (s.story = this._cleanCopy(this.links[r][s.uuid]));
  }
  /**
  *
  * @param resolveId A counter number as a string
  * @param uuid The uuid of the story
  * @returns string | object
  */
  getStoryReference(e, t) {
    return this.relations[e][t] ? JSON.parse(this.stringifiedStoriesCache[t] || JSON.stringify(this.relations[e][t])) : t;
  }
  /**
  * Resolves a field's value by replacing UUIDs with their corresponding story references
  * @param jtree - The JSON tree object containing the field to resolve
  * @param treeItem - The key of the field to resolve
  * @param resolveId - The unique identifier for the current resolution context
  *
  * This method handles both single string UUIDs and arrays of UUIDs:
  * - For single strings: directly replaces the UUID with the story reference
  * - For arrays: maps through each UUID and replaces with corresponding story references
  */
  _resolveField(e, t, r) {
    const s = e[t];
    typeof s == "string" ? e[t] = this.getStoryReference(r, s) : Array.isArray(s) && (e[t] = s.map((n) => this.getStoryReference(r, n)).filter(Boolean));
  }
  /**
  * Inserts relations into the JSON tree by resolving references
  * @param jtree - The JSON tree object to process
  * @param treeItem - The current field being processed
  * @param fields - The relation patterns to resolve (string or array of strings)
  * @param resolveId - The unique identifier for the current resolution context
  *
  * This method handles two types of relation patterns:
  * 1. Nested relations: matches fields that end with the current field name
  *    Example: If treeItem is "event_type", it matches patterns like "*.event_type"
  *
  * 2. Direct component relations: matches exact component.field patterns
  *    Example: "event.event_type" for component "event" and field "event_type"
  *
  * The method supports both string and array formats for the fields parameter,
  * allowing flexible specification of relation patterns.
  */
  _insertRelations(e, t, r, s) {
    if (Array.isArray(r) ? r.find((o) => o.endsWith(`.${t}`)) : r.endsWith(`.${t}`)) {
      this._resolveField(e, t, s);
      return;
    }
    const n = e.component ? `${e.component}.${t}` : t;
    (Array.isArray(r) ? r.includes(n) : r === n) && this._resolveField(e, t, s);
  }
  /**
  * Recursively traverses and resolves relations in the story content tree
  * @param story - The story object containing the content to process
  * @param fields - The relation patterns to resolve
  * @param resolveId - The unique identifier for the current resolution context
  */
  iterateTree(e, t, r) {
    const s = (n, o = "") => {
      if (!(!n || n._stopResolving)) {
        if (Array.isArray(n)) n.forEach((a, l) => s(a, `${o}[${l}]`));
        else if (typeof n == "object") for (const a in n) {
          const l = o ? `${o}.${a}` : a;
          (n.component && n._uid || n.type === "link") && (this._insertRelations(n, a, t, r), this._insertLinks(n, a, r)), s(n[a], l);
        }
      }
    };
    s(e.content);
  }
  async resolveLinks(e, t, r) {
    let s = [];
    if (e.link_uuids) {
      const n = e.link_uuids.length, o = [], a = 50;
      for (let l = 0; l < n; l += a) {
        const c = Math.min(n, l + a);
        o.push(e.link_uuids.slice(l, c));
      }
      for (let l = 0; l < o.length; l++)
        (await this.getStories({
          per_page: a,
          language: t.language,
          version: t.version,
          starts_with: t.starts_with,
          by_uuids: o[l].join(",")
        })).data.stories.forEach((c) => {
          s.push(c);
        });
    } else s = e.links;
    s.forEach((n) => {
      this.links[r][n.uuid] = {
        ...n,
        _stopResolving: true
      };
    });
  }
  async resolveRelations(e, t, r) {
    let s = [];
    if (e.rel_uuids) {
      const n = e.rel_uuids.length, o = [], a = 50;
      for (let l = 0; l < n; l += a) {
        const c = Math.min(n, l + a);
        o.push(e.rel_uuids.slice(l, c));
      }
      for (let l = 0; l < o.length; l++)
        (await this.getStories({
          per_page: a,
          language: t.language,
          version: t.version,
          starts_with: t.starts_with,
          by_uuids: o[l].join(","),
          excluding_fields: t.excluding_fields
        })).data.stories.forEach((c) => {
          s.push(c);
        });
      s.length > 0 && (e.rels = s, delete e.rel_uuids);
    } else s = e.rels;
    s && s.length > 0 && s.forEach((n) => {
      this.relations[r][n.uuid] = {
        ...n,
        _stopResolving: true
      };
    });
  }
  /**
  *
  * @param responseData
  * @param params
  * @param resolveId
  * @description Resolves the relations and links of the stories
  * @returns Promise<void>
  *
  */
  async resolveStories(e, t, r) {
    var s, n;
    let o = [];
    if (this.links[r] = {}, this.relations[r] = {}, typeof t.resolve_relations < "u" && t.resolve_relations.length > 0 && (typeof t.resolve_relations == "string" && (o = t.resolve_relations.split(",")), await this.resolveRelations(e, t, r)), t.resolve_links && [
      "1",
      "story",
      "url",
      "link"
    ].includes(t.resolve_links) && ((s = e.links) != null && s.length || (n = e.link_uuids) != null && n.length) && await this.resolveLinks(e, t, r), this.resolveNestedRelations) for (const a in this.relations[r]) this.iterateTree(this.relations[r][a], o, r);
    e.story ? this.iterateTree(e.story, o, r) : e.stories.forEach((a) => {
      this.iterateTree(a, o, r);
    }), this.stringifiedStoriesCache = {}, delete this.links[r], delete this.relations[r];
  }
  async cacheResponse(e, t, r, s) {
    const n = D({
      url: e,
      params: t
    }), o = this.cacheProvider();
    if (t.version === "published" && e !== "/cdn/spaces/me") {
      const a = await o.get(n);
      if (a) return Promise.resolve(a);
    }
    return new Promise(async (a, l) => {
      var c;
      try {
        const u = await this.throttle("get", e, t, s);
        if (u.status !== 200) return l(u);
        let f = {
          data: u.data,
          headers: u.headers
        };
        if ((c = u.headers) != null && c["per-page"] && (f = Object.assign({}, f, {
          perPage: u.headers["per-page"] ? Number.parseInt(u.headers["per-page"]) : 0,
          total: u.headers["per-page"] ? Number.parseInt(u.headers.total) : 0
        })), f.data.story || f.data.stories) {
          const R = this.resolveCounter = ++this.resolveCounter % 1e3;
          await this.resolveStories(f.data, t, `${R}`), f = await this.processInlineAssets(f);
        }
        t.version === "published" && e !== "/cdn/spaces/me" && await o.set(n, f);
        const y = this.cache.clear === "onpreview" && t.version === "draft" || this.cache.clear === "auto";
        return t.token && f.data.cv && (y && A[t.token] && A[t.token] !== f.data.cv && await this.flushCache(), A[t.token] = f.data.cv), a(f);
      } catch (u) {
        if (u.response && u.status === 429 && (r = typeof r > "u" ? 0 : r + 1, r < this.maxRetries))
          return console.log(`Hit rate limit. Retrying in ${this.retriesDelay / 1e3} seconds.`), await He(this.retriesDelay), this.cacheResponse(e, t, r).then(a).catch(l);
        l(u);
      }
    });
  }
  throttledRequest(e, t, r, s) {
    return this.client.setFetchOptions(s), this.client[e](t, r);
  }
  cacheVersions() {
    return A;
  }
  cacheVersion() {
    return A[this.accessToken];
  }
  setCacheVersion(e) {
    this.accessToken && (A[this.accessToken] = e);
  }
  clearCacheVersion() {
    this.accessToken && (A[this.accessToken] = 0);
  }
  cacheProvider() {
    switch (this.cache.type) {
      case "memory":
        return {
          get(e) {
            return Promise.resolve(j[e]);
          },
          getAll() {
            return Promise.resolve(j);
          },
          set(e, t) {
            return j[e] = t, Promise.resolve(void 0);
          },
          flush() {
            return j = {}, Promise.resolve(void 0);
          }
        };
      case "custom":
        if (this.cache.custom) return this.cache.custom;
      default:
        return {
          get() {
            return Promise.resolve();
          },
          getAll() {
            return Promise.resolve(void 0);
          },
          set() {
            return Promise.resolve(void 0);
          },
          flush() {
            return Promise.resolve(void 0);
          }
        };
    }
  }
  async flushCache() {
    return await this.cacheProvider().flush(), this.clearCacheVersion(), this;
  }
  async processInlineAssets(e) {
    if (!this.inlineAssets) return e;
    const t = (r) => {
      if (!r || typeof r != "object") return r;
      if (Array.isArray(r)) return r.map((n) => t(n));
      let s = { ...r };
      s.fieldtype === "asset" && Array.isArray(e.data.assets) && (s = {
        ...e.data.assets.find((n) => n.id === s.id),
        ...s
      });
      for (const n in s) typeof s[n] == "object" && (s[n] = t(s[n]));
      return s;
    };
    return e.data.story && (e.data.story.content = t(e.data.story.content)), e.data.stories && (e.data.stories = e.data.stories.map((r) => (r.content = t(r.content), r))), e;
  }
}, Ge = qe;
const tt = (e = {}) => {
  const { apiOptions: t } = e;
  if (!t || !t.accessToken) {
    console.error(
      "You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication"
    );
    return;
  }
  return { storyblokApi: new Ge(t) };
}, Je = (e) => {
  if (typeof e != "object" || typeof e._editable > "u")
    return {};
  try {
    const t = JSON.parse(
      e._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
    );
    return t ? {
      "data-blok-c": JSON.stringify(t),
      "data-blok-uid": `${t.id}-${t.uid}`
    } : {};
  } catch {
    return {};
  }
};
const Ye = (e = {}) => {
  const {
    bridge: s,
    accessToken: n,
    use: o = [],
    apiOptions: a = {},
    bridgeUrl: l
  } = e;
  a.accessToken = a.accessToken || n;
  const c = { bridge: s, apiOptions: a };
  let u = {};
  o.forEach((y) => {
    u = { ...u, ...y(c) };
  });
  return u;
};
const te = /* @__PURE__ */ defineComponent({
  __name: "StoryblokComponent",
  props: {
    blok: {}
  },
  setup(e, { expose: t }) {
    var l;
    const r = e, s = ref();
    t({
      value: s
    });
    const n = typeof resolveDynamicComponent(r.blok.component) != "string", o = inject("VueSDKOptions"), a = ref((l = r.blok.component) == null ? void 0 : l.replace(/_/g, "-"));
    return !n && o && (o.enableFallbackComponent ? (a.value = o.customFallbackComponent ?? "FallbackComponent", typeof resolveDynamicComponent(a.value) == "string" && console.error(
      `Is the Fallback component "${a.value}" registered properly?`
    )) : console.error(
      `Component could not be found for blok "${r.blok.component}"! Is it defined in main.ts as "app.component("${r.blok.component}", ${r.blok.component});"?`
    )), (c, u) => (openBlock(), createBlock(resolveDynamicComponent(a.value), mergeProps({
      ref_key: "blokRef",
      ref: s
    }, { ...c.$props, ...c.$attrs }), createSlots({ _: 2 }, [
      renderList(c.$slots, (f, y) => ({
        name: y,
        fn: withCtx((R) => [
          renderSlot(c.$slots, y, normalizeProps(guardReactiveProps(R)))
        ])
      }))
    ]), 1040));
  }
}), We = (e) => {
  var r;
  const t = (r = e == null ? void 0 : e.attrs) == null ? void 0 : r.body;
  return !Array.isArray(t) || t.length === 0 ? [] : t.map(
    (s) => {
      var n;
      return h(te, {
        blok: s,
        id: (n = e == null ? void 0 : e.attrs) == null ? void 0 : n.id
      }, e.children);
    }
  );
};
function Xe(e) {
  const t = {
    renderFn: h,
    // TODO: Check why this changed.
    // @ts-expect-error - createTextVNode types has been recently changed.
    textFn: createTextVNode,
    keyedResolvers: true,
    resolvers: {
      [k.COMPONENT]: We,
      ...e.resolvers
    }
  };
  return ee(t);
}
const Qe = /* @__PURE__ */ defineComponent({
  __name: "StoryblokRichText",
  props: {
    doc: {},
    resolvers: {}
  },
  setup(e) {
    const t = e, r = ref(), s = () => r.value;
    return watch([() => t.doc, () => t.resolvers], ([n, o]) => {
      const { render: a } = Xe({
        resolvers: o ?? {}
      });
      r.value = a(n);
    }, {
      immediate: true,
      deep: true
    }), (n, o) => (openBlock(), createBlock(s));
  }
}), Ze = {
  beforeMount(e, t) {
    if (t.value) {
      const r = Je(t.value);
      Object.keys(r).length > 0 && (e.setAttribute("data-blok-c", r["data-blok-c"]), e.setAttribute("data-blok-uid", r["data-blok-uid"]), e.classList.add("storyblok__outline"));
    }
  }
}, re = (e) => {
  console.error(`You can't use ${e} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `);
};
let I = null;
const st = () => (I || re("useStoryblokApi"), I), ot = {
  install(e, t = {}) {
    e.directive("editable", Ze), e.component("StoryblokComponent", te), e.component("StoryblokRichText", Qe), t.enableFallbackComponent && !t.customFallbackComponent && e.component(
      "FallbackComponent",
      defineAsyncComponent(() => import('./FallbackComponent-vpkAikkq-x6nCXSlS.mjs'))
    );
    const { storyblokApi: r } = Ye(t);
    I = r || null, e.provide("VueSDKOptions", t);
  }
};
const plugin_YOxzu2Rgn246XMgfphZEXZjtzJTMGWdPuDf_KLI_O_0 = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  let { storyblok } = (/* @__PURE__ */ useRuntimeConfig()).public;
  storyblok = JSON.parse(JSON.stringify(storyblok));
  if (storyblok.enableServerClient) {
    vueApp.use(ot, { ...storyblok });
  } else {
    vueApp.use(ot, { ...storyblok, use: [tt] });
  }
});
const ssr_width_1vQUHC9Yha6lNoQ68jqaIDnLiwsn3KZuHttF_yDzmb4 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  provideSSRWidth(1024, nuxtApp.vueApp);
});
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin_UGq4Ty9llav6T81PDabKpQVSL3u5o61aRk8pAUr1ST4,
  plugin,
  components_plugin_4kY4pyzJIYX99vmMAAIorFf3CnAaptHitJgf7JxiED8,
  plugin_MeUvTuoKUi51yb_kBguab6hdcExVXeTtZtTg9TZZBB8,
  plugin_YOxzu2Rgn246XMgfphZEXZjtzJTMGWdPuDf_KLI_O_0,
  ssr_width_1vQUHC9Yha6lNoQ68jqaIDnLiwsn3KZuHttF_yDzmb4
];
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: __props.variant, size: __props.size }), props.class)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button/Button.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        "icon-sm": "size-9",
        "icon-lg": "size-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$B = {
  __name: "SkipLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        label: "Go to main navigation",
        target: "#main-nav"
      },
      {
        label: "Go to main content",
        target: "#main"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$C;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        role: "navigation",
        "aria-label": "Skip links",
        class: "group absolute top-[-900px] focus-within:top-0 w-full z-[100] bg-white"
      }, _attrs))}><ul class="flex justify-center items-center p-2 gap-2"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_Button, {
          "as-child": "",
          variant: "secondary"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a${ssrRenderAttr("href", link.target)}${_scopeId}>${ssrInterpolate(link.label)}</a>`);
            } else {
              return [
                createVNode("a", {
                  href: link.target
                }, toDisplayString(link.label), 9, ["href"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkipLinks.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "Skeleton",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("animate-pulse rounded-md bg-muted", props.class)
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/skeleton/Skeleton.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuViewport",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 top-full flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NavigationMenuViewport), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "origin-top-center relative mt-1.5 h-[--reka-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--reka-navigation-menu-viewport-width] left-[var(--reka-navigation-menu-viewport-left)]",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuViewport.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$z, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_sfc_main$z)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenu.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(unref(forwarded), {
        class: unref(cn)(
          // 'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
          props.class
        )
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuContent.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuIndicator",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuIndicator), mergeProps(unref(forwardedProps), {
        class: unref(cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", props.class)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuIndicator.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuItem), mergeProps(props, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuItem.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuLink",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuLink), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuLink.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuList",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuList), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "group flex flex-1 list-none items-center justify-center gap-x-1",
          props.class
        )
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuList.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(unref(navigationMenuTriggerStyle)(), "group", props.class)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(ChevronDown), {
              class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(ChevronDown), {
                class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuTrigger.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const _sfc_main$r = {
  __name: "NavigationDesktop",
  __ssrInlineRender: true,
  props: {
    items: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavigationMenu = _sfc_main$y;
      const _component_NavigationMenuList = _sfc_main$t;
      const _component_NavigationMenuItem = _sfc_main$v;
      const _component_NavigationMenuLink = _sfc_main$u;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NavigationMenuTrigger = _sfc_main$s;
      const _component_NavigationMenuContent = _sfc_main$x;
      _push(ssrRenderComponent(_component_NavigationMenu, mergeProps({
        id: "main-nav",
        class: "hidden xl:flex",
        viewport: false
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NavigationMenuList, null, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.items, (item) => {
                    _push3(ssrRenderComponent(_component_NavigationMenuItem, null, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (!item.children || item.children.length === 0) {
                            _push4(ssrRenderComponent(_component_NavigationMenuLink, {
                              "as-child": "",
                              class: unref(navigationMenuTriggerStyle)()
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_NuxtLink, {
                                    to: item.link.linktype === "story" ? item.link.story.url : item.link.url,
                                    target: item.link.target
                                  }, {
                                    default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item.label ? item.label : item.link.story.name)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_NuxtLink, {
                                      to: item.link.linktype === "story" ? item.link.story.url : item.link.url,
                                      target: item.link.target
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "target"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_NavigationMenuTrigger, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.label ? item.label : item.link.story.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          }
                          _push4(ssrRenderComponent(_component_NavigationMenuContent, null, {
                            default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-2"${_scopeId4}><!--[-->`);
                                ssrRenderList(item.children, (child, index) => {
                                  _push5(`<li class="w-full"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_NavigationMenuLink, { "as-child": "" }, {
                                    default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_NuxtLink, {
                                          to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                          target: child.link.target,
                                          class: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                                        }, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(child.label ? child.label : child.link.story.name)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_NuxtLink, {
                                            to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                            target: child.link.target,
                                            class: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["to", "target"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</li>`);
                                });
                                _push5(`<!--]--></ul>`);
                              } else {
                                return [
                                  createVNode("ul", { class: "grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, index) => {
                                      return openBlock(), createBlock("li", {
                                        key: index,
                                        class: "w-full"
                                      }, [
                                        createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                              target: child.link.target,
                                              class: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "target"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]);
                                    }), 128))
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            !item.children || item.children.length === 0 ? (openBlock(), createBlock(_component_NavigationMenuLink, {
                              key: 0,
                              "as-child": "",
                              class: unref(navigationMenuTriggerStyle)()
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: item.link.linktype === "story" ? item.link.story.url : item.link.url,
                                  target: item.link.target
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "target"])
                              ]),
                              _: 2
                            }, 1032, ["class"])) : (openBlock(), createBlock(_component_NavigationMenuTrigger, { key: 1 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                              ]),
                              _: 2
                            }, 1024)),
                            createVNode(_component_NavigationMenuContent, null, {
                              default: withCtx(() => [
                                createVNode("ul", { class: "grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, index) => {
                                    return openBlock(), createBlock("li", {
                                      key: index,
                                      class: "w-full"
                                    }, [
                                      createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                            target: child.link.target,
                                            class: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["to", "target"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                      return openBlock(), createBlock(_component_NavigationMenuItem, {
                        key: item.label
                      }, {
                        default: withCtx(() => [
                          !item.children || item.children.length === 0 ? (openBlock(), createBlock(_component_NavigationMenuLink, {
                            key: 0,
                            "as-child": "",
                            class: unref(navigationMenuTriggerStyle)()
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: item.link.linktype === "story" ? item.link.story.url : item.link.url,
                                target: item.link.target
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "target"])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : (openBlock(), createBlock(_component_NavigationMenuTrigger, { key: 1 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                            ]),
                            _: 2
                          }, 1024)),
                          createVNode(_component_NavigationMenuContent, null, {
                            default: withCtx(() => [
                              createVNode("ul", { class: "grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, index) => {
                                  return openBlock(), createBlock("li", {
                                    key: index,
                                    class: "w-full"
                                  }, [
                                    createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                          target: child.link.target,
                                          class: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to", "target"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NavigationMenuList, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                    return openBlock(), createBlock(_component_NavigationMenuItem, {
                      key: item.label
                    }, {
                      default: withCtx(() => [
                        !item.children || item.children.length === 0 ? (openBlock(), createBlock(_component_NavigationMenuLink, {
                          key: 0,
                          "as-child": "",
                          class: unref(navigationMenuTriggerStyle)()
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: item.link.linktype === "story" ? item.link.story.url : item.link.url,
                              target: item.link.target
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "target"])
                          ]),
                          _: 2
                        }, 1032, ["class"])) : (openBlock(), createBlock(_component_NavigationMenuTrigger, { key: 1 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                          ]),
                          _: 2
                        }, 1024)),
                        createVNode(_component_NavigationMenuContent, null, {
                          default: withCtx(() => [
                            createVNode("ul", { class: "grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, index) => {
                                return openBlock(), createBlock("li", {
                                  key: index,
                                  class: "w-full"
                                }, [
                                  createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                        target: child.link.target,
                                        class: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to", "target"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Desktop.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  props: {
    activeSnapPoint: {},
    closeThreshold: {},
    shouldScaleBackground: { type: Boolean, default: true },
    setBackgroundColorOnScale: { type: Boolean },
    scrollLockTimeout: {},
    fixed: { type: Boolean },
    dismissible: { type: Boolean },
    modal: { type: Boolean },
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    nested: { type: Boolean },
    direction: {},
    noBodyStyles: { type: Boolean },
    handleOnly: { type: Boolean },
    preventScrollRestoration: { type: Boolean },
    snapPoints: {},
    fadeFromIndex: {}
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/drawer/Drawer.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "DrawerOverlay",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerOverlay), mergeProps(unref(delegatedProps), {
        class: unref(cn)("fixed inset-0 z-50 bg-black/80", props.class)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/drawer/DrawerOverlay.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "DrawerContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerPortal), _attrs, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$p, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DrawerContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
                props.class
              )
            }), {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"${_scopeId2}></div>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode("div", { class: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$p),
              createVNode(unref(DrawerContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  createVNode("div", { class: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/drawer/DrawerContent.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "DrawerDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerDescription), mergeProps(unref(delegatedProps), {
        class: unref(cn)("text-sm text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/drawer/DrawerDescription.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "DrawerFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("mt-auto flex flex-col gap-2 p-4", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/drawer/DrawerFooter.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "DrawerHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("grid gap-1.5 p-4 text-center sm:text-left", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/drawer/DrawerHeader.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "DrawerTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerTitle), mergeProps(unref(delegatedProps), {
        class: unref(cn)("text-lg font-semibold leading-none tracking-tight", props.class)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/drawer/DrawerTitle.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    class: {},
    variant: {},
    size: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "item",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(unref(itemVariants)({ variant: __props.variant, size: __props.size }), props.class)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/Item.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "ItemActions",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "item-actions",
        class: unref(cn)("flex items-center gap-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/ItemActions.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ItemContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "item-content",
        class: unref(cn)("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/ItemContent.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ItemDescription",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        "data-slot": "item-description",
        class: unref(cn)(
          "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
          "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/ItemDescription.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ItemFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "item-footer",
        class: unref(cn)("flex basis-full items-center justify-between gap-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/ItemFooter.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ItemGroup",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "list",
        "data-slot": "item-group",
        class: unref(cn)("group/item-group flex flex-col", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/ItemGroup.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ItemHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "item-header",
        class: unref(cn)("flex basis-full items-center justify-between gap-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/ItemHeader.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ItemMedia",
  __ssrInlineRender: true,
  props: {
    class: {},
    variant: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "item-media",
        "data-variant": props.variant,
        class: unref(cn)(unref(itemMediaVariants)({ variant: __props.variant }), props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/ItemMedia.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps({ "data-slot": "separator-root" }, unref(delegatedProps), {
        class: unref(cn)(
          "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/separator/Separator.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ItemSeparator",
  __ssrInlineRender: true,
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$b), mergeProps({
        "data-slot": "item-separator",
        orientation: "horizontal",
        class: unref(cn)("my-0", props.class)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/ItemSeparator.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ItemTitle",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "item-title",
        class: unref(cn)("flex w-fit items-center gap-2 text-sm leading-snug font-medium", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/item/ItemTitle.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const itemVariants = cva(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-1",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { open })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/collapsible/Collapsible.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleContent), mergeProps(props, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/collapsible/CollapsibleContent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleTrigger), mergeProps(props, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/collapsible/CollapsibleTrigger.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "NavigationMobile",
  __ssrInlineRender: true,
  props: {
    items: Object
  },
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = _sfc_main$q;
      const _component_DrawerTrigger = DrawerTrigger;
      const _component_Button = _sfc_main$C;
      const _component_DrawerContent = _sfc_main$o;
      const _component_DrawerHeader = _sfc_main$l;
      const _component_DrawerTitle = _sfc_main$k;
      const _component_DrawerDescription = _sfc_main$n;
      const _component_Item = _sfc_main$j;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ItemContent = _sfc_main$h;
      const _component_ItemHeader = _sfc_main$d;
      const _component_ItemActions = _sfc_main$i;
      const _component_Collapsible = _sfc_main$8;
      const _component_CollapsibleTrigger = _sfc_main$6;
      const _component_CollapsibleContent = _sfc_main$7;
      const _component_Separator = _sfc_main$b;
      _push(ssrRenderComponent(_component_Drawer, _attrs, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DrawerTrigger, { "as-child": "" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    size: "icon",
                    variant: "outline",
                    class: "xl:hidden",
                    "aria-label": "toggle mobile navigation"
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Menu), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Menu))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      size: "icon",
                      variant: "outline",
                      class: "xl:hidden",
                      "aria-label": "toggle mobile navigation"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Menu))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DrawerContent, null, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DrawerHeader, { class: "sr-only" }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DrawerTitle, null, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Main Navigation`);
                            } else {
                              return [
                                createTextVNode("Main Navigation")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DrawerDescription, null, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Navigate through the website using the main navigation`);
                            } else {
                              return [
                                createTextVNode("Navigate through the website using the main navigation")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DrawerTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Main Navigation")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DrawerDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Navigate through the website using the main navigation")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<nav class="px-4 pb-4"${_scopeId2}><ul${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.items, (item) => {
                    _push3(`<li${_scopeId2}>`);
                    if (!item.children || item.children.length === 0) {
                      _push3(ssrRenderComponent(_component_Item, { "as-child": "" }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: item.link.linktype === "story" ? item.link.story.url : item.link.url,
                              target: item.link.target
                            }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_ItemContent, null, {
                                    default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_ItemHeader, null, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item.label ? item.label : item.link.story.name)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_ItemHeader, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_ItemActions, null, {
                                    default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(ChevronRight), { class: "h-4 w-4" }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_ItemContent, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_ItemHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_ItemActions, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_NuxtLink, {
                                to: item.link.linktype === "story" ? item.link.story.url : item.link.url,
                                target: item.link.target
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ItemContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_ItemHeader, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_ItemActions, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["to", "target"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_Collapsible, {
                        open: unref(isOpen),
                        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
                      }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_CollapsibleTrigger, { "as-child": "" }, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Button, { class: "w-full justify-between p-0 h-auto cursor-pointer bg-transparent hover:bg-accent/50 text-primary font-normal" }, {
                                    default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_Item, { class: "p-4 w-full" }, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_ItemContent, null, {
                                                default: withCtx((_8, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_ItemHeader, null, {
                                                      default: withCtx((_9, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item.label ? item.label : item.link.story.name)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_ItemHeader, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_ItemActions, null, {
                                                default: withCtx((_8, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    if (!unref(isOpen)) {
                                                      _push8(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent8, _scopeId7));
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                    if (unref(isOpen)) {
                                                      _push8(ssrRenderComponent(unref(Minus), { class: "h-4 w-4" }, null, _parent8, _scopeId7));
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                  } else {
                                                    return [
                                                      !unref(isOpen) ? (openBlock(), createBlock(unref(Plus), {
                                                        key: 0,
                                                        class: "h-4 w-4"
                                                      })) : createCommentVNode("", true),
                                                      unref(isOpen) ? (openBlock(), createBlock(unref(Minus), {
                                                        key: 1,
                                                        class: "h-4 w-4"
                                                      })) : createCommentVNode("", true)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_ItemContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_ItemHeader, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_ItemActions, null, {
                                                  default: withCtx(() => [
                                                    !unref(isOpen) ? (openBlock(), createBlock(unref(Plus), {
                                                      key: 0,
                                                      class: "h-4 w-4"
                                                    })) : createCommentVNode("", true),
                                                    unref(isOpen) ? (openBlock(), createBlock(unref(Minus), {
                                                      key: 1,
                                                      class: "h-4 w-4"
                                                    })) : createCommentVNode("", true)
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_Item, { class: "p-4 w-full" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_ItemContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_ItemHeader, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_ItemActions, null, {
                                                default: withCtx(() => [
                                                  !unref(isOpen) ? (openBlock(), createBlock(unref(Plus), {
                                                    key: 0,
                                                    class: "h-4 w-4"
                                                  })) : createCommentVNode("", true),
                                                  unref(isOpen) ? (openBlock(), createBlock(unref(Minus), {
                                                    key: 1,
                                                    class: "h-4 w-4"
                                                  })) : createCommentVNode("", true)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Button, { class: "w-full justify-between p-0 h-auto cursor-pointer bg-transparent hover:bg-accent/50 text-primary font-normal" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Item, { class: "p-4 w-full" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ItemContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_ItemHeader, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_ItemActions, null, {
                                              default: withCtx(() => [
                                                !unref(isOpen) ? (openBlock(), createBlock(unref(Plus), {
                                                  key: 0,
                                                  class: "h-4 w-4"
                                                })) : createCommentVNode("", true),
                                                unref(isOpen) ? (openBlock(), createBlock(unref(Minus), {
                                                  key: 1,
                                                  class: "h-4 w-4"
                                                })) : createCommentVNode("", true)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_CollapsibleContent, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<ul${_scopeId4}><!--[-->`);
                                  ssrRenderList(item.children, (child) => {
                                    _push5(`<li${_scopeId4}>`);
                                    _push5(ssrRenderComponent(_component_Item, { "as-child": "" }, {
                                      default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(_component_NuxtLink, {
                                            to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                            target: child.link.target,
                                            class: "text-xs ml-4"
                                          }, {
                                            default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(_component_ItemContent, null, {
                                                  default: withCtx((_8, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(ssrRenderComponent(_component_ItemHeader, null, {
                                                        default: withCtx((_9, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(`${ssrInterpolate(child.label ? child.label : child.link.story.name)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                    } else {
                                                      return [
                                                        createVNode(_component_ItemHeader, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                                _push7(ssrRenderComponent(_component_ItemActions, null, {
                                                  default: withCtx((_8, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(ssrRenderComponent(unref(ChevronRight), { class: "h-4 w-4" }, null, _parent8, _scopeId7));
                                                    } else {
                                                      return [
                                                        createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(_component_ItemContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_ItemHeader, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_ItemActions, null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(_component_NuxtLink, {
                                              to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                              target: child.link.target,
                                              class: "text-xs ml-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ItemContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_ItemHeader, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_ItemActions, null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "target"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(`</li>`);
                                  });
                                  _push5(`<!--]--></ul>`);
                                } else {
                                  return [
                                    createVNode("ul", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                        return openBlock(), createBlock("li", null, [
                                          createVNode(_component_Item, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_NuxtLink, {
                                                to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                                target: child.link.target,
                                                class: "text-xs ml-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_ItemContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_ItemHeader, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_ItemActions, null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1032, ["to", "target"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]);
                                      }), 256))
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { class: "w-full justify-between p-0 h-auto cursor-pointer bg-transparent hover:bg-accent/50 text-primary font-normal" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Item, { class: "p-4 w-full" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ItemContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_ItemHeader, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_ItemActions, null, {
                                            default: withCtx(() => [
                                              !unref(isOpen) ? (openBlock(), createBlock(unref(Plus), {
                                                key: 0,
                                                class: "h-4 w-4"
                                              })) : createCommentVNode("", true),
                                              unref(isOpen) ? (openBlock(), createBlock(unref(Minus), {
                                                key: 1,
                                                class: "h-4 w-4"
                                              })) : createCommentVNode("", true)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_CollapsibleContent, null, {
                                default: withCtx(() => [
                                  createVNode("ul", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                      return openBlock(), createBlock("li", null, [
                                        createVNode(_component_Item, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                              target: child.link.target,
                                              class: "text-xs ml-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ItemContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_ItemHeader, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_ItemActions, null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "target"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]);
                                    }), 256))
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`</li>`);
                  });
                  _push3(`<!--]--></ul>`);
                  _push3(ssrRenderComponent(_component_Separator, { class: "my-4" }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    "as-child": "",
                    class: "w-full"
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Post an offer`);
                            } else {
                              return [
                                createTextVNode("Post an offer")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode("Post an offer")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    "as-child": "",
                    variant: "secondary",
                    class: "w-full"
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, { to: "/signin" }, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LogIn), null, null, _parent5, _scopeId4));
                              _push5(` Sign In`);
                            } else {
                              return [
                                createVNode(unref(LogIn)),
                                createTextVNode(" Sign In")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, { to: "/signin" }, {
                            default: withCtx(() => [
                              createVNode(unref(LogIn)),
                              createTextVNode(" Sign In")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></nav>`);
                } else {
                  return [
                    createVNode(_component_DrawerHeader, { class: "sr-only" }, {
                      default: withCtx(() => [
                        createVNode(_component_DrawerTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Main Navigation")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DrawerDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Navigate through the website using the main navigation")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("nav", { class: "px-4 pb-4" }, [
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                          return openBlock(), createBlock("li", null, [
                            !item.children || item.children.length === 0 ? (openBlock(), createBlock(_component_Item, {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: item.link.linktype === "story" ? item.link.story.url : item.link.url,
                                  target: item.link.target
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ItemContent, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_ItemHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_ItemActions, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["to", "target"])
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(_component_Collapsible, {
                              key: 1,
                              open: unref(isOpen),
                              "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, { class: "w-full justify-between p-0 h-auto cursor-pointer bg-transparent hover:bg-accent/50 text-primary font-normal" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Item, { class: "p-4 w-full" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_ItemContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_ItemHeader, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_ItemActions, null, {
                                              default: withCtx(() => [
                                                !unref(isOpen) ? (openBlock(), createBlock(unref(Plus), {
                                                  key: 0,
                                                  class: "h-4 w-4"
                                                })) : createCommentVNode("", true),
                                                unref(isOpen) ? (openBlock(), createBlock(unref(Minus), {
                                                  key: 1,
                                                  class: "h-4 w-4"
                                                })) : createCommentVNode("", true)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_CollapsibleContent, null, {
                                  default: withCtx(() => [
                                    createVNode("ul", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                        return openBlock(), createBlock("li", null, [
                                          createVNode(_component_Item, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_NuxtLink, {
                                                to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                                target: child.link.target,
                                                class: "text-xs ml-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_ItemContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_ItemHeader, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_ItemActions, null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1032, ["to", "target"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]);
                                      }), 256))
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["open", "onUpdate:open"]))
                          ]);
                        }), 256))
                      ]),
                      createVNode(_component_Separator, { class: "my-4" }),
                      createVNode("div", { class: "flex flex-col gap-2" }, [
                        createVNode(_component_Button, {
                          "as-child": "",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, { to: "/" }, {
                              default: withCtx(() => [
                                createTextVNode("Post an offer")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, {
                          "as-child": "",
                          variant: "secondary",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, { to: "/signin" }, {
                              default: withCtx(() => [
                                createVNode(unref(LogIn)),
                                createTextVNode(" Sign In")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DrawerTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    size: "icon",
                    variant: "outline",
                    class: "xl:hidden",
                    "aria-label": "toggle mobile navigation"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Menu))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DrawerContent, null, {
                default: withCtx(() => [
                  createVNode(_component_DrawerHeader, { class: "sr-only" }, {
                    default: withCtx(() => [
                      createVNode(_component_DrawerTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Main Navigation")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DrawerDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Navigate through the website using the main navigation")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("nav", { class: "px-4 pb-4" }, [
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                        return openBlock(), createBlock("li", null, [
                          !item.children || item.children.length === 0 ? (openBlock(), createBlock(_component_Item, {
                            key: 0,
                            "as-child": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: item.link.linktype === "story" ? item.link.story.url : item.link.url,
                                target: item.link.target
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ItemContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_ItemHeader, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_ItemActions, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["to", "target"])
                            ]),
                            _: 2
                          }, 1024)) : (openBlock(), createBlock(_component_Collapsible, {
                            key: 1,
                            open: unref(isOpen),
                            "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { class: "w-full justify-between p-0 h-auto cursor-pointer bg-transparent hover:bg-accent/50 text-primary font-normal" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Item, { class: "p-4 w-full" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_ItemContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_ItemHeader, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.label ? item.label : item.link.story.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_ItemActions, null, {
                                            default: withCtx(() => [
                                              !unref(isOpen) ? (openBlock(), createBlock(unref(Plus), {
                                                key: 0,
                                                class: "h-4 w-4"
                                              })) : createCommentVNode("", true),
                                              unref(isOpen) ? (openBlock(), createBlock(unref(Minus), {
                                                key: 1,
                                                class: "h-4 w-4"
                                              })) : createCommentVNode("", true)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_CollapsibleContent, null, {
                                default: withCtx(() => [
                                  createVNode("ul", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                      return openBlock(), createBlock("li", null, [
                                        createVNode(_component_Item, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              to: child.link.linktype === "story" ? child.link.story.url : child.link.url,
                                              target: child.link.target,
                                              class: "text-xs ml-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_ItemContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_ItemHeader, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(child.label ? child.label : child.link.story.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_ItemActions, null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "target"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]);
                                    }), 256))
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["open", "onUpdate:open"]))
                        ]);
                      }), 256))
                    ]),
                    createVNode(_component_Separator, { class: "my-4" }),
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode(_component_Button, {
                        "as-child": "",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode("Post an offer")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Button, {
                        "as-child": "",
                        variant: "secondary",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: "/signin" }, {
                            default: withCtx(() => [
                              createVNode(unref(LogIn)),
                              createTextVNode(" Sign In")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/Mobile.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    config: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Skeleton = _sfc_main$A;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NavigationDesktop = _sfc_main$r;
      const _component_NavigationMobile = _sfc_main$5;
      const _component_Button = _sfc_main$C;
      _push(`<header${ssrRenderAttrs(mergeProps({
        role: "banner",
        class: "header px-4 lg:px-8 py-2 border-b border-accent"
      }, _attrs))}><div class="header-content flex w-full h-full items-center justify-between">`);
      if (!__props.config) {
        _push(ssrRenderComponent(_component_Skeleton, { class: "w-[250px] h-6" }, null, _parent));
      } else {
        _push(`<!--[-->`);
        if (!__props.config.app_logo.filename) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/",
            class: "text-lg font-semibold"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.config.app_title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.config.app_title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", __props.config.app_logo.filename)} alt="" class="h-12"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: __props.config.app_logo.filename,
                    alt: "",
                    class: "h-12"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`<!--]-->`);
      }
      if (__props.config?.nav_main) {
        _push(ssrRenderComponent(_component_NavigationDesktop, {
          items: __props.config.nav_main
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="header-content--right flex gap-2">`);
      if (__props.config.nav_main) {
        _push(ssrRenderComponent(_component_NavigationMobile, {
          items: __props.config.nav_main
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Button, {
        "as-child": "",
        class: "hidden xl:inline-flex"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Post an offer`);
                } else {
                  return [
                    createTextVNode("Post an offer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, { to: "/" }, {
                default: withCtx(() => [
                  createTextVNode("Post an offer")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        "as-child": "",
        class: "hidden xl:inline-flex",
        variant: "secondary"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/signin" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(LogIn), null, null, _parent3, _scopeId2));
                  _push3(` Sign In`);
                } else {
                  return [
                    createVNode(unref(LogIn)),
                    createTextVNode(" Sign In")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, { to: "/signin" }, {
                default: withCtx(() => [
                  createVNode(unref(LogIn)),
                  createTextVNode(" Sign In")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  props: {
    config: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$C;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        role: "contentinfo",
        class: "header py-4 border-t border-accent"
      }, _attrs))} data-v-6c620d4e><div class="container flex flex-col gap-2 lg:flex-row-reverse lg:justify-between items-center" data-v-6c620d4e><div class="flex" data-v-6c620d4e>`);
      if (__props.config?.facebook.url) {
        _push(ssrRenderComponent(_component_Button, {
          "as-child": "",
          size: "icon",
          variant: "ghost"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a${ssrRenderAttr("href", __props.config.facebook.url)}${ssrRenderAttr("target", __props.config.facebook.target)} data-v-6c620d4e${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Facebook), null, null, _parent2, _scopeId));
              _push2(`</a>`);
            } else {
              return [
                createVNode("a", {
                  href: __props.config.facebook.url,
                  target: __props.config.facebook.target
                }, [
                  createVNode(unref(Facebook))
                ], 8, ["href", "target"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.config?.instagram.url) {
        _push(ssrRenderComponent(_component_Button, {
          "as-child": "",
          size: "icon",
          variant: "ghost"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a${ssrRenderAttr("href", __props.config.instagram.url)}${ssrRenderAttr("target", __props.config.instagram.target)} data-v-6c620d4e${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Instagram), null, null, _parent2, _scopeId));
              _push2(`</a>`);
            } else {
              return [
                createVNode("a", {
                  href: __props.config.instagram.url,
                  target: __props.config.instagram.target
                }, [
                  createVNode(unref(Instagram))
                ], 8, ["href", "target"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-balance text-center md:text-left leading-loose text-sm text-muted-foreground" data-v-6c620d4e> Built with <a href="https://shadcn-vue.com/" target="_blank" data-v-6c620d4e>shadcn</a> and <a href="https://nuxt.com/" target="_blank" data-v-6c620d4e>Nuxt3</a>. Code available on <a href="https://github.com/elliotcln/storyblok-nuxt-root" target="_blank" data-v-6c620d4e>Github</a>. Created by <a href="https://alty.studio" target="_blank" data-v-6c620d4e>Alty Studio</a>. </p></div></footer>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6c620d4e"]]);
const stableStringify = (obj) => {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = sortedKeys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
  return JSON.stringify(sortedObj);
};
async function useAsyncStoryblok(url, options) {
  const storyblokApiInstance = st();
  const { api, bridge, ...rest } = options;
  const uniqueKey = `${stableStringify(api)}${url}`;
  const result = await useAsyncData(uniqueKey, () => storyblokApiInstance.get(`cdn/stories/${url}`, api), rest);
  return {
    data: result.data,
    pending: result.pending,
    error: result.error,
    refresh: result.refresh,
    execute: result.execute,
    clear: result.clear,
    story: computed(() => result.data.value?.data.story)
  };
}
const useConfigStore = defineStore("config", {
  state: () => ({
    config: useLocalStorage("config", null)
  }),
  getters: {
    getConfig(state) {
      return state.config;
    }
  },
  actions: {
    setConfig(newConfig) {
      this.config = useLocalStorage("config", newConfig);
    },
    async fetchConfig() {
      const result = ref();
      useLocalStorage("config");
      await useAsyncStoryblok("config", {
        api: {
          version: "draft",
          resolve_links: "url"
        }
      }).then(({ story }) => {
        console.log("fetched config from Storyblok:", story?.value?.content);
        useLocalStorage("config", story?.value?.content);
        result.value = story?.value?.content;
      });
      return result;
    }
  }
});
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const configStore = useConfigStore();
    const config = ref();
    [__temp, __restore] = withAsyncContext(() => configStore.fetchConfig().then((result) => {
      console.log("result", result?.value);
      configStore.setConfig(result?.value?.content);
      config.value = result?.value;
      console.log("config.value", config?.value);
    })), await __temp, __restore();
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${config?.value?.app_title}` : config?.value?.app_title;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkipLinks = _sfc_main$B;
      const _component_AppHeader = _sfc_main$4;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_AppFooter = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SkipLinks, null, null, _parent));
      _push(ssrRenderComponent(_component_AppHeader, { config: unref(config) }, null, _parent));
      _push(`<main id="main">`);
      _push(ssrRenderComponent(_component_NuxtPage, {
        class: [
          "page",
          unref(route).path === "/" ? "page--index" : "page--" + unref(route).path.substring(1)
        ]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, { config: unref(config) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-CvKZnnIS.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-Dz4aCjaJ.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, __nuxt_component_0 as a, useRoute as b, useAsyncStoryblok as c, useSeoMeta as d, entry_default as default, _sfc_main$C as e, useAppConfig as f, useNuxtApp as g, useRuntimeConfig as h, useAsyncData as i, useHead as u };
//# sourceMappingURL=server.mjs.map
