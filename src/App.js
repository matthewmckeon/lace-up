import React, { Component } from "react";
import Login from "./LandingPage/Login.js";
import SignUp from "./LandingPage/SignUp.js";
import Logout from "./LandingPage/Logout.js";
import Faq from "./FAQ/Faq.js";
import About from "./About/About.js";
import Account from "./Account/Account.js";
import NavBar from "./navComps/NavBar.js";
import HowItWorks from "./LandingPage/HowItWorks.js";
import MainFooter from "./Footer/MainFooter";
import { base } from "./config/Firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      currentUserCode: "",
      isLoggedIn: false,
      authListen: null,
    }
  }

  //https://coderjourney.com/tutorials/how-to-integrate-react-with-firebase/
  addUser = (user) => {
    const users = { ...this.state.users };
    users[user.referralCode] = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      referralCode: user.referralCode,
      score: 0,
    };
    this.setState({ users });
  };

  componentWillMount = () => {
    this.usersRef = base.syncState('users', {
      context: this,
      state: "users"
    })

  }

  componentDidMount = () => {
    let authListener = base.initializedApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.checkLogin()
      } else {
        console.log("need to log in")
      }
    });
    this.setState({ authListen: authListener })
  }

  componentWillUnmount() {
    base.removeBinding(this.usersRef)
    this.state.authListen()
  }

  checkLogin = () => {
    this.setState(prevState => {
      return ({
        currentUserCode: prevState.currentUserCode
      })
    })
  }

  toggleLoginState = (isLoggedIn) => {
    this.setState({ isLoggedIn: isLoggedIn });
  };

  updateCurrentUser = (userCode) => {
    this.setState({ currentUserCode: userCode });
  };

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
              <Route path="/faq"
                render={(props) =>
                  (<Faq
                    {...props}
                  />)
                }
              />
              <Route path="/about"
                render={(props) =>
                  (<About
                    {...props}
                  />)
                }
              />
              <Route path="/account/:firstName/:userId"
                render={(props) => (
                  <Account
                    {...props}
                  />
                )}
              /> {/* unique to user */}
              <Route path="/login"
                render={(props) =>
                  (<Login
                    toggleLoginState={this.toggleLoginState} {...props}
                    updateCurrentUser={this.updateCurrentUser} {...props}
                  />)
                }
              />
              <Route
                path="/register"
                render={(props) => (
                  <SignUp
                    toggleLoginState={this.toggleLoginState} {...props}
                    addUser={this.addUser} {...props}
                    updateCurrentUser={this.updateCurrentUser} {...props}

                  />
                )}
              />
              <Route path="/log-out"
                render={(props) =>
                  (<Logout
                    toggleLoginState={this.toggleLoginState} {...props}
                    currentUserCode={this.state.currentUserCode}{...props}
                  />)
                }
              />
              <Route path="/"
                render={(props) => (
                  <HowItWorks
                    {...props}
                  />
                )}
              /> {/* landing page before log in*/}

            </Switch>
          </div>
        </Router>
        <MainFooter />
      </div>
    );
  }
}
