import React, { Component } from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import { Box, Container } from "@material-ui/core";

import nunb1 from '../../img/numb1.svg'
import nunb2 from '../../img/numb2.svg'
import nunb3 from '../../img/numb3.svg'
import './Rules.scss'

function Rules(){
    return(
        <div className="rulesBlock" id={'rules'}>
            <h2 className='title'>Правила</h2>

            <Grid direction={"column"} justify='center' container className={'rulesContainer'} alignItems={'center'}>
                    <Grid item className={'rulesList'}>
                        <img alt="1" className={'rulesNumb'} src={nunb1}/>          
                                <ListItemText
                                primary='Купи'
                                secondary="2 любых продукта Lay's (150, 225 г.) или Pepsi (1 или 2 л.)"
                                />

                                <img alt="2" className={'rulesNumb'} src={nunb2}/>
                                <ListItemText
                                primary='Регистрируй чек на сайте'
                                secondary='выбери жанр, участвуй в розыгрыше призов'
                                />

                                <img alt="3" className={'rulesNumb'} src={{nunb3}}/>
                                <ListItemText
                                primary='выигрывай призы    '
                                secondary='каждую неделю'
                                />
                    </Grid>
                    <a href='empty'>Полные правила акции</a>


                </Grid>
        </div>
    )
}

export default Rules; 