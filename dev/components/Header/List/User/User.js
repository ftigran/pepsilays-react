import React, { Component } from "react";
import LoginModal from '../../../Modal/LoginModal/LoginModal'
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {store} from '../../../../store/store'
import {changeUser} from '../../../../store/actions'
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './User.scss'
import { Link as LinkR, animateScroll as scroll } from "react-scroll";

class User extends React.Component{
    render(){
        console.log(this.props)
        console.log(this.props.changeUser)

        if(this.props.user){
            return (
                <li className={'User'}>
                    <LinkR to='cabinet' spy={true} smooth={true} duration={500}>
                        <Link className="cabinetLink" to="/cabinet">
                            Личный кабинет
                        <span >{this.props.user.name}</span>
                        </Link>
                    </LinkR>
                </li>)
        }
        else{
  
            return(
                <li className={'User UserGuest'}>
                      
                    <Button className={'headerListReg'}>
                        <Link to="/reg">
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
        user: state.user
    }
};
const putActionsToProps=(dispatch)=>{
    return {
        changeUser: bindActionCreators(changeUser, dispatch)
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


