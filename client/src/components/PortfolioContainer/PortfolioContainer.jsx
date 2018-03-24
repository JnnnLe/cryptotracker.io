import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';

import { PanelHeader, FormInputs, PortfolioItemResults } from 'components';


class PortfolioContainer extends React.Component{
  render(){
    return (
        <div>
            <div className="content">
                <Row>
                    <Col md={12}>
                        <Card>
                            <CardHeader>
                                <h5 className="title">Your Portfolio</h5>
                                <Row>
                                    <Col md={2}>
                                        Name
                                    </Col>
                                    <Col md={3}>
                                        Price
                                    </Col>
                                    <Col md={3}>
                                        Change (24HR)
                                    </Col>
                                    <Col md={2}>
                                        Quantity Held
                                    </Col>
                                    <Col md={2}>
                                        Value        
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                              <PortfolioItemResults />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
}

PortfolioContainer.propTypes = {
    // Where the user to be redirected on clicking the avatar
    link: PropTypes.string,
    avatar: PropTypes.string,
    avatarAlt: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])
}

export default PortfolioContainer;
