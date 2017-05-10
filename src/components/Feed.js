import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet';
import PayloadStates from '../constants/PayloadStates';
import { Link } from 'react-router';

class Feed extends Component {

  renderTweet(tweet) {
    return (
      <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
    );
  }

  renderPaginationLink(page, currentPage) {
    return (
      <li key={page} className={currentPage === String(page) ? 'active' : ''}>
        <Link to={{ pathname: '/', query: { page: page } }}>
          {page}
        </Link>
      </li>
    );
  }

  render() {
    const tweets = this.props.tweets;
    const currentPage = tweets.query.pagination.page;
    const paginationLinks = [];

    if (tweets.state === PayloadStates.FETCHING) {
      return (
        <h1 className="loading-text">
          Loading...
        </h1>
      )
    }

    // calculate the number of pagination links from our metadata, then
    // generate an array of pagination links
    let numberOfPages = Math.ceil(tweets.meta.totalCount / tweets.meta.perPage);
    for (var pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
      paginationLinks.push(this.renderPaginationLink(pageNumber, currentPage));
    }

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweets.data.map(this.renderTweet)}
        </ul>
        <nav>
          <ul className="pagination">
            {paginationLinks}
          </ul>
        </nav>
      </div>
    );
  }

}

Feed.propTypes ={
  tweets: PropTypes.object.isRequired
};

export default lore.connect(function(getState, props){
  return {
    tweets: getState('tweet.find', {
      pagination: {
        page: props.location.query.page || '1'
      }
    })
  }
})(Feed);
