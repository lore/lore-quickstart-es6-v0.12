import React, { Component, PropTypes } from 'react';

class CreateButton extends Component {

  onClick() {
    lore.dialog.show(() => {
      return (
        <h1>Dialog Placeholder</h1>
      );
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
