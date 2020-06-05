import React, { Component } from "react";
import Progress from "./Progress.js";
import ProgressStats from "./ProgressStats.js";
import ReferralHistory from "./ReferralHistory";

import FriendButton from "./FriendButton.js";
import Milestones from "./Milestones.js";
import "./Account.css";
import { BrowserRouter as Redirect } from "react-router-dom";
import firebase from "firebase";
import { base } from "../config/Firebase";

export default function Account(props) {
  const [progress, setProgress] = React.useState(0);
  const [mileStoneHoverIndex, setMileStone] = React.useState(-1);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
        <ReferralHistory
          users={props.users}
          currentCode={props.match.params.userId}
        />
      </div>
    </div>
  ) : (
      <Redirect to="/login" />
    );
}
