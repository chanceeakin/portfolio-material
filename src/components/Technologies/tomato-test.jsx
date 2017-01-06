import React, { PureComponent, PropTypes } from 'react';

export default class TomatoTest extends PureComponent {
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
      <div style={{ height: '25vh', margin: '8px', background: 'tomato' }} className="md-cell--6">
        <h1 className="md-text-container md-text-center">Tomato Test!</h1>
      </div>
    );
  }
}
