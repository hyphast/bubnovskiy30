import React from 'react'
import { Badge, Layout, Menu } from 'antd'
import classnames from 'classnames'
import {
  InboxOutlined,
  PlusCircleOutlined,
  UserOutlined,
  SettingFilled,
  AimOutlined,
} from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import NavbarProfileInfo from './NavbarProfileInfo/NavbarProfileInfo'
import NavbarStyles from './Navbar.module.scss'
import NavbarCss from './Navbar.scss'

const { Sider } = Layout

const Navbar = ({ isActivated, modifiedNumber, ...props }) => {
  const location = useLocation()
  return (
    <Sider trigger={null}>
      <div className={classnames('logo', NavbarStyles.navbar)}>
        <NavbarProfileInfo {...props} />
        <Menu theme="light" selectedKeys={[location.pathname]} mode="inline">
          <Menu.Item
            key="/profile"
            icon={<UserOutlined />}
            className="navbar-item"
          >
            <Link to="/profile">
              <Badge
                count={!isActivated ? 1 : 0}
                color="volcano"
                offset={[-10, 20]}
              >
                Профиль
              </Badge>
            </Link>
          </Menu.Item>
          <Menu.Item key="/new-appointment" icon={<PlusCircleOutlined />}>
            <Link to="/new-appointment">Услуги</Link>
          </Menu.Item>
          <Menu.Item
            key="/records"
            icon={<InboxOutlined />}
            className="navbar-item"
          >
            <Badge count={modifiedNumber} color="purple" offset={[-10, 20]}>
              <Link to="/records">Мои записи</Link>
            </Badge>
          </Menu.Item>
          <Menu.Item key="/settings" icon={<SettingFilled />}>
            <Link to="/settings">Настройки</Link>
          </Menu.Item>
          <Menu.Item key="/about-us" icon={<AimOutlined />}>
            <Link to="/about-us">О нас</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  )
}

export default Navbar
