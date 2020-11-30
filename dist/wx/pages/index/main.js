require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([1],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_29f29fbb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(47);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_29f29fbb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29f29fbb", Component.options)
  } else {
    hotAPI.reload("data-v-29f29fbb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_shebao_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_gjj_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_arealist_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qqmap_wx_jssdk_js__ = __webpack_require__(31);
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








var qqmapsdk = void 0;

var shebao2text = {
  '养老保险金': 'yanglao',
  '医疗保险金': 'yiliao',
  '失业保险金': 'shiye'
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: {},
      city: '杭州市',
      realCity: '杭州市',
      showCitySelector: false,
      locationFail: false,
      noInfo: false,
      salary: '',
      special: '',
      gjjRatio: 12,
      gjjRatioList: {
        province_list: {
          110000: '12%',
          120000: '11%',
          130000: '10%',
          140000: '9%',
          150000: '8%',
          160000: '7%',
          170000: '6%',
          180000: '5%',
          190000: '4%',
          200000: '3%',
          210000: '2%',
          220000: '1%',
          230000: '0%'
        }
      },
      showGjjSelector: false,
      showResult: false,
      detail: __WEBPACK_IMPORTED_MODULE_4__store_js__["a" /* default */].state.detail,
      areaList: __WEBPACK_IMPORTED_MODULE_2__utils_arealist_js__["a" /* default */],
      gettinglocation: false
    };
  },


  components: {},

  methods: {
    getLocation: function getLocation() {
      var _this = this;

      this.gettinglocation = true;
      // 获取用户当前地址
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function success(res) {
              _this.locationFail = false;
              _this.city = res.result.address_component.city;
              // this.city = '哈尔滨市'
              if (!__WEBPACK_IMPORTED_MODULE_1__utils_gjj_js__["a" /* default */][_this.city]) {
                wx.showModal({
                  title: '\u6CA1\u6709\u627E\u5230\u5F53\u524D\u57CE\u5E02' + _this.city + '\u7684\u793E\u4FDD\u4FE1\u606F',
                  content: '\u5C06\u9ED8\u8BA4\u4F7F\u7528' + _this.realCity + '\u793E\u4FDD\u6570\u636E\u8FDB\u884C\u8BA1\u7B97'
                });
                _this.noInfo = true;
                _this.realCity = '杭州市';
              } else {
                _this.realCity = _this.city;
              }
              _this.gettinglocation = false;
            },
            fail: function fail(res) {
              _this.gettinglocation = false;
              _this.locationFail = true;
            }
          });
        },
        fail: function fail(res) {
          _this.gettinglocation = false;
          _this.locationFail = true;
          _this.realCity = '杭州市';
        }
      });
    },
    handleShowResult: function handleShowResult() {
      this.showResult = true;
      // 只有当用户点击马上计算时，上报工资数据，其他数据不要
      // 上报用户税前工资和当前选择城市数据
      wx.reportAnalytics('input_salary', {
        salary: this.salary,
        realcity: this.realCity
      });
      this.calCulateSalary();
    },
    calCulShebao: function calCulShebao() {
      var salary = Number(this.salary);
      var del = 0;
      var base = 0;
      var amount = 0;
      var baseAmount = 0;
      var detail = __WEBPACK_IMPORTED_MODULE_0__utils_shebao_js__["a" /* default */][this.realCity];
      this.detail.realCity = this.realCity;
      // 依次扣除三险一金
      for (var key in __WEBPACK_IMPORTED_MODULE_0__utils_shebao_js__["a" /* default */][this.realCity]) {
        base = __WEBPACK_IMPORTED_MODULE_0__utils_shebao_js__["a" /* default */][this.realCity][key];
        if (this.salary <= base.min) {
          baseAmount = base.min;
        } else if (this.salary >= base.max) {
          baseAmount = base.max;
        } else {
          baseAmount = salary;
        }
        amount = baseAmount * base.ratio / 100;
        del += amount;
        this.detail.shebaoBase.amount = baseAmount;
        this.detail.shebaoAmount[shebao2text[key]] = {
          desc: key,
          amount: amount.toFixed(2) + ' (' + base.ratio + '%)'
        };
      }
      this.detail.shebaoAmount.amount = del.toFixed(2);
      // 获取当地城市详细社保基数信息
      this.detail.shebaoDetail = {
        min: detail['养老保险金'].min,
        max: detail['养老保险金'].max,
        ratio: {
          yanglao: {
            desc: '养老保险金',
            amount: detail['养老保险金'].ratio
          },
          yiliao: {
            desc: '医疗保险金',
            amount: detail['医疗保险金'].ratio
          },
          shiye: {
            desc: '失业保险金',
            amount: detail['失业保险金'].ratio
          }
        }
      };

      return del;
    },
    calCulGjj: function calCulGjj() {
      var salary = Number(this.salary);
      var del = 0;
      var base = 0;
      base = __WEBPACK_IMPORTED_MODULE_1__utils_gjj_js__["a" /* default */][this.realCity];
      this.detail.gjjDetail = {
        min: base.min,
        max: base.max,
        ratio: this.gjjRatio
      };
      if (this.salary <= base.min) {
        del += base.min * this.gjjRatio / 100;
        this.detail.gjjBase.amount = base.min;
      } else if (this.salary >= base.max) {
        del += base.max * this.gjjRatio / 100;
        this.detail.gjjBase.amount = base.max;
      } else {
        del += salary * this.gjjRatio / 100;
        this.detail.gjjBase.amount = salary;
      }
      this.detail.gjjAmount.amount = del.toFixed(2);
      return del;
    },
    calCulateSalary: function calCulateSalary() {
      var shebaogongjijin = 0;
      shebaogongjijin += this.calCulShebao();
      shebaogongjijin += this.calCulGjj();
      var salaryAfterStartSpecial = 0;
      var tax = 0;
      var salaryShouldTax = this.salary - shebaogongjijin;
      // 起征点为5000，计算专项扣除，按月结税
      salaryAfterStartSpecial = salaryShouldTax - 5000 - Number(this.special);
      this.detail.special.amount = Number(this.special);
      this.detail.salaryShouldTax.amount = salaryShouldTax.toFixed(2);
      tax = __WEBPACK_IMPORTED_MODULE_3__utils_index_js__["a" /* calTaxByRatio */](salaryAfterStartSpecial, 'tax5000ByMonth');
      this.detail.tax.amount = Number(tax);
      this.detail.salaryAfter.amount = (this.salary - shebaogongjijin - tax).toFixed(2);
      __WEBPACK_IMPORTED_MODULE_4__store_js__["a" /* default */].commit('updateDetail', this.detail);
      // 展示计算结果
      this.onShowResult();
    },
    changeCity: function changeCity(e) {
      var values = e.mp.detail.values;
      this.realCity = values[1].name;
      this.showCitySelector = false;
      this.calCulateSalary();
    },
    onCityClose: function onCityClose() {
      this.showCitySelector = false;
    },
    onGjjClose: function onGjjClose() {
      this.showGjjSelector = false;
    },
    onGjjSelect: function onGjjSelect(e) {
      var values = e.mp.detail.values;
      this.gjjRatio = Number(values[0].name.replace('%', ''));
      this.showGjjSelector = false;
      this.calCulateSalary();
    },
    onShowResult: function onShowResult() {
      var _this2 = this;

      if (this.salary > 0) {
        this.showResult = false;
        setTimeout(function () {
          _this2.showResult = true;
        }, 500);
      }
    },
    openedSetting: function openedSetting() {
      // 获取用户地理定位
      this.getLocation();
    }
  },

  created: function created() {
    // 初始化腾讯底图组件
    qqmapsdk = new __WEBPACK_IMPORTED_MODULE_5__qqmap_wx_jssdk_js__["a" /* default */]({
      key: '2J4BZ-3XZCO-X67WY-SGCZW-OEVHV-HSBZX'
    });
    // 设置右上角转发功能
    wx.showShareMenu();
  },
  mounted: function mounted() {
    // 获取用户地理定位
    this.getLocation();
  },

  computed: {
    salaryAfter: function salaryAfter() {
      return this.detail.salaryAfter.amount;
    }
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  '杭州市': {
    '养老保险金': {
      min: 3054.95,
      max: 15274.74,
      ratio: 8
    },
    '医疗保险金': {
      min: 3054.95,
      max: 15274.74,
      ratio: 2
    },
    '失业保险金': {
      min: 3054.95,
      max: 15274.74,
      ratio: 0.5
    }
  },
  '北京市': {
    '养老保险金': {
      min: 5080,
      max: 25401,
      ratio: 8
    },
    '医疗保险金': {
      min: 5080,
      max: 25401,
      ratio: 2
    },
    '失业保险金': {
      min: 5080,
      max: 25401,
      ratio: 0.2
    }
  },
  '上海市': {
    '养老保险金': {
      min: 4279,
      max: 21396,
      ratio: 8
    },
    '医疗保险金': {
      min: 4279,
      max: 21396,
      ratio: 2
    },
    '失业保险金': {
      min: 4279,
      max: 21396,
      ratio: 0.5
    }
  },
  '广州市': {
    '养老保险金': {
      min: 2100,
      max: 24654,
      ratio: 8
    },
    '医疗保险金': {
      min: 2100,
      max: 24654,
      ratio: 2
    },
    '失业保险金': {
      min: 2100,
      max: 24654,
      ratio: 0.2
    }
  },
  '深圳市': {
    '养老保险金': {
      min: 2200,
      max: 25044,
      ratio: 8
    },
    '医疗保险金': {
      min: 2200,
      max: 25044,
      ratio: 2
    },
    '失业保险金': {
      min: 2200,
      max: 25044,
      ratio: 0.5
    }
  },
  '成都市': {
    '养老保险金': {
      min: 3067,
      max: 15333,
      ratio: 8
    },
    '医疗保险金': {
      min: 3067,
      max: 15333,
      ratio: 2
    },
    '失业保险金': {
      min: 3067,
      max: 15333,
      ratio: 0.4
    }
  },
  '南京市': {
    '养老保险金': {
      min: 3030,
      max: 19935,
      ratio: 8
    },
    '医疗保险金': {
      min: 3030,
      max: 19935,
      ratio: 2
    },
    '失业保险金': {
      min: 3030,
      max: 19935,
      ratio: 0.5
    }
  },
  '武汉市': {
    '养老保险金': {
      min: 3399.6,
      max: 19920.9,
      ratio: 8
    },
    '医疗保险金': {
      min: 3399.6,
      max: 19920.9,
      ratio: 2
    },
    '失业保险金': {
      min: 3399.6,
      max: 19920.9,
      ratio: 0.3
    }
  },
  '天津市': {
    '养老保险金': {
      min: 3364,
      max: 16821,
      ratio: 8
    },
    '医疗保险金': {
      min: 3364,
      max: 16821,
      ratio: 2
    },
    '失业保险金': {
      min: 3364,
      max: 16821,
      ratio: 0.5
    }
  },
  '西安市': {
    '养老保险金': {
      min: 3889,
      max: 19443,
      ratio: 8
    },
    '医疗保险金': {
      min: 3889,
      max: 19443,
      ratio: 2
    },
    '失业保险金': {
      min: 3889,
      max: 19443,
      ratio: 0.3
    }
  },
  '重庆市': {
    '养老保险金': {
      min: 3664,
      max: 18318,
      ratio: 8
    },
    '医疗保险金': {
      min: 3664,
      max: 18318,
      ratio: 2
    },
    '失业保险金': {
      min: 3664,
      max: 18318,
      ratio: 0.5
    }
  },
  // 弱二线城市，佛山市、苏州市、太原市、贵阳市、郑州市
  '佛山市': {
    '养老保险金': {
      min: 2906,
      max: 18318,
      ratio: 8
    },
    '医疗保险金': {
      min: 2906,
      max: 18318,
      ratio: 1.5
    },
    '失业保险金': {
      min: 2906,
      max: 18318,
      ratio: 0.2
    }
  },
  '苏州市': {
    '养老保险金': {
      min: 2802,
      max: 19613,
      ratio: 8
    },
    '医疗保险金': {
      min: 2802,
      max: 19613,
      ratio: 2
    },
    '失业保险金': {
      min: 2802,
      max: 19613,
      ratio: 0.5
    }
  },
  '太原市': {
    '养老保险金': {
      min: 3024,
      max: 13744,
      ratio: 8
    },
    '医疗保险金': {
      min: 3024,
      max: 13744,
      ratio: 2
    },
    '失业保险金': {
      min: 3024,
      max: 13744,
      ratio: 0.3
    }
  },
  '郑州市': {
    '养老保险金': {
      min: 3057.45,
      max: 15287.25,
      ratio: 8
    },
    '医疗保险金': {
      min: 3057.45,
      max: 15287.25,
      ratio: 2
    },
    '失业保险金': {
      min: 3057.45,
      max: 15287.25,
      ratio: 0.3
    }
  },
  '东莞市': {
    '养老保险金': {
      min: 2906,
      max: 14412,
      ratio: 8
    },
    '医疗保险金': {
      min: 2906,
      max: 14412,
      ratio: 0.5
    },
    '失业保险金': {
      min: 2906,
      max: 14412,
      ratio: 0.2
    }
  }
});

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  '杭州市': {
    min: 2010,
    max: 24311,
    ratio: 12
  },
  '北京市': {
    min: 2273,
    max: 25401,
    ratio: 12
  },
  '上海市': {
    min: 2300,
    max: 21400,
    ratio: 7
  },
  '广州市': {
    min: 2100,
    max: 24654,
    ratio: 5
  },
  '深圳市': {
    min: 2130,
    max: 25044,
    ratio: 5
  },
  // '成都、杭州、南京、武汉、天津、西安、重庆'
  '成都市': {
    min: 1500,
    max: 20972,
    ratio: 6
  },
  '南京市': {
    min: 2020,
    max: 25300,
    ratio: 8
  },
  '武汉市': {
    min: 1750,
    max: 29881.25,
    ratio: 8
  },
  '天津市': {
    min: 2050,
    max: 24240,
    ratio: 11
  },
  '西安市': {
    min: 1680,
    max: 19443,
    ratio: 5
  },
  '重庆市': {
    min: 1500,
    max: 18318,
    ratio: 7
  },
  // 弱二线城市，佛山市、苏州市、太原市、郑州市、东莞市
  '佛山市': {
    min: 1510,
    max: 18178,
    ratio: 5
  },
  '苏州市': {
    min: 2802,
    max: 20000,
    ratio: 8
  },
  '太原市': {
    min: 1625,
    max: 16206,
    ratio: 7
  },
  '郑州市': {
    min: 3057,
    max: 15287,
    ratio: 10
  },
  '东莞市': {
    min: 1720,
    max: 22995,
    ratio: 10
  }
});

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  province_list: {
    110000: '北京市',
    120000: '上海市',
    130000: '广东省',
    140000: '深圳市',
    150000: '天津市',
    160000: '重庆市',
    170000: '浙江省',
    180000: '江苏省',
    190000: '四川省',
    200000: '陕西省',
    210000: '湖北省',
    220000: '河南省',
    230000: '山西省'
  },
  city_list: {
    110100: '北京市',
    120100: '上海市',
    130100: '广州市',
    130200: '佛山市',
    130300: '东莞市',
    140100: '深圳市',
    150100: '天津市',
    160100: '重庆市',
    170100: '杭州市',
    180100: '南京市',
    180200: '苏州市',
    190100: '成都市',
    200100: '西安市',
    210100: '武汉市',
    220100: '郑州市',
    230100: '太原市'
  },
  county_list: {}
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);


