import React, { Component, PropTypes } from 'react';
import UserCanEditTweet from '../decorators/UserCanEditTweet';

class EditLink extends Component {

  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit() {
    var tweet = this.props.tweet;

    function updateTweet(params) {
      lore.actions.tweet.update(tweet, params);
    }

    lore.dialog.show(function() {
      return lore.dialogs.tweet.update({
        model: tweet,
        onSubmit: updateTweet
      });
    });
  }

  render() {
    return (
      <a className="link" onClick={this.onEdit}>
        edit
      </a>
    );
  }

}

EditLink.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default UserCanEditTweet(EditLink);
