import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Records from './components/Records/Records';
import Profile from './components/Profile/Profile';
import RegistrationContainer from './components/Auth/Registration/RegistrationContainer';
import LoginContainer from './components/Auth/Login/LoginContainer';
import NewAppointment from './components/NewAppointment/NewAppointment';
import TreatmentContainer from './components/NewAppointment/Treatment/TreatmentContainer';
import AppointmentFinish from './components/NewAppointment/AppointmentFinish/AppointmentFinish';

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <>
        <Switch>
          <Route path="/profile" exact>
            <Profile/>
          </Route>
          <Route path="/new-appointment" exact>
            <NewAppointment/>
          </Route>
          <Route path="/new-appointment/treatment" exact>
            <TreatmentContainer/>
          </Route>
          <Route path="/new-appointment/finish" exact>
            <AppointmentFinish/>
          </Route>
          <Route path="/records" exact>
            <Records/>
          </Route>
          <Redirect to="/profile"/>
        </Switch>
      </>
    )
  }

  return (
    <Switch>
      <Route path="/login" exact>
        <LoginContainer/>
      </Route>
      <Route path="/registration" exact>
        <RegistrationContainer/>
      </Route>
      <Redirect to="/login"/>
    </Switch>
  )
}