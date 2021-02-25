import React from 'react';

import Grid from '@material-ui/core/Grid';

import Questions from '../../Questions/Questions'
import Modal from '../../Modal/Modal'
import Checkbox from '../../Checkbox/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import {verify} from '../../Modal/SimpleModal/SimpleModal'
import Form from '../../Form/Form'
import './Cabinet.scss'
class Cab extends React.Component{
render()    {
    return(
        <Grid container direction="column" alignItems='center'>
            <h1>Личный кабинет</h1>
            <p>Срок регистрации чеков: 
        с 10.02.2021 по 25.03.2021 года</p>
        <div className='cabinetCard'>
            <div className='cabinetInfo'>
                <div className='cabinetMyStat'>
                    <p>Мои призы <span>{this.props.user.prizi}</span></p>
                    <p>Мои чеки <span>{this.props.user.cheki}</span></p>
                </div>
                <div className='checkboxWrap'>
                <Checkbox>Я  согласен получать информацию 
                об акции по e-mail</Checkbox>
                <Checkbox>Я  согласен получать информацию 
                об акции по sms</Checkbox>
                </div>
                <a href='empty'>Как добавить стикер в мессенджер? </a>
            </div>
            <div className='cabinetSeparator'/>
            <div className='cabinetRegCheki'>
                <h2>Зарегистрируй чек</h2>
                <p>В чеке должно быть минимум два 
                    акционных продукта.<br/>
                    На фото должны быть чётко видны 
                    данные чека и QR-код.
                </p>
                <Button className='borderedBtn'>
                    посмотреть требования к чеку
                </Button>
                <Button className='filledBtn'>
                    Зарегистрировать чек
                </Button>
            </div>
        </div>
        </Grid>
        
    )
}
}




import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {store} from '../../../store/store'

const mapStateToProps=(state)=>{
    return {
        user: state.user
    }
};
const putActionsToProps=(dispatch)=>{
    return {
        changeUser: bindActionCreators(changeUser, dispatch)
    }
}

const WrapedCab = connect(mapStateToProps, null)(Cab)

export default class CabWithStore extends React.Component{
    render(){
    return (
        <Provider store={store}>
            <WrapedCab/>
        </Provider>
    )
}
}