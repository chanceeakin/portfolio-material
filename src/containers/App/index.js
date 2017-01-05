import React, { PureComponent, PropTypes, cloneElement } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import updateDrawerType from '../../actions/drawerType';

import { app } from '../../config';
import './styles.scss';
import navItems from '../../constants/nav-items';
import Footer from '../../common/Footer';

@connect(({ media }) => media, { updateDrawerType })
export default class App extends PureComponent {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    tablet: PropTypes.bool.isRequired,
    desktop: PropTypes.bool.isRequired,
    defaultMedia: PropTypes.string.isRequired,
    drawerType: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    children: PropTypes.node,
    updateDrawerType: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.updateDrawerType();
  }

  componentWillUnmount() {
    this.props.updateDrawerType(undefined);
  }

  render() {
    const {
      location: { pathname },
      defaultMedia,
      drawerType,
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
        drawerType={drawerType}
        onChange={this.props.updateDrawerType}
      >
        <Helmet {...app} />
        {children}
        <Footer />
      </NavigationDrawer>
    );
  }
}
