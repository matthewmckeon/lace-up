import React from "react";
import './LandingPage.css';
import Card from './Card';
import Card1 from './Card1';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer'

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '60px',
        paddingRight: '60px',
        paddingTop: '20px',
        paddingBottom: '20px'
    }
});

export default function HowItWorks() {
    const classes = useStyles();
    const classes2 = useStyles();

        return (
            <div className='Grid'>
                <Grid container spacing= {4} className={classes.gridContainer} >
                    <Grid item xs={12} sm={12} md={12}>
                        <Card1 />
                    </Grid>
                </Grid>
                <Grid container spacing={4} className={classes2.gridContainer}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card />
                    </Grid>
                </Grid>
            </div>
        );
}