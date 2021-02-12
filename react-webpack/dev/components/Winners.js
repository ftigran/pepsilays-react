import { Box } from "@material-ui/core";
import React, { Component } from "react";
import './Winners.scss'

function Winners(){
    return(         
        <Box>
            <h2>Победители</h2>
            <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default Winners; 