import React from 'react';
import {connect} from 'react-redux';
import {setIsNavbarClosed} from '../../redux/reducers/appAction';
import {logout} from '../../redux/reducers/authActions';
import HeaderComponent from './HeaderComponent';

const HeaderContainer = ({collapsed, setCollapsed, logout}) => {
  return (
   <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} logout={logout}/>
  );
};

const mapStateToProps = state => {
  return {
    collapsed: state.app.isNavbarClosed,
  }
}

export default connect(mapStateToProps, {setCollapsed: setIsNavbarClosed, logout})(HeaderContainer);