import * as ratio from '@/utils/ratio.js'

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime
}

export function calTaxByRatio (salaryAfterStartSpecial, ratioName = 'tax5000ByMonth') {
  if (salaryAfterStartSpecial < 0) {
    return 0
  }
  let tax
  const myRatio = ratio[ratioName]
  for (let i = 0; i < myRatio.length; i++) {
    if (salaryAfterStartSpecial <= myRatio[i].max) {
      // 速算之后减去累计已缴纳税额
      tax = (salaryAfterStartSpecial * myRatio[i].ratio - myRatio[i].fast).toFixed(2)
      break
    }
  }
  return tax
}
