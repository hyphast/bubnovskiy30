import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/reducers/authReducer/authActions';
import HeaderComponent from './HeaderComponent';

const HeaderContainer = (props) => {
  return (
   <HeaderComponent {...props}/>
  );
};

const mapStateToProps = state => {
  return {
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    phoneNumber: state.profile.phoneNumber,
    isLoading: state.auth.isLoading,
  }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);