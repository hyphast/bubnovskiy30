import React from 'react'
import { Button, Result, Typography } from 'antd'
import { useHistory } from 'react-router-dom'
import AboutUs from '../../AboutUs/AboutUs'

const { Paragraph } = Typography

const SuccessResult = () => {
  const history = useHistory()
  return (
    <Result
      status="success"
      title="Вы успешно записались на услугу"
      subTitle="Осталось занятий: 11"
      extra={[
        <Button
          key="profile"
          type="primary"
          onClick={() => history.push('/profile')}
        >
          Прейти в профиль
        </Button>,
        <Button
          key="new-appointment"
          onClick={() => history.push('/new-appointment')}
        >
          Записаться на еще одну услугу
        </Button>,
        <Button key="records" onClick={() => history.push('/records')}>
          Мои записи
        </Button>,
      ]}
    >
      <AboutUs />
    </Result>
  )
}

export default SuccessResult
