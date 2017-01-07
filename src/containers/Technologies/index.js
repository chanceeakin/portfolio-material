import React, { PureComponent, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Button from 'react-md/lib/Buttons';

import TomatoTest from '../../components/Technologies/tomato-test';
import './_technologies.scss';

export default class Home extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = { items: ['hello', 'world', 'click', 'me'] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text'),
    ]);
    this.setState({ items: newItems });
  }

  handleRemove() {
    console.log(this.state);
    const newItems = this.state.items.slice();
    newItems.splice(0, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item) => (
      <TomatoTest key={item} text={item} />
    ));
    return (
      <div className="md-grid md-cell--12 footer-push tech">
        <div className="md-cell--12">
          <h1 className="md-text-container md-text-center">Tech I use</h1>
          <Button flat label="Add Item" className="md-cell--right" secondary onClick={this.handleAdd} />
          <Button flat label="Remove Item" className="md-cell--right" secondary onClick={this.handleRemove} />
        </div>
        <ReactCSSTransitionGroup
          transitionName="techItem"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          component="div"
          className="md-cell--12 md-grid"
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
