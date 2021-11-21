import React from 'react';
import {Space, Table, Tag} from "antd";

const {Column} = Table;

const data = [
  {
    key: '1',
    date: '05.11.2021',
    time: '8:00',
    appType: 'Массаж',
    status: 'Пройден',
  },
  {
    key: '2',
    date: '07.11.2021',
    time: '18:30',
    appType: 'Лечебные занятия',
    status: 'Запись была отменена',
  },
  {
    key: '3',
    date: '09.11.2021',
    time: '14:00',
    appType: 'Флоатинг',
    status: 'Пройден',
  },
];

const FinishedRecords = () => {
  return (
    <Table dataSource={data} title={() => <h2>Прошедшие записи</h2>}>
      <Column title="Дата" dataIndex="date" key="date"/>
      <Column title="Время" dataIndex="time" key="time"/>
      <Column
        title="Тип занятия"
        dataIndex="appType"
        key="appType"
        render={tags => (
          <>
            <Tag color="blue" key={tags}>
              {tags}
            </Tag>
          </>
        )}
      />
      <Column
        title="Статус"
        dataIndex="status"
        key="status"
        render={status => (
          <>
            <Tag color="green" key={status}>
              {status}
            </Tag>
          </>
        )}
      />
    </Table>
  );
};

export default FinishedRecords;