import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class Tweet extends Component {

  render() {
    const tweet = this.props.tweet;
    const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

    return (
      <li className="list-group-item tweet">
        <div className="image-container">
          <img
            className="img-circle avatar"
            src={'http://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png'} />
        </div>
        <div className="content-container">
          <h4 className="list-group-item-heading title">
            Nickname
          </h4>
          <h4 className="list-group-item-heading timestamp">
            {'- ' + timestamp}
          </h4>
          <p className="list-group-item-text text">
            {tweet.data.text}
          </p>
        </div>
      </li>
    );
  }

}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;
