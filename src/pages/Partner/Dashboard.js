import React, { useEffect, useState } from 'react';
import { Card, Col, Progress, Row, Statistic } from 'antd';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [visitors, setVisitors] = useState(112893);
  const [bookings, setBookings] = useState(55486);
  const [reviews, setReviews] = useState(1234);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Visitors" value={visitors} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Bookings" value={bookings} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Reviews" value={reviews} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={8} style={{ textAlign: 'center' }}>
          <Card title="Visitors" bordered={false}>
            <Progress
              type="dashboard"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={loading ? 0 : 55}
            />
          </Card>
        </Col>
        <Col span={8} style={{ textAlign: 'center' }}>
          <Card title="Bookings" bordered={false}>
            <Progress
              type="dashboard"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={loading ? 0 : 75}
            />
          </Card>
        </Col>
        <Col span={8} style={{ textAlign: 'center' }}>
          <Card title="Reviews" bordered={false}>
            <Progress
              type="dashboard"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={loading ? 0 : 90}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
