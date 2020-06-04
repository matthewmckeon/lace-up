import React from "react";
import "./LandingPage.css";
import Card from "./Card";
import Card1 from "./Card1";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { PROGRAMS } from "./Programs.js";
import { AWARDS } from "./Awards.js";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "10px",
    paddingBottom: "50px",
    width: "99vw",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"})`,
    backgroundSize: "50%", //??????????????
    marginBottom: "0px"
  },
});

export default function HowItWorks() {
  const classes = useStyles();
  const classes2 = useStyles();

  return (
    <div className="Grid">
      <Grid container spacing={1} className={classes.gridContainer}>
        {PROGRAMS.map((program, index) => {
          return (
            <Grid key={index} item xs={4}>
              <Card
                program={program}
              />
            </Grid>
          )
        })}
      </Grid>

      <Grid container spacing={1} className={classes.gridContainer}>
        {AWARDS.map((award, index) => {
          return (
            <Grid key={index} item xs={3}>
              <Card1
                award={award}
              />
            </Grid>
          )
        })}
      </Grid>

      <div style={{ paddingBottom: "10px", backgroundColor: "black" }} className='buttons'>
        <h1 style={{ color: "white" }}>Sign Up Now!</h1>
        <Button
          className='login'
          variant="contained"
        >
          <a href='/login'>Login</a>
        </Button>
        <div className="divider" />
        <Button
          className='signup'
          variant="contained"
        >
          <a href='/register'>Sign Up</a></Button>
      </div>
    </div >
  );
}
