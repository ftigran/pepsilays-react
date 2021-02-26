import { Box, Grid, Container, Button } from "@material-ui/core";
import React, { Component } from "react";

import './Random.scss'

function Priz(){
    return(
        <Container className={"random"}>
            <img src='../dev/img/bg2.svg'className={'randomBG randomBGback'}/>
            <img src='../dev/img/bg3.svg'className={'randomBGtop randomBG'}/>
            <Container className={'randomScreen'}>
                <img src='../dev/img/video-1.png'className={'randomVideo'}/>
                <h2 className={'randomText'}>загадывай фильм и жми пуск!</h2>
                <Button className={'buttonVideo'}><img src='../dev/img/buttonPlay.png'/></Button>

                <img src='../dev/img/video-2.png'className={'randomVideo'}/>

        </Container>
        </Container>
        )
    }
    
    export default Priz; 