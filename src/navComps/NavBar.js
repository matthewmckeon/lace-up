import React, { Component } from 'react';
import Header from './Header.js';
import SideBar from './SideBar.js';
import Backdrop from './Backdrop.js'

import { base } from '../config/Firebase';
import firebase from 'firebase';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarOpen: false
        };

    }

    sideBarToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideBarOpen: !prevState.sideBarOpen };
        });
    }

    backdropClickHandler = () => {
        this.setState({ sideBarOpen: false })
    }

    render() {
        let sideBar;
        let backdrop;
        // console.log(base.initializedApp.auth().currentUser)
        // console.log(this.props)

        if (this.state.sideBarOpen) {
            sideBar = <SideBar
                isLoggedIn={this.props.isLoggedIn}
                users={this.props.users}
                currentUserCode={this.props.currentUserCode}
            />
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div style={{ height: '100%' }}>
                <Header sideBarClickHandler={this.sideBarToggleClickHandler} />
                {sideBar}
                {backdrop}
                <main style={{ marginTop: '100px' }}>
                </main>
            </div>
        )
    }
}
