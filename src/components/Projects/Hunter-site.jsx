import React, { PureComponent, PropTypes } from 'react';
import FirstCard from './hunter/first-card';

export default class AlanSite extends PureComponent {
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
      <div className="md-grid md-cell md-cell--12 projects center-md-12 footer-push">
        <div className="md-cell md-cell--12">
          <h1 className="md-text-center">Hunter Enoch&#039;s Website</h1>
        </div>
        <div className="md-block-centered md-grid md-cell--12">
          <FirstCard />
        </div>
      </div>
    );
  }
}
