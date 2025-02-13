import React from "react";
import { connect } from "react-redux";
import { Breadcrumb, MenuProps } from 'antd'
import { useLocation } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";


const BreadcrumbNav: React.FC = (props: any) => {
  const { pathname } = useLocation()
  const { themeConfig } = props.global

  const breadcrumbList = props.breadcrumb.breadcrumbList[pathname] || []

  let items: ItemType[] = [{ title: '首页', path: `${HOME_URL}` }]
  if (breadcrumbList.length > 0) {
    items = items.concat(breadcrumbList.map((item: any, index: number) => {
      return {
        title: item !== '首页' ? item : null,
        path: `${index}`
      }
    }))
  }

  return (
    <>
      {
        themeConfig.breadcrumb && (
          <Breadcrumb items={items}>
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
