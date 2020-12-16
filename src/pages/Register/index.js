import React, { useContext } from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function Register() {
  const { Title } = Typography;

  const { setRole } = useContext(UserContext);
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = () => {
    setRole('USER');
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{
          width: '100%',
        }}
      >
        <Row justify="center">
          <Title underline="true" style={{ color: 'wheat' }}>
            REGISTER - MEMBER
          </Title>
        </Row>
        <Row justify="center" style={{ width: '100%' }}>
          <Col span={12}>
            <Form.Item
              label={<span style={{ color: 'wheat' }}>EMAIL</span>}
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input prefix={<UserOutlined />} type="email" />
            </Form.Item>
            <Form.Item
              label={<span style={{ color: 'wheat' }}>PASSWORD</span>}
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item
              name="confirm"
              label={<span style={{ color: 'wheat' }}>CONFIRM PASSWORD</span>}
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
            <Form.Item
              label={<span style={{ color: 'wheat' }}>NAME</span>}
              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span style={{ color: 'wheat' }}>PHONE</span>}
              name="phone"
              rules={[{ required: true, message: 'Please input your Phone!' }]}
            >
              <Input />
            </Form.Item>
            <Row justify="center">
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 150, marginRight: 16 }}>
                  Register
                </Button>
                <Button htmlType="button" onClick={onReset} style={{ width: 150 }}>
                  Reset
                </Button>
                <Row justify="center" style={{ margin: 8 }}>
                  <Link to="/p/register">Register as partner</Link>
                  <span style={{ margin: '0 8px', color: 'wheat' }}>Or</span>
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
