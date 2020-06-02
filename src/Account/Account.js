import React, { Component } from "react";
import Progress from "./Progress.js";
import ProgressStats from "./ProgressStats.js";

export default class Account extends Component {
  render() {
    return (
      <div>
        <Progress progress={40} />
        <ProgressStats progress={40} />
      </div>
    );
  }
}
