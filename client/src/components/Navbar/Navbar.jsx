import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/reducers/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Navbar page</h2>
      <NavLink to='/'>Profile</NavLink>
      <NavLink to='/records'>Records</NavLink>
      <button onClick={() => dispatch(logout())}>Выйти</button>
    </div>

  );
};

export default Navbar;