import React from 'react';
import fetch from 'isomorphic-fetch';

import reactstrap, { Row, Col } from 'reactstrap';

import './CryptoCardPortfolio.css'
import UserSharesInput from '../UserSharesInput/UserSharesInput';

class CryptoCardPortfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      symbol: props.symbol,
      logo: props.logo,
      price: 0,
      lastPrice: 0,
      nameLower: (props.name).toLowerCase(),
      shares: 0,
      netValue: 0,
      showInput: false
    }

    this.pollPrice = this.pollPrice.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.calcNetValue = this.calcNetValue.bind(this)
  }

  componentDidMount() {
    this.pollPrice()
    setInterval(this.pollPrice, 10000)
  }

  handleChange(event) {
    console.log(event.target)
    const newState = {...this.state}
    newState.shares = event.target.value
    this.setState(newState)
  }

  handleClick() {
    const newState = {...this.state}
    newState.showInput = !newState.showInput
    let shares = newState.shares ? parseInt(newState.shares) : 0
    let price = parseFloat(newState.price)
    newState.netValue = this.calcNetValue()
    this.setState(newState)
  }

  pollPrice() {
    console.log('polling for new price')
    const { symbol } = this.state
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=${symbol},USD`)
      .then(resp => resp.json())
      .then(json => {
        this.setState((prevState) => ({
          price: json.USD,
          lastPrice: prevState.price !== json.USD
            ? prevState.price
            : prevState.lastPrice,
            netValue: this.calcNetValue()
        }))
      })
  }

  calcNetValue() {
    console.log(this.state.shares)
    return (
      parseFloat(this.state.shares) * parseFloat(this.state.price)
    )
  }

  priceChange(lastPrice, price) {
    const diff = lastPrice - price
    const change = diff / lastPrice
    const percent = (change * 100)
    return (change === -Infinity
      ? 0
      : percent).toFixed(3)
  }

  render() {
    console.log('Lower:', this.state.nameLower)
    console.log('is it accessing the right coin', `https://coincheckup.com/images/coins/${this.state.nameLower}.png`)
    const { name, symbol, price, logo, lastPrice, nameLower } = this.state
    const gainloss = lastPrice > price
      ? 'loss'
      : 'gain'

    return (
      <Row>
      <div className={`cryptoCard ${gainloss}`}>
        <div className='top'>
          <div className='name'>
            {name}
            <span>({symbol})</span>
          </div>

          <div className={`percentage ${gainloss}`}>
            {this.priceChange(lastPrice, price)}%
          </div>
        </div>

        <div className='bottom'>
          <div className='logo'>
          <img src={`https://coincheckup.com/images/coins/${this.state.nameLower}.png`} height="64" width="64" />

          </div>

          <div className={`price ${gainloss}`}>
            ${price}
            <span className={`triangle`} />
          </div>

          <div className="userHoldings">
            <UserSharesInput handleChange={this.handleChange} handleClick={this.handleClick} showInput={this.state.showInput} shares={this.state.shares} />
          </div>

          <div className="netValue">
          ${this.state.netValue}
          </div>

        </div>
      </div>
      </Row>
    )
  }
}

export default CryptoCardPortfolio