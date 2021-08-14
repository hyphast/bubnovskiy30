import React from 'react';
import classnames from 'classnames';
import {Card} from 'antd';
import NewAppointmentStyles from '../NewAppointment.module.scss';
import ConsultationImg from '../../../assets/images/Consultation.jpg';
import TreatmentImg from '../../../assets/images/Treatment.jpg';
import PhysicalTrainingImg from '../../../assets/images/Physical training.jpg';

const { Meta } = Card;

const AppointmentType = () => {
  return (
    <div className={classnames('steps-content', NewAppointmentStyles.cards)}>
      <Card hoverable
            className={NewAppointmentStyles.card}
            cover={<img alt="image" src={ConsultationImg}/>}
      >
        <Meta title='Консультация' description="Медицинская консультация врача"/>
      </Card>
      <Card hoverable
            className={NewAppointmentStyles.card}
            cover={<img alt="image" src={TreatmentImg}/>}
      >
        <Meta title='Лечебные занятия' description="12 лечебный занятий"/>
      </Card>
      <Card hoverable
            className={NewAppointmentStyles.card}
            cover={<img alt="image" src={PhysicalTrainingImg}/>}
      >
        <Meta title='Физкультурно-оздоровительные занятия' description="Физкультура"/>
      </Card>
    </div>
  );
};

export default AppointmentType;