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
import Top5 from '../../components/Top5/Top5';

import Form from '../../components/Form/Form';

class Dashboard extends React.Component{
    render() {
        return (
            <div>
                <PanelHeader size='sm'
                />
                <div className='content'>
                  <Row>
                    <Col md={6}>
                      <Form/> 
                    </Col>
                    <Col md={6}>
                      <Twitter />
                    </Col>
                  </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
