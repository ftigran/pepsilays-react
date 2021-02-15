import { Box, Grid, Container, Button } from "@material-ui/core";
import React, { Component } from "react";

import './Random.scss'

function Priz(){
    return(
        <Grid item className={"random"}>
            <img src='../dev/img/bg2.svg'style={{width:'100%', position: 'absolute', top: '-17%', zIndex: '-1'}}/>
            <Container className={'randomScreen'}>            
            <Grid container justify='center' alignItems='center' className={'randomSubScreen'}>    
                <h2 style={{color: 'white', margin:'3px'}}>загадывай фильм и жми пуск!</h2>
                <Button className={'buttonVideo'}><img src='../dev/img/buttonPlay.png'/></Button>
            </Grid>
        </Container>
        </Grid>
        )
    }
    
    export default Priz; 