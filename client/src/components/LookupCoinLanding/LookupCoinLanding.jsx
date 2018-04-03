import React from 'react';

import LookupCoin from '../LookupCoin/LookupCoin';
import './LookupCoinLanding.css';

import reactstrap, { Row, Col, FormGroup, Input, Label } from 'reactstrap';

import TradingViewWidget from 'react-tradingview-widget';

const LookupCoinLanding =  props => {
  const userInput = props.userInput;
  console.log('UI', userInput)
  return (
    <div className='userInputForGraph'>
      
        <form onSubmit={props.handleSubmit}>
        <label>
          <input type="text" value={userInput} onChange={props.handleInput} />
        </label>
        <label>
          <button type='submit' value='Search'>
            Search
          </button>
        </label>
      </form>

      
      {userInput && (<TradingViewWidget symbol={props.graphInput} style='3'/> )}
      
    </div>
    )
}


export default LookupCoinLanding;