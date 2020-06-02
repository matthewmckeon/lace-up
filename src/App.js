import React, { Component } from 'react';
import Faq from "./FAQ/Faq.js";
import About from "./About/About.js";
import Account from "./Account/Account.js";
import NavBar from "./navComps/navBar.js";
import HowItWorks from "./LandingPage/HowItWorks.js";
import {base} from './config/Firebase';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {},
      isLoggedIn: false,
    }
  }

  addUser = () => {
    const users = {...this.state.user};
    users[0] = {
      name: "John Smith"
    };
    this.setState({users});
  }

  componentWillMount() {
    this.usersRef = base.syncState('users', {
      context: this,
      state: "users"
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.usersRef)
  }

  render() {
    return (
      <div>
        <NavBar />
        <button onClick = {this.addUser}>Add User</button>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/faq" component={Faq} />
              <Route path="/about" component={About} />
              <Route path="/account" component={Account} /> {/* unique to user */}
               <Route path="/" component={HowItWorks} hello={"he"} /> {/*landing page before log in */}
            </Switch>
          </div>
        </Router >
      </div>
    )
  }
}
