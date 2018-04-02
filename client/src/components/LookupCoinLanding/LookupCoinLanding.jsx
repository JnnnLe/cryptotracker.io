import React from 'react';
import fetch from 'isomorphic-fetch';
import './LookupCoinLanding.css';

import reactstrap, { Row, Col, FormGroup, Input, Label } from 'reactstrap';

import TradingViewWidget from 'react-tradingview-widget';

const App = () => (
  <TradingViewWidget
    width = "1000"
    height = "300"
    symbol = "BTCUSD"
    theme = "Light"
    style = "3"    
  />
);

class LookupCoinLanding extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput : '',
      finalUserInput: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(event) {
    event.preventDefault();
    const val = event.target.value
    const upperCase = val.toUpperCase();
    const finalUserInput = upperCase + 'USD'
    this.setState({
      userInput: upperCase,
      finalUserInput: finalUserInput
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log('State:', this.state)
  }

  render() {
    return (
      <div className='userInputForGraph'>

      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.userInput} onChange={this.handleInput} />
        </label>
        <label>
          <button type='submit' value='Search'>
            Search
          </button>
        </label>
      </form>

      <TradingViewWidget symbol={this.state.finalUserInput} style='3'/>

      
    </div>
    )
  }
}


export default LookupCoinLanding;