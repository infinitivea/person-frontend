import React, { useContext, useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, Radio, notification, TimePicker, Select } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import axios from '../../config/axios';

function PartnerRegister() {
  const { Title } = Typography;
  const { Option } = Select;

  const history = useHistory();
  const { setRole } = useContext(UserContext);
  const [form] = Form.useForm();
  const [type, setType] = useState('Fitness');
  const [closeDate, setCloseDate] = useState([]);
  const [openTime, setOpenTime] = useState(null);
  const [closeTime, setCloseTime] = useState(null);

  const format = 'HH:mm';
  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const optionSelectDay = days.map((day) => (
    <Option key={day} value={day}>
      {day}
    </Option>
  ));

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onDayChange = (day) => {
    setCloseDate(day);
  };

  const onOpenTime = (time) => {
    if (time) {
      setOpenTime(time.format(format));
    }
  };

  const onCloseTime = (time) => {
    if (time) {
      setCloseTime(time.format(format));
    }
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
            <Form.Item label={<span style={{ color: 'wheat' }}>CLOSED DAY</span>} required>
              <Row gutter={8} justify="center">
                <Col span={24}>
                  <Form.Item
                    name="closeDate"
                    rules={[{ required: true, message: 'Please input your Closed Day!' }]}
                    style={{ margin: 0 }}
                  >
                    <Select
                      style={{ width: '100%' }}
                      mode="multiple"
                      placeholder="Please select day"
                      value={closeDate}
                      onChange={onDayChange}
                    >
                      {optionSelectDay}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item label={<span style={{ color: 'wheat' }}>OPENED AND CLOSED TIMES</span>} required>
              <Row gutter={16} justify="center">
                <Col span={12} style={{ marginBottom: 0 }}>
                  <Form.Item name="openTime" rules={[{ required: true, message: 'Please input your Open Times!' }]}>
                    <TimePicker style={{ width: '100%' }} format={format} value={openTime} onChange={onOpenTime} />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ marginBottom: 0 }}>
                  <Form.Item name="closeTime" rules={[{ required: true, message: 'Please input your Close Times!' }]}>
                    <TimePicker style={{ width: '100%' }} format={format} value={closeTime} onChange={onCloseTime} />
                  </Form.Item>
                </Col>
              </Row>
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
