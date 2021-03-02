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
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import useReactRouter from 'use-react-router'
import './List.scss'
import UserWithStore from './User/User'
import NavLink from './NavLink/NavLink'

export default function List() {
    const {history} = useReactRouter()

    const handleClick = (key) => {
        if (window.location.pathname !== '') {
            history.push(`/#${key}`)
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    const scrollLinks = {
        c_main: 'Главная',
        c_rules: 'Правила',
        c_prizes: 'Призы',
        c_winners: 'Победители',
    }
    return(
        <Grid container component={'nav'} className={'headerList'} justify={'flex-end'}>
            <ul>
            {Object.entries(scrollLinks).map(([key, val]) => (
                            <li key={key}>
                                <ScrollLink
                                    onClick={() => handleClick(key)}
                                    activeClass="active"
                                    to={key}
                                    spy
                                    smooth
                                    duration={700}
                                    //ignoreCancelEvents
                                >
                                    {val}
                                </ScrollLink>
                                {/* <Link component={MyLink} className={'menu_item_in'} to={`/#${key}`}>{val}</Link>*/}
                            </li>
                        ))}
                        {/* <Grid item xs={12} md={'auto'} className={'menu_item'} style={{textAlign: "center"}}>
                            <Link component={NavLink} to="/faq" className={'menu_item_in'} onClick={scrollToTop}>
                                FAQ
                            </Link>
                        </Grid> */}
                {/* {<li>
                    <LinkR to='main' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/"}>Главная</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='rules' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/#rules"}>Правила</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='priz' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/#priz"}>Призы</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='winners' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/#winners"}>Победители</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='faq'spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/faq"}>faq</Link>
                    </LinkR>
                </li>} */}
                <div className='headerListGap'></div>

                
                <UserWithStore/>
                {/* <li className={'headerListEnter'}>
                    <LinkR to='enter' spy={true} smooth={true} duration={500}>
                        <Link to="/enter">
                            Войти
                        </Link>
                    </LinkR>     
                </li>*/}
            </ul>
        </Grid>
    )
}


