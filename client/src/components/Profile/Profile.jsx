import React from 'react';
import {Avatar, Button, Row, Statistic} from 'antd';
import {EditOutlined, UserOutlined} from '@ant-design/icons';
import ProfileStyles from "./Profile.module.scss";
import {Link} from "react-router-dom";
import {CheckCircleTwoTone, CloseCircleTwoTone} from '@ant-design/icons';
import Text from "antd/es/typography/Text";

const Profile = ({photoUrl, firstName, lastName, patronymic, gender, phoneNumber, email, isActivated}) => {
  const formatPhoneNumber =
    `+7-${phoneNumber?.slice(0, 3)}-${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(6, 8)}-${phoneNumber?.slice(8, 10)}`;
  const fullName =
      `${lastName} ${firstName} ${patronymic}`;

  return (
    <div>
      <div className={ProfileStyles.profileContainer}>
        <div className={ProfileStyles.left}>
          <Avatar shape="square" size={210} icon={photoUrl.length === 0 ? <UserOutlined/> : null} src={photoUrl}/>
          <Button type="dashed" className={ProfileStyles.settings}>
            <Link to="/edit-profile">Редактировать</Link>
          </Button>
        </div>
        <div className={ProfileStyles.profileInfo}>
          <Row className={ProfileStyles.fullName}>
            <Statistic className={ProfileStyles.field} title="" value={fullName}/>
          </Row>
          <Statistic className={ProfileStyles.field} title="Пол" value={gender === 'male' ? 'Мужской' : 'Женский'}/>
          <Statistic className={ProfileStyles.field} title="Телефон" value={formatPhoneNumber}/>
          <div className={ProfileStyles.email}>
            <Statistic className={ProfileStyles.field} title="Почта" value={email}/>
            {isActivated === 'true' ?
            <div className={ProfileStyles.isActivated}>
              <CheckCircleTwoTone twoToneColor="#52c41a" className={ProfileStyles.isActivatedIcon} style={{fontSize: '24px'}}/>
              <Text type="success"> Email подтвержден</Text>
            </div>
            :
            <div className={ProfileStyles.isActivated}>
              <CloseCircleTwoTone twoToneColor="#fe5961" className={ProfileStyles.isActivatedIcon} style={{fontSize: '24px'}}/>
              <Text type="danger"> Email не подтвержден</Text>
            </div>
            }
          </div>
          <Statistic className={ProfileStyles.field} title="Цикл" value='10-й цикл'/>
          <Statistic className={ProfileStyles.field} title="Осталось занятий" value='3 занятия'/>
        </div>
      </div>
    </div>
  );
};

export default Profile;