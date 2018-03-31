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

import Twitter from '../../components/Twitter/Twitter';
import Top5 from '../../components/Top5/Top5';
// import Form from '../../components/Form/Form';
import News from '../../components/News/News';
import Gainers from '../../components/Best+Worst/Gainers';
import Losers from '../../components/Best+Worst/Losers';


class Dashboard extends React.Component {
    render() {
        return (
            <div>
              <PanelHeader size='sm'/>
                <div className='content'>
                  <Row>
                    <Col md={8}>
                      <Top5 />
                    </Col>
                    <Col md={4}>
                      <Twitter />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Gainers />
                      <Losers />
                    </Col>
                    <Col md={4}>
                      <News />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                    </Col>
                  </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard
