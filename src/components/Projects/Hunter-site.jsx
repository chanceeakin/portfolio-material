import React, { PureComponent, PropTypes } from 'react';

export default class Hunter extends PureComponent {
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
      <div className="md-grid md-cell md-cell--12 projects footer-push">
        <h1>Hunter</h1>
      </div>
    );
  }
}
