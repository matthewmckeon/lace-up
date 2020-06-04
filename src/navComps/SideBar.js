import React from 'react';
import { Link, Router } from "react-router-dom";
import './SideBar.css'

import { base } from '../config/Firebase';

const SideBar = props => {
    const [userLogged, setUserLogged] = React.useState(false)
    const [userLink, setUserLink] = React.useState("")
    const [currentUser, setUser] = React.useState({})

    base.initializedApp.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUserLogged(true)
            let newUserLink = '/account/' + user.displayName + "/" + user.uid
            setUserLink(newUserLink);
            setUser(user);
        }
        else {
            setUserLogged(false)
        }
    })

    return (
        <nav className='side-bar'>
            <ul>
                {(userLogged) ?

                    < div >
                        <li><a href={userLink}>
                            {`${currentUser.displayName}'s Account`}
                        </a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href='/faq'>FAQs</a></li>
                        <li><a href='/log-out'>Log Out</a></li>
                    </div>
                    :

                    < div >
                        <li><a href="/about">About</a></li>
                        <li><a href='/faq'>FAQs</a></li>
                        <li><a href='/login'>Login</a></li>
                        <li><a href='/register'>Register</a></li>
                    </div>

                }
            </ul >
        </nav >
    )
}

export default SideBar;