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
            modal: false,
            user: {
                coins: [
                    {
                    name: 'Ethereum',
                    sharesHeld: 23
                    },
                    {
                    name: 'Substratum',
                    sharesHeld: 250
                    },
                    {
                    name: 'Dragonchain',
                    sharesHeld: 200
                    },
                    {
                    name: 'VIBE',
                    sharesHeld: 150
                    },
                    {
                    name: 'ICON',
                    sharesHeld: 20
                    },
                    {
                    name: 'TenX',
                    sharesHeld: 534
                    }
                ],
            }
        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    addCoin() {

    }


    toggleModal() {
        this.setState({modal:!this.state.modal})
    }
    render() {
        const user = this.state.user
        return (
            <div>
                <PanelHeader size='sm'
                />
                <div className='content'>
                    <Row>
                    <Col md={12}>
                    <br />
                    <AddCoinModal show={this.state.modal} toggleFn={this.toggleModal} />
                    <button onClick={this.toggleModal}>Add a Coin</button>
                    </Col>
                  </Row>
                  <Row>
                  <Col md={12}>
                  {user.coins.map(coin => <AddedCoin name={coin.name} shares={coin.shares} />)}
                  </Col>
                  </Row>
                </div>
            </div>
        );
    }
}

export default Portfolio;