import React, { useEffect, useState } from 'react';
import { Popconfirm, Table } from 'antd';
import axios from '../../../config/axios';

function Partner() {
  const [dataSource, setDataSource] = useState([]);

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
      dataIndex: 'company_name',
      key: 'company_name',
    },
    {
      title: 'Company Type',
      dataIndex: 'company_type',
      key: 'company_type',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Close Date',
      dataIndex: 'closeDate',
      key: 'closeDate',
    },
    {
      title: 'Open Time',
      dataIndex: 'openTime',
      key: 'openTime',
    },
    {
      title: 'Close Time',
      dataIndex: 'closeTime',
      key: 'closeTime',
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

  const fetchData = () => {
    axios.get('partners/all').then((res) => {
      console.log(res.data);
      setDataSource(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const newDataSource = [...dataSource];
    setDataSource(newDataSource.filter((item) => item.id !== id));
  };

  return <Table bordered columns={columns} dataSource={dataSource} size="middle" pagination={{ pageSize: 10 }} />;
}

export default Partner;
