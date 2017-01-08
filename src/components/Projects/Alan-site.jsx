import React, { PureComponent, PropTypes } from 'react';
import FirstCard from './alan-site/first-card';

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
      <div className="md-grid md-cell md-cell--12 projects footer-push">
        <div className="md-cell md-cell--12">
          <h1 className="md-text-center">Cardon Geography</h1>
        </div>
        <div className="md-block-centered md-grid md-cell--12">
          <FirstCard />
        </div>
      </div>
    );
  }
}
