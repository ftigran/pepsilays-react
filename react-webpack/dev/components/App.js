import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles={
    div: {
        border: '1px solid #ccc',
        borderRadius: '10px'
    },
    h1: {
        textAlign: 'center',
        color: 'cyan',
    }

}

class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  }

class Square extends React.Component{
    render(){
        return(
            <button className='square'
            onClick={console.log('Click')}
            >{this.props.value}</button>
        )
    }
}



class App extends Component {
    render() {
        return (
<Board></Board>
        );
    }
}

export default App; 