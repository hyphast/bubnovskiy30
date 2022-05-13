import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import RegistrationContainer from './components/Auth/Registration/RegistrationContainer'
import LoginContainer from './components/Auth/Login/LoginContainer'
import NewAppointment from './components/NewAppointment/NewAppointment'
import TreatmentContainer from './components/NewAppointment/Treatment/TreatmentContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import AppointmentFinishContainer from './components/NewAppointment/AppointmentFinish/AppointmentFinishContainer'
import EditProfileContainer from './components/Profile/EditProfile/EditProfileContainer'
import Settings from './components/Settings/Settings'
import RecordsCalendar from './components/Records/RecordsCalendar/RecordsCalendar'
import RecordsContainer from './components/Records/RecordsContainer'
import SuccessResult from './components/resultsComponents/SuccessResult/SuccessResult'
import PageNotExist from './components/resultsComponents/PageNotExist/PageNotExist'
import AboutUs from './components/AboutUs/AboutUs'

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <>
        <Switch>
          <Route path={['/profile', '/']} exact>
            <ProfileContainer />
          </Route>
          <Route path="/edit-profile" exact>
            <EditProfileContainer />
          </Route>
          <Route path="/new-appointment" exact>
            <NewAppointment />
          </Route>
          <Route path="/new-appointment/treatment" exact>
            <TreatmentContainer />
          </Route>
          <Route path="/new-appointment/finish" exact>
            <AppointmentFinishContainer />
          </Route>
          <Route path="/new-appointment/success" exact>
            <SuccessResult />
          </Route>
          <Route path="/records" exact>
            <RecordsContainer />
          </Route>
          <Route path="/records-calendar" exact>
            <RecordsCalendar />
          </Route>
          <Route path="/settings" exact>
            <Settings />
          </Route>
          <Route path="/about-us" exact>
            <AboutUs />
          </Route>
          <Redirect from="/login" to="/profile" />
          <Redirect from="/registration" to="/profile" />
          <Route
            render={() => (
              <PageNotExist
                status={404}
                message="Извините, страница не существует 😔"
              />
            )}
          />
        </Switch>
      </>
    )
  }

  return (
    <Switch>
      <Route path={['/login', '/']} exact>
        <LoginContainer />
      </Route>
      <Route path="/registration" exact>
        <RegistrationContainer />
      </Route>
      <Redirect to="/login" />
    </Switch>
  )
}
