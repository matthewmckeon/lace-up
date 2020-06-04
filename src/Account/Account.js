import React, { Component } from "react";
import Progress from "./Progress.js";
import ProgressStats from "./ProgressStats.js";

import FriendButton from "./FriendButton.js";
import Milestones from "./Milestones.js";
import "./Account.css";

import firebase from 'firebase';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    let userCode = this.props.match.params.userId;

    let referralLink = "/users/" + userCode

    let referredRef = firebase.database().ref(referralLink)
    referredRef.once('value', snap => {
      if (snap.val()) {
        this.setState({
          progress: snap.val().score
        })
      }
    })
  };

  render() {
    return (
      <div className="account">
        <div className="left">

          <div className="welcome">
            <h3 style={{ textTransform: "capitalize" }}>
              Welcome {this.props.match.params.firstName}!
            </h3>
          </div>
          <Progress progress={this.state.progress} />
          <ProgressStats progress={this.state.progress} />
          <div className="refer-button">
            <FriendButton code={this.props.match.params.userId} />
          </div>
        </div>
        <div className="right">
          <Milestones />
        </div>
      </div>
    );
  }
}
