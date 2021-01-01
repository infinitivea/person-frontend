import React, { useEffect, useState } from 'react';
import { Popconfirm, Space, Table } from 'antd';
import axios from '../../../config/axios';

function Member() {
  const [dataSource, setDataSource] = useState([]);

  const fetchData = () => {
    axios.get('users/all').then((res) => {
      setDataSource(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setDataSource(dataSource.filter((item) => item.id !== id));
    fetchData();
  };

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
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
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

  return <Table bordered columns={columns} dataSource={dataSource} size="middle" pagination={{ pageSize: 10 }} />;
}

export default Member;
