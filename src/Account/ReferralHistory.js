import React, {Component} from 'react';

class ReferralHistory extends Component {

    render() {
        const currentUser = this.props.users[this.props.currentCode]
        console.log(currentUser)
        return(
            <div className="container">
                <div className="card">
                    <h1>Referral History</h1>
                    {/* {this.props.users[this.props.currentCode].myReferrals.map((user, index)=>{
                        return <h1>{user}</h1>
                    })} */}
                </div>
            </div>
        )
    }

}

export default ReferralHistory;