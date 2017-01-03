export default {
  path: 'hunter',
  getComponent(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, require('../../components/Projects/Hunter-site').default);
      });
    } else {
      cb(null, require('../../components/Projects/Hunter-site').default);
    }
  },
};
