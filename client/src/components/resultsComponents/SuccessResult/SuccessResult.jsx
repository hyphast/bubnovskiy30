import React from 'react';
import {Button, Result, Typography} from 'antd';
import {HomeOutlined, PhoneOutlined, MailOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

const {Paragraph} = Typography;

const SuccessResult = () => {
  const history = useHistory();
  return (
    <Result
      status="success"
      title="Вы успешно записались на услугу"
      subTitle="Вы можете отменить запись во вкладке Мои записи"
      extra={[
        <Button key="profile" type="primary" onClick={() => history.push('/profile')}>
          Прейти в профиль
        </Button>,
        <Button key="new-appointment" onClick={() => history.push('/new-appointment')}>Записаться на еще одну
          услугу</Button>,
        <Button key="records" onClick={() => history.push('/records')}>Мои записи</Button>,
      ]}
    >
      <div>
        <Paragraph><HomeOutlined/>&#160;&#160;Наш адрес: ул. Адмиралтейская, 15 ТЦ Премиум Холл 5 этаж</Paragraph>
      </div>
      <div>
        <Paragraph>
          <PhoneOutlined/>
          &#160;&#160;Телефон:&#160;
          <a href="tel:78512669777">7 (8512) 669-777</a>
          &#160;или&#160;
          <a href="tel:89270742334">8-927-074-23-34</a>
        </Paragraph>
      </div>
      <div style={{display: 'flex'}}>
        <Paragraph>
          <MailOutlined/>&#160;&#160;Email:&#160;
        </Paragraph>
        <a href="mailto:bubnovsky-astrakhan@mail.ru">
          <Paragraph copyable={{tooltips: ['Скопировать', 'Скопировано']}}>
            bubnovsky-astrakhan@mail.ru
          </Paragraph>
        </a>
      </div>
    </Result>
  );
};

export default SuccessResult;