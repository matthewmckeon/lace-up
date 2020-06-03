import React, { Component } from "react";
import AboutCard from './AboutCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '60px',
        paddingRight: '60px',
        paddingTop: '20px',
        paddingBottom: '50px'

    }
});

export default function About() {
    const classes = useStyles();
    const classes2 = useStyles();

    return (
        <div className='Grid'>
            <Grid container spacing={4} className={classes.gridContainer} >
                <Grid item xs={12} sm={12} md={12}>
                    <AboutCard />
                </Grid>
            </Grid>
        </div>
    );
}