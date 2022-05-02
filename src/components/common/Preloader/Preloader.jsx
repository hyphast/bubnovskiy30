import React from 'react'
import { Spin } from 'antd'
import PreloaderStyles from './Preloader.module.scss'

const Preloader = () => {
  return (
    <div className={PreloaderStyles.preloader}>
      <Spin size="large" />
    </div>
  )
}

export default Preloader
