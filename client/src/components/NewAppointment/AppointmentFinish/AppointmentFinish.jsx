import React from 'react';
import {PageHeader, Tag, Button, Statistic, Row} from 'antd';
import moment from 'moment';
import AppointmentStyles from './AppointmentFinish.module.scss';

const AppointmentFinish = ({appointmentType, date, time, addPatient}) => {
  const onSubmit = () => {
    const free = appointmentType === 'Лечебные занятия' ? 2 : 1;
    addPatient(date, time, free);
  }

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title="НАЗАД"
        tags={<Tag color="blue">Текущая запись</Tag>}
        subTitle="Вернуться к предыдущей странице"
        extra={
          <Button type="danger">
            Отменить
          </Button>
        }
        footer={
          <Button onClick={onSubmit} className={AppointmentStyles.submit}>
            Записаться
          </Button>
        }
      >
        <Row className={AppointmentStyles.appFinish}>
          <Statistic title="Тип занятия"
                     value={appointmentType}
          />
          <Statistic title="Дата записи"
                     className={AppointmentStyles.date}
                     value={moment(date).utc().utcOffset(240).format('DD.MM.YYYY dddd')}
          />
          <Statistic title="Время"
                     value={moment(time).utc().utcOffset(240).format('H:mm')}
                     className={AppointmentStyles.time}
          />
        </Row>
      </PageHeader>
    </>
  );
};

export default AppointmentFinish;