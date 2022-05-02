import React, { FC } from 'react'
import { connect } from 'react-redux'
import {
  clearAuthError,
  login,
} from '../../../redux/reducers/authReducer/authActions'
import Login from './Login'
import { StateType } from '../../../redux/reducers/rootReducer'

type MapStateToPropsType = {
  _error: Array<any>
  isLoading: boolean
}
type MapDispatchToPropsType = {
  login: (email: string, password: string) => void
  _clearError: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const LoginContainer: FC<PropsType> = (props) => {
  return <Login {...props} />
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    _error: state.auth.errors,
    isLoading: state.auth.isLoading,
  }
}

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  any, //TODO was {}
  StateType
>(mapStateToProps, { login, _clearError: clearAuthError })(LoginContainer)
