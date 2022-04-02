import React from 'react';
import {InfoCircleOutlined, PayCircleOutlined} from "@ant-design/icons";
import {Card, Modal, Tooltip} from "antd";
import {useHistory} from "react-router-dom";

const {Meta} = Card;

const TypeFooter = ({title, content, cardImg, cardTitle, cardDesc, link, priceImg, appType}) => {
  const history = useHistory();

  const onCardClick = () => {
    //setAppointmentType(appType);
    localStorage.setItem('appointmentType', appType);
    history.push(link);
  }

  const info = (e) => {
    e.stopPropagation();
    Modal.info({
      maskClosable: true,
      centered: true,
      width: 1000,
      title: title,
      content: (<>
        <p style={{textIndent: '1rem'}}>{content}</p>
      </>),
      onOk() {
      },
    });
  };

  const price = (e) => {
    e.stopPropagation();
    Modal.info({
      maskClosable: true,
      width: 1000,
      title: 'Прейскурант',
      content: (<>
        <img style={{width: '850px'}} src={priceImg} alt='Прейскурант'/>
      </>),
      onOk() {
      },
    });
  };

  return (
      <Card hoverable
            onClick={onCardClick}
            cover={<img alt="image" src={cardImg}/>}
            actions={[
              <Tooltip title="Информация"><InfoCircleOutlined key='info' onClick={info}/></Tooltip>,
              <Tooltip title="Прейскурант"><PayCircleOutlined key='price' onClick={price}/></Tooltip>
            ]}
      >
        <Meta title={cardTitle} description={cardDesc}/>
      </Card>
  );
};

export default TypeFooter;