import React from 'react';
import { Menu } from 'antd';
import menus from './const'; 
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {addItem} from '../../store/tabs/actions'
function MyMenu(props) {
  const navigate = useNavigate();
  const handleClick = (item)=>{
    navigate(item.key)
    let ele = menus.find(e => e.key == item.key)
    props.addItem({
      label:ele.label,
      key: item.key
    })
  }
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={menus}
      onClick={handleClick}
    />
  ) 
}

export default connect(function (state: any){ 
  return {tabs: state.tabsReducer}
},{addItem})(MyMenu)
