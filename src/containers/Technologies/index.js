import React, { PureComponent, PropTypes } from 'react';
import Button from 'react-md/lib/Buttons';

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
          <Button
            flat
            label="Add Item"
            className="md-cell--right"
            secondary
          />
        </div>
      </div>
    );
  }
}
