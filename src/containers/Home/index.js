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
        <div className="md-card md-background--card md-cell md-cell--12 md-cell--6-tablet md-cell--2-phone">
          <FirstCard className="md-block-centered" />
        </div>
      </div>
    );
  }
}
