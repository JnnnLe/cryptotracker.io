import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Top5 extends Component {
    
    top5Display = () => {
    let baseUrl = "https://widgets.cryptocompare.com/";
    let scripts = document.getElementsByTagName("script");
    let embedder = scripts[scripts.length - 1];
    let appName = encodeURIComponent(window.location.hostname);

    if (appName == "") {
      appName = "local";
    }

    let s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    let theUrl = baseUrl + 'serve/v1/coin/multi?fsyms=BTC,ETH,XMR,LTC,DASH&tsyms=USD,EUR,CNY,GBP';
    s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + 'CRYPTOTRACKER.io';
    embedder.parentNode.appendChild(s);
  }

  render() {
    return (
      <div style={{
          'width':500,
          'height':250
        }}>
          {this.top5Display()}
      </div>
    )
  }
}

export default Top5;