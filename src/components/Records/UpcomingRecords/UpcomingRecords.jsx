import React from 'react'
import { Button, Space, Table, Tag } from 'antd'
import moment from 'moment'

const { Column } = Table

const UpcomingRecords = ({ upcomingRecords, deleteRecord, recordsIds }) => {
  const data = upcomingRecords?.map((item) => ({
    key: item.record._id,
    date: item.record.date,
    time: item.record.time,
    appType: item.record.appointmentType,
  }))

  return (
    <Table dataSource={data} title={() => <h2>Текущие записи</h2>}>
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
        title="Отмена записи"
        key="cancel"
        render={(text, record) => {
          return (
            <Space size="middle">
              <Button
                type="primary"
                onClick={() => deleteRecord(record.key)}
                loading={recordsIds.some((id) => id === record.key)}
                danger
              >
                Отменить
              </Button>
            </Space>
          )
        }}
      />
    </Table>
  )
}

export default UpcomingRecords
