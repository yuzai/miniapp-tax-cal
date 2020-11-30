require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6e29699e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6e29699e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e29699e", Component.options)
  } else {
    hotAPI.reload("data-v-6e29699e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_vant_weapp_dist_dialog_dialog__ = __webpack_require__(21);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Use Vuex



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      detail: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.detail,
      base: {},
      showData: [
      // 'gjjBase',
      // 'shebaoAmount',
      // 'gjjAmount',
      'special', 'salaryShouldTax', 'tax', 'salaryAfter'],
      showShebao: ['yanglao', 'yiliao', 'shiye'],
      activeNames: []
    };
  },

  methods: {
    onChange: function onChange(e) {
      this.activeNames = e.mp.detail;
    },
    showBaseDetail: function showBaseDetail(type) {
      var title = type === 1 ? '社保' : '公积金';
      this.base = type === 1 ? this.detail.shebaoDetail : this.detail.gjjDetail;
      __WEBPACK_IMPORTED_MODULE_1__static_vant_weapp_dist_dialog_dialog__["a" /* default */].alert({
        title: title + '\u7F34\u7EB3\u57FA\u6570\u8BA1\u7B97\u89C4\u5219'
      }).then(function () {
        // on close
      });
    }
  }
});

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var queue = [];

function getContext() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}

var Dialog = function Dialog(options) {
  options = _extends({}, Dialog.currentOptions, options);
  return new Promise(function (resolve, reject) {
    var context = options.context || getContext();
    var dialog = context.selectComponent(options.selector);
    delete options.selector;

    if (dialog) {
      dialog.set(_extends({
        onCancel: reject,
        onConfirm: resolve
      }, options));
      queue.push(dialog);
    } else {
      console.warn('未找到 van-dialog 节点，请确认 selector 及 context 是否正确');
    }
  });
};

Dialog.defaultOptions = {
  show: true,
  title: '',
  message: '',
  zIndex: 100,
  overlay: true,
  asyncClose: false,
  messageAlign: '',
  transition: 'scale',
  selector: '#van-dialog',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
};
Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog(_extends({
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  queue.forEach(function (dialog) {
    dialog.close();
  });
  queue = [];
};

Dialog.stopLoading = function () {
  queue.forEach(function (dialog) {
    dialog.stopLoading();
  });
};

Dialog.setDefaultOptions = function (options) {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = _extends({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();
/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail-page__wrapper"
  }, [_c('div', {
    staticClass: "detail-page"
  }, [_c('div', {
    staticClass: "detail-page__title"
  }, [_vm._v("收入明细")]), _vm._v(" "), _c('div', {
    staticClass: "detail-page__subtitle"
  }, [_vm._v("结果仅供参考，具体以实际缴纳为准")]), _vm._v(" "), _c('div', {
    staticClass: "detail-page__cells"
  }, [_c('van-collapse', {
    attrs: {
      "value": _vm.activeNames,
      "accordion": true,
      "eventid": '2',
      "mpcomid": '6'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-collapse-item', {
    attrs: {
      "title": _vm.detail.shebaoAmount.desc,
      "value": _vm.detail.shebaoAmount.amount,
      "border": true,
      "mpcomid": '2'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": _vm.detail.shebaoBase.desc,
      "value": _vm.detail.shebaoBase.amount,
      "border": true,
      "icon": "info-o",
      "clickable": true,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showBaseDetail(1)
      }
    }
  }), _vm._v(" "), _vm._l((_vm.showShebao), function(key, index) {
    return _c('van-cell', {
      key: key,
      attrs: {
        "title": _vm.detail.shebaoAmount[key].desc,
        "value": _vm.detail.shebaoAmount[key].amount,
        "border": false,
        "mpcomid": '1-' + index
      }
    })
  })], 2), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": _vm.detail.gjjAmount.desc,
      "value": _vm.detail.gjjAmount.amount,
      "border": true,
      "mpcomid": '5'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": _vm.detail.gjjBase.desc,
      "value": _vm.detail.gjjBase.amount,
      "border": true,
      "icon": "info-o",
      "clickable": true,
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "click": function($event) {
        _vm.showBaseDetail(2)
      }
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "公积金缴纳比例",
      "value": _vm.detail.gjjDetail.ratio,
      "border": false,
      "mpcomid": '4'
    }
  })], 1)], 1), _vm._v(" "), _vm._l((_vm.showData), function(key, index) {
    return _c('van-cell', {
      key: key,
      attrs: {
        "title": _vm.detail[key].desc,
        "value": _vm.detail[key].amount,
        "border": false,
        "mpcomid": '7-' + index
      }
    })
  })], 2)]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "use-slot": true,
      "mpcomid": '8'
    }
  }, [_c('div', {
    staticClass: "detail-page__dialog-content"
  }, [_c('div', [_vm._v("每个城市都有最低缴纳标准和最高缴纳标准，缴纳基数计算规则如下：")]), _vm._v(" "), _c('div', [_vm._v("1. 如果薪资小于最低基数，则按照最低缴纳标准计算；")]), _vm._v(" "), _c('div', [_vm._v("2. 如果薪资大于最高基数，则按照最高缴纳标准计算；")]), _vm._v(" "), _c('div', [_vm._v("3. 否则，按照当前薪资进行计算；")]), _vm._v(" "), _c('div', {
    staticClass: "detail-page__dialog-content-tips"
  }, [_vm._v("\n        当前城市\n        "), _c('span', {
    staticClass: "detail-page__dialog-content-tips-highlight"
  }, [_vm._v(_vm._s(_vm.detail.realCity))]), _vm._v("，\n        最低缴纳基数\n        "), _c('span', {
    staticClass: "detail-page__dialog-content-tips-highlight"
  }, [_vm._v(_vm._s(_vm.base.min))]), _vm._v("，最高缴纳基数\n        "), _c('span', {
    staticClass: "detail-page__dialog-content-tips-highlight"
  }, [_vm._v(_vm._s(_vm.base.max))]), _vm._v("；\n        ")])])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e29699e", esExports)
  }
}

/***/ })
],[16]);
//# sourceMappingURL=main.js.map