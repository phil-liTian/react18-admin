import React from "react"
import SwitchDark from "@c/SwitchDark";
import loginLeft from "@a/images/login_left.png";
import LoginForm from './components/LoginForm'
import './index.less'

const Login: React.FC = () => {
  return <div className='login-container'>
    <SwitchDark />
    <div className='login-box'>
      <div className='login-left'>
        <img src={loginLeft} alt="login" />
      </div>
      <div className='login-form'>
        <LoginForm />
      </div>
    </div>
  </div>
}

export default Login

