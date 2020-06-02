import React from 'react';
import { Link, Router } from "react-router-dom";
import './SideBar.css'

const sideBar = props => (
    <nav className='side-bar'>
        <ul>
            <li><a href='/account'>Your Account</a></li>
            <li><a href="/about">About</a></li>
            <li><a href='/faq'>FAQs</a></li>
            <li><a href='/login'>Login</a></li>
            <li><a href='/register'>Register</a></li>
        </ul>
    </nav>
)

export default sideBar;