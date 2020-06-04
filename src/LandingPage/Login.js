import React, { Component } from "react";
import { base } from '../config/Firebase';

import "./Login.css";

import { Typography, Button, FormControl, Input, InputLabel } from '@material-ui/core'

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

    loginUser = async (e) => {
        e.preventDefault()
        try {
            await base.initializedApp.auth().signInWithEmailAndPassword(
                this.state.user.email, this.state.user.password
            )
            this.props.toggleLoginState(true)
            this.setState({ redirect: true })

            //getId/code
            let currentUserCode = base.initializedApp.auth().currentUser.uid
            this.setState({
                user: {
                    ...this.state.user,
                    referralCode: currentUserCode,
                    firstName: base.initializedApp.auth().currentUser.displayName
                }
            })

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
            <div className="formTot">
                {(this.state.redirect) ?
                    <Redirect to={userLink} />
                    :
                    <div className="formBody">
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
                            <Button
                                style={{ marginTop: 15, marginBottom: 5 }}
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={(e) => this.loginUser(e)}
                            > Sign In
                    </Button>
                        </form>
                    </div>
                }
            </div>
        )
    }
}