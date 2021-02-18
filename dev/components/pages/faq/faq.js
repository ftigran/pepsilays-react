import React from 'react';

import Grid from '@material-ui/core/Grid';


import Questions from '../../Questions/Questions'
import Modal from '../../Modal/Modal'

export default function FAQ(){
    return(
        <Grid container direction={'row'} justify={'space-between'}>
            <Questions/>
            <Grid item xs={4}>
                <Modal 
                q={'a'}
                btnText={'Задать вопрос'} 
                title='Вопрос отправлен'
                >
                </Modal>
            <Paper component="form" className={'classes.root'}>
                <h2>Не нашел ответ на свой вопрос ?</h2>
                <p>Задай его нам и мы обазательно тебе ответим!</p>
                <TextField placeholder={'e-mail'} required={true}></TextField>
      <InputBase
        className={'classes.input'}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={'classes.iconButton'} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={'classes.divider'} orientation="vertical" />
      <IconButton color="primary" className={'classes.iconButton'} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
            </Grid>
            
        </Grid>
        
    )
}
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import TextField from '@material-ui/core/TextField';

