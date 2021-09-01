import React, {useEffect} from 'react';
import {Layout, Spin} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import classnames from 'classnames';
import {useRoutes} from './routes';
import {initializeApp, setIsReady} from './redux/reducers/appReducer/appAction';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';

const {Content} = Layout;

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(state => state.auth.isAuth);
  const ready = useSelector(state => state.app.isReady);
  const routes = useRoutes(isAuthorized); //TODO Захардкодил isAuthorized в true

  useEffect(() => {
    debugger
    if (localStorage.getItem('token')) {
      dispatch(initializeApp());
    } else {
      dispatch(setIsReady(true));
    }
  }, [dispatch])

  if(!ready) return <Preloader/>

  if (!isAuthorized) return <Router><Layout>{routes}</Layout></Router>
  else return (
    <Router>
      <HeaderContainer/>
      <Layout>
        <NavbarContainer/>
        <Layout className="site-layout">
          <Content
            className={classnames('site-layout-background', 'contentContainer', 'AppContainer')}
          >
            {routes}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
