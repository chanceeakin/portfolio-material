import React, { PureComponent, PropTypes } from 'react';
import FirstCard from './old-portfolio/first-card';

export default class OldPortfolio extends PureComponent {
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
          <h1 className="md-text-center">Old Portfolio</h1>
        </div>
        <div className="md-block-centered md-grid md-cell--12">
          <FirstCard />
        </div>
      </div>
    );
  }
}
