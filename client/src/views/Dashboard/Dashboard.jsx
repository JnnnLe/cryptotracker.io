import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    PanelHeader, PortfolioItem
} from 'components';

class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <PanelHeader
                    size="sm"
                />
                <div className="content">
                </div>
            </div>
        );
    }
}

export default Dashboard;
