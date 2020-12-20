import React, { useContext, useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, Radio, Select } from 'antd';
import { Link } from 'react-router-dom';
import UserContext from '../../../context/UserContext';

function Information() {
  const { Title } = Typography;
  const { Option } = Select;

  const { setRole } = useContext(UserContext);
  const [form] = Form.useForm();
  const [type, setType] = useState('Fitness');

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = () => {
    setRole('PARTNER');
  };

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{
        width: '100%',
        minHeight: '100%',
      }}
    >
      <Row justify="center">
        <Title level={2} underline="true">
          INFORMATION DETAILS
        </Title>
      </Row>
      <Row justify="center" style={{ width: '100%' }}>
        <Col span={12}>
          <Form.Item
            label={<span>COMPANY NAME</span>}
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label={<span>COMPANY TYPE</span>}
            rules={[{ required: true, message: 'Please select your Type!' }]}
          >
            <Radio.Group defaultValue={type} size="large" buttonStyle="solid" onChange={onTypeChange}>
              <Radio.Button value="Fitness">Fitness</Radio.Button>
              <Radio.Button value="Auditorium">Auditorium</Radio.Button>
              <Radio.Button value="Meeting Room">Meeting Room</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={<span>BUSINESS DAY</span>}
            name="time"
            rules={[{ required: true, message: 'Please input your Phone!' }]}
          >
            <Row gutter={8} justify="center">
              <Col span={12}>
                <Form.Item label={<span>OPENED</span>} name="open">
                  <Select mode="mode" style={{ width: '100%' }} tokenSeparators={[',']}>
                    {children}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={<span>CLOSED</span>} name="close">
                  <Input type="date" />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            label={<span>BUSINESS HOURS</span>}
            name="time"
            rules={[{ required: true, message: 'Please input your Phone!' }]}
          >
            <Row gutter={8} justify="center">
              <Col span={12}>
                <Form.Item label={<span>OPENED</span>} name="open">
                  <Input type="time" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={<span>CLOSED</span>} name="close">
                  <Input type="time" />
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
  );
}

export default Information;
