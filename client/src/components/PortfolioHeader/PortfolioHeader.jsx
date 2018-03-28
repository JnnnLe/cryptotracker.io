import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';


import { PanelHeader, FormInputs, PortfolioItemResults } from 'components';

import './PortfolioHeader.css'


class PortfolioHeader extends React.Component{
  render(){
    return (
        <div>
        <Card>
        <CardBody className="coin-div">
        <Row>
        <Col md={2} className="portfolioItem">
        <h1>Name</h1>
      </Col>
      <Col md={2} className="portfolioItem">
        <h1>Price</h1>
      </Col>
      <Col md={2} className="portfolioItem">
        <h1>Change (24hr)</h1>
      </Col>
      <Col md={2} className="portfolioItem">
        <h1>Market Cap</h1>
      </Col>
      <Col md={2} className="portfolioItem">
        <h1>Quantity</h1>
      </Col>
      <Col md={2} className="portfolioItem">
        <h1>Value</h1>
      </Col>
      </Row>
      </CardBody>
      </Card>
        </div>
    );
}
}

export default PortfolioHeader;
