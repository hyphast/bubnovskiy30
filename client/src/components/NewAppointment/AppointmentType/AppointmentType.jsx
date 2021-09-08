import React from 'react';
import classnames from 'classnames';
import {Card} from 'antd';
import NewAppointmentStyles from '../NewAppointment.module.scss';
import ConsultationImg from '../../../assets/images/Consultation.jpg';
import TreatmentImg from '../../../assets/images/Treatment.jpg';
import PhysicalTrainingImg from '../../../assets/images/PhysicalTraining.jpg';
import FloatingImg from '../../../assets/images/floating.jpg';
import MassageImg from '../../../assets/images/massage.jpg';
import {Link} from 'react-router-dom';

const {Meta} = Card;

const AppointmentType = () => {
  return (
    <div className={classnames('steps-content', NewAppointmentStyles.cards)}>
      <div className={NewAppointmentStyles.card}>
        <Card hoverable
              cover={<img alt="image" src={ConsultationImg}/>}
        >
          <Meta title="Консультация" description="Медицинская консультация врача"/>
        </Card>
      </div>
      <div className={NewAppointmentStyles.card}>
        <Link to="/new-appointment/treatment">
          <Card hoverable
                cover={<img alt="image" src={TreatmentImg}/>}
          >
            <Meta title="Лечебные занятия" description="1-й, 2-й и 3-й цикл"/>
          </Card>
        </Link>
      </div>
      <div className={NewAppointmentStyles.card}>
        <Card hoverable
              cover={<img alt="image" src={PhysicalTrainingImg}/>}
        >
          <Meta title="Физкультурно-оздоровительные занятия" description="4-й цикл и последующие"/>
        </Card>
      </div>
      <div className={NewAppointmentStyles.card}>
        <Card hoverable
              cover={<img alt="image" src={MassageImg}/>}
        >
          <Meta title="Массаж" description="Запись на массаж"/>
        </Card>
      </div>
      <div className={classnames(NewAppointmentStyles.card,NewAppointmentStyles.lastCard)}>
        <Card hoverable
              cover={<img alt="image" src={FloatingImg}/>}
        >
          <Meta title="Флоатинг" description="Запись на флоатинг"/>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentType;