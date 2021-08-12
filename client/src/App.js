import React, {useEffect} from 'react';
import {Breadcrumb, Layout} from "antd";
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useRoutes} from './routes';
import {initializeApp} from './redux/reducers/appAction';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

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
  if (!isAuthorized) return <Router><Layout style={{height:"100vh"}}>{routes}</Layout></Router>
  else return (
    <Router>
      <Layout style={{height:"100vh"}} >
        <NavbarContainer/>
        <Layout className="site-layout">
          <HeaderContainer/>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
            {/*  <Breadcrumb.Item>User</Breadcrumb.Item>*/}
            {/*  <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
            {/*</Breadcrumb>*/}
            <Breadcrumbs/>
            {routes}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
