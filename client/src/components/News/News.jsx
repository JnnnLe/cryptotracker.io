import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import './News.css'

class News extends Component {

  constructor() {
    super();

    this.state = {
      articles: []
    },
      this.generateNewsFeed = this.generateNewsFeed.bind(this);
  }

  generateNews(i, articleName, link) {
    return (
      <div className='News' key={i}>
        <Row>
          <Col md={12}>
            <a href={ link } target='_blank'> { articleName } </a>
          </Col>
        </Row>
      </div>
    )
  }

  generateNewsFeed() {
    let newsjsx = [];
    Object.keys(this.state.articles).map((article, i) => {
      const articleName = this.state.articles[article].title;
      const link = this.state.articles[article].url
      const jsx = this.generateNews(i, articleName, link)
      newsjsx.push(jsx);
    })

    return newsjsx;
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything?q=crytocurrency&language=en&apiKey=90dcb619e6ce411f953e53b282297dee')
      .then(res => {
        const listOFArticles = res.data.articles;
        this.setState({ articles: listOFArticles })
      })   
  }

  render() {
    const news = this.generateNewsFeed()
    return (
      <div>
        <h1>Trending News</h1>
        {news}
      </div>
    )
  }
}

export default News; 