import React from 'react';
import {PageHeader, Tag, Button, Statistic, Row} from 'antd';
import moment from 'moment';

const AppointmentFinish = ({date, time, addPatient}) => {
  const onSubmit = () => {
    addPatient(date, time);
  }

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
          <Button onClick={onSubmit} style={{color: 'green'}} key="1">
            Записаться
          </Button>
        }
      >
        <Row>
          <Statistic title="Дата записи" value={moment(date).utc().utcOffset(240).format('DD.MM.YYYY dddd')}/>
          <Statistic
            title="Время"
            value={moment(time).utc().utcOffset(240).format('H:mm')}
            style={{
              margin: '0 32px',
            }}
          />
        </Row>
      </PageHeader>
    </>
  );
};

export default AppointmentFinish;