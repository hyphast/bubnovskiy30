import React, {useEffect} from 'react';
import {PageHeader, Tag, Button, Statistic, Row} from 'antd';
import moment from 'moment';
import AppointmentStyles from './AppointmentFinish.module.scss';
import { useHistory } from "react-router-dom";

const AppointmentFinish = ({appointmentType, date, time, addPatient, isSelected}) => {
  const history = useHistory();

  const onSubmit = () => {
    addPatient(date, time, appointmentType);
    history.push("/new-appointment");
  }

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title="НАЗАД"
        tags={<Tag color="blue">Текущая запись</Tag>}
        subTitle="Вернуться к предыдущей странице"
        extra={
          <Button type="danger" onClick={() => history.push("/new-appointment")}>
            Отменить
          </Button>
        }
        footer={
          <Button disabled={!isSelected} onClick={onSubmit} className={AppointmentStyles.submit}>
            Записаться
          </Button>
        }
      >
        <Row className={AppointmentStyles.appFinish}>
          <Statistic title="Тип занятия"
                     value={appointmentType === '' ? 'Не выбрано' : appointmentType}
          />
          <Statistic title="Дата записи"
                     className={AppointmentStyles.date}
                     value={!!!date ? 'Не выбрано' : moment(date).utc().utcOffset(240).format('DD.MM.YYYY dddd')}
          />
          <Statistic title="Время"
                     value={!!!time ? 'Не выбрано' : moment(time).utc().utcOffset(240).format('H:mm')}
                     className={AppointmentStyles.time}
          />
        </Row>
      </PageHeader>
    </>
  );
};

export default AppointmentFinish;