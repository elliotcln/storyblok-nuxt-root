import { e as _sfc_main$C, a as __nuxt_component_0 } from './server.mjs';
import __nuxt_component_2 from './index-aSgfcAq2.mjs';
import { resolveDirective, mergeProps, withCtx, createBlock, openBlock, Fragment, createCommentVNode, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
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
import 'pinia';
import 'vue-router';
import 'unhead/scripts';
import '@iconify/vue';
import '@vueuse/core';
import 'class-variance-authority';
import 'reka-ui';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';
import 'vaul-vue';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';

const _sfc_main = {
  __name: "ButtonItem",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$C;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _directive_editable = resolveDirective("editable");
      if (__props.blok.link.linktype === "story" || __props.blok.link.linktype === "url") {
        _push(ssrRenderComponent(_component_Button, mergeProps({
          variant: __props.blok.variant,
          size: __props.blok.size,
          "as-child": ""
        }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: __props.blok.link.linktype === "story" ? __props.blok.link.story.url : __props.blok.link.url,
                target: __props.blok.link.target,
                "aria-label": __props.blok.link.hide_label ? __props.blok.label : null
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (__props.blok.icon && (__props.blok.size === "icon" || __props.blok.size === "icon-sm" || __props.blok.size === "icon-lg")) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: __props.blok.icon.icon
                      }, null, _parent3, _scopeId2));
                    } else if (__props.blok.icon) {
                      _push3(`<!--[-->`);
                      if (__props.blok.icon) {
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: __props.blok.icon.icon,
                          class: "inline mr-2"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(` ${ssrInterpolate(__props.blok.label ? __props.blok.label : __props.blok.link.story.name)}<!--]-->`);
                    } else {
                      _push3(`<!--[-->${ssrInterpolate(__props.blok.label ? __props.blok.label : __props.blok.link.story.name)}<!--]-->`);
                    }
                  } else {
                    return [
                      __props.blok.icon && (__props.blok.size === "icon" || __props.blok.size === "icon-sm" || __props.blok.size === "icon-lg") ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: __props.blok.icon.icon
                      }, null, 8, ["name"])) : __props.blok.icon ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                        __props.blok.icon ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: __props.blok.icon.icon,
                          class: "inline mr-2"
                        }, null, 8, ["name"])) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(__props.blok.label ? __props.blok.label : __props.blok.link.story.name), 1)
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createTextVNode(toDisplayString(__props.blok.label ? __props.blok.label : __props.blok.link.story.name), 1)
                      ], 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: __props.blok.link.linktype === "story" ? __props.blok.link.story.url : __props.blok.link.url,
                  target: __props.blok.link.target,
                  "aria-label": __props.blok.link.hide_label ? __props.blok.label : null
                }, {
                  default: withCtx(() => [
                    __props.blok.icon && (__props.blok.size === "icon" || __props.blok.size === "icon-sm" || __props.blok.size === "icon-lg") ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: __props.blok.icon.icon
                    }, null, 8, ["name"])) : __props.blok.icon ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      __props.blok.icon ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: __props.blok.icon.icon,
                        class: "inline mr-2"
                      }, null, 8, ["name"])) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(__props.blok.label ? __props.blok.label : __props.blok.link.story.name), 1)
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                      createTextVNode(toDisplayString(__props.blok.label ? __props.blok.label : __props.blok.link.story.name), 1)
                    ], 64))
                  ]),
                  _: 1
                }, 8, ["to", "target", "aria-label"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_Button, mergeProps({
          variant: __props.blok.variant,
          size: __props.blok.size
        }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.blok.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.blok.label), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/button-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=button-item-Bok5DjA7.mjs.map
