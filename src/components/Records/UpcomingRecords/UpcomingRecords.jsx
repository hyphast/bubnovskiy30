import React from 'react'
import { Button, Space, Table, Tag } from 'antd'
import moment from 'moment'
import { localeTable } from '../localeTable'

const { Column } = Table

const UpcomingRecords = ({ upcomingRecords, deleteRecord, recordsIds }) => {
  // if (upcomingRecords[upcomingRecords.length - 1]?.record === null)
  //   return <PageNotExist status={500} message="Что-то пошло не так 😔" />

  console.log('Render', deleteRecord, recordsIds)

  const columns = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      render: (date) => (
        <>{moment(date).utc().utcOffset(240).format('DD.MM.YYYY')}</>
      ),
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: 'Время',
      dataIndex: 'time',
      render: (time) => <>{moment(time).utc().utcOffset(240).format('H:mm')}</>,
      sorter: (a, b) => new Date(a.time) - new Date(b.time),
    },
    {
      title: 'Тип занятия',
      dataIndex: 'appType',
      render: (type) => (
        <>
          <Tag color="blue" key={type}>
            {type}
          </Tag>
        </>
      ),
      filters: [
        {
          text: 'Лечебные занятия',
          value: 'Лечебные занятия',
        },
        {
          text: 'Физкультурно-оздоровительные занятия',
          value: 'Физкультурно-оздоровительные занятия',
        },
      ],
      onFilter: (value, record) => record.appType === value,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      render: (status) => (
        <>
          <Tag color="yellow" key={status}>
            {status}
          </Tag>
        </>
      ),
      responsive: ['sm'],
    },
    {
      title: 'Дата операции',
      render: (text, record) => moment(record.modifiedDate).fromNow(),
      sorter: (a, b) => new Date(a.modifiedDate) - new Date(b.modifiedDate),
      // sortDirections: 'ascend',
      responsive: ['md'],
    },
    {
      title: 'Отмена записи',
      render: (text, record) => (
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
      ),
      responsive: ['lg'],
    },
  ]

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
      columns={columns}
      title={() => <h2>Текущие записи</h2>}
    />
  )
}

export default UpcomingRecords
