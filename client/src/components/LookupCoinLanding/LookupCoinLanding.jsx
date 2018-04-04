import React from 'react';

import LookupCoin from '../LookupCoin/LookupCoin';
import './LookupCoinLanding.css';

import reactstrap, { Row, Col, form, FormGroup, Input, Label } from 'reactstrap';

import TradingViewWidget from 'react-tradingview-widget';



const LookupCoinLanding =  props => {
  const userInput = props.userInput;

  //ToDo: reset form
  return (
    <div className='userInputForGraph'>
      
        <form id='coinInput' className='rf-search-bar js-search-bar' onSubmit={props.handleSubmit}>
          <label>
            <input id='coinInput' className='rf-search-bar__input js-search-bar__input' autoComplete='off' type="text" name='search' value placeholder='Search coin here...' value={userInput} onChange={props.handleInput} /> 
          </label>
        </form>

        <br/>

        {userInput && (<LookupCoin userInput={userInput} />) && (<TradingViewWidget symbol={props.graphInput} style='3' height='400' width='1080' /> )}


    </div>
    )
}

//line 27, first part to just have graph:
  // {userInput &&  ... }

export default LookupCoinLanding;