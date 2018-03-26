import React, { Component } from 'react';
import ReactDom from 'react-dom';

class CoinUpdate extends Component {

coinUpdate = () => {
    var baseUrl = "https://widgets.cryptocompare.com/";
    var scripts = document.getElementsByTagName("script");
    var embedder = scripts[ scripts.length - 1 ];
    var cccTheme = {"General": {"enableMarquee": true}};
    var appName = encodeURIComponent(window.location.hostname);
    if (appName=="") { appName = "local"; }
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    var theUrl = baseUrl +'serve/v3/coin/header?fsyms=BTC,ETH,XMR,LTC&tsyms=USD,EUR,CNY,GBP';
    s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
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