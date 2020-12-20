import React, { useEffect, useState } from 'react';
import { Card, Col, Progress, Row, Statistic } from 'antd';

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Row gutter={[16, 8]}>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Visitors" value={112893} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Bookings" value={112893} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Reviews" value={112893} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 8]}>
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
