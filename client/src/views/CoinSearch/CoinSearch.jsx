import React from 'react';
import {
    Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';

import { PanelHeader, PortfolioContainer } from 'components';

import TradingViewWidget from 'react-tradingview-widget';



const App = () => (
  <TradingViewWidget
    width = "600"
    height = "250"
    symbol = "BTCUSD"
    theme = "Light"
    style = "3"    
  />
);

class CoinSearch extends React.Component{
    render(){
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                // <App />
                <br />
                <br />
                <br />
                <PortfolioContainer />
                </div>
            </div>

        )
    }
}

export default CoinSearch;