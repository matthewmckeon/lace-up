import React from 'react';
import './Header.css';
import SideBarToggleButton from './SideBarToggleButton.js';
import logo from './lace-up-logo-main.png';


const header = props => (
    <header className='header'>
        <nav className='header_nav'>
            <div className='header_toggle_button'>
                <SideBarToggleButton click={props.sideBarClickHandler} />
            </div>
            <div className='header_logo'><a href='/'><img src={logo} /></a></div>
            {/* <div className='header_nav_items'>
                <ul>
                    <li><a href='/'>Your Account</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>FAQs</a></li>
                </ul>
            </div> */}
        </nav>
    </header>
);

export default header;
