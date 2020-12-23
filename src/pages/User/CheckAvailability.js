import React, { useContext, useState } from 'react';
import { Button, notification, Popconfirm, Table, Tag } from 'antd';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import axios from '../../config/axios';
import UserContext from '../../context/UserContext';

function CheckAvailability() {
  const location = useLocation();
  const history = useHistory();

  const { id } = useContext(UserContext);
  const param = useParams();

  const [title, setTitle] = useState(location.state.title);
  const [reserveDate, setReserveDate] = useState(location.state.reserveDate);
  const [type, setType] = useState(location.state.type);
  const [email, setEmail] = useState(location.state.email);
  const [phone, setPhone] = useState(location.state.phone);
  const [status, setStatus] = useState('Availability');

  const dataSource = [
    {
      key: '1',
      title,
      reserveDate,
      type,
      email,
      phone,
      status: [status],
    },
  ];

  const handleConfirm = (key) => {
    axios
      .post(`/bookings/create/${param.id}`, {
        company_name: title,
        reserve_date: reserveDate,
        type,
        email,
        phone,
        user_id: id,
      })
      .then((res) => {
        notification.success({
          description: 'Booking Success.',
        });
      });
    history.push({ pathname: '/result', state: { dataSource } });
  };

  const columns = [
    {
      title: 'Company Name',
      key: 'title',
      dataIndex: 'title',
    },
    {
      title: 'ReservationDate',
      key: 'reserveDate',
      dataIndex: 'reserveDate',
    },
    {
      title: 'Booking Type',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => (
        <>
          {status.map((tag) => {
            let color = tag === 'Availability' ? 'green' : 'volcano';
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to confirm?"
            onConfirm={() => handleConfirm(record.key)}
            onCancel={() => history.push('/home')}
          >
            <Button type="link">Confirm</Button>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <>
      <Table bordered pagination={false} columns={columns} dataSource={dataSource}></Table>
    </>
  );
}

export default CheckAvailability;
