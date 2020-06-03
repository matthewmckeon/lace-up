import React, { Component } from "react";
import { base } from '../config/Firebase';
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import Login from "./Login";

const LogInRoute = ({ component: ComponentToRender, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) =>
                console.log(props)
            }
        />
    )
}

export default LogInRoute;