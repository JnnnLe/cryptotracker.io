import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import NumberFormat from 'react-number-format';

class Gainers extends Component {

  constructor() {
    super();
    this.state = {
      allCoins: [],
      gainers: [],
      // losers: []
    } 
    this.grabTop100Coins = this.grabTop100Coins.bind(this);
    this.generateCoin = this.generateCoin.bind(this);
    this.quick_Sort = this.quick_Sort.bind(this);
  }

// Todo: grab top 5 performers, in the top 100 list => DONE
  grabTop100Coins() {
    let top5jsxFormat = [];
    // let tempjsx = []
    Object.keys(this.state.allCoins).map((coin, i) => {
      const coinName = this.state.allCoins[coin].name;
      const symbol = this.state.allCoins[coin].symbol;
      const marketCap = this.state.allCoins[coin].market_cap_usd;
      const PC7Dy = this.state.allCoins[coin].percent_change_7d;

      // const jsx = this.generateCoin(i, coinName, symbol, marketCap, PC7Dy);
      top5jsxFormat.push(this.generateCoin(i, coinName, symbol, marketCap, PC7Dy));
      this.quick_Sort();
      })
    return top5jsxFormat; 
  }


  generateCoin(i, coinName, symbol, PC7Dy, marketCap) {
    // console.log('ALL:', i, coinName, symbol, PC7Dy, marketCap);
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

  quick_Sort() {
    const coins = this.state.allCoins;
    // console.log('Please be Sorted...', coins)
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
    return {coins};
  }
  
  
  componentWillMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=100')
      .then(res => {
        const allCoins = res.data;

          this.setState({ 
            allCoins
          });
      })
  }

    render() {
      //gather data
      const coins = this.grabTop100Coins();
      // const sorted = this.quick_Sort();

      return (
        <div>
          <div>
            {coins}
          </div>
        </div>
      )
    }
 }

export default Gainers;