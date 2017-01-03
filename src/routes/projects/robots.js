export default {
  path: 'robots',
  getComponent(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, require('../../components/Projects/Robots').default);
      });
    } else {
      cb(null, require('../../components/Projects/Robots').default);
    }
  },
};
