import React, { PureComponent, PropTypes } from 'react';
import NewComp from '../../components/NewComp';

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
      <div className="md-cell--12">
        <div className="">
          <h1 className="md-text-container md-text-center">About</h1>
        </div>
        <div className="md-cell md-cell--5">
          <h3 className="md-text-center">Moar Tests</h3>
          <NewComp />
        </div>
      </div>
    );
  }
}
