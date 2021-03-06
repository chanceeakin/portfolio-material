import React, { PureComponent, PropTypes } from 'react';

export default class NotFound extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="md-cell">
        <h1 className="md-text-container md-text-center">You done found my 404 page.</h1>
      </div>
    );
  }
}
