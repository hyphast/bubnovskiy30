import React from 'react';
import { Calendar, Badge } from 'antd';
import PageHeaderBack from "../../common/PageHeader/PageHeader";

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'error', content: 'Массаж' },
        { type: 'success', content: 'Физическая культура' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'Массаж' },
        { type: 'warning', content: 'Массаж' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'Физическая культура' },
        { type: 'warning', content: 'Массаж' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

const RecordsCalendar = () => {

  return (
    <div style={{height: '800px'}}>
      <PageHeaderBack title='НАЗАД'/>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>
  );
};

export default RecordsCalendar;