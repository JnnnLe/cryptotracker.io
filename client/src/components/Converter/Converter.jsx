import React, { Component } from 'react';
import axios from 'axios';

class ConverterApp extends Component {
  constructor(props) {
  super(props)
  this.state = {
    name: props.name,
    symbol: props.symbol,
    logo: props.logo,
    userAmount: 10,
    convertFrom: "ETH",
    convertFromPrice: 0,
    convertTo: "BTC",
    convertToPrice: 0,
    conversionValue: 0,

  }
  this.runConverter = this.runConverter.bind(this)
  this.calculateThisBitch = this.calculateThisBitch.bind(this)
  }

  componentDidMount() {
    this.calculateThisBitch()
  }

  componentWillMount() {
    this.runConverter()
  }

runConverter() {
  axios.all([
  axios.get(`https://api.coinmarketcap.com/v1/ticker/ethereum/`),
  axios.get(`https://api.coinmarketcap.com/v1/ticker/bitcoin/`)
  ])
    .then(axios.spread((firstCall, secCall) => {
      const fromVal = firstCall.data[0].price_usd;
      const toVal = secCall.data[0].price_usd;

      this.setState({
        convertFromPrice: fromVal,
        convertToPrice: toVal,
      })
      const total = this.calculateThisBitch(this.state.userAmount, this.state.convertFromPrice, this.state.convertToPrice)
      this.setState({ conversionValue: total })
      console.log('YASSS', total)
      console.log('Hello, its me...', this.state)
    }))
}

calculateThisBitch(u1, u2, u3) {
    const formula = ((u1 * u2) / u3)
    return formula
}

render() {
  return (
    <div>
    <h1>TESTING CONSOLE.LOG</h1>
    </div>
  )
}


}

export default ConverterApp