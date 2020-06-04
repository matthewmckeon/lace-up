import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import "./Progress.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Milestones from "./Milestones.js";

export default class Progress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      milestoneShow: -1,
    }
  }

  onEnter = (e) => {

    console.log(e)

    this.setState({
      milestoneShow: e,
    })
  }
  
  onExit = (e) => {
    this.setState({
      milestoneShow: -1.
    })
  }

  render() {
    return (
      <div>
        <h2 className="referrals">
          {this.props.progress === 1
            ? "You've gotten 1 referral!"
            : "You've gotten " + this.props.progress + " referrals!"}
        </h2>
        <div className="progress">
          <ProgressBar
            percent={this.props.progress}
            filledBackground="linear-gradient(to right, #FFB20F, #f1d302)"
            stepPositions={[0, 10, 25, 50, 100]}
          >
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep${accomplished ? "accomplished" : ""}`}
                >
                  0
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep${accomplished ? "accomplished" : ""}`}
                  value = {10} onMouseEnter = {() => this.onEnter(10)}
                  onMouseLeave = {() => this.onExit()}
                >
                  10
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep${accomplished ? "accomplished" : ""}`}
                  value = {25} onMouseEnter = {() => this.onEnter(25)}
                  onMouseLeave = {() => this.onExit()}
                >
                  25
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep${accomplished ? "accomplished" : ""}`}
                  value = {50} onMouseEnter = {() => this.onEnter(50)}
                  onMouseLeave = {() => this.onExit()}
                >
                  50
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep${accomplished ? "accomplished" : ""}`}
                  value = {100} onMouseEnter = {() => this.onEnter(100)}
                  onMouseLeave = {() => this.onExit()}
                >
                  100
                </div>
              )}
            </Step>
          </ProgressBar>
        </div>
        <div className="right">
          <Milestones isShowing = {this.state.milestoneShow} />
        </div>
      </div>
    );
  }
}
