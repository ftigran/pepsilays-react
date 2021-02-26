import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';
import TextFields, {TextFieldPhone} from '../../components/TextField/TextField'
import './Registration.scss'
import  {verify} from '../../components/Modal/SimpleModal/SimpleModal'
import Checkbox from '../../components/Checkbox/Checkbox'

export default class Registration extends Component {
    render(){
    return(
        <Grid container alignContent='center' justify='center' direction='column' className="RegistrationContainer">
            <Grid item component="form" className={'Registration'}>
                <h1 className={'formTitle'}>Регистрация</h1>
                <TextFields type={'name'} placeholder={'Имя'}/>
                
                <TextFieldPhone/>

                <TextFields type={'email'} placeholder={'E-mail'}/>
                <div className='checkboxs'>
                    <Checkbox>
                        Я прочитал и согласен с <a href='empty'>Правилами акции</a> и <a href='empty'>Пользовательским соглашением</a>, согласен на обработку персональных данных 

                    </Checkbox>
                    <Checkbox>
                        Я согласен получать информацию об акции по E-mail
                    </Checkbox>
                    <Checkbox>
                        Я согласен получать информацию об акции по СМС
                    </Checkbox>
                </div>
                {verify}
            </Grid>   
        </Grid>
 )
    }
}
