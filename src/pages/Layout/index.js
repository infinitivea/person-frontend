import React from 'react';
import bg from '../../images/bg.jpg';
import logo from '../../images/SYNHUB_logo.png';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

function NavLayout({ children }) {
  const { Header, Content, Footer } = Layout;

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
        <Link to="/">เข้าสู่ระบบ</Link>
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
