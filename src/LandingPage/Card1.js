import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 280,
    borderRadius: 100,
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
        <h1>{props.award.title}</h1>
        <p>{props.award.descr}</p>
        {props.award.title === "10 Referrals" ? (
          <FacebookIcon
            style={{ margin: "auto", display: "block" }}
            color="primary"
            fontSize="large"
          />
        ) : props.award.title === "25 Referrals" ? (
          <img
            style={{
              width: "80%",
              height: "auto",
              margin: "auto",
              display: "block",
            }}
            src={require("../images/decal.png")}
            alt="decal"
          />
        ) : props.award.title === "50 Referrals" ? (
          <img
            style={{
              width: "37%",
              height: "auto",
              margin: "auto",
              display: "block",
            }}
            src={require("../images/shirt.svg")}
            alt="shirt"
          />
        ) : (
          <img
            style={{
              width: "32%",
              height: "auto",
              margin: "auto",
              display: "block",
            }}
            src={require("../images/allbirds.jpg")}
            alt="allbird"
          />
        )}
      </CardContent>
    </Card>
  );
}
