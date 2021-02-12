import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import autoprefixer from "autoprefixer";


import Rules from './Rules'
import Top from './Top'

import './App.scss'
import { Button } from "@material-ui/core";
// const styles={
//     div: {
//         border: '1px solid #ccc',
//         borderRadius: '10px'
//     },
//     h1: {
//         textAlign: 'center',
//         color: 'cyan',
//     }

// }

// class Board extends React.Component {
//     renderSquare(i) {
//       return <Square value={i} />;
//     }
//   }

// class Square extends React.Component{
//     render(){
//         return(
//             <button className='square'
//             onClick={console.log('Click')}
//             >{this.props.value}</button>
//         )
//     }
// }



const styles={
    div:{
        background: 'url(../dev/img/bg1.png)',
        height:'500px'
    }, 
    h1:{
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: '900',
        fontSize: '42px',
        lineHeight: '51px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#10417B',
        margin: '60px auto'
    },
    priz: {
        width:'100%',
        height: 'auto'
    },
    priz1:'../dev/img/priz1.png',
    priz2:'../dev/img/priz2.png',
    priz3:'../dev/img/priz3.png',
    containerInfo:{
        maxWidth: '1200px',
        width: '100%',
        padding: '0 20px'
    },
    
}


class App extends Component {
    render() {
        return (
            <Box>
                
                <Grid container direction={'column'} justify={'flex-start'} alignItems={'stretch'} className={'wrap'}>
                    <Grid item xs={12}>
                            <Box className={'top'}>
                                <Box className={'bg'}>
                                <img className={'topBg'} src='../dev/img/bg1.png'/> 
                                </Box>
                                <Top/>
                                                        
                                
                            
                            </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={'rules'}>  
                            <Rules/>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                    <Box className={'rules'}>
                                priz
                            </Box>
                    </Grid>
                    <Grid item xs={12}>
                    <Box className={'rules'}>
                                random
                            </Box>
                    </Grid>
                    <Grid item xs={12}>
                    <Box className={'rules'}>
                                winn
                            </Box>
                    </Grid>



                </Grid>

                {/* <Grid container justify={"center"}>
                    <img className={'topBg'} src='../dev/img/bg1.png'/>
                </Grid>

                <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
                
                    <Top></Top>
                    <Rules></Rules>
                    <h1 style={styles.h1}>Призы</h1>
                    <Grid direction={"row"} container style={styles.containerInfo}>

                    
                        <Grid container alignItems={'center'} spacing={2} justify={'space-between'} >
                            <Grid item xs={12} sm={6} lg={3}>
                                <Box><img src={styles.priz1} style={styles.priz}/></Box>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <Box><img src={styles.priz2} style={styles.priz}/></Box>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Box><img src={styles.priz3} style={styles.priz}/></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item  style={{background:"url(../dev/img/bg3.svg) no-repeat", backgroundSize:'cover', padding: '50px 0', position: 'relative', width:'100%'}}>
                        <img src='../dev/img/bg2.svg'style={{width:'100%', position: 'absolute', top: '-17%', zIndex: '-1'}}/>
                        <Container style={{minHeight:'800px' , background: 'url(../dev/img/video.png) no-repeat', backgroundSize:'100%'}}>
                            <Grid container justify='center' alignItems='center' style={{height: '100%', maxWidth:'470px', margin: '0 auto', padding: '100px'}}>
                                
                                <h1 style={Object.assign(styles.h1, {color: 'white'}) }   >загадывай фильм и жми пуск!</h1>
                                <Button className={'buttonVideo'}><img src='../dev/img/buttonPlay.png'/></Button>

                            </Grid>

                        </Container>
                    </Grid>
                </Grid> */}
            </Box>
            
        );
    }
}

export default App; 