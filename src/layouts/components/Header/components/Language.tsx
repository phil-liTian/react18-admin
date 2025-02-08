
import { Dropdown, Menu } from 'antd'
import { connect } from 'react-redux'
import { setLanguage } from '@/redux/modules/global/action'

const Language = (props: any) => {
  const { language, setLanguage } = props
  const menu = <Menu items={[
    {
      key: '1',
      label: <span>简体中文</span>,
      disabled: language === 'zh',
      onClick: () => setLanguage('zh')
    },
    {
      key: '2',
      label: <span>English</span>,
      disabled: language === 'en',
      onClick: () => setLanguage('en')
    }
  ]} />


  return (
    <Dropdown overlay={menu} trigger={['click']} arrow={true}>
      <i className="icon-style iconfont icon-zhongyingwen"></i>
    </Dropdown>
  )
}


const mapStateToProps = (state: any) => state.global
const mapDispatchToProps = { setLanguage }
export default connect(mapStateToProps, mapDispatchToProps)(Language)
