import React from 'react'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const InputField = () => {
  return (
    <div>
    <Input placeholder="Enter Username" prefix={<UserOutlined />} />
    <br />
    </div>
  )
}
