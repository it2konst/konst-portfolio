import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './AppHeader-CO88VIEX.mjs';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { defineComponent, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-DncA_NI0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(_attrs)}><section class="hero container" aria-labelledby="hero-title"><div class="hero__main"><div class="hero__body"><h1 class="hero__title" id="hero-title"> Frontend Developer | Building Modern, Responsive Web Solutions </h1><div class="hero__description"><p> Specializing in creating modern and functional websites using HTML, CSS, JavaScript, as well as working with React and Vue. </p></div></div></div></section></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/MainHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "MainHero" });
const menuActivePath = "/";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppBg = __nuxt_component_0;
      const _component_AppHeader = __nuxt_component_1;
      const _component_MainHero = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppBg, null, null, _parent));
      _push(ssrRenderComponent(_component_AppHeader, { "menu-active-path": menuActivePath }, null, _parent));
      _push(ssrRenderComponent(_component_MainHero, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BPswWIBw.mjs.map
