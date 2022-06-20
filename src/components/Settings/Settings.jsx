import React from 'react'
import { Button, Checkbox, Col, Row, Popconfirm } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const Settings = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div>
      <h2>Настройки</h2>
      <Row gutter={16}>
        <Checkbox onChange={onChange}>
          Уведомлять о предстоящих занятиях
        </Checkbox>
      </Row>
      <Row gutter={16} style={{ marginTop: '1rem' }}>
        <Checkbox onChange={onChange}>Двухэтапная аутентификация</Checkbox>
      </Row>
      <Row gutter={16} style={{ marginTop: '1rem' }}>
        <Popconfirm
          title="Вы действительно хотите выйти со всех устройств？"
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          okText="Да"
          cancelText="Нет"
        >
          <Button type="dashed" danger>
            Выйти со всех устройств
          </Button>
        </Popconfirm>
      </Row>
    </div>
  )
}

export default Settings
