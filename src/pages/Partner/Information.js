import React, { useContext, useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Radio,
  Select,
  TimePicker,
  Upload,
  message,
  notification,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UserContext from '../../context/UserContext';
import axios from '../../config/axios';
import moment from 'moment';

function Information() {
  const { Title } = Typography;
  const { Option } = Select;

  const { id } = useContext(UserContext);
  const [form] = Form.useForm();

  const format = 'HH:mm';

  const [name, setName] = useState('');
  const [type, setType] = useState('Fitness');
  const [openTime, setOpenTime] = useState(null);
  const [closeTime, setCloseTime] = useState(null);
  const [closeDate, setCloseDate] = useState([]);
  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const optionSelectDay = days.map((day) => (
    <Option key={day} value={day}>
      {day}
    </Option>
  ));

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  useEffect(() => {
    axios.get(`/partners?id=${id}`).then((res) => {
      if (res.data !== null) {
        form.setFieldsValue({
          name: res.data.company_name,
          type: res.data.company_type,
          closeDate: JSON.parse(res.data.closeDate),
          openTime: moment(res.data.openTime, format),
          closeTime: moment(res.data.closeTime, format),
        });
        setName(res.data.company_name);
        setType(res.data.company_type);
      }
    });
    console.log(openTime, closeTime);
  }, []);

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onDayChange = (day) => {
    setCloseDate(day);
  };

  const onOpenTime = (time) => {
    if (time) {
      setOpenTime(time.format(format));
    }
  };

  const onCloseTime = (time) => {
    if (time) {
      setCloseTime(time.format(format));
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('company_name', name);
    formData.append('company_type', type);
    formData.append('image', values.image.file.originFileObj);
    formData.append('closeDate', JSON.stringify(closeDate));
    formData.append('openTime', openTime);
    formData.append('closeTime', closeTime);
    axios.post(`/partners/upload?id=${id}`, formData).then((res) => {
      notification.success({
        description: 'Save success.',
      });
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Row justify="center">
        <Title level={2} underline="true">
          INFORMATION DETAILS
        </Title>
      </Row>
      <Row justify="center" style={{ width: '100%' }}>
        <Col span={12}>
          <Form.Item
            label={<span>COMPANY NAME</span>}
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label={<span>COMPANY TYPE</span>}
            rules={[{ required: true, message: 'Please select your Type!' }]}
          >
            <Radio.Group defaultValue={type} size="large" buttonStyle="solid" onChange={onTypeChange}>
              <Radio.Button value="Fitness">Fitness</Radio.Button>
              <Radio.Button value="Auditorium">Auditorium</Radio.Button>
              <Radio.Button value="Meeting Room">Meeting Room</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="image">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label={<span>CLOSED DAY</span>} style={{ marginBottom: 8 }}>
            <Row gutter={8} justify="center">
              <Col span={24}>
                <Form.Item name="closeDate" style={{ margin: 0 }}>
                  <Select
                    style={{ width: '100%' }}
                    mode="multiple"
                    placeholder="Please select day"
                    value={closeDate}
                    onChange={onDayChange}
                  >
                    {optionSelectDay}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label={<span>OPENED AND CLOSED TIMES</span>} style={{ marginBottom: 0 }}>
            <Row gutter={16} justify="center">
              <Col span={12} style={{ marginBottom: 0 }}>
                <Form.Item name="openTime">
                  <TimePicker style={{ width: '100%' }} format={format} value={openTime} onChange={onOpenTime} />
                </Form.Item>
              </Col>
              <Col span={12} style={{ marginBottom: 0 }}>
                <Form.Item name="closeTime">
                  <TimePicker style={{ width: '100%' }} format={format} value={closeTime} onChange={onCloseTime} />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Row justify="center">
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: 150, marginRight: 16 }}>
                Save
              </Button>
              <Button htmlType="button" onClick={onReset} style={{ width: 150 }}>
                Reset
              </Button>
            </Form.Item>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default Information;
