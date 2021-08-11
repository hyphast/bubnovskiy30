import React from 'react';
import {connect} from "react-redux";
import {login} from "../../../redux/reducers/authActions";
import Login from "./Login";

const LoginContainer = (props) => {
  return (
   <Login {...props}/>
  );
};

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {login})(LoginContainer);