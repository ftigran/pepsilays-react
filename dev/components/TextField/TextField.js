import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function TextFieldTemplate(props){
    let regular;
    let error;
    switch(props.type){
        case 'email':
            regular=new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            error='Введите корректный e-mail'
            break;
        case 'name':
            regular=new RegExp(/[а-яА-ЯЁё-і]/g)
            error='Заполните поле'
            break;
        case 'message':
            regular=new RegExp(/[а-яА-ЯЁё-і0-9]/g)
            error='Запо55лните поле'
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
        if (!regular.test(value)){
            setErrors(error)
        }
    }
    return(
        <TextField
                label={props.label}
                 placeholder={props.placeholder}
                 required={true}
                 value={val}
                 onChange={handleChange}
                 error={errors!=''}
                 helperText={errors}
                 variant={'outlined'}
                 ></TextField>
    )
}
