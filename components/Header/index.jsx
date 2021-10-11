import React, {useState} from 'react';
import s from './header.module.scss'

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IconButton } from '@mui/material';
import {ContactChange} from "../СontactСhange";

export const Header = ({setNewContacts}) => {
    const [visibilityFormChange, setVisibilityFormChange] = useState(false);
    const HeaderBtnRef = React.useRef(null)
    const clickChangeBtn = () =>{
        setVisibilityFormChange(true)
    }
    return (
        <div ref={HeaderBtnRef} className={s.header}>
            <h1>Контакты</h1>
            <IconButton  onClick={clickChangeBtn} color={'inherit'}>
                <PersonAddIcon/>
            </IconButton>
            {visibilityFormChange && <ContactChange HeaderBtnRef={HeaderBtnRef} setNewContacts={setNewContacts} setVisibilityForm={setVisibilityFormChange}/>}
        </div>
    );
};
