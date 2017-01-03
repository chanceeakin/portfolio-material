import React, { PureComponent, PropTypes } from 'react';

export default class Blog extends PureComponent {
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
      <div className="md-grid md-cell md-cell--12 projects">
        <h1>Blog</h1>
      </div>
    );
  }
}
