import React, { Component } from "react";

export default class ProgressStats extends Component {
  render() {
    const { progress } = this.props;
    return (
      <div className="container">
        <h4>Your next reward is...</h4>
        <div className="reward">
          {progress <= 10
            ? "An invitation to our exclusive Facebook group!"
            : progress <= 25
            ? "A free LaceUp sticker pack!"
            : progress <= 50
            ? "A limited edition LaceUp shirt!"
            : "Your choice of shoes from our newest collection!"}
        </div>
      </div>
    );
  }
}
