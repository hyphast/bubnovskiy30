import React from 'react';
import {connect} from "react-redux";
import {registration} from "../../../redux/reducers/authActions";
import Registration from "./Registration";

const RegistrationContainer = (props) => {
  return (
    <Registration {...props}/>
  );
};

const mapStateToProps = state => {
  return {
    _error: state.auth.errors,
  }
}

export default connect(mapStateToProps, {registration})(RegistrationContainer);