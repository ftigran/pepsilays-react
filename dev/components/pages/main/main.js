import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';

import Rules from '../../Rules/Rules'
import Top from '../../Top/Top'
import Priz from '../../Priz/Priz'
import Random from '../../Random/Random'
import Winners from "../../Winners/Winners";


export default class Main extends Component {
    render() {
        return (
            <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'} className={'wrap'}>
                    <Grid item xs={12}>
                        <Top/>
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