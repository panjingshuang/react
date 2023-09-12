import React, { useState, useEffect} from 'react'
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  deleteItem,
  addItem
} from '../../store/tabs/actions'
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

function Tab(props) {
  const [activeKey, setActiveKey] = useState(props.tabs[0].key)
  const navigator = useNavigate()
  const onChange = (key: string) => {
    setActiveKey(key);
    navigator(key)
  };
  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove')=>{
    if(action == 'remove') {
      props.deleteItem(targetKey)
      navigator(props.tabs[props.tabs.length - 1].key)
    }
  }
  useEffect(()=>{
    let item = props.tabs.find(item => item.active == true)
    setActiveKey(item.key)
  },[props.tabs])
  return (
    <>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        items={props.tabs}
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



