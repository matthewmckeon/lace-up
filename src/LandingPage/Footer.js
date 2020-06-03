import React, { Component } from "react";
import StickyFooter from "react-sticky-footer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: "#124559",
            padding: "2rem",
            height: "60px",
            color: "white",
          }}
          stickyStyles={{
            backgroundColor: "#124559",
            padding: "2rem",
            height: "60px",
            color: "white",
          }}
        >
          <div className="buttons">
            <div className="login-container">
              <Link to="/login">
                <Button
                  className="login"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Log In
                </Button>
              </Link>
            </div>
            <div className="signin-container">
              <Link to="/register">
                <Button
                  className="signup"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </StickyFooter>
      </div>
    );
  }
}
