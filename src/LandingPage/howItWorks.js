import React from "react";
<<<<<<< HEAD
import "./LandingPage.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";

export default function HowItWorks() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}
=======
import './LandingPage.css';
import Card from './Card';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer'

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '60px',
        paddingRight: '60px',
        paddingTop: '20px',
        paddingBottom: '50px'
    }
});

export default function HowItWorks() {
    const classes = useStyles();
    const classes2 = useStyles();

        return (
            <div className='Grid'>
                <Grid container spacing= {4} className={classes.gridContainer} >
                    <Grid item xs={12} sm={12} md={12}>
                        <Card />
                    </Grid>
                </Grid>
                <Grid container spacing={4} className={classes2.gridContainer}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card />
                    </Grid>
                </Grid>
                <Footer />
            </div>
        );
}
>>>>>>> 0a2cf963cd48ced24109a7926e88f382e0dc1358
