import Drawer from 'react-md/lib/Drawers';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const { mobile, tablet, desktop } = Drawer.getCurrentMedia();
let defaultMedia = 'mobile';
let drawerType = 'temporary';
if (desktop) {
  defaultMedia = 'desktop';
  drawerType = 'PERSISTENT';
} else if (tablet) {
  defaultMedia = 'tablet';
  drawerType = 'PERSISTENT';
}

const initialDrawerState = {
  mobile,
  tablet,
  desktop,
  defaultMedia,
  drawerType,
};

export default function createReducer(asyncReducers) {
  return combineReducers({
    media: (state = initialDrawerState) => state,
    routing,
    ...asyncReducers,
  });
}

export function injectReducer(store, name, reducer) {
  store.asyncReducers[name] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
