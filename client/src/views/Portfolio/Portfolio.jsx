import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Container
} from 'reactstrap';

import {
    PanelHeader, PortfolioItem, CryptoCard
} from 'components';


class Portfolio extends React.Component{
    render() {
        return (
            <div>
                <PanelHeader size='sm'
                />
                <div className='content'>
                  <Row>
                    <Col md={12}>
                      <CryptoCard
                      name="Bitcoin"
                      symbol="BTC"
                      /> 
                      <CryptoCard
                      name="Ethereum"
                      symbol="ETH"
                      />
                      <CryptoCard
                      name="Ripple"
                      symbol="XRP"
                      />
                      <CryptoCard
                      name="Litecoin"
                      symbol="LTC"
                      />
                      <CryptoCard
                      name="Cardano"
                      symbol="ADA"
                      />
                      <CryptoCard
                      name="IOTA"
                      symbol="IOTA"
                      />
                      <CryptoCard
                      name="Stellar"
                      symbol="XLM"
                      />
                      <CryptoCard
                      name="Substratum"
                      symbol="SUB"
                      />
                      <CryptoCard
                      name="EOS"
                      symbol="EOS"
                      />
                      <CryptoCard
                      name="NEO"
                      symbol="NEO"
                      />
                      <CryptoCard
                      name="NEM"
                      symbol="XEM"
                      />
                      <CryptoCard
                      name="Dragonchain"
                      symbol="DRGN"
                      />
                      <CryptoCard
                      name="ReddCoin"
                      symbol="RDD"
                      />
                      <CryptoCard
                      name="Cindicator"
                      symbol="CND"
                      />
                      <CryptoCard
                      name="SONM"
                      symbol="SNM"
                      />
                      <CryptoCard
                      name="DASH"
                      symbol="DASH"
                      />
                      <CryptoCard
                      name="QTUM"
                      symbol="QTUM"
                      />
                      <CryptoCard
                      name="ZCASH"
                      symbol="ZEC"
                      />
                      <CryptoCard
                      name="Bytom"
                      symbol="BTM"
                      />
                      <CryptoCard
                      name="Bancor"
                      symbol="BNT"
                      />
                      <CryptoCard
                      name="Metal"
                      symbol="MTL"
                      />
                      <CryptoCard
                      name="Siacoin"
                      symbol="SC"
                      />
                      <CryptoCard
                      name="Cube"
                      symbol="AUTO"
                      />
                      <CryptoCard
                      name="Vertcoin"
                      symbol="VTC"
                      />
                      <CryptoCard
                      name="VIBE"
                      symbol="VIBE"
                      />
                    </Col>
                  </Row>
                </div>
            </div>
        );
    }
}

export default Portfolio;