import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';

const ProfileContainer = (props) => {
  return (
    <Profile {...props}/>
  );
};

const mapStateToProps = state => {
  return {
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    gender: state.profile.gender,
    phoneNumber: state.profile.phoneNumber,
    email: state.auth.email,
  }
}

export default connect(mapStateToProps, {})(ProfileContainer);