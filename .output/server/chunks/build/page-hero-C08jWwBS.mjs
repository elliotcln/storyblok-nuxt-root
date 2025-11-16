import { resolveComponent, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "PageHero",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-hero py-12 pt-20 lg:pb-16 lg:pt-26 xl:pb-24 xl:pt-40" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="container"><div class="grid gap-4 xl:gap-8"><div><h1 class="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-normal">${ssrInterpolate(__props.blok.headline)}</h1><p class="text-accent-foreground/50">${ssrInterpolate(__props.blok.description)}</p></div><div class="flex gap-2"><!--[-->`);
      ssrRenderList(__props.blok.buttons, (currentBlok) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: currentBlok._uid,
          blok: currentBlok
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/page-hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-hero-C08jWwBS.mjs.map
