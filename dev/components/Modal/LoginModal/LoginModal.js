import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import Modal from '../Modal'
import TextField from '../../TextField/TextField'
import { changeUser, toggleError} from "../../../store/actions";
import { connect } from "react-redux";
import './LoginModal.scss'
import {WrapedUserError} from '../UserLoginErrorModal/UserLoginErrorModal'
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function LoginModal(props){
    const users = [
        createUsers('1@Q.ru', 555555, 'Юлия', 4, 2),
        createUsers('2@Q.ru', 123456, 'Юрий',1,9),
        createUsers('3@Q.ru', 111111, 'Алексей',100,510)
      ]
    let SetEmail = setEmail.bind(this);
    let SetPass = setPass.bind(this);
    function setEmail(val){
        email=val
    }
    function setPass(val){
        pass=val
    }
    let email;
    let pass;
    let history = useHistory();

    function handleEnter(){
          let name;
          users.map((user)=>{
              if (user.email==email&&user.pass==pass){
                name = user;
                console.log(name)
              }
          })
        if(name){
            props.changeUser({
              prizi: name.prizi,
              cheki:name.cheki,
              name: name.name,
            })
            //history.push('/cabinet');
        }else {

            props.toggleError()
            console.log(props)
        }
      };
      
    function createUsers(email, pass, name, cheki=0, prizi=0){
        return {
          email,
          pass,
          name,
          cheki,
          prizi
        }
      }
        return (
            <Modal 
            className={' LoginModal'} 
            title='Авторизация' 
            btnText={'Войти'}
            >
            <WrapedUserError/>

                <TextField handler={SetEmail} className='LoginModalEmail' type='email' placeholder='E-mail'></TextField>
    
                <TextField handler={SetPass} className='LoginModalPassword' type='password' placeholder='Пароль'></TextField>
                <a className='LoginModalReset' href='empty'>Забыл пароль?</a>
                <Button 
                className='LoginModalEnter'
                onClick={()=>{
                    handleEnter();
                    }}>
                        Войти
                </Button>
                <Button 
                className='LoginModalReg'
                onClick={()=>{
                    handleEnter();
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
    

export default connect(
    null,
    {changeUser, toggleError}
  )(LoginModal);