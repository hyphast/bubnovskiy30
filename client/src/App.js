import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useRoutes} from "./routes";
import {isAuth} from "./redux/reducers/authActions";

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(isAuth());
    }
  }, [])

  const routes = useRoutes(isAuthorized);
  return (
    <Router>
      <div>
        {routes}
      </div>
    </Router>
  );
};

export default App;
