import React, { useState } from 'react';
import { Popconfirm, Table } from 'antd';

function Partner() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Company Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      email: 'test@gmail.com',
      name: 'Test',
      type: 'Fitness',
      phone: '0991234567',
    },
    {
      id: 2,
      email: 'test@gmail.com',
      name: 'Test',
      type: 'Fitness',
      phone: '0991234567',
    },
    {
      id: 3,
      email: 'test@gmail.com',
      name: 'Test',
      type: 'Fitness',
      phone: '0991234567',
    },
  ]);

  const handleDelete = (id) => {
    const newDataSource = [...dataSource];
    setDataSource(newDataSource.filter((item) => item.id !== id));
  };

  return (
    <div style={{ minHeight: '100%', backgroundColor: 'white' }}>
      <Table bordered columns={columns} dataSource={dataSource} size="middle" pagination={{ pageSize: 10 }} />
    </div>
  );
}

export default Partner;
