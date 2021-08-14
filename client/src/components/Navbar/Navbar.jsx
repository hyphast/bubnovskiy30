import React from 'react';
import {Layout, Menu} from 'antd';
import classnames from 'classnames';
import {DesktopOutlined, FileOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import NavbarStyles from './Navbar.module.scss';

const {Sider} = Layout;

const Navbar = ({collapsed}) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={classnames('logo', NavbarStyles.navbar)}/>
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to='/'>Профиль</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileOutlined />}>
          <Link to='/new-appointment'>Запись</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          <Link to='/records'>Мои записи</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;