import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextFields from '../TextField/TextField'
import './Form.scss'
import  {question} from '../Modal/SimpleModal/SimpleModal'
import Checkbox from '../Checkbox/Checkbox'


export default function EmployeeForm() {
    return(
        <Grid item xs={4} component="form" className={'form'}>
            <h2 className={'formTitle'}>Не нашел ответ на свой вопрос ?</h2>
            <p>Задай его нам и мы обазательно тебе ответим!</p>
            <TextFields type={'email'} placeholder={'E-mail'}/>
            <TextFields type={'name'} placeholder={'Имя'}/>
            <TextFields type={'message'} placeholder={'Сообщение'}/>
            <Checkbox>
                Согласие на обработку персональных данных
            </Checkbox>
            {question}
        </Grid>    )
    }

    