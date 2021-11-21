import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import classnames from 'classnames';
import {InboxOutlined, PlusCircleOutlined, UserOutlined, SettingFilled} from '@ant-design/icons';
import {Link, useHistory, useLocation} from 'react-router-dom';
import NavbarProfileInfo from './NavbarProfileInfo/NavbarProfileInfo';
import NavbarStyles from './Navbar.module.scss';

const {Sider} = Layout;

const Navbar = (props) => {
  const location = useLocation();
  return (
      <Sider trigger={null}>
          <div className={classnames('logo', NavbarStyles.navbar)}>
              <NavbarProfileInfo {...props}/>
          <Menu theme='light' selectedKeys={[location.pathname]} mode="inline">
              <Menu.Item key='/profile' icon={<UserOutlined/>}>
                  <Link to='/profile'>Профиль</Link>
              </Menu.Item>
              <Menu.Item key='/new-appointment' icon={<PlusCircleOutlined/>}>
                  <Link to='/new-appointment'>Запись</Link>
              </Menu.Item>
              <Menu.Item key='/records' icon={<InboxOutlined/>}>
                  <Link to='/records'>Мои записи</Link>
              </Menu.Item>
              <Menu.Item key='/settings' icon={<SettingFilled/>}>
                  <Link to='/settings'>Настройки</Link>
              </Menu.Item>
          </Menu>
          </div>
      </Sider>
  );
};

export default Navbar;