import React from 'react'
import { connect } from 'react-redux'
import {
  editProfileInfo,
  savePhoto,
} from '../../../redux/reducers/profileReducer/profileActions'
import EditProfile from './EditProfile'

const EditProfileContainer = (props) => {
  return <EditProfile {...props} />
}

const mapStateToProps = (state) => {
  return {
    photoUrl: state.profile.photoUrl,
    curFirstName: state.profile.firstName,
    curLastName: state.profile.lastName,
    curPatronymic: state.profile.patronymic,
    curGender: state.profile.gender,
    curPhoneNumber: state.profile.phoneNumber,
  }
}

export default connect(mapStateToProps, { savePhoto, editProfileInfo })(
  EditProfileContainer,
)
