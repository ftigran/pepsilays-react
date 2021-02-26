import React, { Component } from "react";
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {store} from '../../../../../store/store'
import {setPopup, changeUser} from '../../../../../store/actions'
import Popper from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import './Popup.scss'
class popup extends React.Component{
    render(){
        const handleClick = (event) => {
            this.props.setPopup(event.currentTarget);
          };
        
          {console.log(this.props)}

        return (
            <Popper 
                className='popupContainer'
                open={Boolean(this.props.popupOpen)}
                anchorEl={this.props.popupOpen}
                onClose={()=>this.props.setPopup(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                <div className={'popup'}>
                    <div className={'popupData'}>
                        <span>Имя</span>
                        <span>{this.props.user.name}</span>
                        <span>E-mail</span>
                        <span>{this.props.user.email}</span>
                        <span>Телефон</span>
                        <span>{this.props.user.phone}</span>
                    </div>
                   <Button color='primary' onClick={()=>this.props.changeUser('')}>
                    Выход
                   </Button>
                </div>
            </Popper>
        )
    }
    
}


const mapStateToProps=(state)=>{
    return {
        popupOpen: state.popupOpen,
        user: state.user
    }
};
const putActionsToProps=(dispatch)=>{
    return {
        setPopup: bindActionCreators(setPopup, dispatch),
        changeUser: bindActionCreators(changeUser, dispatch)          
    }
}

const WrapedUser = connect(mapStateToProps, putActionsToProps)(popup)

export default class UserWithStore extends React.Component{
    render(){
    return (
        <Provider store={store}>
            <WrapedUser/>
        </Provider>
    )
}
}