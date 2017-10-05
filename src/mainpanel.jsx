import React, { Component } from 'react';

class Mainpanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div className="container-fluid">
            <div className="row">
                <div className="well">
                    <strong>Twenties</strong>
                    <p className='lead' style={{ color: 'green' }}>{this.props.mainPanelState.twenties}</p>
                </div>
                <div className="well col-md-3">
                    <strong>Tens</strong>
                    <p className='lead' style={{ color: 'green' }}>{this.props.mainPanelState.tens}</p>
                </div>
                <div className="well col-md-3">
                    <strong>Fives</strong>
                    <p className='lead' style={{ color: 'green' }}>{this.props.mainPanelState.fives}</p>
                </div>
                <div className="well col-md-3">
                    <strong>Ones</strong>
                    <p className='lead' style={{ color: 'green' }}>{this.props.mainPanelState.ones}</p>
                </div>
            </div>
            <div className="row">
                <div className="well col-md-3">
                    <strong>Quarters</strong>
                    <p className='lead' style={{ color: 'green' }}>{this.props.mainPanelState.quarters}</p>
                </div>
                <div className="well col-md-3">
                    <strong>Dimes</strong>
                    <p className='lead' style={{ color: 'green' }}>{this.props.mainPanelState.dimes}</p>
                </div>
                <div className="well col-md-3">
                    <strong>Nickels</strong>
                    <p className='lead' style={{ color: 'green' }}>{this.props.mainPanelState.nickels}</p>
                </div>
                <div className="well col-md-3">
                    <strong>Pennies</strong>
                    <p className='lead' style={{ color: 'green' }}>{this.props.mainPanelState.pennies}</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Mainpanel;