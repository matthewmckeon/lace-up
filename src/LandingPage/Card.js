import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        minHeight: 450,
        borderRadius: 10,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 0,
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <h1 style={{ position: "relative", left: "5vw" }}>{props.rule.title}</h1>
                <p>{props.rule.descr}</p>
                {props.rule.title.includes("Sign Up") ? (
                    <video style={{ position: "relative", top: "7vh", width: "100%", height: "auto" }} controls autoplay loop><source src={require('../images/register-vid.mp4')} type="video/mp4" /></video>

                ) : props.rule.title === "Get Your Code!" ? (
                    <video style={{ width: "100%", height: "auto" }} controls autoplay loop><source src={require('../images/withCode.mp4')} type="video/mp4" /></video>
                ) : (
                            <video style={{ position: "relative", top: "7vh", width: "100%", height: "auto" }} controls autoplay loop><source src={require('../images/progressJohn.mp4')} type="video/mp4" /></video>
                        )}
            </CardContent>
        </Card >
    );
}