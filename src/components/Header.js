import React, { Component, PropTypes } from 'react';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top header">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand">
              Lore Quickstart
            </div>
          </div>
        </div>
      </nav>
    );
  }

}

Header.propTypes = {};

export default Header;
