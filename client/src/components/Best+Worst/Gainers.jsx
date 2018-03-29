import React, { Component, Row, Col } from 'react';
// import { Col, Row } from 'reactstrap';
import axios from 'axios';

class Gainers extends Component {

  constructor() {
    super();
    this.state = {
      allCoins: [],
      gainers: [],
      losers: []
    } 
   
  }

// Todo: grab top 5 performers, in the top 100 list
  generateTopGainers() {
    let top5jsx = [];
    let tempjsx = []
    Object.keys(this.state.allCoins).map((coin, i) => {
      const coinName = this.state.allCoins[coin].name;
      const symbol = this.state.allCoins[coin].symbol;
      const marketCap = this.state.allCoins[coin].market_cap_usd;
      const PC7Dy = this.state.allCoins[coin].percent_change_7d;

      // const jsx = this.generateCoin(i, coinName, symbol, marketCap, PC7Dy);
      tempjsx.push({coinName, symbol, marketCap, PC7Dy});

      // const sorted = tempjsx.sort((a,b) => {
        
      // })

      // console.log('temp jsx :', tempjsx);
    })
    return top5jsx; 
  }

  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=0')
      .then(res => {
        const coins = res.data;

        
          this.setState({ 
            allCoins : coins,
            gainers: this.generateTopGainers(),
            losers: ['Lowest5']
            });

          console.log('All coins arr:', this.state.allCoins);
      })
  }

    render() {
      //gather data
    //   const coins = this.generateAllCoins();
      return (
        <div>
          <div>
            <h1> Hi there Goregeous!</h1>
            {this.generateTopGainers()}
          </div>
        </div>
      )
    }
 }

export default Gainers;