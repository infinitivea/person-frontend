import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Register(props) {
  const { Title } = Typography;

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = () => {
    props.setRole('USER');
  };

  return (
    <>
      <Form
        form={form}
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
          <Title underline="true">REGISTER</Title>
        </Row>
        <Row justify="center" style={{ width: '100%' }}>
          <Col span={12}>
            <Form.Item label="EMAIL" name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
              <Input prefix={<UserOutlined />} type="email" />
            </Form.Item>
            <Form.Item
              label="PASSWORD"
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="CONFIRM PASSWORD"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item label="NAME" name="name" rules={[{ required: true, message: 'Please input your Name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="PHONE" name="phone" rules={[{ required: true, message: 'Please input your Phone!' }]}>
              <Input />
            </Form.Item>
            <Row justify="center">
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 100, marginRight: 16 }}>
                  Register
                </Button>
                <Button htmlType="button" onClick={onReset} style={{ width: 100 }}>
                  Reset
                </Button>
                <Row justify="center" style={{ margin: 8 }}>
                  <span style={{ marginRight: 8 }}>Or</span>
                  <Link to="/">already member ?</Link>
                </Row>
              </Form.Item>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Register;
