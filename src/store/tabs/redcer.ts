
import {CONST_TABS} from '../const'
const tabs = [{label: '首页',key: '/MyChart',active: true}]
export default function taskReducer(preState = tabs, action) {
  if (!preState) preState = tabs;
  const { type, data } = action;
  switch (type) {
    case CONST_TABS.DELETE_ITEM:
      if(preState.length <= 1) return preState
      let real_items = preState.filter(item => { return item.key !== data})
      real_items.forEach((item,index) => {
        if(index == real_items.length -1){
          item.active = true
        }else{
          item.active = false
        }
      })
      return [...real_items];
    case CONST_TABS.ADD_ITEM:
      preState.forEach(item => item.active = false)
      let add_item = preState.find(item => item.key == data.key)
      if(add_item) {
        add_item.active = true
        return [...preState]
      }
      preState.push(data)
      return [...preState];
    default:
      return preState;
  }
}