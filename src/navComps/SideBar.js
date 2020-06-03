import React from 'react';
import { Link, Router } from "react-router-dom";
import './SideBar.css'

const sideBar = props => (
    <nav className='side-bar'>
        <ul>
            {/* {console.log(props)} */}
            {(props.isLoggedIn) ?
                <li>
                    <a href={'/account/' + props.users[props.currentUserCode].username +
                        "/" + props.currentUserCode}>
                        {`${props.users[props.currentUserCode].username}'s Account`}
                    </a>
                </li>
                :
                <li><a href='/account'>Your Account</a></li>
            }
            <li><a href="/about">About</a></li>
            <li><a href='/faq'>FAQs</a></li>

            {(props.isLoggedIn) ?
                <li><a href='/log-out'>Log Out</a></li>
                :
                <div>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/register'>Register</a></li>
                </div >
            }

        </ul >
    </nav >
)

export default sideBar;