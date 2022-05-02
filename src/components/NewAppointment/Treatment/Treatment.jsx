import React, { useEffect } from 'react'
import TreatmentStyles from './Treatment.module.scss'
import PageHeaderBack from '../../common/PageHeader/PageHeader'
import TreatmentDatePicker from './TreatmentDatePicker/TreatmentDatePicker'
import './Treatment.scss'
import TreatmentList from './TreatmentList/TreatmentList'

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
      <div className={TreatmentStyles.container}>
        <div className={TreatmentStyles.header}>
          <PageHeaderBack title="НАЗАД" />
        </div>
        <div className={TreatmentStyles.subtitle}>
          <h2>Запись в зал</h2>
        </div>
        <div className={TreatmentStyles.calendar}>
          <h3>Календарь</h3>
          <TreatmentDatePicker getAppointments={getAppointments} />
          {/*<div className={TreatmentStyles.badges}>*/}
          {/*  <Badge color='#96E561' text='Малая загруженность зала' size='default'/>*/}
          {/*  <Badge color='#FFB85C' text='Средняя загруженность зала' size='default'/>*/}
          {/*  <Badge color='#F8A38B' text='Высокая загруженность зала' size='default'/>*/}
          {/*</div>*/}
        </div>
        <div className={TreatmentStyles.content}>
          <TreatmentList appointments={appointments} isLoading={isLoading} />
        </div>
      </div>
    </>
  )
}

export default Treatment
