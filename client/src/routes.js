import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Records from "./components/Records/Records";
import PersonalPage from "./components/Profile/PersonalPage";
import Auth from "./components/Auth/Auth";
import Registration from "./components/Auth/Registration/Registration";

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/' exact>
          <PersonalPage/>
        </Route>
        <Route path='/records' exact>
          <Records/>
        </Route>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/auth' exact>
        <Auth/>
      </Route>
      <Route path='/registration' exact>
        <Registration/>
      </Route>
      <Redirect to='/auth'/>
    </Switch>

  )
}