/**
 * 微信小程序JavaScriptSDK
 *
 * @version 1.0
 * @date 2017-01-10
 * @author jaysonzhou@tencent.com
 */

var ERROR_CONF = {
  KEY_ERR: 311,
  KEY_ERR_MSG: 'key格式错误',
  PARAM_ERR: 310,
  PARAM_ERR_MSG: '请求参数信息有误',
  SYSTEM_ERR: 600,
  SYSTEM_ERR_MSG: '系统错误',
  WX_ERR_CODE: 1000,
  WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = BASE_URL + 'place/v1/search';
var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
var URL_CITY_LIST = BASE_URL + 'district/v1/list';
var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
var URL_DISTANCE = BASE_URL + 'distance/v1/';
var Utils = {
  /**
     * 得到终点query字符串
     * @param {Array|String} 检索数据
     */
  location2query: function location2query(data) {
    if (typeof data === 'string') {
      return data;
    }
    var query = '';
    for (var i = 0; i < data.length; i++) {
      var d = data[i];
      if (query) {
        query += ';';
      }
      if (d.location) {
        query = query + d.location.lat + ',' + d.location.lng;
      }
      if (d.latitude && d.longitude) {
        query = query + d.latitude + ',' + d.longitude;
      }
    }
    return query;
  },


  /**
     * 使用微信接口进行定位
     */
  getWXLocation: function getWXLocation(success, fail, complete) {
    wx.getLocation({
      type: 'gcj02',
      success: success,
      fail: fail,
      complete: complete
    });
  },


  /**
     * 获取location参数
     */
  getLocationParam: function getLocationParam(location) {
    if (typeof location === 'string') {
      var locationArr = location.split(',');
      if (locationArr.length === 2) {
        location = {
          latitude: location.split(',')[0],
          longitude: location.split(',')[1]
        };
      } else {
        location = {};
      }
    }
    return location;
  },


  /**
     * 回调函数默认处理
     */
  polyfillParam: function polyfillParam(param) {
    param.success = param.success || function () {};
    param.fail = param.fail || function () {};
    param.complete = param.complete || function () {};
  },


  /**
     * 验证param对应的key值是否为空
     *
     * @param {Object} param 接口参数
     * @param {String} key 对应参数的key
     */
  checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {
    if (!param[key]) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return true;
    }
    return false;
  },


  /**
     * 验证参数中是否存在检索词keyword
     *
     * @param {Object} param 接口参数
     */
  checkKeyword: function checkKeyword(param) {
    return !this.checkParamKeyEmpty(param, 'keyword');
  },


  /**
     * 验证location值
     *
     * @param {Object} param 接口参数
     */
  checkLocation: function checkLocation(param) {
    var location = this.getLocationParam(param.location);
    if (!location || !location.latitude || !location.longitude) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return false;
    }
    return true;
  },


  /**
     * 构造错误数据结构
     * @param {Number} errCode 错误码
     * @param {Number} errMsg 错误描述
     */
  buildErrorConfig: function buildErrorConfig(errCode, errMsg) {
    return {
      status: errCode,
      message: errMsg
    };
  },


  /**
     * 构造微信请求参数，公共属性处理
     *
     * @param {Object} param 接口参数
     * @param {Object} param 配置项
     */
  buildWxRequestConfig: function buildWxRequestConfig(param, options) {
    var that = this;
    options.header = { 'content-type': 'application/json' };
    options.method = 'GET';
    options.success = function (res) {
      var data = res.data;
      if (data.status === 0) {
        param.success(data);
      } else {
        param.fail(data);
      }
    };
    options.fail = function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, result.errMsg));
    };
    options.complete = function (res) {
      var statusCode = +res.statusCode;
      switch (statusCode) {
        case ERROR_CONF.WX_ERR_CODE:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            break;
          }
        case ERROR_CONF.WX_OK_CODE:
          {
            var data = res.data;
            if (data.status === 0) {
              param.complete(data);
            } else {
              param.complete(that.buildErrorConfig(data.status, data.message));
            }
            break;
          }
        default:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
          }
      }
    };
    return options;
  },


  /**
     * 处理用户参数是否传入坐标进行不同的处理
     */
  locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {
    var that = this;
    locationfail = locationfail || function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };
    locationcomplete = locationcomplete || function (res) {
      if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
      }
    };
    if (!param.location) {
      that.getWXLocation(locationsuccess, locationfail, locationcomplete);
    } else if (that.checkLocation(param)) {
      var location = Utils.getLocationParam(param.location);
      locationsuccess(location);
    }
  }
};

