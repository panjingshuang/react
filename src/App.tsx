import React ,{ FC } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteItem } from './store/menu/actions';
import { Button, FloatButton } from 'antd';
import {
  StepBackwardOutlined,
  SmileOutlined
} from '@ant-design/icons';
export const App: FC<{ name: string, menu: number,deleteItem: any }> = (props) => {
  const nav = useNavigate()
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      {props.menu}
      <p className="text-3xl font-bold underline">Start editing to see some magic happen :)</p>
      <button onClick={()=>{nav('/home')}}>跳转到app下的某个页面中</button>
      <button onClick={()=>{props.deleteItem(2)}}>点击更新数据</button>
       <Button type='dashed'>Primary Button</Button>
       <StepBackwardOutlined />
       <SmileOutlined rotate={180} />
      <FloatButton onClick={() => console.log('click')} />
    </div>
  );
};

export default connect(function (state: any) {
  return { menu: state.menuReducer };
},{deleteItem})(App);