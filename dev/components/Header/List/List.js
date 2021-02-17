import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './List.scss'

export default function List() {
    return(
        <Grid container component={'nav'} className={'headerList'} justify={'flex-end'}>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="empty">Правила</Link>
                </li>
                <li>
                    <Link to="empty">Призы</Link>
                </li>
                <li>
                    <Link to="empty">Победители</Link>
                </li>
                <li>
                    <Link to="/faq">faq</Link>
                </li>
                <div className='headerListGap'></div>
                <li className={'headerListReg'}>
                    <Link to="empty">
                        Регистрация
                    </Link>
                </li>
                <li className={'headerListEnter'}>
                    <Link to="/empty">
                        Войти
                    </Link>
                </li>
                {/* <li className={'headerListIcoTablet'}>
                    <Button >
                        <AccountCircleIcon className={'headerListProfile'}/>
                    </Button>
                </li> */}
            </ul>
        </Grid>
    )
}


