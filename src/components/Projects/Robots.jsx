import React, { PureComponent, PropTypes } from 'react';
import InstagramMedia from './robots/Instagram-Media';

export default class Robots extends PureComponent {
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
      <div className="md-grid md-cell--12 projects center-md-12 footer-push">
        <h1 className="md-cell--12 md-text-center">NodeBots</h1>
        <InstagramMedia />
      </div>
    );
  }
}
