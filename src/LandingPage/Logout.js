import React, { Component } from "react";
import { base } from '../config/Firebase';
import firebase from 'firebase';

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
        let userLink = "/"
        const userRef = firebase.database().ref('users/' + this.props.currentUserCode)
        userRef.once('value', snap => {
            if (snap.val()) {
                let firstName = snap.val().firstName;
                userLink += firstName + "/" + this.props.currentUserCode
            }
        })
        this.setState({ wantsToLogOut: true })
        this.props.history.push('/');
        this.props.toggleLoginState(false);
        base.initializedApp.auth().signOut();


    }

    render() {
        console.log(base.initializedApp.auth().currentUser)
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