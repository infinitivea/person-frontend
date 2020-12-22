import React, { useState } from 'react';
import { List, Card, Row, Col, Typography, Tag, Button } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';

function PartnerList() {
  const { Text } = Typography;

  const location = useLocation();
  const history = useHistory();

  const [title, setTitle] = useState('Fitness First');
  const [reserveDate, setReserveDate] = useState(location.state.reserveDate);
  const [type, setType] = useState(location.state.type);
  const [email, setEmail] = useState(location.state.email);
  const [phone, setPhone] = useState(location.state.phone);
  const [status, setStatus] = useState(false);

  console.log(title);

  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
    {
      title: 'Title 7',
    },
    {
      title: 'Title 8',
    },
  ];

  const onBooking = (e) => {
    console.log(e);
    history.push({ pathname: '/check', state: { title, reserveDate, type, email, phone } });
    setStatus(!status);
  };
  const onCancel = () => {
    setStatus(!status);
  };

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 4,
      }}
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <Card key={index} title={item.title}>
            <Row gutter={16} justify="center">
              <Col span={7}>
                <img
                  alt="room image"
                  src="https://lh3.googleusercontent.com/proxy/ADtjhP7t2cPxjIMpL52_bBxxAxNN7hwO3LLYitb7utxVNlTNMIsO1pqUzc4zisIbXKRDh8wpotbC0ECcs1bq716JmjJiCJHS8HfNc4yARAbh8zqDe0BCBlGn-jNmCg"
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'cover' }}
                />
              </Col>
              <Col span={10}>
                <Row>
                  <Tag color="green">Availability</Tag>
                </Row>
                <Row>
                  <Text>Time: 9:00 - 21:00</Text>
                </Row>
                <Row>
                  <Text type="danger">Closed: Sat Sun</Text>
                </Row>
              </Col>
              <Col span={7}>
                {!status ? (
                  <Button style={{ width: '100%' }} type="primary" onClick={onBooking}>
                    Booking
                  </Button>
                ) : (
                  <Button style={{ width: '100%' }} type="primary" danger onClick={onCancel}>
                    Que
                  </Button>
                )}
              </Col>
            </Row>
          </Card>
        </List.Item>
      )}
      style={{ width: '96%' }}
    />
  );
}

export default PartnerList;
