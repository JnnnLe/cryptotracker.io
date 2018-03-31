import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import NumberFormat from 'react-number-format';

class Losers extends Component {

  constructor() {
    super();
    this.state = {
      allCoins: [],
      // gainers: [],
      losers: []
    } 
    // this.grabLowestCoins = this.grabTop100Coins.bind(this);
    // this.generateCoin = this.generateCoin.bind(this);
    this.quick_SortBottom = this.quick_SortBottom.bind(this);
  }

  grabLowestCoins() {
    let top5jsxFormat = [];
    Object.keys(this.state.losers).map((coin, i) => {
      const coinName = this.state.losers[coin].name;
      const symbol = this.state.losers[coin].symbol;
      const marketCap = this.state.losers[coin].market_cap_usd;
      const PC7Dy = this.state.losers[coin].percent_change_7d;

      top5jsxFormat.push(this.generateCoin(i, coinName, symbol, marketCap, PC7Dy));
      })
    return top5jsxFormat; 
  }


  generateCoin(i, coinName, symbol, PC7Dy, marketCap) {
    return (
      <div className='biggestGainers' key={i}>
        <div>
          <Row>
            <Col md={4}>
              {coinName} ({symbol})
            </Col> 

            <Col md={4}>
            {PC7Dy}
            </Col>

            <Col md={4}>
            {marketCap}
            </Col>
          </Row>
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
    console.log('TEMP Bottom:', tempLosers)
    const losers = tempLosers.splice(0,5);

    this.setState({
      losers
    })

    console.log('STATE THIS:', this.state)
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
          <div>
            <h1> [Top LOSERS:] </h1>
            {coins}
          </div>
        </div>
      )
    }
 }

export default Losers;