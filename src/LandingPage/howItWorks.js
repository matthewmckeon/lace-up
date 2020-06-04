import React from "react";
import "./LandingPage.css";
import Card from "./Card";
import Card1 from "./Card1";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "20px",
    paddingBottom: "50px",
  },
});

export default function HowItWorks() {
  const classes = useStyles();
  const classes2 = useStyles();

  return (
    <div className="Grid">
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={12}>
          <Card1 />
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes2.gridContainer}>
        <Grid item xs={12} sm={12} md={12}>
          <Card />
        </Grid>
      </Grid>
      <div className='buttons'>
        <Button
          className='login'
          variant="contained"
        >
          <a href='/login'>Login</a>
        </Button>
        <div class="divider" />
        <Button
          className='signup'
          variant="contained"
        >
          <a href='/register'>Sign Up</a></Button>
      </div>
    </div>
  );
}
