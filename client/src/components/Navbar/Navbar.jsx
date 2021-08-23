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
      <svg style={{width: '100px', color: '#644394', fontWeight: 500, lineHeight: 1.6, fontSize: '4rem'}} id="icon-logo" viewBox="0 0 70 71">
        <path d="M35 0C15.658 0 0 15.672 0 35.03c0 19.36 15.658 35.032 35 35.032S70 54.39 70 35.03C70 15.67 54.342 0 35 0zm.46 69.14c-17.346 0-31.469-13.982-31.469-31.497 0-17.516 14.123-31.344 31.47-31.344 17.346 0 31.469 14.136 31.469 31.498 0 17.361-14.123 31.343-31.47 31.343z"></path>
        <path d="M34.998 17.208c-11.513 0-20.877 18.745-20.877 30.422 0 11.676 9.364 21.202 20.877 21.202 11.513 0 20.878-9.525 20.878-21.202 0-11.677-9.365-30.422-20.878-30.422zm0 49.473c-1.381 0-2.302-1.075-2.302-2.458 0-1.383 1.074-2.458 2.302-2.458 1.382 0 2.303 1.075 2.303 2.458 0 1.383-1.075 2.458-2.303 2.458zm3.684-29.038c-.153 1.229-.46 2.304-.614 3.073-.46 1.536-.767 2.304-1.535 4.148-2.456 5.531-2.916 6.76-2.916 7.836 0 1.383.46 1.997 1.381 3.226.768 1.23 2.15 1.69 2.763 2.766.768 1.844-1.842 2.151-3.07 1.383-1.074-.769-2.456-1.844-3.223-2.766-1.689-2.304-1.689-5.531-.768-8.143.921-2.305 3.07-4.917 4.452-7.068 1.688-2.612 1.995-5.224 1.688-8.143-.153-1.383-.614-2.765-1.074-3.994-.614-1.537-1.689-2.92-1.382-3.842.154.154.154.308.46.769.615.921 1.996 2.15 2.917 4.302.307.921 1.228 3.38.921 6.453z"></path>
      </svg>
      <span style={{color: '#644394'}}>ЦЕТНР ДОКТОРА БУБНОВСКОГО</span>
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