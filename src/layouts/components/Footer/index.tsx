import React from "react";
import { connect } from 'react-redux'
import './index.less'


const LayoutFooter: React.FC = (props: any) => {
  const { themeConfig } = props
  return <>
    {themeConfig.footer && <div className="footer"><a href="#">2025 @phil</a></div>}
  </>
}

const mapStateToProps = state => state.global
export default connect(mapStateToProps)(LayoutFooter)