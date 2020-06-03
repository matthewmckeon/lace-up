import React from 'react';
import { Link, Router } from "react-router-dom";
import './SideBar.css'

import { base } from '../config/Firebase';
import firebase from 'firebase';

const sideBar = props => (
    <nav className='side-bar'>
        <ul>
            {/* {console.log(props)} */}
            {(props.isLoggedIn) ?
                <div>
                    <li><a href={'/account/' + props.users[props.currentUserCode].firstName +
                        "/" + props.currentUserCode}>
                        {`${props.users[props.currentUserCode].firstName}'s Account`}
                    </a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href='/faq'>FAQs</a></li>
                    <li><a href='/log-out'>Log Out</a></li>

                </div>
                :
                <div>
                    <li><a href="/about">About</a></li>
                    <li><a href='/faq'>FAQs</a></li>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/register'>Register</a></li>
                </div>

            }


        </ul >
    </nav >
)

export default sideBar;