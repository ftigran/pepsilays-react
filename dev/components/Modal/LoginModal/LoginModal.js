import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import Modal from '../Modal'
import TextField from '../../TextField/TextField'
import { changeUser } from "../../../store/actions";
import { connect } from "react-redux";
import './LoginModal.scss'

class LoginModal extends React.Component{
    constructor(){
        super();
        this.setEmail = this.setEmail.bind(this);
        this.setPass = this.setPass.bind(this);

        this.users = [
            this.createUsers('1@Q.ru', 555555, 'Юлия'),
            this.createUsers('2@Q.ru', 123456, 'Юрий')
    
          ]
    }
    setEmail(val){
        this.email=val
    }
    setPass(val){
        this.pass=val
    }
      handleEnter(){
          (this.users.map((user)=>{
              if (user.email==this.email&&user.pass==this.pass){
                this.props.changeUser(user.name);
              }
          }))
      };
      
      createUsers(email, pass, name){
        return {
          email,
          pass,
          name
        }
      }
    render(){
        return (
            <Modal 
            className={' LoginModal'} 
            title='Авторизация' 
            btnText={'Войти'}
            >
                <TextField handler={this.setEmail} className='LoginModalEmail' type='email' placeholder='E-mail'></TextField>
    
                <TextField handler={this.setPass} className='LoginModalPassword' type='password' placeholder='Пароль'></TextField>
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