import React, { Component } from "react";
import Progress from "./Progress.js";
import ProgressStats from "./ProgressStats.js";

import { base } from '../config/Firebase';
import firebase from 'firebase';

import FriendButton from "./FriendButton.js";
import Milestones from "./Milestones.js";
import Button from "@material-ui/core/Button";
import "./Account.css";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";


export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  getUserScore = () => {
    let userCode = this.props.match.params.userId;
    this.setState({
      progress: userCode,
    });
  };

  render() {
    return (
      <div className="account">
        <div className="left">

          <div className="welcome">
            <h3 style={{ textTransform: "capitalize" }}>
              Welcome {this.props.match.params.username}!
            </h3>
          </div>
          <Progress progress={90} />
          <ProgressStats progress={90} />
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
