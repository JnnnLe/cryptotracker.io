import React from 'react';

import LookupCoin from '../LookupCoin/LookupCoin';
import './LookupCoinLanding.css';

import reactstrap, { Row, Col, form, FormGroup, Input, Label } from 'reactstrap';

import TradingViewWidget from 'react-tradingview-widget';



const LookupCoinLanding =  props => {
  const {userInput, displayGraph} = props;

  return (
    <div className='userInputForGraph form-group'>
        <form id='coinInput' className='rf-search-bar js-search-bar' onSubmit={props.handleSubmit}>
            <input id='coinInput' className='rf-search-bar__input js-search-bar__input' autoComplete='off' type="text" name='search' value placeholder='Search coin here...' value={userInput} onChange={props.handleInput} /> 
        </form>
        <br/>
        {displayGraph && (<LookupCoin userInput={userInput} />) && (<TradingViewWidget symbol={props.graphInput} style='3' height='375' width='1000' /> )}

    </div>
    )
}

export default LookupCoinLanding;