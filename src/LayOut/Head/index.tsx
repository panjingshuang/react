import React ,{useState}from 'react';
import { Layout, Button, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

export default function index(props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
    <Button
      type="text"
      icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={props.onClick}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
  </Header>)
}
