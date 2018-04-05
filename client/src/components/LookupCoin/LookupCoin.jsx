import React from 'react';
import axios from 'axios';

import reactstrap, { Row, Col, FormGroup, Label, Input } from 'reactstrap';

import UserSharesInput from '../UserSharesInput/UserSharesInput';

import './LookupCoin.css'

import LookupCoinLanding from '../LookupCoinLanding/LookupCoinLanding';
const NumberFormat = require('react-number-format');

class LookupCoin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.coinName,
      id: this.props.coinName,
      symbol: props.symbol,
      logo: props.logo,
      price: 0,
      nameLower: this.props.coinName,
      marketCap: 0,
      dayChange: 0,
      weekChange: 0,
      dominance: 0,
      volume: 0,
      totalCap: 0,
      finalUserInput: LookupCoinLanding.finalUserInput

    }
    this.getGlobalData = this.getGlobalData.bind(this);
  }

  componentDidMount() {
    this.getGlobalData();
    
    setInterval(this.getValues, 15000)

  }


  getGlobalData() {
    axios.get(`https://api.coinmarketcap.com/v1/global/`)
      .then(res => {
        let fetchedResults = res.data;
        console.log('RES:', fetchedResults.bitcoin_percentage_of_market_cap)
        const dominance = fetchedResults.bitcoin_percentage_of_market_cap
        const volume = fetchedResults.total_24h_volume_usd
        const totalCap = fetchedResults.total_market_cap_usd

        this.setState({
          dominance: dominance,
          volume: volume,
          totalCap: totalCap,
          finalUserInput: this.props
        })
      })
  }

  render() {
    const { name, symbol, price, marketCap, dayChange, weekChange, hourChange, rank, priceBTC, id  } = this.props.coinData;
    const { dominance, volume, totalCap} = this.state;
  
    return (
      
     {/*} <div className='main-container'>
        <Row>
          <div className='logo'>
            <img src={`https://coincheckup.com/images/coins/${id}.png`} height="64" width="64" />
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

          <Col md={1}>
            <Row>
              <div id='currentPrice'>
                <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
              </div>
            </Row>
          </Col>
              
          <Col md={3}>
            <Row>
              <div className='percentages'>
              <b>Market Cap: <NumberFormat value={marketCap} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </b>
                <br/>
                <b>HOUR: {hourChange}% </b>
                <b>DAY: {dayChange}% </b>
                <b>WEEK: {weekChange}% </b>
              </div>
            </Row>      
          </Col>

          <Col md={3}>
            <div className="netValue">
              {priceBTC}
            </div>
          </Col>

          <Col md={1}>
            <div id='rank'>
              <b>#{rank} </b> 
            </div>
          </Col>

        </Row>

      <br/>
      <br/>

      <div className='globalInfo'>
        <Row>
          <Col md={4}>
            Bitcoin % of market cap: 
              <NumberFormat value={dominance} displayType={'text'} thousandSeparator={true} suffix={'%'} /> 
          </Col>

            <Col md={4}>
              Total 24hr Volume:  
                <NumberFormat value={volume} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
            </Col>
            
            <Col md={4}>
              Total Market cap: 
              <NumberFormat value={totalCap} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
          </Col>
        </Row>
      </div>

    </div>*/},

    <div className='main-container'>
    <Row>

    <div className='logo'>
      <img src={`https://coincheckup.com/images/coins/${id}.png`} height="64" width="64" />
    </div>
      
    <Col md={2}>
      <Row>
        <Col md={12} id='coinName'>
          {name}
        </Col>
      </Row>
      <Row>
        <Col md={12} id='symbol'>
          ({symbol})
        </Col>
      </Row>
    </Col>

    <Col md={1.25}>
    <div className='percentages'>
          <div><b>HOUR:</b> <span id="pcRight">{hourChange}% </span></div>
          <div><b>DAY:</b> <span id="pcRight">{dayChange}% </span></div>
          <div><b>WEEK:</b> <span id="pcRight">{weekChange}% </span></div>
  </div>
    </Col>

    <Col md={3.5}>
      <Row>
        <div id='currentPrice'>
        <NumberFormat value={price} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={'$'} />
        </div>
      </Row>
    </Col>

    <Col md={2}>
    <div id='marketCap'>
    <a id='marketCapHeader'>Market Cap:</a>
    <br/>
    <NumberFormat id="currentMarketCap" value={marketCap} displayType={'text'} thousandSeparator={true} decimalScale={0} prefix={'$'} />
    </div>

    </Col>
    <Col md={1} style={divStyle}>
      <div id='rank'>
        #{rank}
      </div>
    </Col>

  </Row>
</div>

    )
  }
}

export default LookupCoin;