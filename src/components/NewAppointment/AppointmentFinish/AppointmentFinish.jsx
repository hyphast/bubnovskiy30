import React from 'react'
import {
  PageHeader,
  Tag,
  Button,
  Statistic,
  Row,
  notification,
  Col,
} from 'antd'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import styles from './AppointmentFinish.module.scss'

const AppointmentFinish = ({
  appointmentType,
  date,
  time,
  addPatient,
  isSelected,
}) => {
  const history = useHistory()

  const onSubmit = () => {
    addPatient(date, time, appointmentType)
    history.push('/new-appointment/success')
  }

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title="НАЗАД"
        tags={<Tag color="blue">Текущая запись</Tag>}
        subTitle="Вернуться к предыдущей странице"
        extra={
          <Button
            type="danger"
            onClick={() => history.push('/new-appointment')}
          >
            Отменить
          </Button>
        }
        footer={
          <Button
            disabled={!isSelected}
            onClick={onSubmit}
            className={styles.submit}
          >
            Записаться
          </Button>
        }
      >
        <div className={styles.root}>
          <Statistic
            title="Тип занятия"
            value={appointmentType === '' ? 'Не выбрано' : appointmentType}
          />
          <Statistic
            title="Дата записи"
            value={
              !date
                ? 'Не выбрано'
                : moment(date).utc().utcOffset(240).format('DD.MM.YYYY dddd')
            }
          />
          <Statistic
            title="Время"
            value={
              !time
                ? 'Не выбрано'
                : moment(time).utc().utcOffset(240).format('H:mm')
            }
          />
        </div>
      </PageHeader>
    </>
  )
}

export default AppointmentFinish
