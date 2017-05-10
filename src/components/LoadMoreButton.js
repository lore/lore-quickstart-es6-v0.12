import React, { Component, PropTypes } from 'react';
import PayloadStates from '../constants/PayloadStates';

class LoadMoreButton extends Component {

  render() {
    const lastPage = this.props.lastPage;
    const nextPageMetaField = this.props.nextPageMetaField;

    if(lastPage.state === PayloadStates.FETCHING) {
      return (
        <div className="footer">
          <button className="btn btn-default btn-lg disabled">
            Loading...
          </button>
        </div>
      );
    }

    if (!lastPage.meta[nextPageMetaField]) {
      return (
        <div className="footer"></div>
      );
    }

    return (
      <div className="footer">
        <button className="btn btn-default btn-lg" onClick={this.props.onLoadMore}>
          Load More
        </button>
      </div>
    );
  }

}

LoadMoreButton.propTypes = {
  lastPage: PropTypes.object.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  nextPageMetaField: PropTypes.string.isRequired
};

export default LoadMoreButton;
