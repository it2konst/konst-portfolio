import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './AppHeader-CO88VIEX.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
import './nuxt-link-DncA_NI0.mjs';

const menuActivePath = "/about";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppBg = __nuxt_component_0;
      const _component_AppHeader = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppBg, null, null, _parent));
      _push(ssrRenderComponent(_component_AppHeader, { "menu-active-path": menuActivePath }, null, _parent));
      _push(`<main><section class="about container"><h1>About</h1><svg class="circle" viewBox="0 0 100 100"><path id="circle" d="M 0,50 a 50,50 0 1,1 0,1 z"></path><text><textPath xlink:href="#circle">Текст</textPath></text></svg></section></main><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-BfOUukKM.mjs.map
