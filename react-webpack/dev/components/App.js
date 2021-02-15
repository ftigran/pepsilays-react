import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import autoprefixer from "autoprefixer";


import Rules from './Rules/Rules'
import Top from './Top/Top'
import Priz from './Priz/Priz'
import Random from './Random/Random'

import './App.scss'
import { Button } from "@material-ui/core";
import Winners from "./Winners/Winners";

class App extends Component {
    render() {
        return (
            <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'} className={'wrap'}>
                <Grid item xs={12}>
                    <Box className={'top'}>
                        <Box className={'bg'}>
                            <img className={'topBg'} src='../dev/img/bg1.png'/> 
                        </Box>
                        <Top/>
                    </Box>
                </Grid>
                <Grid item xs={12} className={'blockContainer'}>
                    <Rules/>
                    <Priz/>
                    <Random/>
                    <Winners/>
                </Grid>
            </Grid>
        );
    }
}

export default App; 
/* <Grid item xs={12} >
                        <Box className={'rules'}>  
                            <Rules/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={'blockContainer'}>
                    <Box className={'priz'}>
                            <Priz/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={'blockContainer'}>
                    <Box className={'random'}>
                        <Random/>
                    </Box>
                    </Grid>
                    <Grid item xs={12} className={'blockContainer'}>
                    <Box className={'winners'}>
                        <Winners/>        
                    </Box>
                    </Grid> */