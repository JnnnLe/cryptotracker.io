import React, { Component } from 'react';
import axios from 'axios';
//import css pg

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
    const { userAmount } = this.state;
    const { convertFrom } = this.state;
    const { convertTo } = this.state;

    axios.all([
      axios.get(`https://api.coinmarketcap.com/v1/ticker/${convertFrom}/`),
      axios.get(`https://api.coinmarketcap.com/v1/ticker/${convertTo}/`)
      ])
        .then(axios.spread((firstCall, secCall) => {
          const newState = Object.assign({}, this.state)
          const fromVal = parseInt(firstCall.data[0].price_usd);
          const toVal = parseInt(secCall.data[0].price_usd);

          newState.userAmount = userAmount;
          newState.convertFromPrice = fromVal;
          newState.convertToPrice = toVal;

          newState.conversionValue = this.calculateFinalVal(
            newState.userAmount, 
            newState.convertFromPrice, 
            newState.convertToPrice
          )

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
      <br/>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
        <label>
          Amount 
          <input type="number" value={this.state.userAmount} onChange={this.handleSubmit} />
        </label> 

        <br/>
        <br/>
        <label>
          Convert this Coin: 
          <input type="text" value={this.state.convertFrom} onChange={this.handleFrom} />
        </label>

 
        <label>
          To this Coin: 
          <input type="text" value={this.state.convertTo} onChange={this.handleTo} />
        </label>
          <input type="submit" value="Convert Coin" onClick={this.runConverter} />

        <br/>
        <br/>
          <label> Converted Value =   
            <input type="number" value={this.state.conversionValue} />
        </label>

        </form>
      </div>
    )
  }
}

export default ConverterApp;