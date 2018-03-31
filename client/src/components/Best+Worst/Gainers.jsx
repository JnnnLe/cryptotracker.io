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
      // losers: []
    } 
    // this.grabTopGainersCoins = this.grabTopGainersCoins.bind(this);
    // this.generateCoin = this.generateCoin.bind(this);
    // this.quick_SortBottom = this.quick_SortBottom.bind(this);
    this.quick_SortTop = this.quick_SortTop.bind(this);
  }

// // Todo: grab top 5 performers, in the top 100 list => DONE
  grabTopGainersCoins() {
    let top5jsxFormat = [];
    // let tempjsx = []
    Object.keys(this.state.gainers).map((coin, i) => {
      const coinName = this.state.gainers[coin].name;
      const symbol = this.state.gainers[coin].symbol;
      const marketCap = this.state.gainers[coin].market_cap_usd;
      const PC7Dy = this.state.gainers[coin].percent_change_7d;

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
    const gainers = tempgainers.splice(95,100)

    this.setState({
      gainers
    })
  }
  
  
  componentWillMount() {
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
          <div>
            <h1> [TOP GAINERS]: </h1>
              {coins}
          </div>
        </div>
      )
    }
 }

export default Gainers;