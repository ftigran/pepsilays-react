import { Paper, Box, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import React, { Component } from "react";
import Table from './Table/Table'
import './Winners.scss'

function Winners(){
    return(         
        <Box className={'winners'}>
            <h2>Победители</h2>
            <Paper component="form" className={'winnersForm'}>
                <InputBase
                    className={'winnersInput'}
                    placeholder="e-mail"
                    inputProps={{ 'aria-label': 'e-mail' }}
                />
                <IconButton type="submit" aria-label="search" className={'winnersButton'}>
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Table/>
        </Box>
    )
}

export default Winners; 