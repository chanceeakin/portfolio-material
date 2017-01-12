export default {
  path: 'projects',
  getIndexRoute(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, { component: require('containers/Projects').default });
      });
    } else {
      cb(null, { component: require('containers/Projects').default });
    }
  },
  getChildRoutes(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, [
          require('./projects/hunter').default,
          require('./projects/alan').default,
          require('./projects/blog').default,
          require('./projects/robots').default,
          require('./projects/webvr').default,
          require('./projects/old-portfolio').default,
        ]);
      });
    } else {
      cb(null, [
        require('./projects/hunter').default,
        require('./projects/alan').default,
        require('./projects/blog').default,
        require('./projects/robots').default,
        require('./projects/webvr').default,
        require('./projects/old-portfolio').default,
      ]);
    }
  },
};
