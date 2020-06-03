import React, { Component } from "react";
import { base } from '../config/Firebase';
import firebase from 'firebase';

import { Typography, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { ALPHA } from "./Alphabet.js";

import { BrowserRouter as Redirect } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                referralCode: "",
            },
            redirect: false,
        }
    }

    handleLogin = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        })
    }

    formatEmail = (email) => {
        let indexAt = email.indexOf("@")
        let emailKey = email.substring(0, indexAt)
        return emailKey
    }

    createReferralCode = (emailKey) => {
        let referralCode = "";
        //https://www.quora.com/How-do-you-iterate-over-the-characters-of-a-string-in-JavaScript
        [...emailKey].forEach(char => {
            let num = ALPHA[char].toString();
            referralCode += num
        })
        return referralCode
    }

    loginUser = async (e) => {
        e.preventDefault()
        try {
            await base.initializedApp.auth().signInWithEmailAndPassword(
                this.state.user.email, this.state.user.password
            )
            this.props.toggleLoginState(true)
            this.setState({ redirect: true })

            //getId/code
            let formattedEmail = this.formatEmail(this.state.user.email);
            let userCode = this.createReferralCode(formattedEmail)
            const userRef = firebase.database().ref('users/' + userCode)
            userRef.once('value', snap => {
                if (snap.val()) {
                    this.setState({
                        user: {
                            ...this.state.user,
                            firstName: snap.val().firstName,
                            referralCode: snap.val().referralCode
                        }
                    })
                }
            })
            this.props.updateCurrentUser(userCode) //update current user to app

            //https://scotch.io/courses/using-react-router-4/authentication-with-redirect
            let userLink = '/account/' + this.state.user.firstName + "/" + this.state.user.referralCode;
            this.props.history.push(userLink);

        } catch (error) {
            alert(error.message)
            this.props.toggleLoginState(false)
            this.setState({ redirect: false })
        }
    }

    render() {
        // console.log(this.props)
        let userLink = '/account/' + this.state.user.firstName + "/" + this.state.user.referralCode;
        return (
            (this.state.redirect) ?
                <Redirect to={userLink} />
                :
                <div className="loginForm">
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography style={{ fontSize: 30 }}>
                        SIGN IN
                        </Typography>
                    <form onSubmit={e => e.preventDefault()}>
                        <FormControl required>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="off"
                                autoFocus
                                value={this.state.user.email}
                                onChange={e => this.handleLogin(e)} />
                        </FormControl>
                        <br />
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="off"
                                value={this.state.user.password}
                                onChange={e => this.handleLogin(e)}
                            />
                        </FormControl>
                        <br />
                        {/* <Button
                        style={{ marginTop: 15, marginRight: 5 }}
                        variant="contained"
                        color="secondary"
                        onClick={this.props.toggleRegisterPage} //TO PASSDOWN!!!!1
                    >Register
                    </Button> */}
                        <Button
                            style={{ marginTop: 15 }}
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.loginUser(e)}
                        > Sign In
                    </Button>
                    </form>
                </div>
        )
    }
}