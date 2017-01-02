import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import navDrawer from './nav-drawer-reducer';


export default combineReducers({
    navDrawer
});
