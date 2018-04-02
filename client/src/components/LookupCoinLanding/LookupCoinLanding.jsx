import React from 'react';
import axios from 'axios';
import fetch from 'isomorphic-fetch';
import LookupCoin from '../LookupCoin/LookupCoin';
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
      finalUserInput: '',
      fullname: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fullname = this.fullname.bind(this)
  }


  handleInput(event) {
    event.preventDefault();
    const val = event.target.value

    // if (val.length != 3) { 
    //   this.setState({fullname: val}) 
    //   console.log('88888888', this.state);

    // } else {
      // if (val.length == 3) {
        const upperCase = val.toUpperCase();
        const finalUserInput = upperCase + 'USD'
        this.setState({
          userInput: upperCase,
          finalUserInput: finalUserInput
        })
      // } else {
      //   this.setState({ fullname: val})
      // }

      console.log('Funky town:', this.state)
    }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log('State:', this.state)
  }

  fullname() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(res => {
        const findingSym = res.data;

        const result = findingSym.filter(coin => 
          this.state.userInput == coin.id);

        
        console.log('Hope:', result)
      }
    )
  }


//ToDO:
//call api and set state according to user input 


  render() {
    const userInput = this.state.userInput;
    const test =  userInput.length == 3 ? console.log('3') : 
    this.fullname()
    return (
      <div className='userInputForGraph'>
        <div>{userInput}</div>
      
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