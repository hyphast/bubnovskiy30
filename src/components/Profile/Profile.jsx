import React from 'react'
import { Avatar, Button, Statistic, Typography } from 'antd'
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Text from 'antd/es/typography/Text'
import styles from './Profile.module.scss'

const { Title } = Typography

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
    <div className={styles.root}>
      <div className={styles.ava}>
        <Avatar
          shape="square"
          size={{ xs: 100, sm: 130, md: 150, lg: 180, xl: 210, xxl: 250 }}
          icon={photoUrl.length === 0 ? <UserOutlined /> : null}
          src={photoUrl}
        />
      </div>
      <div className={styles.settings}>
        <Button type="dashed">
          <Link to="/edit-profile">Редактировать</Link>
        </Button>
      </div>
      <div className={styles.profileInfo}>
        <Title level={3}>{fullName}</Title>
        <Statistic
          title="Пол"
          value={gender === 'male' ? 'Мужской' : 'Женский'}
        />
        <Statistic
          // className={styles.field}
          title="Телефон"
          value={formatPhoneNumber}
        />
        <div className={styles.email}>
          <Statistic title="Email" value={email} />
          {isActivated ? (
            <div className={styles.isActivatedWrapper}>
              <CheckCircleTwoTone
                twoToneColor="#52c41a"
                className={styles.isActivatedIcon}
              />
              <Text className={styles.isActivated} type="success">
                Email подтвержден
              </Text>
            </div>
          ) : (
            <div className={styles.isActivatedWrapper}>
              <CloseCircleTwoTone
                twoToneColor="#fe5961"
                className={styles.isActivatedIcon}
              />
              <Text className={styles.isActivated} type="danger">
                Email не подтвержден
              </Text>
            </div>
          )}
        </div>
        <Statistic title="Цикл" value={1} prefix={<TrophyOutlined />} />
        {/*<div style={{ display: 'flex' }}>*/}
        {/*<Statistic className={styles.field} title="Цикл" value="10-й цикл" />*/}
        {/*<Progress*/}
        {/*  type="circle"*/}
        {/*  percent={75}*/}
        {/*  format={() => 9}*/}
        {/*  width={70}*/}
        {/*  style={{ margin: '0rem 0 0 3rem' }}*/}
        {/*/>*/}
        {/*<Statistic className={styles.field} title="Осталось занятий" />*/}

        {/*<Row gutter={16}>*/}
        {/*<Col span={12}>*/}
        {/*  <Statistic title="Цикл" value={1} prefix={<TrophyOutlined />} />*/}
        {/*</Col>*/}
        {/*<Col span={12}>*/}
        {/*  <Statistic*/}
        {/*    title="Осталось занятий"*/}
        {/*    value={12}*/}
        {/*    suffix="/ 12"*/}
        {/*    prefix={<SendOutlined />}*/}
        {/*  />*/}
        {/*  <Progress*/}
        {/*    percent={100}*/}
        {/*    format={() => 12}*/}
        {/*    strokeColor={{*/}
        {/*      '0%': '#ffd43b',*/}
        {/*      '100%': '#644394',*/}
        {/*    }}*/}
        {/*    strokeWidth={20}*/}
        {/*    trailColor="#bfbfbf"*/}
        {/*    status="active"*/}
        {/*  />*/}
        {/*</Col>*/}
        {/*<Col span={12}>*/}
        {/*  <Statistic title="Тип занятий" value="Лечебные занятия" />*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default Profile
