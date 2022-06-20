import React from 'react'
import AppointmentType from './AppointmentType/AppointmentType'
import { connect } from 'react-redux'
import styles from './NewAppointment.module.scss'

const NewAppointment = (props) => {
  return (
    <div className={styles.root}>
      <h2>Выберите услугу</h2>
      <AppointmentType {...props} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    //photoUrl: state.profile.photoUrl,
  }
}

export default connect(mapStateToProps, {})(NewAppointment)
