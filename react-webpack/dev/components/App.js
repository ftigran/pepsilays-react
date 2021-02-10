import React, { Component } from "react";

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

class App extends Component {
    render() {
        return (
            <div style={styles.div}>
                <h1 style={styles.h1}>Hello World!</h1> 
            </div>
        );
    }
}

export default App; 