import React, { Component } from "react";
import { base } from '../config/Firebase';

import { Button } from '@material-ui/core';
import { Redirect } from "react-router-dom";

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wantsToLogOut: false,
        }
    }

    logoutUser = () => {
        this.props.toggleLoginState(false);
        base.initializedApp.auth().signOut();
        this.setState({ wantsToLogOut: true })
    }

    render() {
        return (
            (this.state.wantsToLogOut) ?
                <Redirect to="/" />
                :
                <Button
                    color="secondary"
                    onClick={this.logoutUser}
                > Log Out
            </Button>
        )
    }
}