import React, { Component } from 'react';
import LogInRoute from "./LandingPage/LogInRoute.js";
import Login from "./LandingPage/Login.js";
import SignUp from "./LandingPage/SignUp.js";
import Faq from "./FAQ/Faq.js";
import About from "./About/About.js";
import Account from "./Account/Account.js";
import NavBar from "./navComps/navBar.js";
import howItWorks from "./LandingPage/howItWorks.js";
import { base } from './config/Firebase';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {},
      isLoggedIn: false,
      firebaseInitialized: false,
    }
  }

  componentDidMount() {
    let isInitialized = new Promise(resolve => {
      base.initializedApp.auth().onAuthStateChanged(resolve)
    })
    this.setState({ firebaseInitialized: isInitialized })

  }

  toggleLoginState = (isLoggedIn) => {
    this.setState({ isLoggedIn: isLoggedIn })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <div className="App">
            <Switch>
              <Route path="/faq" component={Faq} />
              <Route path="/about" component={About} />
              <Route path="/account" component={Account} /> {/* unique to user */}
              <Route path="/login"
                render={(props) =>
                  // <LogInRoute
                  //   isLoggedIn={this.state.isLoggedIn} {...props}
                  // />
                  <Login
                    isLoggedIn={this.state.isLoggedIn} {...props}
                  />
                }
              />
              <Route path="/register"
                render={(props) =>
                  <SignUp
                    toggleLoginState={this.toggleLoginState} {...props}
                  />
                }
              />
              <Route path="/" component={howItWorks} /> {/* landing page before log in*/}

            </Switch>
          </div>
        </Router >
      </div>
    )
  }
}
