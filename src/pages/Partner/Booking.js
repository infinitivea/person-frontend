import { Space, Table } from 'antd';
import React from 'react';

function Booking() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Accept</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'abc@mail.com',
      date: new Date().toLocaleDateString(),
      startTime: new Date().toLocaleTimeString(),
      endTime: new Date().toLocaleTimeString(),
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'abc@mail.com',
      date: new Date().toLocaleDateString(),
      startTime: new Date().toLocaleTimeString(),
      endTime: new Date().toLocaleTimeString(),
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 'abc@mail.com',
      date: new Date().toLocaleDateString(),
      startTime: new Date().toLocaleTimeString(),
      endTime: new Date().toLocaleTimeString(),
    },
    {
      key: '4',
      name: 'Jane Black',
      email: 'abc@mail.com',
      date: new Date().toLocaleDateString(),
      startTime: new Date().toLocaleTimeString(),
      endTime: new Date().toLocaleTimeString(),
    },
  ];
  return <Table bordered columns={columns} dataSource={data} />;
}

export default Booking;
