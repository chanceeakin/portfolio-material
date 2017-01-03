import React, { PureComponent, PropTypes } from 'react';
import './home-styles.scss';
import Jumbotron from '../../components/Home/Jumbotron';
import FirstCard from '../../components/Home/first-card';

export default class Home extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    navItems: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="md-grid home">
        <Jumbotron />
        <div className="md-block-centered md-cell--6">
          <FirstCard />
        </div>
        <h2 className="md-cell md-cell--12 paper-title md-text-center md-display-2">I make things</h2>
      </div>
    );
  }
}
