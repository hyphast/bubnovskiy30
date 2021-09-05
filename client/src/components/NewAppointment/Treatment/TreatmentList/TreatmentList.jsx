import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, List, Skeleton, Space} from 'antd';
import TreatmentStyles from '../Treatment.module.scss';
import moment from 'moment';
import {setAppointmentFinishData} from '../../../../redux/reducers/newAppointment/AppointmentFinishReducer/AppointmentFinishActions';
import classnames from 'classnames';

const TreatmentList = ({appointments, isLoading}) => {
    const dispatch = useDispatch();

    const data = appointments[0]?.appointments
      .map(item => ({time: item.time, numberPatients: item.numberPatients, free: item.free}));

    const minutesOfDay = function (d) {
      return d.getMinutes() + d.getHours() * 60;
    }

    const onSubmit = (time) => {
      dispatch(setAppointmentFinishData(appointments[0].date, time, 'Лечебные занятия'));
    }

    const date = new Date().getDate();
    const appDate = new Date(appointments[0]?.date).getDate();
    const isToday = date === appDate;

    return (
      <div className={TreatmentStyles.list}>
        <h2>Выберите время для записи</h2>
        {isLoading ?
          <>
              <Space size='middle' direction="vertical">
                  <Skeleton.Input style={{ width: 850 }} active />
                  <Skeleton.Input style={{ width: 850 }} active />
              </Space>
          </>
          :
          <>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                  <Button disabled={item.free < 2 || isToday && minutesOfDay(new Date()) > minutesOfDay(new Date(item.time))}
                          className={classnames(TreatmentStyles.times,
                            {
                              [TreatmentStyles.orange]: item.numberPatients >= 8,
                              [TreatmentStyles.yellow]: item.numberPatients >= 4 && item.numberPatients < 8,
                              [TreatmentStyles.green]: item.numberPatients < 4,
                            })
                          }
                          onClick={() => onSubmit(item.time)}
                          type="primary"
                          key={item.time.toString()}
                  >
                      <Link to='/new-appointment/finish'>{moment(item.time).utc().utcOffset(240).format('H:mm')}</Link>
                  </Button>
                </List.Item>
            )}>
          </List>
          </>
        }
      </div>
    );
  }
;

export default TreatmentList;