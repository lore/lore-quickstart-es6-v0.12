import React, { Component, PropTypes } from 'react';

class Feed extends Component {

  render() {
    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {/* Tweets */}
        </ul>
      </div>
    );
  }

}

export default Feed;
