import React from 'react'
import { ConfigProvider, DatePicker } from 'antd'
import ruRU from 'antd/lib/locale/ru_RU'
import 'moment/locale/ru'
import moment from 'moment'

const TreatmentDatePicker = ({ getAppointments }) => {
  const onChange = (date) => {
    if (date) {
      const d = date?._d
      const res = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
      getAppointments(res?.toISOString())
    }
  }

  const disabledDate = (current) => {
    return current < moment().startOf('day')
  }

  return (
    <>
      <ConfigProvider locale={ruRU}>
        <DatePicker
          disabledDate={disabledDate}
          onChange={onChange}
          size="large"
        />
      </ConfigProvider>
    </>
  )
}

export default TreatmentDatePicker
