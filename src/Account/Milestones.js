import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import AWARDS from '../LandingPage/Awards';

import "./Milestones.css";

export default function Milestones(props) {

  
  const [isShowing, setIsShowing] = useState(props.isShowing)

  useEffect(() => {
    setIsShowing(props.isShowing)
  }, [props.isShowing])


  return (
    
    <div className="cardList">
      {isShowing === 10 ? <Card className="milestone-card ten" isHidden = {true}>
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
      </Card> : null}
      {isShowing === 25 ? <Card className="milestone-card twenty-five">
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            25 Referrals
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We'll be sending you a free LaceUp sticker pack with over 10 brand
            decals!
          </Typography>
        </CardContent>
      </Card> : null}
      {isShowing === 50 ? <Card className="milestone-card fifty">
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            50 Referrals
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Get a free, limited edition LaceUp <br />
            T-Shirt not sold commercially!
          </Typography>
        </CardContent>
      </Card> : null}
      {isShowing === 100 ? <Card className="milestone-card one-hundred">
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            100 Referrals
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pick any pair of shoes from our latest collection, and we'll send it
            to you for free!
          </Typography>
        </CardContent>
      </Card> : null}
    </div>
  );
}
