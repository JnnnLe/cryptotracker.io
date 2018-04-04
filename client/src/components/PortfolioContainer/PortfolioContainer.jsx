import React from 'react';
import axios from 'axios';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';

import './PortfolioContainer.css';

import { PanelHeader, FormInputs, PortfolioItemResults, PortfolioHeader, LookupCoin,LookupCoinLanding } from 'components';


class PortfolioContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      userInput : '', //BTC
      graphInput: '', //BTCUSD
      coinAbrv: '', //btc
      fullname: '', //bitcoin
      displayGraph: false,
      coin: {}
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    event.preventDefault();
    const { value } = event.target
    const newState = {...this.state};
    newState.userInput = value
    newState.displayGraph = value.length > 15 ? true : false
    newState.coin = newState.coin.name ? {} : {}
    this.setState(newState);

  }
      
  handleSubmit(event) {
    event.preventDefault();
    console.log("got triggered")
    const state = {...this.state}
    let targetField;
    if (state.userInput.length < 5) {
      //get Full name 
      targetField = 'name';

    } else {
      //get Abrv
      targetField = 'abrv'
    }
    
    this.findCoin(targetField, state.userInput)
      .then(data => {
        state.coinAbrv = data.abrv
        state.graphInput = data.abrv + 'USD'
        state.fullname = data.fullname
        this.getCoinDetails(data.fullname)
        .then(res => {
          state.coin = res
          state.displayGraph = true
          this.setState(state)
        })
      })
  }

  findCoin(targetField, targetVal) {
    //targetVal = userInput 
   return axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then(res => {
      switch(targetField) {
        case 'name':
          return res.data.filter(coin => coin.symbol === targetVal.toUpperCase())
          break;
        case 'abrv': 
          return res.data.filter(coin => coin.id === targetVal.toLowerCase())
          break;
        // case undefined:
        //   return console.log('Please enter a valid coin name or ticker')
      }
    })
    .then(coin => {
      return {
        abrv: coin[0].symbol,
        fullname: coin[0].id
      }
    })
  }

  getCoinDetails(coinName) {
    const { fullname } = this.state
    return axios.get(`https://api.coinmarketcap.com/v1/ticker/${coinName}/`)
    .then(res => { 
      var fetchedResults = res.data;
        let coinData = {};
          coinData.name = fetchedResults[0].name
          coinData.symbol = fetchedResults[0].symbol
          coinData.price = fetchedResults[0].price_usd
          coinData.marketCap = fetchedResults[0].market_cap_usd
          coinData.hourChange = fetchedResults[0].percent_change_1h
          coinData.dayChange = fetchedResults[0].percent_change_24h
          coinData.weekChange = fetchedResults[0].percent_change_7d
          coinData.rank = fetchedResults[0].rank
          coinData.priceBTC = fetchedResults[0].price_btc
          coinData.id = fetchedResults[0].id

          return coinData;
        })
  }

  render() {
    return (
      <div className="content-container">

      <br/>
      <br/>
      
        <Row>
          <Col md={12}> 
            <LookupCoinLanding 
              userInput={this.state.userInput} 
              handleInput={this.handleInput}
              handleSubmit={this.handleSubmit}
              graphInput={this.state.graphInput}
              displayGraph={this.state.displayGraph}
              /> 
          </Col>
        </Row>

        <br/>
  
        <Row>
          <Col md={12}>
            {this.state.coin.name && this.state.userInput && ( <LookupCoin 
              coinData={this.state.coin}
            /> )}
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default PortfolioContainer;