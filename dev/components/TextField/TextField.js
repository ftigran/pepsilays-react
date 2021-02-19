import React from 'react';
import TextField from '@material-ui/core/TextField';

import './TextField.scss'

export default function TextFieldTemplate(props){
    let regular;
    let error;
    let minLen;
    switch(props.type){
        case 'email':
            regular=new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            minLen=5;
            error='Введите корректный e-mail'
            break;
        case 'name':
            regular=new RegExp(/[а-яА-ЯЁё-і]/g)
            error='Заполните поле'
            minLen=4;
            break;
        case 'message':
            regular=new RegExp(/[а-яА-ЯЁё-і0-9]/g)
            minLen=20;
            error='Введите сообщение от 20 символов'
            break;
        default:
            console.log( "Нет таких значений" );

    }
    const [val, setVal]=React.useState();
    const [errors, setErrors]=React.useState('');
    const handleChange = (event)=>{
        const {target: {value}}= event;
        setErrors('')
        setVal(value);
        if (!regular.test(value)||value.length<minLen){
            setErrors(error)
        }
    }
    return(
        <TextField
                id="outlined"
                label={props.placeholder}
                variant="outlined"
                value={val}
                helperText={errors}
                onChange={handleChange}
                error={errors!=''}
                 className='TextFields'
                 ></TextField>
    )
}
