import React from 'react';

import LookupCoin from '../LookupCoin/LookupCoin';
import './LookupCoinLanding.css';

import reactstrap, { Row, Col, FormGroup, Input, Label } from 'reactstrap';

import TradingViewWidget from 'react-tradingview-widget';

const LookupCoinLanding =  props => {
  const userInput = props.userInput;
  // console.log('UI', userInput)
  return (
    <div className='userInputForGraph'>
      
        <form className='rf-search-bar js-search-bar' onSubmit={props.handleSubmit}>
          <label>
            <input className='rf-search-bar__input js-search-bar__input' autoComplete='off' type="text" name='search' value placeholder='Search coin here...' value={userInput} onChange={props.handleInput}/>
          </label>
        </form>

      
      {userInput && (<LookupCoin userInput={userInput}/>) && (<TradingViewWidget symbol={props.graphInput} style='3'/> )}
      
    </div>
    )
}


export default LookupCoinLanding;