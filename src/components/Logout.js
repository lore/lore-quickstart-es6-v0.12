import React, { Component, PropTypes } from 'react';
import auth from '../utils/auth';

class Logout extends Component {

  componentDidMount(){
    auth.deleteToken();
    this.props.router.push('/');
  }

  render() {
    return (
      <h1 className="loading-text">
        Logging out...
      </h1>
    );
  }
}

Logout.propTypes = {
  router: PropTypes.object.isRequired
};

export default Logout;
