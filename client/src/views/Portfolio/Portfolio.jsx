import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Container
} from 'reactstrap';

import {
    PanelHeader, PortfolioItem, CryptoCard, CryptoCardPortfolio, AddCoinModal, AddedCoin
} from 'components';


class Portfolio extends React.Component{
    // REMOVE THIS! BAD PRACTICE!
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }

        this.toggleModal = this.toggleModal.bind(this)
    }


    toggleModal() {
        this.setState({modal:!this.state.modal})
    }
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
                    <Row>
                    <Col md={12}>
                    <br />
                    <AddCoinModal show={this.state.modal} toggleFn={this.toggleModal} />
                    <button onClick={this.toggleModal}>Add a Coin</button>
                    </Col>
                  </Row>
                  <Row>
                  <Col md={12}>
                  <AddedCoin />
                  </Col>
                  </Row>
                </div>
            </div>
        );
    }
}

export default Portfolio;