import React from 'react';
import bg from '../../images/bg.jpg';
import decorate from '../../images/decorate.jpg';
import logo from '../../images/SYNHUB_logo.png';
import { Button, Col, DatePicker, Form, Image, Input, Layout, Radio, Row } from 'antd';

function Home() {
  const { Header, Footer, Content } = Layout;
  const { RangePicker } = DatePicker;

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Header
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            backgroundColor: 'lightgreen',
          }}
        >
          <img
            src={logo}
            alt="SYN HUB logo"
            width="100%"
            height="100px"
            style={{ padding: '5px 0', objectFit: 'contain' }}
          />
        </Header>
        <Content
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
          }}
        >
          <Row
            style={{
              border: '1px solid black',
              margin: '5% 20%',
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
              <Form layout="vertical" style={{ margin: '20px 5%' }}>
                <Form.Item label={<h4>SELECT DATE AND TIME</h4>}>
                  <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    size="large"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
                <Form.Item label={<h4>BOOKING TYPE</h4>}>
                  <Radio.Group defaultValue="a" size="large">
                    <Radio.Button value="a">Fitness</Radio.Button>
                    <Radio.Button value="b">Auditorium</Radio.Button>
                    <Radio.Button value="c">Meeting Room</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={<h4>EMAIL</h4>}>
                  <Input placeholder="Enter your email" size="large" />
                </Form.Item>
                <Form.Item label={<h4>PHONE</h4>}>
                  <Input placeholder="Enter your phone number" size="large" />
                </Form.Item>
                <Button type="primary" size="large" style={{ width: '100%' }}>
                  Check Availability
                </Button>
              </Form>
            </Col>
          </Row>
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            backgroundColor: 'lightgreen',
          }}
        >
          <h1>© 2020 Copyright: Nuttawat Rojboonnark</h1>
        </Footer>
      </Layout>
    </>
  );
}

export default Home;
