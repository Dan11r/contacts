import React from 'react';
import NumberFormat from 'react-number-format';

import s from './ContactChange.module.scss'
import {Button} from "@mui/material";


export const ContactChange = ({defaultData, setVisibilityForm, setNewContacts, changeContact}) => {
    const [values, setValues] = React.useState({
        name: defaultData ? defaultData.name : '',
        number: defaultData ? defaultData.number : '',
        id: defaultData ? defaultData.id : Math.floor(1 + Math.random() * (9007199254740 + 1 - 1))
    });
    const contentRef = React.useRef(null)

    const isDisabled = !values.number || values.number.includes('_') || !values.name;

    const onSubmit = () => {
        console.log(!!setNewContacts)
        console.log(values)
        setNewContacts ? setNewContacts(values) :
            changeContact(values)
        setVisibilityForm(false)
    };
    const handleChangeInput = (e) =>{
        setValues({...values, name: e.target.value})
    }

    const onClickWrapper = () => {
        setVisibilityForm(false)
    }
    return (
        <div className={s.wrapper}>
            <div onClick={onClickWrapper} className={s.darkField}></div>
            <div ref={contentRef} className={s.content}>
                <form onSubmit={onSubmit}>
                    <input
                        maxLength={30}
                        onChange={handleChangeInput}
                        value={values.name}
                        className={s.field}
                        placeholder="Введите имя"
                    />
                    <NumberFormat
                        className={s.field}
                        format="+# (###) ###-##-##"
                        mask="_"
                        placeholder="+7 (999) 333-22-11"
                        value={values.number}
                        onValueChange={({ formattedValue }) => setValues({...values, number: formattedValue})}
                    />
                    <Button disabled={isDisabled} variant="contained" type="submit">сохранить</Button>
                </form>
            </div>
        </div>
    );
};

