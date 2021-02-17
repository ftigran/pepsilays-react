import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';

import './Footer.scss'

export default class Main extends Component {
    render() {
        return (
            <footer className={'footer'}>
                <Grid container className={'footerContainer'} justify='space-between' alignItems='center'>
                    <Grid item>
                        <ul>
                            <li>
                                <a href="empty">Правила акции</a>
                            </li>
                            <li>
                                <a href="empty">Пользовательское соглашение</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item className={'footerMail'}>
                        <a href="mailto:support@verno-pepsilays.ru">
                            Пиши нам на support@verno-pepsilays.ru
                        </a>
                    </Grid> 
                </Grid>
            </footer>
        )
    }
}