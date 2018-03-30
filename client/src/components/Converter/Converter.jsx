import React, { Component } from 'react';
import axios from 'axios';

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
    conversionValue: 0,

  }
    this.runConverter = this.runConverter.bind(this)
    this.calculateFinalVal = this.calculateFinalVal.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
  }

  componentDidMount() {
    // this.runConverter();    
    this.calculateFinalVal();
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

  // TODO: plan for .toLowerCase(), .trim() for User Input
  const { convertFrom } = this.state;
  const { convertTo } = this.state;

  console.log("FETCH RESOURCE");
  
  axios.all([
    axios.get(`https://api.coinmarketcap.com/v1/ticker/${convertFrom}/`),
    axios.get(`https://api.coinmarketcap.com/v1/ticker/${convertTo}/`)
    ])
      .then(axios.spread((firstCall, secCall) => {
        const newState = Object.assign({}, this.state)

        const fromVal = parseInt(firstCall.data[0].price_usd);
        const toVal = parseInt(secCall.data[0].price_usd);

        console.log('Hoping for the right one to come along', 'BTC:', fromVal, 'EOS:', toVal)

        // this.setState({
        //   convertFromPrice: fromVal,
        //   convertToPrice: toVal,
        // })

        newState.convertFromPrice = fromVal;
        newState.convertToPrice = toVal;
        console.log('TYPEOF FROM: ', typeof fromVal,
        'TYPEOF TO: ', typeof fromVal, 'USERINPUT: ', typeof this.userAmount, this.userAmount );
        
        newState.conversionValue = this.calculateFinalVal(
          newState.userAmount, 
          newState.convertFromPrice, 
          newState.convertToPrice
        )
        console.log('VALUE:', this.conversionValue);
        this.setState(newState)
        console.log('YASSS', newState.conversionValue);
        console.log('STATETTTTTTEEEEE:', this.state)
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
    <label>
      Convert this Coin: 
      <input type="text" value={this.state.convertFrom} onChange={this.handleFrom} />
    </label>
    <label>
      To this Coin: 
      <input type="text" value={this.state.convertTo} onChange={this.handleTo} />
    </label>
        <input type="submit" value="+Add Coin" onClick={this.runConverter} />
      </form>
    </div>
  )
}


}

export default ConverterApp