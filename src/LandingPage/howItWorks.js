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
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "99vw",
  },
});

export default function HowItWorks() {
  const classes = useStyles();
  const classes2 = useStyles();

  return (
    <div className="landing">
      <div className="Grid">
        <Grid container spacing={2} className={classes.gridContainer}>
          {PROGRAMS.map((program, index) => {
            return (
              <Grid key={index} item xs={4}>
                <Card program={program} />
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={1} className={classes.gridContainer}>
          {AWARDS.map((award, index) => {
            return (
              <Grid key={index} item xs={3}>
                <Card1 award={award} />
              </Grid>
            );
          })}
        </Grid>

        <div
          style={{ paddingBottom: "10px" }}
          className="buttons"
        >
          <h1 style={{ color: "white", textDecoration: 'none' }}>Sign Up Now!</h1>
          <button className="login" variant="contained" style={{ color: "white", textDecoration: 'none' }}>
            <a href="/login">Login</a>
          </button>
          <div className="divider" />
          <button className="signup" variant="contained" style={{ color: "white", textDecoration: 'none' }}>
            <a href="/register">Sign Up</a>
          </button>
        </div>

      </div>
    </div>
  );
}
