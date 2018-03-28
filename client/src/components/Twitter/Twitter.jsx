import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Twitter extends Component {

  render() {
    return(
      <div>
        <a className="twitter-timeline" data-lang="en" data-width="350" data-height="400" data-theme="light" data-link-color="#2B7BB9" href="https://twitter.com/coindesk?ref_src=twsrc%5Etfw">Tweets by coindesk</a>
      </div>
    )
  }
}
  
export default Twitter;