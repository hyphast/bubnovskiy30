import React from 'react';
import {Avatar} from 'antd';
import {EditOutlined, UserOutlined} from '@ant-design/icons';
import NavbarProfileInfoStyles from './NavbarProfileInfo.module.scss';
import {Link} from 'react-router-dom';

const NavbarProfileInfo = ({firstName, lastName, gender, phoneNumber}) => {
    const formatPhoneNumber =
      `+7-${phoneNumber?.slice(0, 3)}-${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(6, 8)}-${phoneNumber?.slice(8, 10)}`

  return (
    <>
      <div className={NavbarProfileInfoStyles.avatar}>
        <Avatar
          size={{xs: 110, sm: 120, md: 130, lg: 140, xl: 150, xxl: 160}}
          icon={<UserOutlined/>}
        />
      </div>
      <div className={NavbarProfileInfoStyles.info}>
        <span className={NavbarProfileInfoStyles.name}>{`${lastName} ${firstName.slice(0, 1)}.`}</span>
        <span className={NavbarProfileInfoStyles.gender}>Пол: {gender === 'male' ? 'Мужской' : 'Женский'}</span>
        <span className={NavbarProfileInfoStyles.phone}>Телефон: {formatPhoneNumber}</span>
        <div className={NavbarProfileInfoStyles.settings}>
          <Link to="/edit-profile">Редактировать</Link>
          <EditOutlined className={NavbarProfileInfoStyles.SettingsIcon}/>
        </div>
      </div>
    </>);
};

export default NavbarProfileInfo;