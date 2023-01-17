"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
    console.log("[from uniapp placeholder]");
    common_vendor.index.openLocation({
      longitude: 121.6,
      latitude: 24.9,
      success: this.openLocationSuccess
    });
  },
  methods: {
    openLocationSuccess() {
      common_vendor.index.navigateBack();
      console.log("[success uniapp navigateBack from onLoad placeholder]");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/work/demo/uniapp/uniapp-web-view/pages/placeholder/placeholder.vue"]]);
wx.createPage(MiniProgramPage);
