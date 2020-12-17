import React, { useContext, useState } from 'react';
import logo from '../../../images/SYNHUB_logo.png';
import { Layout, Menu, Breadcrumb, notification, Badge } from 'antd';
import { UserOutlined, LaptopOutlined, LogoutOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import LocalStorageService from '../../../services/LocalStorageService';
import { Footer } from 'antd/lib/layout/layout';

function AdminLayout({ children }) {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

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

  const [collapsed, setCollapsed] = useState(false);

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
        <Sider width={200} theme="light" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Account Management">
              <Menu.Item key="1">
                <span>Member</span>
                <Link to="/admin/users" />
              </Menu.Item>
              <Menu.Item key="2">
                <span>Partner</span>
                <Link to="/admin/partners" />
              </Menu.Item>
              <Menu.Item key="3">
                <span>Admin</span>
                <Link to="/admin/admins" />
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<LaptopOutlined />}>
              Review Management
            </Menu.Item>
            <Menu.Item key="sub3" icon={<NotificationOutlined />}>
              Notification
            </Menu.Item>
            <Menu.Item key="13" icon={<LogoutOutlined />} onClick={onClick}>
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

export default AdminLayout;
