import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/reducers/authReducer/authActions';
import HeaderComponent from './HeaderComponent';

const HeaderContainer = (props) => {
  return (
   <HeaderComponent {...props} logout={logout}/>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
  }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);