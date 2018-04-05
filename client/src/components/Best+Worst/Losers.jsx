import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import './Losers.css';

class Losers extends Component {

  constructor() {
    super();
    this.state = {
      allCoins: [],
      losers: []
    } 

    this.quick_SortBottom = this.quick_SortBottom.bind(this);
  }

  grabLowestCoins() {
    let top5jsxFormat = [];
    Object.keys(this.state.losers).map((coin, i) => {
      let coinName = this.state.losers[coin].name;
      const symbol = this.state.losers[coin].symbol;
      let price = this.state.losers[coin].price_usd;
      const marketCap = this.state.losers[coin].market_cap_usd;
      const PC7Dy = this.state.losers[coin].percent_change_7d;
      let nameLower = this.state.losers[coin].name.toLowerCase();

      console.log('xdcfjvygkbuhlnj;sdjbs00000', typeof price)
      if (price[2] == '0' && price[3] == '0') {
        var backToNum = Number(price)
        price = backToNum.toFixed(3)
      }

      if (price[0] != '0' || price[0] == '0') {
        var backToNum = Number(price)
        price = backToNum.toFixed(2)
      }

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
      if (coinName == 'Waltonchain') {
        nameLower = "walton"
      }
      if (coinName == 'Matrix AI Network') {
          nameLower = "matrix-ai-network"
      }
      if (coinName == 'Genesis Vision') {
          nameLower = "genesis-vision"
      }
      if (coinName == 'Nebulas') {
        nameLower = "nebulas-token"
      }
      if (coinName == 'Enjin Coin') {
          nameLower = "enjin-coin"
      };

      top5jsxFormat.push(this.generateCoin(i, coinName, symbol, price, marketCap, PC7Dy, nameLower));
      })
    return top5jsxFormat; 
  }


  generateCoin(i, coinName, symbol, price, marketCap, PC7Dy, nameLower) {
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
        <div className='losers-percentages'>
          <span id="arrow-down"></span><div class='loserPC'>{PC7Dy}%</div>
        </div>
        <br/>
        <br/>
          <div id='losers-currentPrice'>
            ${price}
          </div>
          <div id='invisible'>
            Secret!
          </div>
      </Col>

      </Row>
      </div>
    )
  }

  quick_SortBottom() {
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
    const tempLosers = coins.splice(0);
    const losers = tempLosers.splice(0,5);

    this.setState({
      losers
    })

  }

  componentWillMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=100')
      .then(res => {
        const allCoins = res.data;

          this.setState({ 
            allCoins
          });

          this.quick_SortBottom();
      })
  }

  render() {
      // //gather data
    const coins = this.grabLowestCoins();

    return (
      <div>
          <Row>
            {coins}
          </Row>
      </div>
    )
  }
  
 }

export default Losers;