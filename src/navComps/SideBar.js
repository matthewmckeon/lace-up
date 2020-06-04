import React from 'react';
import './SideBar.css'

import { base } from '../config/Firebase';
import { Button } from '@material-ui/core';

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href='/faq'>FAQs</a></li>
                        <li><Button
                            variant="contained"
                            color="secondary"
                        ><a href='/log-out'>Log Out</a></Button>
                        </li>

                    </div>
                    :

                    < div >
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href='/faq'>FAQs</a></li>
                    </div>

                }
            </ul >
        </nav >
    )
}

export default SideBar;