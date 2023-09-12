
import {CONST_TABS} from '../const'
const tabs = [{label: '首页',key: '/MyChart'}]
export default function taskReducer(preState = tabs, action) {
  if (!preState) preState = tabs;
  const { type, data } = action;
  switch (type) {
    case CONST_TABS.DELETE_ITEM:
      if(preState.length <= 1) return preState
      let real_items = preState.filter(item => item.key !== data)
      return [...real_items];
    case CONST_TABS.ADD_ITEM:
      let add_item = preState.find(item => item.key == data.key)
      if(add_item) return preState
      preState.push(data)
      return [...preState];
    default:
      return preState;
  }
}