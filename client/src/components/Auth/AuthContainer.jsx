import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/reducers/authActions";
import Auth from "./Auth";

const AuthContainer = (props) => {
  return (
   <Auth {...props}/>
  );
};

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {login})(AuthContainer);