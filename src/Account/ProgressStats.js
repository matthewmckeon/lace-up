import React, { Component } from "react";
import "./ProgressStats.css";

//gets progress

export default class ProgressStats extends Component {
  render() {
    const { progress } = this.props;
    return (
      <div className="container">
        <div className="card">
          <h4>Your next reward is...</h4>
          <div className="reward">
            {progress <= 10
              ? ("An invitation to our exclusive Facebook group with "+(10-progress).toString()+" more referrals!")
              : progress <= 25
              ? ("A free LaceUp sticker pack with "+(25-progress).toString()+" more referrals!")
              : progress <= 50
              ? ("A limited edition LaceUp shirt with "+(50-progress).toString()+" more referrals!")
              : ("Your choice of shoes from our newest collection with "+(100-progress).toString()+" more referrals!")
            }
          </div>
        </div>
      </div>
    );
  }
}
