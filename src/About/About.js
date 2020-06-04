import React from "react";
import AboutCard from "./AboutCard";
import ProgramsCard from "./ProgramsCard";
import "./About.css";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PROGRAMS } from "./Programs.js";

const useStyles = makeStyles({
  gridContainer: {
    width: "90vw",
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div className="about">
      <div className="leftcolumn">
        <div className="mission">
          <AboutCard />
        </div>
        <div className="programs">
          <Grid container spacing={1} className={classes.gridContainer}>
            {PROGRAMS.map((program, index) => {
              return (
                <Grid key={index} item xs={4}>
                  <ProgramsCard
                    style={{}}
                    key={index} program={program} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
      <div className="image-container">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        />
      </div>
    </div>
  );
}
