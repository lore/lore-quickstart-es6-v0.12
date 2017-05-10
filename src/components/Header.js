import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top header">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              Lore Quickstart
            </Link>
          </div>
        </div>
      </nav>
    );
  }

}

Header.propTypes = {};

export default Header;
