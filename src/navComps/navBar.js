import React, { Component } from 'react';
import Header from './Header.js';
import SideBar from './SideBar.js';
import Backdrop from './Backdrop.js'

export default class NavBar extends Component {
    state = {
        sideBarOpen: false
    };

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

        if (this.state.sideBarOpen) {
            sideBar = <SideBar />
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