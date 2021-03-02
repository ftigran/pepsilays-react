import React, { Component } from "react";
import LoginModal from '../../../Modal/LoginModal/LoginModal'
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {store} from '../../../../store/store'
import {changeUser, setPopup} from '../../../../store/actions'
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './User.scss'
import { Link as LinkR, animateScroll as scroll } from "react-scroll";
import Popup from './Popup/Popup'

class User extends React.Component{
    render(){

        const handleClick = (event) => {
            this.props.setPopup(event.currentTarget);
        };
        if(this.props.user){
            return (
                <li className={'User'}>
                    <LinkR to='cabinet' spy={true} smooth={true} duration={500}>
                        <Link className="cabinetLink" to={"/pages/Pepsilays/cabinet"}>
                            Личный кабинет
                        </Link>
                    </LinkR>
                    <Popup/> 

                    <span 
                    className={'UserName'}
                        onClick={
                            handleClick
                        }
                    >{this.props.user.name}</span>
                </li>)
        }
        else{
  
            return(
                <li className={'User UserGuest'}>
                      
                    <Button className={'headerListReg'}>
                        <Link to={"/pages/Pepsilays/reg"}>
                            Регистрация
                        </Link>    
                    </Button>
                    <LoginModal/>
                </li>
            )
        }
    }
}

const mapStateToProps=(state)=>{
    return {
        user: state.user,
        popupOpen: state.popupOpen
    }
};
const putActionsToProps=(dispatch)=>{
    return {
        changeUser: bindActionCreators(changeUser, dispatch),
        setPopup: bindActionCreators(setPopup, dispatch),
    }
}

const WrapedUser = connect(mapStateToProps, putActionsToProps)(User)

export default class UserWithStore extends React.Component{
    render(){
    return (
        <Provider store={store}>
            <WrapedUser/>
        </Provider>
    )
}
}


