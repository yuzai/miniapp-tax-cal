<template>
  <div class="detail-page__wrapper">
    <div class="detail-page">
      <div class="detail-page__title">收入明细</div>
      <div class="detail-page__subtitle">结果仅供参考，具体以实际缴纳为准</div>
      <div class="detail-page__cells">
        <van-cell v-for="key in showData"
          :title="detail[key].desc"
          :value="detail[key].amount"
          :key="key"
          :border="false"
          title-class="detail-page__cells-title"
          value-class="detail-page__cells-value"
          />
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from '@/store'

export default {
  data () {
    return {
      detail: store.state.detail,
      showData: [
        // 'gjjBase',
        'shebaoAmount',
        'gjjAmount',
        'special',
        'tax',
        'salaryAfter'
      ]
    }
  },
  methods: {
  }
}
</script>

<style src="./index.scss" lang="scss">
</style>
