import React, { Component } from 'react';
import SimpleExpansionPanel from './SimpleExpansionPanel.js';

export default class Faq extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 className='lufaq'>LaceUp FAQs</h1>
                <SimpleExpansionPanel />
            </div>
        )
    }
}



