import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './Top5.css';

class Top5 extends Component {
    
    top5Display = () => {
    var baseUrl = "https://widgets.cryptocompare.com/";
    var scripts = document.getElementsByTagName("script");
    var embedder = scripts[scripts.length - 1];
    var appName = encodeURIComponent(window.location.hostname);

    if (appName == "") {
      appName = "local";
    }

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    var theUrl = baseUrl + 'serve/v1/coin/multi?fsyms=BTC,ETH,XMR,LTC,DASH&tsyms=USD,EUR,CNY,GBP';
    s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + 'CRYPTOTRACKER.io';
    embedder.parentNode.appendChild(s);
  }

  render() {
    return (
      <div>
          {this.top5Display()}
      </div>
    )
  }
}

export default Top5;