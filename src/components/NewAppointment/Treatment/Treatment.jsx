import React, { useEffect } from 'react'
import PageHeaderBack from '../../common/PageHeader/PageHeader'
import TreatmentDatePicker from './TreatmentDatePicker/TreatmentDatePicker'
import TreatmentList from './TreatmentList/TreatmentList'
import styles from './Treatment.module.scss'

const Treatment = ({
  appointments,
  isLoading,
  getAppointments,
  clearAppointments,
}) => {
  useEffect(() => {
    return () => {
      clearAppointments()
    }
  }, [clearAppointments])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <PageHeaderBack title="НАЗАД" />
        </div>
        <div className={styles.subtitle}>
          <h2>Запись в зал</h2>
        </div>
        <div className={styles.calendar}>
          <h3>Календарь</h3>
          <TreatmentDatePicker getAppointments={getAppointments} />
          {/*<div className={styles.badges}>*/}
          {/*  <Badge color='#96E561' text='Малая загруженность зала' size='default'/>*/}
          {/*  <Badge color='#FFB85C' text='Средняя загруженность зала' size='default'/>*/}
          {/*  <Badge color='#F8A38B' text='Высокая загруженность зала' size='default'/>*/}
          {/*</div>*/}
        </div>
        <div className={styles.content}>
          <TreatmentList appointments={appointments} isLoading={isLoading} />
        </div>
      </div>
    </>
  )
}

export default Treatment
