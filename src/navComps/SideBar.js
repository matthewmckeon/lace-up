import React from 'react';

import './SideBar.css'

const sideBar = props => (
    <nav className='side-bar'>
        <ul>
            <li><a href='/'>Your Account</a></li>
            <li><a href='/'>About Us</a></li>
            <li><a href='/'>FAQs</a></li>
        </ul>
    </nav>
)

export default sideBar;