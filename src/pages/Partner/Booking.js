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
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'abc@mail.com',
      date: new Date().toLocaleDateString(),
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 'abc@mail.com',
      date: new Date().toLocaleDateString(),
    },
    {
      key: '4',
      name: 'Jane Black',
      email: 'abc@mail.com',
      date: new Date().toLocaleDateString(),
    },
  ];
  return <Table bordered columns={columns} dataSource={data} />;
}

export default Booking;
