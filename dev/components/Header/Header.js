import React, { useState, useEffect } from "react";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link as LinkR, animateScroll as scroll } from "react-scroll";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './List/List';
import SlideList from './SlideList';
import logo from '../../img/logo.svg'
import './Header.scss'
import {route} from '../App'

export default function Header(props){
  const trigger = useScrollTrigger({target: window})
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);
    return(
      <Slide appear={false} direction="down" in={!trigger}>
          <AppBar className={scroll ? "header bg-black" : "header"}>
              <Grid className={'headerContainer'}
              height={{md: 50, lg: 75}}
              container
              direction='row'
              justify={'center'} alignItems={'center'}>
                            <LinkR to='main' spy={true} smooth={true} duration={500}>
                              <Link to={"/pages/Pepsilays/"}>
                                <img src={logo}/>
                              </Link>
                            </LinkR>
                            <List/>
                            <SlideList/>
            </Grid>

                        </AppBar>
      </Slide>
    )
}
