import React, { Component } from 'react'
import StickyFooter from 'react-sticky-footer';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#124559",
    padding: "2rem",
    height: '120px',
    color: 'white'
    }}
    stickyStyles={{
    backgroundColor: "#124559",
    padding: "2rem",
    height: '120px',
    color: 'white'
    }}
>
    <div className='buttons'>
        <button className='login'>Log In</button>
        <div class="divider"/>
        <button className='signup'>Sign Up!</button>
    </div>
</StickyFooter>
            </div>
        )
    }
}
