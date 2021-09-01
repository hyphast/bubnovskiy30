import React from 'react';
import {Avatar, Row, Statistic} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const Profile = ({firstName, lastName, gender, phoneNumber, email}) => {
  const formatPhoneNumber =
    `+7-${phoneNumber?.slice(0, 3)}-${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(6, 8)}-${phoneNumber?.slice(8, 10)}`
  return (
    <div>
      <div style={{display: 'flex'}}>
        <Avatar shape="square" size={210} icon={<UserOutlined/>}/>
        <div style={{marginLeft: '2rem'}}>
          <Row style={{marginBottom: '1rem', fontWeight: '700'}}>
            <Statistic style={{marginRight: '1rem'}} title="" value={lastName}/>
            <Statistic style={{marginRight: '1rem'}} title="" value={firstName}/>
            <Statistic title="" value="Иванович"/>
          </Row>
          <Statistic style={{marginBottom: '1rem'}} title="Пол" value={gender === 'male' ? 'Мужской' : 'Женский'}/>
          <Statistic style={{marginBottom: '1rem'}} title="Телефон" value={formatPhoneNumber}/>
          <Statistic style={{marginBottom: '1rem'}} title="Почта" value={email}/>
          <Statistic title="Инструктор" value="Иванов Иван Иванович"/>
        </div>
      </div>
    </div>
  );
};

export default Profile;