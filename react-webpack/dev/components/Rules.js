import React, { Component } from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import { Container } from "@material-ui/core";

import './Rules.scss'
const s4tyles = {
    h1:{
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: '900',
        fontSize: '42px',
        lineHeight: '51px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#10417B',
        margin: '60px auto'
    },
    container:{
        background: 'url(../dev/img/sCircles.svg) no-repeat',
        
        maxWidth: '705px',
        maxHeight:'705px',
        //minWidth: '488px',
        minHeight: '488px',

        //height: '100%',
        width: '100%',
        padding:  '120px 200px'

    },
    list:{
        backgroundSize:'contain',
        maxWidth: '270px',
        position: 'relative',
        marginRight: "40px"
    },
    numbers:{
        borderRadius:'0px',
        width:'55px',
        height:'68px',
    },
    link: {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "16px",
        "lineHeight": "24px",
        "textAlign": "center",
        "textDecorationLine": "underline",
        "textTransform": "uppercase",
        "color": "#FFFFFF", 
        position: 'absolute',
        bottom: '-20px',
      }
}

function Rules(){
    return(
        <div>
            <h1 >Правила</h1>
            
                <Grid grow={1} direction={"column-reverse"} alignItems={'center'} justify='center' container className={'rules'}>
                    <Grid item grow={1} xs={12}>
                    <List  className={'rulesList'}>
                        <ListItem>
                            <ListItemAvatar >
                                <img alt="1" src="../dev/img/numb1.svg"/>
                            </ListItemAvatar>                            
                            <ListItemText
                            primary='Купи'
                            secondary="2 любых продукта Lay's (150, 225 г.) или Pepsi (1 или 2 л.)"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar >
                                <img alt="2" src="../dev/img/numb2.svg"/>
                            </ListItemAvatar> 
                            <ListItemText
                            primary='Регистрируй чек на сайте'
                            secondary='выбери жанр, участвуй в розыгрыше призов'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar >
                                <img alt="3" src="../dev/img/numb3.svg"/>
                            </ListItemAvatar> 
                            <ListItemText
                            primary='выигрывай призы    '
                            secondary='каждую неделю'
                            />
                        </ListItem>
                        <a href='empty'>Полные правила акции</a>
                    </List>
                    </Grid>
                    
                </Grid>
        </div>
    )
}

export default Rules; 