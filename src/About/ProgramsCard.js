import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 650,
    borderRadius: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <h2 style={{ textAlign: "center" }}>{props.program.title}</h2>
        <p>{props.program.descr}</p>
        {(props.program.title.includes("Donate")) ?
          <img
            style={{
              width: "100%",
              height: "auto",
              position: "relative",
              top: "8vh"
            }}
            src={require('../images/kids.png')} atl="Donate" />
          :
          (props.program.title.includes("Reducing")) ?
            <img
              style={{
                width: "100%",
                height: "auto",
              }}
              src={require('../images/recycle.jpg')} atl="Recycle" />
            :
            <img
              style={{
                width: "100%",
                height: "auto",
                position: "relative",
                top: "7vh"
              }}
              src={require('../images/repair.jpg')} atl="Repair" />
        }
      </CardContent>
    </Card >
  );
}
