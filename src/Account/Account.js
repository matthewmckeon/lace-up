import React, { Component } from "react";
import Progress from "./Progress.js";
import ProgressStats from "./ProgressStats.js";
import { base } from '../config/Firebase';
import firebase from 'firebase';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    }
  }

  getUserScore = () => {
    let userCode = this.props.match.params.userId;
    this.setState({
      progress: userCode
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <div>
          <h2>Welcome {this.props.match.params.firstName}!</h2>
        </div>
        <Progress progress={this.state.progress} />
        <ProgressStats progress={this.state.progress} />
      </div>
    );
  }
}
