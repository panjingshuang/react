import React, { useState, useRef } from 'react'
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import {
  deleteItem,
  addItem
} from '../../store/tabs/actions'
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

function Tab(props) {
  console.log(props)
  const [activeKey, setActiveKey] = useState('1')
  const onChange = (key: string) => {
    setActiveKey(key);
  };
  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove')=>{
    if(action == 'remove') props.deleteItem(targetKey)
  }
  return (
    <>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={props.activeKey}
        type="editable-card"
        items={props.items}
        onEdit={onEdit}
      />
    </>
  )
}
// 这里还必须是funtion以及 return 对象数据的
export default connect(function (state: any) {
  return { tabs: state.tabsReducer };
},{
  deleteItem,
  addItem
})(Tab)



