export default {
  path: 'webvr',
  getComponent(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, require('../../components/Projects/Web-VR').default);
      });
    } else {
      cb(null, require('../../components/Projects/Web-VR').default);
    }
  },
};
