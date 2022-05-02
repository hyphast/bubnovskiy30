import React from 'react'
import { PageHeader } from 'antd'

const PageHeaderBack = ({ title }) => {
  return <PageHeader onBack={() => window.history.back()} title={title} />
}

export default PageHeaderBack
