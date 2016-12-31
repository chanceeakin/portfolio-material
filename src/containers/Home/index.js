import React, { PureComponent, PropTypes } from 'react';
import './home-styles.scss';
import Jumbotron from '../../components/Home/Jumbotron';
import LeftCard from '../../components/Home/left-card';
import RightCard from '../../components/Home/right-card';

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
      <div className="md-grid">
        <div className="md-cell--12">
          <Jumbotron />
        </div>
        <div className="md-cell--4">
          <LeftCard />
        </div>
        <div className="md-cell--8">
          <RightCard />
        </div>
      </div>
    );
  }
}
