import { connect } from 'react-redux'
import { Dropdown, MenuProps } from 'antd'
import { setAssemblySize } from '@/redux/modules/global/action'

const AssemblySize = (props: any) => {
  const { assemblySize, setAssemblySize } = props
  const onClick = (e: any) => {
    setAssemblySize(e.key)
  }

  const items: MenuProps['items'] = [
    {
      key: 'middle',
      disabled: assemblySize === 'middle',
      label: <span>默认</span>,
      onClick
    },
    {
      key: 'large',
      disabled: assemblySize === 'large',
      label: <span>大型</span>,
      onClick
    },
    {
      key: 'small',
      disabled: assemblySize === 'small',
      label: <span>小型</span>,
      onClick
    }
  ]

  return (
    <Dropdown menu={{ items }} trigger={['click']} arrow={true}>
      <i className="icon-style iconfont icon-contentright"></i>
    </Dropdown>
  )
}

const mapStateToProps = state => state.global
const mapDispatchToProps = { setAssemblySize }
export default connect(mapStateToProps, mapDispatchToProps)(AssemblySize)