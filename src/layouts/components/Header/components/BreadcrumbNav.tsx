import React from "react";
import { connect } from "react-redux";
import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import { HOME_URL } from '@/config/config'


const BreadcrumbNav: React.FC = (props: any) => {
  const { pathname } = useLocation()
  const { themeConfig } = props.global

  const breadcrumbList = props.breadcrumb.breadcrumbList[pathname] || []

  return (
    <>
      {
        themeConfig.breadcrumb && (
          <Breadcrumb>
            <Breadcrumb.Item href={`#${HOME_URL}`}>首页</Breadcrumb.Item>
            {
              breadcrumbList.map((item: any, index: number) => {
                return (
                  <Breadcrumb.Item key={index}>{item !== '首页' ? item : null}</Breadcrumb.Item>
                )
              })
            }
          </Breadcrumb>
        )
      }
    </>
  )
};

const mapStateToProps = state => state
export default connect(mapStateToProps)(BreadcrumbNav)
