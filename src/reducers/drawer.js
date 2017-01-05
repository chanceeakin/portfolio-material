import Drawer from 'react-md/lib/Drawers';
import UPDATE_DRAWER_TYPE from '../constants/action-types';

const { mobile, tablet, desktop } = Drawer.getCurrentMedia();
let drawerType;

if (mobile) {
  console.log('mobile');
  drawerType = 'temporary';
} else if (desktop) {
  console.log('desktop');
  drawerType = 'PERSISTENT';
} else if (tablet) {
  console.log('tablet');
  drawerType = 'PERSISTENT';
}

const initialState = { drawerType };

function updateDrawerType(state, { drawerType }) {
  console.log('fuck yes');
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
