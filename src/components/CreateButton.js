import React, { Component, PropTypes } from 'react';

class CreateButton extends Component {

  onClick() {
    console.log('Create tweet!');
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
