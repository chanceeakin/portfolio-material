import React, { PureComponent, PropTypes } from 'react';

import './_projects.scss';

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
      <div className="md-cell--12 projects">
        <h1 className="md-text-center">Projects!</h1>
      </div>
    );
  }
}
