import { Dropdown, Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'

const MoreButton = (props: any) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const closeMultipleTab = (tabPath?: string) => {
    const handleTabsList  = props.tabsList.filter((item: any) => item.path === tabPath || item.path === HOME_URL)
    props.setTabsList(handleTabsList)
    tabPath && navigate(HOME_URL)
  }

  const menus = <Menu items={[
    { label: t('tabs.closeCurrent'), key: '1', onClick: () => props.delTabs(pathname) },
    { label: t('tabs.closeOther'), key: '2', onClick: () => closeMultipleTab(pathname) },
    { label: t('tabs.closeAll'), key: '3', onClick: () => closeMultipleTab() }
  ]} />


  return <Dropdown overlay={menus} trigger={['click']} placement='bottom'>
    <Button size='small' type='primary' className='more-button'>{t('tabs.more')} <DownOutlined /></Button>
  </Dropdown>
}

export default MoreButton
