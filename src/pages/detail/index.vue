<template>
  <div class="detail-page__wrapper">
    <div class="detail-page">
      <div class="detail-page__title">收入明细</div>
      <div class="detail-page__subtitle">结果仅供参考，具体以实际缴纳为准</div>
      <div class="detail-page__cells">
        <van-collapse :value="activeNames" @change="onChange" 
          :accordion="true">
          <van-collapse-item :title="detail.shebaoAmount.desc"
            :value="detail.shebaoAmount.amount"
            :border="true">
            <van-cell :title="detail.shebaoBase.desc"
              :value="detail.shebaoBase.amount"
              :border="true"
              icon="info-o"
              @click="showBaseDetail(1)"
              :clickable="true"
            />
            <van-cell v-for="key in showShebao"
              :title="detail.shebaoAmount[key].desc"
              :value="detail.shebaoAmount[key].amount"
              :key="key"
              :border="false"
              />
          </van-collapse-item>
          <van-collapse-item :title="detail.gjjAmount.desc"
            :value="detail.gjjAmount.amount"
            :border="true">
            <van-cell :title="detail.gjjBase.desc"
              :value="detail.gjjBase.amount"
              :border="true"
              icon="info-o"
              @click="showBaseDetail(2)"
              :clickable="true"
            />
            <van-cell title="公积金缴纳比例"
              :value="detail.gjjDetail.ratio"
              :border="false" 
            />
          </van-collapse-item>
        </van-collapse>
        <van-cell v-for="key in showData"
          :title="detail[key].desc"
          :value="detail[key].amount"
          :key="key"
          :border="false"
          />
      </div>
    </div>
    <van-dialog id="van-dialog" 
      :use-slot="true"
    >
      <div class="detail-page__dialog-content">
        <div >每个城市都有最低缴纳标准和最高缴纳标准，缴纳基数计算规则如下：</div>
        <div >1. 如果薪资小于最低基数，则按照最低缴纳标准计算；</div>
        <div >2. 如果薪资大于最高基数，则按照最高缴纳标准计算；</div>
        <div >3. 否则，按照当前薪资进行计算；</div>
        <div class="detail-page__dialog-content-tips">
          当前城市
          <span class="detail-page__dialog-content-tips-highlight">{{ detail.realCity }}</span>，
          最低缴纳基数
          <span class="detail-page__dialog-content-tips-highlight">{{ base.min }}</span>，最高缴纳基数
          <span class="detail-page__dialog-content-tips-highlight">{{ base.max }}</span>；
          </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
// Use Vuex
import store from '@/store'
import Dialog from '../../../static/vant-weapp/dist/dialog/dialog'

export default {
  data () {
    return {
      detail: store.state.detail,
      base: {
      },
      showData: [
        // 'gjjBase',
        // 'shebaoAmount',
        // 'gjjAmount',
        'special',
        'salaryShouldTax',
        'tax',
        'salaryAfter'
      ],
      showShebao: [
        'yanglao',
        'yiliao',
        'shiye'
      ],
      activeNames: []
    }
  },
  methods: {
    onChange (e) {
      this.activeNames = e.mp.detail
    },
    showBaseDetail (type) {
      const title = type === 1 ? '社保' : '公积金'
      this.base = type === 1 ? this.detail.shebaoDetail : this.detail.gjjDetail
      Dialog.alert({
        title: `${title}缴纳基数计算规则`
      }).then(() => {
        // on close
      })
    }
  }
}
</script>

<style src="./index.scss" lang="scss">
</style>
