import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Container
} from 'reactstrap';
import "./Home.css";

import graph from './imgs/graph-icon.png';
import portfolio from './imgs/portfolio-icon.png';
import news from './imgs/news-icon.png'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="imgContainer">
                    <Row id="gsBox">
                        <Col md={6} id="getStarted">
                            <h1>Want to make the most of your cryptocurrency portfolio?</h1>
                            <h3>Let's see how Cryptotracker.io can work for you...</h3>
                            <div className="button-1">
                                <div className="eff-1"></div>
                                <a href="/login"> Get Started </a>
                            </div>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </div>
                    <Row>
                        <Col md={12}>
                            <div className="bottom-title">What can Cryptotracker.io do for you?</div>
                        </Col>
                    </Row>
                    <Row id="bottomIcons">
                        <Col md={2}></Col>
                        <Col md={2}>
                            <div className="card">
                                <img className="card-img-top" src={graph}alt="graph icon" />
                                <div className="card-body">
                                    <p className="card-text">Graph your currencies value.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={2}>
                            <div className="card">
                                <img className="card-img-top" src={portfolio} alt="portfolio icon"/>
                                <div className="card-body">
                                    <p className="card-text">Easily manage your entire portfolio.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={2}>
                            <div className="card">
                                <img className="card-img-top" src={news} alt="news icon"/>
                                <div className="card-body">
                                    <p className="card-text">Stay up-to-date on the latest news and trending topics.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
            </div>
        );
    }
}

export default Home