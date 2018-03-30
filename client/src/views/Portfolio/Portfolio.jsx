import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Container
} from 'reactstrap';

import {
    PanelHeader, PortfolioItem, CryptoCard, CryptoCardPortfolio
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
                      <CryptoCardPortfolio
                      name="Bitcoin"
                      symbol="BTC"
                      />
                    </Col>
                  </Row>
                </div>
            </div>
        );
    }
}

export default Portfolio;
