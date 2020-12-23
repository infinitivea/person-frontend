import { Button, notification, Space, Table } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import axios from '../../config/axios';

function Booking() {
  const { id } = useContext(UserContext);
  const [data, setData] = useState([]);

  const onAccept = (bookingId) => {
    axios
      .patch('/bookings/approve', {
        booking_id: bookingId,
        partner_id: id,
      })
      .then((res) => {
        notification.success({
          description: 'Accept success.',
        });
        fetchData();
      });
  };

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Date',
      dataIndex: 'reserve_date',
      key: 'reserve_date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => onAccept(record.id)}>
            Accept
          </Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const fetchData = () => {
    axios.get(`/bookings?id=${id}`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Table bordered columns={columns} dataSource={data} />;
}

export default Booking;
