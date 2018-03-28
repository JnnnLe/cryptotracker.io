import React from 'react';

import { Top5 } from 'components';

class PanelHeader extends React.Component{
    render(){
        return (
            
            <div className={"panel-header " + (this.props.size !== undefined ? "panel-header-"+ this.props.size:"")}>
                {this.props.content}
            </div>
        );
    }
}

export default PanelHeader;
