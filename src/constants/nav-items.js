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
  to: 'about',
  className: 'md-text-capitalize',
  leftIcon: <FontIcon>info</FontIcon>,
  primaryText: 'About',
}, {
  component: IndexLink,
  to: 'projects',
  className: 'md-text-capitalize',
  leftIcon: <FontIcon>computer</FontIcon>,
  primaryText: 'Projects',
  nestedItems: [{
    component: IndexLink,
    to: '/projects/blog',
    primaryText: 'Personal Blog',
  }, {
    component: IndexLink,
    to: '/projects/hunter',
    primaryText: 'Hunter\'s Website',
  }, {
    component: IndexLink,
    to: '/projects/alan',
    primaryText: "Alan's Website",
  }, {
    component: IndexLink,
    to: '/projects/webvr',
    primaryText: 'Web VR Experiments',
  }, {
    component: IndexLink,
    to: '/projects/oldportfolio',
    primaryText: 'Portfolio 1.0',
  }, {
    component: IndexLink,
    to: '/projects/robots',
    primaryText: 'Node Bots',
  },
  ],
}, {
  component: IndexLink,
  to: '/tech',
  className: 'md-text-capitalize',
  leftIcon: <FontIcon>build</FontIcon>,
  primaryText: 'Technologies',
}];
