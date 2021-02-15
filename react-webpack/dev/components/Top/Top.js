import React, { Component } from "react";
import './Top.scss'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function Rules(){
    return(
        <Grid direction={"column"} container justify={'flex-start'} alignItems='center' className={'topGrid'}>
            <img className={'topPromo'} src="../dev/img/promo.png"></img>
            <img className={'topPromoM'} src="../dev/img/promo2.png"></img>

            <h3 className='topText' >Попробуй жанры на вкус</h3>
            <Button className='topButton' variant="contained" style={{backgroundColor:'#FFDD00'}}>
                Зарегистрировать чек
            </Button>
        </Grid>
        
         )
}

export default Rules; 
