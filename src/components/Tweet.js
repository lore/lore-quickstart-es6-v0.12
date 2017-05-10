import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class Tweet extends Component {

  render() {
    const tweet = this.props.tweet;
    const user = this.props.user;
    const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

    return (
      <li className="list-group-item tweet">
        <div className="image-container">
          <img
            className="img-circle avatar"
            src={user.data.avatar} />
        </div>
        <div className="content-container">
          <h4 className="list-group-item-heading title">
            {user.data.nickname}
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
  tweet: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default lore.connect(function(getState, props){
  const tweet = props.tweet;

  return {
    user: getState('user.byId', {
      id: tweet.data.userId
    })
  };
})(Tweet);
