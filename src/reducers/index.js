import Drawer from 'react-md/lib/Drawers';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import UPDATE_DRAWER_TYPE from '../constants/action-types';


// three booleans
const { mobile, tablet, desktop } = Drawer.getCurrentMedia();
// fourth boolean
let defaultMedia = 'mobile';
let drawerType = 'temporary';
if (desktop) {
  defaultMedia = 'desktop';
  drawerType = 'persistent';
} else if (tablet) {
  defaultMedia = 'tablet';
  drawerType = 'peristent';
}

const initialDrawerState = {
  mobile,
  tablet,
  desktop,
  defaultMedia,
  drawerType,
};

function updateDrawerType(state, { drawerType }) {
  if (state.drawerType === drawerType) {
    return state;
  }
  return Object.assign({}, state, { drawerType });
}

function drawer(state = initialDrawerState, action) {
  switch (action.type) {
    case UPDATE_DRAWER_TYPE:
      return updateDrawerType(state, action);
    default:
      return state;
  }
}

export default function createReducer(asyncReducers) {
  return combineReducers({
    media: (state = initialDrawerState) => state,
    routing,
    drawer,
    ...asyncReducers,
  });
}

export function injectReducer(store, name, reducer) {
  store.asyncReducers[name] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
