import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CopyIcon from "@material-ui/icons/FileCopy";
import { FacebookIcon, TwitterIcon, FacebookShareButton, TwitterShareButton } from "react-share";
import "./FriendButton.css";

export default function FriendButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Refer a friend
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="popup">
          <p>
            Want more points? Share your referral code below with friends!
            <br /> When they sign up, they can input your unique referral code
            and <br /> you'll get a point towards awesome rewards!
          </p>
          <div className="referral">
            {props.code}
            <IconButton
              className="icon"
              onClick={() => {
                navigator.clipboard.writeText(props.code);
                alert("Copied to clipboard");
              }}
            >
              <CopyIcon />
            </IconButton>
            
          </div>
          <div className="referral">
            <FacebookShareButton 
              quote={"Want cool prizes like a free pair of shoes? Lace-Up is a great company that has an amazing social impact, environmental values, and a cool community of users!  Sign up today using my referral code: "+props.code}
              url="https://mattluthompson.github.io/lace-up/#/lace-up/" 
              children={<div style = {{display: "flex", textAlign:"center"}}><FacebookIcon size={30} style={{position: "relative", top:"10px"}}/><p style={{marginLeft:"10px"}}>Share on Facebook!</p></div>}/>
          </div>
          <div className="referral">
            <TwitterShareButton 
              title={"Want cool prizes like a free pair of shoes? Lace-Up is a great company that has an amazing social impact, environmental values, and a cool community of users!  Sign up today using my referral code: "+props.code}
              via="laceupshoes_io"
              url="https://mattluthompson.github.io/lace-up/#/lace-up/" 
              children={<div style = {{display: "flex", textAlign:"center"}}><TwitterIcon size={30} style={{position: "relative", top:"10px"}}/><p style={{marginLeft:"10px"}}>Share on Twitter!</p></div>}/>
            </div>
        </div>
      </Popover>
    </div>
  );
}
