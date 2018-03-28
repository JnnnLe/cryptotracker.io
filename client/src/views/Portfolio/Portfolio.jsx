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
                      name="Litecoin"
                      symbol="LTC"
                      />
                      <CryptoCard
                      name="Substratum"
                      symbol="SUB"
                      />
                      <CryptoCard
                      name="Stellar"
                      symbol="XLM"
                      />
                    </Col>
                  </Row>
                </div>
            </div>
        );
    }
}

export default Portfolio;
