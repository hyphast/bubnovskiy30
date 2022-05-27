import React from 'react'
import { Button, Space, Table, Tag } from 'antd'
import moment from 'moment'
import { localeTable } from '../localeTable'
import PageNotExist from '../../resultsComponents/PageNotExist/PageNotExist'

const { Column } = Table

const UpcomingRecords = ({ upcomingRecords, deleteRecord, recordsIds }) => {
  // console.log(upcomingRecords[upcomingRecords.length - 1]?.record)
  // if (upcomingRecords[upcomingRecords.length - 1]?.record === null)
  //   return <PageNotExist status={500} message="Что-то пошло не так 😔" />

  const data = upcomingRecords?.map((item) => ({
    key: item.record._id,
    date: item.record.date,
    time: item.record.time,
    appType: item.record.appointmentType,
    status: item.record.status,
    modifiedDate: item.record.modifiedDate,
  }))

  return (
    <Table
      dataSource={data}
      locale={localeTable}
      title={() => <h2>Текущие записи</h2>}
    >
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
            <Tag color="yellow" key={status}>
              {status}
            </Tag>
          </>
        )}
        responsive={['sm']}
      />
      <Column
        title="Дата операции"
        key="Date of operation"
        render={(text, record) => {
          return moment(record.modifiedDate).fromNow()
        }}
        sorter={(a, b) => new Date(a.modifiedDate) - new Date(b.modifiedDate)}
        defaultSortOrder="descend"
        responsive={['md']}
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
        responsive={['lg']}
      />
    </Table>
  )
}

export default UpcomingRecords
