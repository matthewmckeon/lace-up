import React, { Component } from "react";
import { base } from '../config/Firebase';

import { Typography, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }


    render() {

        return (
            <div>This is Login</div>
        )
    }
}