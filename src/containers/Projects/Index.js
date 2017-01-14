import React, { PureComponent, PropTypes } from 'react';
import InfoCard from '../../components/Projects/Info-Card';

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

// render
  render() {
    return (
      <div className="md-grid md-cell--12 projects footer-push center-md-12">
        <div className="md-cell--12">
          <h1 className="md-text-center">Projects!</h1>
        </div>
        <div className="md-cell--9 md-block-centered">
          <InfoCard />
        </div>
      </div>
    );
  }
}
