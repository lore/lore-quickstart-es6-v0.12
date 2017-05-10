import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet';

class Feed extends Component {

  renderTweet(tweet) {
    return (
      <Tweet key={tweet.id} tweet={tweet} />
    );
  }

  render() {
    const tweets = this.props.tweets;

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

Feed.defaultProps = (function() {
  const tweet = {
    id: 1,
    cid: 'c1',
    state: 'RESOLVED',
    data: {
      id: 1,
      user: 1,
      text: 'Nothing can beat science!',
      createdAt: '2016-10-04T05:10:49.382Z'
    }
  };

  return {
    tweets: {
      state: 'RESOLVED',
      data: [tweet]
    }
  }
})();

export default lore.connect(function(getState, props){
  return {
    tweets: getState('tweet.find')
  }
})(Feed);
