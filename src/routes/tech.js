export default {
  path: 'tech',
  getComponent(state, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, require('../containers/Technologies').default);
      });
    } else {
      cb(null, require('../containers/Technologies').default);
    }
  },
};
