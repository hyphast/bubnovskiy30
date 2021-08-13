import React from 'react';
import {connect} from "react-redux";
import {clearAuthError, registration} from '../../../redux/reducers/authActions';
import Registration from "./Registration";

const RegistrationContainer = (props) => {
  return (
    <Registration {...props}/>
  );
};

const mapStateToProps = state => {
  return {
    _error: state.auth.errors,
    isLoading: state.auth.isLoading,
  }
}

export default connect(mapStateToProps, {registration, clearError: clearAuthError})(RegistrationContainer);