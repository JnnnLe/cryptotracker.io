import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Container
} from 'reactstrap';

import {
    PanelHeader, PortfolioItem, CryptoCard, CryptoCardPortfolio, AddCoinModal, AddedCoin
} from 'components';

import BackGround from 'components/BackGround/BackGround'

import { getUserStuff } from '../../utils/api.jsx'


class Portfolio extends React.Component{
    // REMOVE THIS! BAD PRACTICE!
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            // user: {
            //     coins: [
            //         {
            //         name: 'Ethereum',
            //         sharesHeld: 23
            //         },
            //         {
            //         name: 'Stellar',
            //         sharesHeld: 32
            //         },
            //         {
            //         name: 'Substratum',
            //         sharesHeld: 250
            //         },
            //         {
            //         name: 'Dragonchain',
            //         sharesHeld: 200
            //         },
            //         {
            //         name: 'Storm',
            //         sharesHeld: 150
            //         },
            //         {
            //         name: 'EOS',
            //         sharesHeld: 20
            //         },
            //         {
            //         name: 'Dogecoin',
            //         sharesHeld: 534
            //         },
            //         {
            //         name: 'VIBE',
            //         sharesHeld: 534
            //         }
            //     ],
            // }
        }

        this.toggleModal = this.toggleModal.bind(this)
        this.triggerDataReload = this.triggerDataReload.bind(this)
    }

    componentDidMount() {
        this.getUserData()
    }

    triggerDataReload() {
        let state = {...this.state}
        state.modal = false
        Promise.resolve(this.setState(state))
        .then(() => this.getUserData())
    }

    getUserData() {
        let state = {...this.state}
        getUserStuff()
        .then(resp => {
            state.user = resp[0]
            this.setState(state)
        })
    }

    addCoin() {

    }
    

    getUserStuff() {
        fetch('/api/currentUser',{credentials:'include'})
        .then((resp) => resp.text().then(gimme => console.log(gimme)))
        
    }


    getUserCoins(){
        fetch('/getUser',{credentials:'include'})
        .then((resp) => resp.text().then(coin => console.log(coin)))
    }



    toggleModal() {
        this.setState({modal:!this.state.modal})
    }
    render() {
        const user = this.state.user
        console.log(this.state)
        console.log(user)
        return (
            <div>
                <PanelHeader size='sm'
                />
                <div className='content'>
                    <Row>
                    <Col md={12}>
                    <br />
                    <AddCoinModal show={this.state.modal} toggleFn={this.toggleModal} refreshData={this.triggerDataReload}/>
                    <button onClick={this.toggleModal}>Add a Coin</button>
                    <button onClick={this.getUserStuff}>GETMEUSERS</button>
                    <button onClick={this.getUserCoins}>GETCoins</button>
                    </Col>
                  </Row>
                  <Row>
                  <Col md={12}>
                    {user
                        ? user.currency.map(coin => <AddedCoin name={coin.coin_name} shares={coin.quantity} />)
                        : null
                    }
                  </Col>
                  </Row>
                </div>
            </div>
        );
    }
}

export default Portfolio;