var QQMapWX = function () {
  /**
     * 构造函数
     *
     * @param {Object} options 接口参数,key 为必选参数
     */
  function QQMapWX(options) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, QQMapWX);

    if (!options.key) {
      throw Error('key值不能为空');
    }
    this.key = options.key;
  }

  /**
     * POI周边检索
     *
     * @param {Object} options 接口参数对象
     *
     * 参数对象结构可以参考
     * @see http://lbs.qq.com/webservice_v1/guide-search.html
     */


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(QQMapWX, [{
    key: 'search',
    value: function search(options) {
      var that = this;
      options = options || {};

      Utils.polyfillParam(options);

      if (!Utils.checkKeyword(options)) {
        return;
      }

      var requestParam = {
        keyword: options.keyword,
        orderby: options.orderby || '_distance',
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        output: 'json',
        key: that.key
      };

      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }

      if (options.filter) {
        requestParam.filter = options.filter;
      }

      var distance = options.distance || '1000';
      var auto_extend = options.auto_extend || 1;

      var locationsuccess = function locationsuccess(result) {
        requestParam.boundary = 'nearby(' + result.latitude + ',' + result.longitude + ',' + distance + ',' + auto_extend + ')';
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SEARCH,
          data: requestParam
        }));
      };
      Utils.locationProcess(options, locationsuccess);
    }

    /**
       * sug模糊检索
       *
       * @param {Object} options 接口参数对象
       *
       * 参数对象结构可以参考
       * http://lbs.qq.com/webservice_v1/guide-suggestion.html
       */

  }, {
    key: 'getSuggestion',
    value: function getSuggestion(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (!Utils.checkKeyword(options)) {
        return;
      }

      var requestParam = {
        keyword: options.keyword,
        region: options.region || '全国',
        region_fix: options.region_fix || 0,
        policy: options.policy || 0,
        output: 'json',
        key: that.key
      };
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_SUGGESTION,
        data: requestParam
      }));
    }

    /**
       * 逆地址解析
       *
       * @param {Object} options 接口参数对象
       *
       * 请求参数结构可以参考
       * http://lbs.qq.com/webservice_v1/guide-gcoder.html
       */

  }, {
    key: 'reverseGeocoder',
    value: function reverseGeocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        coord_type: options.coord_type || 5,
        get_poi: options.get_poi || 0,
        output: 'json',
        key: that.key
      };
      if (options.poi_options) {
        requestParam.poi_options = options.poi_options;
      }

      var locationsuccess = function locationsuccess(result) {
        requestParam.location = result.latitude + ',' + result.longitude;
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_GET_GEOCODER,
          data: requestParam
        }));
      };
      Utils.locationProcess(options, locationsuccess);
    }

    /**
       * 地址解析
       *
       * @param {Object} options 接口参数对象
       *
       * 请求参数结构可以参考
       * http://lbs.qq.com/webservice_v1/guide-geocoder.html
       */

  }, {
    key: 'geocoder',
    value: function geocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'address')) {
        return;
      }

      var requestParam = {
        address: options.address,
        output: 'json',
        key: that.key
      };

      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_GET_GEOCODER,
        data: requestParam
      }));
    }

    /**
       * 获取城市列表
       *
       * @param {Object} options 接口参数对象
       *
       * 请求参数结构可以参考
       * http://lbs.qq.com/webservice_v1/guide-region.html
       */

  }, {
    key: 'getCityList',
    value: function getCityList(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        output: 'json',
        key: that.key
      };

      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_CITY_LIST,
        data: requestParam
      }));
    }

    /**
       * 获取对应城市ID的区县列表
       *
       * @param {Object} options 接口参数对象
       *
       * 请求参数结构可以参考
       * http://lbs.qq.com/webservice_v1/guide-region.html
       */

  }, {
    key: 'getDistrictByCityId',
    value: function getDistrictByCityId(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'id')) {
        return;
      }

      var requestParam = {
        id: options.id || '',
        output: 'json',
        key: that.key
      };

      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_AREA_LIST,
        data: requestParam
      }));
    }

    /**
       * 用于单起点到多终点的路线距离(非直线距离)计算：
       * 支持两种距离计算方式：步行和驾车。
       * 起点到终点最大限制直线距离10公里。
       *
       * @param {Object} options 接口参数对象
       *
       * 请求参数结构可以参考
       * http://lbs.qq.com/webservice_v1/guide-distance.html
       */

  }, {
    key: 'calculateDistance',
    value: function calculateDistance(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }

      var requestParam = {
        mode: options.mode || 'walking',
        to: Utils.location2query(options.to),
        output: 'json',
        key: that.key
      };

      var locationsuccess = function locationsuccess(result) {
        requestParam.from = result.latitude + ',' + result.longitude;
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_DISTANCE,
          data: requestParam
        }));
      };
      if (options.from) {
        options.location = options.from;
      }

      Utils.locationProcess(options, locationsuccess);
    }
  }]);

  return QQMapWX;
}();

