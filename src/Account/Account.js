import React, { Component } from "react";
import Progress from "./Progress.js";
import ProgressStats from "./ProgressStats.js";
import ReferralHistory from "./ReferralHistory";

import FriendButton from "./FriendButton.js";
import Milestones from "./Milestones.js";
import "./Account.css";

import firebase from 'firebase';
import { base } from '../config/Firebase';
import { BrowserRouter as Redirect } from "react-router-dom";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      mileStoneHoverIndex: -1,
      isLoggedIn: false
    };
  }

  componentWillMount() {
    if (base.initializedApp.auth().currentUser) {
      this.setState({ isLoggedIn: true })
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
    } else {
      this.setState({ isLoggedIn: false })
      this.props.history.push("/login")
    }

  };


  render() {

    return (
      (this.state.isLoggedIn) ?

        <div className="account">
          <div className="left">

            <div className="welcome">
              <h3 style={{ textTransform: "capitalize", fontSize: "40px", textAlign: "center" }}>
                Welcome {this.props.match.params.firstName}!
            </h3>
            </div>
            <Progress progress={this.state.progress} />
            <ProgressStats progress={this.state.progress} />
            <div className="refer-button">
              <FriendButton code={this.props.match.params.userId} />
            </div>
            <ReferralHistory users={this.props.users} currentCode={this.props.match.params.userId} />
          </div>

        </div>
        :
        <Redirect to="/login" />
    );
  }
}
