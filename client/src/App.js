import React, {useEffect} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import classnames from 'classnames';
import {useRoutes} from './routes';
import {initializeApp} from './redux/reducers/appReducer/appAction';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import './App.css';

const {Content} = Layout;

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(initializeApp());
    }
  }, [dispatch])

  const routes = useRoutes(isAuthorized); //TODO Захардкодил isAuthorized в true
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
