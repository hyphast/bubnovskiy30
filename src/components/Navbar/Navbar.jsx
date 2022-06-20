import React, { useCallback, useEffect, useState } from 'react'
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
import styles from './Navbar.module.scss'

const { Sider } = Layout

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const Navbar = ({ isActivated, modifiedNumber, ...props }) => {
  const location = useLocation()

  const items = [
    getItem(
      <Link to="/profile">
        <Badge count={!isActivated ? 1 : 0} color="volcano" offset={[65, 20]}>
          Профиль
        </Badge>
      </Link>,
      '/profile',
      <UserOutlined />,
    ),
    getItem(
      <Link to="/new-appointment">Услуги</Link>,
      '/new-appointment',
      <PlusCircleOutlined />,
    ),
    getItem(
      <Link to="/records">
        <Badge count={modifiedNumber} color="purple" offset={[45, 20]}>
          Мои записи
        </Badge>
      </Link>,
      '/records',
      <InboxOutlined />,
    ),
    getItem(
      <Link to="/settings">Настройки</Link>,
      '/settings',
      <SettingFilled />,
    ),
    getItem(<Link to="/about-us">О нас</Link>, '/about-us', <AimOutlined />),
  ]

  return (
    <Sider trigger={null} theme="light">
      <div className={classnames('logo', styles.navbar)}>
        <NavbarProfileInfo {...props} />
        <Menu
          selectedKeys={[location.pathname]}
          mode="inline"
          theme="light"
          items={items}
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        />
      </div>
    </Sider>
  )
}

export default Navbar
