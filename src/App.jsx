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
import Preloader from './components/common/Preloader/Preloader'
import { selectGlobalMessage } from './redux/reducers/appReducer/appSelectors'
import '@csstools/normalize.css'
import './App.css'

const { Content } = Layout

function App() {
  const dispatch = useDispatch()
  let history = useHistory()
  const isAuthorized = useSelector((state) => state.auth.isAuth)
  const getGlobalMessage = useMemo(() => selectGlobalMessage, []) //TODO переделать!
  const globalMessage = useSelector((state) => getGlobalMessage(state))
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
  }, [
    globalMessage.message,
    globalMessage.type,
    globalMessage.redirect,
    history,
  ])

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
            style={{ textAlign: 'center' }}
            message="Вы не подтвердили Email"
            banner
            // showIcon={false}
          />
        ) : null}
        <div>
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
        </div>
      </>
    )
}

export default App
