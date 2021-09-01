import React from 'react';
import {PageHeader, Tag, Button, Statistic, Descriptions, Row} from 'antd';

const AppointmentFinish = () => {
  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title="НАЗАД"
        tags={<Tag color="blue">Текущая запись</Tag>}
        subTitle="Вернуться к предыдущей странице"
        extra={
          <Button key="1" type="danger">
            Отменить
          </Button>
        }
        footer={
          <Button style={{color: 'green'}} key="1">
            Записаться
          </Button>
        }
      >
        <Row>
          <Statistic title="Дата записи" value="30.09.2021"/>
          <Statistic
            title="Время"
            value="9:30"
            style={{
              margin: '0 32px',
            }}
          />
          <Statistic title="Инструктор" value="Иванов Иван Иванович"/>
        </Row>
      </PageHeader>
    </>
  );
};

export default AppointmentFinish;