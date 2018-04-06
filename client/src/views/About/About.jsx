import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, CardText, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Container
} from 'reactstrap';
import "./About.css";

import jennifer from './imgs/jennifer.jpeg';
import max from './imgs/max.png';
import himaja from './imgs/himaja.png';
import jordan from './imgs/jordan.jpeg';

class About extends React.Component {
    render() {
        return (
            <div>
                <div className="imgContainer">
                    <Row id="gsBox">
                        <Col md={6} id="getStarted">
                            <h5>Meet the Team</h5>
                            <h3></h3>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </div>

                <Row>
                    <div class="col-12">
                        <div class="bottom-title">Learn more about the Developers</div>
                    </div>
                </Row>
                <Row>
                    <Col md={3}>
                        <a href="https://github.com/JnnnLe">
                            <div class="card" id="jennCard">
                                <img class="card-img-top" src={jennifer} alt="Jennifer Lê Photo" />
                                <div class="card-body">
                                    <p class="card-text">Jennifer Lê</p>
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col md={3}>
                        <a href="https://github.com/maxjowett">
                            <div class="card">
                                <img class="card-img-top" src={max} alt="Max Jowett Photo" />
                                <div class="card-body">
                                    <p class="card-text">Max Jowett</p>
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col md={3}>
                        <a href="https://github.com/himajagattu">
                            <div class="card">
                                <img class="card-img-top" src={himaja} alt="Himaja Gattu Photo" />
                                <div class="card-body">
                                    <p class="card-text">Himaja Gattu</p>
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col md={3}>
                        <a href="https://github.com/jketring6">
                            <div class="card">
                                <img class="card-img-top" src={jordan} alt="Jordan Ketring Photo" />
                                <div class="card-body">
                                    <p class="card-text">Jordan Ketring</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;