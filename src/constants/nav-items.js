import React from 'react';
import IndexLink from 'react-router/lib/IndexLink';
import FontIcon from 'react-md/lib/FontIcons';

export default [{
  component: IndexLink,
  to: '/',
  className: 'md-text-capitalize',
  leftIcon: <FontIcon>home</FontIcon>,
  primaryText: 'Home',
}, {
  component: IndexLink,
  to: '/about',
  className: 'md-text-capitalize',
  leftIcon: <FontIcon>info</FontIcon>,
  primaryText: 'About',
  nestedItems: [
    'love',
    'hate',
    'beer',
  ],
}, {
  component: IndexLink,
  to: '/projects',
  className: 'md-text-capitalize',
  leftIcon: <FontIcon>computer</FontIcon>,
  primaryText: 'Projects',
}, {
  component: IndexLink,
  to: '/tech',
  className: 'md-text-capitalize',
  leftIcon: <FontIcon>build</FontIcon>,
  primaryText: 'Technologies',
}];
