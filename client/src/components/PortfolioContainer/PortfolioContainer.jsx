import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';

import './PortfolioContainer.css';

import { PanelHeader, FormInputs, PortfolioItemResults, PortfolioHeader, LookupCoin,LookupCoinLanding } from 'components';

// import TradingViewWidget from 'react-tradingview-widget';

// const App = () => (
//   <TradingViewWidget
//     width = "1000"
//     height = "300"
//     symbol = "BTCUSD"
//     theme = "Light"
//     style = "3"    
//   />
// );


class PortfolioContainer extends React.Component{
  render(){
    return (
          <div className="content">
            <Row>
             <Col md={12}> 

              <LookupCoinLanding />
              <LookupCoin />
              </Col>
            </Row>
          </div>
    );
  }
}

export default PortfolioContainer;