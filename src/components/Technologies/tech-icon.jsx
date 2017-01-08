import React, { PureComponent, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TomatoTest extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    src: PropTypes.any,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { src } = this.props;
    return (
      <div style={{ opacity: 1 }} className="tomato md-cell--4 md-cell--8-tablet md-block-centered">
        <ReactCSSTransitionGroup
          transitionName="techItem"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={800}
          component="div"
          className="md-cell--12 md-grid"
        >
          <a href={src.href} className="tech-image md-block-centered">
            <img className="md-block-centered" style={{ padding: '12px', maxHeight: '200px', width: 'auto' }} src={src.src} role="presentation" />
          </a>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
