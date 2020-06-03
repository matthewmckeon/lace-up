import React, { Component } from "react";
import "./ProgressStats.css";

//gets progress

export default class ProgressStats extends Component {
  render() {
    const { progress } = this.props;
    return (
      <div className="container">
<<<<<<< HEAD
        <div className="card">
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
=======
        <h4>Your next reward is...</h4>
        <div className="reward">
          {progress <= 10
            ? "An invitation to our exclusive Facebook group!"
            : progress <= 25
              ? "A free LaceUp sticker pack!"
              : progress <= 50
                ? "A limited edition LaceUp shirt!"
                : "Your choice of shoes from our newest collection!"}
>>>>>>> 0a2cf963cd48ced24109a7926e88f382e0dc1358
        </div>
      </div>
    );
  }
}
