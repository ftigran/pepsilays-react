import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import Modal from '../Modal'
import TextField from '../../TextField/TextField'
import { changeUser } from "../../../store/actions";
import { connect } from "react-redux";
import './LoginModal.scss'

class LoginModal extends React.Component{
    constructor(props) {
        super(props);
      }
      handleEnter(){
        this.props.changeUser('Юлия')
      };
    render(){
        return (
            <Modal 
            className={' LoginModal'} 
            title='Авторизация' 
            btnText={'Войти'}
            >
                <TextField className='LoginModalEmail' type='email' placeholder='E-mail'></TextField>
    
                <TextField className='LoginModalPassword' type='password' placeholder='Пароль'></TextField>
                <a className='LoginModalReset' href='empty'>Забыл пароль?</a>
                <Button 
                className='LoginModalEnter'
                onClick={()=>{
                    this.handleEnter();
                    }}>
                        Войти
                </Button>
                <Button 
                className='LoginModalReg'
                onClick={()=>{
                    this.handleEnter();
                    }}>
                        Зарегестрироваться
                </Button>
                {/* <Modal 
                className={' LoginModal'} 
                title='Авторизация' 
                btnText={'Зарегистрироваться'}
                childBtnText={'OK'}
                > 
                </Modal>*/}
            </Modal>
        )
    }
    
}

export default connect(
    null,
    {changeUser}
  )(LoginModal);