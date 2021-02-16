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
                    <img className={'rulesBg'} src='../dev/img/sCircles.svg' style={{zIndex: -1}}/> 
                    
                    <Grid item>
                        <List  className={'rulesList'}>
                            <ListItem>
                                <img alt="3" className={'rulesNumb'} src="../dev/img/numb1.svg"/>                     
                                <ListItemText
                                primary='Купи'
                                secondary="2 любых продукта Lay's (150, 225 г.) или Pepsi (1 или 2 л.)"
                                />
                            </ListItem>
                            <ListItem>
                                <img alt="3" className={'rulesNumb'} src="../dev/img/numb2.svg"/>
                                <ListItemText
                                primary='Регистрируй чек на сайте'
                                secondary='выбери жанр, участвуй в розыгрыше призов'
                                />
                            </ListItem>
                            <ListItem>
                                <img alt="3" className={'rulesNumb'} src="../dev/img/numb3.svg"/>
                                <ListItemText
                                primary='выигрывай призы    '
                                secondary='каждую неделю'
                                />
                            </ListItem>
                            
                        </List>
                    </Grid>
                    <Grid item>
                        <a href='empty'>Полные правила акции</a>
                    </Grid>
                    
                </Grid>
        </div>
    )
}

export default Rules; 