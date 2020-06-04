import React, { Component } from 'react'
import StickyFooter from 'react-sticky-footer';

export default class MainFooter extends Component {
    render() {
        return (
            <div>
                <StickyFooter
                    // bottomThreshold={50}
                    normalStyles={{
                        backgroundColor: "#124559",
                        padding: "1.5rem",
                        color: 'white',
                        textAlign: 'center'
                    }}
                    stickyStyles={{
                        backgroundColor: "#124559",
                        padding: "1.5rem",
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    <div className='LaceUp'>
                        <p>&copy; 2020 LaceUp, Corp.</p>
                    </div>
                </StickyFooter>
            </div>
        )
    }
}
