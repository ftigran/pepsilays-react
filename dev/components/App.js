import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import autoprefixer from "autoprefixer";


import Rules from './Rules/Rules'
import Top from './Top/Top'
import Priz from './Priz/Priz'
import Random from './Random/Random'
import Main from './pages/main/main'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import {Registration} from './pages/Registration/Registration'

import './App.scss'
import Winners from "./Winners/Winners";

import FAQ from './pages/faq/faq'





class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                    <Switch>
                        <Route exact path="/faq">
                            <FAQ/>
                        </Route>
                        <Route path="/reg">
                            <Registration/>
                        </Route>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route path="/#">
                            <Main/>
                        </Route>
                    </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;
