import { Modal, message } from 'antd'
import { Ref, useState, useImperativeHandle } from 'react'

interface Props {
  innerRef: Ref<{ showModal: (params: any) => void } | undefined>
}

const InfoModal = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const showModal = () => {
    setModalVisible(true)
  }

  const handleOk = () => {
    setModalVisible(false);
    message.success("修改用户信息成功 🎉🎉🎉");
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  useImperativeHandle(props.innerRef, () => ({
    showModal
  }))

  return <Modal title='个人信息' open={modalVisible} onOk={handleOk} onCancel={handleCancel}>
    <p>User Info...</p>
    <p>User Info...</p>
    <p>User Info...</p>
  </Modal>
}

export default InfoModal
