import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Jumbotron = () => (
  <ReactCSSTransitionGroup
    transitionName="swashIn"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={200}
    transitionAppear
    transitionAppearTimeout={800}
    component="div"
    className="md-cell--12 md-grid"
  >
    <h1 className="md-cell--12 md-text-center md-display-3 jumbo-text">I&#039;m Chance</h1>
  </ReactCSSTransitionGroup>
);

export default Jumbotron;
