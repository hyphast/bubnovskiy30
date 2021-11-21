import React from 'react';
import {Avatar, Dropdown, Menu} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import HeaderComponentStyles from '../HeaderComponent.module.scss';
import {Link} from 'react-router-dom';

const HeaderInfo = ({photoUrl, firstName, lastName, patronymic, phoneNumber, logout, isLoading}) => {
  const onLogout = () => {
    logout();
  }

  const menu = (
    <Menu>
      <Menu.Item key={'profile'}>
        <Link to="/profile">Профиль</Link>
      </Menu.Item>
      <Menu.Item key={'edit'}>
        <Link to="/settings">Настройки</Link>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item onClick={onLogout} key={'logout'} danger>
        <span style={{border: 'none', outline: 'none'}}>Выйти</span>
      </Menu.Item>
    </Menu>
  );

  const formatPhoneNumber =
    `+7-${phoneNumber?.slice(0, 3)}-${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(6, 8)}-${phoneNumber?.slice(8, 10)}`

  return (
    <Dropdown overlay={menu}>
      <div className={HeaderComponentStyles.headerRight}>
        <Avatar className={HeaderComponentStyles.ava} size={40} icon={photoUrl === null ? <UserOutlined/> : null} src={photoUrl}/>
        <span className={HeaderComponentStyles.name}>{`${lastName} ${firstName.slice(0, 1)}.${patronymic.slice(0, 1)}.`}</span>
        <span className={HeaderComponentStyles.phone}>{formatPhoneNumber}</span>
      </div>
    </Dropdown>
  );
};

export default HeaderInfo;