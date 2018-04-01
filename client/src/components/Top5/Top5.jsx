import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './Top5.css';
import axios from 'axios';

const NumberFormat = require('react-number-format');

class Top5 extends Component {

  constructor() {
    super();
    this.state = {
      topCryptos: [],
      queryParams: '',
    }, 

    this.generateCoin = this.generateCoin.bind(this);
    this.generateAllCoins = this.generateAllCoins.bind(this);
  }

  generateCoin(i, coinName, price, PC24Hr, PC7Dy, marketCap) {
    return (
      <div className='Top5' key={i}>
          <div>
            <Row>
              <Col md={2.4}>
                {coinName} 
              </Col>
              <Col md={2.4}>
                <NumberFormat value={price} 
                displayType={'text'} fixedDecimalScale={true} decimalPrecision={2} thousandSeparator={true} prefix={'$'}/>
              </Col> 
              <Col md={2.4}>
              <NumberFormat value={PC24Hr} displayType={'text'} fixedDecimalScale={true} decimalPrecision={2} thousandSeparator={true} suffix={'%'}/>
              </Col>
              <Col md={2.4}>
              <NumberFormat value={PC7Dy} displayType={'text'} fixedDecimalScale={true} decimalPrecision={2} thousandSeparator={true} suffix={'%'}/>
              </Col>
              <Col md={2.4}>
              <NumberFormat value={marketCap} displayType={'text'} fixedDecimalScale={true} decimalPrecision={2} thousandSeparator={true} prefix={'$'}/>
              </Col>
            </Row>
          </div>
        </div>
    )
  }

  generateAllCoins() {
    let coinjsx = [];
    Object.keys(this.state.topCryptos).map((coin, i) => {
      const coinName = this.state.topCryptos[coin].name;
      const price = this.state.topCryptos[coin].price_usd;
      const PC24Hr = this.state.topCryptos[coin].percent_change_24h;
      const PC7Dy = this.state.topCryptos[coin].percent_change_7d;
      const marketCap = this.state.topCryptos[coin].market_cap_usd;
      const jsx = this.generateCoin(i, coinName, price, PC24Hr, PC7Dy, marketCap);

      coinjsx.push(jsx);
    })
    return coinjsx;
  }

  componentDidMount() {

    const arrOfCoinsAbrv = [];
  
    axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=5`)
    .then(res => {
      const topCoinsOfTheDayArr = res.data;
      topCoinsOfTheDayArr.map((coin, i) => {
        arrOfCoinsAbrv.push(coin.symbol);
      })

      this.setState({
        topCryptos: topCoinsOfTheDayArr,
        queryParams: arrOfCoinsAbrv,
        
      })
    })
}

    render() {
      //gather data
      const coins = this.generateAllCoins();
      return (
        <div>
          <div>
            {coins}
          </div>
        </div>
      )
    }
 }

export default Top5;