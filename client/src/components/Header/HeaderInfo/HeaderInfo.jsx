import React from 'react';
import HeaderComponentStyles from '../HeaderComponent.module.scss';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const HeaderInfo = () => {
    return (
        <div className={HeaderComponentStyles.headerRight}>
            <Avatar className={HeaderComponentStyles.ava} size={40} icon={<UserOutlined/>}/>
            <span className={HeaderComponentStyles.name}>Иванов К. Б.</span>
            <span className={HeaderComponentStyles.phone}>+7-963-525-44-11</span>
        </div>
    );
};

export default HeaderInfo;