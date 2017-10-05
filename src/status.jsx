import React, { Component } from 'react';

class Status extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.status === true 
            ? (
                <div className="alert alert-success fade in">
                <a href="#" className="close" data-dismiss="alert"></a>
                <strong>The total change due is </strong>
                <strong>${ this.props.statusState.amountReceived - this.props.statusState.amountDue }</strong>
                </div>
            ) 
            : (
                <div className="alert alert-danger fade in">
                <a href="#" className="close" data-dismiss="alert"></a>
                <strong>Hey!</strong> you owe use cash!
                </div>
            )
    }
}

export default Status;