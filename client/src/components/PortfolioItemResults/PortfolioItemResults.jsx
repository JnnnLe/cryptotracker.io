import React, { Component } from 'react';
import ReactDom from 'react-dom';

import {
  Row, Col, Card, CardHeader, CardBody
} from 'reactstrap';

import './PortfolioItemResults.css'

class PortfolioItemResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: 0,
      dayPercentChange: 0,
      quanity: 0,
      netWorth: 0
    }
  };

  componentDidMount () {
    // setInterval(() => {
    console.log('PortfolioItemResults: called api for ALL info from API');
    // When QUERY is dynamic
      // const apiURL = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
      // const market = (user input);
      // const query = apiURL + 'btc&tsyms=USD,EUR' + market;

    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.text()
      .then(info => { 
        console.log(JSON.parse(info).RAW);
        this.setState({ name: JSON.parse(info).RAW.BTC.USD.FROMSYMBOL,
                        price: JSON.parse(info).DISPLAY.BTC.USD.PRICE,
                        market_cap: JSON.parse(info).DISPLAY.BTC.USD.MKTCAP,
                        dayPercentChange: JSON.parse(info).DISPLAY.BTC.USD.CHANGEPCT24HOUR })
      }))
      .catch(err => console.log(err))         
    // }, 20000);
  }

render() {
  return (
      <div>
        <Card>
          <CardBody className="coin-div">
            <Row>
              <Col md={2} className="portfolioItem">
                {this.state.name}
              </Col>
              <Col md={2} className="portfolioItem">
                {this.state.price}
              </Col>
              <Col md={2} className="portfolioItem">
                {this.state.dayPercentChange}%
              </Col>
              <Col md={2} className="portfolioItem">
                {this.state.market_cap}
              </Col>
              <Col md={2} className="portfolioItem">
                {this.state.quanity}
              </Col>
              <Col md={2} className="portfolioItem">
                ${this.state.netWorth}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PortfolioItemResults;