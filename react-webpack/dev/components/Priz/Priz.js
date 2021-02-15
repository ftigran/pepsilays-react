import { Box, Grid } from "@material-ui/core";
import React, { Component } from "react";

import './Priz.scss'

const imgs=[
            '../dev/img/priz1.png',
            '../dev/img/priz2.png',
            '../dev/img/priz3.png',
        ]

function Priz(){
    return(
        <Box className={'priz'}>
            <h2 className='title'>Призы</h2>
            <Grid container alignItems={'center'} justify={'center'} className={'prizContainer'}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <img src={imgs[0]} className={'prizImg'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <img src={imgs[1]} className={'prizImg'}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img src={imgs[2]} className={'prizImg'}/>
                    </Grid>
                </Grid>
        </Box>
    )
}

export default Priz; 
