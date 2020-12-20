import React, { useContext, useEffect, useState } from 'react';
import decorate from '../../images/decorate.jpg';
import { Button, Col, DatePicker, Form, Image, Input, Radio, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import axios from '../../config/axios';

function Home() {
  const { RangePicker } = DatePicker;

  const [form] = Form.useForm();
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [type, setType] = useState('Fitness');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { id } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    axios.get(`/users?id=${id}`).then((res) => {
      console.log(id);
      if (res.data !== null) {
        form.setFieldsValue({
          email: res.data.email,
          phone: res.data.phone,
        });
      }
    });
  }, []);

  const onDateChange = (dates, dateStrings) => {
    setDateStart(dateStrings[0]);
    setDateEnd(dateStrings[1]);
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const onFinish = () => {
    history.push({ pathname: '/check', state: { dateStart, dateEnd, type, email, phone } });
  };

  return (
    <>
      <Row
        style={{
          border: '1px solid black',
          margin: '0 20%',
        }}
      >
        <Col span={10} style={{ height: '500px' }}>
          <Image
            // src="https://www.milpitas-chamber.com/wp-content/uploads/2017/10/booking-tips.jpg"
            src={decorate}
            alt="decorate image"
            width="100%"
            height="100%"
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col span={14} style={{ height: '500px', backgroundColor: 'white' }}>
          <Form form={form} layout="vertical" style={{ margin: '20px 5%' }} onFinish={onFinish}>
            <Form.Item name="dates" label={<h4>SELECT DATE AND TIME</h4>}>
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                size="large"
                style={{ width: '100%' }}
                onChange={onDateChange}
              />
            </Form.Item>
            <Form.Item name="type" label={<h4>BOOKING TYPE</h4>}>
              <Radio.Group defaultValue={type} size="large" onChange={onTypeChange}>
                <Radio.Button value="Fitness">Fitness</Radio.Button>
                <Radio.Button value="Auditorium">Auditorium</Radio.Button>
                <Radio.Button value="Meeting Room">Meeting Room</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="email"
              label={<h4>EMAIL</h4>}
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input type="email" placeholder="Enter your email" size="large" onChange={onEmailChange} />
            </Form.Item>
            <Form.Item
              name="phone"
              label={<h4>PHONE</h4>}
              rules={[{ required: true, message: 'Please input your Phone!' }]}
            >
              <Input placeholder="Enter your phone number" size="large" onChange={onPhoneChange} />
            </Form.Item>
            <Button htmlType="submit" type="primary" size="large" style={{ width: '100%' }}>
              Check Availability
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Home;
