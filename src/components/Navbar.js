import React from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Navbar(props) {
    const classes = useStyles();

    const location = useLocation();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Tabs value={location.pathname} aria-label="page navigation">
                        <Tab label="Home" value='/home' variant='fullWidth' component={Link} to='/home' />
                        <Tab label="Test" value='/test' variant='fullWidth' component={Link} to='/test' />
                    </Tabs>
                </div>
            </AppBar>
        </div>
    )
}