import React from 'react'
import { Table, Tag } from 'antd'
import moment from 'moment'
import { localeTable } from '../localeTable'

const { Column } = Table

const FinishedRecords = ({ finishedRecords }) => {
  const data = finishedRecords?.map((item) => ({
    key: item.record._id,
    date: item.record.date,
    time: item.record.time,
    appType: item.record.appointmentType,
    status: item.record.status,
    modifiedDate: item.record.modifiedDate,
  }))

  return (
    <Table dataSource={data} locale={localeTable} title={() => <h2>Архив</h2>}>
      <Column
        title="Дата"
        dataIndex="date"
        key="date"
        render={(date) => (
          <>{moment(date).utc().utcOffset(240).format('DD.MM.YYYY')}</>
        )}
        sorter={(a, b) => new Date(a.date) - new Date(b.date)}
        // defaultSortOrder="ascend"
      />
      <Column
        title="Время"
        dataIndex="time"
        key="time"
        render={(time) => (
          <>{moment(time).utc().utcOffset(240).format('H:mm')}</>
        )}
        sorter={(a, b) => new Date(a.time) - new Date(b.time)}
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
      <Column
        title="Дата операции"
        key="Date of operation"
        render={(text, record) => {
          return moment(record.modifiedDate).fromNow()
        }}
        sorter={(a, b) => new Date(a.modifiedDate) - new Date(b.modifiedDate)}
        defaultSortOrder="descend"
      />
    </Table>
  )
}

export default FinishedRecords
