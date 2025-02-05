import { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Form, Button, Input } from "antd";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";

const LoginForm = (props: any) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false)

  const onFinish = (loginForm) => {
    try {
      setLoading(true)
    } finally {
      // setLoading(false)
    }
  }

  
  return <Form name='basic' onFinish={onFinish}>
    <Form.Item name='username'>
      <Input placeholder='用户名: admin / user' prefix={<UserOutlined />} />
    </Form.Item>

    <Form.Item name='password'>
      <Input.Password placeholder='密码：123456' prefix={<LockOutlined />} />
    </Form.Item>

    <Form.Item className='login-btn'>
      <Button>{t('login.reset')}</Button>
      <Button htmlType='submit' type='primary' loading={loading}>{t('login.confirm')}</Button>
    </Form.Item>
  </Form>
}

export default LoginForm
