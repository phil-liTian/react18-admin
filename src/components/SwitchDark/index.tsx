import { Switch } from "antd";
import { connect } from "react-redux";
import { setThemeConfig } from "@/redux/modules/global/action";

const SwitchDark = (props) => {
  const { themeConfig, setThemeConfig } = props

  const onChange = (checked: boolean) => {
    setThemeConfig({ ...themeConfig, isDark: checked })
  }
  
  return <Switch 
    className='dark'
    onChange={onChange}
    defaultChecked={themeConfig.isDark}
    checkedChildren={<>🌞</>}
    unCheckedChildren={<>🌜</>} />
}


const mapStateToProps = state => state.global;
const mapDispatchToProps = { setThemeConfig }

export default connect(mapStateToProps, mapDispatchToProps)(SwitchDark)