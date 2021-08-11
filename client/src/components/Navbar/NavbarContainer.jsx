import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';

const NavbarContainer = ({collapsed}) => {
  return (
   <Navbar collapsed={collapsed}/>
  );
};

const mapStateToProps = state => {
  return {
    collapsed: state.app.isNavbarClosed,
  }
}

export default connect(mapStateToProps, {})(NavbarContainer);