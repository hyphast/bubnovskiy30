import React from 'react';
import {Button, Card, List} from 'antd';
import TreatmentStyles from './Treatment.module.scss';
import Avatar from 'antd/es/avatar/avatar';
import moment from 'moment';
import PageHeaderBack from '../../common/PageHeader/PageHeader';
import TreatmentDatePicker from './TreatmentDatePicker/TreatmentDatePicker';
import './Treatment.scss';


const Treatment = ({appointments, isLoading, getAppointments}) => {

  const disabledDate = current => {
    return current < moment().startOf('day');
  };

  const onChange = (date) => {
    date?._d && getAppointments(+new Date(date._d));
  };

  let data;
  if(!!appointments.length) {
    data = appointments[0].appointments.map(item => ({title: item.instructorName}));
  }

  return (
    <>
      <div className={TreatmentStyles.container}>
        <div className={TreatmentStyles.header}>
          <PageHeaderBack title='НАЗАД'/>
        </div>
        <div className={TreatmentStyles.subtitle}>
          <h2>Лечебные занятия</h2>
        </div>
        <div className={TreatmentStyles.calendar}>
          <h3>Календарь</h3>
          <TreatmentDatePicker disabledDate={disabledDate} onChange={onChange} size='large'/>
        </div>
        <div className={TreatmentStyles.content}>
          <List
            itemLayout="vertical"
            dataSource={data}
            renderItem={item => (
              <Card>
              <List.Item className={TreatmentStyles.instructor}>
                <List.Item.Meta
                  avatar={ <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Инструктор"
                />
                <div className={TreatmentStyles.times}>
                  {appointments[0].appointments.map(app => app.times.map(t => {
                   return (
                     <Button className={TreatmentStyles.time} type="primary" shape="round" size={20} >
                       {moment(t.time).utc().format('H:mm')}
                    </Button>
                   )
                  }))}
                </div>
              </List.Item>
              </Card>
            )}
          />
        </div>
      </div>
    </>
  )
};

export default Treatment;