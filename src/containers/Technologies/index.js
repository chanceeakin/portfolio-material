import React, { PureComponent, PropTypes } from 'react';
import Button from 'react-md/lib/Buttons';

import TomatoTest from '../../components/Technologies/tomato-test';

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
      <div className="md-grid footer-push tech">
        <div className="md-cell--12">
          <h1 className="md-text-container md-text-center">Tech I use</h1>
          <Button flat label="Find out More" className="md-cell--right" onClick={this.scroll} secondary />
        </div>

        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest />
        <TomatoTest id="please" />
      </div>
    );
  }
}
