// import React, {useState} from 'react';
// import {Breadcrumb, Layout, Menu} from 'antd';
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import {NavLink} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {logout} from "../../redux/reducers/authActions";
// import NavbarStyles from './Navbar.module.scss';
//
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
// const Navbar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//
//   const toggle = () => {
//     setCollapsed((prev) => !prev);
//   }
//
//    return (
//     <Layout>
//       <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
//         <div className="logo" />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//           <Menu.Item key="1" icon={<PieChartOutlined />}>
//             Option 1
//           </Menu.Item>
//           <Menu.Item key="2" icon={<DesktopOutlined />}>
//             Option 2
//           </Menu.Item>
//           <SubMenu key="sub1" icon={<UserOutlined />} title="User">
//             <Menu.Item key="3">Tom</Menu.Item>
//             <Menu.Item key="4">Bill</Menu.Item>
//             <Menu.Item key="5">Alex</Menu.Item>
//           </SubMenu>
//           <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
//             <Menu.Item key="6">Team 1</Menu.Item>
//             <Menu.Item key="8">Team 2</Menu.Item>
//           </SubMenu>
//           <Menu.Item key="9" icon={<FileOutlined />}>
//             Files
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout className="site-layout">
//         <Header className="site-layout-background" style={{ padding: 0 }}>
//           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//             className: 'trigger',
//             onClick: toggle,
//           })}
//         </Header>
//         <Content
//           className="site-layout-background"
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//           }}
//         >
//           <Breadcrumb style={{ margin: '16px 0' }}>
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//           </Breadcrumb>
//           Content
//         </Content>
//       </Layout>
//     </Layout>
//   )
// }
//
// export default Navbar;