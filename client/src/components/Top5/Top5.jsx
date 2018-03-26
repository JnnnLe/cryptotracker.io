// import React, { Component } from 'react';
// import ReactDom from 'react-dom';

// class Top5 extends Component {
    
//     top5Display = () => {
//     let baseUrl = "https://widgets.cryptocompare.com/";
//     let scripts = document.getElementsByTagName("script");
//     let embedder = scripts[scripts.length - 1];
//     let appName = encodeURIComponent(window.location.hostname);

//     if (appName == "") {
//       appName = "local";
//     }

//     let s = document.createElement("script");
//     s.type = "text/javascript";
//     s.async = true;
//     let theUrl = baseUrl + 'serve/v1/coin/multi?fsyms=BTC,ETH,XMR,LTC,DASH&tsyms=USD,EUR,CNY,GBP';
//     s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + 'CRYPTOTRACKER.io';
//     embedder.parentNode.appendChild(s);
//   }

//   render() {
//     return (
//       <div style={{
//           'width':500,
//           'height':250
//         }}>
//           {this.top5Display()}
//       </div>
//     )
//   }
// }

// export default Top5;


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