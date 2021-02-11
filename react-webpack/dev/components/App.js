import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import autoprefixer from "autoprefixer";


import Rules from './Rules'
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
        margin: 'auto'
    },
    priz: {
        width:'100%',
        height: 'auto'
    },
    priz1:'../dev/img/priz1.png',
    priz2:'../dev/img/priz2.png',
    priz3:'../dev/img/priz3.png',
    containerInfo:{
        maxWidth: '1200px'
    },
}


class App extends Component {
    render() {
        return (
            <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
                <div style={styles.div}></div>
                <Grid direction={"column"} container style={styles.containerInfo}>

                    <Rules></Rules>
                
                    <Grid container alignItems={'center'} spacing={2} justify={'space-between'} >
                        <Grid xs={12} sm={6} lg={3}>
                            <Box><img src={styles.priz1} style={styles.priz}/></Box>
                        </Grid>
                        <Grid xs={12} sm={6} lg={3}>
                            <Box><img src={styles.priz2} style={styles.priz}/></Box>
                        </Grid>
                        <Grid xs={12} lg={6}>
                            <Box><img src={styles.priz3} style={styles.priz}/></Box>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        );
    }
}

export default App; 