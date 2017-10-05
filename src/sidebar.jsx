import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
      super(props);

      
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="well">Enter Information</div>
                        
                        <input onChange={this.props.getDue} 
                        className="form-control input-lg" type="text" name="amountDue" placeholder="Amount Due" />

                        <input onChange={this.props.getReceived}
                        className="form-control input-lg" name="amountReceived" type="text" placeholder="Amount Received" />

                        <button onClick={this.props.calculate} type="submit" 
                        name="calculate" className="btn btn-primary btn-block">Calculate</button>
                    </div>
                </div>
            </div>
        );
      }
    }
    
export default Sidebar;