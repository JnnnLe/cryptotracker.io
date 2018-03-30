import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './UserSharesInput.css';

class UserSharesInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  renderShares() {
    if (this.props.showInput) {
      return (
        <div>
        <input type="number" value={this.props.shares} onChange={this.props.handleChange} />
      </div>
      )
    } else {
      return (
        <div>
        {this.props.shares}
        </div>
      )
    }
  }

  render() {
    return (
      // <div onClick={this.handleClick}>
        <div>
        <button type="submit" onClick={this.props.handleClick}>
        <img src={require('./edit.png')} height={16} width={16} />
        </button>
        <h1>User Shares:</h1>
        {this.renderShares()}
      </div>
    )
  }
}

export default UserSharesInput; 