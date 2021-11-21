import React from 'react';
import {Button, Space, Table, Tag} from "antd";
import moment from 'moment';

const {Column} = Table;

const UpcomingRecords = ({upcomingRecords}) => {
  const data = upcomingRecords?.map(item => ({
      key: item.time,
      date: item.date,
      time: item.time,
      appType: item.appointmentType,
  }));

  return (
    <Table dataSource={data} title={() => <h2>Текущие записи</h2>}>
      <Column
        title="Дата"
        dataIndex="date"
        key="date"
        render={date => (
          <>
          {moment(date).utc().utcOffset(240).format('DD.MM.YYYY')}
          </>
        )}
      />
      <Column
        title="Время"
        dataIndex="time"
        key="time"
        render={time => (
          <>
            {moment(time).utc().utcOffset(240).format('H:mm')}
          </>
        )}
      />
      <Column
        title="Тип занятия"
        dataIndex="appType"
        key="appType"
        render={type => (
          <>
            <Tag color="blue" key={type}>
              {type}
            </Tag>
          </>
        )}
      />
      <Column
        title="Отмена записи"
        key="cancel"
        render={(text, record) => (
          <Space size="middle">
            <Button type='dashed' danger style={{color: 'red'}}>Отменить</Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default UpcomingRecords;