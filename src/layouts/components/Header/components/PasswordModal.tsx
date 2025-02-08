import { message, Modal } from 'antd'
import { Ref, useState, useImperativeHandle } from 'react'
interface Props {
  innerRef: Ref<{showModal: (params: any) => void} | undefined>
}

const PasswordModal = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false)
  const handleClose = () => {
    setVisible(false)
  }

  const showModal = (params: any) => {
    setVisible(true)
  }

  useImperativeHandle(props.innerRef, () => ({
    showModal
  }))

  const handleOk = () => {
    message.success('密码修改成功')
    setVisible(false)
  }

  return <Modal open={visible} onCancel={handleClose} onOk={handleOk} title='修改密码'>
    <p>Some Password...</p>
    <p>Some Password...</p>
    <p>Some Password...</p>
  </Modal>
}


export default PasswordModal