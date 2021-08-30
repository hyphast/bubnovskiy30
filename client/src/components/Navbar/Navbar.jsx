import React from 'react';
import {Layout, Menu} from 'antd';
import classnames from 'classnames';
import {DesktopOutlined, FileOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import NavbarProfileInfo from './NavbarProfileInfo/NavbarProfileInfo';
import NavbarStyles from './Navbar.module.scss';

const {Sider} = Layout;

const Navbar = (props) => {
    return (
        <Sider trigger={null}>
            <div className={classnames('logo', NavbarStyles.navbar)}/>
                <NavbarProfileInfo {...props}/>
            <Menu theme="light" defaultSelectedKeys={'1'} mode="inline">
                <Menu.Item key="1" icon={<UserOutlined/>}>
                    <Link to='/profile'>Профиль</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<FileOutlined/>}>
                    <Link to='/new-appointment'>Запись</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<DesktopOutlined/>}>
                    <Link to='/records'>Мои записи</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Navbar;