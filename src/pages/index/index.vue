<template>
<div class="index-page">
  <div class="index-page__header">
    <p class="index-page__header-time">2019年1月1日起</p>
    <div class="index-page__header-content">
      六大专项扣除
      <div class="index-page__header-content-tips">
        新<br />增
      </div>
    </div><br />
    <p class="index-page__header-cal">算算，每月工资多了多少钱？</p>
  </div>
  <div class="index-page__content">
    <div class="index-page__content-location">
      <div class="index-page__content-location-select"
        @click="showCitySelector=true">
        <van-icon name="location-o" size="16px" color="#3C73FF"/>
        <span class="index-page__content-location-select__city">{{ realCity }}</span>
      </div>
      <div v-if="locationFail" style="color: #999; position: relative;">
        <span>获取地理位置失败，请开启位置授权</span>
        <button open-type="openSetting" 
          @opensetting="openedSetting"
          class="index-page__content-location__button">打开授权页</button>
      </div>
      <div v-else-if="noInfo" style="color: #999; font-size: 12px;">
        没有找到当前城市 
        <span style="color:#333;font-weight:bold">{{ city }}</span> 
        的社保信息，将按照
        <span style="color:#333;font-weight:bold">杭州</span> 
        标准进行计算
      </div>
      <div v-else-if="gettinglocation">
          获取地理位置中...
      </div>
    </div>
    <div class="index-page__content-list">
      <div class="index-page__content-list-title">
        税前收入(元)
      </div>
      <div class="index-page__content-list-input-wrapper">
      <input type="number" class="index-page__content-list-input"
        placeholder="0.00"
        v-model="salary"/>
      </div>
    </div>
    <div class="index-page__content-list">
      <div class="index-page__content-list-title">
        专项扣除(元)
      </div>
      <div class="index-page__content-list-input-wrapper">
        <input type="number" class="index-page__content-list-input"
          placeholder="0.00"
          v-model="special"/>
      </div>
    </div>
    <div class="index-page__content-button"
      @click="handleShowResult">
      马上计算
    </div>
    <div class="index-page__content-gjj">
      <van-cell
        title="公积金比例"
        :value="gjjRatio+'%'"
        :border="false"
        is-link
        @click="showGjjSelector=true"
      />
    </div>
    <van-transition :show="showResult" name="fade">
      <div class="index-page__content-result" v-if="showResult">
        <div class="index-page__content-result__title">
          <span>税后薪资</span>
          <a href="../detail/main">
            <span class="index-page__content-result__detail">查看详情</span> 
            <van-icon name="arrow" size="14px" color="#3C73FF"/>
          </a>
        </div>
        <div class="index-page__content-result__desc">2019.1.1新税法</div>
        <div class="index-page__content-result__amount">
          {{ salaryAfter }}
        </div>
      </div>
    </van-transition>
  </div>
  <van-popup :show="showGjjSelector" @close="onGjjClose"
    position="bottom">
    <van-area :area-list="gjjRatioList"
      title="选择公积金缴存比例"
      columns-num="1"
      value="110000"
      @cancel="showGjjSelector = false"
      @confirm="onGjjSelect"/>
  </van-popup>
  <van-popup :show="showCitySelector" @close="onCityClose"
    position="bottom">
    <van-area :area-list="areaList"
      title="目前仅支持下列城市"
      columns-num="2"
      value="110100"
      @cancel="showCitySelector = false"
      @confirm="changeCity"/>
  </van-popup>
  <div class="index-page__footer">
  </div>
  <div class="index-page__contact-button">
    <contact-button 
      type="default-light" 
      size="20"
      session-from="weapp">
    </contact-button>
  </div>
</div>
</template>

<script>
import shebao from '@/utils/shebao.js'
import gjj from '@/utils/gjj.js'
import areaList from '@/utils/arealist.js'
import * as util from '@/utils/index.js'
import store from '@/store.js'
import QQMapWX from '@/qqmap-wx-jssdk.js'

let qqmapsdk

const shebao2text = {
  '养老保险金': 'yanglao',
  '医疗保险金': 'yiliao',
  '失业保险金': 'shiye'
}

