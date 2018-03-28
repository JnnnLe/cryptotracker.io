import React from 'react';
import {
    Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';

import { PanelHeader, PortfolioContainer } from 'components';


class CoinSearch extends React.Component{
    render(){
        return (
            <div>
                <PanelHeader size="sm"
                />
                <div className="content">
                <Row>
                <PortfolioContainer />
                </Row>
                </div>
                </div>

        );
    }
}

export default CoinSearch;