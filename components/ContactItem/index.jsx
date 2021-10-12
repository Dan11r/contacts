import React, {useState} from 'react';
import s from './ContactItem.module.scss'
import {ContactChange} from "../СontactСhange";

import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';

const ContactItem = ({name, number, removeContact, id, changeContact, setVisibilityFormChange, visibilityFormChange}) => {
    const clickChangeBtn = () => {
        setVisibilityFormChange(true)
    }
    const clickRemoveBtn = () =>{
        removeContact(id)
    }

    return (
        <div className={s.contactItem}>
            <div className={s.name}>{name}</div>
            <div className={s.number}>{number}</div>
            <div>
                <IconButton onClick={clickChangeBtn}>
                    <CreateIcon/>
                </IconButton>
                <IconButton onClick={clickRemoveBtn}>
                    <ClearIcon/>
                </IconButton>
            </div>
            {visibilityFormChange && <ContactChange changeContact={changeContact} setVisibilityForm={setVisibilityFormChange} defaultData={{name, number, id}}/>}
        </div>
    );
};

export default ContactItem;
