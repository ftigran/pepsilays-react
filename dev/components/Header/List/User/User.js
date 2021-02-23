import React, { Component } from "react";
import LoginModal from '../../../Modal/LoginModal/LoginModal'
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {store} from '../../../../store/store'
import {changeUser} from '../../../../store/actions'

export let props;
class User extends React.Component{
    render(){
        console.log(this.props.user)
        console.log(this.props.user)

        if(this.props.user){
            return (
                <li>
                    <h2>Личный кабинет</h2>
    <h2>{this.props.user}</h2>
                </li>)
        }
        else{
  
            return(
                <li className={'headerListReg'}>
                  <LoginModal store={this.props}/>

                  {/* <LinkR to='reg' spy={true} smooth={true} duration={500}>
                      <Link to="/registration">
                          Регистрация
                      </Link>
                  </LinkR>
                  <LinkR to='enter' spy={true} smooth={true} duration={500}>
                      <Link to="/enter">
                          Войти
                      </Link>
                  </LinkR>   */}
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


