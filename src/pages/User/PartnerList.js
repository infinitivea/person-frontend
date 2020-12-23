import React, { useEffect, useState } from 'react';
import { List, Card, Row, Col, Typography, Tag, Button } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import axios from '../../config/axios';

function PartnerList() {
  const { Text } = Typography;

  const location = useLocation();
  const history = useHistory();

  const [data, setData] = useState([]);
  const [title, setTitle] = useState('Fitness First');
  const [reserveDate, setReserveDate] = useState(location.state.reserveDate);
  const [type, setType] = useState(location.state.type);
  const [email, setEmail] = useState(location.state.email);
  const [phone, setPhone] = useState(location.state.phone);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios.get('/partners/all').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const onBooking = (title, id) => {
    history.push({ pathname: `/check/${id}`, state: { title, reserveDate, type, email, phone } });
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
      renderItem={(item) => (
        <List.Item>
          <Card title={item.company_name}>
            <Row gutter={16} justify="center">
              <Col span={7}>
                <img alt="room image" src={item.image} width="100%" height="100%" style={{ objectFit: 'cover' }} />
              </Col>
              <Col span={10}>
                <Row>
                  <Tag color={item.status === 'Availability' ? 'green' : 'volcano'}>{item.status}</Tag>
                </Row>
                <Row>
                  <Text>
                    Time: {item.openTime} - {item.closeTime}
                  </Text>
                </Row>
                <Row>
                  <Text type="danger">Closed: {JSON.parse(item.closeDate).join(' ')}</Text>
                </Row>
              </Col>
              <Col span={7}>
                {!status ? (
                  <Button
                    style={{ width: '100%' }}
                    type="primary"
                    onClick={() => onBooking(item.company_name, item.id)}
                  >
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
