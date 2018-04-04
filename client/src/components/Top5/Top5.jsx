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
      // nameLower: this.props.coinName.toLowerCase()
    }, 

    this.generateCoin = this.generateCoin.bind(this);
    this.generateAllCoins = this.generateAllCoins.bind(this);
  }

  generateCoin(i, coinName, symbol, price, PC1Hr, PC24Hr, PC7Dy, marketCap, rank, nameLower) {
    return (  
    
      <div className='main-container'>
        <Row>

        <div className='logo'>
          <img src={`https://coincheckup.com/images/coins/${nameLower}.png`} height="64" width="64" />
        </div>
          
        <Col md={2}>
          <Row>
            <Col md={12} id='coinName'>
              {coinName}
            </Col>
          </Row>
          <Row>
            <Col md={12} id='symbol'>
              ({symbol})
            </Col>
          </Row>
        </Col>

        <Col md={1.25}>
        <div className='percentages'>
              <div><b>HOUR:</b> <span id="pcRight">{PC1Hr}% </span></div>
              <div><b>DAY:</b> <span id="pcRight">{PC24Hr}% </span></div>
              <div><b>WEEK:</b> <span id="pcRight">{PC7Dy}% </span></div>
      </div>
        </Col>

        <Col md={3.5}>
          <Row>
            <div id='currentPrice'>
            <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
          </Row>
        </Col>

        <Col md={2}>
          <div id='marketCap'>
          <NumberFormat value={marketCap} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </div>
        </Col>
        <Col md={1}>
          <div id='rank'>
            #{rank}
          </div>
        </Col>

      </Row>
    </div>
    )
  }



  generateAllCoins() {
    
    let coinjsx = [];


    Object.keys(this.state.topCryptos).map((coin, i) => {
      const coinName = this.state.topCryptos[coin].name;
      const symbol = this.state.topCryptos[coin].symbol;
      let price = this.state.topCryptos[coin].price_usd;
      const PC1Hr = this.state.topCryptos[coin].percent_change_1h;
      const PC24Hr = this.state.topCryptos[coin].percent_change_24h;
      const PC7Dy = this.state.topCryptos[coin].percent_change_7d;
      const marketCap = this.state.topCryptos[coin].market_cap_usd;
      const rank = this.state.topCryptos[coin].rank;
      let nameLower = this.state.topCryptos[coin].name.toLowerCase();

      if (price[0] != '0') {
        var backToNum = Number(price)
        // console.log('Back to num:', backToNum, typeof backToNum)
        price = backToNum.toFixed(2)
        // console.log('2deci,', price)
      }
       if (price[0] == '0') {
        var backToNum = Number(price)
        price = backToNum.toFixed(3)
        // console.log('3deci,', price)
        }

      if (coinName == 'Bitcoin Cash') {
        nameLower = "bitcoin-cash"
      }

      console.log(nameLower)
      const jsx = this.generateCoin(i, coinName, symbol, price, PC1Hr, PC24Hr, PC7Dy, marketCap, rank, nameLower);

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