import { combineReducers } from 'redux';
import login from './login';
import dict from './dict';
import menu from './menu';
import breadcrumb from './breadcrumb';
import tabs from './tabs';
import userCenter from './userCenter';
import sys from './sys';
import audit from './audit';
import cropManager from './cropManager';
import machineManager from './machineManager';
import jobTypeManager from './jobTypeManager';
import withdraw from './withdraw';
import jobDemandManager from './jobDemandManager';
import revenue from './revenue';
import order from './order';

export default combineReducers({
  login,
  dict,
  menu,
  breadcrumb,
  tabs,
  userCenter,
  sys,
  audit,
  cropManager,
  machineManager,
  jobTypeManager,
  withdraw,
  jobDemandManager,
  revenue,
  order,
});
