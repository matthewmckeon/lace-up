import React, { Component } from "react";
import Login from "./LandingPage/Login.js";
import SignUp from "./LandingPage/SignUp.js";
import Logout from "./LandingPage/Logout.js";
import Faq from "./FAQ/Faq.js";
import About from "./About/About.js";
import Account from "./Account/Account.js";
import NavBar from "./navComps/NavBar.js";
import HowItWorks from "./LandingPage/howItWorks.js";
import MainFooter from "./Footer/MainFooter";

import { base } from "./config/Firebase";
import firebase from "firebase";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
//BrowserRouter in App.js, Login.js, SignUp, and Account!!!!!!!!!!!!!

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      currentUserCode: "",
      isLoggedIn: false,
    };
  }

  //https://coderjourney.com/tutorials/how-to-integrate-react-with-firebase/
  addUser = (user) => {
    const users = { ...this.state.users };

    if (user.givenReferralCode) {
      let newMyReferralList = users[user.givenReferralCode].myReferrals;
      if (newMyReferralList[0] === "no referrals yet") {
        newMyReferralList[0] = user.referralCode;
      } else {
        newMyReferralList.push(user.referralCode);
      }
      users[user.givenReferralCode] = {
        myReferrals: newMyReferralList,
      };
    }

    users[user.referralCode] = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      referralCode: user.referralCode,
      score: 0,
      givenReferralCode: user.givenReferralCode,
      myReferrals: user.myReferrals,
      dateSignedUp: user.dateSignedUp,
    };
    this.setState({ users });

    let referredPrevScore = 0;
    if (user.hasCode) {
      //then update the score of the person with the given code
      let referralLink = "/users/" + user.givenReferralCode;

      let referredRef = firebase.database().ref(referralLink);
      referredRef.once("value", (snap) => {
        if (snap.val()) {
          referredPrevScore = snap.val().score;
        }
      });

      //https://medium.com/@hasangi/writing-deleting-and-updating-data-in-firebase-realtime-database-with-javascript-f26113ec8c93
      referredPrevScore += 1; //update the person whom the referred code belongs to by adding 1
      firebase
        .database()
        .ref(referralLink)
        .update({ score: referredPrevScore });
    }
  };

  componentDidMount = () => {
    this.usersRef = base.syncState("users", {
      context: this,
      state: "users",
    });
  };

  componentWillUnmount() {
    base.removeBinding(this.usersRef);
  }

  toggleLoginState = (isLoggedIn) => {
    this.setState({ isLoggedIn: isLoggedIn });
  };

  //https://learnwithparam.com/blog/dynamic-pages-in-react-router/
  render() {
    return (
      <div>
        <NavBar toggleLoginState={this.toggleLoginState} />
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Switch>
              <Route exact path="/faq" render={(props) => <Faq {...props} />} />
              <Route exact path="/about" render={(props) => <About />} />
              <Route
                path="/account/:firstName/:userId"
                render={(props) => (
                  <Account users={this.state.users} {...props} />
                )}
              />
              <Route
                exact
                path="/login"
                render={(props) => (
                  <Login toggleLoginState={this.toggleLoginState} {...props} />
                )}
              />
              <Route
                exact
                path="/register"
                render={(props) => (
                  <SignUp
                    toggleLoginState={this.toggleLoginState}
                    {...props}
                    addUser={this.addUser}
                    {...props}
                    updateCurrentUser={this.updateCurrentUser}
                    {...props}
                    users={this.state.users}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/log-out"
                render={(props) => (
                  <Logout toggleLoginState={this.toggleLoginState} {...props} />
                )}
              />
              <Route
                exact
                path="/"
                render={(props) => (
                  <HowItWorks isLoggedIn={this.state.isLoggedIn} {...props} />
                )}
              />
            </Switch>
          </div>
        </Router>
        <MainFooter />
      </div>
    );
  }
}
