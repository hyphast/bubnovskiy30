import React, {FC} from 'react';
import {connect} from "react-redux";
import {clearAuthError, login} from '../../../redux/reducers/authReducer/authActions';
import Login from "./Login";
import {stateType} from '../../../redux/reducers/rootReducer';

type mapStateToPropsType = {
  _error: Array<object>,
  isLoading: boolean,
}
type mapDispatchToPropsType = {
  login: (email: string, password: string) => void,
  _clearError: () => void,
}
type propsType = mapStateToPropsType & mapDispatchToPropsType;

const LoginContainer: FC<propsType> = (props) => {
  return (
   <Login {...props}/>
  );
};

const mapStateToProps = (state: stateType): mapStateToPropsType => {
  return {
    _error: state.auth.errors,
    isLoading: state.auth.isLoading,
  }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, stateType>
(mapStateToProps, {login, _clearError: clearAuthError})(LoginContainer);

