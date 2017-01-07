import React, { PureComponent, PropTypes } from 'react';
import { Link, Element, Events, scroll, scrollSpy } from 'react-scroll';
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

  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  render() {
    return (
      <div className="md-grid footer-push tech">
        <div className="md-cell--12">
          <h1 className="md-text-container md-text-center">Tech I use</h1>
          <Link activeClass="active" to="test1" spy smooth offset={50} duration={500}>
            <Button flat label="Find out More" className="md-cell--right" secondary />
          </Link>
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
        <Element name="test1" className="element">
          <TomatoTest />
        </Element>
        <TomatoTest />
        <TomatoTest id="please" />
      </div>
    );
  }
}
