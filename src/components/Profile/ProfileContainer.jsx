import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'

const ProfileContainer = (props) => {
  return <Profile {...props} />
}

const mapStateToProps = (state) => {
  return {
    photoUrl: state.profile.photoUrl,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    patronymic: state.profile.patronymic,
    gender: state.profile.gender,
    phoneNumber: state.profile.phoneNumber,
    email: state.auth.email,
    isActivated: state.profile.isActivated,
  }
}

export default connect(mapStateToProps, {})(ProfileContainer)
