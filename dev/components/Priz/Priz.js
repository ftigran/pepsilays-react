import { Box, Grid } from "@material-ui/core";
import React, { Component } from "react";

import './Priz.scss'
import priz1 from '../../img/priz1.png'
import priz2 from '../../img/priz2.png'
import priz3 from '../../img/priz3.png'
import priz31 from '../../img/priz3-1.png'


function Priz(){
    return(
        <Box className={'priz'} id={'priz'}>
            <h2 className='title'>Призы</h2>
            <Grid container alignItems={'center'} justify={'center'} className={'prizContainer'} >
                    <Grid item xs={12} lg={3}>
                        <img src={priz1} className={'prizImg'}/>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <img src={priz2} className={'prizImg'}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img src={priz3} className={'prizImg prizImg_pc'}/>
                        <img src={priz31} className={'prizImg prizImg_mob'}/>
                    </Grid>
                </Grid>
        </Box>
    )
}

export default Priz; 
