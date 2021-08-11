import React from 'react';
import {Button, Layout} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import HeaderStyles from './Header.module.scss';

const { Header } = Layout;

const HeaderComponent = ({collapsed, setCollapsed, logout}) => {
  const toggle = () => {
    setCollapsed(!collapsed);
  }
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
      <Button className={HeaderStyles.btn} onClick={() => {logout()}}>Выйти</Button>
    </Header>
  );
};

export default HeaderComponent;