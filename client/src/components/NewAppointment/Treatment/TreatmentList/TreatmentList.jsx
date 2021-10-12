import React, {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, List, Popover, Skeleton, Space, Tooltip} from 'antd';
import TreatmentStyles from '../Treatment.module.scss';
import moment from 'moment';
import {setAppointmentFinishData} from '../../../../redux/reducers/newAppointment/AppointmentFinishReducer/AppointmentFinishActions';
import classnames from 'classnames';

const TreatmentList = ({appointments, isLoading}) => {
    const dispatch = useDispatch();

    const data = appointments?.appointments
      .map(item => ({time: item.time, numberPatients: item.maxNumberPatients - (item.patients ? item.patients.length : 0)}));

    const minutesOfDay = function (d) {
      return d.getMinutes() + d.getHours() * 60;
    }

    const onSubmit = (time) => {
      dispatch(setAppointmentFinishData(appointments?.date, time, 'Лечебные занятия'));
    }

    const isToday = useMemo(()=> {
      const date = new Date();
      const appDate = new Date(appointments?.date);

      return moment(date).isSame(appDate, 'day');
    }, [appointments])

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
                  <Button disabled={item.numberPatients < 1 || isToday && minutesOfDay(new Date()) > minutesOfDay(new Date(item.time))}
                          className={classnames(TreatmentStyles.times,
                            {
                              [TreatmentStyles.green]: item.numberPatients >= 8,
                              [TreatmentStyles.yellow]: item.numberPatients >= 4 && item.numberPatients < 8,
                              [TreatmentStyles.orange]: item.numberPatients < 4,
                            })
                          }
                          onClick={() => onSubmit(item.time)}
                          type="primary"
                          key={item.time.toString()}
                  >
                    <Popover  content={`Свободных мест: ${item.numberPatients}`}>
                      <Link to='/new-appointment/finish'>{moment(item.time).utc().utcOffset(240).format('H:mm')}</Link>
                    </Popover>
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