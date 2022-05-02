import React from 'react'
import { Table, Tag } from 'antd'
import moment from 'moment'

const { Column } = Table

const FinishedRecords = ({ finishedRecords }) => {
  const data = finishedRecords?.map((item) => ({
    key: item.record._id,
    date: item.record.date,
    time: item.record.time,
    appType: item.record.appointmentType,
    status: item.record.status,
  }))

  return (
    <Table dataSource={data} title={() => <h2>Архив</h2>}>
      <Column
        title="Дата"
        dataIndex="date"
        key="date"
        render={(date) => (
          <>{moment(date).utc().utcOffset(240).format('DD.MM.YYYY')}</>
        )}
        sorter={(a, b) => new Date(a.date) - new Date(b.date)}
        defaultSortOrder="ascend"
      />
      <Column
        title="Время"
        dataIndex="time"
        key="time"
        render={(time) => (
          <>{moment(time).utc().utcOffset(240).format('H:mm')}</>
        )}
      />
      <Column
        title="Тип занятия"
        dataIndex="appType"
        key="appType"
        render={(type) => (
          <>
            <Tag color="blue" key={type}>
              {type}
            </Tag>
          </>
        )}
        filters={[
          {
            text: 'Лечебные занятия',
            value: 'Лечебные занятия',
          },
          {
            text: 'Физкультурно-оздоровительные занятия',
            value: 'Физкультурно-оздоровительные занятия',
          },
        ]}
        onFilter={(value, record) => record.appType === value}
      />
      <Column
        title="Статус"
        dataIndex="status"
        key="status"
        render={(status) => (
          <>
            <Tag color="red" key={status}>
              {status}
            </Tag>
          </>
        )}
      />
    </Table>
  )
}

export default FinishedRecords
