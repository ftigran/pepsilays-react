import { Box, Grid, Container, Button } from "@material-ui/core";
import React, { Component } from "react";

import './Random.scss'
import buttonPlay from '../../img/buttonPlay.png'
import video from '../../img/video-2.png'
import bg2 from '../../img/bg2.svg'
import bg3 from '../../img/bg3.svg'
import video1 from '../../img/video-1.png'

function Priz(){
    return(
        <Container className={"random"}>
            <img src={bg2} className={'randomBG randomBGback'}/>
            <img src={bg2} className={'randomBGtop randomBG'}/>
            <Container className={'randomScreen'}>
                <img src={video1} className={'randomVideo'}/>
                <h2 className={'randomText'}>загадывай фильм и жми пуск!</h2>
                <Button className={'buttonVideo'}><img src={buttonPlay}/></Button>

                <img src={video} className={'randomVideo'}/>

        </Container>
        </Container>
        )
    }
    
    export default Priz; 