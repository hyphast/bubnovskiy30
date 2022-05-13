import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

const PageNotExist = ({ status, message, redirect = '/profile' }) => {
  return (
    <Result
      status={status}
      title={status}
      subTitle={message}
      extra={
        <Button type="primary">
          <Link to={redirect}>На главную страницу</Link>
        </Button>
      }
    />
  )
}

export default PageNotExist
