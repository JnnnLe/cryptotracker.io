import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './Top5.css';
import axios from 'axios';

class Top5 extends Component {

  constructor() {
    super();
    this.state = {
      cryptos: []
    }, 
    this.generateCoin = this.generateCoin.bind(this);
    this.generateAllCoins = this.generateAllCoins.bind(this);
  }

  generateCoin(i, coinName, price, PC24Hr) {
    return (
      <div className='Top5' key={i}>
          <div>
            <Row>
              <Col md={4}>
                {coinName}
              </Col>
              <Col md={4}>
                $ {price}
              </Col> 
              <Col md={4}>
                {PC24Hr} %
              </Col>
            </Row>
          </div>
        </div>
    )
  }

  generateAllCoins() {
    let coinjsx = [];
    Object.keys(this.state.cryptos).map((coin, i) => {
      const coinName = this.state.cryptos[coin].USD.FROMSYMBOL;
      const price = this.state.cryptos[coin].USD.PRICE;
      const PC24Hr = (this.state.cryptos[coin].USD.CHANGEPCT24HOUR).toFixed(2);
      const jsx = this.generateCoin(i, coinName, price, PC24Hr);
      coinjsx.push(jsx);
  })

  return coinjsx;
}

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,IOT,DMT,LTC,VIU&tsyms=USD')
      .then(res => {
        const coins = res.data.RAW;
          this.setState({ cryptos : coins })
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