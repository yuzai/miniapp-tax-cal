// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    detail: {
      shebaoAmount: {
        desc: '社保缴纳金额',
        amount: ''
      },
      shebaoBase: {
        desc: '社保缴纳基数',
        amount: ''
      },
      shebaoDetail: {
      },
      gjjDetail: {
      },
      gjjBase: {
        desc: '公积金缴纳基数',
        amount: ''
      },
      special: {
        desc: '专项扣除金额',
        amount: ''
      },
      gjjAmount: {
        desc: '公积金缴纳金额',
        amount: ''
      },
      salaryShouldTax: {
        desc: '应税薪资',
        amount: ''
      },
      tax: {
        desc: '个人所得税',
        amount: ''
      },
      salaryAfter: {
        desc: '税后薪资',
        amount: ''
      }
    }
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    updateDetail: (state, detail) => {
      state.detail = detail
    }
  }
})

export default store
