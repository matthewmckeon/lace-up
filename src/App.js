import React, { Component } from 'react';
import Login from "./LandingPage/Login.js";
import SignUp from "./LandingPage/SignUp.js";
import Logout from "./LandingPage/Logout.js";
import Faq from "./FAQ/Faq.js";
import About from "./About/About.js";
import Account from "./Account/Account.js";
import NavBar from "./navComps/NavBar.js";
import HowItWorks from "./LandingPage/HowItWorks.js";
import { base } from './config/Firebase';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {},
      currentUserCode: "",
      isLoggedIn: false,
      firebaseInitialized: false,
    }
  }

  //https://coderjourney.com/tutorials/how-to-integrate-react-with-firebase/
  addUser = (user) => {
    const users = { ...this.state.users };
    users[user.referralCode] = {
      username: user.username,
      email: user.email,
      referralCode: user.referralCode,
      score: 0,
    };
    this.setState({ users });
  }

  componentWillMount() {
    this.usersRef = base.syncState('users', {
      context: this,
      state: "users"
    })
  }

  componentDidMount() {
    let isInitialized = new Promise(resolve => {
      base.initializedApp.auth().onAuthStateChanged(resolve)
    })
    this.setState({ firebaseInitialized: isInitialized })
  }

  componentWillUnmount() {
    base.removeBinding(this.usersRef)
  }

  toggleLoginState = (isLoggedIn) => {
    this.setState({ isLoggedIn: isLoggedIn })
  }

  updateCurrentUser = (userCode) => {
    this.setState({ currentUserCode: userCode })
  }

  //https://learnwithparam.com/blog/dynamic-pages-in-react-router/
  render() {
    return (
      <div>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          users={this.state.users}
          currentUserCode={this.state.currentUserCode}
        />
        <Router>
          <div className="App">
            <Switch>
              <Route path="/faq" component={Faq} />
              <Route path="/about" component={About} />
              <Route path="/account/:username/:userId" component={Account} /> {/* unique to user */}
              <Route path="/login"
                render={(props) =>
                  (<Login
                    toggleLoginState={this.toggleLoginState} {...props}
                    updateCurrentUser={this.updateCurrentUser}
                  />)
                }
              />
              <Route path="/register"
                render={(props) =>
                  <SignUp
                    toggleLoginState={this.toggleLoginState} {...props}
                    addUser={this.addUser}
                    updateCurrentUser={this.updateCurrentUser}
                  />
                }
              />
              <Route path="/log-out"
                render={(props) =>
                  (<Logout
                    toggleLoginState={this.toggleLoginState} {...props}
                  />)
                }
              />
              <Route path="/" component={HowItWorks} /> {/* landing page before log in*/}

            </Switch>
          </div>
        </Router >
      </div>
    )
  }
}