export default {
  data () {
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
      detail: store.state.detail,
      areaList,
      gettinglocation: false
    }
  },

  components: {
  },

  methods: {
    getLocation () {
      this.gettinglocation = true
      // 获取用户当前地址
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: (res) => {
              this.locationFail = false
              this.city = res.result.address_component.city
              // this.city = '哈尔滨市'
              if (!gjj[this.city]) {
                wx.showModal({
                  title: `没有找到当前城市${this.city}的社保信息`,
                  content: `将默认使用${this.realCity}社保数据进行计算`
                })
                this.noInfo = true
                this.realCity = '杭州市'
              } else {
                this.realCity = this.city
              }
              this.gettinglocation = false
            },
            fail: (res) => {
              this.gettinglocation = false
              this.locationFail = true
            }
          })
        },
        fail: (res) => {
          this.gettinglocation = false
          this.locationFail = true
          this.realCity = '杭州市'
        }
      })
    },
    handleShowResult () {
      this.showResult = true
      // 只有当用户点击马上计算时，上报工资数据，其他数据不要
      // 上报用户税前工资和当前选择城市数据
      wx.reportAnalytics('input_salary', {
        salary: this.salary,
        realcity: this.realCity
      })
      this.calCulateSalary()
    },
    calCulShebao () {
      const salary = Number(this.salary)
      let del = 0
      let base = 0
      let amount = 0
      let baseAmount = 0
      const detail = shebao[this.realCity]
      this.detail.realCity = this.realCity
      // 依次扣除三险一金
      for (let key in shebao[this.realCity]) {
        base = shebao[this.realCity][key]
        if (this.salary <= base.min) {
          baseAmount = base.min
        } else if (this.salary >= base.max) {
          baseAmount = base.max
        } else {
          baseAmount = salary
        }
        amount = baseAmount * base.ratio / 100
        del += amount
        this.detail.shebaoBase.amount = baseAmount
        this.detail.shebaoAmount[shebao2text[key]] = {
          desc: key,
          amount: `${amount.toFixed(2)} (${base.ratio}%)`
        }
      }
      this.detail.shebaoAmount.amount = del.toFixed(2)
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
      }

      return del
    },
    calCulGjj () {
      const salary = Number(this.salary)
      let del = 0
      let base = 0
      base = gjj[this.realCity]
      this.detail.gjjDetail = {
        min: base.min,
        max: base.max,
        ratio: this.gjjRatio
      }
      if (this.salary <= base.min) {
        del += base.min * this.gjjRatio / 100
        this.detail.gjjBase.amount = base.min
      } else if (this.salary >= base.max) {
        del += base.max * this.gjjRatio / 100
        this.detail.gjjBase.amount = base.max
      } else {
        del += salary * this.gjjRatio / 100
        this.detail.gjjBase.amount = salary
      }
      this.detail.gjjAmount.amount = del.toFixed(2)
      return del
    },
    calCulateSalary () {
      let shebaogongjijin = 0
      shebaogongjijin += this.calCulShebao()
      shebaogongjijin += this.calCulGjj()
      let salaryAfterStartSpecial = 0
      let tax = 0
      const salaryShouldTax = this.salary - shebaogongjijin
      // 起征点为5000，计算专项扣除，按月结税
      salaryAfterStartSpecial = salaryShouldTax - 5000 - Number(this.special)
      this.detail.special.amount = Number(this.special)
      this.detail.salaryShouldTax.amount = salaryShouldTax.toFixed(2)
      tax = util.calTaxByRatio(salaryAfterStartSpecial, 'tax5000ByMonth')
      this.detail.tax.amount = Number(tax)
      this.detail.salaryAfter.amount = (this.salary - shebaogongjijin - tax).toFixed(2)
      store.commit('updateDetail', this.detail)
      // 展示计算结果
      this.onShowResult()
    },
    changeCity (e) {
      const values = e.mp.detail.values
      this.realCity = values[1].name
      this.showCitySelector = false
      this.calCulateSalary()
    },
    onCityClose () {
      this.showCitySelector = false
    },
    onGjjClose () {
      this.showGjjSelector = false
    },
    onGjjSelect (e) {
      const values = e.mp.detail.values
      this.gjjRatio = Number(values[0].name.replace('%', ''))
      this.showGjjSelector = false
      this.calCulateSalary()
    },
    onShowResult () {
      if (this.salary > 0) {
        this.showResult = false
        setTimeout(() => {
          this.showResult = true
        }, 500)
      }
    },
    openedSetting () {
      // 获取用户地理定位
      this.getLocation()
    }
  },

  created () {
    // 初始化腾讯底图组件
    qqmapsdk = new QQMapWX({
      key: '2J4BZ-3XZCO-X67WY-SGCZW-OEVHV-HSBZX'
    })
    // 设置右上角转发功能
    wx.showShareMenu()
  },
  mounted () {
    // 获取用户地理定位
    this.getLocation()
  },
  computed: {
    salaryAfter () {
      return this.detail.salaryAfter.amount
    }
  }
}
</script>

<style src="./index.scss" lang="scss">
</style>
