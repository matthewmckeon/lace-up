import React, { Component } from "react";
import SimpleExpansionPanel from "./SimpleExpansionPanel.js";
import { REFERRAL_QS } from "./referralQs.js";
import { LACEUP_QS } from "./laceUpQs.js";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import "./Faq.css";

export default class Faq extends Component {
  render() {
    return (
      <div className="faq">
        <div className = "faq-content">
        <a id="top"></a>
        <h1 className="faqHeader1">LaceUp FAQs</h1>
        <AnchorLink className="link" href="#referral-header" offset="130">Our Referral Program</AnchorLink>
        <br />
        <AnchorLink className="link" href="#general-header" offset="130">Our Company</AnchorLink>
        <a name="referralTop"></a>
        <h1 className="faqHeader" id= "referral-header">Our Referral Program</h1>
        {REFERRAL_QS.map((qa, index) => {
          return <SimpleExpansionPanel key={index} qa={qa} qn={index} />;
        })}

        <a name="laceupTop"></a>
        <h1 className="faqHeader" id= "general-header">Our Company</h1>
        {LACEUP_QS.map((qa, index) => {
          return <SimpleExpansionPanel key={index} qa={qa} qn={index} />;
        })}
        <AnchorLink className="link" href="#top" offset="150">Back to Top</AnchorLink>
        </div>
      </div>
    );
  }
}
