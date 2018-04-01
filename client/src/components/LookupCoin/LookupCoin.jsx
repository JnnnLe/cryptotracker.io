import React from 'react';
import fetch from 'isomorphic-fetch';

import reactstrap, { Row, Col } from 'reactstrap';

import UserSharesInput from '../UserSharesInput/UserSharesInput';

import './LookupCoin.css'

class LookupCoin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'bitcoin',
      symbol: props.symbol,
      logo: props.logo,
      price: 0,
      nameLower: 'bitcoin',
      marketCap: 0,
      dayChange: 0,
      weekChange: 0,
      bitcoin_percentage_of_market_cap: 0,
      total_24h_volume_usd: 0,
      total_market_cap_usd: 0
      // shares: this.props.shares,
      // netValue: 0,
      // showInput: false
    }

    this.getValues = this.getValues.bind(this)
    this.getGlobalData = this.getGlobalData.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  componentDidMount() {
    this.getValues()
    this.getGlobalData();
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
    // let shares = newState.shares != undefined ? parseInt(newState.shares) : 0
    
    console.log('testing', newState.shares == true)
    newState.price = this.numberWithCommas(parseFloat(newState.price).toFixed(2))
    this.setState(newState)
  }

  formatNum(num) {
    return this.numberWithCommas(parseFloat(num).toFixed(2)) 
  }

  getValues() {
    console.log('Polling for new values!')
    const { name } = this.state
    fetch(`https://api.coinmarketcap.com/v1/ticker/${name}/`)
      .then (resp => resp.json())
      .then(json => {
        var fetchedResults = json;
        let state = {...this.state}
          // console.log('fetched res:', fetchedResults);
          state.name = fetchedResults[0].name,
          state.symbol = fetchedResults[0].symbol,
          state.price = this.formatNum(fetchedResults[0].price_usd),
          state.marketCap = this.formatNum(fetchedResults[0].market_cap_usd),
          state.hourChange = fetchedResults[0].percent_change_1h,
          state.dayChange = fetchedResults[0].percent_change_24h,
          state.weekChange = fetchedResults[0].percent_change_7d
          state.rank = fetchedResults[0].rank,
          state.priceBTC = fetchedResults[0].price_btc,
        
          this.setState(state)
          // // console.log(test[0])
          // console.log(this.state.name)
          // console.log(this.state.dayChange)
          // console.log(this.state.weekChange)
        })
  }

  getGlobalData() {
    fetch(`https://api.coinmarketcap.com/v1/global/`)
      .then(resp => resp.json())
      .then(json => {
        let fetchedResults = json;
        const dominance = fetchedResults.bitcoin_percentage_of_market_cap
        const volume = fetchedResults.total_24h_volume_usd
        const totalCap = fetchedResults.total_market_cap_usd

        this.setState({
          bitcoin_percentage_of_market_cap: dominance,
         total_24h_volume_usd: volume,
         total_market_cap_usd: totalCap
        })
        console.log('SATTTAEEE:', this.state)
      })
  }
      

  numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { name, symbol, price, marketCap, dayChange, weekChange, hourChange, rank, priceBTC } = this.state;
    // console.log('WORKING NAME:', {name})

    return (
      <div className='main-container'>
      <Row>

          <div className='logo'>
            // <img src={`https://coincheckup.com/images/coins/${this.state.nameLower}.png`} height="64" width="64" />
          </div>
          
        <Col md={2}>
          <Row>
            <Col md={12} id='coinName'>
              {name}
            </Col>
          </Row>
          <Row>
            <Col md={12} id='coinSymbol'>
              ({symbol})
            </Col>
          </Row>
        </Col>

        <Col md={4}>
        <Row>
        <div id='currentPrice'>
          ${price}
        </div>
        <div>
          Market Cap: ${marketCap} 
        </div>
        </Row>
        <Row>
        <div className='percentages'>
        HOUR: {hourChange}%
        DAY: {dayChange}%
        WEEK: {weekChange}%
        Rank: {rank}
        </div>
        </Row>
        </Col>
        <Col md={3}>

        </Col>
        <Col md={2}>
        <div className="netValue">
        {priceBTC}
          
        </div>
        </Col>








        </Row>
        </div>


    )
  }
}

export default LookupCoin