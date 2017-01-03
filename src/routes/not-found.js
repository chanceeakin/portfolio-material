function errorLoading(err) {
  console.error(`Dynamic page loading failed: ${err}`);
}

const loadModule = cb => Component => {
  cb(null, Component.default);
};

export default {
  path: '*',
  getComponent(state, cb) {
    System.import('../components/NotFound').then(loadModule(cb)).catch(errorLoading);
  },
};
