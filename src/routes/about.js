function errorLoading(err) {
  console.error(`Dynamic page loading failed: ${err}`);
}

const loadModule = cb => Component => {
  cb(null, Component.default);
};

export default {
  path: 'about',
  getComponent(nextState, cb) {
    const renderRoute = loadModule(cb);
    System.import('containers/about').then(Component => {
      renderRoute(Component);
    }).catch(errorLoading);
  },
};
