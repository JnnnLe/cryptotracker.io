import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import './Gainers.css';

class Gainers extends Component {

  constructor() {
    super();
    this.state = {
      allCoins: [],
      gainers: [],
    } 
    this.quick_SortTop = this.quick_SortTop.bind(this);
  }

  grabTopGainersCoins() {
    let top5jsxFormat = [];
    Object.keys(this.state.gainers).map((coin, i) => {
      let coinName = this.state.gainers[coin].name;
      const symbol = this.state.gainers[coin].symbol;
      const price = this.state.gainers[coin].price_usd;
      const marketCap = this.state.gainers[coin].market_cap_usd;
      const PC7Dy = this.state.gainers[coin].percent_change_7d;
      let nameLower = (this.state.gainers[coin].name).toLowerCase();

      if (coinName == 'Bitcoin Cash') {
        nameLower = "bitcoin-cash"
    }
    if (coinName == 'Binance Coin') {
        nameLower = "binance-coin"
    }
    if (coinName == 'Ethereum Classic') {
        nameLower = "ethereum-classic"
    }
    if (coinName == 'Bitcoin Gold') {
        nameLower = "bitcoin-gold"
    }
    if (coinName == 'Bitcoin Diamond') {
        nameLower = "bitcoin-diamond"
    }
    if (coinName == 'KuCoin Shares') {
        nameLower = "kucoin-shares"
    }
    if (coinName == 'Basic Attention Token') {
        nameLower = "basic-attention-token"
    }
    if (coinName == 'Kyber Network') {
        nameLower = "kyber-network"
    }
    if (coinName == 'Infinity Economics') {
        nameLower = "infinity-economics"
    }
    if (coinName == 'Byteball Bytes') {
        nameLower = "byteball-bytes"
    }
    if (coinName == 'Power Ledger') {
        nameLower = "power-ledger"
    }
    if (coinName == 'Nucleus Vision') {
        nameLower = "nucleus-vision"
    }
    if (coinName == 'Request Network') {
        nameLower = "request-network"
    }
    if (coinName == 'Genaro Network') {
        nameLower = "genaro-network"
    }
    if (coinName == 'Matrix AI Network') {
        nameLower = "matrix-ai-network"
    }
    if (coinName == 'Genesis Vision') {
        nameLower = "genesis-vision"
    }
    if (coinName == 'Enjin Coin') {
        nameLower = "enjin-coin"
    }

      top5jsxFormat.push(this.generateCoin(i, coinName, symbol, price, marketCap, PC7Dy, nameLower));
      })

    return top5jsxFormat; 
  }


  generateCoin(i, coinName, symbol, price, marketCap, PC7Dy, nameLower) {
    console.log(PC7Dy)
    return (
      <div className="cryptoCard">
      <Row>
          <img src={`https://coincheckup.com/images/coins/${nameLower}.png`} id="logoSm" height="50" width="50" />


      <Col sm={4}>
        <Row>
          <Col sm={12} id='coinName'>
            {coinName}
          </Col>
        </Row>

        <Row>
          <Col sm={12} id='symbol'>
            ({symbol})
          </Col>
        </Row>
      </Col>

      <Col sm={4}>
        <div className='gainers-percentages'>
          <span id="arrow-up"></span><div class='gainerPC'>{PC7Dy}%</div>
        </div>

        <div>
          {PC7Dy}%
        </div>

        <div>
          ${price}
        </div>
      </div>
    )
  }

  quick_SortTop() {
    const coins = this.state.allCoins;
      var temp = 0;
      for (var i = 0; i < coins.length; i++) {
        for (var j = 0; j < coins.length; j++) {
          if ((parseInt(coins[i].percent_change_7d)) < (parseInt(coins[j].percent_change_7d))) {
          temp = coins[i];
          coins[i] = coins[j];
          coins[j] = temp;
        }
      }
    }

    const tempgainers = coins.splice(0);
    const reverse = tempgainers.splice(95,100);
    const gainers = reverse.reverse();

    this.setState({
      gainers
    })
  }
  
  
  componentWillMount() {
    //grab top 100 performing coins
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=100')
      .then(res => {
        const allCoins = res.data;

          this.setState({ 
            allCoins
          });

          this.quick_SortTop();
      })
  }

    render() {
      // //gather data
      const coins = this.grabTopGainersCoins();

      return (
        <div>
            <Row>
              {coins}
            </Row>
        </div>
      )
    }
 }

export default Gainers;