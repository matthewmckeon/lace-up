import React, { Component } from "react";
import { base } from '../config/Firebase';
import {
    Typography, Avatar, Button, FormControl, Input, InputLabel,
    FormControlLabel, Checkbox
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import { ALPHA } from "./Alphabet.js";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                email: "",
                password: "",
                referralCode: "", //unique code for each new user
                hasCode: false,
                givenReferralCode: "", //if has a referral code from somebody else
            },
            redirect: false,
        }
    }

    handleRegister = (event) => {
        this.setState({
            user: {
                ...this.state.user, //https://github.com/reactstrap/reactstrap/issues/522
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
            console.log(char)
            let num = ALPHA[char].toString();
            referralCode += num
        })
        console.log(referralCode)
        return referralCode
    }

    registerUser = async () => {
        try {
            await base.initializedApp.auth().createUserWithEmailAndPassword(
                this.state.user.email, this.state.user.password
            )
            base.initializedApp.auth().currentUser.updateProfile({
                displayName: this.state.user.username
            })

            this.props.toggleLoginState(true)

            //generate first half of email before @
            let emailKey = this.formatEmail(this.state.user.email)
            //then, generate a new code for every new user
            let referralCode = this.createReferralCode(emailKey)

            this.setState({
                user: {
                    ...this.state.user,
                    referralCode: referralCode,
                }
            })

            //then add user 
            this.props.addUser(this.state.user)
            //and redirect to account page
            this.setState({ redirect: true })

        } catch (error) {
            this.props.toggleLoginState(false)
            this.setState({ redirect: false })
            alert(error.message)
        }
    }

    handleInputCode = () => {
        this.setState(
            {
                user: {
                    ...this.state.user,
                    hasCode: !this.state.user.hasCode
                }
            })
    }

    render() {
        let newAccountLink = '/account/' + this.state.user.username + "/" + this.state.user.referralCode;
        return (
            (this.state.redirect) ?
                <Redirect to={newAccountLink} />
                :
                <div className="registerForm">
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography style={{ fontSize: 30 }}>
                        REGISTER
                </Typography>
                    <form onSubmit={e => e.preventDefault()}>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input
                                id="username"
                                name="username"
                                autoComplete="off"
                                autoFocus
                                value={this.state.user.username || ""}
                                onChange={e => this.handleRegister(e)} />
                        </FormControl>
                        <br />
                        <FormControl required>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="off"
                                value={this.state.user.email}
                                onChange={e => this.handleRegister(e)} />
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
                                onChange={e => this.handleRegister(e)}
                            />
                        </FormControl>
                        <br />
                        <Button
                            style={{ marginTop: 15 }}
                            type="submit"
                            variant="contained"
                            color="secondary"
                            onClick={this.registerUser}
                        > Register
                    </Button>
                        <br />
                        {/* <Button
                        style={{ marginTop: 5 }}
                        variant="contained"
                        color="primary"
                        onClick={this.props.toggleLoginPage}
                    >Back to Login
                    </Button> */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.user.hasCode}
                                    onChange={this.handleInputCode}
                                    name="hasCode"
                                    color="primary"
                                />
                            }
                            label="Do you have a referral code?"
                        />
                        {(this.state.user.hasCode) ?
                            <div>
                                <FormControl>
                                    <InputLabel htmlFor="referralCode">Referral Code</InputLabel>
                                    <Input
                                        id="referralCode"
                                        name="referralCode"
                                        type="text"
                                        autoComplete="off"
                                        value={this.state.user.referralCodeGiven}
                                        onChange={e => this.handleRegister(e)}
                                    />
                                </FormControl>
                            </div>
                            :
                            <div></div>
                        }
                    </form>
                </div>
        )
    }
}