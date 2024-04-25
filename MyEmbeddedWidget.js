import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "MyEmbeddedWidget",
  props: {
    title: {
      type: String,
      default: "Mi Widget"
    },
    message: {
      type: String,
      default: "Hola desde mi widget!"
    }
  },
  mounted() {
    this.$emit("widget-ready", {
      title: this.title,
      message: this.message
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-embedded-widget" }, _attrs))} data-v-81f1e47b><h1 data-v-81f1e47b>${ssrInterpolate($props.title)}</h1><p data-v-81f1e47b>${ssrInterpolate($props.message)}</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MyEmbeddedWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyEmbeddedWidget = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-81f1e47b"]]);
export {
  MyEmbeddedWidget as default
};
