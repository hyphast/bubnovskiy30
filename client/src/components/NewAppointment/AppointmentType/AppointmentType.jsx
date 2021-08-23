import React from 'react';
import classnames from 'classnames';
import {Card} from 'antd';
import NewAppointmentStyles from '../NewAppointment.module.scss';
import ConsultationImg from '../../../assets/images/Consultation.jpg';
import TreatmentImg from '../../../assets/images/Treatment.jpg';
import PhysicalTrainingImg from '../../../assets/images/Physical training.jpg';
import {Link} from 'react-router-dom';

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
      <Link to='/new-appointment/treatment'>
        <Card hoverable
              className={NewAppointmentStyles.card}
              cover={<img alt="image" src={TreatmentImg}/>}
        >
          <Meta title='Лечебные занятия' description="12 лечебных занятий"/>
        </Card>
      </Link>
      <Card hoverable
            className={NewAppointmentStyles.card}
            cover={<img alt="image" src={PhysicalTrainingImg}/>}
      >
        <Meta title='Физкультурно-оздоровительные занятия' description="Физкультурно-оздоровительные занятия"/>
      </Card>
    </div>
  );
};

export default AppointmentType;