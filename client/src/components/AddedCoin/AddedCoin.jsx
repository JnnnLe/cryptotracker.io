import React from 'react';
import fetch from 'isomorphic-fetch';

import reactstrap, { Row, Col } from 'reactstrap';

import UserSharesInput from '../UserSharesInput/UserSharesInput';

import './AddedCoin.css'

class AddedCoin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'bitcoin',
      symbol: props.symbol,
      logo: props.logo,
      price: 0,
      nameLower: ('Bitcoin').toLowerCase(),
      marketCap: 0,
      dayChange: 0,
      weekChange: 0,
      shares: 0,
      netValue: 0,
      showInput: false
    }

    this.getValues = this.getValues.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.calcNetValue = this.calcNetValue.bind(this)
  }

  componentDidMount() {
    this.getValues()
    // setInterval(this.getValues, 15000)
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

  getValues() {
    console.log('Polling for new values!')
    const { name } = this.state
    fetch(`https://api.coinmarketcap.com/v1/ticker/${name}/`)
      .then (resp => resp.json())
      .then(json => {
        var fetchedResults = json;
          this.setState({
            name: fetchedResults[0].name,
            symbol: fetchedResults[0].symbol,
            price: fetchedResults[0].price_usd,
            marketCap: fetchedResults[0].market_cap_usd,
            hourChange: fetchedResults[0].percent_change_1h,
            dayChange: fetchedResults[0].percent_change_24h,
            weekChange: fetchedResults[0].percent_change_7d,
            rank: fetchedResults[0].rank,
            priceBTC: fetchedResults[0].price_btc,
          })
          // console.log(test[0])
          console.log(this.state.name)
          console.log(this.state.dayChange)
          console.log(this.state.weekChange)
        })
      }
      
  calcNetValue() {
    return (
      parseFloat(this.state.shares) * parseFloat(this.state.price)
    )
  }

  render() {
    const { name, symbol, price, marketCap, hourChange, dayChange, weekChange, rank, priceBTC, nameLower } = this.state

    return (
      <div className='main-container'>
      <Row>

          <div className='logo'>
            <img src={`https://coincheckup.com/images/coins/${this.state.nameLower}.png`} height="64" width="64" />
          </div>
          
        <Col md={2}>
          <Row>
            <Col md={12} id='coinName'>
              {this.state.name}
            </Col>
          </Row>
          <Row>
            <Col md={12} id='coinSymbol'>
              ({this.state.symbol})
            </Col>
          </Row>
        </Col>

        <Col md={3} id='currentPrice'>
          ${this.state.price}
        </Col>

        <Col md={3}>
          <Row>
            <Col md={12}>
            HOURLY: {this.state.hourChange}%
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            DAILY: {this.state.dayChange}%
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            WEEKLY: {this.state.weekChange}%
            </Col>
          </Row>
        </Col>

        <Col md={3.25}>
          <div>
          Holdings + Check box
          </div>
          <div>
          Value: 10
          </div>
        </Col>








        </Row>
        </div>


    )
  }
}

export default AddedCoin