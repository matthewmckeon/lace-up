import React, { Component } from 'react';
import SimpleExpansionPanel from './SimpleExpansionPanel.js'
import { REFERRAL_QS } from "./referralQs.js";
import { LACEUP_QS } from "./laceUpQs.js";

export default class Faq extends Component {
    render() {
        return (
            <div>
                <a name="top"></a>
                <h1>LaceUp FAQs</h1>
                <a href="#referralTop">Referral Program</a>
                <br />
                <a href="#laceupTop">LaceUp</a>

                <a name="referralTop"></a>
                <h2>Questions About Referral Program</h2>
                {REFERRAL_QS.map((qa, index) => {
                    return (
                        <SimpleExpansionPanel key={index} qa={qa} qn={index} />
                    )
                }
                )}

                <a name="laceupTop"></a>
                <h2>Questions About Lace Up</h2>
                {LACEUP_QS.map((qa, index) => {
                    return (
                        <SimpleExpansionPanel key={index} qa={qa} qn={index} />
                    )
                }
                )}
                <a href="#top">Back to top</a>

            </div>
        )

    }
}



