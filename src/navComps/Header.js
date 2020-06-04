import React from "react";
import "./Header.css";
import SideBarToggleButton from "./SideBarToggleButton.js";

const header = (props) => (
  <header className="header">
    <nav className="header_nav">
      <div className="header_toggle_button">
        <SideBarToggleButton click={props.sideBarClickHandler} />
      </div>
      <div className="header_logo">
        {/* <a href="/">LaceUp</a> */}
        <img
          className="logo"
          src="https://i.ibb.co/2qNVbwM/lace-up-logo-main.png"
        />
      </div>
    </nav>
  </header>
);

export default header;
