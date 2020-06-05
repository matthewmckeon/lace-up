import React from "react";
import "./SideBar.css";

import { base } from '../config/Firebase';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const [userLogged, setUserLogged] = React.useState(false);
  const [userLink, setUserLink] = React.useState("");
  const [currentUser, setUser] = React.useState({});

  base.initializedApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      setUserLogged(true);
      let newUserLink = "/account/" + user.displayName + "/" + user.uid;
      setUserLink(newUserLink);
      setUser(user);
    } else {
      setUserLogged(false);
    }
  });

    return (
        <nav className='side-bar'>
            <ul>
                {(userLogged) ?
                    < div >
                        <li><Link to={userLink}>
                            {`My Account`}
                        </Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/faq'>FAQs</Link></li>
                        <li><Button
                            variant="contained"
                            color="secondary"
                        ><Link to='/log-out'>Log Out</Link></Button>
                        </li>

                    </div>
                    :

                    < div >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/faq'>FAQs</Link></li>
                    </div>

                }
            </ul >
        </nav >
    )
}

export default SideBar;
