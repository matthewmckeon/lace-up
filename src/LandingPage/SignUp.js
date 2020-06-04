import React, { Component } from "react";
import { base } from "../config/Firebase";
import {
    Typography,
    Button,
    FormControl,
    Input,
    InputLabel,
    FormControlLabel,
    Checkbox,
} from "@material-ui/core";

import { BrowserRouter as Redirect } from "react-router-dom";
import "./Login.css";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                referralCode: "", //unique code for each new user
                hasCode: false,
                givenReferralCode: "", //if has a referral code from somebody else
            },
            redirect: false,
        };
    }

    handleRegister = (event) => {
        this.setState({
            user: {
                ...this.state.user, //https://github.com/reactstrap/reactstrap/issues/522
                [event.target.name]: event.target.value,
            },
        });
    };

    registerUser = async (e) => {
        e.preventDefault();

        if (this.props.users[this.state.user.givenReferralCode]) {
            try {
                await base.initializedApp.auth().createUserWithEmailAndPassword(
                    this.state.user.email, this.state.user.password
                )

                base.initializedApp.auth().currentUser.updateProfile({
                    displayName: this.state.user.firstName + " " + this.state.user.lastName,
                })

                this.setState({
                    user: {
                        ...this.state.user,
                        referralCode: base.initializedApp.auth().currentUser.uid //uid is a unique id created by firebase for each user
                    }
                })

                this.props.toggleLoginState(true)

                //then add user 
                this.props.addUser(this.state.user)
                //and redirect to account page
                this.setState({ redirect: true })

                let userLink = '/account/' + this.state.user.firstName + "/" + this.state.user.referralCode;
                this.props.history.push(userLink);

            } catch (error) {
                this.props.toggleLoginState(false)
                this.setState({ redirect: false })
                alert(error.message)

            }
        } else {
            alert("Please use valid referral code.")
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
        let newAccountLink = '/account/' + this.state.user.firstName + "/" + this.state.user.referralCode;
        return (
            <div className="formTot">
                {(this.state.redirect) ?
                    <Redirect to={newAccountLink} />
                    :
                    <div className="formBody">

                        <Typography style={{ fontSize: 30 }}>
                            REGISTER
                        </Typography>
                        <form onSubmit={e => e.preventDefault()}>
                            <FormControl required>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    autoComplete="off"
                                    autoFocus
                                    value={this.state.user.firstName || ""}
                                    onChange={e => this.handleRegister(e)} />
                            </FormControl>
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    autoComplete="off"
                                    value={this.state.user.lastName || ""}
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
                                onClick={e => this.registerUser(e)}
                            > Register
                        </Button>
                            <br />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.user.hasCode}
                                        onChange={() => this.handleInputCode()}
                                        name="hasCode"
                                        color="primary"
                                    />
                                }
                                label="Do you have a referral code?"
                            />
                            {(this.state.user.hasCode) ?
                                <div>
                                    <FormControl>
                                        <InputLabel htmlFor="referralCodeGiven">Referral Code</InputLabel>
                                        <Input
                                            id="givenReferralCode"
                                            name="givenReferralCode"
                                            type="text"
                                            autoComplete="off"
                                            value={this.state.user.givenReferralCode}
                                            onChange={e => this.handleRegister(e)}
                                            style={{ marginBottom: 5 }}
                                        />
                                    </FormControl>
                                    <br />
                                </div>
                                :
                                <div></div>
                            }
                        </form>
                    </div>
                }
            </div>
        )

    }
}
