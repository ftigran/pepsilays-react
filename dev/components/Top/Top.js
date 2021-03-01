import React, { Component } from "react";
import './Top.scss'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function Rules(){
    return(
        <Grid direction={"column"} container justify={'flex-start'} alignItems='center' className={'topGrid'} id={'main'}>
            <img className={'topPromo'} src="../dev/img/promo.png"></img>
            <img className={'topPromoM'} src="../dev/img/promo2.png"></img>

            <h3 className='topText' >Попробуй жанры на вкус</h3>
            <Button variant="contained" className={'topButton'}>
                Зарегистрировать чек
            </Button>
            <Button variant="contained">
                Sampole
            </Button>
            <Button variant="outlined">
                Sampole
            </Button><Button variant="text">
                Sampole
            </Button>

            <Button variant="contained" size='large' color='primary'>
            Зарегистрировать чек
            </Button>
            <Button  size='medium'>
            Задать вопрос
            </Button><Button variant="text" size='small'>
                Скачать
            </Button>

            <Button variant="contained" color='primary'> 
                Sampole
            </Button>
            <Button variant="outlined" color='primary'>
                Sampole
            </Button><Button variant="text" color='primary'>
                Sampole
            </Button>

            <Button variant="contained" color='secondary'> 
                Sampole
            </Button>
            <Button variant="outlined" color='secondary'>
                Sampole
            </Button><Button variant="text" color='secondary'>
                Sampole
            </Button>
        </Grid>
        
         )
}

export default Rules; 
