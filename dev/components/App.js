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
import Cabinet from './pages/Cabinet/Cabinet'

import './App.scss'
import Winners from "./Winners/Winners";

import FAQ from './pages/faq/faq'





class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Cabinet/>
                <Footer/>
            </Router>
        );
    }
}

export default App;
