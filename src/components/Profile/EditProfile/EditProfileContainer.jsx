import React from 'react';
import {connect} from 'react-redux';
import {editProfileInfo, savePhoto} from "../../../redux/reducers/profileReducer/profileActions";
import EditProfile from "./EditProfile";

const EditProfileContainer = (props) => {
  return (
    <EditProfile {...props}/>
  );
};

const mapStateToProps = state => {
  return {
    photoUrl: state.profile.photoUrl,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    patronymic: state.profile.patronymic,
    gender: state.profile.gender,
    phoneNumber: state.profile.phoneNumber,
  }
}

export default connect(mapStateToProps, {savePhoto, editProfileInfo})(EditProfileContainer);