export default {
  path: 'about',
  getComponent(state, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, require('../containers/About').default);
      });
    } else {
      cb(null, require('../containers/About').default);
    }
  },
};