/* harmony default export */ __webpack_exports__["a"] = (QQMapWX);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-page"
  }, [_c('div', {
    staticClass: "index-page__header"
  }, [_c('p', {
    staticClass: "index-page__header-time"
  }, [_vm._v("2019年1月1日起")]), _vm._v(" "), _c('div', {
    staticClass: "index-page__header-content"
  }, [_vm._v("\n      六大专项扣除\n      "), _c('div', {
    staticClass: "index-page__header-content-tips"
  }, [_vm._v("\n        新"), _c('br'), _vm._v("增\n      ")], 1)]), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "index-page__header-cal"
  }, [_vm._v("算算，每月工资多了多少钱？")])], 1), _vm._v(" "), _c('div', {
    staticClass: "index-page__content"
  }, [_c('div', {
    staticClass: "index-page__content-location"
  }, [_c('div', {
    staticClass: "index-page__content-location-select",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showCitySelector = true
      }
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "location-o",
      "size": "16px",
      "color": "#3C73FF",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "index-page__content-location-select__city"
  }, [_vm._v(_vm._s(_vm.realCity))])], 1), _vm._v(" "), (_vm.locationFail) ? _c('div', {
    staticStyle: {
      "color": "#999",
      "position": "relative"
    }
  }, [_c('span', [_vm._v("获取地理位置失败，请开启位置授权")]), _vm._v(" "), _c('button', {
    staticClass: "index-page__content-location__button",
    attrs: {
      "open-type": "openSetting",
      "eventid": '1'
    },
    on: {
      "opensetting": _vm.openedSetting
    }
  }, [_vm._v("打开授权页")])], 1) : (_vm.noInfo) ? _c('div', {
    staticStyle: {
      "color": "#999",
      "font-size": "12px"
    }
  }, [_vm._v("\n        没有找到当前城市 \n        "), _c('span', {
    staticStyle: {
      "color": "#333",
      "font-weight": "bold"
    }
  }, [_vm._v(_vm._s(_vm.city))]), _vm._v(" \n        的社保信息，将按照\n        "), _c('span', {
    staticStyle: {
      "color": "#333",
      "font-weight": "bold"
    }
  }, [_vm._v("杭州")]), _vm._v(" \n        标准进行计算\n      ")]) : (_vm.gettinglocation) ? _c('div', [_vm._v("\n          获取地理位置中...\n      ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "index-page__content-list"
  }, [_c('div', {
    staticClass: "index-page__content-list-title"
  }, [_vm._v("\n        税前收入(元)\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "index-page__content-list-input-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.salary),
      expression: "salary"
    }],
    staticClass: "index-page__content-list-input",
    attrs: {
      "type": "number",
      "placeholder": "0.00",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.salary)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.salary = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "index-page__content-list"
  }, [_c('div', {
    staticClass: "index-page__content-list-title"
  }, [_vm._v("\n        专项扣除(元)\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "index-page__content-list-input-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.special),
      expression: "special"
    }],
    staticClass: "index-page__content-list-input",
    attrs: {
      "type": "number",
      "placeholder": "0.00",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.special)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.special = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "index-page__content-button",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.handleShowResult
    }
  }, [_vm._v("\n      马上计算\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "index-page__content-gjj"
  }, [_c('van-cell', {
    attrs: {
      "title": "公积金比例",
      "value": _vm.gjjRatio + '%',
      "border": false,
      "is-link": "",
      "eventid": '5',
      "mpcomid": '1'
    },
    on: {
      "click": function($event) {
        _vm.showGjjSelector = true
      }
    }
  })], 1), _vm._v(" "), _c('van-transition', {
    attrs: {
      "show": _vm.showResult,
      "name": "fade",
      "mpcomid": '3'
    }
  }, [(_vm.showResult) ? _c('div', {
    staticClass: "index-page__content-result"
  }, [_c('div', {
    staticClass: "index-page__content-result__title"
  }, [_c('span', [_vm._v("税后薪资")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "../detail/main"
    }
  }, [_c('span', {
    staticClass: "index-page__content-result__detail"
  }, [_vm._v("查看详情")]), _vm._v(" "), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "size": "14px",
      "color": "#3C73FF",
      "mpcomid": '2'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "index-page__content-result__desc"
  }, [_vm._v("2019.1.1新税法")]), _vm._v(" "), _c('div', {
    staticClass: "index-page__content-result__amount"
  }, [_vm._v("\n          " + _vm._s(_vm.salaryAfter) + "\n        ")])]) : _vm._e()])], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showGjjSelector,
      "position": "bottom",
      "eventid": '7',
      "mpcomid": '5'
    },
    on: {
      "close": _vm.onGjjClose
    }
  }, [_c('van-area', {
    attrs: {
      "area-list": _vm.gjjRatioList,
      "title": "选择公积金缴存比例",
      "columns-num": "1",
      "value": "110000",
      "eventid": '6',
      "mpcomid": '4'
    },
    on: {
      "cancel": function($event) {
        _vm.showGjjSelector = false
      },
      "confirm": _vm.onGjjSelect
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showCitySelector,
      "position": "bottom",
      "eventid": '9',
      "mpcomid": '7'
    },
    on: {
      "close": _vm.onCityClose
    }
  }, [_c('van-area', {
    attrs: {
      "area-list": _vm.areaList,
      "title": "目前仅支持下列城市",
      "columns-num": "2",
      "value": "110100",
      "eventid": '8',
      "mpcomid": '6'
    },
    on: {
      "cancel": function($event) {
        _vm.showCitySelector = false
      },
      "confirm": _vm.changeCity
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "index-page__footer"
  }), _vm._v(" "), _c('div', {
    staticClass: "index-page__contact-button"
  }, [_c('contact-button', {
    attrs: {
      "type": "default-light",
      "size": "20",
      "session-from": "weapp"
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-29f29fbb", esExports)
  }
}

/***/ })

},[23]);
//# sourceMappingURL=main.js.map