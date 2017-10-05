import React, { Component } from 'react';
import Sidebar from './sidebar';
import Status from './status';
import Mainpanel from './mainpanel';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.calculate = this.calculate.bind(this);
    this.getReceived = this.getReceived.bind(this);
    this.getDue = this.getDue.bind(this);
    
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      status: null,
    }
  }

  getReceived(e) {
    this.setState({ amountReceived: parseFloat(e.target.value)});
  }

  getDue(e) {
    this.setState({ amountDue: parseFloat(e.target.value)});
  }

  calculate() {
//set the status based on how much change is due.
    var change = this.state.amountReceived - this.state.amountDue;  
    if(change < 0) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true })
    }

// temp variables to set state with after calculating.
    let twen = 0;
    let ten = 0;
    let fiv = 0;
    let won = 0;
    let quar = 0;
    let dim = 0;
    let nic = 0;
    let pen = 0;
    
// calculate how much of each currency value you need to give change
    while(change >= 20) {
      twen += 1;
      change = change-20;
    };

    while(change >= 10) {
      ten += 1;
      change = change-10;
    };

    while(change >= 5) {
      fiv += 1;
      change = change-5;
    };

    while(change >= 1) {
      won += 1;
      change = change-1;
    };

    while(change >= .25) {
      quar += 1;
      change = change - .25;
    };

    while(change >= .10) {
      dim += 1;
      change = change - .10;
    };

    while(change >= .05) {
      nic += 1;
      change = change - .05;
    };

    while(change >= .008) {
      pen += 1;
      change = change -.01;
    };

    this.setState({
      twenties: twen,
      tens: ten,
      fives: fiv,
      ones: won,
      quarters: quar,
      dimes: dim,
      nickels: nic,
      pennies: pen,
    })
  }

  render() {
    return (
      <div>
        <div className="row" id="header">
          <div className="col-lg-12">
            <h2 style={{ color:'#FF9800' }}>Change Calculator 
            <small style={{ color:'azure' }}> Calculatin yo Change</small></h2>
        </div>
        </div>
        <div className="row">
          <Sidebar 
          amountDue={this.state.amountDue}
          amountReceived={this.state.amountReceived}
          calculate={this.calculate}
          getReceived={this.getReceived}
          getDue={this.getDue}
          />
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <Status 
            statusState={this.state}
            status={this.state.status}
            />
            <Mainpanel 
            mainPanelState={this.state}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
