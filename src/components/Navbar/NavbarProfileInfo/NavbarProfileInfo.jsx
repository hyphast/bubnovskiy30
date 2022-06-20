import React from 'react'
import { Avatar } from 'antd'
import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styles from './NavbarProfileInfo.module.scss'

const NavbarProfileInfo = ({
  photoUrl,
  firstName,
  lastName,
  patronymic,
  gender,
  phoneNumber,
}) => {
  const formatPhoneNumber = `+7-${phoneNumber?.slice(
    0,
    3,
  )}-${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(
    6,
    8,
  )}-${phoneNumber?.slice(8, 10)}`
  const fullName = `${lastName} ${firstName.slice(0, 1)}.${
    patronymic ? patronymic.slice(0, 1) : ``
  }`

  return (
    <>
      <div className={styles.ava}>
        <Avatar
          // styles={{d}}
          size={{ xs: 110, sm: 120, md: 130, lg: 140, xl: 150, xxl: 160 }}
          icon={photoUrl.length === 0 ? <UserOutlined /> : null}
          src={photoUrl}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <span>{fullName}</span>
        </div>
        <div className={styles.gender}>
          <span>Пол: {gender === 'male' ? 'Мужской' : 'Женский'}</span>
        </div>
        <div className={styles.phone}>
          <span>Телефон: {formatPhoneNumber}</span>
        </div>
        <div className={styles.settings}>
          <Link to="/edit-profile">Редактировать</Link>
          <EditOutlined className={styles.SettingsIcon} />
        </div>
      </div>
    </>
  )
}

export default NavbarProfileInfo
