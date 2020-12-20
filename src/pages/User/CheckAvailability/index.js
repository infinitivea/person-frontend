import React from 'react';
import { Button, Popconfirm, Table, Tag } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';

function CheckAvailability() {
  const location = useLocation();
  const history = useHistory();

  const dataSource = [
    {
      key: '1',
      dateStart: location.state.dateStart,
      dateEnd: location.state.dateEnd,
      type: location.state.type,
      email: location.state.email,
      phone: location.state.phone,
      status: ['Availability'],
    },
  ];

  const handleConfirm = (key) => {
    history.push({ pathname: '/result', state: { dataSource } });
  };

  const columns = [
    {
      title: 'StartTime',
      key: 'dateStart',
      dataIndex: 'dateStart',
    },
    {
      title: 'EndTime',
      key: 'dateEnd',
      dataIndex: 'dateEnd',
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
          <Popconfirm title="Sure to confirm?" onConfirm={() => handleConfirm(record.key)}>
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
