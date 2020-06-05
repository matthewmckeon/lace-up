import React, { Component } from "react";
import { base } from "../config/Firebase";
import "./Login.css";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsToLogOut: false,
    };
  }

  logoutUser = () => {
    this.setState({ wantsToLogOut: true });
    this.props.history.push("/");
    this.props.toggleLoginState(false);
    base.initializedApp.auth().signOut();
  };

  render() {
    return this.state.wantsToLogOut ? (
      <Redirect to="/" />
    ) : (
        <div className="formTot">
          <div className="logoutCard">
            <h3>Are you sure you want to Log Out?</h3>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.logoutUser}
              style={{ marginBottom: 5 }}
            >
              {" "}
            Log Out
          </Button>
          </div>
        </div>
      );
  }
}
