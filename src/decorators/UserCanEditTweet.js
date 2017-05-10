import React, { PropTypes } from 'react';
import { AuthorizationGenerator } from 'lore-auth';

export default AuthorizationGenerator({
  wrapperDisplayName: 'UserCanEditTweet',

  propTypes: {
    tweet: PropTypes.object.isRequired
  },

  contextTypes: {
    user: React.PropTypes.object.isRequired
  },

  isAuthorized(storeState) {
    var tweet = this.props.tweet;
    var user = this.context.user;

    return tweet.data.userId === user.id;
  }
})
