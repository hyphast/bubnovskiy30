import React from 'react';
import {connect} from "react-redux";
import {registration} from "../../../redux/reducers/authActions";
import Registration from "./Registration";

const RegistrationContainer = (props) => {
  return (
    <Registration registration={props.registration}/>
  );
};

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {registration})(RegistrationContainer);