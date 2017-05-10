import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet';
import PayloadStates from '../constants/PayloadStates';
import InfiniteScrolling from '../decorators/InfiniteScrolling';
import LoadMoreButton from './LoadMoreButton';

class Feed extends Component {

  renderTweet(tweet) {
    return (
      <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
    );
  }

  render() {
    const pages = this.props.pages;
    const numberOfPages = pages.length;
    const firstPage = pages[0];
    const lastPage = pages[pages.length - 1];

    if (numberOfPages === 1 && lastPage.state === PayloadStates.FETCHING) {
      return (
        <h1 className="loading-text">
          Loading...
        </h1>
      );
    }

    const tweetListItems = _.flatten(pages.map(function(tweets) {
      return tweets.data.map(this.renderTweet);
    }.bind(this)));

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweetListItems}
        </ul>
        <LoadMoreButton
          lastPage={lastPage}
          onLoadMore={this.props.onLoadMore}
          nextPageMetaField="nextPage" />
      </div>
    );
  }

}

Feed.propTypes = {
  pages: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired
};

export default lore.connect(function(getState, props){
  return {
    tweets: getState('tweet.find', {
      pagination: {
        page: props.location.query.page || '1',
        populate: 'user'
      }
    })
  }
})(
InfiniteScrolling({ propName: 'tweets', modelName: 'tweet' })(
Feed
)
);
