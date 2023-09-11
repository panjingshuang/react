import React from 'react';
import { Menu } from 'antd';
import menus from './const'; 
import { useNavigate } from 'react-router-dom';
export default function Index() {
  const navigate = useNavigate();
  const handleClick = (item)=>{
    navigate(item.key)
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
