import React, {useEffect} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useRoutes} from './routes';
import {initializeApp} from './redux/reducers/appAction';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import './App.css';
import classnames from 'classnames';

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
      <Layout>
        <NavbarContainer/>
        <Layout className="site-layout">
          <HeaderContainer/>
          <Content
            className={classnames('site-layout-background', 'contentContainer', 'AppContainer')}
          >
            {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
            {/*  <Breadcrumb.Item>User</Breadcrumb.Item>*/}
            {/*  <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
            {/*</Breadcrumb>*/}
            {/*<Breadcrumbs/>*/}
            {routes}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
