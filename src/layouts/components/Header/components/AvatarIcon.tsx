
import { Avatar, Dropdown, Menu, message, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import avatar from '@a/images/avatar.png'
import { HOME_URL } from '@/config/config'
import InfoModal from './InfoModal'
import PasswordModal from './PasswordModal'
import { setToken } from '@/redux/modules/global/action'
import { connect } from 'react-redux'

const AvatarIcon = (props) => {
  const { setToken } = props
  const navigate = useNavigate()
  interface ModalProps {
    showModal: (params: { name: number }) => void
  }
  const infoRef = useRef<ModalProps>()
  const passRef = useRef<ModalProps>()

  const logout = () => {
    Modal.confirm({
      title: '温馨提示',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出登录',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        setToken('')
        message.success('退出登录成功')
        navigate('/login')
      }
    })
  }

  const menu = <Menu 
    items={[
      {
        key: "1",
        label: <span className="dropdown-item">首页</span>,
        onClick: () => navigate(HOME_URL)
      },
      {
        key: "2",
        label: <span className="dropdown-item">个人信息</span>,
        onClick: () => infoRef.current!.showModal({ name: 11 })
      },
      {
        key: "3",
        label: <span className="dropdown-item">修改密码</span>,
        onClick: () => passRef.current!.showModal({ name: 11 })
      },
      {
        type: "divider"
      },
      {
        key: "4",
        label: <span className="dropdown-item">退出登录</span>,
        onClick: logout
      }
    ]}
  />


  return <>
    <Dropdown overlay={menu} trigger={['click']} arrow placement='bottom'>
      <Avatar size='large' src={avatar} />
    </Dropdown>
    <InfoModal innerRef={infoRef} />
    <PasswordModal innerRef={passRef} />
  </>
}

const mapDispatchToProps = { setToken }
export default connect(null, mapDispatchToProps)(AvatarIcon)