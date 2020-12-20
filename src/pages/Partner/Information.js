import React, { useContext, useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, Radio, Select, TimePicker } from 'antd';
import moment from 'moment';
import UserContext from '../../context/UserContext';

function Information() {
  const { Title } = Typography;
  const { Option } = Select;

  const { setRole } = useContext(UserContext);
  const [form] = Form.useForm();
  const [type, setType] = useState('Fitness');

  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  const [closeDay, setCloseDay] = useState([days[5], days[6]]);

  const optionSelectDay = days.map((day) => (
    <Option key={day} value={day}>
      {day}
    </Option>
  ));

  const format = 'HH:mm';

  const onDayChange = (day) => {
    setCloseDay(day);
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = () => {
    setRole('PARTNER');
  };

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
            label={<span>CLOSED DAY</span>}
            name="day"
            rules={[{ required: true, message: 'Please input opened and closed day!' }]}
            style={{ margin: 0 }}
          >
            <Row gutter={8} justify="center">
              <Col span={24}>
                <Form.Item name="closeDay">
                  <Select mode="multiple" style={{ width: '100%' }} defaultValue={closeDay} onChange={onDayChange}>
                    {optionSelectDay}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            label={<span>OPENED AND CLOSED TIMES</span>}
            name="time"
            rules={[{ required: true, message: 'Please input your Phone!' }]}
          >
            <Row gutter={16} justify="center">
              <Col span={12}>
                <Form.Item name="openTime">
                  <TimePicker defaultValue={moment('10:00', format)} format={format} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="closeTime">
                  <TimePicker defaultValue={moment('21:00', format)} format={format} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Row justify="center">
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: 150, marginRight: 16 }}>
                Save
              </Button>
              <Button htmlType="button" onClick={onReset} style={{ width: 150 }}>
                Reset
              </Button>
            </Form.Item>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default Information;
