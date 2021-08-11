import React from 'react';
import {Layout, Menu} from 'antd';
import {DesktopOutlined, FileOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const {Sider} = Layout;

const Navbar = ({collapsed}) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" style={{}}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to='/'>Профиль</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FileOutlined />}>
          <Link to='/'>Записаться</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to='/records'>Записи</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;