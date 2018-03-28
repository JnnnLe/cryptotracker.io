import React, { Component } from 'react';
import './Top5.css';
import axios from 'axios';
var NumberFormat = require('react-number-format');

class Top5 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      })
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className="Top5">
          {Object.keys(this.state.cryptos).map((key) => (

            <div id="crypto-container">
              <span className="left">{key}</span>
              <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span>
            </div>
          ))}
          </div>
        </div>
    );
  }
}

export default Top5;