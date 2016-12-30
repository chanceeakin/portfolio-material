import React, { PureComponent, PropTypes } from 'react';

export default class Home extends PureComponent {
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
      <div className="md-grid">
        <div className="md-cell--12">
          <h1 className="md-text-container md-text-center">Projects!</h1>
        </div>
        <div className="md-cell md-cell--5">
          <h3 className="md-text-center">Projects go here</h3>
        </div>
      </div>
    );
  }
}
