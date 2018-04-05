import React, { Component } from 'react';
import axios from 'axios';

import reactstrap, { Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';


import "./Converter.css"


class ConverterApp extends Component {
  constructor(props) {
  super(props)
  this.state = {
    name: props.name,
    symbol: props.symbol,
    logo: props.logo,
    userAmount: 0,
    convertFrom: props.convertFrom,
    convertFromPrice: 0,
    convertTo: props.convertTo,
    convertToPrice: 0,
    conversionValue: null,
  }
    this.runConverter = this.runConverter.bind(this)
    this.calculateFinalVal = this.calculateFinalVal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
  }

  componentDidMount() {
    this.calculateFinalVal();
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      userAmount: parseInt(event.target.value)
    });
  }

  handleFrom(event) {
    event.preventDefault();
    this.setState({
      convertFrom: event.target.value
    });
  }

  handleTo(event) {
    event.preventDefault();
    this.setState({
      convertTo: event.target.value,
    });
  }

  runConverter() {

    // TODO: plan for .toLowerCase(), .trim() for User Input
    const { userAmount, convertFrom, convertTo  } = this.state;

    axios.all([
      axios.get(`https://api.coinmarketcap.com/v1/ticker/${convertFrom}/`),
      axios.get(`https://api.coinmarketcap.com/v1/ticker/${convertTo}/`)
      ])
        .then(axios.spread((firstCall, secCall) => {

          const newState = Object.assign({}, this.state);
          const fromVal = parseFloat(firstCall.data[0].price_usd);
          const toVal = parseFloat(secCall.data[0].price_usd);
          newState.userAmount = userAmount;
          newState.convertFromPrice = fromVal;
          newState.convertToPrice = toVal;

          newState.conversionValue = this.calculateFinalVal(
            newState.userAmount, 
            newState.convertFromPrice, 
            newState.convertToPrice
          ).toFixed(2)

          this.setState(newState)

        }))
  }

  calculateFinalVal(u1, u2, u3) {
    const formula = ((u1 * u2) / u3)
    return formula
  }
  
  render() {
    return (
      <div>
        <Row>
          <Col md={5} id="converter-container">
            <Row>
              <Col md={12}>
              <Row>
              <Col md={6}><h1>Amount</h1></Col>
              <Col md={6}><Input className="convertCoinAmount" id="converterInput" type="number" value={this.state.userAmount} onChange={this.handleSubmit} /></Col></Row>
              <br/>


              <Row>
              <Col md={6}><h1>From</h1></Col>
              <Col md={6}><Input className="fromCoin" id="converterInput" type="text" value={this.state.convertFrom} onChange={this.handleFrom} /></Col></Row>
              <br/>



              <Row><Col md={6}><h1>To</h1></Col><Col md={6}><Input className="toCoin" id="converterInput" type="text" value={this.state.convertTo} onChange={this.handleTo} /></Col></Row>
              <br/>


              <Row><Button color="primary" id="converterSubmit" type="submit" value="Convert Coin" onClick={this.runConverter}>CONVERT</Button></Row>
              <br/>


              <Row><Col md={6}><h1>Conversion</h1></Col><Col md={6}><Input className="convertedCoinAmount" id="converterInput" type="number" value={this.state.conversionValue} /></Col></Row>

              </Col>


            </Row>
          </Col>
        </Row>



          {/*<div id="convertForm">
          <h1>Currency Converter</h1>
          <form onSubmit={this.handleSubmit}>
          <div className="formField">
          Amount 
          <Input className="convertCoinAmount" id="converterInput" type="number" value={this.state.userAmount} onChange={this.handleSubmit} />
          </div>

          <br/>
          <br/>
          <div className="formField">
          <Label>
          Convert this Coin: 
          <Input className="fromCoin" id="converterInput" type="text" value={this.state.convertFrom} onChange={this.handleFrom} />
          </Label>
          </div>
  
          <div className="formField">
          <Label>
          To this Coin: 
          <Input className="toCoin" id="converterInput" type="text" value={this.state.convertTo} onChange={this.handleTo} />
          </Label>
          </div>  
          
          <div className="formField">
          <Button color="primary" id="converterSubmit" type="submit" value="Convert Coin" onClick={this.runConverter} />
          <Label> Converted Value =   
          <Input className="convertedCoinAmount" id="converterInput" type="number" value={this.state.conversionValue} />
          </Label>
          </div>
          </form>
    </div>*/}
    </div>


    )
  }
}

export default ConverterApp;