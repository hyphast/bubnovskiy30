import React, {useEffect, useState} from 'react';
import {Breadcrumb, Layout, Menu} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useRoutes} from './routes';
import {isAuth} from './redux/reducers/authActions';
import './App.css';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(isAuth());
    }
  }, [dispatch]) // TODO добавил в зависимости dispatch


  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  }

  const routes = useRoutes(false); //TODO Захардкодил isAuthorized в true
  return (
    <Router>
      <Layout style={{height:"100vh"}} >
        <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={toggle}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" style={{}}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Профиль
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              Записаться
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Записи
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            Content
            {routes}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
