import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Container
} from 'reactstrap';

import {
    PanelHeader, PortfolioItem, ConverterApp
} from 'components';

class Converter extends React.Component {
    render() {
        return (
            <div>
              <PanelHeader size='sm'/>
                <div className='content'>
                    <ConverterApp />
                </div>
            </div>
        );
    }
}

export default Converter
