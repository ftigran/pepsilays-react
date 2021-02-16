import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import autoprefixer from "autoprefixer";


import Rules from './Rules/Rules'
import Top from './Top/Top'
import Priz from './Priz/Priz'
import Random from './Random/Random'

import './App.scss'
import { Button } from "@material-ui/core";
import Winners from "./Winners/Winners";


class App extends Component {
    render() {
        return (
            <Router>
                <Grid container component={'header'}>
                    <img src="./dev/img/logo.svg"/>
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
                            <li>
                                <Link to="empty">Регистрация</Link>
                            </li>
                            <li>
                                <Link to="/empty">Войти</Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>

                <hr />

                <Switch>
                    <Route exact path="/faq">
                    <Top/>
                    </Route>
                </Switch>

            </Router>
            
        );
    }
}

export default App;