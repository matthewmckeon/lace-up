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


function ReferralLeaderboard(props) {
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

    let leaderboardList = []
    
    for (let [key, value] of Object.entries(props.users)) {
        leaderboardList.push(value);
    }

    leaderboardList.sort((a,b) => {return b.score-a.score})

    return (
            <div>
                <div className="card">
                    <h1>Community Leaderboard (Top 10)</h1>
                    {leaderboardList.map((user, index) => {
                        if(index <= 9) {
                            return <Card key={index} className={classes3.root}>
                            {(index+1)+". "+user.firstName + " "+user.lastName+" - "+user.score+" referrals"}
                             </Card>
                        }
                    })}
                </div>
            </div>
    )
}

export default ReferralLeaderboard;