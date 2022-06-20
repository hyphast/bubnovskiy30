import React from 'react'
import classnames from 'classnames'
import { notification } from 'antd'
import ConsultationImg from '../../../assets/images/Consultation.jpg'
import TreatmentImg from '../../../assets/images/Treatment.jpg'
import PhysicalTrainingImg from '../../../assets/images/PhysicalTraining.jpg'
import FloatingImg from '../../../assets/images/floating.jpg'
import MassageImg from '../../../assets/images/massage.jpg'
import PriceImg from '../../../assets/images/Price.jpg'
import TypeFooter from './TypeFooter/TypeFooter'
import styles from '../NewAppointment.module.scss'

const content = {
  consultant:
    'Миофасциальная диагностика - то с чего начинается лечение в центрах доктора Бубновского. Это диагностика опорно двигательного аппарата пациента, состояния его мышц, суставов, позвоночника, костей. Миофасциальная диагностика определяет, насколько пациент подвижен, есть ли у него боли, скрытые проблемы и возможные риски возникновения каких-либо новых заболеваний.',
  treatment:
    'Профессор Бубновский, основоположник современной кинезитерапии, является создателем принципиально иного подхода к вопросу, как проводить лечение позвоночника и лечение суставов. Лечение по его уникальной системе - без лекарств и операций, - позволяет людям вновь обрести достойное качество жизни и возвращает полноценную трудоспособность.',
  physicalTraining:
    'Для здоровья всего организма, расслабления спинных мышц и восстановления позвоночника крайне важным является ночной отдых. Однако сможет ли ребенок ночью отдохнуть или же наоборот накопится усталость, зависит от того, как он спит, от его положения и позы. Кровать для ребенка не должна быть чересчур мягкой. При возможности надо приобрести ортопедический матрас. Предпочтение отдать подушке среднего размера.',
  massage:
    'Наш хребет состоит из позвонков, которые соединены между собой хрящами, суставами и межпозвоночными дисками. Диски эти помогают двигаться всему хребту и ослабляют нагрузку на него за счет амортизации. Всегда следует помнить, что несвоевременное лечение межпозвоночной грыжи может привести к очень серьезным осложнениям.',
  floating:
    'Терапевтическое действие данной методики основано на улучшении кровотока и микроциркуляции в зоне воздействия, активизации ангионеогенеза — прорастании новых мелких сосудов в тканях, снятии спазма, стимуляции регенерации и обмена веществ.',
}

const AppointmentType = (props) => {
  const openNotification = () => {
    // refactor
    notification.warning({
      message: 'Предупреждение',
      description: 'Запись на эту услугу временно недоступна',
    })
  }

  return (
    <div className={classnames('steps-content', styles.cards)}>
      <div onClick={() => openNotification()}>
        {/*TODO refactor onClick*/}
        <TypeFooter
          title="Консультация"
          content={content.consultant}
          cardImg={ConsultationImg}
          cardTitle="Консультация"
          cardDesc="Медицинская консультация врача"
          link="#"
          priceImg={PriceImg}
          //setAppointmentType={setAppointmentType}
          appType="Консультация"
        />
      </div>
      <div>
        <TypeFooter
          title="Лечебные занятия"
          content={content.treatment}
          cardImg={TreatmentImg}
          cardTitle="Лечебные занятия"
          cardDesc="1-й, 2-й и 3-й цикл"
          link="/new-appointment/treatment"
          priceImg={PriceImg}
          //setAppointmentType={setAppointmentType}
          appType="Лечебные занятия"
        />
      </div>
      <div>
        <TypeFooter
          title="Физкультурно-оздоровительные занятия"
          content={content.physicalTraining}
          cardImg={PhysicalTrainingImg}
          cardTitle="Физкультурно-оздоровительные занятия"
          cardDesc="4-й цикл и последующие"
          link="/new-appointment/treatment"
          priceImg={PriceImg}
          //setAppointmentType={setAppointmentType}
          appType="Физкультурно-оздоровительные занятия"
        />
      </div>
      <div onClick={() => openNotification()}>
        {/*TODO refactor onClick*/}
        <TypeFooter
          title="Массаж"
          content={content.massage}
          cardImg={MassageImg}
          cardTitle="Массаж"
          cardDesc="Запись на массаж"
          link="#"
          priceImg={PriceImg}
          //setAppointmentType={setAppointmentType}
          appType="Массаж"
        />
      </div>
      {/*<div className={classnames(styles.card,styles.lastCard)}*/}
      {/*     onClick={() => openNotification()}> /!*TODO refactor onClick*!/*/}
      {/*  <TypeFooter title='Флоатинг'*/}
      {/*              content={content.floating}*/}
      {/*              cardImg={FloatingImg}*/}
      {/*              cardTitle='Флоатинг'*/}
      {/*              cardDesc='Запись на флоатинг'*/}
      {/*              link='#'*/}
      {/*              priceImg={PriceImg}*/}
      {/*              //setAppointmentType={setAppointmentType}*/}
      {/*              appType='Флоатинг'*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  )
}

export default AppointmentType
