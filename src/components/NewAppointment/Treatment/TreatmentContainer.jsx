import React from 'react'
import { connect } from 'react-redux'
import { getAppointments } from '../../../redux/reducers/newAppointment/treatmentReducer/treatmentActions'
import { clearAppointments } from '../../../redux/reducers/newAppointment/treatmentReducer/treatmentActions'
import Treatment from './Treatment'

const TreatmentContainer = (props) => {
  return <Treatment {...props} />
}

const mapStateToProps = (state) => {
  return {
    appointments: state.treatment.appointments,
    isLoading: state.treatment.isLoading,
  }
}

export default connect(mapStateToProps, { getAppointments, clearAppointments })(
  TreatmentContainer,
)
