export default {
  path: 'oldportfolio',
  getComponent(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, require('../../components/Projects/Old-Portfolio').default);
      });
    } else {
      cb(null, require('../../components/Projects/Old-Portfolio').default);
    }
  },
};
