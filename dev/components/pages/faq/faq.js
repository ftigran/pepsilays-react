import React from 'react';

import Grid from '@material-ui/core/Grid';

import Questions from '../../Questions/Questions'
import Modal from '../../Modal/Modal'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {verify} from '../../Modal/SimpleModal/SimpleModal'
import Form from '../../Form/Form'
import './faq.scss'

export default function FAQ(){
    
    return(
        <Grid container direction={'row'} justify={'space-between'} className={'FAQ'}>
            <Questions/>
            {/* <Cleave 
            options={{
                phone: true,
                phoneRegionCode: 'RU'
                }}/> */}
              <Form xs={3}/>
        </Grid>
        
    )
}
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

