import { combineReducers } from 'redux';
import bankConfig from './bankConfig';
import dictManager from './dictManager';

export default combineReducers({
  bankConfig,
  dictManager,
})