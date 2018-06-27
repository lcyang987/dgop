import { combineReducers } from 'redux';
import menuManager from './menuManager';
import roleManager from './roleManager';
import userManager from './userManager';
import basic from './basic';

export default combineReducers({
  menuManager,
  roleManager,
  userManager,
  basic,
})