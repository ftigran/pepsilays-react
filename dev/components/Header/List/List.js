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

export default function List() {
    return(
        <Grid container component={'nav'}>
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
                <li className={'headerReg'}>
                    <Link to="empty">
                        Регистрация
                    </Link>
                </li>
                <li className={'headerEnter'}>
                    <Link to="/empty">
                        Войти
                    </Link>
                </li>
                <li className={'headerIcoTablet'}>
                    <Button >
                        <AccountCircleIcon className={'headerProfile'}/>
                    </Button>
                </li>
            </ul>
        </Grid>
    )
}


