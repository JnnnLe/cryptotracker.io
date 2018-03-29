import React, { Component } from 'react';
import axios from 'axios';

class ConverterApp extends Component {
  constructor(props) {
  super(props)
  this.state = {
    name: props.name,
    symbol: props.symbol,
    logo: props.logo,
    userAmount: null,
    convertFrom: props.convertFrom,
    convertFromPrice: 0,
    convertTo: props.convertTo,
    convertToPrice: 0,
    conversionValue: 0,

  }
    this.runConverter = this.runConverter.bind(this)
    this.calculateThisBitch = this.calculateThisBitch.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
  }

  componentDidMount() {
    this.runConverter();    
    this.calculateThisBitch();
  }

  componentWillMount() {
  }

  handleChange(event) {
   
    // console.log('this is the target value:', event.target.value)
    // console.log('STATE;', this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      userAmount: event.target.value,
    });
    console.log('A value was submitted: ', this.state.userAmount);
    console.log('STATE:', this.state)
  }

  handleFrom(event) {
    event.preventDefault();
    this.setState({
      convertFrom: event.target.value
    });
    console.log('A FROM was submitted: ', this.state.userAmount);
    console.log('STATE:', this.state)
  }

  handleTo(event) {
    event.preventDefault();
    this.setState({
      convertTo: event.target.value,
    });
    console.log('A TO was submitted: ', this.state.userAmount);
    console.log('STATE:', this.state)
  }

runConverter() {
  const { convertFrom } = this.state;
  const { convertTo } = this.state;
  axios.all([
  axios.get(`https://api.coinmarketcap.com/v1/ticker/${convertFrom}`),
  axios.get(`https://api.coinmarketcap.com/v1/ticker/${convertTo}`)
  ])
    .then(axios.spread((firstCall, secCall) => {
      const fromVal = firstCall.data[0].price_usd;
      const toVal = secCall.data[0].price_usd;

      console.log('Hoping for the right one to come along', fromVal, toVal)

      this.setState({
        convertFromPrice: fromVal,
        convertToPrice: toVal,
      })
      const total = this.calculateThisBitch(this.state.userAmount, this.state.convertFromPrice, this.state.convertToPrice)
      this.setState({ conversionValue: total })
      console.log('YASSS', total)
    }))
}

calculateThisBitch(u1, u2, u3) {
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
    <label>
      Convert this Coin: 
      <input type="text" value={this.state.convertFrom} onChange={this.handleFrom} />
    </label>
    <label>
      To this Coin: 
      <input type="text" value={this.state.convertTo} onChange={this.handleTo} />
    </label>
        <input type="submit" value="+Add Coin" />
      </form>
    </div>
  )
}


}

export default ConverterApp