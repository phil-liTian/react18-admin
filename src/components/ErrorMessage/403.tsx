import React from "react"
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from "@/config/config"
import './index.less'

const NoAuth: React.FC = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate(HOME_URL)
  }

  return <Result
    title='403'
    subTitle="Sorry, you are not authorized to access this page."
    status='403'
    extra={<Button onClick={goHome} type="primary">Back Home</Button>}/>
}

export default NoAuth
