import React from 'react'
import { Avatar, Button, Col, Progress, Row, Statistic } from 'antd'
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  SendOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons'
import ProfileStyles from './Profile.module.scss'
import { Link } from 'react-router-dom'
import Text from 'antd/es/typography/Text'

const Profile = ({
  photoUrl,
  firstName,
  lastName,
  patronymic,
  gender,
  phoneNumber,
  email,
  isActivated,
}) => {
  const formatPhoneNumber = `+7-${phoneNumber?.slice(
    0,
    3,
  )}-${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(
    6,
    8,
  )}-${phoneNumber?.slice(8, 10)}`
  const fullName = `${lastName} ${firstName} ${patronymic}`

  return (
    <div>
      <div className={ProfileStyles.profileContainer}>
        <div className={ProfileStyles.left}>
          <Avatar
            shape="square"
            size={210}
            icon={photoUrl.length === 0 ? <UserOutlined /> : null}
            src={photoUrl}
          />
          <Button type="dashed" className={ProfileStyles.settings}>
            <Link to="/edit-profile">Редактировать</Link>
          </Button>
        </div>
        <div className={ProfileStyles.profileInfo}>
          <Row className={ProfileStyles.fullName}>
            <Statistic
              className={ProfileStyles.field}
              title=""
              value={fullName}
            />
          </Row>
          <Statistic
            className={ProfileStyles.field}
            title="Пол"
            value={gender === 'male' ? 'Мужской' : 'Женский'}
          />
          <Statistic
            className={ProfileStyles.field}
            title="Телефон"
            value={formatPhoneNumber}
          />
          <div className={ProfileStyles.email}>
            <Statistic
              className={ProfileStyles.field}
              title="Email"
              value={email}
            />
            {isActivated ? (
              <div className={ProfileStyles.isActivated}>
                <CheckCircleTwoTone
                  twoToneColor="#52c41a"
                  className={ProfileStyles.isActivatedIcon}
                  style={{ fontSize: '24px' }}
                />
                <Text type="success"> Email подтвержден</Text>
              </div>
            ) : (
              <div className={ProfileStyles.isActivated}>
                <CloseCircleTwoTone
                  twoToneColor="#fe5961"
                  className={ProfileStyles.isActivatedIcon}
                  style={{ fontSize: '24px' }}
                />
                <Text type="danger"> Email не подтвержден</Text>
              </div>
            )}
          </div>
          {/*<div style={{ display: 'flex' }}>*/}
          {/*<Statistic*/}
          {/*  className={ProfileStyles.field}*/}
          {/*  title="Цикл"*/}
          {/*  value="10-й цикл"*/}
          {/*/>*/}
          {/*<Progress*/}
          {/*  type="circle"*/}
          {/*  percent={75}*/}
          {/*  format={() => 9}*/}
          {/*  width={70}*/}
          {/*  style={{ margin: '0rem 0 0 3rem' }}*/}
          {/*/>*/}
          {/*<Statistic*/}
          {/*  className={ProfileStyles.field}*/}
          {/*  title="Осталось занятий"*/}
          {/*/>*/}
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Цикл" value={10} prefix={<TrophyOutlined />} />
            </Col>
            <Col span={12}>
              <Statistic
                title="Осталось занятий"
                value={12}
                suffix="/ 12"
                prefix={<SendOutlined />}
              />
              <Progress
                percent={100}
                format={() => 12}
                strokeColor={{
                  '0%': '#ffd43b',
                  '100%': '#644394',
                }}
                strokeWidth={20}
                trailColor="#bfbfbf"
                status="active"
              />
            </Col>
            <Col span={12}>
              <Statistic title="Тип занятий" value="Лечебные занятия" />
            </Col>
          </Row>
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}

export default Profile
