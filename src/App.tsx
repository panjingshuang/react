import React ,{useState}from 'react';
import { connect } from 'react-redux';
import { deleteItem } from './store/menu/actions';
import Menu from './Layout/Menu';
import Head from './Layout/Head';
import { Layout,  theme } from 'antd';
import Main from './component/Main';
import Tab from './component/Tab';

const { Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleClickbyCollapsed = ()=>{
    setCollapsed(!collapsed)
  }
  return (
    <Layout className='layout-main'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img src="./imgs/logo.png" alt="logo" className='w-7 ml-7'/>
        <Menu />
      </Sider>
      <Layout>
        <Head collapsed={collapsed} onClick={handleClickbyCollapsed}/>
        <Tab/>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Main/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App