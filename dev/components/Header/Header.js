import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';


import './Header.scss'

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  import AccountCircleIcon from '@material-ui/icons/AccountCircle';
  import MenuIcon from '@material-ui/icons/Menu';

export default function Header(props){
    return(
        <React.Fragment>
                    <CssBaseline />
                    <HideOnScroll {...props}>
                        <AppBar className={'header'}>
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
                            <Button className={'headerMenu'}>
                                <MenuIcon/>
                            </Button>
                        </AppBar>
                    </HideOnScroll>
                    </React.Fragment>
    )
}