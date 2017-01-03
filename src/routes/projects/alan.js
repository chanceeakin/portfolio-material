export default {
  path: 'alan',
  getComponent(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, require('../../components/Projects/Alan-site').default);
      });
    } else {
      cb(null, require('../../components/Projects/Alan-site').default);
    }
  },
};
