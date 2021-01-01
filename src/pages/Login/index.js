import React, { useContext, useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, notification, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import LocalStorageService from '../../services/LocalStorageService';
import UserContext from '../../context/UserContext';

function Login() {
  const { Title } = Typography;

  const { setIsAuthenticated, setRole } = useContext(UserContext);
  const history = useHistory();

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
        if (LocalStorageService.getRole() === 'USER') {
          setRole(LocalStorageService.getRole());
          setIsAuthenticated(true);
          history.push('/home');
        } else if (LocalStorageService.getRole() === 'PARTNER') {
          setRole(LocalStorageService.getRole());
          setIsAuthenticated(true);
          history.push('/partner/dashboard');
        } else {
          setRole(LocalStorageService.getRole());
          setIsAuthenticated(true);
          history.push('/admin/users');
        }
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: 'Login failed.',
        });
      });
  };

  return (
    <>
      <Form
        layout="vertical"
        onFinish={onMemberFinish}
        style={{
          width: '100vw',
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
    </>
  );
}

export default Login;
