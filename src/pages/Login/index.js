import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Form layout="vertical">
        <Row style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Col span={12}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input prefix={<LockOutlined />} type="password" />
            </Form.Item>
            <Row justify="center">
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 100, marginRight: 16 }}>
                  Log in
                </Button>
                <Button htmlType="submit" style={{ width: 100 }}>
                  Register
                </Button>
                <Row justify="center" style={{ margin: 8 }}>
                  <span style={{ marginRight: 8 }}>Or</span>
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
