import React from 'react'
import { Layout, Avatar } from 'antd'
import classnames from 'classnames'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderComponentStyles from './HeaderComponent.module.scss'
import HeaderInfo from './HeaderInfo/HeaderInfo'
import HeaderStyles from './Header.scss'

const { Header } = Layout

const HeaderComponent = (props) => {
  return (
    <Header
      className={classnames(
        'site-layout-background',
        HeaderComponentStyles.header,
      )}
    >
      <HeaderLogo />
      <HeaderInfo {...props} />
    </Header>
  )
}

export default HeaderComponent
