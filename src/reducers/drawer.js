import Drawer from 'react-md/lib/Drawers';
import UPDATE_DRAWER_TYPE from '../constants/action-types';

const { mobile, tablet, desktop } = Drawer.getCurrentMedia();
let drawerType;

if (mobile) {
  drawerType = 'temporary';
} else if (desktop) {
  drawerType = 'PERSISTENT';
} else if (tablet) {
  drawerType = 'PERSISTENT';
}

const initialState = { drawerType };

function updateDrawerType(state, { drawerType }) {
  if (state.drawerType === drawerType) {
    return state;
  }
  return Object.assign({}, state, { drawerType });
}

export default function drawer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DRAWER_TYPE:
      return updateDrawerType(state, action);
    default:
      return state;
  }
}
