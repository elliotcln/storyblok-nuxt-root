import { withAsyncContext, resolveComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { b as useRoute, c as useAsyncStoryblok, d as useSeoMeta } from './server.mjs';
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

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { slug } = useRoute().params;
    const { story } = ([__temp, __restore] = withAsyncContext(() => useAsyncStoryblok(slug === "" ? "index" : slug, {
      api: {
        version: "draft",
        resolve_links: "url"
        // cv: Date.now(),
      }
    })), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: () => story?.value?.content.seo[0].title,
      description: () => story?.value?.content.seo[0].description,
      ogImage: () => story?.value?.content.seo[0].image.filename
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      if (unref(story)) {
        _push(ssrRenderComponent(_component_StoryblokComponent, mergeProps({
          blok: unref(story).content
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-D1PrHv9y.mjs.map
