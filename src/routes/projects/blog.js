export default {
  path: 'blog',
  getComponent(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, require('../../components/Projects/Blog').default);
      });
    } else {
      cb(null, require('../../components/Projects/Blog').default);
    }
  },
};
