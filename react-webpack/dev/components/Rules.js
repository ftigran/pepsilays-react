import React, { Component } from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';

const styles = {
    h1:{
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: '900',
        fontSize: '42px',
        lineHeight: '51px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#10417B',
        margin: 'auto'
    },
    container:{
        background: 'url(../dev/img/sCircles.svg) no-repeat',
        maxWidth: '705px',
        maxHeight:'705px',
    },
    list:{
        maxWidth: '270px',
        //margin: '150px auto',

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
      }
}

function Rules(){
    return(
        <div>
            <h1 style={styles.h1}>Правила</h1>
                
                <Grid direction={"column"} alignItems={'center'} container style={styles.container}>
                    <List className={'rules'} style={styles.list}>
                        <ListItem>
                            <ListItemAvatar >
                                <img alt="1" src="../dev/img/numb1.svg" style={styles.numbers}/>
                            </ListItemAvatar>                            
                            <ListItemText
                            primary='Купи'
                            secondary="2 любых продукта Lay's (150, 225 г.) или Pepsi (1 или 2 л.)"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar >
                                <img alt="2" src="../dev/img/numb2.svg" style={styles.numbers}/>
                            </ListItemAvatar> 
                            <ListItemText
                            primary='Регистрируй чек на сайте'
                            secondary='выбери жанр, участвуй в розыгрыше призов'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar >
                                <img alt="3" src="../dev/img/numb3.svg" style={styles.numbers}/>
                            </ListItemAvatar> 
                            <ListItemText
                            primary='выигрывай призы    '
                            secondary='каждую неделю'
                            />
                        </ListItem>
                    </List>

                    <a style={styles.link} href='empty'>Полные правила акции</a>

                </Grid>
        </div>
    )
}

export default Rules; 