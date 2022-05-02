import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

const PageNotExist = ({ redirect }) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Извните, страница не существует."
      extra={
        <Button type="primary">
          <Link to={redirect}>На главную страницу</Link>
        </Button>
      }
    />
  )
}

export default PageNotExist
