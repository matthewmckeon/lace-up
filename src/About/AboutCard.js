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

export default function AboutCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <h3>Our Mission</h3>
        <p>
          LaceUp started with a simple goal in mind: bringing environmentally
          concious shoes into a wasteful market. The US generates 35% of waste
          in packaging alone, and we at LaceUp strive to lower those numbers.
          With eco-concious "one-piece" packaging, made from bamboo reed in
          place of plastic, soy-based inks instead of chemicals, and recycled
          cardboard, our footprint in the environment is barely there. <br />
          <br />
          We pride ourselves on the 3 R's: Reuse, Repurpose, and Recycle, and it
          shows in our sneakers. We use resuable, recycled, and natural material
          to craft all of our shoes, all while preserving quality and comfort.
          Recycled plastic becomes a pair of LaceUp laces, while natural
          materials like our bamboo insoles and wool fabric become the base of
          your shoe. We aren't just a shoe company, we're an environmentally
          concious movement.
        </p>
      </CardContent>
    </Card>
  );
}
