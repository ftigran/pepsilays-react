import React, { Component } from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import { Box, Container } from "@material-ui/core";

import './Rules.scss'

function Rules(){
    return(
        <div className="rulesBlock">
            <h2 className='title'>Правила</h2>

            <Grid direction={"column"} justify='center' container className={'rulesContainer'} alignItems={'center'}>
                    <Grid item className={'rulesList'}>
                        <img alt="1" className={'rulesNumb'} src="../dev/img/numb1.svg"/>          
                                <ListItemText
                                primary='Купи'
                                secondary="2 любых продукта Lay's (150, 225 г.) или Pepsi (1 или 2 л.)"
                                />

                                <img alt="2" className={'rulesNumb'} src="../dev/img/numb2.svg"/>
                                <ListItemText
                                primary='Регистрируй чек на сайте'
                                secondary='выбери жанр, участвуй в розыгрыше призов'
                                />

                                <img alt="3" className={'rulesNumb'} src="../dev/img/numb3.svg"/>
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