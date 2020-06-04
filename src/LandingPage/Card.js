import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 400,
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
        <h1>{props.program.title}</h1>
        <p>{props.program.descr}</p>
        {props.program.title.includes("Donate") ? (
          <img
            style={{
              width: "62%",
              height: "auto",
              margin: "auto",
              display: "block",
            }}
            src={require("../images/kids.png")}
            alt="kids"
          />
        ) : props.program.title.includes("Reducing") ? (
          <img
            style={{
              width: "50%",
              height: "auto",
              margin: "auto",
              display: "block",
            }}
            src={require("../images/recycle.jpg")}
            alt="recycle"
          />
        ) : (
          <img
            style={{
              width: "66%",
              height: "auto",
              margin: "auto",
              display: "block",
            }}
            src={require("../images/repair.jpg")}
            alt="repair"
          />
        )}
      </CardContent>
    </Card>
  );
}
