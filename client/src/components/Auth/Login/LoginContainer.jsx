import React from 'react';
import {connect} from "react-redux";
import {clearAuthError, login} from '../../../redux/reducers/authActions';
import Login from "./Login";

const LoginContainer = (props) => {
  return (
   <Login {...props}/>
  );
};

const mapStateToProps = state => {
  return {
    _error: state.auth.errors,
    isLoading: state.auth.isLoading,
  }
}

export default connect(mapStateToProps, {login, _clearError: clearAuthError})(LoginContainer);
// export default connect(mapStateToProps, {login})(LoginContainer);
