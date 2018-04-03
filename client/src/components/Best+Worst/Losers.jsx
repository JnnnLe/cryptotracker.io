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
      const price = this.state.losers[coin].price_usd;
      const marketCap = this.state.losers[coin].market_cap_usd;
      const PC7Dy = this.state.losers[coin].percent_change_7d;
      let nameLower = this.state.losers[coin].name.toLowerCase();

      if (coinName == 'Request Network') {
        nameLower = 'request-network'
      }


      top5jsxFormat.push(this.generateCoin(i, coinName, symbol, price, marketCap, PC7Dy, nameLower));
      })
    return top5jsxFormat; 
  }


  generateCoin(i, coinName, symbol, price, marketCap, PC7Dy, nameLower) {
    return (
      <div className="cryptoCard" key={i}>
          {coinName}
          <span>({symbol})</span>

        <div className='logo'>
          <img src={`https://coincheckup.com/images/coins/${nameLower}.png`} height="32" width="32" />
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