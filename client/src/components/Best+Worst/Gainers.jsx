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

      if (coinName == 'XPA') {
        nameLower = 'xplay'
      }

      top5jsxFormat.push(this.generateCoin(i, coinName, symbol, price, marketCap, PC7Dy, nameLower));
      })

    return top5jsxFormat; 
  }


  generateCoin(i, coinName, symbol, price, marketCap, PC7Dy, nameLower) {
    console.log(PC7Dy)
    return (
      <div className="cryptoCard">
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
            <Row>
              {coins}
            </Row>
        </div>
      )
    }
 }

export default Gainers;