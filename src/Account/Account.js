import React, { Component } from "react";
import Progress from "./Progress.js";
import ProgressStats from "./ProgressStats.js";
import ReferralHistory from "./ReferralHistory";
import ReferralLeaderboard from "./ReferralLeaderboard";
import "./ReferralHistory.css";

import FriendButton from "./FriendButton.js";
import Milestones from "./Milestones.js";
import "./Account.css";
import { HashRouter as Redirect } from "react-router-dom";
import firebase from "firebase";
import { base } from "../config/Firebase";

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function Account(props) {
  const [progress, setProgress] = React.useState(0);
  const [mileStoneHoverIndex, setMileStone] = React.useState(-1);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isReferralStats, setIsReferralStats] = React.useState("history");

  React.useEffect(() => {
    let userCode = props.match.params.userId;

    let referralLink = "/users/" + userCode;

    let referredRef = firebase.database().ref(referralLink);
    referredRef.once("value", (snap) => {
      if (snap.val()) {
        setProgress(snap.val().score);
      }
    });
  }, []);

  const toggleReferralStatus = (e, newReferralStatus) => {
    setIsReferralStats(
      newReferralStatus
    )
  }

  let unsub = base.initializedApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      console.log(false);
      props.history.push("/login");
    }
  });

  unsub();

  return isLoggedIn ? (
    <div className="account">
      <div className="left">
        <div className="welcome">
          <h3
            style={{
              textTransform: "capitalize",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            Welcome {props.match.params.firstName}!
          </h3>
        </div>
        <Progress progress={progress} />
        <ProgressStats progress={progress} />
        <div className="refer-button">
          <FriendButton code={props.match.params.userId} />
        </div>
        <div className="container">
          <ToggleButtonGroup
            value={isReferralStats}
            exclusive
            onChange={toggleReferralStatus}
            aria-label="text alignment"
            style = {{paddingTop: "30px"}}
          >
            <ToggleButton value="history" aria-label="left aligned">
              My Referral History
            </ToggleButton>
            <ToggleButton value="leaderboard" aria-label="left aligned">
              Community Leaderboard
            </ToggleButton>
          </ToggleButtonGroup>
          {isReferralStats === "history" ?          
          <ReferralHistory
          users={props.users}
          currentCode={props.match.params.userId}
          />
          :
          <ReferralLeaderboard
            users={props.users}
            currentCode={props.match.params.userId}
            />}
        </div>
        <div className="referralHistoryCard"></div>
      </div>
    </div>
  ) : (
      <Redirect to="/login" />
    );
}
