import React from "react";
import './LandingPage.css';
import Card from './Card';
import { Grid } from '@material-ui/core';


export default function HowItWorks() {
        return (
            <div>
                <Grid container spacing= {4} >
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                </Grid>
            </div>
        );
}