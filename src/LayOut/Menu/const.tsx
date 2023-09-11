
import React from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

export default  [{
  label: '首页',
  icon: <UploadOutlined/>,
  key:'/MyChart'
},{
  label: '统计',
  icon: <VideoCameraOutlined/>,
  key:'/Statistics'
},{
  label: '每月支出情况',
  icon: <UserOutlined/>,
  key:'/MonthExpenses'
}]