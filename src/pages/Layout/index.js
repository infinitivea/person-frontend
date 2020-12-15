import React, { useContext } from 'react';
import bg from '../../images/bg.jpg';
import logo from '../../images/SYNHUB_logo.png';
import { Button, Layout } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import LocalStorageService from '../../services/LocalStorageService';
import UserContext from '../../context/UserContext';

function NavLayout({ children }) {
  const { Header, Content, Footer } = Layout;

  const { isAuthenticated, setIsAuthenticated, setRole } = useContext(UserContext);
  const history = useHistory();

  const onClick = () => {
    LocalStorageService.removeToken();
    setIsAuthenticated(false);
    setRole('GUEST');
    history.push('/');
  };

  return (
    <Layout style={{ height: '100vh' }}>
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
            <Link to="/home">เข้าสู่ระบบ</Link>
          </Button>
        )}
        {isAuthenticated && (
          <Button type="link" onClick={onClick}>
            ออกจากระบบ
          </Button>
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
