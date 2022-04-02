import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';

const NavbarContainer = (props) => {
  return (
   <Navbar {...props}/>
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

export default connect(mapStateToProps, {})(NavbarContainer);