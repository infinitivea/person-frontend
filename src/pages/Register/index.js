import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Register() {
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
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your Name!' }]}>
              <Input prefix={<LockOutlined />} type="password" />
            </Form.Item>
            <Row justify="center">
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 100, marginRight: 16 }}>
                  Submit
                </Button>
                <Button htmlType="reset" style={{ width: 100 }}>
                  Reset
                </Button>
              </Form.Item>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Register;
