import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 0,
  },
});

export default function ProgramsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <h3>Programs</h3>
        <p>
          Here at LaceUp, we believe in sustainability and style going hand in
          hand. This is why we maintain a recyclable shoe model, and for every
          used shoe you turn in we will not only reuse the materials to create
          an even better shoe, but we'll donate a pair of shoes to a child in
          need. Not ready to part with your shoe yet? We've got you covered on
          that as well, with low-cost repairs that will get your shoe back to
          you in a matter of days.
          <br />
          <br />
          Particpate in our LaceUp influencer program for exclusive rewards and
          deals with our products. Not only will you get access to samples of
          our products that you can then review on your social media, but you'll
          be the first to know about incoming collections.
        </p>
      </CardContent>
    </Card>
  );
}
