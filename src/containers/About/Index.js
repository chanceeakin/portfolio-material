import React, { PureComponent, PropTypes } from 'react';
import Jumbotron from '../../components/About/Jumbotron';
import AboutCard from '../../components/About/about-card';
import WhatsNew from '../../components/About/whats-new';
import PortfolioCard from '../../components/About/portfolio-card';

import './_about.scss';

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
      <div className="md-grid md-cell md-cell--12 about">
        <Jumbotron />
        <div className="md-cell--6 md-cell--4-phone">
          <AboutCard />
        </div>
        <div className="md-cell--6 md-cell--4-phone">
          <WhatsNew />
        </div>
        <div className="md-cell--6 md-cell--4-phone md-block-centered">
          <PortfolioCard />
        </div>
      </div>
    );
  }
}
