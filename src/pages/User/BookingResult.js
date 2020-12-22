import React from 'react';
import { Button, Result } from 'antd';
import { Link, useLocation } from 'react-router-dom';

function BookingResult() {
  const location = useLocation();

  console.log(location);

  return (
    <Result
      status="success"
      title={<span style={{ color: 'wheat' }}>Successfully {location.state.dataSource[0].type} booking!</span>}
      subTitle={
        <span style={{ color: 'white' }}>
          Booking Number: 2017182818828182881 Admin will be confirm takes 1-5 minutes, please wait.
        </span>
      }
      extra={[
        <Button type="primary">
          <Link to="/home">Back to Home</Link>
        </Button>,
      ]}
    />
  );
}

export default BookingResult;
