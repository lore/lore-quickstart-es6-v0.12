import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class CreateButton extends Component {

  onClick() {
    function createTweet(params) {
      lore.actions.tweet.create(params);
    }

    lore.dialog.show(function() {
      return lore.dialogs.tweet.create({
        onSubmit: createTweet
      });
    });
  }

  render () {
    return (
      <button
        type="button"
        className="btn btn-primary btn-lg create-button"
        onClick={this.onClick}>
        +
      </button>
    );
  }

}

export default CreateButton;
