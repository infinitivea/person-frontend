import React, { useContext } from 'react';
import logo from '../../../images/SYNHUB_logo.png';
import { Layout, Menu, Breadcrumb, notification, Badge } from 'antd';
import { UserOutlined, LaptopOutlined, LogoutOutlined, NotificationOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import LocalStorageService from '../../../services/LocalStorageService';

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
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Account Management">
              <Menu.Item key="1">Member</Menu.Item>
              <Menu.Item key="2">Partner</Menu.Item>
              <Menu.Item key="3">Admin</Menu.Item>
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
        </Layout>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
