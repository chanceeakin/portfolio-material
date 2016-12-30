import React, { PureComponent, PropTypes, cloneElement } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';

import { app } from '../../config';
import './styles.scss';
import navItems from '../../constants/routes';
import Footer from '../../common/Footer';

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
        drawerTitle="Contents"
        navItems={navItems}
        toolbarTitle="Chance Eakin, Software Developer"
        contentClassName="md-grid"
      >
        <Helmet {...app} />
        {children}
        <Footer />
      </NavigationDrawer>
    );
  }
}
