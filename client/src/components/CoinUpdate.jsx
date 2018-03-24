import React, { Component } from 'react';
import ReactDom from 'react-dom';

class CoinUpdate extends Component {
  
  coinUpdate = () => {
  let baseUrl = "https://widgets.cryptocompare.com/";
  let scripts = document.getElementsByTagName("script");
  let embedder = scripts[scripts.length - 1];
  let cccTheme = { "General": { "enableMarquee": true } };
  let appName = encodeURIComponent(window.location.hostname);
  if (appName == "") { appName = "local"; }
  let s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  let theUrl = baseUrl + 'serve/v3/coin/header?fsyms=BTC,ETH,XMR,LTC&tsyms=USD,EUR,CNY,GBP';
  s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
  embedder.parentNode.appendChild(s);

}

render() {
  return (
    <div>
      {this.coinUpdate()}
    </div>
  )
}
}

export default CoinUpdate;