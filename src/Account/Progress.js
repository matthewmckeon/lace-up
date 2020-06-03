import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import "./Progress.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export default class Progress extends Component {
  render() {
    return (
      <div>
        <h2 className="referrals">
          You've gotten {this.props.progress} Referrals
        </h2>
        <div className="progress">
          <ProgressBar
            percent={this.props.progress}
            filledBackground="linear-gradient(to right, #FFB20F, #f1d302)"
            stepPositions={[10, 25, 50, 100]}
          >
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep${accomplished ? "accomplished" : ""}`}
                >
                  10
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep${accomplished ? "accomplished" : ""}`}
                >
                  25
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep${accomplished ? "accomplished" : ""}`}
                >
                  50
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (
                <div
                  className={`indexedStep${accomplished ? "accomplished" : ""}`}
                >
                  100
                </div>
              )}
            </Step>
          </ProgressBar>
        </div>
      </div>
    );
  }
}
