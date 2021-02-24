import React, { Component } from "react";

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import TextFields, {TextFieldPhone} from '../../TextField/TextField'
import './Registration.scss'
import  {question} from '../../Modal/SimpleModal/SimpleModal'


export class Registration extends Component {
    render(){
    return(
        <Grid container>
            <Grid item xs={4} component="form" className={'form'}>
                <h1 className={'formTitle'}>Регистрация</h1>
                <TextFields type={'name'} placeholder={'Имя'}/>
                
                <TextFieldPhone/>
                <TextFields type={'phone'} placeholder={'Телефон'}/>

                <TextFields type={'email'} placeholder={'E-mail'}/>
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
            </Grid>   
        </Grid>
 )
    }
}
