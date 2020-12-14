import React from 'react';
import { Button, Result } from 'antd';
import { Link, useLocation } from 'react-router-dom';

function BookingResult() {
  const location = useLocation();

  return (
    <Result
      status="success"
      title={`ทำการจอง ${location.state.dataSource[0].type} เรียบร้อยแล้ว!`}
      subTitle={'หมายเลขการจอง: 2017182818828182881 ได้รับการจองแล้ว ... โปรดรอแอดมินยืนยัน'}
      extra={[
        <Button type="primary">
          <Link to="/">กลับสู่หน้าหลัก</Link>
        </Button>,
        <Button>
          <Link to="/">จองอีกครั้ง</Link>
        </Button>,
      ]}
    />
  );
}

export default BookingResult;
