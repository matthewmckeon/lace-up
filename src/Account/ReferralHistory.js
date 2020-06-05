import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import './ReferralHistory.css';

const useStyles = makeStyles({
    root: {
        backgroundColor: "rgb(248, 248, 248)",
        margin: "20px",
        padding: "10px",
    }
})


function ReferralHistory(props) {
    let currentReferralList;
    const classes3 = useStyles();

    if (props.users[props.currentCode]) {
        if (props.users[props.currentCode].myReferrals) {
            currentReferralList = props.users[props.currentCode].myReferrals
        } else {
            currentReferralList = ["no referrals yet"]
        }
    } else {
        currentReferralList = ["no referrals yet"]
    }

    return (
        <div>
            <div className="card">
                <h1>My Referral History</h1>
                {currentReferralList.map((userId, index) => {
                    return userId === "no referrals yet" ?
                        <p>{"No referrals yet."}</p> : <Card key={index} className={classes3.root}>
                            {props.users[userId].dateSignedUp + " - " + props.users[userId].firstName + " " + props.users[userId].lastName}
                        </Card>
                })}
            </div>
        </div>
    )
}

export default ReferralHistory;