import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Container
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    PanelHeader, PortfolioItem
} from 'components';

import Twitter from '../../components/Twitter';
import Top5 from '../../components/Top5';
import CoinUpdate from '../../components/CoinUpdate';
import Form from '../../components/Form/Form';

class Dashboard extends React.Component{
    render() {
        return (
            <div className='Container-fluid'>
                <PanelHeader size='sm'/>
                <div className='content'>
                  <Row>
                    <Col md={6}>
                      <Form/> 
                    </Col>
                    <Col md={4}>
                      <Twitter />
                    </Col>
                    <Col md={2}>
                      <Top5 />
                    </Col>
                  </Row>
                  <CoinUpdate />
                </div>
            </div>
        );
    }
}

export default Dashboard;
