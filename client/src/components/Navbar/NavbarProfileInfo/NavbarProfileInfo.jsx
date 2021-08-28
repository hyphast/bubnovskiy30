import React from 'react';
import {Avatar, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import NavbarProfileInfoStyles from './NavbarProfileInfo.module.scss';
import Text from 'antd/es/typography/Text';

const NavbarProfileInfo = () => {
    return (<>
        <div className={NavbarProfileInfoStyles.avatar}>
            <Avatar
                size={{xs: 110, sm: 120, md: 130, lg: 140, xl: 150, xxl: 160}}
                icon={<UserOutlined/>}
            />
        </div>
        <Text strong>Иванов Кирилл Безрукович</Text>
        <br/>
        <Text strong>Телефон: +7-964-433-22-11</Text>
        <br/>
        <Text strong>Дата рождения: 23.12.1997</Text>
        <br/>
        <Button>Редактировать</Button>
    </>);
};

export default NavbarProfileInfo;