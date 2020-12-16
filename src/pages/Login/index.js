import React, { useContext, useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, notification, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import LocalStorageService from '../../services/LocalStorageService';
import UserContext from '../../context/UserContext';

function Login(props) {
  const { Title } = Typography;

  const { setIsAuthenticated, setRole } = useContext(UserContext);
  const [type, setType] = useState('MEMBER');
  const history = useHistory();

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onMemberFinish = (values) => {
    axios
      .post('/users/login', {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        notification.success({
          description: 'Login success.',
        });
        LocalStorageService.setToken(res.data.token);
        setRole('USER');
        setIsAuthenticated(true);
        history.push('/home');
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: 'Login failed.',
        });
      });
  };

  const onPartnerFinish = (values) => {};

  const onAdminFinish = (values) => {
    setRole('ADMIN');
    notification.success({
      description: 'Login success.',
    });
    history.push('/admin');
  };

  return (
    <>
      {type === 'MEMBER' ? (
        <Form
          layout="vertical"
          onFinish={onMemberFinish}
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Row>
            <Title underline="true" style={{ color: 'wheat' }}>
              LOGIN
            </Title>
          </Row>
          <Radio.Group defaultValue="MEMBER" size="large" buttonStyle="solid" onChange={onTypeChange}>
            <Radio.Button value="MEMBER" style={{ marginRight: 8 }}>
              MEMBER
            </Radio.Button>
            <Radio.Button value="PARTNER" style={{ marginRight: 8 }}>
              PARTNER
            </Radio.Button>
            <Radio.Button value="ADMIN">ADMIN</Radio.Button>
          </Radio.Group>
          <Row justify="center" style={{ width: '100%' }}>
            <Col span={12}>
              <Form.Item
                label={<span style={{ color: 'wheat' }}>EMAIL</span>}
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Please input your email." type="email" />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: 'wheat' }}>PASSWORD</span>}
                name="password"
                style={{ color: 'wheat' }}
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input prefix={<LockOutlined />} placeholder="Please input your password." type="password" />
              </Form.Item>
              <Row justify="center">
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: 150, marginRight: 16 }}>
                    Log in
                  </Button>
                  <Button style={{ width: 150 }}>
                    <Link to="/register">Register</Link>
                  </Button>
                  <Row justify="center" style={{ margin: 8 }}>
                    <Link to="/home">Login as Guest</Link>
                    <span style={{ margin: '0 8px', color: 'wheat' }}>Or</span>
                    <Link to="">forget password</Link>
                  </Row>
                </Form.Item>
              </Row>
            </Col>
          </Row>
        </Form>
      ) : type === 'PARTNER' ? (
        <Form
          layout="vertical"
          onFinish={onPartnerFinish}
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Row>
            <Title underline="true" style={{ color: 'wheat' }}>
              LOGIN
            </Title>
          </Row>
          <Radio.Group defaultValue="MEMBER" size="large" buttonStyle="solid" onChange={onTypeChange}>
            <Radio.Button value="MEMBER" style={{ marginRight: 8 }}>
              MEMBER
            </Radio.Button>
            <Radio.Button value="PARTNER" style={{ marginRight: 8 }}>
              PARTNER
            </Radio.Button>
            <Radio.Button value="ADMIN">ADMIN</Radio.Button>
          </Radio.Group>
          <Row justify="center" style={{ width: '100%' }}>
            <Col span={12}>
              <Form.Item
                label={<span style={{ color: 'wheat' }}>EMAIL</span>}
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Please input your email." type="email" />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: 'wheat' }}>PASSWORD</span>}
                name="password"
                style={{ color: 'wheat' }}
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input prefix={<LockOutlined />} placeholder="Please input your password." type="password" />
              </Form.Item>
              <Row justify="center">
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: 150, marginRight: 16 }}>
                    Log in
                  </Button>
                  <Button style={{ width: 150 }}>
                    <Link to="/register">Register</Link>
                  </Button>
                  <Row justify="center" style={{ margin: 8 }}>
                    <Link to="/home">Login as Guest</Link>
                    <span style={{ margin: '0 8px', color: 'wheat' }}>Or</span>
                    <Link to="">forget password</Link>
                  </Row>
                </Form.Item>
              </Row>
            </Col>
          </Row>
        </Form>
      ) : (
        <Form
          layout="vertical"
          onFinish={onAdminFinish}
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Row>
            <Title underline="true" style={{ color: 'wheat' }}>
              LOGIN
            </Title>
          </Row>
          <Radio.Group defaultValue="MEMBER" size="large" buttonStyle="solid" onChange={onTypeChange}>
            <Radio.Button value="MEMBER" style={{ marginRight: 8 }}>
              MEMBER
            </Radio.Button>
            <Radio.Button value="PARTNER" style={{ marginRight: 8 }}>
              PARTNER
            </Radio.Button>
            <Radio.Button value="ADMIN">ADMIN</Radio.Button>
          </Radio.Group>
          <Row justify="center" style={{ width: '100%' }}>
            <Col span={12}>
              <Form.Item
                label={<span style={{ color: 'wheat' }}>USERNAME</span>}
                name="email"
                // rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Please input your username." />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: 'wheat' }}>PASSWORD</span>}
                name="password"
                style={{ color: 'wheat' }}
                // rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input prefix={<LockOutlined />} placeholder="Please input your password." type="password" />
              </Form.Item>
              <Row justify="center">
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: 150, marginRight: 16 }}>
                    Log in
                  </Button>
                  <Button style={{ width: 150 }}>
                    <Link to="/register">Register</Link>
                  </Button>
                  <Row justify="center" style={{ margin: 8 }}>
                    <Link to="/home">Login as Guest</Link>
                    <span style={{ margin: '0 8px', color: 'wheat' }}>Or</span>
                    <Link to="">forget password</Link>
                  </Row>
                </Form.Item>
              </Row>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}

export default Login;
