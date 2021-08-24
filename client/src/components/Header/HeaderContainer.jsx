import React from 'react';
import {connect} from 'react-redux';
import {setIsNavbarClosed} from '../../redux/reducers/appReducer/appAction';
import {logout} from '../../redux/reducers/authReducer/authActions';
import HeaderComponent from './HeaderComponent';

const HeaderContainer = ({collapsed, setCollapsed, logout}) => {
  return (
   <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} logout={logout}/>
  );
};

const mapStateToProps = state => {
  return {
    collapsed: state.app.isNavbarClosed,
    isLoading: state.auth.isLoading,
  }
}

export default connect(mapStateToProps, {setCollapsed: setIsNavbarClosed, logout})(HeaderContainer);