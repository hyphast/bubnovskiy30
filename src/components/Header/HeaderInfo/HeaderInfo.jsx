import React, { useState } from 'react'
import { Avatar, Dropdown, Menu, Modal, Typography } from 'antd'
import { AndroidFilled, QrcodeOutlined, UserOutlined } from '@ant-design/icons'
import HeaderComponentStyles from '../HeaderComponent.module.scss'
import { Link } from 'react-router-dom'
import QrCodeImg from '../../../assets/images/qrcode.png'
import DownloadApp from '../../../assets/images/downloadApp.jpg'

const { Title } = Typography

const HeaderInfo = ({
  photoUrl,
  firstName,
  lastName,
  patronymic,
  phoneNumber,
  logout,
  isLoading,
}) => {
  const onLogout = () => {
    logout()
  }

  const menu = (
    <Menu>
      <Menu.Item key={'profile'}>
        <Link to="/profile">Профиль</Link>
      </Menu.Item>
      <Menu.Item key={'edit'}>
        <Link to="/settings">Настройки</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={onLogout} key={'logout'} danger>
        <span style={{ border: 'none', outline: 'none' }}>Выйти</span>
      </Menu.Item>
    </Menu>
  )

  const formatPhoneNumber = `+7-${phoneNumber?.slice(
    0,
    3,
  )}-${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(
    6,
    8,
  )}-${phoneNumber?.slice(8, 10)}`

  const info = () => {
    Modal.info({
      title: 'Скачать мобильное приложение',
      centered: true,
      maskClosable: true,
      content: (
        <div>
          <Title level={4} style={{ margin: '0 auto' }}>
            Android/IOS
          </Title>
          <img src={QrCodeImg} alt="Qr code" />
          <img
            src={DownloadApp}
            alt="Download app"
            style={{ width: '300px' }}
          />
        </div>
      ),
      onOk() {},
    })
  }

  return (
    <div className={HeaderComponentStyles.rightGrid}>
      <QrcodeOutlined onClick={info} className={HeaderComponentStyles.code} />
      <Dropdown overlay={menu}>
        <div className={HeaderComponentStyles.headerRight}>
          <Avatar
            className={HeaderComponentStyles.ava}
            size={40}
            icon={photoUrl.length === 0 ? <UserOutlined /> : null}
            src={photoUrl}
          />
          <div className={HeaderComponentStyles.name}>
            <span>{`${lastName} ${firstName.slice(0, 1)}.`}</span>
            <span>{patronymic && `${patronymic.slice(0, 1)}.`}</span>
          </div>
          <span className={HeaderComponentStyles.phone}>
            {formatPhoneNumber}
          </span>
        </div>
      </Dropdown>
    </div>
  )
}

export default HeaderInfo
