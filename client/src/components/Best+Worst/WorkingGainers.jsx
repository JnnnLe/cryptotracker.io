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
              <NumberFormat value={PC7Dy}
              displayType={'text'} fixedDecimalScale={true} decimalPrecision={2} thousandSeparator={true} prefix={'$'}/>
            </Col>

            <Col md={4}>
              <div id='green'>
                <NumberFormat value={marketCap} 
                displayType={'text'} fixedDecimalScale={true} decimalPrecision={2} thousandSeparator={true} suffix={'%'}/>
              </div>
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
    const reverse = tempgainers.splice(95,100);
    const gainers = reverse.reverse();

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
          <div id='titleBar'>
            <h1>Biggest Gainers: </h1>
            <Row>
              <Col md={4}>Coin Name:</Col>
              <Col md={4}>Net Marketcap:</Col>
              <Col className='left' md={4}>Change over 7 days:</Col>
              {coins}
            </Row>
          </div>
        </div>
      )
    }
 }

export default Gainers;