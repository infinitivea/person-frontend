import React, { useContext } from 'react';
import { Form, Input, Button, Row, Col, Typography, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import LocalStorageService from '../../services/LocalStorageService';
import UserContext from '../../context/UserContext';

function Login(props) {
  const { Title } = Typography;
  const { isAuthenticated, setIsAuthenticated, setRole } = useContext(UserContext);
  const history = useHistory();

  const onFinish = (values) => {
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

  return (
    <>
      <Form
        layout="vertical"
        onFinish={onFinish}
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
                <Button type="primary" htmlType="submit" style={{ width: 100, marginRight: 16 }}>
                  Log in
                </Button>
                <Button style={{ width: 100 }}>
                  <Link to="/register">Register</Link>
                </Button>
                <Row justify="center" style={{ margin: 8 }}>
                  <span style={{ marginRight: 8, color: 'wheat' }}>Or</span>
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
