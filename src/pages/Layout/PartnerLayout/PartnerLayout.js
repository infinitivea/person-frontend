import React, { useContext, useState } from 'react';
import logo from '../../../images/SYNHUB_logo.png';
import { Layout, Menu, Breadcrumb, notification } from 'antd';
import {
  EditOutlined,
  LaptopOutlined,
  LogoutOutlined,
  CommentOutlined,
  NotificationOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import LocalStorageService from '../../../services/LocalStorageService';
import UserContext from '../../../context/UserContext';

function PartnerLayout({ children }) {
  const { Header, Content, Sider, Footer } = Layout;

  const { isAuthenticated, setIsAuthenticated, setRole } = useContext(UserContext);
  const history = useHistory();

  const onClick = () => {
    LocalStorageService.removeToken();
    setIsAuthenticated(false);
    setRole('GUEST');
    notification.success({
      description: 'Logout success.',
    });
    history.push('/');
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          height: '64px',
          backgroundColor: 'lightgreen',
        }}
      >
        <img src={logo} alt="SYN HUB logo" height="64px" style={{ padding: '5px 0', objectFit: 'contain' }} />
      </Header>
      <Layout>
        <Sider width={200} theme="light">
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="sub1" icon={<PieChartOutlined />}>
              <Link to="/partner/dashboard">
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<EditOutlined />}>
              <Link to="/partner/details">
                <span>Information Details</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="sub3" icon={<LaptopOutlined />}>
              Booking Management
            </Menu.Item>
            <Menu.Item key="sub4" icon={<CommentOutlined />}>
              Review Management
            </Menu.Item>
            <Menu.Item key="sub5" icon={<NotificationOutlined />}>
              Notification
            </Menu.Item>
            <Menu.Item key="sub6" icon={<LogoutOutlined />} onClick={onClick}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Management</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>© 2020 Copyright: Nuttawat Rojboonnark</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PartnerLayout;
