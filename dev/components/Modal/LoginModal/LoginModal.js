import React, { Component } from "react";

import Modal from '../Modal'
import TextField from '../../TextField/TextField'
import { store, ChangeUser } from "../../../store/store";
export default function LoginModal(props){
    return (
        <Modal 
        className={' LoginModal'} 
        title='Авторизация' 
        btnText={'Войти'}
        >
            <TextField type='email' placeholder='E-mail'></TextField>

            <TextField type='password' placeholder='Пароль'></TextField>
            <a>Забыл пароль?</a>
            <button 
            onClick={()=>{
                store.ChangeUser('Vasya')
                console.log(store)
                }}>Войти</button>
            <Modal 
            className={' LoginModal'} 
            title='Авторизация' 
            btnText={'Зарегистрироваться'}
            childBtnText={'OK'}
            >
            </Modal>
        </Modal>
    )
}