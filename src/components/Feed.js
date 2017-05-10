import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet';
import PayloadStates from '../constants/PayloadStates';

class Feed extends Component {

  renderTweet(tweet) {
    return (
      <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
    );
  }

  render() {
    const tweets = this.props.tweets;

    if (tweets.state === PayloadStates.FETCHING) {
      return (
        <h1 className="loading-text">
          Loading...
        </h1>
      )
    }

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweets.data.map(this.renderTweet)}
        </ul>
      </div>
    );
  }

}

Feed.propTypes ={
  tweets: PropTypes.object.isRequired
};

export default lore.connect(function(getState, props){
  return {
    tweets: getState('tweet.find')
  }
})(Feed);
