import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import TextFields from '../TextField/TextField'
import './Form.scss'
import  {question} from '../Modal/SimpleModal/SimpleModal'


export default function EmployeeForm() {
    return(
        <Grid item xs={4} component="form" className={'form'}>
            <h2 className={'formTitle'}>Не нашел ответ на свой вопрос ?</h2>
            <p>Задай его нам и мы обазательно тебе ответим!</p>
            <TextFields type={'email'} placeholder={'E-mail'}/>
            <TextFields type={'name'} placeholder={'Имя'}/>
            <TextFields type={'message'} placeholder={'Сообщение'}/>
            <FormControlLabel
            control={
                <Checkbox
                className="checkbox"
                name="checkedB"
                color="primary"
                checkedIcon={<img src={'../dev/img/checkbox.svg'}/>}
                />
            }
            className
            ='checkboxContainer'
            label="Согласие на обработку персональных данных"
            />
            {question}
        </Grid>    )
    }

    