import React, { useContext, useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, Radio, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import axios from '../../config/axios';

function PartnerRegister() {
  const { Title } = Typography;

  const history = useHistory();
  const { setRole } = useContext(UserContext);
  const [form] = Form.useForm();
  const [type, setType] = useState('Fitness');

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    axios
      .post('/partners/register', {
        email: values.email,
        password: values.password,
        company_name: values.name,
        company_type: values.type,
        phone: values.phone,
      })
      .then((res) => {
        notification.success({
          description: 'Register success.',
        });
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: 'Email or Phone has already taken.',
        });
      });
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ type }}
        onFinish={onFinish}
        style={{
          width: '100%',
        }}
      >
        <Row justify="center">
          <Title underline="true" style={{ color: 'wheat' }}>
            REGISTER - PARTNER
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
              label={<span style={{ color: 'wheat' }}>COMPANY NAME</span>}
              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="type"
              label={<span style={{ color: 'wheat' }}>COMPANY TYPE</span>}
              rules={[{ required: true, message: 'Please select your Type!' }]}
            >
              <Radio.Group size="large" buttonStyle="solid" onChange={onTypeChange}>
                <Radio.Button value="Fitness">Fitness</Radio.Button>
                <Radio.Button value="Auditorium">Auditorium</Radio.Button>
                <Radio.Button value="Meeting Room">Meeting Room</Radio.Button>
              </Radio.Group>
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
                  <Link to="/register">Register as member</Link>
                  <span style={{ margin: '0 8px', color: 'wheat' }}>Or</span>
                  <Link to="/">already partner ?</Link>
                </Row>
              </Form.Item>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default PartnerRegister;
