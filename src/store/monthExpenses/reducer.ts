import {CONST_MONTH_EXPENSES} from '../const'
import {
  changeListToObject
} from '../../utils'
const initState = [
  {
    key: 0,
    amount: "29",
    consume: "皮衣",
    amountType: "服装",
    payType: "ZFB",
    detail: "购买价值19元的皮衣",
    time: '18828'
  },
  {
    key: 1,
    amount: "29",
    consume: "皮衣",
    amountType: "服装",
    payType: "ZFB",
    detail: "购买价值19元的皮衣",
    time: '18828'
  }
];

export const PAY_TYPE = [
  { value: 'ZFB', label: '支付宝' },
  { value: 'YHC', label: '银行卡' },
  { value: 'WX', label: '微信' },
]

export const PAY_TYPE_OBJ = changeListToObject(PAY_TYPE)


export const PAY_TAG = {
  'ZFB': 'blue',
  'WX':'green',
  'YHC' : 'red'
}

export const AMOUNT_TYPE = [
  {value: 'PRODUCTION',label: '生产饮食'},
  {value: 'DAYLIFE',label: '生活饮食'},
  {value: 'TRAVEL',label: '交通出行'},
  {value: 'CLOTHING',label: '服装'},
  {value: 'COSMETICS',label: '化妆品护肤品洗漱用品'},
  {value: 'HOUSE',label: '房租等费用'},
  {value: 'OTHER',label: '其他'},
]

export const AMOUNT_TYPE_OBJ = changeListToObject(AMOUNT_TYPE)

export default function monthExpensesReducer(preState = initState, action) {
  if (!preState) preState = initState;
  const { type, data } = action;
  switch (type) {
    case CONST_MONTH_EXPENSES.DELETE_ITEM:
      if(!preState.find(item => item.key === data)) return preState
      preState = preState.filter(item => item.key !== data)
      return [...preState] ;
    case CONST_MONTH_EXPENSES.ADD_ITEM:
      let item = {
        key: preState.length,
        amount: '0',
        consume: "",
        amountType: "",
        payType: "",
        detail: "",
        time: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
      }
      preState.push(item)
      return [...preState] ;
    case CONST_MONTH_EXPENSES.EDIT_ITEM:
      let item_re = preState.find(item => item.key === data.key)
      Object.assign(item_re,data)
      return [...preState]
    default:
      return preState;
  }
}