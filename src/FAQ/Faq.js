import React, { Component } from "react";
import SimpleExpansionPanel from "./SimpleExpansionPanel.js";
import { REFERRAL_QS } from "./referralQs.js";
import { LACEUP_QS } from "./laceUpQs.js";

import "./Faq.css";

export default class Faq extends Component {
  render() {
    return (
      <div className="faq">
        <a name="top"></a>
        <h1 className="faqHeader1">LaceUp FAQs</h1>
        <a className="link" href="#referralTop">
          Referral Program
        </a>
        <br />
        <a className="link" href="#laceupTop">
          LaceUp
        </a>
        <a name="referralTop"></a>
        <h1 className="faqHeader">Questions About Referral Program</h1>
        {REFERRAL_QS.map((qa, index) => {
          return <SimpleExpansionPanel key={index} qa={qa} qn={index} />;
        })}

        <a name="laceupTop"></a>
        <h1 className="faqHeader">Questions About Lace Up</h1>
        {LACEUP_QS.map((qa, index) => {
          return <SimpleExpansionPanel key={index} qa={qa} qn={index} />;
        })}
        <a className="link" href="#top">
          Back to top
        </a>
      </div>
    );
  }
}
