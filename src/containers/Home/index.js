import React, { PureComponent, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Jumbotron from '../../components/Home/Jumbotron';
import SecondCard from '../../components/Home/second-card';
import './home-styles.scss';

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
      <div className="md-grid home footer-push">
        <Jumbotron />
        <ReactCSSTransitionGroup
          transitionName="swashIn"
          transitionLeave
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}
          transitionAppear
          transitionAppearTimeout={800}
          component="div"
          className="md-cell--6 md-cell--4-phone md-block-centered md-cell--middle"
        >
          <SecondCard />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="swashIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}
          transitionAppear
          transitionAppearTimeout={800}
          component="div"
          className="md-cell--12 md-grid test"
        >
          <h2 className="md-cell md-cell--12 paper-title md-text-center md-display-2">I make things</h2>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
