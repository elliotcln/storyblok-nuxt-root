import { defineComponent, createElementBlock, openBlock, createElementVNode, createTextVNode, toDisplayString } from 'vue';

const m = { class: "fallback-component" }, _ = { class: "component" }, f = /* @__PURE__ */ defineComponent({
  __name: "FallbackComponent",
  props: {
    blok: {}
  },
  setup(t) {
    return (e, o) => (openBlock(), createElementBlock("div", m, [
      createElementVNode("p", null, [
        o[0] || (o[0] = createTextVNode(" Component could not be found for blok ", -1)),
        createElementVNode("span", _, toDisplayString(e.blok.component), 1),
        o[1] || (o[1] = createTextVNode("! Is it configured correctly? ", -1))
      ])
    ]));
  }
}), i = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [s, l] of e)
    o[s] = l;
  return o;
}, u = /* @__PURE__ */ i(f, [["__scopeId", "data-v-9abcd1f2"]]);

export { u as default };
//# sourceMappingURL=FallbackComponent-vpkAikkq-x6nCXSlS.mjs.map
