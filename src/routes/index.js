import App from '../containers/App';

export default function createRoutes(/* store */) {
  return {
    path: '/',
    component: App,
    getIndexRoute(location, cb) {
      if (__CLIENT__) {
        require.ensure([], require => {
          cb(null, { component: require('../containers/Home').default });
        });
      } else {
        cb(null, { component: require('../containers/Home').default });
      }
    },
    getChildRoutes(location, cb) {
      if (__CLIENT__) {
        require.ensure([], require => {
          cb(null, [
            require('./about').default,
            require('./projects').default,
            require('./tech').default,
            require('./not-found').default,
          ]);
        });
      } else {
        cb(null, [
          require('./about').default,
          require('./projects').default,
          require('./tech').default,
          require('./not-found').default,
        ]);
      }
    },
  };
}
