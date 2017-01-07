import React, { PureComponent, PropTypes } from 'react';

export default class TomatoTest extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    text: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <div style={{ height: '25vh', margin: '8px', background: 'tomato' }} className="tomato md-cell--6">
        <h1 className="md-text-center">{ text }</h1>
      </div>
    );
  }
}
