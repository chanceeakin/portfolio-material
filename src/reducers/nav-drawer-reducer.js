import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles video related actions
// The idea is to return an updated copy of the state depending on the action type.
export default function (state = initialState.navDrawer, action) {
  switch (action.type) {
    case types.NAV_DRAWER:
      return { ...state, navDrawer: action.navDrawer };
    default:
      return state;
  }
}
