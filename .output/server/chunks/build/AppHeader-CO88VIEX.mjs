import { useSSRContext, mergeProps, defineComponent, ref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DncA_NI0.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app__bg-image" }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppBg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "AppBg" });
const _imports_0 = publicAssetsURL("/images/logo.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    menuActivePath: {}
  },
  setup(__props) {
    const isBurger = ref(false);
    const props = __props;
    const menuItems = [
      { path: "/", label: "Home" },
      { path: "/portfolio", label: "Portfolio" },
      { path: "/about", label: "About" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="header__body"><div class="header__body-inner container"><a class="header__logo logo" href="/" aria-label="Home" title="Home" draggable="false"><img class="logo__image"${ssrRenderAttr("src", _imports_0)} alt="" width="50" height="50" loading="lazy" draggable="false"><p class="h4">KonstBerg</p></a><div class="${ssrRenderClass([{ "is-active": isBurger.value }, "header__overlay"])}"><nav class="header__menu"><ul class="header__menu-list"><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(`<li class="header__menu-item">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.path,
          class: ["header__menu-link", {
            "is-active": item.path === props.menuActivePath
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "header__contact-us-link button button--accent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us `);
          } else {
            return [
              createTextVNode("Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="${ssrRenderClass([{ "is-active": isBurger.value }, "header__burger-button burger-button visible-mobile"])}" type="button" aria-label="Open menu" title="Open menu"><span class="burger-button__line"></span><span class="burger-button__line"></span><span class="burger-button__line"></span></button></div></div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "AppHeader" });

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=AppHeader-CO88VIEX.mjs.map
