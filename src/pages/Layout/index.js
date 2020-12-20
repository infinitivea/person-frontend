import React, { useContext, useState } from 'react';
import bg from '../../images/bg.jpg';
import logo from '../../images/SYNHUB_logo.png';
import { Badge, Button, Col, Divider, Layout, Row } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import LocalStorageService from '../../services/LocalStorageService';
import UserContext from '../../context/UserContext';

function NavLayout({ children }) {
  const { Header, Content, Footer } = Layout;

  const { isAuthenticated, setIsAuthenticated, setRole } = useContext(UserContext);
  const [count, setCount] = useState(5);
  const history = useHistory();

  const onClick = () => {
    LocalStorageService.removeToken();
    setIsAuthenticated(false);
    setRole('GUEST');
    history.push('/');
  };

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px',
          backgroundColor: 'lightgreen',
        }}
      >
        <img src={logo} alt="SYN HUB logo" height="64px" style={{ padding: '5px 0', objectFit: 'contain' }} />
        {!isAuthenticated && (
          <Button type="link" onClick={onClick}>
            <Link to="/home">Login</Link>
          </Button>
        )}
        {isAuthenticated && (
          <Row>
            <Col span={24}>
              <Badge count={count} style={{ marginRight: 8 }}>
                <Button type="primary" shape="circle" icon={<BellOutlined />} style={{ marginRight: 8 }} />
              </Badge>
              <Divider type="vertical" style={{ backgroundColor: 'black' }} />
              <Button type="link" onClick={onClick}>
                Logout
              </Button>
            </Col>
          </Row>
        )}
      </Header>
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
        }}
      >
        {children}
      </Content>
      <Footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '64px',
          backgroundColor: 'lightgreen',
        }}
      >
        <h1>© 2020 Copyright: Nuttawat Rojboonnark</h1>
      </Footer>
    </Layout>
  );
}

export default NavLayout;
