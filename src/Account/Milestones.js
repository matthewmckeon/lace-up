import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Milestones.css";
export default function Milestones() {
  return (
    <div className="cardList">
      <Card className="milestone-card">
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            10 Referrals
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Recieve an invitation to our exclusive LaceUp facebook group where
            we'll be releasing product drop notices, coupons, limited edition
            giveaways, and more!
          </Typography>
        </CardContent>
      </Card>
      <Card className="milestone-card">
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            25 Referrals
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We'll be sending you a free LaceUp sticker pack with over 10 brand
            decals!
          </Typography>
        </CardContent>
      </Card>
      <Card className="milestone-card">
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            50 Referrals
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Get a free, limited edition LaceUp <br />
            T-Shirt not sold commercially!
          </Typography>
        </CardContent>
      </Card>
      <Card className="milestone-card">
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            100 Referrals
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pick any pair of shoes from our latest collection, and we'll send it
            to you for free!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
