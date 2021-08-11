import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Records from "./components/Records/Records";
import Profile from "./components/Profile/Profile";
import RegistrationContainer from "./components/Auth/Registration/RegistrationContainer";
import LoginContainer from "./components/Auth/Login/LoginContainer";

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <>
        <Switch>
          <Route path='/' exact>
            <Profile/>
          </Route>
          <Route path='/records' exact>
            <Records/>
          </Route>
        </Switch>
      </>
    )
  }

  return (
    <Switch>
      <Route path='/login' exact>
        <LoginContainer/>
      </Route>
      <Route path='/registration' exact>
        <RegistrationContainer/>
      </Route>
      <Redirect to='/login'/>
    </Switch>
  )
}