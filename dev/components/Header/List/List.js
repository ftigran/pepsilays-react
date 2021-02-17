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
import { Link as LinkR, animateScroll as scroll } from "react-scroll";

import './List.scss'

export default function List() {
    return(
        <Grid container component={'nav'} className={'headerList'} justify={'flex-end'}>
            <ul>
                <li>
                    <LinkR to='main' smooth={true} duration={500}>
                        <Link to="/">Главная</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='rules' smooth={true} duration={500}>
                        <Link to="/#rules">Правила</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='priz' smooth={true} duration={500}>
                        <Link to="/#priz">Призы</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='winners' smooth={true} duration={500}>
                        <Link to="/#winners">Победители</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='faq' smooth={true} duration={500}>
                        <Link to="/faq">faq</Link>
                    </LinkR>
                </li>
                <div className='headerListGap'></div>
                <li className={'headerListReg'}>
                    <LinkR to='reg' smooth={true} duration={500}>
                        <Link to="/registration">
                            Регистрация
                        </Link>
                    </LinkR>
                </li>
                <li className={'headerListEnter'}>
                    <LinkR to='enter' smooth={true} duration={500}>
                        <Link to="/enter">
                            Войти
                        </Link>
                    </LinkR>    
                </li>
            </ul>
        </Grid>
    )
}


