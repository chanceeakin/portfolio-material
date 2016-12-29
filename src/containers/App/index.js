import React, { PureComponent, PropTypes, cloneElement } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NewComp from '../../components/NewComp';

import { app } from '../../config';
import './styles.scss';

@connect(({ media }) => media)
export default class App extends PureComponent {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    tablet: PropTypes.bool.isRequired,
    desktop: PropTypes.bool.isRequired,
    defaultMedia: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      location: { pathname },
      defaultMedia,
    } = this.props;

    let { children } = this.props;
    if (children) {
      children = cloneElement(children, { key: pathname });
    }
    return (
      <NavigationDrawer
        defaultMedia={defaultMedia}
        drawerTitle="test 2"
        toolbarTitle="Hello, World!"
        contentClassName="md-grid"
      >
        <NewComp />
        <Helmet {...app} />
        {children}
      </NavigationDrawer>
    );
  }
}
