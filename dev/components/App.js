import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Main from '../pages/main/main'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Registration from '../pages/Registration/Registration'
import Cabinet from '../pages/Cabinet/Cabinet'

import './App.scss'

import FAQ from '../pages/faq/faq'

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                    <Switch>
                        <Route key='faq' path={"/pages/Pepsilays/faq"}>
                            <FAQ/>
                        </Route>
                        <Route path={"/pages/Pepsilays/reg"}>
                            <Registration/>
                        </Route>
                        <Route path={"/pages/Pepsilays/cabinet"}>
                            <Cabinet/>
                        </Route>
                        <Route key='index' location={location} path={"/"}>
                            <Main/>
                        </Route>
                    </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;
