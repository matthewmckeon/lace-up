import React, { Component } from "react";
import { base } from '../config/Firebase';
import {
    Typography, Avatar, Button, FormControl, Input, InputLabel,
    FormControlLabel, Checkbox
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            hasCode: false,
            referralCode: "",
        }
    }

    handleRegister = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    registerUser = async () => {
        try {
            await base.initializedApp.auth.createUserWithEmailAndPassword(
                this.state.email, this.state.password
            )
            this.props.toggleLoginState(true)
        } catch (error) {
            this.props.toggleLoginState(false)
            alert(error.message)
        }
    }

    handleInputCode = () => {
        this.setState({
            hasCode: !this.state.hasCode
        })
    }

    render() {
        return (
            <div className="registerForm">
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography style={{ fontSize: 30 }}>
                    REGISTER
                </Typography>
                <form onSubmit={e => e.preventDefault()}>
                    <FormControl required>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            autoComplete="off"
                            autoFocus
                            value={this.state.email}
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
                            value={this.state.password}
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
                                checked={this.state.hasCode}
                                onChange={this.handleInputCode}
                                name="hasCode"
                                color="primary"
                            />
                        }
                        label="Do you have a referral code?"
                    />
                    {(this.state.hasCode) ?
                        <div>
                            <FormControl>
                                <InputLabel htmlFor="referralCode">Referral Code</InputLabel>
                                <Input
                                    id="referralCode"
                                    name="referralCode"
                                    type="text"
                                    autoComplete="off"
                                    value={this.state.referralCode}
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