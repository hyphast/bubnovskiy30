import React from 'react'
import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Typography } from 'antd'

const { Paragraph } = Typography

const AboutUs = () => {
  return (
    <>
      <div>
        <Paragraph>
          <HomeOutlined />
          &#160;&#160;Наш адрес: ул. Адмиралтейская 15, ТЦ Премиум Холл 5 этаж
        </Paragraph>
      </div>
      <div>
        <Paragraph>
          <PhoneOutlined />
          &#160;&#160;Телефон:&#160;
          <a href="tel:78512669777">7 (8512) 669-777</a>
          &#160;или&#160;
          <a href="tel:89270742334">8-927-074-23-34</a>
        </Paragraph>
      </div>
      <div style={{ display: 'flex' }}>
        <Paragraph>
          <MailOutlined />
          &#160;&#160;Email:&#160;
        </Paragraph>
        <a href="mailto:bubnovsky-astrakhan@mail.ru">
          <Paragraph copyable={{ tooltips: ['Скопировать', 'Скопировано'] }}>
            bubnovsky-astrakhan@mail.ru
          </Paragraph>
        </a>
      </div>
    </>
  )
}

export default AboutUs
