import React from 'react';
import logo from '../images/SYNHUB_logo.png';
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
            backgroundImage: 'url(' + 'https://img.8wallpapers.com/uploads/2019/02/9153659ff97742d7a355094a.jpg' + ')',
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
                src="https://lh4.googleusercontent.com/proxy/c-hvCO5ZLSkmBkzBP7Skdp-pGTgwDqDWcyUW0ceuuaF4asFDEmtVUYrNq21ZxmBw9f32diwxSVcE5HjN6OY3zusp_MBCbzipZk39gJ5Umb8ZCqM_R91sPAIFisUFjVxs"
                alt="decorate image"
                width="100%"
                height="100%"
                style={{ objectFit: 'inherit' }}
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
          <h1>© 2020 Copyright: Ball</h1>
        </Footer>
      </Layout>
    </>
  );
}

export default Home;
