import React from 'react';
import axios from 'axios';
import fetch from 'isomorphic-fetch';
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
      coinAbrv: '',
      fullname: '' //bitcoin
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fullname = this.fullname.bind(this);
  }

  // formatNum(num) {
  //   return this.numberWithCommas(parseFloat(num).toFixed(2)) 
  // }

  handleInput(event) {
    event.preventDefault();
    const newState = {...this.state};
    newState.userInput = event.target.value
    // newState.graphInput = newState.userInput.toUpperCase() + 'USD'

        // const upperCase = val.toUpperCase();
        // const graphInput = upperCase + 'USD'
        // this.setState({
        //   userInput: upperCase,
        //   graphInput: graphInput
        // })
        this.setState(newState)
      // }

      console.log('Inside of handleInput:', this.state)
    }

      
  handleSubmit(event) {
    event.preventDefault();
    const state = {...this.state}
    // this.fullname();
    console.log('Inside of handleSubmit:', this.state)
    let targetField;
    if (state.userInput.length < 4) {
      //get Full name 
      targetField = 'name'
    } else {
      //get Abrv
      // state.coinAbrv = this.findCoin(state.userInput)
      targetField = 'abrv'
    }
    
    this.findCoin(targetField, state.userInput)
    .then(data => {
      state.coinAbrv = data.abrv
      state.graphInput = data.abrv + 'USD'
      state.fullname = data.fullname
      this.getCoinDetails(data.fullname)

     .then(res => {
       console.log('then then', res)
       state.coin = res
       this.setState(state)
     })

    })
  }

  findCoin(targetField, targetVal) {
    //targetVal = userInput 
   return axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then(res => {
      // console.log('this is res', res)
      switch(targetField) {
        case 'name':
          return res.data.filter(coin => coin.symbol === targetVal.toUpperCase())
          break;
        case 'abrv': 
          return res.data.filter(coin => coin.id === targetVal.toLowerCase())
      }
    })
    .then(coin => {
      console.log('THis is Coin:', coin) //
      return {
        abrv: coin[0].symbol,
        fullname: coin[0].id
      }
    })
  }


  getFullname() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(res => {
        const findingSym = res.data;

        //this doesn't work
        const result = findingSym.filter(coin => 
          this.state.userInput == coin.id);

        
        console.log('Hoping for a string with coins fullname  to be here:', result)
      }
    )
  }

  getCoinDetails(coinName) {
    console.log('Polling for new values!')
    const { fullname } = this.state
    console.log('fetching coin detail', coinName);
    return fetch(`https://api.coinmarketcap.com/v1/ticker/${coinName}/`)
      .then (resp => resp.json())
      .then(json => {
        var fetchedResults = json;
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
        
          return coinData;

        })
  }



  render(){
    console.log('THis sate:', this.state)
    return (
          <div className="content">
            <Row>
             <Col md={12}> 

              <LookupCoinLanding 
                userInput={this.state.userInput} handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                graphInput={this.state.graphInput}
                />

              {this.state.coin && ( <LookupCoin 
                coinData={this.state.coin}
              />)}

             
              </Col>
            </Row>
          </div>
    );
  }
}

export default PortfolioContainer;