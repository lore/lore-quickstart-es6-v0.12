import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class CreateButton extends Component {

  onClick() {
    function createTweet(params) {
      lore.actions.tweet.create(_.extend(params, {
        userId: 1,
        createdAt: new Date().toISOString()
      }));
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
