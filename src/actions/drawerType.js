import UPDATE_DRAWER_TYPE from '../constants/action-types';

function updateDrawerType(drawerType) {
  return { type: UPDATE_DRAWER_TYPE, drawerType };
}

export default updateDrawerType;
