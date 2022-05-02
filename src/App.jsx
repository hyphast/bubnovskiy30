import React, { useCallback, useEffect, useMemo } from 'react'
import { Alert, Button, Layout, notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { useRoutes } from './routes'
import {
  clearMessage,
  initializeApp,
  setIsReady,
} from './redux/reducers/appReducer/appAction'
import NavbarContainer from './components/Navbar/NavbarContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import './App.css'
import Preloader from './components/common/Preloader/Preloader'

const { Content } = Layout

function App() {
  const dispatch = useDispatch()
  let history = useHistory()
  const isAuthorized = useSelector((state) => state.auth.isAuth)
  const globalMessage = useSelector((state) => state.app.globalMessage)
  const ready = useSelector((state) => state.app.isReady)
  const isActivated = useSelector((state) => state.profile.isActivated)
  const routes = useRoutes(isAuthorized) //TODO Захардкодил isAuthorized в true

  const openNotification = useCallback(() => {
    notification[globalMessage.type]({
      message: 'Уведомление',
      description: globalMessage.message,
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        history.push(globalMessage.redirect)
      },
    })
  }, [globalMessage, history])

  useEffect(() => {
    globalMessage.message && openNotification() //TODO was: globalMessage.message && openNotification()
    return () => {
      dispatch(clearMessage())
    }
  }, [globalMessage.message, openNotification, dispatch]) //TODO was: [globalMessage.message, clearMessage]

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(initializeApp())
    } else {
      dispatch(setIsReady(true))
    }
  }, [dispatch])

  if (!ready) return <Preloader />

  if (!isAuthorized) return <Layout>{routes}</Layout>
  else
    return (
      <>
        {!isActivated ? (
          <Alert
            message="Вы не подтвердили Email"
            banner
            // showIcon={false}
          />
        ) : null}
        <HeaderContainer />
        <Layout>
          <NavbarContainer />
          <Layout className="site-layout">
            <Content
              className={classnames(
                'site-layout-background',
                'contentContainer',
                'AppContainer',
              )}
            >
              {routes}
            </Content>
          </Layout>
        </Layout>
      </>
    )
}

export default App
