import { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Form, Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { HOME_URL } from "@/config/config";

const LoginForm = (props: any) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const onFinish = (loginForm) => {
    try {
      setLoading(true)
      message.success('登录成功！')
      navigate(HOME_URL)
    } finally {
      setLoading(false)
    }
  }

  return <Form form={form} name='basic' onFinish={onFinish}>
    <Form.Item name='username' rules={[{ required: true, message: '请输入用户名' }]}>
      <Input placeholder='用户名: admin / user' prefix={<UserOutlined />} />
    </Form.Item>

    <Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
      <Input.Password placeholder='密码：123456' prefix={<LockOutlined />} />
    </Form.Item>

    <Form.Item className='login-btn'>
      <Button onClick={() => form.resetFields()}>{t('login.reset')}</Button>
      <Button htmlType='submit' type='primary' loading={loading}>{t('login.confirm')}</Button>
    </Form.Item>
  </Form>
}

export default LoginForm

