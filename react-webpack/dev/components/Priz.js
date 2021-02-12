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
        <Box>
            <h2 className='title'>Призы</h2>
            <Grid direction={"row"} container>    
                <Grid container alignItems={'center'} spacing={2} justify={'space-between'} >
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box><img src={imgs[0]} className={'prizImg'}/></Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box><img src={imgs[1]} className={'prizImg'}/></Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box><img src={imgs[2]} className={'prizImg'}/></Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Priz; 
