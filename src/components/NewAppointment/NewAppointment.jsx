import React from 'react'
import AppointmentType from './AppointmentType/AppointmentType'
import NewAppointmentStyles from './NewAppointment.module.scss'
import { connect } from 'react-redux'

const NewAppointment = (props) => {
  return (
    <div className={NewAppointmentStyles.type}>
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
