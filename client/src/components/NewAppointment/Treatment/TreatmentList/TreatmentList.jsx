import React from 'react';
import {Button, Card, List, Skeleton} from 'antd';
import TreatmentStyles from '../Treatment.module.scss';
import Avatar from 'antd/es/avatar/avatar';
import moment from 'moment';

const TreatmentList = ({appointments, isLoading}) => {
  let data;
  if (!!appointments.length) {
    data = appointments[0].appointments
        .map(item => ({name: item.instructorName, times: item.times}));
  }

  return (
    <>
      {isLoading ? <><Skeleton avatar paragraph={{rows: 3}}/><Skeleton avatar paragraph={{rows: 2}}/></>
        :
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={item => (
            <Card>
              <List.Item className={TreatmentStyles.instructor}>
                <List.Item.Meta
                  avatar={<Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                  title={<a href="https://ant.design">{item.name}</a>}
                  description="Инструктор"
                />
                <div className={TreatmentStyles.times}>
                  {item.times.map(t => {
                    return (
                      <Button key={t.time} className={TreatmentStyles.time} type="primary" shape="round" size={20}>
                        {moment(t.time).utc().utcOffset(240).format('H:mm')}
                      </Button>
                    )
                  })}
                </div>
              </List.Item>
            </Card>
          )}
        />
      }
    </>
  );
}
;

export default TreatmentList;