import React, { Component } from "react";
import LoginModal from '../../../Modal/LoginModal/LoginModal'
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {store} from '../../../../store/store'
import {changeUser} from '../../../../store/actions'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './User.scss'

class User extends React.Component{
    render(){
        console.log(this.props)
        console.log(this.props.changeUser)

        if(this.props.user){
            return (
                <li className={'User'}>
                    <LinkR to='cabinet' spy={true} smooth={true} duration={500} className={'UserCabinet'}>
                      <Link to="/cabinet">
                        Личный кабинет
                      </Link>
                    </LinkR>
                    <span >{this.props.user}</span>
                </li>)
        }
        else{
  
            return(
                <li className={'User'}>
                    <li className={'headerListReg'}>
                    
                </li>
                        <Link to="/reg">
                            Регистрация
                        </Link>
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


