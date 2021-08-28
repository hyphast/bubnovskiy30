import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';

const NavbarContainer = () => {
  return (
   <Navbar/>
  );
};

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, {})(NavbarContainer);